(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1003b588"],{"5d4a":function(e,t,l){},"8e20":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",e._l(e.alertList,function(t,n){return l("alert",{key:n,attrs:{title:t.key,type:t.type},on:{close:e.callback}})}),1)},a=[],s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("transition",[l("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:["alert",e.center?"is-center":"",e.typeClass],attrs:{role:"alert"}},[e.title?l("span",{class:["alert__title"]},[e._v(e._s(e.title))]):e._e(),e._t("default",[e.description?l("p",{class:["alert__description"]},[e._v(e._s(e.description))]):e._e()]),l("i",{directives:[{name:"show",rawName:"v-show",value:e.closable,expression:"closable"}],on:{click:function(t){e.close()}}},[e._v("×")])],2)])},r=[],i={success:"alert--success",warning:"alert--warning",error:"alert--error"},o={name:"Alert",props:{title:{type:String,default:"",required:!0},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},center:Boolean},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return i[this.type]||"alert--info "}}},c=o,u=(l("b0ae"),l("2877")),p=Object(u["a"])(c,s,r,!1,null,"280399a8",null);p.options.__file="index.vue";var d=p.exports,v={data:function(){return{alertList:[{key:"alert1",val:"10",type:"success"},{key:"alert2",val:"10",type:"error"},{key:"alert3",val:"10",type:"warning"}]}},components:{alert:d},methods:{callback:function(){console.log("callback")}}},f=v,_=Object(u["a"])(f,n,a,!1,null,null,null);_.options.__file="index.vue";t["default"]=_.exports},b0ae:function(e,t,l){"use strict";var n=l("5d4a"),a=l.n(n);a.a}}]);
//# sourceMappingURL=chunk-1003b588.759d4f29.js.map