!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@floating-ui/dom")):"function"==typeof define&&define.amd?define(["@floating-ui/dom"],e):"object"==typeof exports?exports.EasePopup=e(require("@floating-ui/dom")):t.EasePopup=e(t["@floating-ui/dom"])}(this,(t=>(()=>{"use strict";var e={784:e=>{e.exports=t}},o={};function n(t){var i=o[t];if(void 0!==i)return i.exports;var c=o[t]={exports:{}};return e[t](c,c.exports,n),c.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};return(()=>{n.d(i,{default:()=>O});var t=n(784);const e={direction:"bottom",width:"auto",content:"",placement:"outside",needArrow:!0,singleOpen:!0,selfClick:!0,closeByOutSide:!0,fullScreen:!1,container:"body",targetGap:15,boundryGap:5,offset:[0,0],theme:"light"},o="ease-popup",c="ease-popup-arrow",s="ease-popup-modal",a={popup:[".".concat(o),["display","none"],["position","absolute"],["box-sizing","border-box"],["padding","8px"],["box-shadow","0px 0px 6px rgba(0, 0, 0, 0.2)"],["border-radius","4px"],["border","none"],["outline","none"],["margin","0"],["width","max-content"]],arrow:[".".concat(o," .").concat(c),["display","block"],["position","absolute"],["width","10px"],["height","10px"],["background-color"," inherit"],["box-shadow","-1px 1px 1px rgba(0, 0, 0, 0.1)"]],dialog:["dialog[open]",["display","block",!0],["overflow","initial"]]},l={light:{background:"#ffffff",color:"#333333"},dark:{background:"#333333",color:"#ffffff"}},r={rotate:{top:-45,bottom:135,left:225,right:45},side:{top:"bottom",right:"left",bottom:"top",left:"right"}},d={outside:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],inside:["left","left-start","left-end","right","right-start","right-end","center","center-start","center-end"]},p=e=>({name:"preventOverflow",fn:async o=>({data:await(0,t.detectOverflow)(o,e)})});function h(t){Object.assign(t.elements.floating.style,{maxWidth:"".concat(t.availableWidth,"px"),maxHeight:"".concat(t.availableHeight,"px")})}function u(){const e=function(e,o){const n={boundary:o.container,padding:o.boundryGap},i="inside"===o.placement?function(t){const{direction:e,width:o,offset:n}=t;return t=>{let{rects:i}=t;const c={mainAxis:0,crossAxis:0},[s=0,a=0]=n;return e.includes("center")&&(c.mainAxis=i.reference.width/2-i.floating.width/2+s,c.crossAxis=i.reference.height/2-i.floating.height/2+a),(e.includes("left")||e.includes("right"))&&(c.mainAxis=-(o+s),c.crossAxis=0+a),c}}(o):o.targetGap,c={placement:o.direction,middleware:[(0,t.offset)(i),(0,t.flip)(n),(0,t.shift)(n),p(n),(0,t.size)({...n,apply:h}),(0,t.hide)(n)]};return o.needArrow&&c.middleware.push((0,t.arrow)({element:b(e)})),c}(this.popup,this.options);(0,t.computePosition)(this.target,this.popup,e).then((t=>{this.options.direction=t.placement,f.call(this,t)}))}function f(t){const e=m()+2,{popup:o,options:n}=this,{x:i,y:c,placement:s,middlewareData:a}=t,l={left:"".concat(i,"px"),top:"".concat(c,"px"),"z-index":"".concat(e),"background-color":"".concat(n.theme.background),color:"".concat(n.theme.color)};if(Object.assign(o.style,l),n.needArrow){const t=b(o),{x:n,y:i}=a.arrow,c=s.split("-")[0],l=r.side[c],d=r.rotate[c],p={left:null!=n?"".concat(n,"px"):"",top:null!=i?"".concat(i,"px"):"","z-index":"".concat(e-1),transform:"rotate(".concat(d,"deg)"),[l]:"-5px"};Object.assign(t.style,p)}o.style.visibility=a.hide.referenceHidden?"hidden":"visible"}function m(){const t=[...document.querySelectorAll("*")].map((t=>"auto"!==getComputedStyle(t).zIndex));return t.length>0?Math.max(...t)+1:0}function g(t){let e;return"string"===y(t)&&(e=document.getElementById(t)||document.getElementsByClassName(t)[0]||document.querySelector(t)),y(t).includes("element")&&(e=t),e}function y(t){return Object.prototype.toString.call(t).replace("object ","").match(/\w+/g)[0].toLowerCase()}function b(t){let e=t.querySelector(".".concat(c));return e||(e=document.createElement("div"),e.classList.add(c),t.appendChild(e)),e}function w(t){let e=g(".".concat(s));const{container:o,show:n,fullScreen:i,destroy:c}=t;if(!e&&o)if(e=document.createElement("div"),e.className=s,e.style.zIndex=m()+1,e.style.position="fixed",e.style.backgroundColor="rgba(0, 0, 0, 0.1)",document.body.appendChild(e),i)e.style.inset="0";else{const{left:t,top:n}=getComputedStyle(o),{x:i,y:c,width:s,height:a}=o.getBoundingClientRect();e.style.left="".concat(t&&"auto"!=t?t:i+"px"),e.style.top="".concat(n&&"auto"!=n?n:c+"px"),e.style.width="".concat(s,"px"),e.style.height="".concat(a,"px")}return e&&(e.style.display=n?"block":"none",c&&e.remove()),e}function x(t,e){if((t=g(t))||((t=document.createElement("dialog")).show||"function"===y(t.show)||(t=document.createElement("div")),e.container.appendChild(t)),!t.show&&"function"!==y(t.show)){const e={open:{value:!1,writable:!0,configurable:!1},show:{value:function(){this.open=!0,this.style.display="block"},writable:!1,configurable:!1},showModal:{value:function(t,e){w({container:t,show:!0,fullScreen:e})},writable:!1,configurable:!1},close:{value:function(){this.open=!1,this.style.display="none"},writable:!1,configurable:!1}};Object.defineProperties(t,e)}return t.className+=" ".concat(o," ").concat(o,"-").concat(document.getElementsByClassName(o).length),e.content&&(t.innerHTML="<div class='".concat(o,"-content'>").concat(e.content,"</div>")),e.width&&(t.style.width="".concat(e.width,"px")),t}function v(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=Object.assign({},e,t);return"auto"!==o.width&&isNaN(o.width)&&S("the width option is invalid"),isNaN(o.targetGap)&&S("the targetGap option is invalid"),isNaN(o.boundryGap)&&S("the boundryGap option is invalid"),Object.keys(d).includes(o.placement)||S("the placement option is invalid"),g(o.container)||S("the container option is invalid"),d[o.placement].includes(o.direction)||S("the direction does not comply with the placement option: '".concat(o.placement,"'")),o.container&&(o.container=g(o.container)),o.theme&&l[o.theme]&&(o.theme=l[o.theme]),o}function E(t){if(!this.target.contains(t.target)||this.target===document.body){const{x:e,y:o,width:n,height:i}=this.popup.getBoundingClientRect(),c=e+n,s=o+i;this.options.closeByOutSide&&(t.clientX>c||t.clientX<e||t.clientY>s||t.clientY<o)&&this.hide(),this.options.selfClick||t.clientX>e&&t.clientX<c&&t.clientY>o&&t.clientY<s&&this.hide()}}function S(t){throw new Error(t)}function k(t,e){let o;if(document.getElementById(e))o=document.getElementById(e).sheet;else{const t=document.createElement("style");t.id=e,t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),window.createPopup||t.appendChild(document.createTextNode("")),o=document.styleSheets[document.styleSheets.length-1]}for(let e=0;e<t.length;e++){let n=t[e],i=n[0];if([...o.rules].filter((t=>t.selectorText===i)).length)break;let c=1,s="";for("[object Array]"===Object.prototype.toString.call(n[1][0])&&(n=n[1],c=0);c<n.length;c++){let t=n[c];s+="".concat(t[0],":").concat(t[1]).concat(t[2]?" !important":"",";\n")}o.insertRule?o.insertRule(i+"{"+s+"}",o.cssRules.length):o.addRule(i,s,-1)}}const O=class{constructor(t,e,n){const i=function(t){let e,o,n,i=[...t];if(i.length||S('at least "target" parameter is required'),e=g(i[0]),e||S("target parameter is invalid"),1===i.length&&(n=v(),o=x(o,n)),i.length>=2){const t=i[2]?2:1;n=v("object"===y(i[t])?i[t]:{}),o=x(i[1],n)}return"inside"===n.placement&&(n.needArrow=!1,n.container=e),e!==document.body&&n.container!==document.body||(n.fullScreen=!0),{target:e,popup:o,options:n}}([t,e,n]);this.target=i.target,this.popup=i.popup,this.options=i.options,this.popup.classList.add(o),this.isDialog="DIALOG"===this.popup.nodeName;for(const t in a)k([a[t]],o);this.cleanup=this.update(),this.handleEvent=E.bind(this)}update(){const e=u.bind(this);return(0,t.autoUpdate)(this.target,this.popup,e)}show(t){if(this.isDialog||this.popup.show(),this.options.singleOpen){const t=[...document.getElementsByClassName(o)].filter((t=>t!==this.popup));t.length&&t.forEach((t=>t.close&&t.close()))}document.addEventListener("click",this.handleEvent,!0),t&&t()}showModal(t){this.options.fullScreen?this.popup.showModal(document.body,this.options.fullScreen):this.isDialog?this.popup.showModal(this.options.container):(this.popup.show(),w({container:this.options.container,show:!0,fullScreen:this.options.fullScreen})),this.show(t)}hide(t){this.popup.close(),w({show:!1}),document.removeEventListener("click",this.handleEvent,!0),t&&t()}destroy(t){this.cleanup(),this.popup.remove(),w({destroy:!0}),document.removeEventListener("click",this.handleEvent,!0);for(let t in this)this[t]=null;t&&t()}}})(),i.default})()));