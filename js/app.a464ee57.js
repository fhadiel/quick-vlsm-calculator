(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],d=0,f=[];d<i.length;d++)s=i[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"4c53":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("c5f6"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"_root"},[r("user-input"),r("result-e"),r("img",{attrs:{id:"logo",alt:"QUICK VLSM LOGO",src:n("78a4")}}),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v(" Made by "),n("a",{attrs:{href:"https://github.com/fhadiel",target:"_blank"}},[t._v("Fhadiel")]),t._v(", \n   "),n("a",{attrs:{href:"https://github.com/fhadiel/quick-vlsm-calculator",target:"_blank"}},[t._v("Source Code")])])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boxy",attrs:{id:"userinput"}},[n("div",{staticClass:"title"},[t._v("Subnet Information")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.inputAddress,expression:"$store.state.inputAddress"}],attrs:{type:"text",id:"ip-address",placeholder:"0.0.0.0"},domProps:{value:t.$store.state.inputAddress},on:{input:function(e){e.target.composing||t.$set(t.$store.state,"inputAddress",e.target.value)}}}),n("div",{ref:"parentInput",staticClass:"inputHere scrollcontainer"},t._l(t.$store.state.inputData,function(e,r){return n("div",{key:r,staticClass:"inputHost",on:{keypress:function(e){return t.keyHandler(e,r)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e[0],expression:"data[0]"}],attrs:{type:"number",autofocus:"",min:"1",name:"host",placeholder:"Total Host"},domProps:{value:e[0]},on:{input:function(n){n.target.composing||t.$set(e,0,n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e[1],expression:"data[1]"}],attrs:{type:"text",name:"id",placeholder:"ID"},domProps:{value:e[1]},on:{input:function(n){n.target.composing||t.$set(e,1,n.target.value)}}}),n("button",{staticClass:"remove",on:{click:function(e){return t.$store.commit("removeInputData",r)}}},[t._v("\n        -\n      ")]),n("button",{staticClass:"add",on:{click:function(e){return t.$store.commit("addInputData",r)}}},[t._v("\n        +\n      ")])])}),0)])},i=[],u=(n("ac6a"),{methods:{keyHandler:function(t,e){var n=this,r=[["Enter",function(){n.$store.commit("addInputData",e),n.$nextTick(function(){var t=n.$refs.parentInput.querySelectorAll(".inputHost");t[e+1].querySelector("input").focus()})}]];r.forEach(function(e){return e[0]==t.key&&e[1]()})},isLast:function(t){return this.$store.state.inputData.length-1==t},removeInputData:function(t){this.inputData.splice(t,1)},addInputData:function(){this.$store.state.inputData.push([])}}}),c=u,l=(n("8423"),n("2877")),d=Object(l["a"])(c,s,i,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boxy",attrs:{id:"result"}},[n("div",{staticClass:"title"},[t._v("VLSM Results")]),n("div",{staticClass:"info"},[t._v("\n    Total Host "),n("b",[t._v(t._s(t.result.totalHost))]),n("br"),t._v(" Subnet Minimum "),n("b",[t._v("/"+t._s(32-t.result.minPrefix)+" ("+t._s(100*t.result.percentage)+"% Used)")]),n("br"),t._v(" Summary "),n("b",[t._v(t._s(t.result.summary)+"/"+t._s(32-t.result.minPrefix))])]),n("div",{staticClass:"tablecontainer scrollcontainer"},[n("table",{attrs:{border:"1px"}},[n("colgroup",t._l(t.th,function(t){return n("col",{key:t[1],class:t})}),0),n("thead",[n("tr",t._m(0),0)]),n("tbody",t._l(t.vlsmResult,function(e){return n("tr",{key:e.net+"/"+e.prefix},t._l(t.th,function(r){return n("td",{key:r[1],domProps:{textContent:t._s(e[r[1]])}})}),0)}),0)])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._l(t.th,function(e){return n("th",{key:e[1],staticClass:"id",domProps:{textContent:t._s(e[0])}})})}],m=n("2f62"),h={computed:Object(m["b"])(["result","vlsmResult"]),data:function(){return{th:[["ID","id"],["Network","net"],["First Address","first"],["Last Address","last"],["Broadcast Address","bc"],["/","prefix"]]}}},b=h,g=(n("8d91"),Object(l["a"])(b,p,v,!1,null,"aa3a2f42",null)),_=g.exports,y={components:{UserInput:f,ResultE:_}},x=y,k=(n("034f"),Object(l["a"])(x,o,a,!1,null,null,null)),w=k.exports,$=n("9483");Object($["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("ac4d"),n("8a81"),n("55dd");var D=n("b9fc"),S=n.n(D);function A(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=1;n<=32;n++)if(Math.pow(2,n)-2*e>=t)return n}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.sort(function(t,e){return e[0]-t[0]});var n=[],r=e,o=!0,a=!1,s=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=i.value,l=A(c[0]),d=Math.pow(2,l),f=S.a.cidrSubnet("".concat(S.a.fromLong(r),"/").concat(32-l));f.id=c[1],f.order=c[2],n.push(f),r+=d}}catch(p){a=!0,s=p}finally{try{o||null==u.return||u.return()}finally{if(a)throw s}}return n.map(function(t){return{net:t.networkAddress,first:t.firstAddress,last:t.lastAddress,bc:t.broadcastAddress,subnetmask:t.subnetMask,prefix:t.subnetMaskLength,id:t.id}})}var P={getMinimumPrefix:A,getVLSM:C};r["a"].use(m["a"]),r["a"].config.productionTip=!1;var M=new m["a"].Store({state:{inputData:[[void 0,1]],inputAddress:"",addCount:1},getters:{result:function(t){var e=t.inputData.filter(function(t){return void 0!=t[0]}),n=e.reduce(function(t,e){return e[0]&&(t+=Number(e[0])),t},0),r={totalHost:n,minPrefix:P.getMinimumPrefix(n,e.length)};if(r.percentage=n/(Math.pow(2,r.minPrefix)-2*e.length),S.a.isV4Format(t.inputAddress)){var o=S.a.cidrSubnet("".concat(t.inputAddress,"/").concat(32-r.minPrefix));r.summary=o.networkAddress,console.log(o)}return r},vlsmResult:function(t,e){var n=t.inputData.slice().map(function(t,e){return[Number(t[0]),t[1]?t[1]:e,e]}).filter(function(t){return t[0]>0});return P.getVLSM(n,e.result.summary?S.a.toLong(e.result.summary):0)}},mutations:{addInputData:function(t,e){t.inputData.splice(e+1,0,[void 0,++t.addCount])},removeInputData:function(t,e){t.inputData.length>1?t.inputData.splice(e,1):t.inputData=[[]]}}});new r["a"]({render:function(t){return t(w)},store:M}).$mount("#app"),r["a"].$ip=S.a},"64a9":function(t,e,n){},"78a4":function(t,e,n){t.exports=n.p+"img/vlsmcalc-512.99338541.png"},8423:function(t,e,n){"use strict";var r=n("4c53"),o=n.n(r);o.a},"8d91":function(t,e,n){"use strict";var r=n("deaa"),o=n.n(r);o.a},deaa:function(t,e,n){}});
//# sourceMappingURL=app.a464ee57.js.map