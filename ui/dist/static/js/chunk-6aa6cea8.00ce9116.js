(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6aa6cea8"],{"2c0c":function(e,t,n){},"43df":function(e,t,n){},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return V}));var c,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),"undefined"!==typeof e.addFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.addFunc()}}},[n("svg-icon",{attrs:{"icon-class":"add"}})],1):e._e(),"undefined"!==typeof e.saveFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.saveFunc()}}},[n("svg-icon",{attrs:{"icon-class":"save"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],o=(n("b0c0"),n("aad4")),s=n("5c96"),r={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},addFunc:{type:Function,required:!1,default:void 0},saveFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(c&&clearTimeout(c),c=setTimeout((function(){e.nameFunc(e.nameInput),c=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(o["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):s["Message"].error("获取集群异常，请刷新重试")}}},u=r,l=(n("e69f"),n("dda3"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,"7321a090",null),f=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],v=(n("99af"),n("abb2"),n("fcf3")),p=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new v["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new p["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",c="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(c+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else s["Message"].error("获取POD参数异常，请刷新重试");else s["Message"].error("获取命名空间参数异常，请刷新重试");else s["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,k=Object(l["a"])(y,m,h,!1,null,null,null),w=k.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},S=[],O=n("5f87"),F={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(O["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else s["Message"].error("获取POD参数异常，请刷新重试");else s["Message"].error("获取命名空间参数异常，请刷新重试");else s["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},x=F,A=(n("ca6d"),Object(l["a"])(x,_,S,!1,null,"19556679",null)),j=A.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},E=[],M=n("56b3"),D=n.n(M);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var $={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=D.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},q=$,N=(n("db62"),Object(l["a"])(q,C,E,!1,null,"5bb854da",null)),V=N.exports},"62b1":function(e,t,n){},"64d3":function(e,t,n){},8438:function(e,t,n){"use strict";var c=n("62b1"),a=n.n(c);a.a},a15b:function(e,t,n){"use strict";var c=n("23e7"),a=n("44ad"),i=n("fc6a"),o=n("a640"),s=[].join,r=a!=Object,u=o("join",",");c({target:"Array",proto:!0,forced:r||!u},{join:function(e){return s.call(i(this),void 0===e?",":e)}})},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("99af");var c=n("b775");function a(e){return Object(c["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(c["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b116:function(e,t,n){},b92f:function(e,t,n){},ca6d:function(e,t,n){"use strict";var c=n("64d3"),a=n.n(c);a.a},ca87:function(e,t,n){"use strict";var c=n("b116"),a=n.n(c);a.a},db62:function(e,t,n){"use strict";var c=n("43df"),a=n.n(c);a.a},dda3:function(e,t,n){"use strict";var c=n("b92f"),a=n.n(c);a.a},e588:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteServiceAccounts,editFunc:e.getServiceAccountYaml}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.serviceaccount.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(e.serviceaccount.created))])]),n("el-form-item",{attrs:{label:"命名空间"}},[n("span",[e._v(e._s(e.serviceaccount.namespace))])]),n("el-form-item",{attrs:{label:"Secrets"}},[n("span",[e._v(e._s(e.getSecretsName(e.serviceaccount.secrets)))])]),n("el-form-item",{attrs:{label:"标签"}},[e.serviceaccount.labels?e._l(e.serviceaccount.labels,(function(t,c){return[n("span",{key:c,staticClass:"back-class"},[e._v(e._s(c)+": "+e._s(t)+" "),n("br")])]})):n("span",[e._v("—")])],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateServiceAccount()}}},[e._v("确 定")])],1)],1)],1)],1)},a=[],i=(n("a15b"),n("b0c0"),n("b85c")),o=n("61b2"),s=n("f02d"),r=n("5c96"),u={name:"ServiceAccountDetail",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originServiceAccount:void 0}},created:function(){this.fetchData()},watch:{serviceaccountWatch:function(e){if(e&&this.originServiceAccount){var t=e.resource.metadata.uid;if(t!==this.serviceaccount.uid)return;var n=e.resource.metadata.resourceVersion;this.serviceaccount.resource_version<n&&(this.originServiceAccount=e.resource)}}},computed:{titleName:function(){return["ServiceAccounts",this.serviceaccountName]},serviceaccountName:function(){return this.$route.params?this.$route.params.serviceaccountName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},serviceaccount:function(){var e=this.buildServiceAccount(this.originServiceAccount);return e},cluster:function(){return this.$store.state.cluster},serviceaccountWatch:function(){return this.$store.getters["ws/serviceaccountsWatch"]}},methods:{fetchData:function(){var e=this;this.originServiceAccount=null,this.loading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.serviceaccountName?void Object(s["b"])(t,this.namespace,this.serviceaccountName).then((function(t){e.loading=!1,e.originServiceAccount=t.data})).catch((function(){e.loading=!1})):(r["Message"].error("获取ServiceAccount名称参数异常，请刷新重试"),void(this.loading=!1)):(r["Message"].error("获取命名空间参数异常，请刷新重试"),void(this.loading=!1)):(r["Message"].error("获取集群参数异常，请刷新重试"),void(this.loading=!1))},buildServiceAccount:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,resource_version:e.metadata.resourceVersion,secrets:e.secrets,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteServiceAccounts:function(){var e=this.$store.state.cluster;if(e){this.serviceaccount||r["Message"].error("获取ServiceAccount参数异常，请刷新重试");var t=[{namespace:this.serviceaccount.namespace,name:this.serviceaccount.name}],n={resources:t};Object(s["a"])(e,n).then((function(){r["Message"].success("删除成功")})).catch((function(){}))}else r["Message"].error("获取集群参数异常，请刷新重试")},getServiceAccountYaml:function(){var e=this;if(this.serviceaccount){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(s["b"])(t,this.serviceaccount.namespace,this.serviceaccount.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取ServiceAccount参数异常，请刷新重试")},updateServiceAccount:function(){if(this.serviceaccount){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(s["d"])(e,this.serviceaccount.namespace,this.serviceaccount.name,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){}))):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取ServiceAccount参数异常，请刷新重试")},getSecretsName:function(e){if(!e)return"";var t,n=[],c=Object(i["a"])(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push(a.name)}}catch(o){c.e(o)}finally{c.f()}return n.join(",")}}},l=u,d=(n("ca87"),n("8438"),n("2877")),f=Object(d["a"])(l,c,a,!1,null,"450f90af",null);t["default"]=f.exports},e69f:function(e,t,n){"use strict";var c=n("2c0c"),a=n.n(c);a.a},f02d:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s}));n("99af");var c=n("b775");function a(e){return Object(c["a"])({url:"serviceaccount/".concat(e),method:"get"})}function i(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(c["a"])({url:"serviceaccount/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:a}})}function o(e,t){return Object(c["a"])({url:"serviceaccount/".concat(e,"/delete"),method:"post",data:t})}function s(e,t,n,a){return Object(c["a"])({url:"serviceaccount/".concat(e,"/update/").concat(t,"/").concat(n),method:"post",data:{yaml:a}})}}}]);