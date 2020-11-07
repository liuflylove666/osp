package ws_views

import (
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"github.com/openspacee/osp/pkg/kube_resource"
	"github.com/openspacee/osp/pkg/model"
	"github.com/openspacee/osp/pkg/redis"
	kubewebsocket "github.com/openspacee/osp/pkg/websockets"
	"k8s.io/klog"
	"net/http"
)

type ApiWs struct {
	redisOptions *redis.Options
	models       *model.Models
	*kube_resource.KubeResources
}

func NewApiWs(op *redis.Options, models *model.Models, kr *kube_resource.KubeResources) *ApiWs {
	return &ApiWs{
		redisOptions:  op,
		models:        models,
		KubeResources: kr,
	}
}

func (a *ApiWs) Connect(c *gin.Context) {
	upGrader := &websocket.Upgrader{}
	upGrader.CheckOrigin = func(r *http.Request) bool { return true }
	ws, err := upGrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		klog.Errorf("upgrader agent conn error: %s", err)
		return
	}
	token := c.GetHeader("token")
	klog.Info(token)

	apiWebsocket := kubewebsocket.NewApiWebsocket(ws, a.redisOptions, a.KubeResources)
	go apiWebsocket.Consume()
	klog.Info("cluster api connect finish")
}
