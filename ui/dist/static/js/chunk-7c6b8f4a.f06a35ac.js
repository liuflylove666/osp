(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c6b8f4a"],{2567:function(e,t,n){"use strict";var a=n("7d55"),s=n.n(a);s.a},"2c0c":function(e,t,n){},"43df":function(e,t,n){},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return $}));var a,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),"undefined"!==typeof e.addFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.addFunc()}}},[n("svg-icon",{attrs:{"icon-class":"add"}})],1):e._e(),"undefined"!==typeof e.saveFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.saveFunc()}}},[n("svg-icon",{attrs:{"icon-class":"save"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],o=(n("b0c0"),n("aad4")),c=n("5c96"),r={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},addFunc:{type:Function,required:!1,default:void 0},saveFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){e.nameFunc(e.nameInput),a=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(o["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):c["Message"].error("获取集群异常，请刷新重试")}}},l=r,u=(n("e69f"),n("dda3"),n("2877")),d=Object(u["a"])(l,s,i,!1,null,"7321a090",null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],p=(n("99af"),n("abb2"),n("fcf3")),g=n("47d0"),v=n("173c"),y={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new g["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",a="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(a+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else c["Message"].error("获取POD参数异常，请刷新重试");else c["Message"].error("获取命名空间参数异常，请刷新重试");else c["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new v["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},b=y,w=Object(u["a"])(b,f,h,!1,null,null,null),k=w.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},_=[],F=n("5f87"),x={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(F["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else c["Message"].error("获取POD参数异常，请刷新重试");else c["Message"].error("获取命名空间参数异常，请刷新重试");else c["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},O=x,S=(n("ca6d"),Object(u["a"])(O,N,_,!1,null,"19556679",null)),C=S.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},E=[],M=n("56b3"),q=n.n(M);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var V={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=q.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},H=V,T=(n("db62"),Object(u["a"])(H,D,E,!1,null,"5bb854da",null)),$=T.exports},"64d3":function(e,t,n){},"6c4a":function(e,t,n){"use strict";var a=n("f255"),s=n.n(a);s.a},"7d55":function(e,t,n){},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));n("99af");var a=n("b775");function s(e){return Object(a["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(a["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b92f:function(e,t,n){},c3ba:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,delFunc:e.delFunc}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.namespaces,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"40","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"lables",label:"标签","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.labels?e._l(t.row.labels,(function(t,a){return n("span",{key:a,staticClass:"back-class"},[e._v(" "+e._s(a+"="+t)+" ")])})):e._e()]}}])}),n("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"30","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dropdown",{attrs:{size:"medium"}},[n("el-link",{attrs:{underline:!1}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.getNamespaceYaml(t.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.deleteNamespaces([{name:t.row.name}])}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateNamespace()}}},[e._v("确 定")])],1)],1)],1)},s=[],i=(n("4de4"),n("caad"),n("c975"),n("b0c0"),n("d3b7"),n("25f0"),n("2532"),n("b85c")),o=n("61b2"),c=n("aad4"),r=n("5c96"),l={name:"Namespace",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Namespaces"],maxHeight:window.innerHeight-150,loading:!0,originNamespaces:[],search_ns:[],search_name:"",delFunc:void 0,delNamespaces:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{namespacesWatch:function(e){if(e){var t=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.originNamespaces.push(this.buildNamespaces(e.resource));else if("update"===e.event)for(var a in this.originNamespaces){var s=this.originNamespaces[a];if(s.uid===t){if(s.resource_version<n){var i=this.buildNamespaces(e.resource);this.$set(this.originNamespaces,a,i)}break}}else"delete"===e.event&&(this.originNamespaces=this.originNamespaces.filter((function(e){var n=e.uid;return n!==t})))}}},computed:{namespaces:function(){var e,t=[],n=Object(i["a"])(this.originNamespaces);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.search_ns.length>0&&this.search_ns.indexOf(a.namespace)<0||(this.search_name&&!a.name.includes(this.search_name)||(a.conditions&&a.conditions.length>0?a.conditions.sort():a.conditions=[],t.push(a)))}}catch(s){n.e(s)}finally{n.f()}return t},namespacesWatch:function(){return this.$store.getters["ws/namespacesWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originNamespaces=[];var t=this.$store.state.cluster;t?Object(c["b"])(t).then((function(t){e.loading=!1,e.originNamespaces=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,r["Message"].error("获取集群异常，请刷新重试"))},nameSearch:function(e){this.search_name=e},buildNamespaces:function(e){if(e){var t={uid:e.metadata.uid,status:e.status.phase,name:e.metadata.name,labels:e.metadata.labels,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return t}},getNamespaceYaml:function(e){var t=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(c["a"])(n,e,"yaml").then((function(n){t.yamlLoading=!1,t.yamlValue=n.data,t.yamlName=e})).catch((function(){t.yamlLoading=!1}))):r["Message"].error("获取Namespace名称参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")},deleteNamespaces:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)r["Message"].error("请选择要删除的Namespaces");else{var n={resources:e};deleteNamespaces(t,n).then((function(){r["Message"].success("删除成功")})).catch((function(){}))}else r["Message"].error("获取集群参数异常，请刷新重试")})),updateNamespace:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this.$store.state.cluster;e?this.yamlName?(console.log(this.yamlValue),updateNamespace(e,this.yamlName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){}))):r["Message"].error("获取Namespace参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")})),_delNamespacesFunc:function(){if(this.delNamespaces.length>0){var e,t=[],n=Object(i["a"])(this.delNamespaces);try{for(n.s();!(e=n.n()).done;){var a=e.value;t.push({name:a.name})}}catch(s){n.e(s)}finally{n.f()}this.deleteNamespaces(t)}},handleSelectionChange:function(e){this.delNamespaces=e,e.length>0?this.delFunc=this._delNamespacesFunc:this.delFunc=void 0}}},u=l,d=(n("6c4a"),n("2567"),n("2877")),m=Object(d["a"])(u,a,s,!1,null,"5ad82a4c",null);t["default"]=m.exports},ca6d:function(e,t,n){"use strict";var a=n("64d3"),s=n.n(a);s.a},db62:function(e,t,n){"use strict";var a=n("43df"),s=n.n(a);s.a},dda3:function(e,t,n){"use strict";var a=n("b92f"),s=n.n(a);s.a},e69f:function(e,t,n){"use strict";var a=n("2c0c"),s=n.n(a);s.a},f255:function(e,t,n){}}]);