(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf18eb0a"],{"0905":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return n}));var o=a("b775");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l={};return t&&(l["uid"]=t),a&&(l["kind"]=a),n&&(l["namespace"]=n),s&&(l["name"]=s),Object(o["a"])({url:"event/".concat(e),method:"get",params:l})}function n(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"10c6":function(e,t,a){"use strict";var o=a("5fd6"),s=a.n(o);s.a},"252c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deletePods,editFunc:e.getPodYaml}}),a("div",{staticClass:"dashboard-container"},[a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"状态"}},[a("span",[e._v(e._s(e.pod.status))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.pod.created))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[e._v(e._s(e.pod.namespace))])]),a("el-form-item",{attrs:{label:"节点"}},[a("span",[e._v(e._s(e.pod.node_name))])]),a("el-form-item",{attrs:{label:"服务账户"}},[a("span",[e._v(e._s(e.pod.service_account))])]),a("el-form-item",{attrs:{label:"Pod IP"}},[a("span",[e._v(e._s(e.pod.ip))])]),a("el-form-item",{attrs:{label:"控制器"}},[a("span",[e._v(e._s(e.pod.controlled)+"/"+e._s(e.pod.controlled_name))])]),a("el-form-item",{attrs:{label:"QoS Class"}},[a("span",[e._v(e._s(e.pod.qos))])]),a("el-form-item",{attrs:{label:"标签"}},[e._l(e.pod.labels,(function(t,o){return[a("span",{key:o},[e._v(e._s(o)+": "+e._s(t)),a("br")])]}))],2),a("el-form-item",{attrs:{label:"注解"}},[e.pod.annonations?e._l(e.pod.annonations,(function(t,o){return[a("span",{key:o},[e._v(e._s(o)+": "+e._s(t)),a("br")])]})):a("span",[e._v("—")])],2)],1),a("el-tabs",{staticStyle:{padding:"0px 8px"},attrs:{value:"containers"}},[a("el-tab-pane",{attrs:{label:"容器",name:"containers"}},[a("div",{staticClass:"msgClass"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.containers,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{staticStyle:{overflow:"hidden"},attrs:{type:"expand",width:"20"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(t.row.name))])]),a("el-form-item",{attrs:{label:"状态"}},[a("span",[e._v(e._s(t.row.status))])]),a("el-form-item",{attrs:{label:"镜像"}},[a("span",[e._v(e._s(t.row.image))])]),t.row.command.length?a("el-form-item",{attrs:{label:"启动命令"}},[e._l(t.row.command,(function(t){return[a("span",{key:t},[e._v(e._s(t)),a("br")])]}))],2):e._e(),t.row.args.length?a("el-form-item",{attrs:{label:"启动参数"}},[e._l(t.row.args,(function(t){return[a("span",{key:t},[e._v(e._s(t)),a("br")])]}))],2):e._e(),t.row.ports.length?a("el-form-item",{attrs:{label:"端口"}},[e._l(t.row.ports,(function(t){return[a("span",{key:t.name},[e._v(e._s(t.name?t.name+":":"")+" "+e._s(t.containerPort)+"/"+e._s(t.protocol)),a("br")])]}))],2):e._e(),t.row.env.length?a("el-form-item",{attrs:{label:"环境变量"}},[e._l(t.row.env,(function(t,o){return[a("span",{key:o},[e._v(" "+e._s(e.envStr(t))),a("br")])]}))],2):e._e(),t.row.volume_mounts.length?a("el-form-item",{attrs:{label:"目录挂载"}},[e._l(t.row.volume_mounts,(function(t){return[a("span",{key:t.name},[e._v(e._s(t.name)+" -> "+e._s(t.mountPath)+" ("+e._s(t.readOnly?"ro":"rw")+")"),a("br")])]}))],2):e._e(),t.row.resources&&(t.row.resources.requests||t.row.resources.limits)?a("el-form-item",{attrs:{label:"资源"}},[a("div",[a("span",{staticStyle:{width:"80px",display:"inline-block"}}),a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v("预留")]),a("span",{staticStyle:{display:"inline-block"}},[e._v("限制")])]),a("div",{staticStyle:{"margin-top":"-10px"}},[a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v("cpu")]),a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"requests","cpu")))]),a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"limits","cpu")))])]),a("div",{staticStyle:{"margin-top":"-10px"}},[a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v("memory")]),a("span",{staticStyle:{width:"80px",display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"requests","memory")))]),a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.resourceFor(t.row.resources,"limits","memory")))])])]):e._e(),t.row.readiness_probe||t.row.liveness_probe?a("el-form-item",{attrs:{label:"健康检查"}},e._l(["readiness_probe","liveness_probe"],(function(o){return a("div",{key:o},[t.row[o]?a("div",[a("div",[a("span",{staticStyle:{"margin-right":"15px","font-weight":"450"}},[e._v(" "+e._s("readiness_probe"==o?"ReadinessProbe":"LivenessProbe")+" ")])]),a("div",{staticStyle:{"margin-top":"-15px"}},e._l(t.row[o],(function(t,o){return a("span",{key:o},[["httpGet","exec","tcpSocket"].indexOf(o)>-1?a("span",{staticClass:"back-class"},[e._v(" "+e._s(o)+": "+e._s(t)+" ")]):e._e()])})),0),a("div",{staticStyle:{"margin-top":"-10px"}},e._l(t.row[o],(function(t,o){return a("span",{key:o},[["httpGet","exec","tcpSocket"].indexOf(o)<=-1?a("span",{staticClass:"back-class"},[e._v(" "+e._s(o)+": "+e._s(t)+" ")]):e._e()])})),0)]):e._e()])})),0):e._e()],1)]}}])}),a("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.toogleExpand(t.row)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"image",label:"镜像","min-width":"150","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"start_time",label:"开始时间","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"50","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"","min-width":"20"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.selectContainer=t.row.name,e.log=!0}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.2em"},attrs:{"icon-class":"log"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("日志")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.selectContainer=t.row.name,e.terminal=!0}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.2em"},attrs:{"icon-class":"terminal"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("终端")])],1)],1)],1)]}}])})],1)],1)]),a("el-tab-pane",{attrs:{label:"存储",name:"second"}},[a("div",{staticClass:"msgClass",staticStyle:{padding:"10px 0px"}},[e.pod.volumes&&e.pod.volumes.length>0?e._l(e.pod.volumes,(function(t){return a("div",{key:t.name,staticStyle:{margin:"15px 25px","font-size":"14px",color:"#606266"}},[a("div",{staticStyle:{"margin-bottom":"6px"}},[a("b",[e._v(e._s(t.name))])]),e._l(t,(function(t,o){return["name"!==o?a("span",{key:o},[a("span",{staticClass:"back-class"},[e._v(e._s(o))]),e._l(t,(function(t,o){return a("span",{key:o,staticClass:"back-class"},[e._v(" "+e._s(o)+": "+e._s(t)+" ")])}))],2):e._e()]}))],2)})):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("无挂载存储")])],2)]),a("el-tab-pane",{attrs:{label:"状态",name:"conditions"}},[a("div",{staticClass:"msgClass"},[a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.pod.conditions,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"lastProbeTime"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"reason",label:"原因","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}])}),a("el-table-column",{attrs:{prop:"message",label:"信息","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}])}),a("el-table-column",{attrs:{label:"触发时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.lastProbeTime?t.row.lastProbeTime:t.row.lastTransitionTime)+" ")])]}}])})],1)],1)]),a("el-tab-pane",{attrs:{label:"事件",name:"events"}},[a("div",{staticClass:"msgClass"},[e.podEvents&&e.podEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.podEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"70","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"30","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[e._v("暂无事件发生")])],1)])],1),a("el-dialog",{attrs:{title:"终端",visible:e.terminal,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(t){e.terminal=t}}},[e.terminal?a("terminal",{attrs:{cluster:e.cluster,namespace:e.namespace,pod:e.podName,container:e.selectContainer}}):e._e()],1),a("el-dialog",{attrs:{title:"日志",visible:e.log,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(t){e.log=t}}},[e.log?a("log",{attrs:{cluster:e.cluster,namespace:e.namespace,pod:e.podName,container:e.selectContainer}}):e._e()],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updatePod()}}},[e._v("确 定")])],1)],1)],1)],1)},s=[],n=(a("99af"),a("4de4"),a("b0c0"),a("2909")),l=a("61b2"),i=a("f492"),r=a("0905"),c=a("5c96"),d={name:"PodDetail",components:{Clusterbar:l["a"],Terminal:l["c"],Log:l["b"],Yaml:l["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,log:!1,terminal:!1,cellStyle:{border:0},loading:!0,originPod:void 0,selectContainer:"",podEvents:[],eventLoading:!0,activeName:"first",resourceFor:i["i"]}},created:function(){this.fetchData()},watch:{podWatch:function(e){if(e&&this.pod){var t=e.resource.metadata.uid;if(t!==this.pod.uid)return;console.log("watch pod obj",e);var a=e.resource.metadata.resourceVersion;this.pod.resource_version<a&&(this.originPod=e.resource)}},eventWatch:function(e){if(e&&this.originPod){var t=e.resource;if(t.involvedObject.namespace!==this.pod.namespace)return;if(t.involvedObject.uid!==this.pod.uid)return;var a=e.resource.metadata.uid;if("add"===e.event)this.podEvents.push(Object(r["a"])(t));else if("update"==e.event){var o=e.resource.metadata.resourceVersion;for(var s in this.podEvents){var n=this.podEvents[s];if(n.uid===a){if(n.resource_version<o){var l=Object(r["a"])(e.resource);this.$set(this.podEvents,s,l)}break}}}else"delete"===e.event&&(this.podEvents=this.podEvents.filter((function(e){var t=e.uid;return t!==a})))}}},computed:{titleName:function(){return["Pods",this.podName]},podName:function(){return this.$route.params?this.$route.params.podName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},pod:function(){var e=Object(i["b"])(this.originPod);return e},cluster:function(){return this.$store.state.cluster},containers:function(){var e=[];return this.pod&&this.pod.containers&&(e=this.pod.containers),this.pod&&this.pod.init_containers&&(e=[].concat(Object(n["a"])(this.pod.init_containers),Object(n["a"])(e))),e},podWatch:function(){return this.$store.getters["ws/podWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]}},methods:{fetchData:function(){var e=this;this.originPods=[],this.podEvents=[],this.loading=!0,this.eventLoading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.podName?void Object(i["f"])(t,this.namespace,this.podName).then((function(a){e.loading=!1,e.originPod=a.data,Object(r["b"])(t,e.originPod.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.podEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1,e.eventLoading=!1})):(c["Message"].error("获取Pod名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},toogleExpand:function(e){var t=this.$refs.table;t.toggleRowExpansion(e)},envStr:function(e){var t=e.name+": ";return e.value?t+=e.value:e.valueFrom&&(e.valueFrom.configMapKeyRef?t+="configmap(".concat(e.valueFrom.configMapKeyRef.key,":").concat(e.valueFrom.configMapKeyRef.name,")"):e.valueFrom.fieldRef?t+="fieldRef(".concat(e.valueFrom.fieldRef.apiVersion,":").concat(e.valueFrom.fieldRef.fieldPath,")"):e.valueFrom.secretKeyRef?t+="secret(".concat(e.valueFrom.secretKeyRef.key,":").concat(e.valueFrom.secretKeyRef.name,")"):t+=String(e.valueFrom)),t},deletePods:function(){var e=this.$store.state.cluster;if(e){this.pod||c["Message"].error("获取POD参数异常，请刷新重试");var t=[{namespace:this.pod.namespace,name:this.pod.name}],a={resources:t};Object(i["d"])(e,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")},getPodYaml:function(){var e=this;if(this.pod){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["f"])(t,this.pod.namespace,this.pod.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Pod参数异常，请刷新重试")},updatePod:function(){if(this.pod){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(i["j"])(e,this.pod.namespace,this.pod.name,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Pod参数异常，请刷新重试")}}},p=d,u=(a("8b29"),a("10c6"),a("2877")),m=Object(u["a"])(p,o,s,!1,null,"5b227cdd",null);t["default"]=m.exports},"5fd6":function(e,t,a){},7498:function(e,t,a){},"8b29":function(e,t,a){"use strict";var o=a("7498"),s=a.n(o);s.a}}]);