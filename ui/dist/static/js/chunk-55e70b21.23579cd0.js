(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e70b21"],{"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n("b775");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o={};return t&&(o["uid"]=t),n&&(o["kind"]=n),s&&(o["namespace"]=s),c&&(o["name"]=c),Object(a["a"])({url:"event/".concat(e),method:"get",params:o})}function s(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"43df":function(e,t,n){},"5f9b":function(e,t,n){"use strict";var a=n("a1fa"),c=n.n(a);c.a},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return A})),n.d(t,"d",(function(){return L}));var a,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},s=[],o=(n("b0c0"),n("aad4")),i=n("5c96"),r={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){e.nameFunc(e.nameInput),a=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(o["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):i["Message"].error("获取集群异常，请刷新重试")}}},u=r,l=(n("a6e1"),n("dda3"),n("2877")),d=Object(l["a"])(u,c,s,!1,null,"3a53f646",null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},v=[],h=(n("99af"),n("abb2"),n("fcf3")),p=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new h["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new p["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",a="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(a+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else i["Message"].error("获取POD参数异常，请刷新重试");else i["Message"].error("获取命名空间参数异常，请刷新重试");else i["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,w=Object(l["a"])(y,f,v,!1,null,null,null),k=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},S=[],O=n("5f87"),j={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(O["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else i["Message"].error("获取POD参数异常，请刷新重试");else i["Message"].error("获取命名空间参数异常，请刷新重试");else i["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},E=j,x=(n("ca6d"),Object(l["a"])(E,_,S,!1,null,"19556679",null)),A=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},F=[],M=n("56b3"),$=n.n(M);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var D={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=$.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},N=D,V=(n("db62"),Object(l["a"])(N,C,F,!1,null,"5bb854da",null)),L=V.exports},"62b1":function(e,t,n){},"64d3":function(e,t,n){},8438:function(e,t,n){"use strict";var a=n("62b1"),c=n.n(a);c.a},9191:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("99af");var a=n("b775");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={};return t&&(c["namespace"]=t),n&&(c["name"]=n),Object(a["a"])({url:"endpoints/".concat(e),method:"get",params:c})}},a15b:function(e,t,n){"use strict";var a=n("23e7"),c=n("44ad"),s=n("fc6a"),o=n("a640"),i=[].join,r=c!=Object,u=o("join",",");a({target:"Array",proto:!0,forced:r||!u},{join:function(e){return i.call(s(this),void 0===e?",":e)}})},a1fa:function(e,t,n){},a6e1:function(e,t,n){"use strict";var a=n("ab7f"),c=n.n(a);c.a},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));n("99af");var a=n("b775");function c(e){return Object(a["a"])({url:"namespace/".concat(e),method:"get"})}function s(e,t,n){return Object(a["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},ab7f:function(e,t,n){},b92f:function(e,t,n){},ca6d:function(e,t,n){"use strict";var a=n("64d3"),c=n.n(a);c.a},db62:function(e,t,n){"use strict";var a=n("43df"),c=n.n(a);c.a},dda3:function(e,t,n){"use strict";var a=n("b92f"),c=n.n(a);c.a},e588:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteServiceAccounts,editFunc:e.getServiceAccountYaml}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.serviceaccount.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(e.serviceaccount.created))])]),n("el-form-item",{attrs:{label:"命名空间"}},[n("span",[e._v(e._s(e.serviceaccount.namespace))])]),n("el-form-item",{attrs:{label:"Secrets"}},[n("span",[e._v(e._s(e.getSecretsName(e.serviceaccount.secrets)))])]),n("el-form-item",{attrs:{label:"标签"}},[e.serviceaccount.labels?e._l(e.serviceaccount.labels,(function(t,a){return[n("span",{key:a,staticClass:"back-class"},[e._v(e._s(a)+": "+e._s(t)+" "),n("br")])]})):n("span",[e._v("—")])],2)],1),n("el-collapse",{staticClass:"podCollapse",attrs:{value:["secrets","events"]}},[n("el-collapse-item",{attrs:{title:"Events",name:"events"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[e._v("Events")])]),n("div",{staticClass:"msgClass"},[e.serviceaccountEvents&&e.serviceaccountEvents.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.serviceaccountEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}],null,!1,548534711)}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}],null,!1,2501580055)}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):n("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateServiceAccount()}}},[e._v("确 定")])],1)],1)],1)],1)},c=[],s=(n("4de4"),n("a15b"),n("b0c0"),n("b85c")),o=n("61b2"),i=n("f02d"),r=n("9191"),u=n("0905"),l=n("5c96"),d={name:"ServiceAccountDetail",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originServiceAccount:void 0,endpoints:[],selectContainer:"",selectPodName:"",serviceaccountEvents:[],eventLoading:!0}},created:function(){this.fetchData()},watch:{serviceaccountWatch:function(e){if(e&&this.originServiceAccount){var t=e.resource.metadata.uid;if(t!==this.serviceaccount.uid)return;var n=e.resource.metadata.resourceVersion;this.serviceaccount.resource_version<n&&(this.originServiceAccount=e.resource)}},eventWatch:function(e){if(e&&this.originServiceAccount){var t=e.resource;if(t.involvedObject.namespace!==this.serviceaccount.namespace)return;if(t.involvedObject.uid!==this.serviceaccount.uid)return;var n=e.resource.metadata.uid;if("add"===e.event)this.serviceaccountEvents.push(Object(u["a"])(t));else if("update"==e.event){var a=e.resource.metadata.resourceVersion;for(var c in this.serviceaccountEvents){var s=this.serviceaccountEvents[c];if(s.uid===n){if(s.resource_version<a){var o=Object(u["a"])(e.resource);this.$set(this.serviceaccountEvents,c,o)}break}}}else"delete"===e.event&&(this.serviceaccountEvents=this.serviceaccountEvents.filter((function(e){var t=e.uid;return t!==n})))}}},computed:{titleName:function(){return["ServiceAccounts",this.serviceaccountName]},serviceaccountName:function(){return this.$route.params?this.$route.params.serviceaccountName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},serviceaccount:function(){var e=this.buildServiceAccount(this.originServiceAccount);return e},cluster:function(){return this.$store.state.cluster},serviceaccountWatch:function(){return this.$store.getters["ws/serviceaccountsWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]}},methods:{fetchData:function(){var e=this;this.originServiceAccount=null,this.serviceaccountEvents=[],this.loading=!0,this.eventLoading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.serviceaccountName?void Object(i["b"])(t,this.namespace,this.serviceaccountName).then((function(n){e.originServiceAccount=n.data,Object(r["a"])(t,e.namespace,e.serviceaccountName).then((function(t){e.loading=!1,e.endpoints=t.data})).catch((function(){e.loading=!1})),Object(u["b"])(t,e.originServiceAccount.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.serviceaccountEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1,e.eventLoading=!1})):(l["Message"].error("获取ServiceAccount名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(l["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(l["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},buildServiceAccount:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,resource_version:e.metadata.resourceVersion,secrets:e.secrets,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},deleteServiceAccounts:function(){var e=this.$store.state.cluster;if(e){this.serviceaccount||l["Message"].error("获取ServiceAccount参数异常，请刷新重试");var t=[{namespace:this.serviceaccount.namespace,name:this.serviceaccount.name}],n={resources:t};Object(i["a"])(e,n).then((function(){l["Message"].success("删除成功")})).catch((function(){}))}else l["Message"].error("获取集群参数异常，请刷新重试")},getServiceAccountYaml:function(){var e=this;if(this.serviceaccount){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["b"])(t,this.serviceaccount.namespace,this.serviceaccount.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):l["Message"].error("获取集群参数异常，请刷新重试")}else l["Message"].error("获取ServiceAccount参数异常，请刷新重试")},updateServiceAccount:function(){if(this.serviceaccount){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(i["d"])(e,this.serviceaccount.namespace,this.serviceaccount.name,this.yamlValue).then((function(){l["Message"].success("更新成功")})).catch((function(){}))):l["Message"].error("获取集群参数异常，请刷新重试")}else l["Message"].error("获取ServiceAccount参数异常，请刷新重试")},getSecretsName:function(e){if(!e)return"";var t,n=[],a=Object(s["a"])(e);try{for(a.s();!(t=a.n()).done;){var c=t.value;n.push(c.name)}}catch(o){a.e(o)}finally{a.f()}return n.join(",")}}},m=d,f=(n("5f9b"),n("8438"),n("2877")),v=Object(f["a"])(m,a,c,!1,null,"f3dc188a",null);t["default"]=v.exports},f02d:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i}));n("99af");var a=n("b775");function c(e){return Object(a["a"])({url:"serviceaccount/".concat(e),method:"get"})}function s(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a["a"])({url:"serviceaccount/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:c}})}function o(e,t){return Object(a["a"])({url:"serviceaccount/".concat(e,"/delete"),method:"post",data:t})}function i(e,t,n,c){return Object(a["a"])({url:"serviceaccount/".concat(e,"/update/").concat(t,"/").concat(n),method:"post",data:{yaml:c}})}}}]);