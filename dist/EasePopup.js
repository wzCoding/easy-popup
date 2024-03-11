var EasePopup;(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>S});const o={direction:"top",width:"auto",content:"",placement:"outside",useCache:!1,needArrow:!0,single:!0,contentClick:!0,closeByOutSide:!0,arrowSize:10,targetGap:5,boundryGap:[10,10],theme:"light"},i={popup:[".ease-popup",["display","none"],["position","absolute"],["box-sizing","border-box"],["padding","8px"],["box-shadow","0px 0px 6px rgba(0, 0, 0, 0.2)"],["border-radius","4px"],["border","none"],["outline","none"],["margin","0"]],arrow:[".ease-popup .ease-popup-arrow",["display","block"],["position","absolute"],["background-color"," inherit"],["box-shadow","-1px 1px 1px rgba(0, 0, 0, 0.1)"]],dialog:["dialog[open]",["display","block",!0]]},n={light:{background:"#ffffff",color:"#333333"},dark:{background:"#333333",color:"#ffffff"}},r=["top","top-start","top-end","center","bottom","bottom-start","bottom-end"],p=["left","left-start","left-end","center","right","right-start","right-end"];function s(){return{rootWidth:document.documentElement.clientWidth,rootHeight:document.documentElement.clientHeight}}function l(){const t=[...document.querySelectorAll("*")].map((t=>"auto"!==getComputedStyle(t).zIndex));return t.length>0?Math.max(...t)+1:0}function u(t,e){const o=t.split("-")[e];return o?e>0?"-"+o:o:""}function a(t,e,o,i=0){const{direction:n,arrowSize:s,targetGap:l,boundryGap:c}=o;if(!r.concat(p).includes(n))throw new Error("direction is invalid!");if(i>=4)throw new Error("not enough space!");let d=n;const h=r.includes(d),g=u(d,0),f=u(d,1),y=[{defaults:["left","right"],reset:"top"+f,popupSpace:e.width+l+s/2+c[0]},{defaults:["top","bottom"],reset:"left"+f,popupSpace:e.height+l+s/2+c[1]}];i++;const{defaults:m,reset:w,popupSpace:b}=y[Number(h)],S=m.filter((t=>g===t))[0],k=m.filter((t=>g!==t))[0];return t[S]<b&&(i++,t[k]>=b?d=d.replace(S,k):(i++,o.direction=w,d=a(t,e,o,i=0))),d}function c(t){return Object.prototype.toString.call(t).replace("object ","").match(/\w+/g)[0].toLowerCase()}function d(t){let e;return"string"===c(t)&&(e=document.getElementById(t)||document.getElementsByClassName(t)[0]||document.querySelector(t)),c(t).includes("element")&&(e=t),e}function h(t){let e;if("none"===getComputedStyle(t).getPropertyValue("display")){const o=[{key:"pointer-events",value:"none",origin:getComputedStyle(t).getPropertyValue("pointer-events")},{key:"visibility",value:"hidden",origin:getComputedStyle(t).getPropertyValue("visibility")},{key:"z-index",value:-999,origin:getComputedStyle(t).getPropertyValue("z-index")},{key:"display",value:"block",origin:getComputedStyle(t).getPropertyValue("display")}];for(const e of o)t.style[e.key]=e.value;e=t.getBoundingClientRect();for(const e of o)t.style[e.key]=e.origin}else e=t.getBoundingClientRect();return e}function g(t,e){t=d(t);const{rootWidth:o,rootHeight:i}=s(),{top:n,right:l,bottom:u,left:a,height:c,width:g}=h(t);let f=g;if(e){const{target:i,width:n,direction:s,arrowSize:l,targetGap:u,boundryGap:a}=e;if("auto"===n){if(r.includes(s))f=o-f>=2*a[0]?f:o-2*a[0];else if(p.includes(s)){const t=a[0]+u+l,e=i.left>i.right?i.left:i.right;f=e-f>=t?f:e-t}}else{if(!n||isNaN(n))throw new Error("width is invalid!");f=Number(n)}t.style.setProperty("width",`${f}px`),f=h(t).width}return{top:n,right:o-l,bottom:i-u,left:a,width:f,height:c}}function f(t,e){const o="ease-popup-modal",i=l()+2;let n=document.querySelector(`.${o}`);return!n&&e&&(n=document.createElement("div"),n.className=o,n.style.backgroundColor="rgba(0,0,0,0.1)",n.style.zIndex=i,n.style.position="fixed",n.style.inset="0",document.body.appendChild(n)),n&&(n.style.display=t?"block":"none"),i}function y(t,e){if((t=d(t))||((t=document.createElement("dialog")).show||"function"===c(t.show)||(t=document.createElement("div")),document.body.appendChild(t)),!t.show&&"function"!==c(t.show)){const e={open:{value:!1,writable:!0,configurable:!1},show:{value:function(t){this.open=!0,this.style.display="block",t&&this.style.setProperty("--popup-zIndex",t+1)},writable:!1,configurable:!1},showModal:{value:function(){const t=f(this.open,!0);this.show(t)},writable:!1,configurable:!1},close:{value:function(){this.open=!1,this.style.display="none",f()},writable:!1,configurable:!1}};Object.defineProperties(t,e)}const o="ease-popup";return t.className+=` ${o} ${o}-${document.querySelectorAll(`.${o}`).length}`,e.content&&(t.innerHTML=e.content),t}function m(t){const e=Object.assign({},o,t);return e.needArrow||(e.arrowSize=0),e.theme&&(n[e.theme]?(e.background=n[e.theme].background,e.color=n[e.theme].color):"object"==typeof e.theme&&(e.background=e.theme.background,e.color=e.theme.color)),e}function w(t,e){let o;if(document.getElementById(e))o=document.getElementById(e).sheet;else{const t=document.createElement("style");t.id=e,t.type="text/css",document.getElementsByTagName("head")[0].appendChild(t),window.createPopup||t.appendChild(document.createTextNode("")),o=document.styleSheets[document.styleSheets.length-1]}for(let e=0;e<t.length;e++){let i=t[e],n=i[0];if([...o.rules].filter((t=>t.selectorText===n)).length)break;let r=1,p="";for("[object Array]"===Object.prototype.toString.call(i[1][0])&&(i=i[1],r=0);r<i.length;r++){let t=i[r];p+=`${t[0]}:${t[1]}${t[2]?" !important":""};\n`}o.insertRule?o.insertRule(n+"{"+p+"}",o.cssRules.length):o.addRule(n,p,-1)}}function b(t){!this.options.closeByOutSide||this.popup.contains(t.target)||this.target.contains(t.target)||this.popup.close(),this.options.contentClick||this.target.contains(t.target)||this.popup.close()}const S=class{constructor(t,e,o={}){const n=function(t){let e,o,i,n=[...t];if(!n.length)throw new Error('at least "target" parameter is required');if(e=function(t){if(!(t=d(t)))throw new Error("target parameter is invalid");return t}(n[0]),1===n.length&&(i=m({}),o=y(o,i)),n.length>=2){const t=n[2]?2:1;i=m("object"===c(n[t])?n[t]:{}),o=y(n[1],i)}return{target:e,popup:o,options:i}}(arguments);this.target=n.target,this.popup=n.popup,this.options=n.options,this.options.open&&(i.popup.display="block"),this.popup.classList.add("ease-popup"),w([i.popup],"ease-popup"),w([i.dialog],"ease-popup"),this.options.useCache&&(this.state=0,this.styles={}),this.update(this.computeStyle())}computeStyle(){if(this.options.useCache){if(console.log("useCache"),this.state>=2)return this.styles;this.state++}const t=g(this.target),e=g(this.popup,{...this.options,target:t}),o=a(t,e,this.options),{popupX:n,arrowX:u}=function(t,e,o){const{rootWidth:i}=s(),{direction:n,targetGap:l,arrowSize:u,boundryGap:a}=o,{left:c,width:d}=t,h={popupX:0,arrowX:0};return r.includes(n)&&(h.popupX=c+d/2-e/2,h.arrowX=e/2-u/2,n.includes("start")?(h.popupX=c,h.arrowX=d/2-u/2):n.includes("end")&&(h.popupX=c+d-e,h.arrowX=e-d/2-u/2),h.popupX<a[0]&&(h.popupX=a[0],h.arrowX=c-a[0]+d/2-u/2),h.popupX+e>i-a[0]&&(h.popupX=i-e-a[0],h.arrowX=c-h.popupX+d/2-u/2)),p.includes(n)&&(n.includes("left")?(h.popupX=c-e-l-u,h.arrowX=e-u/2):n.includes("right")&&(h.popupX=c+d+l+u,h.arrowX=-u/2)),h}(t,e.width,this.options),{popupY:c,arrowY:d}=function(t,e,o){const{rootHeight:i}=s(),{direction:n,targetGap:l,arrowSize:u,boundryGap:a}=o,c={popupY:0,arrowY:0},d=t.height;let h=t.top;return r.includes(n)&&(n.includes("top")?(c.popupY=h-e-l-u,c.arrowY=e-u/2):n.includes("bottom")&&(c.popupY=h+d+l+u,c.arrowY=-u/2)),p.includes(n)&&(t.top<a[1]&&(h=a[1]),t.bottom<a[1]&&(h-=a[1]),c.popupY=h+d/2-e/2,c.arrowY=h-c.popupY+d/2-u/2,n.includes("start")?(c.popupY=h,c.arrowY=d/2-u/2):n.includes("end")&&(c.popupY=h+d-e,c.arrowY=e-d/2-u/2),c.popupY<a[1]&&(c.popupY=a[1],c.arrowY=h-c.popupY+d/2-u/2),c.popupY+e>i-a[1]&&(c.popupY=i-a[1]-e,c.arrowY=h-c.popupY+d/2-u/2)),c}(t,e.height,this.options),h=l()+1,f={top:`${c}px`,left:`${n}px`,width:`${e.width}px`,"background-color":`${this.options.background}`,color:`${this.options.color}`,"z-index":`${h}`};return this.options.needArrow&&(w([i.arrow],"ease-popup"),function(t,e){const o="ease-popup-arrow";let i=t.querySelector(`.${o}`);i||(i=document.createElement("span"),i.classList.add(o),t.appendChild(i));let n=0;const{safeDirection:s,arrowSize:l,arrowX:u,arrowY:a}=e;r.includes(s)&&(n=s.includes("top")?-45:135),p.includes(s)&&(n=s.includes("left")?225:45),i.style.transform=`rotate(${n}deg)`,i.style.top=`${a}px`,i.style.left=`${u}px`,i.style.width=`${l}px`,i.style.height=`${l}px`,i.style.zIndex=t.style.zIndex-1,t.classList.add("arrow")}(this.popup,{safeDirection:o,arrowSize:this.options.arrowSize,arrowX:u,arrowY:d})),this.options.direction=o,f}update(t){for(let e in t)this.popup.style.setProperty(e,t[e]);return this.styles&&(this.styles=t),t}clickOutSide(){return b.bind(this)}show(){this.update(this.computeStyle()),this.popup.show(),this.options.single&&[...document.getElementsByClassName("ease-popup")].filter((t=>t!==this.popup)).forEach((t=>t.close())),(this.options.contentClick||this.options.closeByOutSide)&&(this.clickOutSide=b.bind(this),document.addEventListener("click",this.clickOutSide,!0))}showModal(){this.popup.showModal()}hide(){this.popup.close(),this.clickOutSide&&document.removeEventListener("click",this.clickOutSide,!0)}};EasePopup=e.default})();
//# sourceMappingURL=EasePopup.js.map