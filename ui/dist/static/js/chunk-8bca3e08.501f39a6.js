(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bca3e08"],{"25c7":function(e,t,n){},"2c0c":function(e,t,n){},"38e4":function(e,t,n){},"43df":function(e,t,n){},"5e3c":function(e,t,n){"use strict";var a=n("25c7"),o=n.n(a);o.a},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return H}));var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),"undefined"!==typeof e.addFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.addFunc()}}},[n("svg-icon",{attrs:{"icon-class":"add"}})],1):e._e(),"undefined"!==typeof e.saveFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.saveFunc()}}},[n("svg-icon",{attrs:{"icon-class":"save"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],s=(n("b0c0"),n("aad4")),r=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},addFunc:{type:Function,required:!1,default:void 0},saveFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){e.nameFunc(e.nameInput),a=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(s["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(n("e69f"),n("dda3"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,"7321a090",null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],p=(n("99af"),n("abb2"),n("fcf3")),g=n("47d0"),v=n("173c"),y={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new g["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",a="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(a+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new v["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},b=y,w=Object(u["a"])(b,f,h,!1,null,null,null),k=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},N=[],O=n("5f87"),F={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(O["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},S=F,x=(n("ca6d"),Object(u["a"])(S,_,N,!1,null,"19556679",null)),C=x.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},I=[],E=n("56b3"),M=n.n(E);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var V={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=M.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},j=V,q=(n("db62"),Object(u["a"])(j,D,I,!1,null,"5bb854da",null)),H=q.exports},"64d3":function(e,t,n){},"84ed":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return u}));n("99af"),n("b0c0");var o=n("b775");function s(e){return Object(o["a"])({url:"nodes/".concat(e),method:"get"})}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(o["a"])({url:"nodes/".concat(e,"/").concat(t),method:"get",params:{output:n}})}function l(e,t,n){return Object(o["a"])({url:"nodes/".concat(e,"/update/").concat(t),method:"post",data:{yaml:n}})}function u(e){var t={uid:e.metadata.uid,name:e.metadata.name,taints:len(e.spec.taints),version:e.status.nodeInfo.kubeletVersion,os:e.status.nodeInfo.operatingSystem,os_image:e.status.nodeInfo.osImage,kernel_version:e.status.nodeInfo.kernelVersion,container_runtime:e.status.nodeInfo.containerRuntimeVersion,labels:e.metadata.labels,allocatable_cpu:e.status.allocatable.cpu,total_cpu:e.status.capacity.cpu,allocatable_mem:e.status.allocatable.memory,total_mem:e.status.capacity.memory,created:e.metadata.creationTimestamp,status:"Ready",internal_ip:""};for(c in e.status.conditions)"Ready"===c.type&&"True"===c.status?t.status="Ready":t.status="NotReady";for(a in e.status.addresses)"InternalIP"===a.type&&(t.internal_ip=i.address);return t}},"999d":function(e,t,n){"use strict";var a=n("38e4"),o=n.n(a);o.a},"9ee1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,delFunc:e.delFunc}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.nodes,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"20","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name-class",on:{click:function(n){return e.nameClick(t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"version",label:"版本","min-width":"15","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"internal_ip",label:"内部IP","min-width":"20","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"os_image",label:"操作系统","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"kernel_version",label:"内核版本","min-width":"30","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"container_runtime",label:"容器运行时","min-width":"20","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"15","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"28","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dropdown",{attrs:{size:"medium"}},[n("el-link",{attrs:{underline:!1}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.nameClick(t.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.getNodeYaml(t.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1)],1)],1)]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateNode()}}},[e._v("确 定")])],1)],1)],1)},o=[],i=(n("4de4"),n("caad"),n("c975"),n("b0c0"),n("d3b7"),n("25f0"),n("2532"),n("b85c")),s=n("61b2"),r=n("84ed"),c=n("5c96"),l={name:"Node",components:{Clusterbar:s["a"],Yaml:s["d"]},data:function(){return{yamlDialog:!1,yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Nodes"],maxHeight:window.innerHeight-150,loading:!0,originNodes:[],search_ns:[],search_name:"",delFunc:void 0,delNodes:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{nodesWatch:function(e){if(e){var t=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.originNodes.push(Object(r["a"])(e.resource));else if("update"===e.event)for(var a in this.originNodes){var o=this.originNodes[a];if(o.uid===t){if(o.resource_version<n){var i=Object(r["a"])(e.resource);this.$set(this.originNodes,a,i)}break}}else"delete"===e.event&&(this.originNodes=this.originNodes.filter((function(e){var n=e.uid;return n!==t})))}}},computed:{nodes:function(){var e,t=[],n=Object(i["a"])(this.originNodes);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.search_ns.length>0&&this.search_ns.indexOf(a.namespace)<0||(this.search_name&&!a.name.includes(this.search_name)||t.push(a))}}catch(o){n.e(o)}finally{n.f()}return t},nodesWatch:function(){return this.$store.getters["ws/nodesWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originNodes=[];var t=this.$store.state.cluster;t?Object(r["c"])(t).then((function(t){e.loading=!1,e.originNodes=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,n=Object(i["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.search_ns.push(a)}}catch(o){n.e(o)}finally{n.f()}},nameSearch:function(e){this.search_name=e},buildNodes:function(e){if(e){var t={uid:e.metadata.uid,name:e.metadata.name,version:e.status.nodeInfo.kubeletVersion,taints:e.spec.taints?e.spec.taints.length:0,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return t}},nameClick:function(e){this.$router.push({name:"nodeDetail",params:{nodeName:e}})},getNodeYaml:function(e){var t=this;this.yamlName="";var n=this.$store.state.cluster;n?e?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(n,e,"yaml").then((function(n){t.yamlLoading=!1,t.yamlValue=n.data,t.yamlName=e})).catch((function(){t.yamlLoading=!1}))):c["Message"].error("获取Node名称参数异常，请刷新重试"):c["Message"].error("获取集群参数异常，请刷新重试")},deleteNodes:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)c["Message"].error("请选择要删除的Nodes");else{var n={resources:e};deleteNodes(t,n).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")})),updateNode:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),updateNode(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取Node参数异常，请刷新重试"):c["Message"].error("获取命名空间参数异常，请刷新重试"):c["Message"].error("获取集群参数异常，请刷新重试")})),_delNodesFunc:function(){if(this.delNodes.length>0){var e,t=[],n=Object(i["a"])(this.delNodes);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.push({namespace:a.namespace,name:a.name})}}catch(o){n.e(o)}finally{n.f()}this.deleteNodes(t)}},handleSelectionChange:function(e){this.delNodes=e,e.length>0?this.delFunc=this._delNodesFunc:this.delFunc=void 0}}},u=l,d=(n("999d"),n("5e3c"),n("2877")),m=Object(d["a"])(u,a,o,!1,null,"0a8c5a09",null);t["default"]=m.exports},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));n("99af");var a=n("b775");function o(e){return Object(a["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(a["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b92f:function(e,t,n){},ca6d:function(e,t,n){"use strict";var a=n("64d3"),o=n.n(a);o.a},db62:function(e,t,n){"use strict";var a=n("43df"),o=n.n(a);o.a},dda3:function(e,t,n){"use strict";var a=n("b92f"),o=n.n(a);o.a},e69f:function(e,t,n){"use strict";var a=n("2c0c"),o=n.n(a);o.a}}]);