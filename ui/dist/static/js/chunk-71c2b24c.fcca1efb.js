(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c2b24c"],{"2c0c":function(e,t,n){},4281:function(e,t,n){},"43df":function(e,t,n){},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return q}));var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),"undefined"!==typeof e.addFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.addFunc()}}},[n("svg-icon",{attrs:{"icon-class":"add"}})],1):e._e(),"undefined"!==typeof e.saveFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.saveFunc()}}},[n("svg-icon",{attrs:{"icon-class":"save"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},s=[],i=(n("b0c0"),n("aad4")),c=n("5c96"),r={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},addFunc:{type:Function,required:!1,default:void 0},saveFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){e.nameFunc(e.nameInput),a=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(i["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):c["Message"].error("获取集群异常，请刷新重试")}}},l=r,u=(n("e69f"),n("dda3"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,"7321a090",null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],p=(n("99af"),n("abb2"),n("fcf3")),v=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new v["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",a="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(a+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else c["Message"].error("获取POD参数异常，请刷新重试");else c["Message"].error("获取命名空间参数异常，请刷新重试");else c["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,w=Object(u["a"])(y,f,h,!1,null,null,null),k=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},O=[],F=n("5f87"),S={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(F["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else c["Message"].error("获取POD参数异常，请刷新重试");else c["Message"].error("获取命名空间参数异常，请刷新重试");else c["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},x=S,j=(n("ca6d"),Object(u["a"])(x,_,O,!1,null,"19556679",null)),C=j.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},D=[],M=n("56b3"),E=n.n(M);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var N={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=E.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},T=N,V=(n("db62"),Object(u["a"])(T,J,D,!1,null,"5bb854da",null)),q=V.exports},"64d3":function(e,t,n){},"6f54":function(e,t,n){"use strict";var a=n("bd78"),o=n.n(a);o.a},"76fe":function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return l}));n("99af"),n("b0c0");var a=n("b85c"),o=n("b775");function s(e,t){return Object(o["a"])({url:"job/".concat(e),method:"get",params:{cronjob_uid:t}})}function i(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(o["a"])({url:"job/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:a}})}function c(e,t){return Object(o["a"])({url:"job/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,n,a){return Object(o["a"])({url:"job/".concat(e,"/update/").concat(t,"/").concat(n),method:"post",data:{yaml:a}})}function l(e){if(e){var t=[];if(e.status.conditions){var n,o=Object(a["a"])(e.status.conditions);try{for(o.s();!(n=o.n()).done;){var s=n.value;"True"===s.status&&t.push(s.type)}}catch(c){o.e(c)}finally{o.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return i}}},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));n("99af");var a=n("b775");function o(e){return Object(a["a"])({url:"namespace/".concat(e),method:"get"})}function s(e,t,n){return Object(a["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b029:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.jobs,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name-class",on:{click:function(n){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"40","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"ready_replicas",label:"Pods","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.active>0?n("span",{staticClass:"back-class"},[e._v(" "+e._s(t.row.active)+" Running ")]):e._e(),t.row.succeeded>0?n("span",{staticClass:"back-class"},[e._v(" "+e._s(t.row.succeeded)+" Succeeded ")]):e._e(),t.row.failed>0?n("span",{staticClass:"back-class"},[e._v(" "+e._s(t.row.failed)+" Failed ")]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"completions",label:"Completions","min-width":"40","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"conditions",label:"状态","min-width":"30","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.conditions&&t.row.conditions.length>0?e._l(t.row.conditions,(function(t){return n("span",{key:t},[e._v(" "+e._s(t)+" ")])})):n("span",[e._v("—")])]}}])}),n("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"40","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dropdown",{attrs:{size:"medium"}},[n("el-link",{attrs:{underline:!1}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.getJobYaml(t.row.namespace,t.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.deleteJobs([{namespace:t.row.namespace,name:t.row.name}])}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateJob()}}},[e._v("确 定")])],1)],1)],1)},o=[],s=(n("4de4"),n("caad"),n("c975"),n("b0c0"),n("2532"),n("b85c")),i=n("61b2"),c=n("76fe"),r=n("5c96"),l={name:"Job",components:{Clusterbar:i["a"],Yaml:i["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Jobs"],maxHeight:window.innerHeight-150,loading:!0,originJobs:[],search_ns:[],search_name:"",delFunc:void 0,delJobs:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{jobsWatch:function(e){if(e){var t=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.originJobs.push(this.buildJobs(e.resource));else if("update"===e.event)for(var a in this.originJobs){var o=this.originJobs[a];if(o.uid===t){if(o.resource_version<n){var s=this.buildJobs(e.resource);this.$set(this.originJobs,a,s)}break}}else"delete"===e.event&&(this.originJobs=this.originJobs.filter((function(e){var n=e.uid;return n!==t})))}}},computed:{jobs:function(){var e,t=[],n=Object(s["a"])(this.originJobs);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.search_ns.length>0&&this.search_ns.indexOf(a.namespace)<0||(this.search_name&&!a.name.includes(this.search_name)||(a.conditions&&a.conditions.length>0?a.conditions.sort():a.conditions=[],t.push(a)))}}catch(o){n.e(o)}finally{n.f()}return t},jobsWatch:function(){return this.$store.getters["ws/jobsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originJobs=[];var t=this.$store.state.cluster;t?Object(c["d"])(t).then((function(t){e.loading=!1,e.originJobs=t.data?t.data:[]})).catch((function(){e.loading=!1})):(this.loading=!1,r["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,n=Object(s["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.search_ns.push(a)}}catch(o){n.e(o)}finally{n.f()}},nameSearch:function(e){this.search_name=e},buildJobs:function(e){if(e){var t=[];if(e.status.conditions){var n,a=Object(s["a"])(e.status.conditions);try{for(a.s();!(n=a.n()).done;){var o=n.value;"True"===o.status&&t.push(o.type)}}catch(c){a.e(c)}finally{a.f()}}var i={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,completions:e.spec.completions||0,active:e.status.active||0,succeeded:e.status.succeeded||0,failed:e.status.failed||0,resource_version:e.metadata.resourceVersion,conditions:t,node_selector:e.spec.template.spec.nodeSelector,created:e.metadata.creationTimestamp};return i}},nameClick:function(e,t){this.$router.push({name:"jobDetail",params:{namespace:e,jobName:t}})},getJobYaml:function(e,t){var n=this;this.yamlNamespace="",this.yamlName="";var a=this.$store.state.cluster;a?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(c["c"])(a,e,t,"yaml").then((function(a){n.yamlLoading=!1,n.yamlValue=a.data,n.yamlNamespace=e,n.yamlName=t})).catch((function(){n.yamlLoading=!1}))):r["Message"].error("获取Deployment名称参数异常，请刷新重试"):r["Message"].error("获取命名空间参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},deleteJobs:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)r["Message"].error("请选择要删除的Jobs");else{var n={resources:e};Object(c["b"])(t,n).then((function(){r["Message"].success("删除成功")})).catch((function(){}))}else r["Message"].error("获取集群参数异常，请刷新重试")},updateJob:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(c["e"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){}))):r["Message"].error("获取Job参数异常，请刷新重试"):r["Message"].error("获取命名空间参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},_delJobsFunc:function(){if(this.delJobs.length>0){var e,t=[],n=Object(s["a"])(this.delJobs);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.push({namespace:a.namespace,name:a.name})}}catch(o){n.e(o)}finally{n.f()}this.deleteJobs(t)}},handleSelectionChange:function(e){this.delJobs=e,e.length>0?this.delFunc=this._delJobsFunc:this.delFunc=void 0}}},u=l,d=(n("6f54"),n("d4f5"),n("2877")),m=Object(d["a"])(u,a,o,!1,null,"6f3bb34f",null);t["default"]=m.exports},b92f:function(e,t,n){},bd78:function(e,t,n){},ca6d:function(e,t,n){"use strict";var a=n("64d3"),o=n.n(a);o.a},d4f5:function(e,t,n){"use strict";var a=n("4281"),o=n.n(a);o.a},db62:function(e,t,n){"use strict";var a=n("43df"),o=n.n(a);o.a},dda3:function(e,t,n){"use strict";var a=n("b92f"),o=n.n(a);o.a},e69f:function(e,t,n){"use strict";var a=n("2c0c"),o=n.n(a);o.a}}]);