(()=>{"use strict";var e={18:(e,t,n)=>{var r=n(178);e.exports=function(e,t,n){var o=[],l=!1,i=-1;function a(){for(i=0;i<o.length;i+=2)try{e(o[i],r(o[i+1]),s)}catch(e){n.error(e)}i=-1}function s(){l||(l=!0,t((function(){l=!1,a()})))}return s.sync=a,{mount:function(t,n){if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount expects a component, not a vnode.");var l=o.indexOf(t);l>=0&&(o.splice(l,2),l<=i&&(i-=2),e(t,[])),null!=n&&(o.push(t,n),e(t,r(n),s))},redraw:s}}},223:(e,t,n)=>{var r=n(178),o=n(373),l=n(164),i=n(249),a=n(561),s=n(562),u=n(641),c=n(542),f={};function d(e){try{return decodeURIComponent(e)}catch(t){return e}}e.exports=function(e,t){var n,p,v,h,m,g,y=null==e?null:"function"==typeof e.setImmediate?e.setImmediate:e.setTimeout,w=l.resolve(),x=!1,b=!1,k=0,j=f,E={onbeforeupdate:function(){return!(!(k=k?2:1)||f===j)},onremove:function(){e.removeEventListener("popstate",C,!1),e.removeEventListener("hashchange",z,!1)},view:function(){if(k&&f!==j){var e=[r(v,h.key,h)];return j&&(e=j.render(e[0])),e}}},S=T.SKIP={};function z(){x=!1;var r=e.location.hash;"#"!==T.prefix[0]&&(r=e.location.search+r,"?"!==T.prefix[0]&&"/"!==(r=e.location.pathname+r)[0]&&(r="/"+r));var o=r.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,d).slice(T.prefix.length),l=a(o);function i(e){console.error(e),A(p,null,{replace:!0})}u(l.params,e.history.state),function e(r){for(;r<n.length;r++)if(n[r].check(l)){var a=n[r].component,s=n[r].route,u=a,c=g=function(n){if(c===g){if(n===S)return e(r+1);v=null==n||"function"!=typeof n.view&&"function"!=typeof n?"div":n,h=l.params,m=o,g=null,j=a.render?a:null,2===k?t.redraw():(k=2,t.redraw.sync())}};return void(a.view||"function"==typeof a?(a={},c(u)):a.onmatch?w.then((function(){return a.onmatch(l.params,o,s)})).then(c,o===p?null:i):c("div"))}if(o===p)throw new Error("Could not resolve default route "+p+".");A(p,null,{replace:!0})}(0)}function C(){x||(x=!0,y(z))}function A(t,n,r){if(t=i(t,n),b){C();var o=r?r.state:null,l=r?r.title:null;r&&r.replace?e.history.replaceState(o,l,T.prefix+t):e.history.pushState(o,l,T.prefix+t)}else e.location.href=T.prefix+t}function T(r,o,l){if(!r)throw new TypeError("DOM element being rendered to does not exist.");if(n=Object.keys(l).map((function(e){if("/"!==e[0])throw new SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:e,component:l[e],check:s(e)}})),p=o,null!=o){var i=a(o);if(!n.some((function(e){return e.check(i)})))throw new ReferenceError("Default route doesn't match any known routes.")}"function"==typeof e.history.pushState?e.addEventListener("popstate",C,!1):"#"===T.prefix[0]&&e.addEventListener("hashchange",z,!1),b=!0,t.mount(r,E),z()}return T.set=function(e,t,n){null!=g&&((n=n||{}).replace=!0),g=null,A(e,t,n)},T.get=function(){return m},T.prefix="#!",T.Link={view:function(e){var t,n,r,l=o(e.attrs.selector||"a",c(e.attrs,["options","params","selector","onclick"]),e.children);return(l.attrs.disabled=Boolean(l.attrs.disabled))?(l.attrs.href=null,l.attrs["aria-disabled"]="true"):(t=e.attrs.options,n=e.attrs.onclick,r=i(l.attrs.href,e.attrs.params),l.attrs.href=T.prefix+r,l.attrs.onclick=function(e){var o;"function"==typeof n?o=n.call(e.currentTarget,e):null==n||"object"!=typeof n||"function"==typeof n.handleEvent&&n.handleEvent(e),!1===o||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,T.set(r,null,t))}),l}},T.param=function(e){return h&&null!=e?h[e]:h},T}},262:(e,t,n)=>{var r=n(373);r.trust=n(742),r.fragment=n(621),e.exports=r},865:(e,t,n)=>{var r=n(262),o=n(74),l=n(165),i=function(){return r.apply(this,arguments)};i.m=r,i.trust=r.trust,i.fragment=r.fragment,i.Fragment="[",i.mount=l.mount,i.route=n(843),i.render=n(358),i.redraw=l.redraw,i.request=o.request,i.jsonp=o.jsonp,i.parseQueryString=n(874),i.buildQueryString=n(478),i.parsePathname=n(561),i.buildPathname=n(249),i.vnode=n(178),i.PromisePolyfill=n(803),i.censor=n(542),e.exports=i},165:(e,t,n)=>{var r=n(358);e.exports=n(18)(r,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)},249:(e,t,n)=>{var r=n(478),o=n(641);e.exports=function(e,t){if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(null==t)return e;var n=e.indexOf("?"),l=e.indexOf("#"),i=l<0?e.length:l,a=n<0?i:n,s=e.slice(0,a),u={};o(u,t);var c=s.replace(/:([^\/\.-]+)(\.{3})?/g,(function(e,n,r){return delete u[n],null==t[n]?e:r?t[n]:encodeURIComponent(String(t[n]))})),f=c.indexOf("?"),d=c.indexOf("#"),p=d<0?c.length:d,v=f<0?p:f,h=c.slice(0,v);n>=0&&(h+=e.slice(n,i)),f>=0&&(h+=(n<0?"?":"&")+c.slice(f,p));var m=r(u);return m&&(h+=(n<0&&f<0?"?":"&")+m),l>=0&&(h+=e.slice(l)),d>=0&&(h+=(l<0?"":"&")+c.slice(d)),h}},562:(e,t,n)=>{var r=n(561);e.exports=function(e){var t=r(e),n=Object.keys(t.params),o=[],l=new RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(e,t,n){return null==t?"\\"+e:(o.push({k:t,r:"..."===n}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$");return function(e){for(var r=0;r<n.length;r++)if(t.params[n[r]]!==e.params[n[r]])return!1;if(!o.length)return l.test(e.path);var i=l.exec(e.path);if(null==i)return!1;for(r=0;r<o.length;r++)e.params[o[r].k]=o[r].r?i[r+1]:decodeURIComponent(i[r+1]);return!0}}},561:(e,t,n)=>{var r=n(874);e.exports=function(e){var t=e.indexOf("?"),n=e.indexOf("#"),o=n<0?e.length:n,l=t<0?o:t,i=e.slice(0,l).replace(/\/{2,}/g,"/");return i?("/"!==i[0]&&(i="/"+i),i.length>1&&"/"===i[i.length-1]&&(i=i.slice(0,-1))):i="/",{path:i,params:t<0?{}:r(e.slice(t+1,o))}}},803:e=>{var t=function(e){if(!(this instanceof t))throw new Error("Promise must be called with 'new'.");if("function"!=typeof e)throw new TypeError("executor must be a function.");var n=this,r=[],o=[],l=u(r,!0),i=u(o,!1),a=n._instance={resolvers:r,rejectors:o},s="function"==typeof setImmediate?setImmediate:setTimeout;function u(e,t){return function l(u){var f;try{if(!t||null==u||"object"!=typeof u&&"function"!=typeof u||"function"!=typeof(f=u.then))s((function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",u);for(var n=0;n<e.length;n++)e[n](u);r.length=0,o.length=0,a.state=t,a.retry=function(){l(u)}}));else{if(u===n)throw new TypeError("Promise can't be resolved with itself.");c(f.bind(u))}}catch(e){i(e)}}}function c(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(i);try{e(n(l),r)}catch(e){r(e)}}c(e)};t.prototype.then=function(e,n){var r,o,l=this._instance;function i(e,t,n,i){t.push((function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(e){o&&o(e)}})),"function"==typeof l.retry&&i===l.state&&l.retry()}var a=new t((function(e,t){r=e,o=t}));return i(e,l.resolvers,r,!0),i(n,l.rejectors,o,!1),a},t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(e){return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},t.resolve=function(e){return e instanceof t?e:new t((function(t){t(e)}))},t.reject=function(e){return new t((function(t,n){n(e)}))},t.all=function(e){return new t((function(t,n){var r=e.length,o=0,l=[];if(0===e.length)t([]);else for(var i=0;i<e.length;i++)!function(i){function a(e){o++,l[i]=e,o===r&&t(l)}null==e[i]||"object"!=typeof e[i]&&"function"!=typeof e[i]||"function"!=typeof e[i].then?a(e[i]):e[i].then(a,n)}(i)}))},t.race=function(e){return new t((function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)}))},e.exports=t},164:(e,t,n)=>{var r=n(803);"undefined"!=typeof window?(void 0===window.Promise?window.Promise=r:window.Promise.prototype.finally||(window.Promise.prototype.finally=r.prototype.finally),e.exports=window.Promise):void 0!==n.g?(void 0===n.g.Promise?n.g.Promise=r:n.g.Promise.prototype.finally||(n.g.Promise.prototype.finally=r.prototype.finally),e.exports=n.g.Promise):e.exports=r},478:e=>{e.exports=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}}},874:e=>{function t(e){try{return decodeURIComponent(e)}catch(t){return e}}e.exports=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var n=e.split("&"),r={},o={},l=0;l<n.length;l++){var i=n[l].split("="),a=t(i[0]),s=2===i.length?t(i[1]):"";"true"===s?s=!0:"false"===s&&(s=!1);var u=a.split(/\]\[?|\[/),c=o;a.indexOf("[")>-1&&u.pop();for(var f=0;f<u.length;f++){var d=u[f],p=u[f+1],v=""==p||!isNaN(parseInt(p,10));if(""===d)null==r[a=u.slice(0,f).join()]&&(r[a]=Array.isArray(c)?c.length:0),d=r[a]++;else if("__proto__"===d)break;if(f===u.length-1)c[d]=s;else{var h=Object.getOwnPropertyDescriptor(c,d);null!=h&&(h=h.value),null==h&&(c[d]=h=v?[]:{}),c=h}}}return o}},358:(e,t,n)=>{e.exports=n(452)("undefined"!=typeof window?window:null)},621:(e,t,n)=>{var r=n(178),o=n(359);e.exports=function(){var e=o.apply(0,arguments);return e.tag="[",e.children=r.normalizeChildren(e.children),e}},373:(e,t,n)=>{var r=n(178),o=n(359),l=n(188),i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,a={};function s(e){for(var t in e)if(l.call(e,t))return!1;return!0}e.exports=function(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t=o.apply(1,arguments);return"string"==typeof e&&(t.children=r.normalizeChildren(t.children),"["!==e)?function(e,t){var n=t.attrs,r=l.call(n,"class"),o=r?n.class:n.className;if(t.tag=e.tag,t.attrs={},!s(e.attrs)&&!s(n)){var i={};for(var a in n)l.call(n,a)&&(i[a]=n[a]);n=i}for(var a in e.attrs)l.call(e.attrs,a)&&"className"!==a&&!l.call(n,a)&&(n[a]=e.attrs[a]);for(var a in null==o&&null==e.attrs.className||(n.className=null!=o?null!=e.attrs.className?String(e.attrs.className)+" "+String(o):o:null!=e.attrs.className?e.attrs.className:null),r&&(n.class=null),n)if(l.call(n,a)&&"key"!==a){t.attrs=n;break}return t}(a[e]||function(e){for(var t,n="div",r=[],o={};t=i.exec(e);){var l=t[1],s=t[2];if(""===l&&""!==s)n=s;else if("#"===l)o.id=s;else if("."===l)r.push(s);else if("["===t[3][0]){var u=t[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(u):o[t[4]]=""===u?u:u||!0}}return r.length>0&&(o.className=r.join(" ")),a[e]={tag:n,attrs:o}}(e),t):(t.tag=e,t)}},359:(e,t,n)=>{var r=n(178);e.exports=function(){var e,t=arguments[this],n=this+1;if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},n=this),arguments.length===n+1)e=arguments[n],Array.isArray(e)||(e=[e]);else for(e=[];n<arguments.length;)e.push(arguments[n++]);return r("",t.key,t,e)}},452:(e,t,n)=>{var r=n(178);e.exports=function(e){var t,n=e&&e.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function l(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function i(e,t){if(e.state!==t)throw new Error("'vnode.state' must not be modified.")}function a(e){var t=e.state;try{return this.apply(t,arguments)}finally{i(e,t)}}function s(){try{return n.activeElement}catch(e){return null}}function u(e,t,n,r,o,l,i){for(var a=n;a<r;a++){var s=t[a];null!=s&&c(e,s,o,i,l)}}function c(e,t,o,i,s){var f=t.tag;if("string"==typeof f)switch(t.state={},null!=t.attrs&&_(t.attrs,t,o),f){case"#":!function(e,t,r){t.dom=n.createTextNode(t.children),x(e,t.dom,r)}(e,t,s);break;case"<":d(e,t,i,s);break;case"[":!function(e,t,r,o,l){var i=n.createDocumentFragment();if(null!=t.children){var a=t.children;u(i,a,0,a.length,r,null,o)}t.dom=i.firstChild,t.domSize=i.childNodes.length,x(e,i,l)}(e,t,o,i,s);break;default:!function(e,t,r,o,i){var a=t.tag,s=t.attrs,c=s&&s.is,f=(o=l(t)||o)?c?n.createElementNS(o,a,{is:c}):n.createElementNS(o,a):c?n.createElement(a,{is:c}):n.createElement(a);if(t.dom=f,null!=s&&function(e,t,n){"input"===e.tag&&null!=t.type&&e.dom.setAttribute("type",t.type);var r=null!=t&&"input"===e.tag&&"file"===t.type;for(var o in t)C(e,o,null,t[o],n,r)}(t,s,o),x(e,f,i),!b(t)&&null!=t.children){var d=t.children;u(f,d,0,d.length,r,null,o),"select"===t.tag&&null!=s&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&C(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,s)}}(e,t,o,i,s)}else!function(e,t,n,o,l){(function(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(n=e.state.view).$$reentrantLock$$)return;n.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(n=e.tag).$$reentrantLock$$)return;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(_(e.state,e,t),null!=e.attrs&&_(e.attrs,e,t),e.instance=r.normalize(a.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null})(t,n),null!=t.instance?(c(e,t.instance,n,o,l),t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0):t.domSize=0}(e,t,o,i,s)}var f={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function d(e,t,r,o){var l=t.children.match(/^\s*?<(\w+)/im)||[],i=n.createElement(f[l[1]]||"div");"http://www.w3.org/2000/svg"===r?(i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",i=i.firstChild):i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length,t.instance=[];for(var a,s=n.createDocumentFragment();a=i.firstChild;)t.instance.push(a),s.appendChild(a);x(e,s,o)}function p(e,t,n,r,o,l){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)u(e,n,0,n.length,r,o,l);else if(null==n||0===n.length)k(e,t,0,t.length);else{var i=null!=t[0]&&null!=t[0].key,a=null!=n[0]&&null!=n[0].key,s=0,f=0;if(!i)for(;f<t.length&&null==t[f];)f++;if(!a)for(;s<n.length&&null==n[s];)s++;if(i!==a)k(e,t,f,t.length),u(e,n,s,n.length,r,o,l);else if(a){for(var d,p,w,x,b,E=t.length-1,S=n.length-1;E>=f&&S>=s&&(w=t[E],x=n[S],w.key===x.key);)w!==x&&v(e,w,x,r,o,l),null!=x.dom&&(o=x.dom),E--,S--;for(;E>=f&&S>=s&&(d=t[f],p=n[s],d.key===p.key);)f++,s++,d!==p&&v(e,d,p,r,g(t,f,o),l);for(;E>=f&&S>=s&&s!==S&&d.key===x.key&&w.key===p.key;)y(e,w,b=g(t,f,o)),w!==p&&v(e,w,p,r,b,l),++s<=--S&&y(e,d,o),d!==x&&v(e,d,x,r,o,l),null!=x.dom&&(o=x.dom),f++,w=t[--E],x=n[S],d=t[f],p=n[s];for(;E>=f&&S>=s&&w.key===x.key;)w!==x&&v(e,w,x,r,o,l),null!=x.dom&&(o=x.dom),S--,w=t[--E],x=n[S];if(s>S)k(e,t,f,E+1);else if(f>E)u(e,n,s,S+1,r,o,l);else{var z,C,A=o,T=S-s+1,P=new Array(T),O=0,N=0,I=2147483647,L=0;for(N=0;N<T;N++)P[N]=-1;for(N=S;N>=s;N--){null==z&&(z=h(t,f,E+1));var $=z[(x=n[N]).key];null!=$&&(I=$<I?$:-1,P[N-s]=$,w=t[$],t[$]=null,w!==x&&v(e,w,x,r,o,l),null!=x.dom&&(o=x.dom),L++)}if(o=A,L!==E-f+1&&k(e,t,f,E+1),0===L)u(e,n,s,S+1,r,o,l);else if(-1===I)for(C=function(e){var t=[0],n=0,r=0,o=0,l=m.length=e.length;for(o=0;o<l;o++)m[o]=e[o];for(o=0;o<l;++o)if(-1!==e[o]){var i=t[t.length-1];if(e[i]<e[o])m[o]=i,t.push(o);else{for(n=0,r=t.length-1;n<r;){var a=(n>>>1)+(r>>>1)+(n&r&1);e[t[a]]<e[o]?n=a+1:r=a}e[o]<e[t[n]]&&(n>0&&(m[o]=t[n-1]),t[n]=o)}}for(r=t[(n=t.length)-1];n-- >0;)t[n]=r,r=m[r];return m.length=0,t}(P),O=C.length-1,N=S;N>=s;N--)p=n[N],-1===P[N-s]?c(e,p,r,l,o):C[O]===N-s?O--:y(e,p,o),null!=p.dom&&(o=n[N].dom);else for(N=S;N>=s;N--)p=n[N],-1===P[N-s]&&c(e,p,r,l,o),null!=p.dom&&(o=n[N].dom)}}else{var M=t.length<n.length?t.length:n.length;for(s=s<f?s:f;s<M;s++)(d=t[s])===(p=n[s])||null==d&&null==p||(null==d?c(e,p,r,l,g(t,s+1,o)):null==p?j(e,d):v(e,d,p,r,g(t,s+1,o),l));t.length>M&&k(e,t,s,t.length),n.length>M&&u(e,n,s,n.length,r,o,l)}}}function v(e,t,n,o,i,s){var u=t.tag;if(u===n.tag){if(n.state=t.state,n.events=t.events,function(e,t){do{var n;if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&void 0!==(n=a.call(e.attrs.onbeforeupdate,e,t))&&!n)break;if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate&&void 0!==(n=a.call(e.state.onbeforeupdate,e,t))&&!n)break;return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(n,t))return;if("string"==typeof u)switch(null!=n.attrs&&D(n.attrs,n,o),u){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children),t.dom=e.dom}(t,n);break;case"<":!function(e,t,n,r,o){t.children!==n.children?(E(e,t),d(e,n,r,o)):(n.dom=t.dom,n.domSize=t.domSize,n.instance=t.instance)}(e,t,n,s,i);break;case"[":!function(e,t,n,r,o,l){p(e,t.children,n.children,r,o,l);var i=0,a=n.children;if(n.dom=null,null!=a){for(var s=0;s<a.length;s++){var u=a[s];null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),i+=u.domSize||1)}1!==i&&(n.domSize=i)}}(e,t,n,o,i,s);break;default:!function(e,t,n,r){var o=t.dom=e.dom;r=l(t)||r,"textarea"===t.tag&&null==t.attrs&&(t.attrs={}),function(e,t,n,r){if(t&&t===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),null!=n){"input"===e.tag&&null!=n.type&&e.dom.setAttribute("type",n.type);var o="input"===e.tag&&"file"===n.type;for(var l in n)C(e,l,t&&t[l],n[l],r,o)}var i;if(null!=t)for(var l in t)null==(i=t[l])||null!=n&&null!=n[l]||A(e,l,i,r)}(t,e.attrs,t.attrs,r),b(t)||p(o,e.children,t.children,n,null,r)}(t,n,o,s)}else!function(e,t,n,o,l,i){if(n.instance=r.normalize(a.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");D(n.state,n,o),null!=n.attrs&&D(n.attrs,n,o),null!=n.instance?(null==t.instance?c(e,n.instance,o,i,l):v(e,t.instance,n.instance,o,l,i),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(j(e,t.instance),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,o,i,s)}else j(e,t),c(e,n,o,s,i)}function h(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var l=o.key;null!=l&&(r[l]=t)}}return r}var m=[];function g(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function y(e,t,r){var o=n.createDocumentFragment();w(e,o,t),x(e,o,r)}function w(e,t,n){for(;null!=n.dom&&n.dom.parentNode===e;){if("string"!=typeof n.tag){if(null!=(n=n.instance))continue}else if("<"===n.tag)for(var r=0;r<n.instance.length;r++)t.appendChild(n.instance[r]);else if("["!==n.tag)t.appendChild(n.dom);else if(1===n.children.length){if(null!=(n=n.children[0]))continue}else for(r=0;r<n.children.length;r++){var o=n.children[r];null!=o&&w(e,t,o)}break}}function x(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function b(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted.");return!0}function k(e,t,n,r){for(var o=n;o<r;o++){var l=t[o];null!=l&&j(e,l)}}function j(e,t){var n,r,o,l=0,s=t.state;if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&null!=(o=a.call(t.state.onbeforeremove,t))&&"function"==typeof o.then&&(l=1,n=o),t.attrs&&"function"==typeof t.attrs.onbeforeremove&&null!=(o=a.call(t.attrs.onbeforeremove,t))&&"function"==typeof o.then&&(l|=2,r=o),i(t,s),l){if(null!=n){var u=function(){1&l&&((l&=2)||c())};n.then(u,u)}null!=r&&(u=function(){2&l&&((l&=1)||c())},r.then(u,u))}else z(t),S(e,t);function c(){i(t,s),z(t),S(e,t)}}function E(e,t){for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}function S(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){if("string"!=typeof t.tag){if(null!=(t=t.instance))continue}else if("<"===t.tag)E(e,t);else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break;if(1===t.children.length){if(null!=(t=t.children[0]))continue}else for(var n=0;n<t.children.length;n++){var r=t.children[n];null!=r&&S(e,r)}}break}}function z(e){if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&a.call(e.state.onremove,e),e.attrs&&"function"==typeof e.attrs.onremove&&a.call(e.attrs.onremove,e),"string"!=typeof e.tag)null!=e.instance&&z(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&z(r)}}}function C(e,t,r,o,l,i){if(!("key"===t||"is"===t||null==o||T(t)||r===o&&!function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===s()||"option"===e.tag&&e.dom.parentNode===n.activeElement}(e,t)&&"object"!=typeof o||"type"===t&&"input"===e.tag)){if("o"===t[0]&&"n"===t[1])return R(e,t,o);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o);else if("style"===t)$(e.dom,r,o);else if(P(e,t,l)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&(i||e.dom===s()))return;if("select"===e.tag&&null!==r&&e.dom.value===""+o)return;if("option"===e.tag&&null!==r&&e.dom.value===""+o)return;if(i&&""+o!="")return void console.error("`value` is read-only on file inputs!")}e.dom[t]=o}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)}}function A(e,t,n,r){if("key"!==t&&"is"!==t&&null!=n&&!T(t))if("o"===t[0]&&"n"===t[1])R(e,t,void 0);else if("style"===t)$(e.dom,n,null);else if(!P(e,t,r)||"className"===t||"title"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===s())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null}function T(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function P(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var O,N=/[A-Z]/g;function I(e){return"-"+e.toLowerCase()}function L(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(N,I)}function $(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n)null!=(o=n[r])&&e.style.setProperty(L(r),String(o));else{for(var r in n){var o;null!=(o=n[r])&&(o=String(o))!==String(t[r])&&e.style.setProperty(L(r),o)}for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(L(r))}}function M(){this._=t}function R(e,n,r){if(null!=e.events){if(e.events._=t,e.events[n]===r)return;null==r||"function"!=typeof r&&"object"!=typeof r?(null!=e.events[n]&&e.dom.removeEventListener(n.slice(2),e.events,!1),e.events[n]=void 0):(null==e.events[n]&&e.dom.addEventListener(n.slice(2),e.events,!1),e.events[n]=r)}else null==r||"function"!=typeof r&&"object"!=typeof r||(e.events=new M,e.dom.addEventListener(n.slice(2),e.events,!1),e.events[n]=r)}function _(e,t,n){"function"==typeof e.oninit&&a.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function D(e,t,n){"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}return M.prototype=Object.create(null),M.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(e,n,o){if(!e)throw new TypeError("DOM element being rendered to does not exist.");if(null!=O&&e.contains(O))throw new TypeError("Node is currently being rendered to and thus is locked.");var l=t,i=O,a=[],u=s(),c=e.namespaceURI;O=e,t="function"==typeof o?o:void 0;try{null==e.vnodes&&(e.textContent=""),n=r.normalizeChildren(Array.isArray(n)?n:[n]),p(e,e.vnodes,n,a,null,"http://www.w3.org/1999/xhtml"===c?void 0:c),e.vnodes=n,null!=u&&s()!==u&&"function"==typeof u.focus&&u.focus();for(var f=0;f<a.length;f++)a[f]()}finally{t=l,O=i}}}},742:(e,t,n)=>{var r=n(178);e.exports=function(e){return null==e&&(e=""),r("<",void 0,void 0,e,void 0,void 0)}},178:e=>{function t(e,t,n,r,o,l){return{tag:e,key:t,attrs:n,children:r,text:o,dom:l,domSize:void 0,state:void 0,events:void 0,instance:void 0}}t.normalize=function(e){return Array.isArray(e)?t("[",void 0,void 0,t.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:t("#",void 0,void 0,String(e),void 0,void 0)},t.normalizeChildren=function(e){var n=[];if(e.length){for(var r=null!=e[0]&&null!=e[0].key,o=1;o<e.length;o++)if((null!=e[o]&&null!=e[o].key)!==r)throw new TypeError(!r||null==e[o]&&"boolean"!=typeof e[o]?"In fragments, vnodes must either all have keys or none have keys.":"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.");for(o=0;o<e.length;o++)n[o]=t.normalize(e[o])}return n},e.exports=t},74:(e,t,n)=>{var r=n(164),o=n(165);e.exports=n(775)("undefined"!=typeof window?window:null,r,o.redraw)},775:(e,t,n)=>{var r=n(249),o=n(188);e.exports=function(e,t,n){var l=0;function i(e){return new t(e)}function a(e){return function(o,l){"string"!=typeof o?(l=o,o=o.url):null==l&&(l={});var a=new t((function(t,n){e(r(o,l.params),l,(function(e){if("function"==typeof l.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new l.type(e[n]);else e=new l.type(e);t(e)}),n)}));if(!0===l.background)return a;var s=0;function u(){0==--s&&"function"==typeof n&&n()}return function e(t){var n=t.then;return t.constructor=i,t.then=function(){s++;var r=n.apply(t,arguments);return r.then(u,(function(e){if(u(),0===s)throw e})),e(r)},t}(a)}}function s(e,t){for(var n in e.headers)if(o.call(e.headers,n)&&n.toLowerCase()===t)return!0;return!1}return i.prototype=t.prototype,i.__proto__=t,{request:a((function(t,n,r,l){var i,a=null!=n.method?n.method.toUpperCase():"GET",u=n.body,c=(null==n.serialize||n.serialize===JSON.serialize)&&!(u instanceof e.FormData||u instanceof e.URLSearchParams),f=n.responseType||("function"==typeof n.extract?"":"json"),d=new e.XMLHttpRequest,p=!1,v=!1,h=d,m=d.abort;for(var g in d.abort=function(){p=!0,m.call(this)},d.open(a,t,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),c&&null!=u&&!s(n,"content-type")&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||s(n,"accept")||d.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(d.withCredentials=n.withCredentials),n.timeout&&(d.timeout=n.timeout),d.responseType=f,n.headers)o.call(n.headers,g)&&d.setRequestHeader(g,n.headers[g]);d.onreadystatechange=function(e){if(!p&&4===e.target.readyState)try{var o,i=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(t),a=e.target.response;if("json"===f){if(!e.target.responseType&&"function"!=typeof n.extract)try{a=JSON.parse(e.target.responseText)}catch(e){a=null}}else f&&"text"!==f||null==a&&(a=e.target.responseText);if("function"==typeof n.extract?(a=n.extract(e.target,n),i=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),i)r(a);else{var s=function(){try{o=e.target.responseText}catch(e){o=a}var t=new Error(o);t.code=e.target.status,t.response=a,l(t)};0===d.status?setTimeout((function(){v||s()})):s()}}catch(e){l(e)}},d.ontimeout=function(e){v=!0;var t=new Error("Request timed out");t.code=e.target.status,l(t)},"function"==typeof n.config&&(d=n.config(d,n,t)||d)!==h&&(i=d.abort,d.abort=function(){p=!0,i.call(this)}),null==u?d.send():"function"==typeof n.serialize?d.send(n.serialize(u)):u instanceof e.FormData||u instanceof e.URLSearchParams?d.send(u):d.send(JSON.stringify(u))})),jsonp:a((function(t,n,r,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+l++,a=e.document.createElement("script");e[i]=function(t){delete e[i],a.parentNode.removeChild(a),r(t)},a.onerror=function(){delete e[i],a.parentNode.removeChild(a),o(new Error("JSONP request failed"))},a.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(i),e.document.documentElement.appendChild(a)}))}}},843:(e,t,n)=>{var r=n(165);e.exports=n(223)("undefined"!=typeof window?window:null,r)},641:(e,t,n)=>{var r=n(188);e.exports=Object.assign||function(e,t){for(var n in t)r.call(t,n)&&(e[n]=t[n])}},542:(e,t,n)=>{var r=n(188),o=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");e.exports=function(e,t){var n={};if(null!=t)for(var l in e)r.call(e,l)&&!o.test(l)&&t.indexOf(l)<0&&(n[l]=e[l]);else for(var l in e)r.call(e,l)&&!o.test(l)&&(n[l]=e[l]);return n}},188:e=>{e.exports={}.hasOwnProperty}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{const e=[],t=t=>e.find((e=>e.getId()==t)),r=n=>{let r=t(n);null!=r&&e.splice(e.indexOf(r),1)};var o=n(865);const l={view:function(e){return o("div",{class:"w-52 flex items-center space-between px-4 py-2.5 rounded-sm bg-slate-900"},[o("div",{class:"text-sm font-medium text-white grow truncate"},"New Portal"),o("div",{class:"flex space-x-3"},[o("svg",{class:"w-5 h-5 text-slate-300 hover:text-slate-100 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",onclick:()=>(e=>{let n=t(e);null!=n&&n.maximize()})(e.attrs.portal.getId())},o("path",{"fill-rule":"evenodd",d:"M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z","clip-rule":"evenodd"})),o("svg",{class:"w-5 h-5 text-slate-300 hover:text-slate-100 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",onclick:()=>r(e.attrs.portal.getId())},o("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"}))])])}},i={oncreate:e=>{e.attrs.portal.setPosition(e.dom.offsetLeft,e.dom.offsetTop)},view:function(e){return o("div",{class:"absolute -translate-x-6 translate-y-6",style:`z-index: ${e.attrs.portal.getId()}; top: ${20*e.attrs.portal.getId()}px; right: ${20*e.attrs.portal.getId()}px`},[o("div",{class:"w-screen max-w-xl border border-gray-300 border-opacity-75 bg-white rounded-lg shadow-xl overflow-hidden"},[o("div",{class:"bg-gray-100 px-4 py-4 sm:px-6"},[o("div",{class:"flex items-center justify-between"},[o("h2",{class:"text-base font-bold leading-6",id:"dialogTitle"},"New Portal"),o("div",{class:"flex items-center justify-between space-x-4"},[o("svg",{class:"w-6 h-6 text-slate-500 hover:text-slate-900 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",onclick:()=>(e=>{let n=t(e);null!=n&&n.minimize()})(e.attrs.portal.getId())},o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"})),o("svg",{class:"w-6 h-6 text-slate-500 hover:text-slate-900 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",onclick:()=>r(e.attrs.portal.getId())},o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}))])])]),o("div",{class:"p-4"},"{Title: 'New Portal'}")])])}},a={view:function(t){return o("div",{class:"h-full w-full"},[o("div",{id:"portals",class:"absolute left-0 top-0 w-full"},[e.map((e=>e.isOpen()?o(i,{portal:e}):null))]),o("div",{id:"anchors",class:"absolute left-0 bottom-0 w-full"},[o("div",{class:"p-4 flex items-center space-x-4"},[e.map((e=>e.isOpen()?null:o(l,{portal:e})))])]),o("div",{class:"min-h-full w-full min-w-full flex items-center justify-center"},[o("button",{class:"rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900",type:"button",onclick:()=>{return t=function(e,t,n){let r=e,o=t,l=n,i=!0,a={x:0,y:0};return{getId:()=>r,getTitle:()=>o,getContent:()=>l,maximize(){i=!0},minimize(){i=!1},isOpen:()=>i,setPosition(e,t){a={x:e,y:t}},getPosition:()=>a}}(e.length+1,"Portal","Portal content"),void e.push(t);var t}},"Open New Portal")])])}};o.mount(document.getElementById("container"),a)})()})();