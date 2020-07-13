import logging
import uuid

from models.token import Token
from models.user import User
from utils import tools, CommonReturn, Code

logger = logging.getLogger(__name__)


class Auth:

    @classmethod
    def login(cls, username, password):
        user = User.get(username)
        encrypted_pwd = tools.encrypt(password)
        if user.password != encrypted_pwd:
            return CommonReturn(Code.AUTH_ERROR, 'Password is not correct')
        token = uuid.uuid4().hex
        Token(token=token, username=username).save(expire=1800, add_sets=False)
        return CommonReturn(Code.SUCCESS, data={'token': token})

    @classmethod
    def authenticate(cls, token):
        try:
            token_obj = Token.get(token)
        except Exception as exc:
            logger.error('get token %s error: %s' % (token, exc), exc_info=True)
            return CommonReturn(Code.AUTH_ERROR, 'Token is not valid')
        username = token_obj.username
        try:
            user = User.get(username)
        except Exception as exc:
            logger.error('get user %s error: %s' % (username, exc), exc_info=True)
            return CommonReturn(Code.AUTH_ERROR, 'Token user is not exists')
        return CommonReturn(Code.SUCCESS, data=user)