(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fde390e4"],{"0905":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return n}));var i=a("b775");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l={};return e&&(l["uid"]=e),a&&(l["kind"]=a),n&&(l["namespace"]=n),s&&(l["name"]=s),Object(i["a"])({url:"event/".concat(t),method:"get",params:l})}function n(t){if(t){var e=t.lastTimestamp;return e||(e=t.firstTimestamp),e||(e=t.metadata.creationTimestamp),{uid:t.metadata.uid,namespace:t.metadata.namespace,count:t.spec?t.spec.count:1,reason:t.reason,message:t.message,type:t.type,object:t.involvedObject,source:t.source,event_time:e,resource_version:t.metadata.resourceVersion}}}},"431b":function(t,e,a){},5866:function(t,e,a){"use strict";var i=a("431b"),s=a.n(i);s.a},c8b8:function(t,e,a){"use strict";var i=a("d99c"),s=a.n(i);s.a},d99c:function(t,e,a){},e84a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("el-row",{staticClass:"row-class",staticStyle:{"margin-bottom":"10px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"border-class"},[a("div",{staticStyle:{margin:"5px 0px 10px"}},[t._v("集群状态")]),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Cluster Version")]),a("div",{staticStyle:{"text-align":"center","padding-top":"55px","font-size":"20px"}},[t._v(t._s(t.cluster_detail.cluster_version))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"67px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px"}},[t._v("CPU")]),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[t._v(t._s(t.cluster_detail.cluster_cpu))])]),a("el-card",{staticStyle:{height:"67px","margin-top":"6px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px"}},[t._v("Memory")]),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[t._v(t._s(t.cluster_detail.cluster_memory))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Node")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.node_num))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Namespace")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.namespace_num))])])],1)],1)],1)])],1),a("el-row",{staticClass:"row-class",staticStyle:{"margin-bottom":"10px"},attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"border-class"},[a("div",{staticStyle:{margin:"5px 0px 10px"}},[t._v("应用状态")]),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Pod")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.pod_num))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"64px",color:"#409EFF","margin-top":"3px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px"}},[t._v("Running")]),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[t._v(t._s(t.cluster_detail.pod_running_num))])]),a("el-card",{staticStyle:{height:"64px","margin-top":"6px",color:"#E6A23C"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px"}},[t._v("Pending")]),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[t._v(t._s(t.cluster_detail.pod_pending_num))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"64px",color:"#67C23A","margin-top":"3px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px"}},[t._v("Succeeded")]),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[t._v(t._s(t.cluster_detail.pod_succeeded_num))])]),a("el-card",{staticStyle:{height:"64px","margin-top":"6px",color:"#F56C6C"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px"}},[t._v("Failed")]),a("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[t._v(t._s(t.cluster_detail.pod_failed_num))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px","font-size":"13px"}},[t._v("Deployment")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.deployment_num))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px","font-size":"13px"}},[t._v("StatefulSet")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.statefulset_num))])])],1),a("el-col",{attrs:{span:4}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px","font-size":"13px"}},[t._v("DaemonSet")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.daemonset_num))])])],1)],1)],1)]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"border-class"},[a("div",{staticStyle:{margin:"5px 0px 10px"}},[t._v("网络状态")]),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Service")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.service_num))])])],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Ingress")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.ingress_num))])])],1)],1)],1)]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"border-class"},[a("div",{staticStyle:{margin:"5px 0px 10px"}},[t._v("存储状态")]),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("Storage Class")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.storageclass_num))])])],1),a("el-col",{attrs:{span:12}},[a("el-row",{staticStyle:{"margin-bottom":"6px","margin-top":"3px"},attrs:{gutter:5}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticStyle:{height:"45px",color:"#409EFF"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px","margin-top":"-3px"}},[t._v("Available")]),a("div",{staticStyle:{"text-align":"center","padding-top":"1px"}},[t._v(t._s(t.cluster_detail.pv_available_num))])]),a("el-card",{staticStyle:{height:"45px",color:"#67C23A","margin-top":"6px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px","margin-top":"-3px"}},[t._v("Bound")]),a("div",{staticStyle:{"text-align":"center","padding-top":"1px"}},[t._v(t._s(t.cluster_detail.pv_bound_num))])])],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticStyle:{height:"45px",color:"#E6A23C"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px","margin-top":"-3px"}},[t._v("Released")]),a("div",{staticStyle:{"text-align":"center","padding-top":"1px"}},[t._v(t._s(t.cluster_detail.pv_released_num))])]),a("el-card",{staticStyle:{height:"45px",color:"#F56C6C","margin-top":"6px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","font-size":"13px","margin-top":"-3px"}},[t._v("Failed")]),a("div",{staticStyle:{"text-align":"center","padding-top":"1px"}},[t._v(t._s(t.cluster_detail.pv_failed_num))])])],1)],1),a("el-card",{staticStyle:{height:"30px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center","margin-top":"-5px"}},[a("span",{staticStyle:{float:"left","margin-left":"30px"}},[t._v("PV")]),a("span",{staticStyle:{float:"right","margin-right":"30px"}},[t._v(t._s(t.cluster_detail.pv_num))])])])],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticStyle:{height:"140px"},attrs:{shadow:"never"}},[a("div",{staticStyle:{"text-align":"center",height:"20px"}},[t._v("PVC")]),a("div",{staticStyle:{"text-align":"center","padding-top":"59px"}},[t._v(t._s(t.cluster_detail.pvc_num))])])],1)],1)],1)])],1),a("el-row",[a("div",{staticClass:"border-class event-class"},[a("div",{staticStyle:{margin:"5px 0px 10px"}},[t._v("事件")]),t.events&&t.events.length>0?a("el-timeline",[t._l(t.events,(function(e){return[a("el-timeline-item",{key:e.uid,attrs:{timestamp:e.event_time,placement:"top"}},[a("el-card",{attrs:{shadow:"never"}},[a("p",{staticClass:"event-title"},[t._v(t._s(e.object.kind)+"/"+t._s(e.object.name))]),a("p",{staticClass:"event-body"},[t._v(t._s(e.message))])])],1)]}))],2):a("div",{staticStyle:{padding:"10px 15px 25px",color:"#909399","text-align":"center"}},[t._v("暂无事件发生")])],1)])],1)])},s=[],n=a("b85c"),l=a("7ea2"),r=a("0905"),c={name:"cluster",data:function(){return{cluster_detail:{},originEvents:[],loading:!0}},components:{},created:function(){this.fetchData()},computed:{events:function(){var t,e=[],a=Object(n["a"])(this.originEvents);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.push(i)}}catch(s){a.e(s)}finally{a.f()}return e.sort((function(t,e){return t.event_time<e.event_time?1:-1})),e}},methods:{fetchData:function(){var t=this;this.loading=!0,this.originCronJobs=[];var e=this.$store.state.cluster;e?(Object(l["a"])(e).then((function(e){t.loading=!1,t.cluster_detail=e.data,console.log(t.cluster_detail)})).catch((function(){t.loading=!1})),Object(r["b"])(e).then((function(e){t.loading=!1,t.originEvents=e.data?e.data:[]})).catch((function(){t.loading=!1}))):(this.loading=!1,Message.error("获取集群异常，请刷新重试"))}}},d=c,o=(a("c8b8"),a("5866"),a("2877")),p=Object(o["a"])(d,i,s,!1,null,"345b938f",null);e["default"]=p.exports}}]);