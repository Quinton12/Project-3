/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);jQuery.noConflict();
var Prototype={Version:"1.7.2",Browser:function(){var a=navigator.userAgent,b="[object Opera]"==Object.prototype.toString.call(window.opera);return{IE:!!window.attachEvent&&!b,Opera:b,WebKit:-1<a.indexOf("AppleWebKit/"),Gecko:-1<a.indexOf("Gecko")&&-1===a.indexOf("KHTML"),MobileSafari:/Apple.*Mobile/.test(a)}}(),BrowserFeatures:{XPath:!!document.evaluate,SelectorsAPI:!!document.querySelector,ElementExtensions:function(){var a=window.Element||window.HTMLElement;return!(!a||!a.prototype)}(),SpecificElementExtensions:function(){if("undefined"!==
    typeof window.HTMLDivElement)return!0;var a=document.createElement("div"),b=document.createElement("form"),d=!1;a.__proto__&&a.__proto__!==b.__proto__&&(d=!0);return d}()},ScriptFragment:"<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>",JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/,emptyFunction:function(){},K:function(a){return a}};Prototype.Browser.MobileSafari&&(Prototype.BrowserFeatures.SpecificElementExtensions=!1);
var Class=function(){function a(){}var b=function(){for(var a in{toString:1})if("toString"===a)return!1;return!0}();return{create:function(){function b(){this.initialize.apply(this,arguments)}var e=null,f=$A(arguments);Object.isFunction(f[0])&&(e=f.shift());Object.extend(b,Class.Methods);b.superclass=e;b.subclasses=[];e&&(a.prototype=e.prototype,b.prototype=new a,e.subclasses.push(b));for(var e=0,k=f.length;e<k;e++)b.addMethods(f[e]);b.prototype.initialize||(b.prototype.initialize=Prototype.emptyFunction);
    return b.prototype.constructor=b},Methods:{addMethods:function(a){var e=this.superclass&&this.superclass.prototype,f=Object.keys(a);b&&(a.toString!=Object.prototype.toString&&f.push("toString"),a.valueOf!=Object.prototype.valueOf&&f.push("valueOf"));for(var k=0,p=f.length;k<p;k++){var n=f[k],l=a[n];if(e&&Object.isFunction(l)&&"$super"==l.argumentNames()[0]){var c=l,l=function(c){return function(){return e[c].apply(this,arguments)}}(n).wrap(c);l.valueOf=function(c){return function(){return c.valueOf.call(c)}}(c);
    l.toString=function(c){return function(){return c.toString.call(c)}}(c)}this.prototype[n]=l}return this}}}}();
(function(){function a(c){switch(c){case null:return"Null";case void 0:return"Undefined"}switch(typeof c){case "boolean":return"Boolean";case "number":return"Number";case "string":return"String"}return"Object"}function b(c,a){for(var b in a)c[b]=a[b];return c}function d(c){return e("",{"":c},[])}function e(c,b,g){b=b[c];"Object"===a(b)&&"function"===typeof b.toJSON&&(b=b.toJSON(c));c=l.call(b);switch(c){case "[object Number]":case "[object Boolean]":case "[object String]":b=b.valueOf()}switch(b){case null:return"null";
    case !0:return"true";case !1:return"false"}switch(typeof b){case "string":return b.inspect(!0);case "number":return isFinite(b)?String(b):"null";case "object":for(var d=0,h=g.length;d<h;d++)if(g[d]===b)throw new TypeError("Cyclic reference to '"+b+"' in object");g.push(b);var n=[];if("[object Array]"===c){d=0;for(h=b.length;d<h;d++){var k=e(d,b,g);n.push("undefined"===typeof k?"null":k)}n="["+n.join(",")+"]"}else{for(var f=Object.keys(b),d=0,h=f.length;d<h;d++)c=f[d],k=e(c,b,g),"undefined"!==typeof k&&
n.push(c.inspect(!0)+":"+k);n="{"+n.join(",")+"}"}g.pop();return n}}function f(c){return JSON.stringify(c)}function k(b){if("Object"!==a(b))throw new TypeError;var g=[],d;for(d in b)c.call(b,d)&&g.push(d);if(y)for(var l=0;d=h[l];l++)c.call(b,d)&&g.push(d);return g}function p(c){return"[object Array]"===l.call(c)}function n(c){return"undefined"===typeof c}var l=Object.prototype.toString,c=Object.prototype.hasOwnProperty,g=window.JSON&&"function"===typeof JSON.stringify&&"0"===JSON.stringify(0)&&"undefined"===
    typeof JSON.stringify(Prototype.K),h="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),y=function(){for(var c in{toString:1})if("toString"===c)return!1;return!0}();"function"==typeof Array.isArray&&Array.isArray([])&&!Array.isArray({})&&(p=Array.isArray);b(Object,{extend:b,inspect:function(c){try{return n(c)?"undefined":null===c?"null":c.inspect?c.inspect():String(c)}catch(a){if(a instanceof RangeError)return"...";throw a;}},toJSON:g?f:d,toQueryString:function(c){return $H(c).toQueryString()},
    toHTML:function(c){return c&&c.toHTML?c.toHTML():String.interpret(c)},keys:Object.keys||k,values:function(c){var a=[],b;for(b in c)a.push(c[b]);return a},clone:function(c){return b({},c)},isElement:function(c){return!(!c||1!=c.nodeType)},isArray:p,isHash:function(c){return c instanceof Hash},isFunction:function(c){return"[object Function]"===l.call(c)},isString:function(c){return"[object String]"===l.call(c)},isNumber:function(c){return"[object Number]"===l.call(c)},isDate:function(c){return"[object Date]"===
    l.call(c)},isUndefined:n})})();
Object.extend(Function.prototype,function(){function a(a,b){for(var d=a.length,l=b.length;l--;)a[d+l]=b[l];return a}function b(b,d){b=e.call(b,0);return a(b,d)}function d(a){if(2>arguments.length&&Object.isUndefined(arguments[0]))return this;if(!Object.isFunction(this))throw new TypeError("The object is not callable.");var d=function(){},n=this,l=e.call(arguments,1),c=function(){var g=b(l,arguments);return n.apply(this instanceof c?this:a,g)};d.prototype=this.prototype;c.prototype=new d;return c}
    var e=Array.prototype.slice,f={argumentNames:function(){var a=this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return 1!=a.length||a[0]?a:[]},bindAsEventListener:function(b){var d=this,n=e.call(arguments,1);return function(l){l=a([l||window.event],n);return d.apply(b,l)}},curry:function(){if(!arguments.length)return this;var a=this,d=e.call(arguments,0);return function(){var e=b(d,arguments);return a.apply(this,
        e)}},delay:function(a){var b=this,d=e.call(arguments,1);return window.setTimeout(function(){return b.apply(b,d)},1E3*a)},defer:function(){var b=a([.01],arguments);return this.delay.apply(this,b)},wrap:function(b){var d=this;return function(){var e=a([d.bind(this)],arguments);return b.apply(this,e)}},methodize:function(){if(this._methodized)return this._methodized;var b=this;return this._methodized=function(){var d=a([this],arguments);return b.apply(null,d)}}};Function.prototype.bind||(f.bind=d);return f}());
(function(a){function b(){return this.getUTCFullYear()+"-"+(this.getUTCMonth()+1).toPaddedString(2)+"-"+this.getUTCDate().toPaddedString(2)+"T"+this.getUTCHours().toPaddedString(2)+":"+this.getUTCMinutes().toPaddedString(2)+":"+this.getUTCSeconds().toPaddedString(2)+"Z"}function d(){return this.toISOString()}a.toISOString||(a.toISOString=b);a.toJSON||(a.toJSON=d)})(Date.prototype);RegExp.prototype.match=RegExp.prototype.test;
RegExp.escape=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")};
var PeriodicalExecuter=Class.create({initialize:function(a,b){this.callback=a;this.frequency=b;this.currentlyExecuting=!1;this.registerCallback()},registerCallback:function(){this.timer=setInterval(this.onTimerEvent.bind(this),1E3*this.frequency)},execute:function(){this.callback(this)},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onTimerEvent:function(){if(!this.currentlyExecuting)try{this.currentlyExecuting=!0,this.execute(),this.currentlyExecuting=!1}catch(a){throw this.currentlyExecuting=
    !1,a;}}});Object.extend(String,{interpret:function(a){return null==a?"":String(a)},specialChar:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\\":"\\\\"}});
Object.extend(String.prototype,function(){function a(a){if(Object.isFunction(a))return a;var c=new Template(a);return function(a){return c.evaluate(a)}}function b(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}function d(a){var c=this.strip().match(/([^?#]*)(#.*)?$/);return c?c[1].split(a||"&").inject({},function(c,a){if((a=a.split("="))[0]){var b=decodeURIComponent(a.shift()),d=1<a.length?a.join("="):a[0];void 0!=d&&(d=d.gsub("+"," "),d=decodeURIComponent(d));b in c?(Object.isArray(c[b])||(c[b]=
    [c[b]]),c[b].push(d)):c[b]=d}return c}):{}}function e(a){var c=this.unfilterJSON(),b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;b.test(c)&&(c=c.replace(b,function(c){return"\\u"+("0000"+c.charCodeAt(0).toString(16)).slice(-4)}));try{if(!a||c.isJSON())return eval("("+c+")")}catch(d){}throw new SyntaxError("Badly formed JSON string: "+this.inspect());}function f(){var a=this.unfilterJSON();return JSON.parse(a)}function k(a,c){c=Object.isNumber(c)?
    c:0;return this.lastIndexOf(a,c)===c}function p(a,c){a=String(a);c=Object.isNumber(c)?c:this.length;0>c&&(c=0);c>this.length&&(c=this.length);var b=c-a.length;return 0<=b&&this.indexOf(a,b)===b}var n=window.JSON&&"function"===typeof JSON.parse&&JSON.parse('{"test": true}').test;return{gsub:function(b,c){var d="",h=this,e;c=a(c);Object.isString(b)&&(b=RegExp.escape(b));if(!(b.length||b.source&&"(?:)"!==b.source))return c=c(""),c+h.split("").join(c)+c;for(;0<h.length;)(e=h.match(b))&&0<e[0].length?
    (d+=h.slice(0,e.index),d+=String.interpret(c(e)),h=h.slice(e.index+e[0].length)):(d+=h,h="");return d},sub:function(b,c,d){c=a(c);d=Object.isUndefined(d)?1:d;return this.gsub(b,function(a){return 0>--d?a[0]:c(a)})},scan:function(a,c){this.gsub(a,c);return String(this)},truncate:function(a,c){a=a||30;c=Object.isUndefined(c)?"...":c;return this.length>a?this.slice(0,a-c.length)+c:String(this)},strip:String.prototype.trim||b,stripTags:function(){return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,
    "")},stripScripts:function(){return this.replace(new RegExp(Prototype.ScriptFragment,"img"),"")},extractScripts:function(){var a=new RegExp(Prototype.ScriptFragment,"im");return(this.match(new RegExp(Prototype.ScriptFragment,"img"))||[]).map(function(c){return(c.match(a)||["",""])[1]})},evalScripts:function(){return this.extractScripts().map(function(a){return eval(a)})},escapeHTML:function(){return this.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(){return this.stripTags().replace(/&lt;/g,
    "<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},toQueryParams:d,parseQuery:d,toArray:function(){return this.split("")},succ:function(){return this.slice(0,this.length-1)+String.fromCharCode(this.charCodeAt(this.length-1)+1)},times:function(a){return 1>a?"":Array(a+1).join(this)},camelize:function(){return this.replace(/-+(.)?/g,function(a,c){return c?c.toUpperCase():""})},capitalize:function(){return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase()},underscore:function(){return this.replace(/::/g,
    "/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/-/g,"_").toLowerCase()},dasherize:function(){return this.replace(/_/g,"-")},inspect:function(a){var c=this.replace(/[\x00-\x1f\\]/g,function(c){return c in String.specialChar?String.specialChar[c]:"\\u00"+c.charCodeAt().toPaddedString(2,16)});return a?'"'+c.replace(/"/g,'\\"')+'"':"'"+c.replace(/'/g,"\\'")+"'"},unfilterJSON:function(a){return this.replace(a||Prototype.JSONFilter,"$1")},isJSON:function(){var a=
    this;if(a.blank())return!1;a=a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@");a=a.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]");a=a.replace(/(?:^|:|,)(?:\s*\[)+/g,"");return/^[\],:{}\s]*$/.test(a)},evalJSON:n?f:e,include:function(a){return-1<this.indexOf(a)},startsWith:String.prototype.startsWith||k,endsWith:String.prototype.endsWith||p,empty:function(){return""==this},blank:function(){return/^\s*$/.test(this)},interpolate:function(a,c){return(new Template(this,
    c)).evaluate(a)}}}());
var Template=Class.create({initialize:function(a,b){this.template=a.toString();this.pattern=b||Template.Pattern},evaluate:function(a){a&&Object.isFunction(a.toTemplateReplacements)&&(a=a.toTemplateReplacements());return this.template.gsub(this.pattern,function(b){if(null==a)return b[1]+"";var d=b[1]||"";if("\\"==d)return b[2];var e=a,f=b[3],k=/^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;b=k.exec(f);if(null==b)return d;for(;null!=b;){var p=b[1].startsWith("[")?b[2].replace(/\\\\]/g,"]"):b[1],e=e[p];if(null==
    e||""==b[3])break;f=f.substring("["==b[3]?b[1].length:b[0].length);b=k.exec(f)}return d+String.interpret(e)})}});Template.Pattern=/(^|.|\r|\n)(#\{(.*?)\})/;
var $break={},Enumerable=function(){function a(a,b){a=a||Prototype.K;var c=!0;this.each(function(d,h){c=c&&!!a.call(b,d,h,this);if(!c)throw $break;},this);return c}function b(a,b){a=a||Prototype.K;var c=!1;this.each(function(d,h){if(c=!!a.call(b,d,h,this))throw $break;},this);return c}function d(a,b){a=a||Prototype.K;var c=[];this.each(function(d,h){c.push(a.call(b,d,h,this))},this);return c}function e(a,b){var c;this.each(function(d,h){if(a.call(b,d,h,this))throw c=d,$break;},this);return c}function f(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b){var c=[];this.each(function(d,h){a.call(b,d,h,this)&&c.push(d)},this);return c}function k(a){if(Object.isFunction(this.indexOf)&&-1!=this.indexOf(a))return!0;var b=!1;this.each(function(c){if(c==a)throw b=!0,$break;});return b}function p(){return this.map()}return{each:function(a,b){try{this._each(a,b)}catch(c){if(c!=$break)throw c;}return this},eachSlice:function(a,b,c){var d=-a,h=[],e=this.toArray();if(1>a)return e;for(;(d+=a)<e.length;)h.push(e.slice(d,d+a));return h.collect(b,c)},all:a,every:a,
    any:b,some:b,collect:d,map:d,detect:e,findAll:f,select:f,filter:f,grep:function(a,b,c){b=b||Prototype.K;var d=[];Object.isString(a)&&(a=new RegExp(RegExp.escape(a)));this.each(function(h,e){a.match(h)&&d.push(b.call(c,h,e,this))},this);return d},include:k,member:k,inGroupsOf:function(a,b){b=Object.isUndefined(b)?null:b;return this.eachSlice(a,function(c){for(;c.length<a;)c.push(b);return c})},inject:function(a,b,c){this.each(function(d,h){a=b.call(c,a,d,h,this)},this);return a},invoke:function(a){var b=
        $A(arguments).slice(1);return this.map(function(c){return c[a].apply(c,b)})},max:function(a,b){a=a||Prototype.K;var c;this.each(function(d,h){d=a.call(b,d,h,this);if(null==c||d>=c)c=d},this);return c},min:function(a,b){a=a||Prototype.K;var c;this.each(function(d,h){d=a.call(b,d,h,this);if(null==c||d<c)c=d},this);return c},partition:function(a,b){a=a||Prototype.K;var c=[],d=[];this.each(function(h,e){(a.call(b,h,e,this)?c:d).push(h)},this);return[c,d]},pluck:function(a){var b=[];this.each(function(c){b.push(c[a])});
        return b},reject:function(a,b){var c=[];this.each(function(d,h){a.call(b,d,h,this)||c.push(d)},this);return c},sortBy:function(a,b){return this.map(function(c,d){return{value:c,criteria:a.call(b,c,d,this)}},this).sort(function(c,a){var b=c.criteria,d=a.criteria;return b<d?-1:b>d?1:0}).pluck("value")},toArray:p,entries:p,zip:function(){var a=Prototype.K,b=$A(arguments);Object.isFunction(b.last())&&(a=b.pop());var c=[this].concat(b).map($A);return this.map(function(b,d){return a(c.pluck(d))})},size:function(){return this.toArray().length},
    inspect:function(){return"#<Enumerable:"+this.toArray().inspect()+">"},find:e}}();function $A(a){if(!a)return[];if("toArray"in Object(a))return a.toArray();for(var b=a.length||0,d=Array(b);b--;)d[b]=a[b];return d}function $w(a){return Object.isString(a)?(a=a.strip())?a.split(/\s+/):[]:[]}Array.from=$A;
(function(){function a(c,a){for(var b=0,d=this.length>>>0;b<d;b++)b in this&&c.call(a,this[b],b,this)}function b(){return y.call(this,0)}function d(c,a){if(null==this)throw new TypeError;var b=Object(this),d=b.length>>>0;if(0===d)return-1;a=Number(a);isNaN(a)?a=0:0!==a&&isFinite(a)&&(a=(0<a?1:-1)*Math.floor(Math.abs(a)));if(a>d)return-1;for(var g=0<=a?a:Math.max(d-Math.abs(a),0);g<d;g++)if(g in b&&b[g]===c)return g;return-1}function e(c,a){if(null==this)throw new TypeError;var b=Object(this),d=b.length>>>
    0;if(0===d)return-1;Object.isUndefined(a)?a=d:(a=Number(a),isNaN(a)?a=0:0!==a&&isFinite(a)&&(a=(0<a?1:-1)*Math.floor(Math.abs(a))));for(d=0<=a?Math.min(a,d-1):d-Math.abs(a);0<=d;d--)if(d in b&&b[d]===c)return d;return-1}function f(c){var a=[],b=y.call(arguments,0),d,g=0;b.unshift(this);for(var h=0,e=b.length;h<e;h++)if(d=b[h],!Object.isArray(d)||"callee"in d)a[g++]=d;else for(var f=0,k=d.length;f<k;f++)f in d&&(a[g]=d[f]),g++;a.length=g;return a}function k(a){return function(){if(0===arguments.length)return a.call(this,
    Prototype.K);if(void 0===arguments[0]){var c=y.call(arguments,1);c.unshift(Prototype.K);return a.apply(this,c)}return a.apply(this,arguments)}}function p(a,c){if(null==this)throw new TypeError;a=a||Prototype.K;for(var b=Object(this),d=[],g=0,h=0,e=b.length>>>0;h<e;h++)h in b&&(d[g]=a.call(c,b[h],h,b)),g++;d.length=g;return d}function n(a,c){if(null==this||!Object.isFunction(a))throw new TypeError;for(var b=Object(this),d=[],g,h=0,e=b.length>>>0;h<e;h++)h in b&&(g=b[h],a.call(c,g,h,b)&&d.push(g));
    return d}function l(a,c){if(null==this)throw new TypeError;a=a||Prototype.K;for(var b=Object(this),d=0,g=b.length>>>0;d<g;d++)if(d in b&&a.call(c,b[d],d,b))return!0;return!1}function c(a,c){if(null==this)throw new TypeError;a=a||Prototype.K;for(var b=Object(this),d=0,g=b.length>>>0;d<g;d++)if(d in b&&!a.call(c,b[d],d,b))return!1;return!0}function g(a,c,b){c=c||Prototype.K;return J.call(this,c.bind(b),a)}var h=Array.prototype,y=h.slice,E=h.forEach;E||(E=a);h.map&&(p=k(Array.prototype.map));h.filter&&
(n=Array.prototype.filter);h.some&&(l=k(Array.prototype.some));h.every&&(c=k(Array.prototype.every));var J=h.reduce;h.reduce||(g=Enumerable.inject);Object.extend(h,Enumerable);h._reverse||(h._reverse=h.reverse);Object.extend(h,{_each:E,map:p,collect:p,select:n,filter:n,findAll:n,some:l,any:l,every:c,all:c,inject:g,clear:function(){this.length=0;return this},first:function(){return this[0]},last:function(){return this[this.length-1]},compact:function(){return this.select(function(a){return null!=a})},
    flatten:function(){return this.inject([],function(a,c){if(Object.isArray(c))return a.concat(c.flatten());a.push(c);return a})},without:function(){var a=y.call(arguments,0);return this.select(function(c){return!a.include(c)})},reverse:function(a){return(!1===a?this.toArray():this)._reverse()},uniq:function(a){return this.inject([],function(c,b,d){0!=d&&(a?c.last()==b:c.include(b))||c.push(b);return c})},intersect:function(a){return this.uniq().findAll(function(c){return-1!==a.indexOf(c)})},clone:b,
    toArray:b,size:function(){return this.length},inspect:function(){return"["+this.map(Object.inspect).join(", ")+"]"}});(function(){return 1!==[].concat(arguments)[0][0]})(1,2)&&(h.concat=f);h.indexOf||(h.indexOf=d);h.lastIndexOf||(h.lastIndexOf=e)})();function $H(a){return new Hash(a)}
var Hash=Class.create(Enumerable,function(){function a(){return Object.clone(this._object)}function b(a,b){if(Object.isUndefined(b))return a;b=String.interpret(b);b=b.gsub(/(\r)?\n/,"\r\n");b=encodeURIComponent(b);b=b.gsub(/%20/,"+");return a+"="+b}return{initialize:function(a){this._object=Object.isHash(a)?a.toObject():Object.clone(a)},_each:function(a,b){var f=0,k;for(k in this._object){var p=this._object[k],n=[k,p];n.key=k;n.value=p;a.call(b,n,f);f++}},set:function(a,b){return this._object[a]=
    b},get:function(a){if(this._object[a]!==Object.prototype[a])return this._object[a]},unset:function(a){var b=this._object[a];delete this._object[a];return b},toObject:a,toTemplateReplacements:a,keys:function(){return this.pluck("key")},values:function(){return this.pluck("value")},index:function(a){var b=this.detect(function(b){return b.value===a});return b&&b.key},merge:function(a){return this.clone().update(a)},update:function(a){return(new Hash(a)).inject(this,function(a,b){a.set(b.key,b.value);
    return a})},toQueryString:function(){return this.inject([],function(a,e){var f=encodeURIComponent(e.key),k=e.value;if(k&&"object"==typeof k){if(Object.isArray(k)){for(var p=[],n=0,l=k.length,c;n<l;n++)c=k[n],p.push(b(f,c));return a.concat(p)}}else a.push(b(f,k));return a}).join("&")},inspect:function(){return"#<Hash:{"+this.map(function(a){return a.map(Object.inspect).join(": ")}).join(", ")+"}>"},toJSON:a,clone:function(){return new Hash(this)}}}());Hash.from=$H;
Object.extend(Number.prototype,function(){return{toColorPart:function(){return this.toPaddedString(2,16)},succ:function(){return this+1},times:function(a,b){$R(0,this,!0).each(a,b);return this},toPaddedString:function(a,b){var d=this.toString(b||10);return"0".times(a-d.length)+d},abs:function(){return Math.abs(this)},round:function(){return Math.round(this)},ceil:function(){return Math.ceil(this)},floor:function(){return Math.floor(this)}}}());function $R(a,b,d){return new ObjectRange(a,b,d)}
var ObjectRange=Class.create(Enumerable,function(){return{initialize:function(a,b,d){this.start=a;this.end=b;this.exclusive=d},_each:function(a,b){var d=this.start,e;for(e=0;this.include(d);e++)a.call(b,d,e),d=d.succ()},include:function(a){return a<this.start?!1:this.exclusive?a<this.end:a<=this.end}}}()),Abstract={},Try={these:function(){for(var a,b=0,d=arguments.length;b<d;b++){var e=arguments[b];try{a=e();break}catch(f){}}return a}},Ajax={getTransport:function(){return Try.these(function(){return new XMLHttpRequest},
    function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")})||!1},activeRequestCount:0,Responders:{responders:[],_each:function(a,b){this.responders._each(a,b)},register:function(a){this.include(a)||this.responders.push(a)},unregister:function(a){this.responders=this.responders.without(a)},dispatch:function(a,b,d,e){this.each(function(f){if(Object.isFunction(f[a]))try{f[a].apply(f,[b,d,e])}catch(k){}})}}};Object.extend(Ajax.Responders,Enumerable);
Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++},onComplete:function(){Ajax.activeRequestCount--}});Ajax.Base=Class.create({initialize:function(a){this.options={method:"post",asynchronous:!0,contentType:"application/x-www-form-urlencoded",encoding:"UTF-8",parameters:"",evalJSON:!0,evalJS:!0};Object.extend(this.options,a||{});this.options.method=this.options.method.toLowerCase();Object.isHash(this.options.parameters)&&(this.options.parameters=this.options.parameters.toObject())}});
Ajax.Request=Class.create(Ajax.Base,{_complete:!1,initialize:function($super,b,d){$super(d);this.transport=Ajax.getTransport();this.request(b)},request:function(a){this.url=a;this.method=this.options.method;a=Object.isString(this.options.parameters)?this.options.parameters:Object.toQueryString(this.options.parameters);["get","post"].include(this.method)||(a+=(a?"&":"")+"_method="+this.method,this.method="post");a&&"get"===this.method&&(this.url+=(this.url.include("?")?"&":"?")+a);this.parameters=
    a.toQueryParams();try{var b=new Ajax.Response(this);if(this.options.onCreate)this.options.onCreate(b);Ajax.Responders.dispatch("onCreate",this,b);this.transport.open(this.method.toUpperCase(),this.url,this.options.asynchronous);this.options.asynchronous&&this.respondToReadyState.bind(this).defer(1);this.transport.onreadystatechange=this.onStateChange.bind(this);this.setRequestHeaders();this.body="post"==this.method?this.options.postBody||a:null;this.transport.send(this.body);if(!this.options.asynchronous&&
    this.transport.overrideMimeType)this.onStateChange()}catch(d){this.dispatchException(d)}},onStateChange:function(){var a=this.transport.readyState;1<a&&(4!=a||!this._complete)&&this.respondToReadyState(this.transport.readyState)},setRequestHeaders:function(){var a={"X-Requested-With":"XMLHttpRequest","X-Prototype-Version":Prototype.Version,Accept:"text/javascript, text/html, application/xml, text/xml, */*"};"post"==this.method&&(a["Content-type"]=this.options.contentType+(this.options.encoding?"; charset="+
this.options.encoding:""),this.transport.overrideMimeType&&2005>(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]&&(a.Connection="close"));if("object"==typeof this.options.requestHeaders){var b=this.options.requestHeaders;if(Object.isFunction(b.push))for(var d=0,e=b.length;d<e;d+=2)a[b[d]]=b[d+1];else $H(b).each(function(b){a[b.key]=b.value})}for(var f in a)null!=a[f]&&this.transport.setRequestHeader(f,a[f])},success:function(){var a=this.getStatus();return!a||200<=a&&300>a||304==a},getStatus:function(){try{return 1223===
this.transport.status?204:this.transport.status||0}catch(a){return 0}},respondToReadyState:function(a){a=Ajax.Request.Events[a];var b=new Ajax.Response(this);if("Complete"==a){try{this._complete=!0,(this.options["on"+b.status]||this.options["on"+(this.success()?"Success":"Failure")]||Prototype.emptyFunction)(b,b.headerJSON)}catch(d){this.dispatchException(d)}var e=b.getHeader("Content-type");("force"==this.options.evalJS||this.options.evalJS&&this.isSameOrigin()&&e&&e.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))&&
this.evalResponse()}try{(this.options["on"+a]||Prototype.emptyFunction)(b,b.headerJSON),Ajax.Responders.dispatch("on"+a,this,b,b.headerJSON)}catch(f){this.dispatchException(f)}"Complete"==a&&(this.transport.onreadystatechange=Prototype.emptyFunction)},isSameOrigin:function(){var a=this.url.match(/^\s*https?:\/\/[^\/]*/);return!a||a[0]=="#{protocol}//#{domain}#{port}".interpolate({protocol:location.protocol,domain:document.domain,port:location.port?":"+location.port:""})},getHeader:function(a){try{return this.transport.getResponseHeader(a)||
null}catch(b){return null}},evalResponse:function(){try{return eval((this.transport.responseText||"").unfilterJSON())}catch(a){this.dispatchException(a)}},dispatchException:function(a){(this.options.onException||Prototype.emptyFunction)(this,a);Ajax.Responders.dispatch("onException",this,a)}});Ajax.Request.Events=["Uninitialized","Loading","Loaded","Interactive","Complete"];
Ajax.Response=Class.create({initialize:function(a){this.request=a;a=this.transport=a.transport;var b=this.readyState=a.readyState;if(2<b&&!Prototype.Browser.IE||4==b)this.status=this.getStatus(),this.statusText=this.getStatusText(),this.responseText=String.interpret(a.responseText),this.headerJSON=this._getHeaderJSON();4==b&&(a=a.responseXML,this.responseXML=Object.isUndefined(a)?null:a,this.responseJSON=this._getResponseJSON())},status:0,statusText:"",getStatus:Ajax.Request.prototype.getStatus,getStatusText:function(){try{return this.transport.statusText||
""}catch(a){return""}},getHeader:Ajax.Request.prototype.getHeader,getAllHeaders:function(){try{return this.getAllResponseHeaders()}catch(a){return null}},getResponseHeader:function(a){return this.transport.getResponseHeader(a)},getAllResponseHeaders:function(){return this.transport.getAllResponseHeaders()},_getHeaderJSON:function(){var a=this.getHeader("X-JSON");if(!a)return null;try{a=decodeURIComponent(escape(a))}catch(b){}try{return a.evalJSON(this.request.options.sanitizeJSON||!this.request.isSameOrigin())}catch(d){this.request.dispatchException(d)}},
    _getResponseJSON:function(){var a=this.request.options;if(!a.evalJSON||"force"!=a.evalJSON&&!(this.getHeader("Content-type")||"").include("application/json")||this.responseText.blank())return null;try{return this.responseText.evalJSON(a.sanitizeJSON||!this.request.isSameOrigin())}catch(b){this.request.dispatchException(b)}}});
Ajax.Updater=Class.create(Ajax.Request,{initialize:function($super,b,d,e){this.container={success:b.success||b,failure:b.failure||(b.success?null:b)};e=Object.clone(e);var f=e.onComplete;e.onComplete=function(b,d){this.updateContent(b.responseText);Object.isFunction(f)&&f(b,d)}.bind(this);$super(d,e)},updateContent:function(a){var b=this.container[this.success()?"success":"failure"],d=this.options;d.evalScripts||(a=a.stripScripts());if(b=$(b))if(d.insertion)if(Object.isString(d.insertion)){var e=
{};e[d.insertion]=a;b.insert(e)}else d.insertion(b,a);else b.update(a)}});
Ajax.PeriodicalUpdater=Class.create(Ajax.Base,{initialize:function($super,b,d,e){$super(e);this.onComplete=this.options.onComplete;this.frequency=this.options.frequency||2;this.decay=this.options.decay||1;this.updater={};this.container=b;this.url=d;this.start()},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent()},stop:function(){this.updater.options.onComplete=void 0;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments)},
    updateComplete:function(a){this.options.decay&&(this.decay=a.responseText==this.lastText?this.decay*this.options.decay:1,this.lastText=a.responseText);this.timer=this.onTimerEvent.bind(this).delay(this.decay*this.frequency)},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options)}});
(function(a){function b(a){if(1<arguments.length){for(var c=0,g=[],h=arguments.length;c<h;c++)g.push(b(arguments[c]));return g}Object.isString(a)&&(a=document.getElementById(a));return d.extend(a)}function d(a,c){c=c||{};a=a.toLowerCase();if(ja&&c.name)return a="<"+a+' name="'+c.name+'">',delete c.name,d.writeAttribute(document.createElement(a),c);ea[a]||(ea[a]=d.extend(document.createElement(a)));var b="select"===a||"type"in c?document.createElement(a):ea[a].cloneNode(!1);return d.writeAttribute(b,
    c)}function e(a,c){a=b(a);if(c&&c.toElement)c=c.toElement();else if(!Object.isElement(c)){c=Object.toHTML(c);var d=a.ownerDocument.createRange();d.selectNode(a);c.evalScripts.bind(c).defer();c=d.createContextualFragment(c.stripScripts())}a.parentNode.replaceChild(c,a);return a}function f(a,c){a=b(a);c&&c.toElement&&(c=c.toElement());if(Object.isElement(c))return a.parentNode.replaceChild(c,a),a;c=Object.toHTML(c);var g=a.parentNode,h=g.tagName.toUpperCase();if(h in fa.tags){var e=d.next(a),h=k(h,
    c.stripScripts());g.removeChild(a);h.each(e?function(a){g.insertBefore(a,e)}:function(a){g.appendChild(a)})}else a.outerHTML=c.stripScripts();c.evalScripts.bind(c).defer();return a}function k(a,c,b){var d=fa.tags[a];a=z;var g=!!d;!g&&b&&(g=!0,d=["","",0]);if(g)for(a.innerHTML="&#160;"+d[0]+c+d[1],a.removeChild(a.firstChild),c=d[2];c--;)a=a.firstChild;else a.innerHTML=c;return $A(a.childNodes)}function p(a){var c=m(a);c&&(d.stopObserving(a),ra||(a._prototypeUID=sa),delete d.Storage[c])}function n(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         c,g){a=b(a);g=g||-1;for(var h=[];(a=a[c])&&(a.nodeType===Node.ELEMENT_NODE&&h.push(d.extend(a)),h.length!==g););return h}function l(a){for(a=b(a).firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return b(a)}function c(a){var c=[];for(a=b(a).firstChild;a;)a.nodeType===Node.ELEMENT_NODE&&c.push(d.extend(a)),a=a.nextSibling;return c}function g(a){return n(a,"previousSibling")}function h(a){return n(a,"nextSibling")}function y(a,c,g,h){a=b(a);g=g||0;h=h||0;Object.isNumber(g)&&(h=g,g=null);
    for(;a=a[c];)if(1===a.nodeType&&!(g&&!Prototype.Selector.match(a,g)||0<=--h))return d.extend(a)}function E(a){a=b(a);var c=ta.call(arguments,1).join(", ");return Prototype.Selector.select(c,a)}function J(a,c){a=b(a);for(c=b(c);a=a.parentNode;)if(a===c)return!0;return!1}function U(a,c){a=b(a);c=b(c);return c.contains?c.contains(a)&&c!==a:J(a,c)}function da(a,c){a=b(a);c=b(c);return 8===(a.compareDocumentPosition(c)&8)}function V(a,c){return b(a).getAttribute(c)}function W(a,c){a=b(a);var d=D.read;
    if(d.values[c])return d.values[c](a,c);d.names[c]&&(c=d.names[c]);return c.include(":")?a.attributes&&a.attributes[c]?a.attributes[c].value:null:a.getAttribute(c)}function pa(a,c){return"title"===c?a.title:a.getAttribute(c)}function K(a,c){c=D.has[c]||c;var d=b(a).getAttributeNode(c);return!(!d||!d.specified)}function s(a,c){return"checked"===c?a.checked:K(a,c)}function q(a){if(ka[a])return ka[a];var c=new RegExp("(^|\\s+)"+a+"(\\s+|$)");return ka[a]=c}function L(a,c){if(a=b(a)){var d=a.className;
    return 0===d.length?!1:d===c?!0:q(c).test(d)}}function S(a,c){return a.getAttribute(c,2)}function T(a,c){return b(a).hasAttribute(c)?c:null}function la(a,c){a=b(a);c="float"===c||"cssFloat"===c?"styleFloat":c.camelize();var g=a.style[c];!g&&a.currentStyle&&(g=a.currentStyle[c]);return"opacity"!==c||na?"auto"===g?"width"!==c&&"height"!==c||!d.visible(a)?null:d.measure(a,c)+"px":g:G(a)}function X(a,c){a=b(a);1==c||""===c?c="":1E-5>c&&(c=0);a.style.opacity=c;return a}function M(a,c){if(na)return X(a,
    c);var g=b(a);g.currentStyle&&g.currentStyle.hasLayout||(g.style.zoom=1);a=g;var g=d.getStyle(a,"filter"),h=a.style;if(1==c||""===c)return(g=(g||"").replace(/alpha\([^\)]*\)/gi,""))?h.filter=g:h.removeAttribute("filter"),a;1E-5>c&&(c=0);h.filter=(g||"").replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+100*c+")";return a}function N(a){return d.getStyle(a,"opacity")}function G(a){if(na)return N(a);a=d.getStyle(a,"filter");return 0===a.length?1:(a=(a||"").match(/alpha\(opacity=(.*)\)/))&&a[1]?parseFloat(a[1])/
100:1}function m(a){if(a===window)return 0;"undefined"===typeof a._prototypeUID&&(a._prototypeUID=d.Storage.UID++);return a._prototypeUID}function r(a){return a===window?0:a==document?1:a.uniqueID}function t(a){if(a=b(a))return a=m(a),d.Storage[a]||(d.Storage[a]=$H()),d.Storage[a]}function u(a,c){for(var b in c){var d=c[b];!Object.isFunction(d)||b in a||(a[b]=d.methodize())}}function x(a){if(!a||m(a)in oa||a.nodeType!==Node.ELEMENT_NODE||a==window)return a;var c=Object.clone(ua),b=a.tagName.toUpperCase();
    O[b]&&Object.extend(c,O[b]);u(a,c);oa[m(a)]=!0;return a}function Y(a){if(!a||m(a)in oa)return a;var c=a.tagName;c&&/^(?:object|applet|embed)$/i.test(c)&&(u(a,d.Methods),u(a,d.Methods.Simulated),u(a,d.Methods.ByTag[c.toUpperCase()]));return a}function ia(a,c){a=a.toUpperCase();O[a]||(O[a]={});Object.extend(O[a],c)}function v(a,c,b){Object.isUndefined(b)&&(b=!1);for(var d in c){var g=c[d];Object.isFunction(g)&&(b&&d in a||(a[d]=g.methodize()))}}function H(a){var c,b={OPTGROUP:"OptGroup",TEXTAREA:"TextArea",
    P:"Paragraph",FIELDSET:"FieldSet",UL:"UList",OL:"OList",DL:"DList",DIR:"Directory",H1:"Heading",H2:"Heading",H3:"Heading",H4:"Heading",H5:"Heading",H6:"Heading",Q:"Quote",INS:"Mod",DEL:"Mod",A:"Anchor",IMG:"Image",CAPTION:"TableCaption",COL:"TableCol",COLGROUP:"TableCol",THEAD:"TableSection",TFOOT:"TableSection",TBODY:"TableSection",TR:"TableRow",TH:"TableCell",TD:"TableCell",FRAMESET:"FrameSet",IFRAME:"IFrame"};b[a]&&(c="HTML"+b[a]+"Element");if(window[c])return window[c];c="HTML"+a+"Element";if(window[c])return window[c];
    c="HTML"+a.capitalize()+"Element";if(window[c])return window[c];a=document.createElement(a);return a.__proto__||a.constructor.prototype}function I(){ea=z=null}var sa,ta=Array.prototype.slice,z=document.createElement("div");a.$=b;a.Node||(a.Node={});a.Node.ELEMENT_NODE||Object.extend(a.Node,{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,
    NOTATION_NODE:12});var ea={},ja=function(){try{var a=document.createElement('<input name="x">');return"input"===a.tagName.toLowerCase()&&"x"===a.name}catch(c){return!1}}(),B=a.Element;a.Element=d;Object.extend(a.Element,B||{});B&&(a.Element.prototype=B.prototype);d.Methods={ByTag:{},Simulated:{}};var B={},P={id:"id",className:"class"};B.inspect=function(a){a=b(a);var c="<"+a.tagName.toLowerCase(),d,g,h;for(h in P)d=P[h],(g=(a[h]||"").toString())&&(c+=" "+d+"="+g.inspect(!0));return c+">"};Object.extend(B,
    {visible:function(a){return"none"!==b(a).style.display},toggle:function(a,c){a=b(a);Object.isUndefined(c)&&(c=!d.visible(a));d[c?"show":"hide"](a);return a},hide:function(a){a=b(a);a.style.display="none";return a},show:function(a){a=b(a);a.style.display="";return a}});var C=function(){var a=document.createElement("select"),c=!0;a.innerHTML='<option value="test">test</option>';a.options&&a.options[0]&&(c="OPTION"!==a.options[0].nodeName.toUpperCase());return c}(),Q=function(){try{var a=document.createElement("table");
    if(a&&a.tBodies)return a.innerHTML="<tbody><tr><td>test</td></tr></tbody>","undefined"==typeof a.tBodies[0]}catch(c){return!0}}(),R=function(){try{var a=document.createElement("div");a.innerHTML="<link />";return 0===a.childNodes.length}catch(c){return!0}}(),wa=C||Q||R,Z=function(){var a=document.createElement("script"),c=!1;try{a.appendChild(document.createTextNode("")),c=!a.firstChild||a.firstChild&&3!==a.firstChild.nodeType}catch(b){c=!0}return c}(),fa={before:function(a,c){a.parentNode.insertBefore(c,
    a)},top:function(a,c){a.insertBefore(c,a.firstChild)},bottom:function(a,c){a.appendChild(c)},after:function(a,c){a.parentNode.insertBefore(c,a.nextSibling)},tags:{TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]}},C=fa.tags;Object.extend(C,{THEAD:C.TBODY,TFOOT:C.TBODY,TH:C.TD});"outerHTML"in document.documentElement&&(e=f);Object.extend(B,
    {remove:function(a){a=b(a);a.parentNode.removeChild(a);return a},update:function(a,c){a=b(a);for(var d=a.getElementsByTagName("*"),g=d.length;g--;)p(d[g]);c&&c.toElement&&(c=c.toElement());if(Object.isElement(c))return a.update().insert(c);c=Object.toHTML(c);g=a.tagName.toUpperCase();if("SCRIPT"===g&&Z)return a.text=c,a;if(wa)if(g in fa.tags){for(;a.firstChild;)a.removeChild(a.firstChild);for(var d=k(g,c.stripScripts()),g=0,h;h=d[g];g++)a.appendChild(h)}else if(R&&Object.isString(c)&&-1<c.indexOf("<link")){for(;a.firstChild;)a.removeChild(a.firstChild);
        d=k(g,c.stripScripts(),!0);for(g=0;h=d[g];g++)a.appendChild(h)}else a.innerHTML=c.stripScripts();else a.innerHTML=c.stripScripts();c.evalScripts.bind(c).defer();return a},replace:e,insert:function(a,c){a=b(a);var d=c;(Object.isUndefined(d)||null===d?0:Object.isString(d)||Object.isNumber(d)||Object.isElement(d)||d.toElement||d.toHTML)&&(c={bottom:c});for(var g in c){var d=a,h=c[g],e=g,e=e.toLowerCase(),m=fa[e];h&&h.toElement&&(h=h.toElement());if(Object.isElement(h))m(d,h);else{var h=Object.toHTML(h),
        aa=("before"===e||"after"===e?d.parentNode:d).tagName.toUpperCase(),aa=k(aa,h.stripScripts());"top"!==e&&"after"!==e||aa.reverse();for(var e=0,ba=void 0;ba=aa[e];e++)m(d,ba);h.evalScripts.bind(h).defer()}}return a},wrap:function(a,c,g){a=b(a);Object.isElement(c)?b(c).writeAttribute(g||{}):c=Object.isString(c)?new d(c,g):new d("div",c);a.parentNode&&a.parentNode.replaceChild(c,a);c.appendChild(a);return c},cleanWhitespace:function(a){a=b(a);for(var c=a.firstChild;c;){var d=c.nextSibling;c.nodeType!==
    Node.TEXT_NODE||/\S/.test(c.nodeValue)||a.removeChild(c);c=d}return a},empty:function(a){return b(a).innerHTML.blank()},clone:function(a,c){if(a=b(a)){var g=a.cloneNode(c);if(!ra&&(g._prototypeUID=sa,c))for(var h=d.select(g,"*"),e=h.length;e--;)h[e]._prototypeUID=sa;return d.extend(g)}},purge:function(a){if(a=b(a)){p(a);a=a.getElementsByTagName("*");for(var c=a.length;c--;)p(a[c]);return null}}});Object.extend(B,{recursivelyCollect:n,ancestors:function(a){return n(a,"parentNode")},descendants:function(a){return d.select(a,
    "*")},firstDescendant:l,immediateDescendants:c,previousSiblings:g,nextSiblings:h,siblings:function(a){a=b(a);var c=g(a);a=h(a);return c.reverse().concat(a)},match:function(a,c){a=b(a);return Object.isString(c)?Prototype.Selector.match(a,c):c.match(a)},up:function(a,c,d){a=b(a);return 1===arguments.length?b(a.parentNode):y(a,"parentNode",c,d)},down:function(a,c,g){if(1===arguments.length)return l(a);a=b(a);c=c||0;g=g||0;Object.isNumber(c)&&(g=c,c="*");var h=Prototype.Selector.select(c,a)[g];return d.extend(h)},
    previous:function(a,c,b){return y(a,"previousSibling",c,b)},next:function(a,c,b){return y(a,"nextSibling",c,b)},select:E,adjacent:function(a){a=b(a);for(var c=ta.call(arguments,1).join(", "),g=d.siblings(a),h=[],e=0,m;m=g[e];e++)Prototype.Selector.match(m,c)&&h.push(m);return h},descendantOf:z.compareDocumentPosition?da:z.contains?U:J,getElementsBySelector:E,childElements:c});var xa=1;(function(){z.setAttribute("onclick",[]);var a=z.getAttribute("onclick"),a=Object.isArray(a);z.removeAttribute("onclick");
    return a})()?V=W:Prototype.Browser.Opera&&(V=pa);C=function(){if(!ja)return!1;var a=document.createElement('<input type="checkbox">');a.checked=!0;a=a.getAttributeNode("checked");return!a||!a.specified}();a.Element.Methods.Simulated.hasAttribute=C?s:K;var ka={},D={},C="className",Q="for";z.setAttribute(C,"x");"x"!==z.className&&(z.setAttribute("class","x"),"x"===z.className&&(C="class"));var F=document.createElement("label");F.setAttribute(Q,"x");"x"!==F.htmlFor&&(F.setAttribute("htmlFor","x"),"x"===
F.htmlFor&&(Q="htmlFor"));F=null;z.onclick=Prototype.emptyFunction;var F=z.getAttribute("onclick"),w;-1<String(F).indexOf("{")?w=function(a,c){var b=a.getAttribute(c);if(!b)return null;b=b.toString();b=b.split("{")[1];b=b.split("}")[0];return b.strip()}:""===F&&(w=function(a,c){var b=a.getAttribute(c);return b?b.strip():null});D.read={names:{"class":C,className:C,"for":Q,htmlFor:Q},values:{style:function(a){return a.style.cssText.toLowerCase()},title:function(a){return a.title}}};D.write={names:{className:"class",
    htmlFor:"for",cellpadding:"cellPadding",cellspacing:"cellSpacing"},values:{checked:function(a,c){a.checked=!!c},style:function(a,c){a.style.cssText=c?c:""}}};D.has={names:{}};Object.extend(D.write.names,D.read.names);C=$w("colSpan rowSpan vAlign dateTime accessKey tabIndex encType maxLength readOnly longDesc frameBorder");for(Q=0;F=C[Q];Q++)D.write.names[F.toLowerCase()]=F,D.has.names[F.toLowerCase()]=F;Object.extend(D.read.values,{href:S,src:S,type:function(a,c){return a.getAttribute(c)},action:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  c){var b=a.getAttributeNode(c);return b?b.value:""},disabled:T,checked:T,readonly:T,multiple:T,onload:w,onunload:w,onclick:w,ondblclick:w,onmousedown:w,onmouseup:w,onmouseover:w,onmousemove:w,onmouseout:w,onfocus:w,onblur:w,onkeypress:w,onkeydown:w,onkeyup:w,onsubmit:w,onreset:w,onselect:w,onchange:w});Object.extend(B,{identify:function(a){a=b(a);var c=d.readAttribute(a,"id");if(c)return c;do c="anonymous_element_"+xa++;while(b(c));d.writeAttribute(a,"id",c);return c},readAttribute:V,writeAttribute:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   c,d){a=b(a);var g={},h=D.write;"object"===typeof c?g=c:g[c]=Object.isUndefined(d)?!0:d;for(var e in g)c=h.names[e]||e,d=g[e],h.values[e]&&(c=h.values[e](a,d)||c),!1===d||null===d?a.removeAttribute(c):!0===d?a.setAttribute(c,c):a.setAttribute(c,d);return a},classNames:function(a){return new d.ClassNames(a)},hasClassName:L,addClassName:function(a,c){if(a=b(a))return L(a,c)||(a.className+=(a.className?" ":"")+c),a},removeClassName:function(a,c){if(a=b(a))return a.className=a.className.replace(q(c)," ").strip(),
    a},toggleClassName:function(a,c,g){if(a=b(a))return Object.isUndefined(g)&&(g=!L(a,c)),(0,d[g?"addClassName":"removeClassName"])(a,c)}});var na;z.style.cssText="opacity:.55";na=/^0.55/.test(z.style.opacity);Object.extend(B,{setStyle:function(a,c){a=b(a);var g=a.style;if(Object.isString(c))return g.cssText+=";"+c,c.include("opacity")&&(g=c.match(/opacity:\s*(\d?\.?\d*)/)[1],d.setOpacity(a,g)),a;for(var h in c)if("opacity"===h)d.setOpacity(a,c[h]);else{var e=c[h];if("float"===h||"cssFloat"===h)h=Object.isUndefined(g.styleFloat)?
    "cssFloat":"styleFloat";g[h]=e}return a},getStyle:function(a,c){a=b(a);c="float"===c||"styleFloat"===c?"cssFloat":c.camelize();var d=a.style[c];d&&"auto"!==d||(d=(d=document.defaultView.getComputedStyle(a,null))?d[c]:null);return"opacity"===c?d?parseFloat(d):1:"auto"===d?null:d},setOpacity:X,getOpacity:N});"styleFloat"in z.style&&(B.getStyle=la,B.setOpacity=M,B.getOpacity=G);a.Element.Storage={UID:1};var ra="uniqueID"in z;ra&&(m=r);Object.extend(B,{getStorage:t,store:function(a,c,d){if(a=b(a)){var g=
    t(a);2===arguments.length?g.update(c):g.set(c,d);return a}},retrieve:function(a,c,d){if(a=b(a)){a=t(a);var g=a.get(c);Object.isUndefined(g)&&(a.set(c,d),g=d);return g}}});var ua={},O=d.Methods.ByTag,ma=Prototype.BrowserFeatures;!ma.ElementExtensions&&"__proto__"in z&&(a.HTMLElement={},a.HTMLElement.prototype=z.__proto__,ma.ElementExtensions=!0);w=function(a){if("undefined"===typeof window.Element||!ja)return!1;var c=window.Element.prototype;if(c){var b="_"+(Math.random()+"").slice(2);a=document.createElement(a);
    c[b]="x";a="x"!==a[b];delete c[b];return a}return!1}("object");var oa={};ma.SpecificElementExtensions&&(x=w?Y:Prototype.K);Object.extend(a.Element,{extend:x,addMethods:function(a){0===arguments.length&&(Object.extend(Form,Form.Methods),Object.extend(Form.Element,Form.Element.Methods),Object.extend(d.Methods.ByTag,{FORM:Object.clone(Form.Methods),INPUT:Object.clone(Form.Element.Methods),SELECT:Object.clone(Form.Element.Methods),TEXTAREA:Object.clone(Form.Element.Methods),BUTTON:Object.clone(Form.Element.Methods)}));
    if(2===arguments.length){var c=a;a=arguments[1]}if(c)if(Object.isArray(c))for(var b=0,g;g=c[b];b++)ia(g,a);else ia(c,a);else Object.extend(d.Methods,a||{});c=window.HTMLElement?HTMLElement.prototype:d.prototype;ma.ElementExtensions&&(v(c,d.Methods),v(c,d.Methods.Simulated,!0));if(ma.SpecificElementExtensions)for(g in d.Methods.ByTag)c=H(g),Object.isUndefined(c)||v(c.prototype,O[g]);Object.extend(d,d.Methods);Object.extend(d,d.Methods.Simulated);delete d.ByTag;delete d.Simulated;d.extend.refresh();
    ea={}}});a.Element.extend.refresh=x===Prototype.K?Prototype.emptyFunction:function(){Prototype.BrowserFeatures.ElementExtensions||(Object.extend(ua,d.Methods),Object.extend(ua,d.Methods.Simulated),oa={})};d.addMethods(B);window.attachEvent&&window.attachEvent("onunload",I)})(this);
(function(){function a(a,b){a=$(a);var d=a.style[b];d&&"auto"!==d||(d=(d=document.defaultView.getComputedStyle(a,null))?d[b]:null);return"opacity"===b?d?parseFloat(d):1:"auto"===d?null:d}function b(a,b){var d=a.style[b];!d&&a.currentStyle&&(d=a.currentStyle[b]);return d}function d(a,b){var d=a.offsetWidth,f=e(a,"borderLeftWidth",b)||0,k=e(a,"borderRightWidth",b)||0,l=e(a,"paddingLeft",b)||0,p=e(a,"paddingRight",b)||0;return d-f-k-l-p}function e(c,b,d){var e=null;Object.isElement(c)&&(e=c,c=a(e,b));
    if(null===c||Object.isUndefined(c))return null;if(/^(?:-)?\d+(\.\d+)?(px)?$/i.test(c))return window.parseFloat(c);var f=c.include("%"),k=d===document.viewport;return!(/\d/.test(c)&&e&&e.runtimeStyle)||f&&k?e&&f?(d=d||e.parentNode,c=(c=c.match(/^(\d+)%?$/i))?Number(c[1])/100:null,e=null,f=b.include("left")||b.include("right")||b.include("width"),b=b.include("top")||b.include("bottom")||b.include("height"),d===document.viewport?f?e=document.viewport.getWidth():b&&(e=document.viewport.getHeight()):f?
        e=$(d).measure("width"):b&&(e=$(d).measure("height")),null===e?0:e*c):0:(d=e.style.left,b=e.runtimeStyle.left,e.runtimeStyle.left=e.currentStyle.left,e.style.left=c||0,c=e.style.pixelLeft,e.style.left=d,e.runtimeStyle.left=b,c)}function f(a){a=$(a);if(a.nodeType===Node.DOCUMENT_NODE||n(a)||"BODY"===a.nodeName.toUpperCase()||"HTML"===a.nodeName.toUpperCase())return $(document.body);if("inline"!==Element.getStyle(a,"display")&&a.offsetParent)return $(a.offsetParent);for(;(a=a.parentNode)&&a!==document.body;)if("static"!==
    Element.getStyle(a,"position"))return"HTML"===a.nodeName.toUpperCase()?$(document.body):$(a);return $(document.body)}function k(a){a=$(a);var b=0,d=0;if(a.parentNode){do b+=a.offsetTop||0,d+=a.offsetLeft||0,a=a.offsetParent;while(a)}return new Element.Offset(d,b)}function p(a){a=$(a);var b=a.getLayout(),d=0,e=0;do if(d+=a.offsetTop||0,e+=a.offsetLeft||0,a=a.offsetParent){if("BODY"===a.nodeName.toUpperCase())break;if("static"!==Element.getStyle(a,"position"))break}while(a);e-=b.get("margin-top");d-=
    b.get("margin-left");return new Element.Offset(e,d)}function n(a){return a!==document.body&&!Element.descendantOf(a,document.body)}"currentStyle"in document.documentElement&&(a=b);var l=Prototype.K;"currentStyle"in document.documentElement&&(l=function(a){a.currentStyle.hasLayout||(a.style.zoom=1);return a});Element.Layout=Class.create(Hash,{initialize:function($super,a,b){$super();this.element=$(a);Element.Layout.PROPERTIES.each(function(a){this._set(a,null)},this);b&&(this._preComputing=!0,this._begin(),
    Element.Layout.PROPERTIES.each(this._compute,this),this._end(),this._preComputing=!1)},_set:function(a,b){return Hash.prototype.set.call(this,a,b)},set:function(a,b){throw"Properties of Element.Layout are read-only.";},get:function($super,a){var b=$super(a);return null===b?this._compute(a):b},_begin:function(){if(!this._isPrepared()){var c=this.element,b;a:{for(b=c;b&&b.parentNode;){if("none"===b.getStyle("display")){b=!1;break a}b=$(b.parentNode)}b=!0}if(!b){c.store("prototype_original_styles",{position:c.style.position||
"",width:c.style.width||"",visibility:c.style.visibility||"",display:c.style.display||""});b=a(c,"position");var h=c.offsetWidth;if(0===h||null===h)c.style.display="block",h=c.offsetWidth;var e="fixed"===b?document.viewport:c.parentNode,f={visibility:"hidden",display:"block"};"fixed"!==b&&(f.position="absolute");c.setStyle(f);f=c.offsetWidth;b=h&&f===h?d(c,e):"absolute"===b||"fixed"===b?d(c,e):$(c.parentNode).getLayout().get("width")-this.get("margin-left")-this.get("border-left")-this.get("padding-left")-
this.get("padding-right")-this.get("border-right")-this.get("margin-right");c.setStyle({width:b+"px"})}this._setPrepared(!0)}},_end:function(){var a=this.element,b=a.retrieve("prototype_original_styles");a.store("prototype_original_styles",null);a.setStyle(b);this._setPrepared(!1)},_compute:function(a){var b=Element.Layout.COMPUTATIONS;if(!(a in b))throw"Property not found.";return this._set(a,b[a].call(this,this.element))},_isPrepared:function(){return this.element.retrieve("prototype_element_layout_prepared",
    !1)},_setPrepared:function(a){return this.element.store("prototype_element_layout_prepared",a)},toObject:function(){var a=$A(arguments),b={};(0===a.length?Element.Layout.PROPERTIES:a.join(" ").split(" ")).each(function(a){if(Element.Layout.PROPERTIES.include(a)){var c=this.get(a);null!=c&&(b[a]=c)}},this);return b},toHash:function(){var a=this.toObject.apply(this,arguments);return new Hash(a)},toCSS:function(){var a=$A(arguments),b={};(0===a.length?Element.Layout.PROPERTIES:a.join(" ").split(" ")).each(function(a){if(Element.Layout.PROPERTIES.include(a)&&
    !Element.Layout.COMPOSITE_PROPERTIES.include(a)){var c=this.get(a);null!=c&&(a.include("border")&&(a+="-width"),a=a.camelize(),b[a]=c+"px")}},this);return b},inspect:function(){return"#<Element.Layout>"}});Object.extend(Element.Layout,{PROPERTIES:$w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"),
    COMPOSITE_PROPERTIES:$w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"),COMPUTATIONS:{height:function(a){this._preComputing||this._begin();a=this.get("border-box-height");if(0>=a)return this._preComputing||this._end(),0;var b=this.get("border-top"),d=this.get("border-bottom"),e=this.get("padding-top"),f=this.get("padding-bottom");this._preComputing||this._end();return a-b-d-e-f},width:function(a){this._preComputing||this._begin();a=this.get("border-box-width");
        if(0>=a)return this._preComputing||this._end(),0;var b=this.get("border-left"),d=this.get("border-right"),e=this.get("padding-left"),f=this.get("padding-right");this._preComputing||this._end();return a-b-d-e-f},"padding-box-height":function(a){a=this.get("height");var b=this.get("padding-top"),d=this.get("padding-bottom");return a+b+d},"padding-box-width":function(a){a=this.get("width");var b=this.get("padding-left"),d=this.get("padding-right");return a+b+d},"border-box-height":function(a){this._preComputing||
    this._begin();a=a.offsetHeight;this._preComputing||this._end();return a},"border-box-width":function(a){this._preComputing||this._begin();a=a.offsetWidth;this._preComputing||this._end();return a},"margin-box-height":function(a){a=this.get("border-box-height");var b=this.get("margin-top"),d=this.get("margin-bottom");return 0>=a?0:a+b+d},"margin-box-width":function(a){a=this.get("border-box-width");var b=this.get("margin-left"),d=this.get("margin-right");return 0>=a?0:a+b+d},top:function(a){return a.positionedOffset().top},
        bottom:function(a){var b=a.positionedOffset();a=a.getOffsetParent().measure("height");var d=this.get("border-box-height");return a-d-b.top},left:function(a){return a.positionedOffset().left},right:function(a){var b=a.positionedOffset();a=a.getOffsetParent().measure("width");var d=this.get("border-box-width");return a-d-b.left},"padding-top":function(a){return e(a,"paddingTop")},"padding-bottom":function(a){return e(a,"paddingBottom")},"padding-left":function(a){return e(a,"paddingLeft")},"padding-right":function(a){return e(a,
            "paddingRight")},"border-top":function(a){return e(a,"borderTopWidth")},"border-bottom":function(a){return e(a,"borderBottomWidth")},"border-left":function(a){return e(a,"borderLeftWidth")},"border-right":function(a){return e(a,"borderRightWidth")},"margin-top":function(a){return e(a,"marginTop")},"margin-bottom":function(a){return e(a,"marginBottom")},"margin-left":function(a){return e(a,"marginLeft")},"margin-right":function(a){return e(a,"marginRight")}}});"getBoundingClientRect"in document.documentElement&&
Object.extend(Element.Layout.COMPUTATIONS,{right:function(a){var b=l(a.getOffsetParent());a=a.getBoundingClientRect();return(b.getBoundingClientRect().right-a.right).round()},bottom:function(a){var b=l(a.getOffsetParent());a=a.getBoundingClientRect();return(b.getBoundingClientRect().bottom-a.bottom).round()}});Element.Offset=Class.create({initialize:function(a,b){this.left=a.round();this.top=b.round();this[0]=this.left;this[1]=this.top},relativeTo:function(a){return new Element.Offset(this.left-a.left,
    this.top-a.top)},inspect:function(){return"#<Element.Offset left: #{left} top: #{top}>".interpolate(this)},toString:function(){return"[#{left}, #{top}]".interpolate(this)},toArray:function(){return[this.left,this.top]}});Prototype.Browser.IE?(f=f.wrap(function(a,b){b=$(b);if(b.nodeType===Node.DOCUMENT_NODE||n(b)||"BODY"===b.nodeName.toUpperCase()||"HTML"===b.nodeName.toUpperCase())return $(document.body);var d=b.getStyle("position");if("static"!==d)return a(b);b.setStyle({position:"relative"});var e=
    a(b);b.setStyle({position:d});return e}),p=p.wrap(function(a,b){b=$(b);if(!b.parentNode)return new Element.Offset(0,0);var d=b.getStyle("position");if("static"!==d)return a(b);var e=b.getOffsetParent();e&&"fixed"===e.getStyle("position")&&l(e);b.setStyle({position:"relative"});e=a(b);b.setStyle({position:d});return e})):Prototype.Browser.Webkit&&(k=function(a){a=$(a);var b=0,d=0;do{b+=a.offsetTop||0;d+=a.offsetLeft||0;if(a.offsetParent==document.body&&"absolute"==Element.getStyle(a,"position"))break;
    a=a.offsetParent}while(a);return new Element.Offset(d,b)});Element.addMethods({getLayout:function(a,b){return new Element.Layout(a,b)},measure:function(a,b){return $(a).getLayout().get(b)},getWidth:function(a){return Element.getDimensions(a).width},getHeight:function(a){return Element.getDimensions(a).height},getDimensions:function(a){a=$(a);var b=Element.getStyle(a,"display");if(b&&"none"!==b)return{width:a.offsetWidth,height:a.offsetHeight};var b=a.style,b={visibility:b.visibility,position:b.position,
    display:b.display},d={visibility:"hidden",display:"block"};"fixed"!==b.position&&(d.position="absolute");Element.setStyle(a,d);d={width:a.offsetWidth,height:a.offsetHeight};Element.setStyle(a,b);return d},getOffsetParent:f,cumulativeOffset:k,positionedOffset:p,cumulativeScrollOffset:function(a){var b=0,d=0;do if(a===document.body){a=document.documentElement||document.body.parentNode||document.body;b+=Object.isUndefined(window.pageYOffset)?a.scrollTop||0:window.pageYOffset;d+=Object.isUndefined(window.pageXOffset)?
a.scrollLeft||0:window.pageXOffset;break}else b+=a.scrollTop||0,d+=a.scrollLeft||0,a=a.parentNode;while(a);return new Element.Offset(d,b)},viewportOffset:function(a){var b=0,d=0,e=document.body,f=a=$(a);do if(b+=f.offsetTop||0,d+=f.offsetLeft||0,f.offsetParent==e&&"absolute"==Element.getStyle(f,"position"))break;while(f=f.offsetParent);f=a;do f!=e&&(b-=f.scrollTop||0,d-=f.scrollLeft||0);while(f=f.parentNode);return new Element.Offset(d,b)},absolutize:function(a){a=$(a);if("absolute"===Element.getStyle(a,
        "position"))return a;var b=f(a),d=a.viewportOffset(),b=b.viewportOffset(),d=d.relativeTo(b),b=a.getLayout();a.store("prototype_absolutize_original_styles",{position:a.getStyle("position"),left:a.getStyle("left"),top:a.getStyle("top"),width:a.getStyle("width"),height:a.getStyle("height")});a.setStyle({position:"absolute",top:d.top+"px",left:d.left+"px",width:b.get("width")+"px",height:b.get("height")+"px"});return a},relativize:function(a){a=$(a);if("relative"===Element.getStyle(a,"position"))return a;
    var b=a.retrieve("prototype_absolutize_original_styles");b&&a.setStyle(b);return a},scrollTo:function(a){a=$(a);var b=Element.cumulativeOffset(a);window.scrollTo(b.left,b.top);return a},makePositioned:function(a){a=$(a);var b=Element.getStyle(a,"position"),d={};"static"!==b&&b||(d.position="relative",Prototype.Browser.Opera&&(d.top=0,d.left=0),Element.setStyle(a,d),Element.store(a,"prototype_made_positioned",!0));return a},undoPositioned:function(a){a=$(a);var b=Element.getStorage(a);b.get("prototype_made_positioned")&&
(b.unset("prototype_made_positioned"),Element.setStyle(a,{position:"",top:"",bottom:"",left:"",right:""}));return a},makeClipping:function(a){a=$(a);var b=Element.getStorage(a),d=b.get("prototype_made_clipping");Object.isUndefined(d)&&(d=Element.getStyle(a,"overflow"),b.set("prototype_made_clipping",d),"hidden"!==d&&(a.style.overflow="hidden"));return a},undoClipping:function(a){a=$(a);var b=Element.getStorage(a),d=b.get("prototype_made_clipping");Object.isUndefined(d)||(b.unset("prototype_made_clipping"),
    a.style.overflow=d||"");return a},clonePosition:function(a,b,d){d=Object.extend({setLeft:!0,setTop:!0,setWidth:!0,setHeight:!0,offsetTop:0,offsetLeft:0},d||{});b=$(b);a=$(a);var e,f,k,l={};if(d.setLeft||d.setTop)if(e=Element.viewportOffset(b),f=[0,0],"absolute"===Element.getStyle(a,"position")){var p=Element.getOffsetParent(a);p!==document.body&&(f=Element.viewportOffset(p))}if(d.setWidth||d.setHeight)k=Element.getLayout(b);d.setLeft&&(l.left=e[0]-f[0]+d.offsetLeft+"px");d.setTop&&(l.top=e[1]-f[1]+
d.offsetTop+"px");d.setWidth&&(l.width=k.get("border-box-width")+"px");d.setHeight&&(l.height=k.get("border-box-height")+"px");return Element.setStyle(a,l)}});"getBoundingClientRect"in document.documentElement&&Element.addMethods({viewportOffset:function(a){a=$(a);if(n(a))return new Element.Offset(0,0);a=a.getBoundingClientRect();var b=document.documentElement;return new Element.Offset(a.left-b.clientLeft,a.top-b.clientTop)}})})();
(function(){function a(){return d?d:d=b?document.body:document.documentElement}var b=Prototype.Browser.Opera&&9.5>window.parseFloat(window.opera.version()),d=null;document.viewport={getDimensions:function(){return{width:this.getWidth(),height:this.getHeight()}},getWidth:function(){return a().clientWidth},getHeight:function(){return a().clientHeight},getScrollOffsets:function(){return new Element.Offset(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||
document.documentElement.scrollTop||document.body.scrollTop)}}})();window.$$=function(){var a=$A(arguments).join(", ");return Prototype.Selector.select(a,document)};
Prototype.Selector=function(){function a(a){for(var b=0,f=a.length;b<f;b++)Element.extend(a[b]);return a}var b=Prototype.K;return{select:function(){throw Error('Method "Prototype.Selector.select" must be defined.');},match:function(){throw Error('Method "Prototype.Selector.match" must be defined.');},find:function(a,b,f){f=f||0;var k=Prototype.Selector.match,p=a.length,n=0,l;for(l=0;l<p;l++)if(k(a[l],b)&&f==n++)return Element.extend(a[l])},extendElements:Element.extend===b?b:a,extendElement:Element.extend}}();
Prototype._original_property=window.Sizzle;
(function(a){function b(a,b,c,d){var e,h,f,k,l;(b?b.ownerDocument||b:H)!==m&&G(b);b=b||m;c=c||[];if(!a||"string"!==typeof a)return c;if(1!==(k=b.nodeType)&&9!==k)return[];if(t&&!d){if(e=za.exec(a))if(f=e[1])if(9===k)if((h=b.getElementById(f))&&h.parentNode){if(h.id===f)return c.push(h),c}else return c;else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(f))&&ia(b,h)&&h.id===f)return c.push(h),c}else{if(e[2])return R.apply(c,b.getElementsByTagName(a)),c;if((f=e[3])&&s.getElementsByClassName&&
    b.getElementsByClassName)return R.apply(c,b.getElementsByClassName(f)),c}if(s.qsa&&(!u||!u.test(a))){h=e=v;f=b;l=9===k&&a;if(1===k&&"object"!==b.nodeName.toLowerCase()){k=y(a);(e=b.getAttribute("id"))?h=e.replace(Aa,"\\$&"):b.setAttribute("id",h);h="[id='"+h+"'] ";for(f=k.length;f--;)k[f]=h+E(k[f]);f=ya.test(a)&&g(b.parentNode)||b;l=k.join(",")}if(l)try{return R.apply(c,f.querySelectorAll(l)),c}catch(r){}finally{e||b.removeAttribute("id")}}}return la(a.replace(D,"$1"),b,c,d)}function d(){function a(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            d){b.push(c+" ")>q.cacheLength&&delete a[b.shift()];return a[c+" "]=d}var b=[];return a}function e(a){a[v]=!0;return a}function f(a){var b=m.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b)}}function k(a,b){for(var c=a.split("|"),d=a.length;d--;)q.attrHandle[c[d]]=b}function p(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||-2147483648)-(~a.sourceIndex||-2147483648);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;
    return a?1:-1}function n(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function l(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function c(a){return e(function(b){b=+b;return e(function(c,d){for(var e,g=a([],c.length,b),h=g.length;h--;)c[e=g[h]]&&(c[e]=!(d[e]=c[e]))})})}function g(a){return a&&"undefined"!==typeof a.getElementsByTagName&&a}function h(){}function y(a,c){var d,e,g,h,m,f,k;if(m=z[a+" "])return c?0:m.slice(0);
    m=a;f=[];for(k=q.preFilter;m;){if(!d||(e=F.exec(m)))e&&(m=m.slice(e[0].length)||m),f.push(g=[]);d=!1;if(e=w.exec(m))d=e.shift(),g.push({value:d,type:e[0].replace(D," ")}),m=m.slice(d.length);for(h in q.filter)!(e=O[h].exec(m))||k[h]&&!(e=k[h](e))||(d=e.shift(),g.push({value:d,type:h,matches:e}),m=m.slice(d.length));if(!d)break}return c?m.length:m?b.error(a):z(a,f).slice(0)}function E(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function J(a,b,c){var d=b.dir,e=c&&"parentNode"===d,
    m=sa++;return b.first?function(b,c,va){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,va)}:function(b,c,va){var g,h,ba=[I,m];if(va)for(;b=b[d];){if((1===b.nodeType||e)&&a(b,c,va))return!0}else for(;b=b[d];)if(1===b.nodeType||e){h=b[v]||(b[v]={});if((g=h[d])&&g[0]===I&&g[1]===m)return ba[2]=g[2];h[d]=ba;if(ba[2]=a(b,c,va))return!0}}}function U(a){return 1<a.length?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function da(a,b,c,d,e){for(var m,g=[],h=0,f=a.length,k=
    null!=b;h<f;h++)if(m=a[h])if(!c||c(m,d,e))g.push(m),k&&b.push(h);return g}function V(a,c,d,m,g,h){m&&!m[v]&&(m=V(m));g&&!g[v]&&(g=V(g,h));return e(function(e,h,f,k){var l,r,t=[],p=[],n=h.length,q;if(!(q=e)){q=c||"*";for(var A=f.nodeType?[f]:f,u=[],x=0,s=A.length;x<s;x++)b(q,A[x],u);q=u}q=!a||!e&&c?q:da(q,t,a,f,k);A=d?g||(e?a:n||m)?[]:h:q;d&&d(q,A,f,k);if(m)for(l=da(A,p),m(l,[],f,k),f=l.length;f--;)if(r=l[f])A[p[f]]=!(q[p[f]]=r);if(e){if(g||a){if(g){l=[];for(f=A.length;f--;)(r=A[f])&&l.push(q[f]=r);
    g(null,A=[],l,k)}for(f=A.length;f--;)(r=A[f])&&-1<(l=g?Z.call(e,r):t[f])&&(e[l]=!(h[l]=r))}}else A=da(A===h?A.splice(n,A.length):A),g?g(null,h,A,k):R.apply(h,A)})}function W(a){var b,c,d,e=a.length,g=q.relative[a[0].type];c=g||q.relative[" "];for(var m=g?1:0,h=J(function(a){return a===b},c,!0),f=J(function(a){return-1<Z.call(b,a)},c,!0),k=[function(a,c,d){return!g&&(d||c!==X)||((b=c).nodeType?h(a,c,d):f(a,c,d))}];m<e;m++)if(c=q.relative[a[m].type])k=[J(U(k),c)];else{c=q.filter[a[m].type].apply(null,
    a[m].matches);if(c[v]){for(d=++m;d<e&&!q.relative[a[d].type];d++);return V(1<m&&U(k),1<m&&E(a.slice(0,m-1).concat({value:" "===a[m-2].type?"*":""})).replace(D,"$1"),c,m<d&&W(a.slice(m,d)),d<e&&W(a=a.slice(d)),d<e&&E(a))}k.push(c)}return U(k)}function pa(a,c){var d=0<c.length,g=0<a.length,h=function(e,h,f,k,l){var r,t,p,n=0,ca="0",u=e&&[],x=[],s=X,y=e||g&&q.find.TAG("*",l),Y=I+=null==s?1:Math.random()||.1,v=y.length;for(l&&(X=h!==m&&h);ca!==v&&null!=(r=y[ca]);ca++){if(g&&r){for(t=0;p=a[t++];)if(p(r,
        h,f)){k.push(r);break}l&&(I=Y)}d&&((r=!p&&r)&&n--,e&&u.push(r))}n+=ca;if(d&&ca!==n){for(t=0;p=c[t++];)p(u,x,h,f);if(e){if(0<n)for(;ca--;)u[ca]||x[ca]||(x[ca]=C.call(k));x=da(x)}R.apply(k,x);l&&!e&&0<x.length&&1<n+c.length&&b.uniqueSort(k)}l&&(I=Y,X=s);return u};return d?e(h):h}var K,s,q,L,S,T,la,X,M,N,G,m,r,t,u,x,Y,ia,v="sizzle"+-new Date,H=a.document,I=0,sa=0,ta=d(),z=d(),ea=d(),ja=function(a,b){a===b&&(N=!0);return 0},B={}.hasOwnProperty,P=[],C=P.pop,Q=P.push,R=P.push,wa=P.slice,Z=P.indexOf||function(a){for(var b=
        0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},fa="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w","w#"),xa="\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+fa+")|)|)[\\x20\\t\\r\\n\\f]*\\]",ka=":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+xa.replace(3,8)+")*)|.*)\\)|)",D=RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
    "g"),F=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,w=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,na=RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]","g"),ra=new RegExp(ka),ua=new RegExp("^"+fa+"$"),O={ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,TAG:new RegExp("^("+"(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w","w*")+")"),ATTR:new RegExp("^"+xa),PSEUDO:new RegExp("^"+ka),CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
    bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},ma=/^(?:input|select|textarea|button)$/i,oa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,za=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ya=/[+~]/,Aa=/'|\\/g,ga=RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),ha=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b,c){a="0x"+b-65536;return a!==a||c?b:0>a?String.fromCharCode(a+65536):String.fromCharCode(a>>10|55296,a&1023|56320)};try{R.apply(P=wa.call(H.childNodes),H.childNodes),P[H.childNodes.length].nodeType}catch(Ba){R={apply:P.length?function(a,b){Q.apply(a,wa.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}s=b.support={};S=b.isXML=function(a){return(a=a&&(a.ownerDocument||a).documentElement)?"HTML"!==a.nodeName:!1};G=b.setDocument=function(a){var b=a?a.ownerDocument||a:H;
    a=b.defaultView;if(b===m||9!==b.nodeType||!b.documentElement)return m;m=b;r=b.documentElement;t=!S(b);a&&a!==a.top&&(a.addEventListener?a.addEventListener("unload",function(){G()},!1):a.attachEvent&&a.attachEvent("onunload",function(){G()}));s.attributes=f(function(a){a.className="i";return!a.getAttribute("className")});s.getElementsByTagName=f(function(a){a.appendChild(b.createComment(""));return!a.getElementsByTagName("*").length});s.getElementsByClassName=qa.test(b.getElementsByClassName)&&f(function(a){a.innerHTML=
        "<div class='a'></div><div class='a i'></div>";a.firstChild.className="i";return 2===a.getElementsByClassName("i").length});s.getById=f(function(a){r.appendChild(a).id=v;return!b.getElementsByName||!b.getElementsByName(v).length});s.getById?(q.find.ID=function(a,b){if("undefined"!==typeof b.getElementById&&t){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},q.filter.ID=function(a){var b=a.replace(ga,ha);return function(a){return a.getAttribute("id")===b}}):(delete q.find.ID,q.filter.ID=function(a){var b=
        a.replace(ga,ha);return function(a){return(a="undefined"!==typeof a.getAttributeNode&&a.getAttributeNode("id"))&&a.value===b}});q.find.TAG=s.getElementsByTagName?function(a,b){if("undefined"!==typeof b.getElementsByTagName)return b.getElementsByTagName(a)}:function(a,b){var c,d=[],e=0,m=b.getElementsByTagName(a);if("*"===a){for(;c=m[e++];)1===c.nodeType&&d.push(c);return d}return m};q.find.CLASS=s.getElementsByClassName&&function(a,b){if("undefined"!==typeof b.getElementsByClassName&&t)return b.getElementsByClassName(a)};
    x=[];u=[];if(s.qsa=qa.test(b.querySelectorAll))f(function(a){a.innerHTML="<select t=''><option selected=''></option></select>";a.querySelectorAll("[t^='']").length&&u.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");a.querySelectorAll("[selected]").length||u.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");a.querySelectorAll(":checked").length||u.push(":checked")}),f(function(a){var c=b.createElement("input");
        c.setAttribute("type","hidden");a.appendChild(c).setAttribute("name","D");a.querySelectorAll("[name=d]").length&&u.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");a.querySelectorAll(":enabled").length||u.push(":enabled",":disabled");a.querySelectorAll("*,:x");u.push(",.*:")});(s.matchesSelector=qa.test(Y=r.webkitMatchesSelector||r.mozMatchesSelector||r.oMatchesSelector||r.msMatchesSelector))&&f(function(a){s.disconnectedMatch=Y.call(a,"div");Y.call(a,"[s!='']:x");x.push("!=",ka)});u=u.length&&new RegExp(u.join("|"));
    x=x.length&&new RegExp(x.join("|"));ia=(a=qa.test(r.compareDocumentPosition))||qa.test(r.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&1===d.nodeType&&(c.contains?c.contains(d):a.compareDocumentPosition&&a.compareDocumentPosition(d)&16))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1};ja=a?function(a,c){if(a===c)return N=!0,0;var d=!a.compareDocumentPosition-!c.compareDocumentPosition;if(d)return d;d=(a.ownerDocument||a)===
    (c.ownerDocument||c)?a.compareDocumentPosition(c):1;return d&1||!s.sortDetached&&c.compareDocumentPosition(a)===d?a===b||a.ownerDocument===H&&ia(H,a)?-1:c===b||c.ownerDocument===H&&ia(H,c)?1:M?Z.call(M,a)-Z.call(M,c):0:d&4?-1:1}:function(a,c){if(a===c)return N=!0,0;var d,e=0;d=a.parentNode;var m=c.parentNode,aa=[a],g=[c];if(!d||!m)return a===b?-1:c===b?1:d?-1:m?1:M?Z.call(M,a)-Z.call(M,c):0;if(d===m)return p(a,c);for(d=a;d=d.parentNode;)aa.unshift(d);for(d=c;d=d.parentNode;)g.unshift(d);for(;aa[e]===
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     g[e];)e++;return e?p(aa[e],g[e]):aa[e]===H?-1:g[e]===H?1:0};return b};b.matches=function(a,c){return b(a,null,null,c)};b.matchesSelector=function(a,c){(a.ownerDocument||a)!==m&&G(a);c=c.replace(na,"='$1']");if(!(!s.matchesSelector||!t||x&&x.test(c)||u&&u.test(c)))try{var d=Y.call(a,c);if(d||s.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return 0<b(c,m,null,[a]).length};b.contains=function(a,b){(a.ownerDocument||a)!==m&&G(a);return ia(a,b)};b.attr=function(a,b){(a.ownerDocument||
a)!==m&&G(a);var c=q.attrHandle[b.toLowerCase()],c=c&&B.call(q.attrHandle,b.toLowerCase())?c(a,b,!t):void 0;return void 0!==c?c:s.attributes||!t?a.getAttribute(b):(c=a.getAttributeNode(b))&&c.specified?c.value:null};b.error=function(a){throw Error("Syntax error, unrecognized expression: "+a);};b.uniqueSort=function(a){var b,c=[],d=0,e=0;N=!s.detectDuplicates;M=!s.sortStable&&a.slice(0);a.sort(ja);if(N){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}M=null;return a};L=b.getText=
    function(a){var b,c="",d=0;b=a.nodeType;if(!b)for(;b=a[d++];)c+=L(b);else if(1===b||9===b||11===b){if("string"===typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=L(a)}else if(3===b||4===b)return a.nodeValue;return c};q=b.selectors={cacheLength:50,createPseudo:e,match:O,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){a[1]=a[1].replace(ga,
    ha);a[3]=(a[4]||a[5]||"").replace(ga,ha);"~="===a[2]&&(a[3]=" "+a[3]+" ");return a.slice(0,4)},CHILD:function(a){a[1]=a[1].toLowerCase();"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]);return a},PSEUDO:function(a){var b,c=!a[5]&&a[2];if(O.CHILD.test(a[0]))return null;a[3]&&void 0!==a[4]?a[2]=a[4]:c&&ra.test(c)&&(b=y(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=
    c.slice(0,b));return a.slice(0,3)}},filter:{TAG:function(a){var b=a.replace(ga,ha).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=ta[a+" "];return b||(b=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+a+"([\\x20\\t\\r\\n\\f]|$)"))&&ta(a,function(a){return b.test("string"===typeof a.className&&a.className||"undefined"!==typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){e=b.attr(e,
    a);if(null==e)return"!="===c;if(!c)return!0;e+="";return"="===c?e===d:"!="===c?e!==d:"^="===c?d&&0===e.indexOf(d):"*="===c?d&&-1<e.indexOf(d):"$="===c?d&&e.slice(-d.length)===d:"~="===c?-1<(" "+e+" ").indexOf(d):"|="===c?e===d||e.slice(0,d.length+1)===d+"-":!1}},CHILD:function(a,b,c,d,e){var m="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,f){var k,l,r,t,p;c=m!==g?"nextSibling":"previousSibling";var n=b.parentNode,ba=
    h&&b.nodeName.toLowerCase();f=!f&&!h;if(n){if(m){for(;c;){for(l=b;l=l[c];)if(h?l.nodeName.toLowerCase()===ba:1===l.nodeType)return!1;p=c="only"===a&&!p&&"nextSibling"}return!0}p=[g?n.firstChild:n.lastChild];if(g&&f)for(f=n[v]||(n[v]={}),k=f[a]||[],t=k[0]===I&&k[1],r=k[0]===I&&k[2],l=t&&n.childNodes[t];l=++t&&l&&l[c]||(r=t=0)||p.pop();){if(1===l.nodeType&&++r&&l===b){f[a]=[I,t,r];break}}else if(f&&(k=(b[v]||(b[v]={}))[a])&&k[0]===I)r=k[1];else for(;(l=++t&&l&&l[c]||(r=t=0)||p.pop())&&((h?l.nodeName.toLowerCase()!==
ba:1!==l.nodeType)||!++r||(f&&((l[v]||(l[v]={}))[a]=[I,r]),l!==b)););r-=e;return r===d||0===r%d&&0<=r/d}}},PSEUDO:function(a,c){var d,m=q.pseudos[a]||q.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return m[v]?m(c):1<m.length?(d=[a,a,"",c],q.setFilters.hasOwnProperty(a.toLowerCase())?e(function(a,b){for(var d,e=m(a,c),g=e.length;g--;)d=Z.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return m(a,0,d)}):m}},pseudos:{not:e(function(a){var b=[],c=[],d=T(a.replace(D,"$1"));return d[v]?e(function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,c,e){e=d(a,null,e,[]);for(var m=a.length;m--;)if(c=e[m])a[m]=!(b[m]=c)}):function(a,e,m){b[0]=a;d(b,null,m,c);return!c.pop()}}),has:e(function(a){return function(c){return 0<b(a,c).length}}),contains:e(function(a){return function(b){return-1<(b.textContent||b.innerText||L(b)).indexOf(a)}}),lang:e(function(a){ua.test(a||"")||b.error("unsupported lang: "+a);a=a.replace(ga,ha).toLowerCase();return function(b){var c;do if(c=t?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),
c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===r},focus:function(a){return a===m.activeElement&&(!m.hasFocus||m.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){a.parentNode&&
a.parentNode.selectedIndex;return!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(6>a.nodeType)return!1;return!0},parent:function(a){return!q.pseudos.empty(a)},header:function(a){return oa.test(a.nodeName)},input:function(a){return ma.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===
b.toLowerCase())},first:c(function(){return[0]}),last:c(function(a,b){return[b-1]}),eq:c(function(a,b,c){return[0>c?c+b:c]}),even:c(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:c(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:c(function(a,b,c){for(b=0>c?c+b:c;0<=--b;)a.push(b);return a}),gt:c(function(a,b,c){for(c=0>c?c+b:c;++c<b;)a.push(c);return a})}};q.pseudos.nth=q.pseudos.eq;for(K in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})q.pseudos[K]=n(K);for(K in{submit:!0,
    reset:!0})q.pseudos[K]=l(K);h.prototype=q.filters=q.pseudos;q.setFilters=new h;T=b.compile=function(a,b){var c,d=[],e=[],m=ea[a+" "];if(!m){b||(b=y(a));for(c=b.length;c--;)m=W(b[c]),m[v]?d.push(m):e.push(m);m=ea(a,pa(e,d));m.selector=a}return m};la=b.select=function(a,b,c,d){var e,m,h,f,k="function"===typeof a&&a,l=!d&&y(a=k.selector||a);c=c||[];if(1===l.length){m=l[0]=l[0].slice(0);if(2<m.length&&"ID"===(h=m[0]).type&&s.getById&&9===b.nodeType&&t&&q.relative[m[1].type]){b=(q.find.ID(h.matches[0].replace(ga,
    ha),b)||[])[0];if(!b)return c;k&&(b=b.parentNode);a=a.slice(m.shift().value.length)}for(e=O.needsContext.test(a)?0:m.length;e--;){h=m[e];if(q.relative[f=h.type])break;if(f=q.find[f])if(d=f(h.matches[0].replace(ga,ha),ya.test(m[0].type)&&g(b.parentNode)||b)){m.splice(e,1);a=d.length&&E(m);if(!a)return R.apply(c,d),c;break}}}(k||T(a,l))(d,b,!t,c,ya.test(a)&&g(b.parentNode)||b);return c};s.sortStable=v.split("").sort(ja).join("")===v;s.detectDuplicates=!!N;G();s.sortDetached=f(function(a){return a.compareDocumentPosition(m.createElement("div"))&
1});f(function(a){a.innerHTML="<a href='#'></a>";return"#"===a.firstChild.getAttribute("href")})||k("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)});s.attributes&&f(function(a){a.innerHTML="<input/>";a.firstChild.setAttribute("value","");return""===a.firstChild.getAttribute("value")})||k("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue});f(function(a){return null==a.getAttribute("disabled")})||k("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null});"function"===typeof define&&define.amd?define(function(){return b}):"undefined"!==typeof module&&module.exports?module.exports=b:a.Sizzle=b})(window);(function(a){var b=Prototype.Selector.extendElements;Prototype.Selector.engine=a;Prototype.Selector.select=function(d,e){return b(a(d,e||document))};Prototype.Selector.match=function(b,e){return 1==a.matches(e,[b]).length}})(Sizzle);
window.Sizzle=Prototype._original_property;delete Prototype._original_property;
var Form={reset:function(a){a=$(a);a.reset();return a},serializeElements:function(a,b){"object"!=typeof b?b={hash:!!b}:Object.isUndefined(b.hash)&&(b.hash=!0);var d,e,f=!1,k=b.submit,p,n;b.hash?(n={},p=function(a,b,d){b in a?(Object.isArray(a[b])||(a[b]=[a[b]]),a[b]=a[b].concat(d)):a[b]=d;return a}):(n="",p=function(a,b,d){Object.isArray(d)||(d=[d]);if(!d.length)return a;var e=encodeURIComponent(b).gsub(/%20/,"+");return a+(a?"&":"")+d.map(function(a){a=a.gsub(/(\r)?\n/,"\r\n");a=encodeURIComponent(a);
    a=a.gsub(/%20/,"+");return e+"="+a}).join("&")});return a.inject(n,function(a,b){!b.disabled&&b.name&&(d=b.name,e=$(b).getValue(),null==e||"file"==b.type||"submit"==b.type&&(f||!1===k||k&&d!=k||!(f=!0))||(a=p(a,d,e)));return a})},Methods:{serialize:function(a,b){return Form.serializeElements(Form.getElements(a),b)},getElements:function(a){a=$(a).getElementsByTagName("*");for(var b,d=[],e=Form.Element.Serializers,f=0;b=a[f];f++)e[b.tagName.toLowerCase()]&&d.push(Element.extend(b));return d},getInputs:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      b,d){a=$(a);a=a.getElementsByTagName("input");if(!b&&!d)return $A(a).map(Element.extend);for(var e=0,f=[],k=a.length;e<k;e++){var p=a[e];b&&p.type!=b||d&&p.name!=d||f.push(Element.extend(p))}return f},disable:function(a){a=$(a);Form.getElements(a).invoke("disable");return a},enable:function(a){a=$(a);Form.getElements(a).invoke("enable");return a},findFirstElement:function(a){a=$(a).getElements().findAll(function(a){return"hidden"!=a.type&&!a.disabled});var b=a.findAll(function(a){return a.hasAttribute("tabIndex")&&
0<=a.tabIndex}).sortBy(function(a){return a.tabIndex}).first();return b?b:a.find(function(a){return/^(?:input|select|textarea)$/i.test(a.tagName)})},focusFirstElement:function(a){a=$(a);var b=a.findFirstElement();b&&b.activate();return a},request:function(a,b){a=$(a);b=Object.clone(b||{});var d=b.parameters,e=a.readAttribute("action")||"";e.blank()&&(e=window.location.href);b.parameters=a.serialize(!0);d&&(Object.isString(d)&&(d=d.toQueryParams()),Object.extend(b.parameters,d));a.hasAttribute("method")&&
!b.method&&(b.method=a.method);return new Ajax.Request(e,b)}},Element:{focus:function(a){$(a).focus();return a},select:function(a){$(a).select();return a}}};
Form.Element.Methods={serialize:function(a){a=$(a);if(!a.disabled&&a.name){var b=a.getValue();if(void 0!=b){var d={};d[a.name]=b;return Object.toQueryString(d)}}return""},getValue:function(a){a=$(a);var b=a.tagName.toLowerCase();return Form.Element.Serializers[b](a)},setValue:function(a,b){a=$(a);var d=a.tagName.toLowerCase();Form.Element.Serializers[d](a,b);return a},clear:function(a){$(a).value="";return a},present:function(a){return""!=$(a).value},activate:function(a){a=$(a);try{a.focus(),!a.select||
"input"==a.tagName.toLowerCase()&&/^(?:button|reset|submit)$/i.test(a.type)||a.select()}catch(b){}return a},disable:function(a){a=$(a);a.disabled=!0;return a},enable:function(a){a=$(a);a.disabled=!1;return a}};var Field=Form.Element,$F=Form.Element.Methods.getValue;
Form.Element.Serializers=function(){function a(a,b){if(Object.isUndefined(b))return a.checked?a.value:null;a.checked=!!b}function b(a,b){if(Object.isUndefined(b))return a.value;a.value=b}function d(a){var b=a.selectedIndex;return 0<=b?f(a.options[b]):null}function e(a){var b,d=a.length;if(!d)return null;var e=0;for(b=[];e<d;e++){var c=a.options[e];c.selected&&b.push(f(c))}return b}function f(a){return Element.hasAttribute(a,"value")?a.value:a.text}return{input:function(d,e){switch(d.type.toLowerCase()){case "checkbox":case "radio":return a(d,
    e);default:return b(d,e)}},inputSelector:a,textarea:b,select:function(a,b){if(Object.isUndefined(b))return("select-one"===a.type?d:e)(a);for(var f,l,c=!Object.isArray(b),g=0,h=a.length;g<h;g++)if(f=a.options[g],l=this.optionValue(f),c){if(l==b){f.selected=!0;break}}else f.selected=b.include(l)},selectOne:d,selectMany:e,optionValue:f,button:b}}();
Abstract.TimedObserver=Class.create(PeriodicalExecuter,{initialize:function($super,b,d,e){$super(e,d);this.element=$(b);this.lastValue=this.getValue()},execute:function(){var a=this.getValue();if(Object.isString(this.lastValue)&&Object.isString(a)?this.lastValue!=a:String(this.lastValue)!=String(a))this.callback(this.element,a),this.lastValue=a}});Form.Element.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.Element.getValue(this.element)}});
Form.Observer=Class.create(Abstract.TimedObserver,{getValue:function(){return Form.serialize(this.element)}});
Abstract.EventObserver=Class.create({initialize:function(a,b){this.element=$(a);this.callback=b;this.lastValue=this.getValue();"form"==this.element.tagName.toLowerCase()?this.registerFormCallbacks():this.registerCallback(this.element)},onElementEvent:function(){var a=this.getValue();this.lastValue!=a&&(this.callback(this.element,a),this.lastValue=a)},registerFormCallbacks:function(){Form.getElements(this.element).each(this.registerCallback,this)},registerCallback:function(a){if(a.type)switch(a.type.toLowerCase()){case "checkbox":case "radio":Event.observe(a,
    "click",this.onElementEvent.bind(this));break;default:Event.observe(a,"change",this.onElementEvent.bind(this))}}});Form.Element.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.Element.getValue(this.element)}});Form.EventObserver=Class.create(Abstract.EventObserver,{getValue:function(){return Form.serialize(this.element)}});
(function(a){function b(a,b){return a.which?a.which===b+1:a.button===b}function d(a,b){return a.button===T[b]}function e(a,b){switch(b){case 0:return 1==a.which&&!a.metaKey;case 1:return 2==a.which||1==a.which&&a.metaKey;case 2:return 3==a.which;default:return!1}}function f(a){a=q.extend(a);var b=a.target,c=a.type;(a=a.currentTarget)&&a.tagName&&("load"===c||"error"===c||"click"===c&&"input"===a.tagName.toLowerCase()&&"radio"===a.type)&&(b=a);return b.nodeType==Node.TEXT_NODE?b.parentNode:b}function k(a){var b=
    document.documentElement,c=document.body||{scrollLeft:0};return a.pageX||a.clientX+(b.scrollLeft||c.scrollLeft)-(b.clientLeft||0)}function p(a){var b=document.documentElement,c=document.body||{scrollTop:0};return a.pageY||a.clientY+(b.scrollTop||c.scrollTop)-(b.clientTop||0)}function n(a){return N[a]||a}function l(a){if(a===window)return 0;"undefined"===typeof a._prototypeUID&&(a._prototypeUID=Element.Storage.UID++);return a._prototypeUID}function c(a){return a===window?0:a==document?1:a.uniqueID}
    function g(a){return a.include(":")}function h(b,c){var d=a.Event.cache;Object.isUndefined(c)&&(c=l(b));d[c]||(d[c]={element:b});return d[c]}function y(b,c,d){b=$(b);a:{var e=b,f=h(e);f[c]||(f[c]=[]);for(var f=f[c],k=f.length;k--;)if(f[k].handler===d){d=null;break a}e=l(e);d={responder:a.Event._createResponder(e,c,d),handler:d};f.push(d)}if(null===d)return b;d=d.responder;g(c)?(c=b,c.addEventListener?c.addEventListener("dataavailable",d,!1):(c.attachEvent("ondataavailable",d),c.attachEvent("onlosecapture",
        d))):(f=b,c=n(c),f.addEventListener?f.addEventListener(c,d,!1):f.attachEvent("on"+c,d));return b}function E(b,c,d){b=$(b);var e=!Object.isUndefined(d);if(Object.isUndefined(c)&&!e){c=b;d=l(c);var f=a.Event.cache[d];if(f){Object.isUndefined(d)&&(d=l(c));delete a.Event.cache[d];for(var g in f)if("element"!==g)for(d=f[g],e=d.length;e--;)J(c,g,d[e].responder)}return b}if(!e){g=b;d=h(g);if(f=d[c])for(delete d[c],d=f.length;d--;)J(g,c,f[d].responder);return b}if(g=h(b)[c]){for(e=g.length;e--;)if(g[e].handler===
        d){f=g[e];break}f?(d=g.indexOf(f),g.splice(d,1),g=f):g=void 0}else g=void 0;if(!g)return b;J(b,c,g.responder);return b}function J(a,b,c){g(b)?a.removeEventListener?a.removeEventListener("dataavailable",c,!1):(a.detachEvent("ondataavailable",c),a.detachEvent("onlosecapture",c)):(b=n(b),a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c))}function U(a,b,c,d){a=$(a);a=a!==document?a:document.createEvent&&!a.dispatchEvent?document.documentElement:a;Object.isUndefined(d)&&(d=!0);
        c=c||{};b=G(a,b,c,d);return q.extend(b)}function da(a,b,c,d){var e=document.createEvent("HTMLEvents");e.initEvent("dataavailable",d,!0);e.eventName=b;e.memo=c;a.dispatchEvent(e);return e}function V(a,b,c,d){var e=document.createEventObject();e.eventType=d?"ondataavailable":"onlosecapture";e.eventName=b;e.memo=c;a.fireEvent(e.eventType,e);return e}function W(a,b,c,d){a=$(a);Object.isFunction(c)&&Object.isUndefined(d)&&(d=c,c=null);return(new q.Handler(a,b,c,d)).start()}function pa(){a.Event.cache=
        null}var K=document.createElement("div"),s=document.documentElement,s="onmouseenter"in s&&"onmouseleave"in s,q={KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45},L=function(a){return!1};window.attachEvent&&(L=window.addEventListener?function(a){return!(a instanceof window.Event)}:function(a){return!0});var S,T={0:1,1:4,2:2};S=window.attachEvent?window.addEventListener?
        function(a,c){return L(a)?d(a,c):b(a,c)}:d:Prototype.Browser.WebKit?e:b;q.Methods={isLeftClick:function(a){return S(a,0)},isMiddleClick:function(a){return S(a,1)},isRightClick:function(a){return S(a,2)},element:function(a){return Element.extend(f(a))},findElement:function(a,b){var c=f(a),d=Prototype.Selector;if(!b)return Element.extend(c);for(;c;){if(Object.isElement(c)&&d.match(c,b))return Element.extend(c);c=c.parentNode}},pointer:function(a){return{x:k(a),y:p(a)}},pointerX:k,pointerY:p,stop:function(a){q.extend(a);
        a.preventDefault();a.stopPropagation();a.stopped=!0}};var la=Object.keys(q.Methods).inject({},function(a,b){a[b]=q.Methods[b].methodize();return a});if(window.attachEvent){var X=function(a){switch(a.type){case "mouseover":case "mouseenter":a=a.fromElement;break;case "mouseout":case "mouseleave":a=a.toElement;break;default:return null}return Element.extend(a)},M={stopPropagation:function(){this.cancelBubble=!0},preventDefault:function(){this.returnValue=!1},inspect:function(){return"[object Event]"}};
        q.extend=function(a,b){if(!a)return!1;if(!L(a)||a._extendedByPrototype)return a;a._extendedByPrototype=Prototype.emptyFunction;var c=q.pointer(a);Object.extend(a,{target:a.srcElement||b,relatedTarget:X(a),pageX:c.x,pageY:c.y});Object.extend(a,la);Object.extend(a,M);return a}}else q.extend=Prototype.K;window.addEventListener&&(q.prototype=window.Event.prototype||document.createEvent("HTMLEvents").__proto__,Object.extend(q.prototype,la));var N={mouseenter:"mouseover",mouseleave:"mouseout"};s&&(n=Prototype.K);
    "uniqueID"in K&&(l=c);q._isCustomEvent=g;var G=document.createEvent?da:V;q.Handler=Class.create({initialize:function(a,b,c,d){this.element=$(a);this.eventName=b;this.selector=c;this.callback=d;this.handler=this.handleEvent.bind(this)},start:function(){q.observe(this.element,this.eventName,this.handler);return this},stop:function(){q.stopObserving(this.element,this.eventName,this.handler);return this},handleEvent:function(a){var b=q.findElement(a,this.selector);b&&this.callback.call(this.element,a,
        b)}});Object.extend(q,q.Methods);Object.extend(q,{fire:U,observe:y,stopObserving:E,on:W});Element.addMethods({fire:U,observe:y,stopObserving:E,on:W});Object.extend(document,{fire:U.methodize(),observe:y.methodize(),stopObserving:E.methodize(),on:W.methodize(),loaded:!1});a.Event?Object.extend(window.Event,q):a.Event=q;a.Event.cache={};window.attachEvent&&window.attachEvent("onunload",pa);s=K=null})(this);
(function(a){function b(a,b,d){return function(e){var c=Event.cache[a].element;if(Object.isUndefined(e.eventName)||e.eventName!==b)return!1;Event.extend(e,c);d.call(c,e)}}function d(a,b,d){return function(b){var c=Event.cache[a].element;Event.extend(b,c);for(var e=b.relatedTarget;e&&e!==c;)try{e=e.parentNode}catch(f){e=c}e!==c&&d.call(c,b)}}var e=document.documentElement,f="onmouseenter"in e&&"onmouseleave"in e;a.Event._createResponder=function(a,e,n){return Event._isCustomEvent(e)?b(a,e,n):f||"mouseenter"!==
e&&"mouseleave"!==e?function(b){if(Event.cache){var c=Event.cache[a].element;Event.extend(b,c);n.call(c,b)}}:d(a,e,n)};e=null})(this);
(function(a){function b(){document.loaded||(f&&window.clearTimeout(f),document.loaded=!0,document.fire("dom:loaded"))}function d(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",d),b())}function e(){try{document.documentElement.doScroll("left")}catch(a){f=e.defer();return}b()}var f;"complete"===document.readyState?b():(document.addEventListener?document.addEventListener("DOMContentLoaded",b,!1):(document.attachEvent("onreadystatechange",d),window==top&&(f=e.defer())),
    Event.observe(window,"load",b))})(this);Element.addMethods();Hash.toQueryString=Object.toQueryString;var Toggle={display:Element.toggle};Element.Methods.childOf=Element.Methods.descendantOf;
var Insertion={Before:function(a,b){return Element.insert(a,{before:b})},Top:function(a,b){return Element.insert(a,{top:b})},Bottom:function(a,b){return Element.insert(a,{bottom:b})},After:function(a,b){return Element.insert(a,{after:b})}},$continue=Error('"throw $continue" is deprecated, use "return" instead'),Position={includeScrollOffsets:!1,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||
document.body.scrollTop||0},within:function(a,b,d){if(this.includeScrollOffsets)return this.withinIncludingScrolloffsets(a,b,d);this.xcomp=b;this.ycomp=d;this.offset=Element.cumulativeOffset(a);return d>=this.offset[1]&&d<this.offset[1]+a.offsetHeight&&b>=this.offset[0]&&b<this.offset[0]+a.offsetWidth},withinIncludingScrolloffsets:function(a,b,d){var e=Element.cumulativeScrollOffset(a);this.xcomp=b+e[0]-this.deltaX;this.ycomp=d+e[1]-this.deltaY;this.offset=Element.cumulativeOffset(a);return this.ycomp>=
this.offset[1]&&this.ycomp<this.offset[1]+a.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+a.offsetWidth},overlap:function(a,b){if(!a)return 0;if("vertical"==a)return(this.offset[1]+b.offsetHeight-this.ycomp)/b.offsetHeight;if("horizontal"==a)return(this.offset[0]+b.offsetWidth-this.xcomp)/b.offsetWidth},cumulativeOffset:Element.Methods.cumulativeOffset,positionedOffset:Element.Methods.positionedOffset,absolutize:function(a){Position.prepare();return Element.absolutize(a)},relativize:function(a){Position.prepare();
    return Element.relativize(a)},realOffset:Element.Methods.cumulativeScrollOffset,offsetParent:Element.Methods.getOffsetParent,page:Element.Methods.viewportOffset,clone:function(a,b,d){d=d||{};return Element.clonePosition(b,a,d)}};
document.getElementsByClassName||(document.getElementsByClassName=function(a){function b(a){return a.blank()?null:"[contains(concat(' ', @class, ' '), ' "+a+" ')]"}a.getElementsByClassName=Prototype.BrowserFeatures.XPath?function(a,e){e=e.toString().strip();var f=/\s/.test(e)?$w(e).map(b).join(""):b(e);return f?document._getElementsByXPath(".//*"+f,a):[]}:function(a,b){b=b.toString().strip();var f=[],k=/\s/.test(b)?$w(b):null;if(!k&&!b)return f;var p=$(a).getElementsByTagName("*");b=" "+b+" ";for(var n=
    0,l,c;l=p[n];n++)l.className&&(c=" "+l.className+" ")&&(c.include(b)||k&&k.all(function(a){return!a.toString().blank()&&c.include(" "+a+" ")}))&&f.push(Element.extend(l));return f};return function(a,b){return $(b||document.body).getElementsByClassName(a)}}(Element.Methods));Element.ClassNames=Class.create();
Element.ClassNames.prototype={initialize:function(a){this.element=$(a)},_each:function(a,b){this.element.className.split(/\s+/).select(function(a){return 0<a.length})._each(a,b)},set:function(a){this.element.className=a},add:function(a){this.include(a)||this.set($A(this).concat(a).join(" "))},remove:function(a){this.include(a)&&this.set($A(this).without(a).join(" "))},toString:function(){return $A(this).join(" ")}};Object.extend(Element.ClassNames.prototype,Enumerable);
(function(){window.Selector=Class.create({initialize:function(a){this.expression=a.strip()},findElements:function(a){return Prototype.Selector.select(this.expression,a)},match:function(a){return Prototype.Selector.match(a,this.expression)},toString:function(){return this.expression},inspect:function(){return"#<Selector: "+this.expression+">"}});Object.extend(Selector,{matchElements:function(a,b){for(var d=Prototype.Selector.match,e=[],f=0,k=a.length;f<k;f++){var p=a[f];d(p,b)&&e.push(Element.extend(p))}return e},
    findElement:function(a,b,d){d=d||0;for(var e=0,f,k=0,p=a.length;k<p;k++)if(f=a[k],Prototype.Selector.match(f,b)&&d===e++)return Element.extend(f)},findChildElements:function(a,b){var d=b.toArray().join(", ");return Prototype.Selector.select(d,a||document)}})})();
// Credit Card Validation Javascript
// copyright 12th May 2003, by Stephen Chapman, Felgall Pty Ltd

// You have permission to copy and use this javascript provided that
// the content of the script is not changed in any way.

function validateCreditCard(s) {
    // remove non-numerics
    var v = "0123456789";
    var w = "";
    for (i=0; i < s.length; i++) {
        x = s.charAt(i);
        if (v.indexOf(x,0) != -1)
        w += x;
    }
    // validate number
    j = w.length / 2;
    k = Math.floor(j);
    m = Math.ceil(j) - k;
    c = 0;
    for (i=0; i<k; i++) {
        a = w.charAt(i*2+m) * 2;
        c += a > 9 ? Math.floor(a/10 + a%10) : a;
    }
    for (i=0; i<k+m; i++) c += w.charAt(i*2+1-m) * 1;
    return (c%10 == 0);
}


/*
* Really easy field validation with Prototype
* http://tetlaw.id.au/view/javascript/really-easy-field-validation
* Andrew Tetlaw
* Version 1.5.4.1 (2007-01-05)
*
* Copyright (c) 2007 Andrew Tetlaw
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/
var Validator = Class.create();

Validator.prototype = {
    initialize : function(className, error, test, options) {
        if(typeof test == 'function'){
            this.options = $H(options);
            this._test = test;
        } else {
            this.options = $H(test);
            this._test = function(){return true};
        }
        this.error = error || 'Validation failed.';
        this.className = className;
    },
    test : function(v, elm) {
        return (this._test(v,elm) && this.options.all(function(p){
            return Validator.methods[p.key] ? Validator.methods[p.key](v,elm,p.value) : true;
        }));
    }
}
Validator.methods = {
    pattern : function(v,elm,opt) {return Validation.get('IsEmpty').test(v) || opt.test(v)},
    minLength : function(v,elm,opt) {return v.length >= opt},
    maxLength : function(v,elm,opt) {return v.length <= opt},
    min : function(v,elm,opt) {return v >= parseFloat(opt)},
    max : function(v,elm,opt) {return v <= parseFloat(opt)},
    notOneOf : function(v,elm,opt) {return $A(opt).all(function(value) {
        return v != value;
    })},
    oneOf : function(v,elm,opt) {return $A(opt).any(function(value) {
        return v == value;
    })},
    is : function(v,elm,opt) {return v == opt},
    isNot : function(v,elm,opt) {return v != opt},
    equalToField : function(v,elm,opt) {return v == $F(opt)},
    notEqualToField : function(v,elm,opt) {return v != $F(opt)},
    include : function(v,elm,opt) {return $A(opt).all(function(value) {
        return Validation.get(value).test(v,elm);
    })}
}

var Validation = Class.create();
Validation.defaultOptions = {
    onSubmit : true,
    stopOnFirst : false,
    immediate : false,
    focusOnError : true,
    useTitles : false,
    addClassNameToContainer: false,
    containerClassName: '.input-box',
    onFormValidate : function(result, form) {},
    onElementValidate : function(result, elm) {}
};

Validation.prototype = {
    initialize : function(form, options){
        this.form = $(form);
        if (!this.form) {
            return;
        }
        this.options = Object.extend({
            onSubmit : Validation.defaultOptions.onSubmit,
            stopOnFirst : Validation.defaultOptions.stopOnFirst,
            immediate : Validation.defaultOptions.immediate,
            focusOnError : Validation.defaultOptions.focusOnError,
            useTitles : Validation.defaultOptions.useTitles,
            onFormValidate : Validation.defaultOptions.onFormValidate,
            onElementValidate : Validation.defaultOptions.onElementValidate
        }, options || {});
        if(this.options.onSubmit) Event.observe(this.form,'submit',this.onSubmit.bind(this),false);
        if(this.options.immediate) {
            Form.getElements(this.form).each(function(input) { // Thanks Mike!
                if (input.tagName.toLowerCase() == 'select') {
                    Event.observe(input, 'blur', this.onChange.bindAsEventListener(this));
                }
                if (input.type.toLowerCase() == 'radio' || input.type.toLowerCase() == 'checkbox') {
                    Event.observe(input, 'click', this.onChange.bindAsEventListener(this));
                } else {
                    Event.observe(input, 'change', this.onChange.bindAsEventListener(this));
                }
            }, this);
        }
    },
    onChange : function (ev) {
        Validation.isOnChange = true;
        Validation.validate(Event.element(ev),{
                useTitle : this.options.useTitles,
                onElementValidate : this.options.onElementValidate
        });
        Validation.isOnChange = false;
    },
    onSubmit :  function(ev){
        if(!this.validate()) Event.stop(ev);
    },
    validate : function() {
        var result = false;
        var useTitles = this.options.useTitles;
        var callback = this.options.onElementValidate;
        try {
            if(this.options.stopOnFirst) {
                result = Form.getElements(this.form).all(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this);
            } else {
                result = Form.getElements(this.form).collect(function(elm) {
                    if (elm.hasClassName('local-validation') && !this.isElementInForm(elm, this.form)) {
                        return true;
                    }
                    return Validation.validate(elm,{useTitle : useTitles, onElementValidate : callback});
                }, this).all();
            }
        } catch (e) {
        }
        if(!result && this.options.focusOnError) {
            try{
                Form.getElements(this.form).findAll(function(elm){return $(elm).hasClassName('validation-failed')}).first().focus()
            }
            catch(e){
            }
        }
        this.options.onFormValidate(result, this.form);
        return result;
    },
    reset : function() {
        Form.getElements(this.form).each(Validation.reset);
    },
    isElementInForm : function(elm, form) {
        var domForm = elm.up('form');
        if (domForm == form) {
            return true;
        }
        return false;
    }
}

Object.extend(Validation, {
    validate : function(elm, options){
        options = Object.extend({
            useTitle : false,
            onElementValidate : function(result, elm) {}
        }, options || {});
        elm = $(elm);

        var cn = $w(elm.className);
        return result = cn.all(function(value) {
            var test = Validation.test(value,elm,options.useTitle);
            options.onElementValidate(test, elm);
            return test;
        });
    },
    insertAdvice : function(elm, advice){
        var container = $(elm).up('.field-row');
        if(container){
            Element.insert(container, {after: advice});
        } else if (elm.up('td.value')) {
            elm.up('td.value').insert({bottom: advice});
        } else if (elm.advaiceContainer && $(elm.advaiceContainer)) {
            $(elm.advaiceContainer).update(advice);
        }
        else {
            switch (elm.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    var p = elm.parentNode;
                    if(p) {
                        Element.insert(p, {'bottom': advice});
                    } else {
                        Element.insert(elm, {'after': advice});
                    }
                    break;
                default:
                    Element.insert(elm, {'after': advice});
            }
        }
    },
    showAdvice : function(elm, advice, adviceName){
        if(!elm.advices){
            elm.advices = new Hash();
        }
        else{
            elm.advices.each(function(pair){
                if (!advice || pair.value.id != advice.id) {
                    // hide non-current advice after delay
                    this.hideAdvice(elm, pair.value);
                }
            }.bind(this));
        }
        elm.advices.set(adviceName, advice);
        if(typeof Effect == 'undefined') {
            advice.style.display = 'block';
        } else {
            if(!advice._adviceAbsolutize) {
                new Effect.Appear(advice, {duration : 1 });
            } else {
                Position.absolutize(advice);
                advice.show();
                advice.setStyle({
                    'top':advice._adviceTop,
                    'left': advice._adviceLeft,
                    'width': advice._adviceWidth,
                    'z-index': 1000
                });
                advice.addClassName('advice-absolute');
            }
        }
    },
    hideAdvice : function(elm, advice){
        if (advice != null) {
            new Effect.Fade(advice, {duration : 1, afterFinishInternal : function() {advice.hide();}});
        }
    },
    updateCallback : function(elm, status) {
        if (typeof elm.callbackFunction != 'undefined') {
            eval(elm.callbackFunction+'(\''+elm.id+'\',\''+status+'\')');
        }
    },
    ajaxError : function(elm, errorMsg) {
        var name = 'validate-ajax';
        var advice = Validation.getAdvice(name, elm);
        if (advice == null) {
            advice = this.createAdvice(name, elm, false, errorMsg);
        }
        this.showAdvice(elm, advice, 'validate-ajax');
        this.updateCallback(elm, 'failed');

        elm.addClassName('validation-failed');
        elm.addClassName('validate-ajax');
        if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
            var container = elm.up(Validation.defaultOptions.containerClassName);
            if (container && this.allowContainerClassName(elm)) {
                container.removeClassName('validation-passed');
                container.addClassName('validation-error');
            }
        }
    },
    allowContainerClassName: function (elm) {
        if (elm.type == 'radio' || elm.type == 'checkbox') {
            return elm.hasClassName('change-container-classname');
        }

        return true;
    },
    test : function(name, elm, useTitle) {
        var v = Validation.get(name);
        var prop = '__advice'+name.camelize();
        try {
        if(Validation.isVisible(elm) && !v.test($F(elm), elm)) {
            //if(!elm[prop]) {
                var advice = Validation.getAdvice(name, elm);
                if (advice == null) {
                    advice = this.createAdvice(name, elm, useTitle);
                }
                this.showAdvice(elm, advice, name);
                this.updateCallback(elm, 'failed');
            //}
            elm[prop] = 1;
            if (!elm.advaiceContainer) {
                elm.removeClassName('validation-passed');
                elm.addClassName('validation-failed');
            }

           if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && this.allowContainerClassName(elm)) {
                    container.removeClassName('validation-passed');
                    container.addClassName('validation-error');
                }
            }
            return false;
        } else {
            var advice = Validation.getAdvice(name, elm);
            this.hideAdvice(elm, advice);
            this.updateCallback(elm, 'passed');
            elm[prop] = '';
            elm.removeClassName('validation-failed');
            elm.addClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container && !container.down('.validation-failed') && this.allowContainerClassName(elm)) {
                    if (!Validation.get('IsEmpty').test(elm.value) || !this.isVisible(elm)) {
                        container.addClassName('validation-passed');
                    } else {
                        container.removeClassName('validation-passed');
                    }
                    container.removeClassName('validation-error');
                }
            }
            return true;
        }
        } catch(e) {
            throw(e)
        }
    },
    isVisible : function(elm) {
        while(elm.tagName != 'BODY') {
            if(!$(elm).visible()) return false;
            elm = elm.parentNode;
        }
        return true;
    },
    getAdvice : function(name, elm) {
        return $('advice-' + name + '-' + Validation.getElmID(elm)) || $('advice-' + Validation.getElmID(elm));
    },
    createAdvice : function(name, elm, useTitle, customError) {
        var v = Validation.get(name);
        var errorMsg = useTitle ? ((elm && elm.title) ? elm.title : v.error) : v.error;
        if (customError) {
            errorMsg = customError;
        }
        try {
            if (Translator){
                errorMsg = Translator.translate(errorMsg);
            }
        }
        catch(e){}

        advice = '<div class="validation-advice" id="advice-' + name + '-' + Validation.getElmID(elm) +'" style="display:none">' + errorMsg + '</div>'


        Validation.insertAdvice(elm, advice);
        advice = Validation.getAdvice(name, elm);
        if($(elm).hasClassName('absolute-advice')) {
            var dimensions = $(elm).getDimensions();
            var originalPosition = Position.cumulativeOffset(elm);

            advice._adviceTop = (originalPosition[1] + dimensions.height) + 'px';
            advice._adviceLeft = (originalPosition[0])  + 'px';
            advice._adviceWidth = (dimensions.width)  + 'px';
            advice._adviceAbsolutize = true;
        }
        return advice;
    },
    getElmID : function(elm) {
        return elm.id ? elm.id : elm.name;
    },
    reset : function(elm) {
        elm = $(elm);
        var cn = $w(elm.className);
        cn.each(function(value) {
            var prop = '__advice'+value.camelize();
            if(elm[prop]) {
                var advice = Validation.getAdvice(value, elm);
                if (advice) {
                    advice.hide();
                }
                elm[prop] = '';
            }
            elm.removeClassName('validation-failed');
            elm.removeClassName('validation-passed');
            if (Validation.defaultOptions.addClassNameToContainer && Validation.defaultOptions.containerClassName != '') {
                var container = elm.up(Validation.defaultOptions.containerClassName);
                if (container) {
                    container.removeClassName('validation-passed');
                    container.removeClassName('validation-error');
                }
            }
        });
    },
    add : function(className, error, test, options) {
        var nv = {};
        nv[className] = new Validator(className, error, test, options);
        Object.extend(Validation.methods, nv);
    },
    addAllThese : function(validators) {
        var nv = {};
        $A(validators).each(function(value) {
                nv[value[0]] = new Validator(value[0], value[1], value[2], (value.length > 3 ? value[3] : {}));
            });
        Object.extend(Validation.methods, nv);
    },
    get : function(name) {
        return  Validation.methods[name] ? Validation.methods[name] : Validation.methods['_LikeNoIDIEverSaw_'];
    },
    methods : {
        '_LikeNoIDIEverSaw_' : new Validator('_LikeNoIDIEverSaw_','',{})
    }
});

Validation.add('IsEmpty', '', function(v) {
    return  (v == '' || (v == null) || (v.length == 0) || /^\s+$/.test(v));
});

Validation.addAllThese([
    ['validate-no-html-tags', 'HTML tags are not allowed', function(v) {
				return !/<(\/)?\w+/.test(v);
			}],
	['validate-select', 'Please select an option.', function(v) {
                return ((v != "none") && (v != null) && (v.length != 0));
            }],
    ['required-entry', 'This is a required field.', function(v) {
                return !Validation.get('IsEmpty').test(v);
            }],
    ['validate-number', 'Please enter a valid number in this field.', function(v) {
                return Validation.get('IsEmpty').test(v)
                    || (!isNaN(parseNumber(v)) && /^\s*-?\d*(\.\d*)?\s*$/.test(v));
            }],
    ['validate-number-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^number-range-(-?[\d.,]+)?-(-?[\d.,]+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-digits', 'Please use numbers only in this field. Please avoid spaces or other characters such as dots or commas.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  !/[^\d]/.test(v);
            }],
    ['validate-digits-range', 'The value is not within the specified range.', function(v, elm) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }

                var numValue = parseNumber(v);
                if (isNaN(numValue)) {
                    return false;
                }

                var reRange = /^digits-range-(-?\d+)?-(-?\d+)?$/,
                    result = true;

                $w(elm.className).each(function(name) {
                    var m = reRange.exec(name);
                    if (m) {
                        result = result
                            && (m[1] == null || m[1] == '' || numValue >= parseNumber(m[1]))
                            && (m[2] == null || m[2] == '' || numValue <= parseNumber(m[2]));
                    }
                });

                return result;
            }],
    ['validate-alpha', 'Please use letters only (a-z or A-Z) in this field.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-zA-Z]+$/.test(v)
            }],
    ['validate-code', 'Please use only letters (a-z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[a-z]+[a-z0-9_]+$/.test(v)
            }],
    ['validate-alphanum', 'Please use only letters (a-z or A-Z) or numbers (0-9) only in this field. No spaces or other characters are allowed.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9]+$/.test(v)
            }],
    ['validate-alphanum-with-spaces', 'Please use only letters (a-z or A-Z), numbers (0-9) or spaces only in this field.', function(v) {
                    return Validation.get('IsEmpty').test(v) || /^[a-zA-Z0-9 ]+$/.test(v)
            }],
    ['validate-street', 'Please use only letters (a-z or A-Z) or numbers (0-9) or spaces and # only in this field.', function(v) {
                return Validation.get('IsEmpty').test(v) ||  /^[ \w]{3,}([A-Za-z]\.)?([ \w]*\#\d+)?(\r\n| )[ \w]{3,}/.test(v)
            }],
    ['validate-phoneStrict', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-phoneLax', 'Please enter a valid phone number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^((\d[-. ]?)?((\(\d{3}\))|\d{3}))?[-. ]?\d{3}[-. ]?\d{4}$/.test(v);
            }],
    ['validate-fax', 'Please enter a valid fax number. For example (123) 456-7890 or 123-456-7890.', function(v) {
                return Validation.get('IsEmpty').test(v) || /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
            }],
    ['validate-date', 'Please enter a valid date.', function(v) {
                var test = new Date(v);
                return Validation.get('IsEmpty').test(v) || !isNaN(test);
            }],
    ['validate-date-range', 'The From Date value should be less than or equal to the To Date value.', function(v, elm) {
            var m = /\bdate-range-(\w+)-(\w+)\b/.exec(elm.className);
            if (!m || m[2] == 'to' || Validation.get('IsEmpty').test(v)) {
                return true;
            }

            var currentYear = new Date().getFullYear() + '';
            var normalizedTime = function(v) {
                v = v.split(/[.\/]/);
                if (v[2] && v[2].length < 4) {
                    v[2] = currentYear.substr(0, v[2].length) + v[2];
                }
                return new Date(v.join('/')).getTime();
            };

            var dependentElements = Element.select(elm.form, '.validate-date-range.date-range-' + m[1] + '-to');
            return !dependentElements.length || Validation.get('IsEmpty').test(dependentElements[0].value)
                || normalizedTime(v) <= normalizedTime(dependentElements[0].value);
        }],
    ['validate-email', 'Please enter a valid email address. For example johndoe@domain.com.', function (v) {
                //return Validation.get('IsEmpty').test(v) || /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(v)
                //return Validation.get('IsEmpty').test(v) || /^[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9][\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9\.]{1,30}[\!\#$%\*/?|\^\{\}`~&\'\+\-=_a-z0-9]@([a-z0-9_-]{1,30}\.){1,5}[a-z]{2,4}$/i.test(v)
                return Validation.get('IsEmpty').test(v) || /^([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i.test(v)
            }],
    ['validate-emailSender', 'Please use only visible characters and spaces.', function (v) {
                return Validation.get('IsEmpty').test(v) ||  /^[\S ]+$/.test(v)
                    }],
    ['validate-password', 'Please enter 6 or more characters. Leading or trailing spaces will be ignored.', function(v) {
                var pass=v.strip(); /*strip leading and trailing spaces*/
                return !(pass.length>0 && pass.length < 6);
            }],
    ['validate-admin-password', 'Please enter 7 or more characters. Password should contain both numeric and alphabetic characters.', function(v) {
                var pass=v.strip();
                if (0 == pass.length) {
                    return true;
                }
                if (!(/[a-z]/i.test(v)) || !(/[0-9]/.test(v))) {
                    return false;
                }
                return !(pass.length < 7);
            }],
    ['validate-cpassword', 'Please make sure your passwords match.', function(v) {
                var conf = $('confirmation') ? $('confirmation') : $$('.validate-cpassword')[0];
                var pass = false;
                if ($('password')) {
                    pass = $('password');
                }
                var passwordElements = $$('.validate-password');
                for (var i = 0; i < passwordElements.size(); i++) {
                    var passwordElement = passwordElements[i];
                    if (passwordElement.up('form').id == conf.up('form').id) {
                        pass = passwordElement;
                    }
                }
                if ($$('.validate-admin-password').size()) {
                    pass = $$('.validate-admin-password')[0];
                }
                return (pass.value == conf.value);
            }],
    ['validate-both-passwords', 'Please make sure your passwords match.', function(v, input) {
                var dependentInput = $(input.form[input.name == 'password' ? 'confirmation' : 'password']),
                    isEqualValues  = input.value == dependentInput.value;

                if (isEqualValues && dependentInput.hasClassName('validation-failed')) {
                    Validation.test(this.className, dependentInput);
                }

                return dependentInput.value == '' || isEqualValues;
            }],
    ['validate-url', 'Please enter a valid URL. Protocol is required (http://, https:// or ftp://)', function (v) {
                v = (v || '').replace(/^\s+/, '').replace(/\s+$/, '');
                return Validation.get('IsEmpty').test(v) || /^(http|https|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i.test(v)
            }],
    ['validate-clean-url', 'Please enter a valid URL. For example http://www.example.com or www.example.com', function (v) {
                return Validation.get('IsEmpty').test(v) || /^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v) || /^(www)((\.[A-Z0-9][A-Z0-9_-]*)+.(com|org|net|dk|at|us|tv|info|uk|co.uk|biz|se)$)(:(\d+))?\/?/i.test(v)
            }],
    ['validate-identifier', 'Please enter a valid URL Key. For example "example-page", "example-page.html" or "anotherlevel/example-page".', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[a-z0-9][a-z0-9_\/-]+(\.[a-z0-9_-]+)?$/.test(v)
            }],
    ['validate-xml-identifier', 'Please enter a valid XML-identifier. For example something_1, block5, id-4.', function (v) {
                return Validation.get('IsEmpty').test(v) || /^[A-Z][A-Z0-9_\/-]*$/i.test(v)
            }],
    ['validate-ssn', 'Please enter a valid social security number. For example 123-45-6789.', function(v) {
            return Validation.get('IsEmpty').test(v) || /^\d{3}-?\d{2}-?\d{4}$/.test(v);
            }],
    ['validate-zip', 'Please enter a valid zip code. For example 90602 or 90602-1234.', function(v) {
            return Validation.get('IsEmpty').test(v) || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v);
            }],
    ['validate-zip-international', 'Please enter a valid zip code.', function(v) {
            //return Validation.get('IsEmpty').test(v) || /(^[A-z0-9]{2,10}([\s]{0,1}|[\-]{0,1})[A-z0-9]{2,10}$)/.test(v);
            return true;
            }],
    ['validate-date-au', 'Please use this date format: dd/mm/yyyy. For example 17/03/2006 for the 17th of March, 2006.', function(v) {
                if(Validation.get('IsEmpty').test(v)) return true;
                var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
                if(!regex.test(v)) return false;
                var d = new Date(v.replace(regex, '$2/$1/$3'));
                return ( parseInt(RegExp.$2, 10) == (1+d.getMonth()) ) &&
                            (parseInt(RegExp.$1, 10) == d.getDate()) &&
                            (parseInt(RegExp.$3, 10) == d.getFullYear() );
            }],
    ['validate-currency-dollar', 'Please enter a valid $ amount. For example $100.00.', function(v) {
                // [$]1[##][,###]+[.##]
                // [$]1###+[.##]
                // [$]0.##
                // [$].##
                return Validation.get('IsEmpty').test(v) ||  /^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(v)
            }],
    ['validate-one-required', 'Please select one of the above options.', function (v,elm) {
                var p = elm.parentNode;
                var options = p.getElementsByTagName('INPUT');
                return $A(options).any(function(elm) {
                    return $F(elm);
                });
            }],
    ['validate-one-required-by-name', 'Please select one of the options.', function (v,elm) {
                var inputs = $$('input[name="' + elm.name.replace(/([\\"])/g, '\\$1') + '"]');

                var error = 1;
                for(var i=0;i<inputs.length;i++) {
                    if((inputs[i].type == 'checkbox' || inputs[i].type == 'radio') && inputs[i].checked == true) {
                        error = 0;
                    }

                    if(Validation.isOnChange && (inputs[i].type == 'checkbox' || inputs[i].type == 'radio')) {
                        Validation.reset(inputs[i]);
                    }
                }

                if( error == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }],
    ['validate-not-negative-number', 'Please enter a number 0 or greater in this field.', function(v) {
                if (Validation.get('IsEmpty').test(v)) {
                    return true;
                }
                v = parseNumber(v);
                return !isNaN(v) && v >= 0;
            }],
    ['validate-zero-or-greater', 'Please enter a number 0 or greater in this field.', function(v) {
            return Validation.get('validate-not-negative-number').test(v);
        }],
    ['validate-greater-than-zero', 'Please enter a number greater than 0 in this field.', function(v) {
            if (Validation.get('IsEmpty').test(v)) {
                return true;
            }
            v = parseNumber(v);
            return !isNaN(v) && v > 0;
        }],
    ['validate-state', 'Please select State/Province.', function(v) {
                return (v!=0 || v == '');
            }],
    ['validate-new-password', 'Please enter 6 or more characters. Leading or trailing spaces will be ignored.', function(v) {
                if (!Validation.get('validate-password').test(v)) return false;
                if (Validation.get('IsEmpty').test(v) && v != '') return false;
                return true;
            }],
    ['validate-cc-number', 'Please enter a valid credit card number.', function(v, elm) {
                // remove non-numerics
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (ccTypeContainer && typeof Validation.creditCartTypes.get(ccTypeContainer.value) != 'undefined'
                        && Validation.creditCartTypes.get(ccTypeContainer.value)[2] == false) {
                    if (!Validation.get('IsEmpty').test(v) && Validation.get('validate-digits').test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return validateCreditCard(v);
            }],
    ['validate-cc-type', 'Credit card number does not match credit card type.', function(v, elm) {
                // remove credit card number delimiters such as "-" and space
                elm.value = removeDelimiters(elm.value);
                v         = removeDelimiters(v);

                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_number')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                // Other card type or switch or solo card
                if (Validation.creditCartTypes.get(ccType)[0]==false) {
                    return true;
                }

                // Matched credit card type
                var ccMatchedType = '';

                Validation.creditCartTypes.each(function (pair) {
                    if (pair.value[0] && v.match(pair.value[0])) {
                        ccMatchedType = pair.key;
                        throw $break;
                    }
                });

                if(ccMatchedType != ccType) {
                    return false;
                }

                if (ccTypeContainer.hasClassName('validation-failed') && Validation.isOnChange) {
                    Validation.validate(ccTypeContainer);
                }

                return true;
            }],
     ['validate-cc-type-select', 'Card type does not match credit card number.', function(v, elm) {
                var ccNumberContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_type')) + '_cc_number');
                if (Validation.isOnChange && Validation.get('IsEmpty').test(ccNumberContainer.value)) {
                    return true;
                }
                if (Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer)) {
                    Validation.validate(ccNumberContainer);
                }
                return Validation.get('validate-cc-type').test(ccNumberContainer.value, ccNumberContainer);
            }],
     ['validate-cc-exp', 'Incorrect credit card expiration date.', function(v, elm) {
                var ccExpMonth   = v;
                var ccExpYear    = $(elm.id.substr(0,elm.id.indexOf('_expiration')) + '_expiration_yr').value;
                var currentTime  = new Date();
                var currentMonth = currentTime.getMonth() + 1;
                var currentYear  = currentTime.getFullYear();
                if (ccExpMonth < currentMonth && ccExpYear == currentYear) {
                    return false;
                }
                return true;
            }],
     ['validate-cc-cvn', 'Please enter a valid credit card verification number.', function(v, elm) {
                var ccTypeContainer = $(elm.id.substr(0,elm.id.indexOf('_cc_cid')) + '_cc_type');
                if (!ccTypeContainer) {
                    return true;
                }
                var ccType = ccTypeContainer.value;

                if (typeof Validation.creditCartTypes.get(ccType) == 'undefined') {
                    return false;
                }

                var re = Validation.creditCartTypes.get(ccType)[1];

                if (v.match(re)) {
                    return true;
                }

                return false;
            }],
     ['validate-ajax', '', function(v, elm) { return true; }],
     ['validate-data', 'Please use only letters (a-z or A-Z), numbers (0-9) or underscore(_) in this field, first character should be a letter.', function (v) {
                if(v != '' && v) {
                    return /^[A-Za-z]+[A-Za-z0-9_]+$/.test(v);
                }
                return true;
            }],
     ['validate-css-length', 'Please input a valid CSS-length. For example 100px or 77pt or 20em or .5ex or 50%.', function (v) {
                if (v != '' && v) {
                    return /^[0-9\.]+(px|pt|em|ex|%)?$/.test(v) && (!(/\..*\./.test(v))) && !(/\.$/.test(v));
                }
                return true;
            }],
     ['validate-length', 'Text length does not satisfy specified text range.', function (v, elm) {
                var reMax = new RegExp(/^maximum-length-[0-9]+$/);
                var reMin = new RegExp(/^minimum-length-[0-9]+$/);
                var result = true;
                $w(elm.className).each(function(name, index) {
                    if (name.match(reMax) && result) {
                       var length = name.split('-')[2];
                       result = (v.length <= length);
                    }
                    if (name.match(reMin) && result && !Validation.get('IsEmpty').test(v)) {
                        var length = name.split('-')[2];
                        result = (v.length >= length);
                    }
                });
                return result;
            }],
     ['validate-percents', 'Please enter a number lower than 100.', {max:100}],
     ['required-file', 'Please select a file', function(v, elm) {
         var result = !Validation.get('IsEmpty').test(v);
         if (result === false) {
             ovId = elm.id + '_value';
             if ($(ovId)) {
                 result = !Validation.get('IsEmpty').test($(ovId).value);
             }
         }
         return result;
     }],
     ['validate-cc-ukss', 'Please enter issue number or start date for switch/solo card type.', function(v,elm) {
         var endposition;

         if (elm.id.match(/(.)+_cc_issue$/)) {
             endposition = elm.id.indexOf('_cc_issue');
         } else if (elm.id.match(/(.)+_start_month$/)) {
             endposition = elm.id.indexOf('_start_month');
         } else {
             endposition = elm.id.indexOf('_start_year');
         }

         var prefix = elm.id.substr(0,endposition);

         var ccTypeContainer = $(prefix + '_cc_type');

         if (!ccTypeContainer) {
               return true;
         }
         var ccType = ccTypeContainer.value;

         if(['SS','SM','SO'].indexOf(ccType) == -1){
             return true;
         }

         $(prefix + '_cc_issue').advaiceContainer
           = $(prefix + '_start_month').advaiceContainer
           = $(prefix + '_start_year').advaiceContainer
           = $(prefix + '_cc_type_ss_div').down('ul li.adv-container');

         var ccIssue   =  $(prefix + '_cc_issue').value;
         var ccSMonth  =  $(prefix + '_start_month').value;
         var ccSYear   =  $(prefix + '_start_year').value;

         var ccStartDatePresent = (ccSMonth && ccSYear) ? true : false;

         if (!ccStartDatePresent && !ccIssue){
             return false;
         }
         return true;
     }]
]);

function removeDelimiters (v) {
    v = v.replace(/\s/g, '');
    v = v.replace(/\-/g, '');
    return v;
}

function parseNumber(v)
{
    if (typeof v != 'string') {
        return parseFloat(v);
    }

    var isDot  = v.indexOf('.');
    var isComa = v.indexOf(',');

    if (isDot != -1 && isComa != -1) {
        if (isComa > isDot) {
            v = v.replace('.', '').replace(',', '.');
        }
        else {
            v = v.replace(',', '');
        }
    }
    else if (isComa != -1) {
        v = v.replace(',', '.');
    }

    return parseFloat(v);
}

/**
 * Hash with credit card types which can be simply extended in payment modules
 * 0 - regexp for card number
 * 1 - regexp for cvn
 * 2 - check or not credit card number trough Luhn algorithm by
 *     function validateCreditCard which you can find above in this file
 */
Validation.creditCartTypes = $H({
//    'SS': [new RegExp('^((6759[0-9]{12})|(5018|5020|5038|6304|6759|6761|6763[0-9]{12,19})|(49[013][1356][0-9]{12})|(6333[0-9]{12})|(6334[0-4]\d{11})|(633110[0-9]{10})|(564182[0-9]{10}))([0-9]{2,3})?$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'SO': [new RegExp('^(6334[5-9]([0-9]{11}|[0-9]{13,14}))|(6767([0-9]{12}|[0-9]{14,15}))$'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'SM': [new RegExp('(^(5[0678])[0-9]{11,18}$)|(^(6[^05])[0-9]{11,18}$)|(^(601)[^1][0-9]{9,16}$)|(^(6011)[0-9]{9,11}$)|(^(6011)[0-9]{13,16}$)|(^(65)[0-9]{11,13}$)|(^(65)[0-9]{15,18}$)|(^(49030)[2-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49033)[5-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49110)[1-2]([0-9]{10}$|[0-9]{12,13}$))|(^(49117)[4-9]([0-9]{10}$|[0-9]{12,13}$))|(^(49118)[0-2]([0-9]{10}$|[0-9]{12,13}$))|(^(4936)([0-9]{12}$|[0-9]{14,15}$))'), new RegExp('^([0-9]{3}|[0-9]{4})?$'), true],
    'VI': [new RegExp('^4[0-9]{12}([0-9]{3})?$'), new RegExp('^[0-9]{3}$'), true],
    'MC': [new RegExp('^5[1-5][0-9]{14}$'), new RegExp('^[0-9]{3}$'), true],
    'AE': [new RegExp('^3[47][0-9]{13}$'), new RegExp('^[0-9]{4}$'), true],
    'DI': [new RegExp('^6011[0-9]{12}$'), new RegExp('^[0-9]{3}$'), true],
    'JCB': [new RegExp('^(3[0-9]{15}|(2131|1800)[0-9]{11})$'), new RegExp('^[0-9]{3,4}$'), true],
    'OT': [false, new RegExp('^([0-9]{3}|[0-9]{4})?$'), false]
});

// script.aculo.us builder.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

var Builder = {
  NODEMAP: {
    AREA: 'map',
    CAPTION: 'table',
    COL: 'table',
    COLGROUP: 'table',
    LEGEND: 'fieldset',
    OPTGROUP: 'select',
    OPTION: 'select',
    PARAM: 'object',
    TBODY: 'table',
    TD: 'table',
    TFOOT: 'table',
    TH: 'table',
    THEAD: 'table',
    TR: 'table'
  },
  // note: For Firefox < 1.5, OPTION and OPTGROUP tags are currently broken,
  //       due to a Firefox bug
  node: function(elementName) {
    elementName = elementName.toUpperCase();

    // try innerHTML approach
    var parentTag = this.NODEMAP[elementName] || 'div';
    var parentElement = document.createElement(parentTag);
    try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
      parentElement.innerHTML = "<" + elementName + "></" + elementName + ">";
    } catch(e) {}
    var element = parentElement.firstChild || null;

    // see if browser added wrapping tags
    if(element && (element.tagName.toUpperCase() != elementName))
      element = element.getElementsByTagName(elementName)[0];

    // fallback to createElement approach
    if(!element) element = document.createElement(elementName);

    // abort if nothing could be created
    if(!element) return;

    // attributes (or text)
    if(arguments[1])
      if(this._isStringOrNumber(arguments[1]) ||
        (arguments[1] instanceof Array) ||
        arguments[1].tagName) {
          this._children(element, arguments[1]);
        } else {
          var attrs = this._attributes(arguments[1]);
          if(attrs.length) {
            try { // prevent IE "feature": http://dev.rubyonrails.org/ticket/2707
              parentElement.innerHTML = "<" +elementName + " " +
                attrs + "></" + elementName + ">";
            } catch(e) {}
            element = parentElement.firstChild || null;
            // workaround firefox 1.0.X bug
            if(!element) {
              element = document.createElement(elementName);
              for(attr in arguments[1])
                element[attr == 'class' ? 'className' : attr] = arguments[1][attr];
            }
            if(element.tagName.toUpperCase() != elementName)
              element = parentElement.getElementsByTagName(elementName)[0];
          }
        }

    // text, or array of children
    if(arguments[2])
      this._children(element, arguments[2]);

     return $(element);
  },
  _text: function(text) {
     return document.createTextNode(text);
  },

  ATTR_MAP: {
    'className': 'class',
    'htmlFor': 'for'
  },

  _attributes: function(attributes) {
    var attrs = [];
    for(attribute in attributes)
      attrs.push((attribute in this.ATTR_MAP ? this.ATTR_MAP[attribute] : attribute) +
          '="' + attributes[attribute].toString().escapeHTML().gsub(/"/,'&quot;') + '"');
    return attrs.join(" ");
  },
  _children: function(element, children) {
    if(children.tagName) {
      element.appendChild(children);
      return;
    }
    if(typeof children=='object') { // array can hold nodes and text
      children.flatten().each( function(e) {
        if(typeof e=='object')
          element.appendChild(e);
        else
          if(Builder._isStringOrNumber(e))
            element.appendChild(Builder._text(e));
      });
    } else
      if(Builder._isStringOrNumber(children))
        element.appendChild(Builder._text(children));
  },
  _isStringOrNumber: function(param) {
    return(typeof param=='string' || typeof param=='number');
  },
  build: function(html) {
    var element = this.node('div');
    $(element).update(html.strip());
    return element.down();
  },
  dump: function(scope) {
    if(typeof scope != 'object' && typeof scope != 'function') scope = window; //global scope

    var tags = ("A ABBR ACRONYM ADDRESS APPLET AREA B BASE BASEFONT BDO BIG BLOCKQUOTE BODY " +
      "BR BUTTON CAPTION CENTER CITE CODE COL COLGROUP DD DEL DFN DIR DIV DL DT EM FIELDSET " +
      "FONT FORM FRAME FRAMESET H1 H2 H3 H4 H5 H6 HEAD HR HTML I IFRAME IMG INPUT INS ISINDEX "+
      "KBD LABEL LEGEND LI LINK MAP MENU META NOFRAMES NOSCRIPT OBJECT OL OPTGROUP OPTION P "+
      "PARAM PRE Q S SAMP SCRIPT SELECT SMALL SPAN STRIKE STRONG STYLE SUB SUP TABLE TBODY TD "+
      "TEXTAREA TFOOT TH THEAD TITLE TR TT U UL VAR").split(/\s+/);

    tags.each( function(tag){
      scope[tag] = function() {
        return Builder.node.apply(Builder, [tag].concat($A(arguments)));
      };
    });
  }
};
// script.aculo.us effects.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
// Contributors:
//  Justin Palmer (http://encytemedia.com/)
//  Mark Pilgrim (http://diveintomark.org/)
//  Martin Bialasinki
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// converts rgb() and #xxx to #xxxxxx format,
// returns self (or first argument) if not convertable
String.prototype.parseColor = function() {
  var color = '#';
  if (this.slice(0,4) == 'rgb(') {
    var cols = this.slice(4,this.length-1).split(',');
    var i=0; do { color += parseInt(cols[i]).toColorPart() } while (++i<3);
  } else {
    if (this.slice(0,1) == '#') {
      if (this.length==4) for(var i=1;i<4;i++) color += (this.charAt(i) + this.charAt(i)).toLowerCase();
      if (this.length==7) color = this.toLowerCase();
    }
  }
  return (color.length==7 ? color : (arguments[0] || this));
};

/*--------------------------------------------------------------------------*/

Element.collectTextNodes = function(element) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      (node.hasChildNodes() ? Element.collectTextNodes(node) : ''));
  }).flatten().join('');
};

Element.collectTextNodesIgnoreClass = function(element, className) {
  return $A($(element).childNodes).collect( function(node) {
    return (node.nodeType==3 ? node.nodeValue :
      ((node.hasChildNodes() && !Element.hasClassName(node,className)) ?
        Element.collectTextNodesIgnoreClass(node, className) : ''));
  }).flatten().join('');
};

Element.setContentZoom = function(element, percent) {
  element = $(element);
  element.setStyle({fontSize: (percent/100) + 'em'});
  if (Prototype.Browser.WebKit) window.scrollBy(0,0);
  return element;
};

Element.getInlineOpacity = function(element){
  return $(element).style.opacity || '';
};

Element.forceRerendering = function(element) {
  try {
    element = $(element);
    var n = document.createTextNode(' ');
    element.appendChild(n);
    element.removeChild(n);
  } catch(e) { }
};

/*--------------------------------------------------------------------------*/

var Effect = {
  _elementDoesNotExistError: {
    name: 'ElementDoesNotExistError',
    message: 'The specified DOM element does not exist, but is required for this effect to operate'
  },
  Transitions: {
    linear: Prototype.K,
    sinoidal: function(pos) {
      return (-Math.cos(pos*Math.PI)/2) + .5;
    },
    reverse: function(pos) {
      return 1-pos;
    },
    flicker: function(pos) {
      var pos = ((-Math.cos(pos*Math.PI)/4) + .75) + Math.random()/4;
      return pos > 1 ? 1 : pos;
    },
    wobble: function(pos) {
      return (-Math.cos(pos*Math.PI*(9*pos))/2) + .5;
    },
    pulse: function(pos, pulses) {
      return (-Math.cos((pos*((pulses||5)-.5)*2)*Math.PI)/2) + .5;
    },
    spring: function(pos) {
      return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
    },
    none: function(pos) {
      return 0;
    },
    full: function(pos) {
      return 1;
    }
  },
  DefaultOptions: {
    duration:   1.0,   // seconds
    fps:        100,   // 100= assume 66fps max.
    sync:       false, // true for combining
    from:       0.0,
    to:         1.0,
    delay:      0.0,
    queue:      'parallel'
  },
  tagifyText: function(element) {
    var tagifyStyle = 'position:relative';
    if (Prototype.Browser.IE) tagifyStyle += ';zoom:1';

    element = $(element);
    $A(element.childNodes).each( function(child) {
      if (child.nodeType==3) {
        child.nodeValue.toArray().each( function(character) {
          element.insertBefore(
            new Element('span', {style: tagifyStyle}).update(
              character == ' ' ? String.fromCharCode(160) : character),
              child);
        });
        Element.remove(child);
      }
    });
  },
  multiple: function(element, effect) {
    var elements;
    if (((typeof element == 'object') ||
        Object.isFunction(element)) &&
       (element.length))
      elements = element;
    else
      elements = $(element).childNodes;

    var options = Object.extend({
      speed: 0.1,
      delay: 0.0
    }, arguments[2] || { });
    var masterDelay = options.delay;

    $A(elements).each( function(element, index) {
      new effect(element, Object.extend(options, { delay: index * options.speed + masterDelay }));
    });
  },
  PAIRS: {
    'slide':  ['SlideDown','SlideUp'],
    'blind':  ['BlindDown','BlindUp'],
    'appear': ['Appear','Fade']
  },
  toggle: function(element, effect) {
    element = $(element);
    effect = (effect || 'appear').toLowerCase();
    var options = Object.extend({
      queue: { position:'end', scope:(element.id || 'global'), limit: 1 }
    }, arguments[2] || { });
    Effect[element.visible() ?
      Effect.PAIRS[effect][1] : Effect.PAIRS[effect][0]](element, options);
  }
};

Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;

/* ------------- core effects ------------- */

Effect.ScopedQueue = Class.create(Enumerable, {
  initialize: function() {
    this.effects  = [];
    this.interval = null;
  },
  _each: function(iterator) {
    this.effects._each(iterator);
  },
  add: function(effect) {
    var timestamp = new Date().getTime();

    var position = Object.isString(effect.options.queue) ?
      effect.options.queue : effect.options.queue.position;

    switch(position) {
      case 'front':
        // move unstarted effects after this effect
        this.effects.findAll(function(e){ return e.state=='idle' }).each( function(e) {
            e.startOn  += effect.finishOn;
            e.finishOn += effect.finishOn;
          });
        break;
      case 'with-last':
        timestamp = this.effects.pluck('startOn').max() || timestamp;
        break;
      case 'end':
        // start effect after last queued effect has finished
        timestamp = this.effects.pluck('finishOn').max() || timestamp;
        break;
    }

    effect.startOn  += timestamp;
    effect.finishOn += timestamp;

    if (!effect.options.queue.limit || (this.effects.length < effect.options.queue.limit))
      this.effects.push(effect);

    if (!this.interval)
      this.interval = setInterval(this.loop.bind(this), 15);
  },
  remove: function(effect) {
    this.effects = this.effects.reject(function(e) { return e==effect });
    if (this.effects.length == 0) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  loop: function() {
    var timePos = new Date().getTime();
    for(var i=0, len=this.effects.length;i<len;i++)
      this.effects[i] && this.effects[i].loop(timePos);
  }
});

Effect.Queues = {
  instances: $H(),
  get: function(queueName) {
    if (!Object.isString(queueName)) return queueName;

    return this.instances.get(queueName) ||
      this.instances.set(queueName, new Effect.ScopedQueue());
  }
};
Effect.Queue = Effect.Queues.get('global');

Effect.Base = Class.create({
  position: null,
  start: function(options) {
    function codeForEvent(options,eventName){
      return (
        (options[eventName+'Internal'] ? 'this.options.'+eventName+'Internal(this);' : '') +
        (options[eventName] ? 'this.options.'+eventName+'(this);' : '')
      );
    }
    if (options && options.transition === false) options.transition = Effect.Transitions.linear;
    this.options      = Object.extend(Object.extend({ },Effect.DefaultOptions), options || { });
    this.currentFrame = 0;
    this.state        = 'idle';
    this.startOn      = this.options.delay*1000;
    this.finishOn     = this.startOn+(this.options.duration*1000);
    this.fromToDelta  = this.options.to-this.options.from;
    this.totalTime    = this.finishOn-this.startOn;
    this.totalFrames  = this.options.fps*this.options.duration;

    this.render = (function() {
      function dispatch(effect, eventName) {
        if (effect.options[eventName + 'Internal'])
          effect.options[eventName + 'Internal'](effect);
        if (effect.options[eventName])
          effect.options[eventName](effect);
      }

      return function(pos) {
        if (this.state === "idle") {
          this.state = "running";
          dispatch(this, 'beforeSetup');
          if (this.setup) this.setup();
          dispatch(this, 'afterSetup');
        }
        if (this.state === "running") {
          pos = (this.options.transition(pos) * this.fromToDelta) + this.options.from;
          this.position = pos;
          dispatch(this, 'beforeUpdate');
          if (this.update) this.update(pos);
          dispatch(this, 'afterUpdate');
        }
      };
    })();

    this.event('beforeStart');
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).add(this);
  },
  loop: function(timePos) {
    if (timePos >= this.startOn) {
      if (timePos >= this.finishOn) {
        this.render(1.0);
        this.cancel();
        this.event('beforeFinish');
        if (this.finish) this.finish();
        this.event('afterFinish');
        return;
      }
      var pos   = (timePos - this.startOn) / this.totalTime,
          frame = (pos * this.totalFrames).round();
      if (frame > this.currentFrame) {
        this.render(pos);
        this.currentFrame = frame;
      }
    }
  },
  cancel: function() {
    if (!this.options.sync)
      Effect.Queues.get(Object.isString(this.options.queue) ?
        'global' : this.options.queue.scope).remove(this);
    this.state = 'finished';
  },
  event: function(eventName) {
    if (this.options[eventName + 'Internal']) this.options[eventName + 'Internal'](this);
    if (this.options[eventName]) this.options[eventName](this);
  },
  inspect: function() {
    var data = $H();
    for(property in this)
      if (!Object.isFunction(this[property])) data.set(property, this[property]);
    return '#<Effect:' + data.inspect() + ',options:' + $H(this.options).inspect() + '>';
  }
});

Effect.Parallel = Class.create(Effect.Base, {
  initialize: function(effects) {
    this.effects = effects || [];
    this.start(arguments[1]);
  },
  update: function(position) {
    this.effects.invoke('render', position);
  },
  finish: function(position) {
    this.effects.each( function(effect) {
      effect.render(1.0);
      effect.cancel();
      effect.event('beforeFinish');
      if (effect.finish) effect.finish(position);
      effect.event('afterFinish');
    });
  }
});

Effect.Tween = Class.create(Effect.Base, {
  initialize: function(object, from, to) {
    object = Object.isString(object) ? $(object) : object;
    var args = $A(arguments), method = args.last(),
      options = args.length == 5 ? args[3] : null;
    this.method = Object.isFunction(method) ? method.bind(object) :
      Object.isFunction(object[method]) ? object[method].bind(object) :
      function(value) { object[method] = value };
    this.start(Object.extend({ from: from, to: to }, options || { }));
  },
  update: function(position) {
    this.method(position);
  }
});

Effect.Event = Class.create(Effect.Base, {
  initialize: function() {
    this.start(Object.extend({ duration: 0 }, arguments[0] || { }));
  },
  update: Prototype.emptyFunction
});

Effect.Opacity = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    // make this work on IE on elements without 'layout'
    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
      this.element.setStyle({zoom: 1});
    var options = Object.extend({
      from: this.element.getOpacity() || 0.0,
      to:   1.0
    }, arguments[1] || { });
    this.start(options);
  },
  update: function(position) {
    this.element.setOpacity(position);
  }
});

Effect.Move = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      x:    0,
      y:    0,
      mode: 'relative'
    }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    this.element.makePositioned();
    this.originalLeft = parseFloat(this.element.getStyle('left') || '0');
    this.originalTop  = parseFloat(this.element.getStyle('top')  || '0');
    if (this.options.mode == 'absolute') {
      this.options.x = this.options.x - this.originalLeft;
      this.options.y = this.options.y - this.originalTop;
    }
  },
  update: function(position) {
    this.element.setStyle({
      left: (this.options.x  * position + this.originalLeft).round() + 'px',
      top:  (this.options.y  * position + this.originalTop).round()  + 'px'
    });
  }
});

// for backwards compatibility
Effect.MoveBy = function(element, toTop, toLeft) {
  return new Effect.Move(element,
    Object.extend({ x: toLeft, y: toTop }, arguments[3] || { }));
};

Effect.Scale = Class.create(Effect.Base, {
  initialize: function(element, percent) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      scaleX: true,
      scaleY: true,
      scaleContent: true,
      scaleFromCenter: false,
      scaleMode: 'box',        // 'box' or 'contents' or { } with provided values
      scaleFrom: 100.0,
      scaleTo:   percent
    }, arguments[2] || { });
    this.start(options);
  },
  setup: function() {
    this.restoreAfterFinish = this.options.restoreAfterFinish || false;
    this.elementPositioning = this.element.getStyle('position');

    this.originalStyle = { };
    ['top','left','width','height','fontSize'].each( function(k) {
      this.originalStyle[k] = this.element.style[k];
    }.bind(this));

    this.originalTop  = this.element.offsetTop;
    this.originalLeft = this.element.offsetLeft;

    var fontSize = this.element.getStyle('font-size') || '100%';
    ['em','px','%','pt'].each( function(fontSizeType) {
      if (fontSize.indexOf(fontSizeType)>0) {
        this.fontSize     = parseFloat(fontSize);
        this.fontSizeType = fontSizeType;
      }
    }.bind(this));

    this.factor = (this.options.scaleTo - this.options.scaleFrom)/100;

    this.dims = null;
    if (this.options.scaleMode=='box')
      this.dims = [this.element.offsetHeight, this.element.offsetWidth];
    if (/^content/.test(this.options.scaleMode))
      this.dims = [this.element.scrollHeight, this.element.scrollWidth];
    if (!this.dims)
      this.dims = [this.options.scaleMode.originalHeight,
                   this.options.scaleMode.originalWidth];
  },
  update: function(position) {
    var currentScale = (this.options.scaleFrom/100.0) + (this.factor * position);
    if (this.options.scaleContent && this.fontSize)
      this.element.setStyle({fontSize: this.fontSize * currentScale + this.fontSizeType });
    this.setDimensions(this.dims[0] * currentScale, this.dims[1] * currentScale);
  },
  finish: function(position) {
    if (this.restoreAfterFinish) this.element.setStyle(this.originalStyle);
  },
  setDimensions: function(height, width) {
    var d = { };
    if (this.options.scaleX) d.width = width.round() + 'px';
    if (this.options.scaleY) d.height = height.round() + 'px';
    if (this.options.scaleFromCenter) {
      var topd  = (height - this.dims[0])/2;
      var leftd = (width  - this.dims[1])/2;
      if (this.elementPositioning == 'absolute') {
        if (this.options.scaleY) d.top = this.originalTop-topd + 'px';
        if (this.options.scaleX) d.left = this.originalLeft-leftd + 'px';
      } else {
        if (this.options.scaleY) d.top = -topd + 'px';
        if (this.options.scaleX) d.left = -leftd + 'px';
      }
    }
    this.element.setStyle(d);
  }
});

Effect.Highlight = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({ startcolor: '#ffff99' }, arguments[1] || { });
    this.start(options);
  },
  setup: function() {
    // Prevent executing on elements not in the layout flow
    if (this.element.getStyle('display')=='none') { this.cancel(); return; }
    // Disable background image during the effect
    this.oldStyle = { };
    if (!this.options.keepBackgroundImage) {
      this.oldStyle.backgroundImage = this.element.getStyle('background-image');
      this.element.setStyle({backgroundImage: 'none'});
    }
    if (!this.options.endcolor)
      this.options.endcolor = this.element.getStyle('background-color').parseColor('#ffffff');
    if (!this.options.restorecolor)
      this.options.restorecolor = this.element.getStyle('background-color');
    // init color calculations
    this._base  = $R(0,2).map(function(i){ return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16) }.bind(this));
    this._delta = $R(0,2).map(function(i){ return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i] }.bind(this));
  },
  update: function(position) {
    this.element.setStyle({backgroundColor: $R(0,2).inject('#',function(m,v,i){
      return m+((this._base[i]+(this._delta[i]*position)).round().toColorPart()); }.bind(this)) });
  },
  finish: function() {
    this.element.setStyle(Object.extend(this.oldStyle, {
      backgroundColor: this.options.restorecolor
    }));
  }
});

Effect.ScrollTo = function(element) {
  var options = arguments[1] || { },
  scrollOffsets = document.viewport.getScrollOffsets(),
  elementOffsets = $(element).cumulativeOffset();

  if (options.offset) elementOffsets[1] += options.offset;

  return new Effect.Tween(null,
    scrollOffsets.top,
    elementOffsets[1],
    options,
    function(p){ scrollTo(scrollOffsets.left, p.round()); }
  );
};

/* ------------- combination effects ------------- */

Effect.Fade = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  var options = Object.extend({
    from: element.getOpacity() || 1.0,
    to:   0.0,
    afterFinishInternal: function(effect) {
      if (effect.options.to!=0) return;
      effect.element.hide().setStyle({opacity: oldOpacity});
    }
  }, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Appear = function(element) {
  element = $(element);
  var options = Object.extend({
  from: (element.getStyle('display') == 'none' ? 0.0 : element.getOpacity() || 0.0),
  to:   1.0,
  // force Safari to render floated elements properly
  afterFinishInternal: function(effect) {
    effect.element.forceRerendering();
  },
  beforeSetup: function(effect) {
    effect.element.setOpacity(effect.options.from).show();
  }}, arguments[1] || { });
  return new Effect.Opacity(element,options);
};

Effect.Puff = function(element) {
  element = $(element);
  var oldStyle = {
    opacity: element.getInlineOpacity(),
    position: element.getStyle('position'),
    top:  element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height
  };
  return new Effect.Parallel(
   [ new Effect.Scale(element, 200,
      { sync: true, scaleFromCenter: true, scaleContent: true, restoreAfterFinish: true }),
     new Effect.Opacity(element, { sync: true, to: 0.0 } ) ],
     Object.extend({ duration: 1.0,
      beforeSetupInternal: function(effect) {
        Position.absolutize(effect.effects[0].element);
      },
      afterFinishInternal: function(effect) {
         effect.effects[0].element.hide().setStyle(oldStyle); }
     }, arguments[1] || { })
   );
};

Effect.BlindUp = function(element) {
  element = $(element);
  element.makeClipping();
  return new Effect.Scale(element, 0,
    Object.extend({ scaleContent: false,
      scaleX: false,
      restoreAfterFinish: true,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping();
      }
    }, arguments[1] || { })
  );
};

Effect.BlindDown = function(element) {
  element = $(element);
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: 0,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping();
    }
  }, arguments[1] || { }));
};

Effect.SwitchOff = function(element) {
  element = $(element);
  var oldOpacity = element.getInlineOpacity();
  return new Effect.Appear(element, Object.extend({
    duration: 0.4,
    from: 0,
    transition: Effect.Transitions.flicker,
    afterFinishInternal: function(effect) {
      new Effect.Scale(effect.element, 1, {
        duration: 0.3, scaleFromCenter: true,
        scaleX: false, scaleContent: false, restoreAfterFinish: true,
        beforeSetup: function(effect) {
          effect.element.makePositioned().makeClipping();
        },
        afterFinishInternal: function(effect) {
          effect.element.hide().undoClipping().undoPositioned().setStyle({opacity: oldOpacity});
        }
      });
    }
  }, arguments[1] || { }));
};

Effect.DropOut = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left'),
    opacity: element.getInlineOpacity() };
  return new Effect.Parallel(
    [ new Effect.Move(element, {x: 0, y: 100, sync: true }),
      new Effect.Opacity(element, { sync: true, to: 0.0 }) ],
    Object.extend(
      { duration: 0.5,
        beforeSetup: function(effect) {
          effect.effects[0].element.makePositioned();
        },
        afterFinishInternal: function(effect) {
          effect.effects[0].element.hide().undoPositioned().setStyle(oldStyle);
        }
      }, arguments[1] || { }));
};

Effect.Shake = function(element) {
  element = $(element);
  var options = Object.extend({
    distance: 20,
    duration: 0.5
  }, arguments[1] || {});
  var distance = parseFloat(options.distance);
  var split = parseFloat(options.duration) / 10.0;
  var oldStyle = {
    top: element.getStyle('top'),
    left: element.getStyle('left') };
    return new Effect.Move(element,
      { x:  distance, y: 0, duration: split, afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x:  distance*2, y: 0, duration: split*2,  afterFinishInternal: function(effect) {
    new Effect.Move(effect.element,
      { x: -distance, y: 0, duration: split, afterFinishInternal: function(effect) {
        effect.element.undoPositioned().setStyle(oldStyle);
  }}); }}); }}); }}); }}); }});
};

Effect.SlideDown = function(element) {
  element = $(element).cleanWhitespace();
  // SlideDown need to have the content of the element wrapped in a container element with fixed height!
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, 100, Object.extend({
    scaleContent: false,
    scaleX: false,
    scaleFrom: window.opera ? 0 : 1,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().setStyle({height: '0px'}).show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom}); }
    }, arguments[1] || { })
  );
};

Effect.SlideUp = function(element) {
  element = $(element).cleanWhitespace();
  var oldInnerBottom = element.down().getStyle('bottom');
  var elementDimensions = element.getDimensions();
  return new Effect.Scale(element, window.opera ? 0 : 1,
   Object.extend({ scaleContent: false,
    scaleX: false,
    scaleMode: 'box',
    scaleFrom: 100,
    scaleMode: {originalHeight: elementDimensions.height, originalWidth: elementDimensions.width},
    restoreAfterFinish: true,
    afterSetup: function(effect) {
      effect.element.makePositioned();
      effect.element.down().makePositioned();
      if (window.opera) effect.element.setStyle({top: ''});
      effect.element.makeClipping().show();
    },
    afterUpdateInternal: function(effect) {
      effect.element.down().setStyle({bottom:
        (effect.dims[0] - effect.element.clientHeight) + 'px' });
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping().undoPositioned();
      effect.element.down().undoPositioned().setStyle({bottom: oldInnerBottom});
    }
   }, arguments[1] || { })
  );
};

// Bug in opera makes the TD containing this element expand for a instance after finish
Effect.Squish = function(element) {
  return new Effect.Scale(element, window.opera ? 1 : 0, {
    restoreAfterFinish: true,
    beforeSetup: function(effect) {
      effect.element.makeClipping();
    },
    afterFinishInternal: function(effect) {
      effect.element.hide().undoClipping();
    }
  });
};

Effect.Grow = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.full
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var initialMoveX, initialMoveY;
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      initialMoveX = initialMoveY = moveX = moveY = 0;
      break;
    case 'top-right':
      initialMoveX = dims.width;
      initialMoveY = moveY = 0;
      moveX = -dims.width;
      break;
    case 'bottom-left':
      initialMoveX = moveX = 0;
      initialMoveY = dims.height;
      moveY = -dims.height;
      break;
    case 'bottom-right':
      initialMoveX = dims.width;
      initialMoveY = dims.height;
      moveX = -dims.width;
      moveY = -dims.height;
      break;
    case 'center':
      initialMoveX = dims.width / 2;
      initialMoveY = dims.height / 2;
      moveX = -dims.width / 2;
      moveY = -dims.height / 2;
      break;
  }

  return new Effect.Move(element, {
    x: initialMoveX,
    y: initialMoveY,
    duration: 0.01,
    beforeSetup: function(effect) {
      effect.element.hide().makeClipping().makePositioned();
    },
    afterFinishInternal: function(effect) {
      new Effect.Parallel(
        [ new Effect.Opacity(effect.element, { sync: true, to: 1.0, from: 0.0, transition: options.opacityTransition }),
          new Effect.Move(effect.element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition }),
          new Effect.Scale(effect.element, 100, {
            scaleMode: { originalHeight: dims.height, originalWidth: dims.width },
            sync: true, scaleFrom: window.opera ? 1 : 0, transition: options.scaleTransition, restoreAfterFinish: true})
        ], Object.extend({
             beforeSetup: function(effect) {
               effect.effects[0].element.setStyle({height: '0px'}).show();
             },
             afterFinishInternal: function(effect) {
               effect.effects[0].element.undoClipping().undoPositioned().setStyle(oldStyle);
             }
           }, options)
      );
    }
  });
};

Effect.Shrink = function(element) {
  element = $(element);
  var options = Object.extend({
    direction: 'center',
    moveTransition: Effect.Transitions.sinoidal,
    scaleTransition: Effect.Transitions.sinoidal,
    opacityTransition: Effect.Transitions.none
  }, arguments[1] || { });
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    height: element.style.height,
    width: element.style.width,
    opacity: element.getInlineOpacity() };

  var dims = element.getDimensions();
  var moveX, moveY;

  switch (options.direction) {
    case 'top-left':
      moveX = moveY = 0;
      break;
    case 'top-right':
      moveX = dims.width;
      moveY = 0;
      break;
    case 'bottom-left':
      moveX = 0;
      moveY = dims.height;
      break;
    case 'bottom-right':
      moveX = dims.width;
      moveY = dims.height;
      break;
    case 'center':
      moveX = dims.width / 2;
      moveY = dims.height / 2;
      break;
  }

  return new Effect.Parallel(
    [ new Effect.Opacity(element, { sync: true, to: 0.0, from: 1.0, transition: options.opacityTransition }),
      new Effect.Scale(element, window.opera ? 1 : 0, { sync: true, transition: options.scaleTransition, restoreAfterFinish: true}),
      new Effect.Move(element, { x: moveX, y: moveY, sync: true, transition: options.moveTransition })
    ], Object.extend({
         beforeStartInternal: function(effect) {
           effect.effects[0].element.makePositioned().makeClipping();
         },
         afterFinishInternal: function(effect) {
           effect.effects[0].element.hide().undoClipping().undoPositioned().setStyle(oldStyle); }
       }, options)
  );
};

Effect.Pulsate = function(element) {
  element = $(element);
  var options    = arguments[1] || { },
    oldOpacity = element.getInlineOpacity(),
    transition = options.transition || Effect.Transitions.linear,
    reverser   = function(pos){
      return 1 - transition((-Math.cos((pos*(options.pulses||5)*2)*Math.PI)/2) + .5);
    };

  return new Effect.Opacity(element,
    Object.extend(Object.extend({  duration: 2.0, from: 0,
      afterFinishInternal: function(effect) { effect.element.setStyle({opacity: oldOpacity}); }
    }, options), {transition: reverser}));
};

Effect.Fold = function(element) {
  element = $(element);
  var oldStyle = {
    top: element.style.top,
    left: element.style.left,
    width: element.style.width,
    height: element.style.height };
  element.makeClipping();
  return new Effect.Scale(element, 5, Object.extend({
    scaleContent: false,
    scaleX: false,
    afterFinishInternal: function(effect) {
    new Effect.Scale(element, 1, {
      scaleContent: false,
      scaleY: false,
      afterFinishInternal: function(effect) {
        effect.element.hide().undoClipping().setStyle(oldStyle);
      } });
  }}, arguments[1] || { }));
};

Effect.Morph = Class.create(Effect.Base, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element) throw(Effect._elementDoesNotExistError);
    var options = Object.extend({
      style: { }
    }, arguments[1] || { });

    if (!Object.isString(options.style)) this.style = $H(options.style);
    else {
      if (options.style.include(':'))
        this.style = options.style.parseStyle();
      else {
        this.element.addClassName(options.style);
        this.style = $H(this.element.getStyles());
        this.element.removeClassName(options.style);
        var css = this.element.getStyles();
        this.style = this.style.reject(function(style) {
          return style.value == css[style.key];
        });
        options.afterFinishInternal = function(effect) {
          effect.element.addClassName(effect.options.style);
          effect.transforms.each(function(transform) {
            effect.element.style[transform.style] = '';
          });
        };
      }
    }
    this.start(options);
  },

  setup: function(){
    function parseColor(color){
      if (!color || ['rgba(0, 0, 0, 0)','transparent'].include(color)) color = '#ffffff';
      color = color.parseColor();
      return $R(0,2).map(function(i){
        return parseInt( color.slice(i*2+1,i*2+3), 16 );
      });
    }
    this.transforms = this.style.map(function(pair){
      var property = pair[0], value = pair[1], unit = null;

      if (value.parseColor('#zzzzzz') != '#zzzzzz') {
        value = value.parseColor();
        unit  = 'color';
      } else if (property == 'opacity') {
        value = parseFloat(value);
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout))
          this.element.setStyle({zoom: 1});
      } else if (Element.CSS_LENGTH.test(value)) {
          var components = value.match(/^([\+\-]?[0-9\.]+)(.*)$/);
          value = parseFloat(components[1]);
          unit = (components.length == 3) ? components[2] : null;
      }

      var originalValue = this.element.getStyle(property);
      return {
        style: property.camelize(),
        originalValue: unit=='color' ? parseColor(originalValue) : parseFloat(originalValue || 0),
        targetValue: unit=='color' ? parseColor(value) : value,
        unit: unit
      };
    }.bind(this)).reject(function(transform){
      return (
        (transform.originalValue == transform.targetValue) ||
        (
          transform.unit != 'color' &&
          (isNaN(transform.originalValue) || isNaN(transform.targetValue))
        )
      );
    });
  },
  update: function(position) {
    var style = { }, transform, i = this.transforms.length;
    while(i--)
      style[(transform = this.transforms[i]).style] =
        transform.unit=='color' ? '#'+
          (Math.round(transform.originalValue[0]+
            (transform.targetValue[0]-transform.originalValue[0])*position)).toColorPart() +
          (Math.round(transform.originalValue[1]+
            (transform.targetValue[1]-transform.originalValue[1])*position)).toColorPart() +
          (Math.round(transform.originalValue[2]+
            (transform.targetValue[2]-transform.originalValue[2])*position)).toColorPart() :
        (transform.originalValue +
          (transform.targetValue - transform.originalValue) * position).toFixed(3) +
            (transform.unit === null ? '' : transform.unit);
    this.element.setStyle(style, true);
  }
});

Effect.Transform = Class.create({
  initialize: function(tracks){
    this.tracks  = [];
    this.options = arguments[1] || { };
    this.addTracks(tracks);
  },
  addTracks: function(tracks){
    tracks.each(function(track){
      track = $H(track);
      var data = track.values().first();
      this.tracks.push($H({
        ids:     track.keys().first(),
        effect:  Effect.Morph,
        options: { style: data }
      }));
    }.bind(this));
    return this;
  },
  play: function(){
    return new Effect.Parallel(
      this.tracks.map(function(track){
        var ids = track.get('ids'), effect = track.get('effect'), options = track.get('options');
        var elements = [$(ids) || $$(ids)].flatten();
        return elements.map(function(e){ return new effect(e, Object.extend({ sync:true }, options)) });
      }).flatten(),
      this.options
    );
  }
});

Element.CSS_PROPERTIES = $w(
  'backgroundColor backgroundPosition borderBottomColor borderBottomStyle ' +
  'borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth ' +
  'borderRightColor borderRightStyle borderRightWidth borderSpacing ' +
  'borderTopColor borderTopStyle borderTopWidth bottom clip color ' +
  'fontSize fontWeight height left letterSpacing lineHeight ' +
  'marginBottom marginLeft marginRight marginTop markerOffset maxHeight '+
  'maxWidth minHeight minWidth opacity outlineColor outlineOffset ' +
  'outlineWidth paddingBottom paddingLeft paddingRight paddingTop ' +
  'right textIndent top width wordSpacing zIndex');

Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;

String.__parseStyleElement = document.createElement('div');
String.prototype.parseStyle = function(){
  var style, styleRules = $H();
  if (Prototype.Browser.WebKit)
    style = new Element('div',{style:this}).style;
  else {
    String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
    style = String.__parseStyleElement.childNodes[0].style;
  }

  Element.CSS_PROPERTIES.each(function(property){
    if (style[property]) styleRules.set(property, style[property]);
  });

  if (Prototype.Browser.IE && this.include('opacity'))
    styleRules.set('opacity', this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1]);

  return styleRules;
};

if (document.defaultView && document.defaultView.getComputedStyle) {
  Element.getStyles = function(element) {
    var css = document.defaultView.getComputedStyle($(element), null);
    return Element.CSS_PROPERTIES.inject({ }, function(styles, property) {
      styles[property] = css[property];
      return styles;
    });
  };
} else {
  Element.getStyles = function(element) {
    element = $(element);
    var css = element.currentStyle, styles;
    styles = Element.CSS_PROPERTIES.inject({ }, function(results, property) {
      results[property] = css[property];
      return results;
    });
    if (!styles.opacity) styles.opacity = element.getOpacity();
    return styles;
  };
}

Effect.Methods = {
  morph: function(element, style) {
    element = $(element);
    new Effect.Morph(element, Object.extend({ style: style }, arguments[2] || { }));
    return element;
  },
  visualEffect: function(element, effect, options) {
    element = $(element);
    var s = effect.dasherize().camelize(), klass = s.charAt(0).toUpperCase() + s.substring(1);
    new Effect[klass](element, options);
    return element;
  },
  highlight: function(element, options) {
    element = $(element);
    new Effect.Highlight(element, options);
    return element;
  }
};

$w('fade appear grow shrink fold blindUp blindDown slideUp slideDown '+
  'pulsate shake puff squish switchOff dropOut').each(
  function(effect) {
    Effect.Methods[effect] = function(element, options){
      element = $(element);
      Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
      return element;
    };
  }
);

$w('getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles').each(
  function(f) { Effect.Methods[f] = Element[f]; }
);

Element.addMethods(Effect.Methods);
// script.aculo.us controls.js v1.8.2, Tue Nov 18 18:30:58 +0100 2008

// Copyright (c) 2005-2008 Thomas Fuchs (http://script.aculo.us, http://mir.aculo.us)
//           (c) 2005-2008 Ivan Krstic (http://blogs.law.harvard.edu/ivan)
//           (c) 2005-2008 Jon Tirsen (http://www.tirsen.com)
// Contributors:
//  Richard Livsey
//  Rahul Bhargava
//  Rob Wills
//
// script.aculo.us is freely distributable under the terms of an MIT-style license.
// For details, see the script.aculo.us web site: http://script.aculo.us/

// Autocompleter.Base handles all the autocompletion functionality
// that's independent of the data source for autocompletion. This
// includes drawing the autocompletion menu, observing keyboard
// and mouse events, and similar.
//
// Specific autocompleters need to provide, at the very least,
// a getUpdatedChoices function that will be invoked every time
// the text inside the monitored textbox changes. This method
// should get the text for which to provide autocompletion by
// invoking this.getToken(), NOT by directly accessing
// this.element.value. This is to allow incremental tokenized
// autocompletion. Specific auto-completion logic (AJAX, etc)
// belongs in getUpdatedChoices.
//
// Tokenized incremental autocompletion is enabled automatically
// when an autocompleter is instantiated with the 'tokens' option
// in the options parameter, e.g.:
// new Ajax.Autocompleter('id','upd', '/url/', { tokens: ',' });
// will incrementally autocomplete with a comma as the token.
// Additionally, ',' in the above example can be replaced with
// a token array, e.g. { tokens: [',', '\n'] } which
// enables autocompletion on multiple tokens. This is most
// useful when one of the tokens is \n (a newline), as it
// allows smart autocompletion after linebreaks.

if(typeof Effect == 'undefined')
  throw("controls.js requires including script.aculo.us' effects.js library");

var Autocompleter = { };
Autocompleter.Base = Class.create({
  baseInitialize: function(element, update, options) {
    element          = $(element);
    this.element     = element;
    this.update      = $(update);
    this.hasFocus    = false;
    this.changed     = false;
    this.active      = false;
    this.index       = 0;
    this.entryCount  = 0;
    this.oldElementValue = this.element.value;

    if(this.setOptions)
      this.setOptions(options);
    else
      this.options = options || { };

    this.options.paramName    = this.options.paramName || this.element.name;
    this.options.tokens       = this.options.tokens || [];
    this.options.frequency    = this.options.frequency || 0.4;
    this.options.minChars     = this.options.minChars || 1;
    this.options.onShow       = this.options.onShow ||
      function(element, update){
        if(!update.style.position || update.style.position=='absolute') {
          update.style.position = 'absolute';
          Position.clone(element, update, {
            setHeight: false,
            offsetTop: element.offsetHeight
          });
        }
        Effect.Appear(update,{duration:0.15});
      };
    this.options.onHide = this.options.onHide ||
      function(element, update){ new Effect.Fade(update,{duration:0.15}) };

    if(typeof(this.options.tokens) == 'string')
      this.options.tokens = new Array(this.options.tokens);
    // Force carriage returns as token delimiters anyway
    if (!this.options.tokens.include('\n'))
      this.options.tokens.push('\n');

    this.observer = null;

    this.element.setAttribute('autocomplete','off');

    Element.hide(this.update);

    Event.observe(this.element, 'blur', this.onBlur.bindAsEventListener(this));
    Event.observe(this.element, 'keydown', this.onKeyPress.bindAsEventListener(this));
  },

  show: function() {
    if(Element.getStyle(this.update, 'display')=='none') this.options.onShow(this.element, this.update);
    if(!this.iefix &&
      (Prototype.Browser.IE) &&
      (Element.getStyle(this.update, 'position')=='absolute')) {
      new Insertion.After(this.update,
       '<iframe id="' + this.update.id + '_iefix" '+
       'style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" ' +
       'src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
      this.iefix = $(this.update.id+'_iefix');
    }
    if(this.iefix) setTimeout(this.fixIEOverlapping.bind(this), 50);
  },

  fixIEOverlapping: function() {
    Position.clone(this.update, this.iefix, {setTop:(!this.update.style.height)});
    this.iefix.style.zIndex = 1;
    this.update.style.zIndex = 2;
    Element.show(this.iefix);
  },

  hide: function() {
    this.stopIndicator();
    if(Element.getStyle(this.update, 'display')!='none') this.options.onHide(this.element, this.update);
    if(this.iefix) Element.hide(this.iefix);
  },

  startIndicator: function() {
    if(this.options.indicator) Element.show(this.options.indicator);
  },

  stopIndicator: function() {
    if(this.options.indicator) Element.hide(this.options.indicator);
  },

  onKeyPress: function(event) {
    if(this.active)
      switch(event.keyCode) {
       case Event.KEY_TAB:
       case Event.KEY_RETURN:
         this.selectEntry();
         Event.stop(event);
       case Event.KEY_ESC:
         this.hide();
         this.active = false;
         Event.stop(event);
         return;
       case Event.KEY_LEFT:
       case Event.KEY_RIGHT:
         return;
       case Event.KEY_UP:
         this.markPrevious();
         this.render();
         Event.stop(event);
         return;
       case Event.KEY_DOWN:
         this.markNext();
         this.render();
         Event.stop(event);
         return;
      }
     else
       if(event.keyCode==Event.KEY_TAB || event.keyCode==Event.KEY_RETURN ||
         (Prototype.Browser.WebKit > 0 && event.keyCode == 0)) return;

    this.changed = true;
    this.hasFocus = true;

    if(this.observer) clearTimeout(this.observer);
      this.observer =
        setTimeout(this.onObserverEvent.bind(this), this.options.frequency*1000);
  },

  activate: function() {
    this.changed = false;
    this.hasFocus = true;
    this.getUpdatedChoices();
  },

  onHover: function(event) {
    var element = Event.findElement(event, 'LI');
    if(this.index != element.autocompleteIndex)
    {
        this.index = element.autocompleteIndex;
        this.render();
    }
    Event.stop(event);
  },

  onClick: function(event) {
    var element = Event.findElement(event, 'LI');
    this.index = element.autocompleteIndex;
    this.selectEntry();
    this.hide();
  },

  onBlur: function(event) {
    // needed to make click events working
    setTimeout(this.hide.bind(this), 250);
    this.hasFocus = false;
    this.active = false;
  },

  render: function() {
    if(this.entryCount > 0) {
      for (var i = 0; i < this.entryCount; i++)
        this.index==i ?
          Element.addClassName(this.getEntry(i),"selected") :
          Element.removeClassName(this.getEntry(i),"selected");
      if(this.hasFocus) {
        this.show();
        this.active = true;
      }
    } else {
      this.active = false;
      this.hide();
    }
  },

  markPrevious: function() {
    if(this.index > 0) this.index--;
      else this.index = this.entryCount-1;
    //this.getEntry(this.index).scrollIntoView(true); useless
  },

  markNext: function() {
    if(this.index < this.entryCount-1) this.index++;
      else this.index = 0;
    this.getEntry(this.index).scrollIntoView(false);
  },

  getEntry: function(index) {
    return this.update.firstChild.childNodes[index];
  },

  getCurrentEntry: function() {
    return this.getEntry(this.index);
  },

  selectEntry: function() {
    this.active = false;
    this.updateElement(this.getCurrentEntry());
  },

  updateElement: function(selectedElement) {
    if (this.options.updateElement) {
      this.options.updateElement(selectedElement);
      return;
    }
    var value = '';
    if (this.options.select) {
      var nodes = $(selectedElement).select('.' + this.options.select) || [];
      if(nodes.length>0) value = Element.collectTextNodes(nodes[0], this.options.select);
    } else
      value = Element.collectTextNodesIgnoreClass(selectedElement, 'informal');

    var bounds = this.getTokenBounds();
    if (bounds[0] != -1) {
      var newValue = this.element.value.substr(0, bounds[0]);
      var whitespace = this.element.value.substr(bounds[0]).match(/^\s+/);
      if (whitespace)
        newValue += whitespace[0];
      this.element.value = newValue + value + this.element.value.substr(bounds[1]);
    } else {
      this.element.value = value;
    }
    this.oldElementValue = this.element.value;
    this.element.focus();

    if (this.options.afterUpdateElement)
      this.options.afterUpdateElement(this.element, selectedElement);
  },

  updateChoices: function(choices) {
    if(!this.changed && this.hasFocus) {
      this.update.innerHTML = choices;
      Element.cleanWhitespace(this.update);
      Element.cleanWhitespace(this.update.down());

      if(this.update.firstChild && this.update.down().childNodes) {
        this.entryCount =
          this.update.down().childNodes.length;
        for (var i = 0; i < this.entryCount; i++) {
          var entry = this.getEntry(i);
          entry.autocompleteIndex = i;
          this.addObservers(entry);
        }
      } else {
        this.entryCount = 0;
      }

      this.stopIndicator();
      this.index = 0;

      if(this.entryCount==1 && this.options.autoSelect) {
        this.selectEntry();
        this.hide();
      } else {
        this.render();
      }
    }
  },

  addObservers: function(element) {
    Event.observe(element, "mouseover", this.onHover.bindAsEventListener(this));
    Event.observe(element, "click", this.onClick.bindAsEventListener(this));
  },

  onObserverEvent: function() {
    this.changed = false;
    this.tokenBounds = null;
    if(this.getToken().length>=this.options.minChars) {
      this.getUpdatedChoices();
    } else {
      this.active = false;
      this.hide();
    }
    this.oldElementValue = this.element.value;
  },

  getToken: function() {
    var bounds = this.getTokenBounds();
    return this.element.value.substring(bounds[0], bounds[1]).strip();
  },

  getTokenBounds: function() {
    if (null != this.tokenBounds) return this.tokenBounds;
    var value = this.element.value;
    if (value.strip().empty()) return [-1, 0];
    var diff = arguments.callee.getFirstDifferencePos(value, this.oldElementValue);
    var offset = (diff == this.oldElementValue.length ? 1 : 0);
    var prevTokenPos = -1, nextTokenPos = value.length;
    var tp;
    for (var index = 0, l = this.options.tokens.length; index < l; ++index) {
      tp = value.lastIndexOf(this.options.tokens[index], diff + offset - 1);
      if (tp > prevTokenPos) prevTokenPos = tp;
      tp = value.indexOf(this.options.tokens[index], diff + offset);
      if (-1 != tp && tp < nextTokenPos) nextTokenPos = tp;
    }
    return (this.tokenBounds = [prevTokenPos + 1, nextTokenPos]);
  }
});

Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(newS, oldS) {
  var boundary = Math.min(newS.length, oldS.length);
  for (var index = 0; index < boundary; ++index)
    if (newS[index] != oldS[index])
      return index;
  return boundary;
};

Ajax.Autocompleter = Class.create(Autocompleter.Base, {
  initialize: function(element, update, url, options) {
    this.baseInitialize(element, update, options);
    this.options.asynchronous  = true;
    this.options.onComplete    = this.onComplete.bind(this);
    this.options.defaultParams = this.options.parameters || null;
    this.url                   = url;
  },

  getUpdatedChoices: function() {
    this.startIndicator();

    var entry = encodeURIComponent(this.options.paramName) + '=' +
      encodeURIComponent(this.getToken());

    this.options.parameters = this.options.callback ?
      this.options.callback(this.element, entry) : entry;

    if(this.options.defaultParams)
      this.options.parameters += '&' + this.options.defaultParams;

    new Ajax.Request(this.url, this.options);
  },

  onComplete: function(request) {
    this.updateChoices(request.responseText);
  }
});

// The local array autocompleter. Used when you'd prefer to
// inject an array of autocompletion options into the page, rather
// than sending out Ajax queries, which can be quite slow sometimes.
//
// The constructor takes four parameters. The first two are, as usual,
// the id of the monitored textbox, and id of the autocompletion menu.
// The third is the array you want to autocomplete from, and the fourth
// is the options block.
//
// Extra local autocompletion options:
// - choices - How many autocompletion choices to offer
//
// - partialSearch - If false, the autocompleter will match entered
//                    text only at the beginning of strings in the
//                    autocomplete array. Defaults to true, which will
//                    match text at the beginning of any *word* in the
//                    strings in the autocomplete array. If you want to
//                    search anywhere in the string, additionally set
//                    the option fullSearch to true (default: off).
//
// - fullSsearch - Search anywhere in autocomplete array strings.
//
// - partialChars - How many characters to enter before triggering
//                   a partial match (unlike minChars, which defines
//                   how many characters are required to do any match
//                   at all). Defaults to 2.
//
// - ignoreCase - Whether to ignore case when autocompleting.
//                 Defaults to true.
//
// It's possible to pass in a custom function as the 'selector'
// option, if you prefer to write your own autocompletion logic.
// In that case, the other options above will not apply unless
// you support them.

Autocompleter.Local = Class.create(Autocompleter.Base, {
  initialize: function(element, update, array, options) {
    this.baseInitialize(element, update, options);
    this.options.array = array;
  },

  getUpdatedChoices: function() {
    this.updateChoices(this.options.selector(this));
  },

  setOptions: function(options) {
    this.options = Object.extend({
      choices: 10,
      partialSearch: true,
      partialChars: 2,
      ignoreCase: true,
      fullSearch: false,
      selector: function(instance) {
        var ret       = []; // Beginning matches
        var partial   = []; // Inside matches
        var entry     = instance.getToken();
        var count     = 0;

        for (var i = 0; i < instance.options.array.length &&
          ret.length < instance.options.choices ; i++) {

          var elem = instance.options.array[i];
          var foundPos = instance.options.ignoreCase ?
            elem.toLowerCase().indexOf(entry.toLowerCase()) :
            elem.indexOf(entry);

          while (foundPos != -1) {
            if (foundPos == 0 && elem.length != entry.length) {
              ret.push("<li><strong>" + elem.substr(0, entry.length) + "</strong>" +
                elem.substr(entry.length) + "</li>");
              break;
            } else if (entry.length >= instance.options.partialChars &&
              instance.options.partialSearch && foundPos != -1) {
              if (instance.options.fullSearch || /\s/.test(elem.substr(foundPos-1,1))) {
                partial.push("<li>" + elem.substr(0, foundPos) + "<strong>" +
                  elem.substr(foundPos, entry.length) + "</strong>" + elem.substr(
                  foundPos + entry.length) + "</li>");
                break;
              }
            }

            foundPos = instance.options.ignoreCase ?
              elem.toLowerCase().indexOf(entry.toLowerCase(), foundPos + 1) :
              elem.indexOf(entry, foundPos + 1);

          }
        }
        if (partial.length)
          ret = ret.concat(partial.slice(0, instance.options.choices - ret.length));
        return "<ul>" + ret.join('') + "</ul>";
      }
    }, options || { });
  }
});

// AJAX in-place editor and collection editor
// Full rewrite by Christophe Porteneuve <tdd@tddsworld.com> (April 2007).

// Use this if you notice weird scrolling problems on some browsers,
// the DOM might be a bit confused when this gets called so do this
// waits 1 ms (with setTimeout) until it does the activation
Field.scrollFreeActivate = function(field) {
  setTimeout(function() {
    Field.activate(field);
  }, 1);
};

Ajax.InPlaceEditor = Class.create({
  initialize: function(element, url, options) {
    this.url = url;
    this.element = element = $(element);
    this.prepareOptions();
    this._controls = { };
    arguments.callee.dealWithDeprecatedOptions(options); // DEPRECATION LAYER!!!
    Object.extend(this.options, options || { });
    if (!this.options.formId && this.element.id) {
      this.options.formId = this.element.id + '-inplaceeditor';
      if ($(this.options.formId))
        this.options.formId = '';
    }
    if (this.options.externalControl)
      this.options.externalControl = $(this.options.externalControl);
    if (!this.options.externalControl)
      this.options.externalControlOnly = false;
    this._originalBackground = this.element.getStyle('background-color') || 'transparent';
    this.element.title = this.options.clickToEditText;
    this._boundCancelHandler = this.handleFormCancellation.bind(this);
    this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
    this._boundFailureHandler = this.handleAJAXFailure.bind(this);
    this._boundSubmitHandler = this.handleFormSubmission.bind(this);
    this._boundWrapperHandler = this.wrapUp.bind(this);
    this.registerListeners();
  },
  checkForEscapeOrReturn: function(e) {
    if (!this._editing || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (Event.KEY_ESC == e.keyCode)
      this.handleFormCancellation(e);
    else if (Event.KEY_RETURN == e.keyCode)
      this.handleFormSubmission(e);
  },
  createControl: function(mode, handler, extraClasses) {
    var control = this.options[mode + 'Control'];
    var text = this.options[mode + 'Text'];
    if ('button' == control) {
      var btn = document.createElement('input');
      btn.type = 'submit';
      btn.value = text;
      btn.className = 'editor_' + mode + '_button';
      if ('cancel' == mode)
        btn.onclick = this._boundCancelHandler;
      this._form.appendChild(btn);
      this._controls[mode] = btn;
    } else if ('link' == control) {
      var link = document.createElement('a');
      link.href = '#';
      link.appendChild(document.createTextNode(text));
      link.onclick = 'cancel' == mode ? this._boundCancelHandler : this._boundSubmitHandler;
      link.className = 'editor_' + mode + '_link';
      if (extraClasses)
        link.className += ' ' + extraClasses;
      this._form.appendChild(link);
      this._controls[mode] = link;
    }
  },
  createEditField: function() {
    var text = (this.options.loadTextURL ? this.options.loadingText : this.getText());
    var fld;
    if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
      fld = document.createElement('input');
      fld.type = 'text';
      var size = this.options.size || this.options.cols || 0;
      if (0 < size) fld.size = size;
    } else {
      fld = document.createElement('textarea');
      fld.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
      fld.cols = this.options.cols || 40;
    }
    fld.name = this.options.paramName;
    fld.value = text; // No HTML breaks conversion anymore
    fld.className = 'editor_field';
    if (this.options.submitOnBlur)
      fld.onblur = this._boundSubmitHandler;
    this._controls.editor = fld;
    if (this.options.loadTextURL)
      this.loadExternalText();
    this._form.appendChild(this._controls.editor);
  },
  createForm: function() {
    var ipe = this;
    function addText(mode, condition) {
      var text = ipe.options['text' + mode + 'Controls'];
      if (!text || condition === false) return;
      ipe._form.appendChild(document.createTextNode(text));
    };
    this._form = $(document.createElement('form'));
    this._form.id = this.options.formId;
    this._form.addClassName(this.options.formClassName);
    this._form.onsubmit = this._boundSubmitHandler;
    this.createEditField();
    if ('textarea' == this._controls.editor.tagName.toLowerCase())
      this._form.appendChild(document.createElement('br'));
    if (this.options.onFormCustomization)
      this.options.onFormCustomization(this, this._form);
    addText('Before', this.options.okControl || this.options.cancelControl);
    this.createControl('ok', this._boundSubmitHandler);
    addText('Between', this.options.okControl && this.options.cancelControl);
    this.createControl('cancel', this._boundCancelHandler, 'editor_cancel');
    addText('After', this.options.okControl || this.options.cancelControl);
  },
  destroy: function() {
    if (this._oldInnerHTML)
      this.element.innerHTML = this._oldInnerHTML;
    this.leaveEditMode();
    this.unregisterListeners();
  },
  enterEditMode: function(e) {
    if (this._saving || this._editing) return;
    this._editing = true;
    this.triggerCallback('onEnterEditMode');
    if (this.options.externalControl)
      this.options.externalControl.hide();
    this.element.hide();
    this.createForm();
    this.element.parentNode.insertBefore(this._form, this.element);
    if (!this.options.loadTextURL)
      this.postProcessEditField();
    if (e) Event.stop(e);
  },
  enterHover: function(e) {
    if (this.options.hoverClassName)
      this.element.addClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onEnterHover');
  },
  getText: function() {
    return this.element.innerHTML.unescapeHTML();
  },
  handleAJAXFailure: function(transport) {
    this.triggerCallback('onFailure', transport);
    if (this._oldInnerHTML) {
      this.element.innerHTML = this._oldInnerHTML;
      this._oldInnerHTML = null;
    }
  },
  handleFormCancellation: function(e) {
    this.wrapUp();
    if (e) Event.stop(e);
  },
  handleFormSubmission: function(e) {
    var form = this._form;
    var value = $F(this._controls.editor);
    this.prepareSubmission();
    var params = this.options.callback(form, value) || '';
    if (Object.isString(params))
      params = params.toQueryParams();
    params.editorId = this.element.id;
    if (this.options.htmlResponse) {
      var options = Object.extend({ evalScripts: true }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Updater({ success: this.element }, this.url, options);
    } else {
      var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
      Object.extend(options, {
        parameters: params,
        onComplete: this._boundWrapperHandler,
        onFailure: this._boundFailureHandler
      });
      new Ajax.Request(this.url, options);
    }
    if (e) Event.stop(e);
  },
  leaveEditMode: function() {
    this.element.removeClassName(this.options.savingClassName);
    this.removeForm();
    this.leaveHover();
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
    if (this.options.externalControl)
      this.options.externalControl.show();
    this._saving = false;
    this._editing = false;
    this._oldInnerHTML = null;
    this.triggerCallback('onLeaveEditMode');
  },
  leaveHover: function(e) {
    if (this.options.hoverClassName)
      this.element.removeClassName(this.options.hoverClassName);
    if (this._saving) return;
    this.triggerCallback('onLeaveHover');
  },
  loadExternalText: function() {
    this._form.addClassName(this.options.loadingClassName);
    this._controls.editor.disabled = true;
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._form.removeClassName(this.options.loadingClassName);
        var text = transport.responseText;
        if (this.options.stripLoadedTextTags)
          text = text.stripTags();
        this._controls.editor.value = text;
        this._controls.editor.disabled = false;
        this.postProcessEditField();
      }.bind(this),
      onFailure: this._boundFailureHandler
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },
  postProcessEditField: function() {
    var fpc = this.options.fieldPostCreation;
    if (fpc)
      $(this._controls.editor)['focus' == fpc ? 'focus' : 'activate']();
  },
  prepareOptions: function() {
    this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
    Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
    [this._extraDefaultOptions].flatten().compact().each(function(defs) {
      Object.extend(this.options, defs);
    }.bind(this));
  },
  prepareSubmission: function() {
    this._saving = true;
    this.removeForm();
    this.leaveHover();
    this.showSaving();
  },
  registerListeners: function() {
    this._listeners = { };
    var listener;
    $H(Ajax.InPlaceEditor.Listeners).each(function(pair) {
      listener = this[pair.value].bind(this);
      this._listeners[pair.key] = listener;
      if (!this.options.externalControlOnly)
        this.element.observe(pair.key, listener);
      if (this.options.externalControl)
        this.options.externalControl.observe(pair.key, listener);
    }.bind(this));
  },
  removeForm: function() {
    if (!this._form) return;
    this._form.remove();
    this._form = null;
    this._controls = { };
  },
  showSaving: function() {
    this._oldInnerHTML = this.element.innerHTML;
    this.element.innerHTML = this.options.savingText;
    this.element.addClassName(this.options.savingClassName);
    this.element.style.backgroundColor = this._originalBackground;
    this.element.show();
  },
  triggerCallback: function(cbName, arg) {
    if ('function' == typeof this.options[cbName]) {
      this.options[cbName](this, arg);
    }
  },
  unregisterListeners: function() {
    $H(this._listeners).each(function(pair) {
      if (!this.options.externalControlOnly)
        this.element.stopObserving(pair.key, pair.value);
      if (this.options.externalControl)
        this.options.externalControl.stopObserving(pair.key, pair.value);
    }.bind(this));
  },
  wrapUp: function(transport) {
    this.leaveEditMode();
    // Can't use triggerCallback due to backward compatibility: requires
    // binding + direct element
    this._boundComplete(transport, this.element);
  }
});

Object.extend(Ajax.InPlaceEditor.prototype, {
  dispose: Ajax.InPlaceEditor.prototype.destroy
});

Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
  initialize: function($super, element, url, options) {
    this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
    $super(element, url, options);
  },

  createEditField: function() {
    var list = document.createElement('select');
    list.name = this.options.paramName;
    list.size = 1;
    this._controls.editor = list;
    this._collection = this.options.collection || [];
    if (this.options.loadCollectionURL)
      this.loadCollection();
    else
      this.checkForExternalText();
    this._form.appendChild(this._controls.editor);
  },

  loadCollection: function() {
    this._form.addClassName(this.options.loadingClassName);
    this.showLoadingText(this.options.loadingCollectionText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        var js = transport.responseText.strip();
        if (!/^\[.*\]$/.test(js)) // TODO: improve sanity check
          throw('Server returned an invalid collection representation.');
        this._collection = eval(js);
        this.checkForExternalText();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadCollectionURL, options);
  },

  showLoadingText: function(text) {
    this._controls.editor.disabled = true;
    var tempOption = this._controls.editor.firstChild;
    if (!tempOption) {
      tempOption = document.createElement('option');
      tempOption.value = '';
      this._controls.editor.appendChild(tempOption);
      tempOption.selected = true;
    }
    tempOption.update((text || '').stripScripts().stripTags());
  },

  checkForExternalText: function() {
    this._text = this.getText();
    if (this.options.loadTextURL)
      this.loadExternalText();
    else
      this.buildOptionList();
  },

  loadExternalText: function() {
    this.showLoadingText(this.options.loadingText);
    var options = Object.extend({ method: 'get' }, this.options.ajaxOptions);
    Object.extend(options, {
      parameters: 'editorId=' + encodeURIComponent(this.element.id),
      onComplete: Prototype.emptyFunction,
      onSuccess: function(transport) {
        this._text = transport.responseText.strip();
        this.buildOptionList();
      }.bind(this),
      onFailure: this.onFailure
    });
    new Ajax.Request(this.options.loadTextURL, options);
  },

  buildOptionList: function() {
    this._form.removeClassName(this.options.loadingClassName);
    this._collection = this._collection.map(function(entry) {
      return 2 === entry.length ? entry : [entry, entry].flatten();
    });
    var marker = ('value' in this.options) ? this.options.value : this._text;
    var textFound = this._collection.any(function(entry) {
      return entry[0] == marker;
    }.bind(this));
    this._controls.editor.update('');
    var option;
    this._collection.each(function(entry, index) {
      option = document.createElement('option');
      option.value = entry[0];
      option.selected = textFound ? entry[0] == marker : 0 == index;
      option.appendChild(document.createTextNode(entry[1]));
      this._controls.editor.appendChild(option);
    }.bind(this));
    this._controls.editor.disabled = false;
    Field.scrollFreeActivate(this._controls.editor);
  }
});

//**** DEPRECATION LAYER FOR InPlace[Collection]Editor! ****
//**** This only  exists for a while,  in order to  let ****
//**** users adapt to  the new API.  Read up on the new ****
//**** API and convert your code to it ASAP!            ****

Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(options) {
  if (!options) return;
  function fallback(name, expr) {
    if (name in options || expr === undefined) return;
    options[name] = expr;
  };
  fallback('cancelControl', (options.cancelLink ? 'link' : (options.cancelButton ? 'button' :
    options.cancelLink == options.cancelButton == false ? false : undefined)));
  fallback('okControl', (options.okLink ? 'link' : (options.okButton ? 'button' :
    options.okLink == options.okButton == false ? false : undefined)));
  fallback('highlightColor', options.highlightcolor);
  fallback('highlightEndColor', options.highlightendcolor);
};

Object.extend(Ajax.InPlaceEditor, {
  DefaultOptions: {
    ajaxOptions: { },
    autoRows: 3,                                // Use when multi-line w/ rows == 1
    cancelControl: 'link',                      // 'link'|'button'|false
    cancelText: 'cancel',
    clickToEditText: 'Click to edit',
    externalControl: null,                      // id|elt
    externalControlOnly: false,
    fieldPostCreation: 'activate',              // 'activate'|'focus'|false
    formClassName: 'inplaceeditor-form',
    formId: null,                               // id|elt
    highlightColor: '#ffff99',
    highlightEndColor: '#ffffff',
    hoverClassName: '',
    htmlResponse: true,
    loadingClassName: 'inplaceeditor-loading',
    loadingText: 'Loading...',
    okControl: 'button',                        // 'link'|'button'|false
    okText: 'ok',
    paramName: 'value',
    rows: 1,                                    // If 1 and multi-line, uses autoRows
    savingClassName: 'inplaceeditor-saving',
    savingText: 'Saving...',
    size: 0,
    stripLoadedTextTags: false,
    submitOnBlur: false,
    textAfterControls: '',
    textBeforeControls: '',
    textBetweenControls: ''
  },
  DefaultCallbacks: {
    callback: function(form) {
      return Form.serialize(form);
    },
    onComplete: function(transport, element) {
      // For backward compatibility, this one is bound to the IPE, and passes
      // the element directly.  It was too often customized, so we don't break it.
      new Effect.Highlight(element, {
        startcolor: this.options.highlightColor, keepBackgroundImage: true });
    },
    onEnterEditMode: null,
    onEnterHover: function(ipe) {
      ipe.element.style.backgroundColor = ipe.options.highlightColor;
      if (ipe._effect)
        ipe._effect.cancel();
    },
    onFailure: function(transport, ipe) {
      alert('Error communication with the server: ' + transport.responseText.stripTags());
    },
    onFormCustomization: null, // Takes the IPE and its generated form, after editor, before controls.
    onLeaveEditMode: null,
    onLeaveHover: function(ipe) {
      ipe._effect = new Effect.Highlight(ipe.element, {
        startcolor: ipe.options.highlightColor, endcolor: ipe.options.highlightEndColor,
        restorecolor: ipe._originalBackground, keepBackgroundImage: true
      });
    }
  },
  Listeners: {
    click: 'enterEditMode',
    keydown: 'checkForEscapeOrReturn',
    mouseover: 'enterHover',
    mouseout: 'leaveHover'
  }
});

Ajax.InPlaceCollectionEditor.DefaultOptions = {
  loadingCollectionText: 'Loading options...'
};

// Delayed observer, like Form.Element.Observer,
// but waits for delay after last key input
// Ideal for live-search fields

Form.Element.DelayedObserver = Class.create({
  initialize: function(element, delay, callback) {
    this.delay     = delay || 0.5;
    this.element   = $(element);
    this.callback  = callback;
    this.timer     = null;
    this.lastValue = $F(this.element);
    Event.observe(this.element,'keyup',this.delayedListener.bindAsEventListener(this));
  },
  delayedListener: function(event) {
    if(this.lastValue == $F(this.element)) return;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
    this.lastValue = $F(this.element);
  },
  onTimerEvent: function() {
    this.timer = null;
    this.callback(this.element, $F(this.element));
  }
});
/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */
function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = url;
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
    window.opener.location.href = url;
}

function setLanguageCode(code, fromCode){
    //TODO: javascript cookies have different domain and path than php cookies
    var href = window.location.href;
    var after = '', dash;
    if (dash = href.match(/\#(.*)$/)) {
        href = href.replace(/\#(.*)$/, '');
        after = dash[0];
    }

    if (href.match(/[?]/)) {
        var re = /([?&]store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '$1'+code);
        } else {
            href += '&store='+code;
        }

        var re = /([?&]from_store=)[a-z0-9_]*/;
        if (href.match(re)) {
            href = href.replace(re, '');
        }
    } else {
        href += '?store='+code;
    }
    if (typeof(fromCode) != 'undefined') {
        href += '&from_store='+fromCode;
    }
    href += after;

    setLocation(href);
}

/**
 * Add classes to specified elements.
 * Supported classes are: 'odd', 'even', 'first', 'last'
 *
 * @param elements - array of elements to be decorated
 * [@param decorateParams] - array of classes to be set. If omitted, all available will be used
 */
function decorateGeneric(elements, decorateParams)
{
    var allSupportedParams = ['odd', 'even', 'first', 'last'];
    var _decorateParams = {};
    var total = elements.length;

    if (total) {
        // determine params called
        if (typeof(decorateParams) == 'undefined') {
            decorateParams = allSupportedParams;
        }
        if (!decorateParams.length) {
            return;
        }
        for (var k in allSupportedParams) {
            _decorateParams[allSupportedParams[k]] = false;
        }
        for (var k in decorateParams) {
            _decorateParams[decorateParams[k]] = true;
        }

        // decorate elements
        // elements[0].addClassName('first'); // will cause bug in IE (#5587)
        if (_decorateParams.first) {
            Element.addClassName(elements[0], 'first');
        }
        if (_decorateParams.last) {
            Element.addClassName(elements[total-1], 'last');
        }
        for (var i = 0; i < total; i++) {
            if ((i + 1) % 2 == 0) {
                if (_decorateParams.even) {
                    Element.addClassName(elements[i], 'even');
                }
            }
            else {
                if (_decorateParams.odd) {
                    Element.addClassName(elements[i], 'odd');
                }
            }
        }
    }
}

/**
 * Decorate table rows and cells, tbody etc
 * @see decorateGeneric()
 */
function decorateTable(table, options) {
    var table = $(table);
    if (table) {
        // set default options
        var _options = {
            'tbody'    : false,
            'tbody tr' : ['odd', 'even', 'first', 'last'],
            'thead tr' : ['first', 'last'],
            'tfoot tr' : ['first', 'last'],
            'tr td'    : ['last']
        };
        // overload options
        if (typeof(options) != 'undefined') {
            for (var k in options) {
                _options[k] = options[k];
            }
        }
        // decorate
        if (_options['tbody']) {
            decorateGeneric(table.select('tbody'), _options['tbody']);
        }
        if (_options['tbody tr']) {
            decorateGeneric(table.select('tbody tr'), _options['tbody tr']);
        }
        if (_options['thead tr']) {
            decorateGeneric(table.select('thead tr'), _options['thead tr']);
        }
        if (_options['tfoot tr']) {
            decorateGeneric(table.select('tfoot tr'), _options['tfoot tr']);
        }
        if (_options['tr td']) {
            var allRows = table.select('tr');
            if (allRows.length) {
                for (var i = 0; i < allRows.length; i++) {
                    decorateGeneric(allRows[i].getElementsByTagName('TD'), _options['tr td']);
                }
            }
        }
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateList(list, nonRecursive) {
    if ($(list)) {
        if (typeof(nonRecursive) == 'undefined') {
            var items = $(list).select('li')
        }
        else {
            var items = $(list).childElements();
        }
        decorateGeneric(items, ['odd', 'even', 'last']);
    }
}

/**
 * Set "odd", "even" and "last" CSS classes for list items
 * @see decorateGeneric()
 */
function decorateDataList(list) {
    list = $(list);
    if (list) {
        decorateGeneric(list.select('dt'), ['odd', 'even', 'last']);
        decorateGeneric(list.select('dd'), ['odd', 'even', 'last']);
    }
}

/**
 * Parse SID and produces the correct URL
 */
function parseSidUrl(baseUrl, urlExt) {
    var sidPos = baseUrl.indexOf('/?SID=');
    var sid = '';
    urlExt = (urlExt != undefined) ? urlExt : '';

    if(sidPos > -1) {
        sid = '?' + baseUrl.substring(sidPos + 2);
        baseUrl = baseUrl.substring(0, sidPos + 1);
    }

    return baseUrl+urlExt+sid;
}

/**
 * Formats currency using patern
 * format - JSON (pattern, decimal, decimalsDelimeter, groupsDelimeter)
 * showPlus - true (always show '+'or '-'),
 *      false (never show '-' even if number is negative)
 *      null (show '-' if number is negative)
 */

function formatCurrency(price, format, showPlus){
    var precision = isNaN(format.precision = Math.abs(format.precision)) ? 2 : format.precision;
    var requiredPrecision = isNaN(format.requiredPrecision = Math.abs(format.requiredPrecision)) ? 2 : format.requiredPrecision;

    //precision = (precision > requiredPrecision) ? precision : requiredPrecision;
    //for now we don't need this difference so precision is requiredPrecision
    precision = requiredPrecision;

    var integerRequired = isNaN(format.integerRequired = Math.abs(format.integerRequired)) ? 1 : format.integerRequired;

    var decimalSymbol = format.decimalSymbol == undefined ? "," : format.decimalSymbol;
    var groupSymbol = format.groupSymbol == undefined ? "." : format.groupSymbol;
    var groupLength = format.groupLength == undefined ? 3 : format.groupLength;

    var s = '';

    if (showPlus == undefined || showPlus == true) {
        s = price < 0 ? "-" : ( showPlus ? "+" : "");
    } else if (showPlus == false) {
        s = '';
    }

    var i = parseInt(price = Math.abs(+price || 0).toFixed(precision)) + "";
    var pad = (i.length < integerRequired) ? (integerRequired - i.length) : 0;
    while (pad) { i = '0' + i; pad--; }
    j = (j = i.length) > groupLength ? j % groupLength : 0;
    re = new RegExp("(\\d{" + groupLength + "})(?=\\d)", "g");

    /**
     * replace(/-/, 0) is only for fixing Safari bug which appears
     * when Math.abs(0).toFixed() executed on "0" number.
     * Result is "0.-0" :(
     */
    var r = (j ? i.substr(0, j) + groupSymbol : "") + i.substr(j).replace(re, "$1" + groupSymbol) + (precision ? decimalSymbol + Math.abs(price - i).toFixed(precision).replace(/-/, 0).slice(2) : "")
    var pattern = '';
    if (format.pattern.indexOf('{sign}') == -1) {
        pattern = s + format.pattern;
    } else {
        pattern = format.pattern.replace('{sign}', s);
    }

    return pattern.replace('%s', r).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

function expandDetails(el, childClass) {
    if (Element.hasClassName(el,'show-details')) {
        $$(childClass).each(function(item){item.hide()});
        Element.removeClassName(el,'show-details');
    }
    else {
        $$(childClass).each(function(item){item.show()});
        Element.addClassName(el,'show-details');
    }
}

// Version 1.0
var isIE = navigator.appVersion.match(/MSIE/) == "MSIE";

if (!window.Varien)
    var Varien = new Object();

Varien.showLoading = function(){
    var loader = $('loading-process');
    loader && loader.show();
}
Varien.hideLoading = function(){
    var loader = $('loading-process');
    loader && loader.hide();
}
Varien.GlobalHandlers = {
    onCreate: function() {
        Varien.showLoading();
    },

    onComplete: function() {
        if(Ajax.activeRequestCount == 0) {
            Varien.hideLoading();
        }
    }
};

Ajax.Responders.register(Varien.GlobalHandlers);

/**
 * Quick Search form client model
 */
Varien.searchForm = Class.create();
Varien.searchForm.prototype = {
    initialize : function(form, field, emptyText){
        this.form   = $(form);
        this.field  = $(field);
        this.emptyText = emptyText;

        Event.observe(this.form,  'submit', this.submit.bind(this));
        Event.observe(this.field, 'focus', this.focus.bind(this));
        Event.observe(this.field, 'blur', this.blur.bind(this));
        this.blur();
    },

    submit : function(event){
        if (this.field.value == this.emptyText || this.field.value == ''){
            Event.stop(event);
            return false;
        }
        return true;
    },

    focus : function(event){
        if(this.field.value==this.emptyText){
            this.field.value='';
        }

    },

    blur : function(event){
        if(this.field.value==''){
            this.field.value=this.emptyText;
        }
    },

    initAutocomplete : function(url, destinationElement){
        new Ajax.Autocompleter(
            this.field,
            destinationElement,
            url,
            {
                paramName: this.field.name,
                method: 'get',
                minChars: 2,
                updateElement: this._selectAutocompleteItem.bind(this),
                onShow : function(element, update) {
                    if(!update.style.position || update.style.position=='absolute') {
                        update.style.position = 'absolute';
                        Position.clone(element, update, {
                            setHeight: false,
                            offsetTop: element.offsetHeight
                        });
                    }
                    Effect.Appear(update,{duration:0});
                }

            }
        );
    },

    _selectAutocompleteItem : function(element){
        if(element.title){
            this.field.value = element.title;
        }
        this.form.submit();
    }
}

Varien.Tabs = Class.create();
Varien.Tabs.prototype = {
  initialize: function(selector) {
    var self=this;
    $$(selector+' a').each(this.initTab.bind(this));
  },

  initTab: function(el) {
      el.href = 'javascript:void(0)';
      if ($(el.parentNode).hasClassName('active')) {
        this.showContent(el);
      }
      el.observe('click', this.showContent.bind(this, el));
  },

  showContent: function(a) {
    var li = $(a.parentNode), ul = $(li.parentNode);
    ul.getElementsBySelector('li', 'ol').each(function(el){
      var contents = $(el.id+'_contents');
      if (el==li) {
        el.addClassName('active');
        contents.show();
      } else {
        el.removeClassName('active');
        contents.hide();
      }
    });
  }
}

Varien.DateElement = Class.create();
Varien.DateElement.prototype = {
    initialize: function(type, content, required, format) {
        if (type == 'id') {
            // id prefix
            this.day    = $(content + 'day');
            this.month  = $(content + 'month');
            this.year   = $(content + 'year');
            this.full   = $(content + 'full');
            this.advice = $(content + 'date-advice');
        } else if (type == 'container') {
            // content must be container with data
            this.day    = content.day;
            this.month  = content.month;
            this.year   = content.year;
            this.full   = content.full;
            this.advice = content.advice;
        } else {
            return;
        }

        this.required = required;
        this.format   = format;

        this.day.addClassName('validate-custom');
        this.day.validate = this.validate.bind(this);
        this.month.addClassName('validate-custom');
        this.month.validate = this.validate.bind(this);
        this.year.addClassName('validate-custom');
        this.year.validate = this.validate.bind(this);

        this.setDateRange(false, false);
        this.year.setAttribute('autocomplete','off');

        this.advice.hide();
    },
    validate: function() {
        var error = false,
            day   = parseInt(this.day.value, 10)   || 0,
            month = parseInt(this.month.value, 10) || 0,
            year  = parseInt(this.year.value, 10)  || 0;
        if (this.day.value.strip().empty()
            && this.month.value.strip().empty()
            && this.year.value.strip().empty()
        ) {
            if (this.required) {
                error = 'This date is a required value.';
            } else {
                this.full.value = '';
            }
        } else if (!day || !month || !year) {
            error = 'Please enter a valid full date.';
        } else {
            var date = new Date, countDaysInMonth = 0, errorType = null;
            date.setYear(year);date.setMonth(month-1);date.setDate(32);
            countDaysInMonth = 32 - date.getDate();
            if(!countDaysInMonth || countDaysInMonth>31) countDaysInMonth = 31;

            if (day<1 || day>countDaysInMonth) {
                errorType = 'day';
                error = 'Please enter a valid day (1-%d).';
            } else if (month<1 || month>12) {
                errorType = 'month';
                error = 'Please enter a valid month (1-12).';
            } else {
                if(day % 10 == day) this.day.value = '0'+day;
                if(month % 10 == month) this.month.value = '0'+month;
                this.full.value = this.format.replace(/%[mb]/i, this.month.value).replace(/%[de]/i, this.day.value).replace(/%y/i, this.year.value);
                var testFull = this.month.value + '/' + this.day.value + '/'+ this.year.value;
                var test = new Date(testFull);
                if (isNaN(test)) {
                    error = 'Please enter a valid date.';
                } else {
                    this.setFullDate(test);
                }
            }
            var valueError = false;
            if (!error && !this.validateData()){//(year<1900 || year>curyear) {
                errorType = this.validateDataErrorType;//'year';
                valueError = this.validateDataErrorText;//'Please enter a valid year (1900-%d).';
                error = valueError;
            }
        }

        if (error !== false) {
            try {
                error = Translator.translate(error);
            }
            catch (e) {}
            if (!valueError) {
                this.advice.innerHTML = error.replace('%d', countDaysInMonth);
            } else {
                this.advice.innerHTML = this.errorTextModifier(error);
            }
            this.advice.show();
            return false;
        }

        // fixing elements class
        this.day.removeClassName('validation-failed');
        this.month.removeClassName('validation-failed');
        this.year.removeClassName('validation-failed');

        this.advice.hide();
        return true;
    },
    validateData: function() {
        var year = this.fullDate.getFullYear();
        var date = new Date;
        this.curyear = date.getFullYear();
        return (year>=1900 && year<=this.curyear);
    },
    validateDataErrorType: 'year',
    validateDataErrorText: 'Please enter a valid year (1900-%d).',
    errorTextModifier: function(text) {
        return text.replace('%d', this.curyear);
    },
    setDateRange: function(minDate, maxDate) {
        this.minDate = minDate;
        this.maxDate = maxDate;
    },
    setFullDate: function(date) {
        this.fullDate = date;
    }
};

Varien.DOB = Class.create();
Varien.DOB.prototype = {
    initialize: function(selector, required, format) {
        var el = $$(selector)[0];
        var container       = {};
        container.day       = Element.select(el, '.dob-day input')[0];
        container.month     = Element.select(el, '.dob-month input')[0];
        container.year      = Element.select(el, '.dob-year input')[0];
        container.full      = Element.select(el, '.dob-full input')[0];
        container.advice    = Element.select(el, '.validation-advice')[0];

        new Varien.DateElement('container', container, required, format);
    }
};

Varien.dateRangeDate = Class.create();
Varien.dateRangeDate.prototype = Object.extend(new Varien.DateElement(), {
    validateData: function() {
        var validate = true;
        if (this.minDate || this.maxValue) {
            if (this.minDate) {
                this.minDate = new Date(this.minDate);
                this.minDate.setHours(0);
                if (isNaN(this.minDate)) {
                    this.minDate = new Date('1/1/1900');
                }
                validate = validate && (this.fullDate >= this.minDate)
            }
            if (this.maxDate) {
                this.maxDate = new Date(this.maxDate)
                this.minDate.setHours(0);
                if (isNaN(this.maxDate)) {
                    this.maxDate = new Date();
                }
                validate = validate && (this.fullDate <= this.maxDate)
            }
            if (this.maxDate && this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date between %s and %s';
            } else if (this.maxDate) {
                this.validateDataErrorText = 'Please enter a valid date less than or equal to %s';
            } else if (this.minDate) {
                this.validateDataErrorText = 'Please enter a valid date equal to or greater than %s';
            } else {
                this.validateDataErrorText = '';
            }
        }
        return validate;
    },
    validateDataErrorText: 'Date should be between %s and %s',
    errorTextModifier: function(text) {
        if (this.minDate) {
            text = text.sub('%s', this.dateFormat(this.minDate));
        }
        if (this.maxDate) {
            text = text.sub('%s', this.dateFormat(this.maxDate));
        }
        return text;
    },
    dateFormat: function(date) {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
});

Varien.FileElement = Class.create();
Varien.FileElement.prototype = {
    initialize: function (id) {
        this.fileElement = $(id);
        this.hiddenElement = $(id + '_value');

        this.fileElement.observe('change', this.selectFile.bind(this));
    },
    selectFile: function(event) {
        this.hiddenElement.value = this.fileElement.getValue();
    }
};

Validation.addAllThese([
    ['validate-custom', ' ', function(v,elm) {
        return elm.validate();
    }]
]);

function truncateOptions() {
    $$('.truncated').each(function(element){
        Event.observe(element, 'mouseover', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').addClassName('show')
            }
        });
        Event.observe(element, 'mouseout', function(){
            if (element.down('div.truncated_full_value')) {
                element.down('div.truncated_full_value').removeClassName('show')
            }
        });

    });
}
Event.observe(window, 'load', function(){
   truncateOptions();
});

Element.addMethods({
    getInnerText: function(element)
    {
        element = $(element);
        if(element.innerText && !Prototype.Browser.Opera) {
            return element.innerText
        }
        return element.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, ' ').strip();
    }
});

/*
if (!("console" in window) || !("firebug" in console))
{
    var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
    "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = {};
    for (var i = 0; i < names.length; ++i)
        window.console[names[i]] = function() {}
}
*/

/**
 * Executes event handler on the element. Works with event handlers attached by Prototype,
 * in a browser-agnostic fashion.
 * @param element The element object
 * @param event Event name, like 'change'
 *
 * @example fireEvent($('my-input', 'click'));
 */
function fireEvent(element, event) {
    if (document.createEvent) {
        // dispatch for all browsers except IE before version 9
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type, bubbling, cancelable
        return element.dispatchEvent(evt);
    } else {
        // dispatch for IE before version 9
        var evt = document.createEventObject();
        return element.fireEvent('on' + event, evt)
    }
}

/**
 * Returns more accurate results of floating-point modulo division
 * E.g.:
 * 0.6 % 0.2 = 0.19999999999999996
 * modulo(0.6, 0.2) = 0
 *
 * @param dividend
 * @param divisor
 */
function modulo(dividend, divisor)
{
    var epsilon = divisor / 10000;
    var remainder = dividend % divisor;

    if (Math.abs(remainder - divisor) < epsilon || Math.abs(remainder) < epsilon) {
        remainder = 0;
    }

    return remainder;
}

/**
 * createContextualFragment is not supported in IE9. Adding its support.
 */
if ((typeof Range != "undefined") && !Range.prototype.createContextualFragment)
{
    Range.prototype.createContextualFragment = function(html)
    {
        var frag = document.createDocumentFragment(),
        div = document.createElement("div");
        frag.appendChild(div);
        div.outerHTML = html;
        return frag;
    };
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */
VarienForm = Class.create();
VarienForm.prototype = {
    initialize: function(formId, firstFieldFocus){
        this.form       = $(formId);
        if (!this.form) {
            return;
        }
        this.cache      = $A();
        this.currLoader = false;
        this.currDataIndex = false;
        this.validator  = new Validation(this.form);
        this.elementFocus   = this.elementOnFocus.bindAsEventListener(this);
        this.elementBlur    = this.elementOnBlur.bindAsEventListener(this);
        this.childLoader    = this.onChangeChildLoad.bindAsEventListener(this);
        this.highlightClass = 'highlight';
        this.extraChildParams = '';
        this.firstFieldFocus= firstFieldFocus || false;
        this.bindElements();
        if(this.firstFieldFocus){
            try{
                Form.Element.focus(Form.findFirstElement(this.form))
            }
            catch(e){}
        }
    },

    submit : function(url){
        if(this.validator && this.validator.validate()){
             this.form.submit();
        }
        return false;
    },

    bindElements:function (){
        var elements = Form.getElements(this.form);
        for (var row in elements) {
            if (elements[row].id) {
                Event.observe(elements[row],'focus',this.elementFocus);
                Event.observe(elements[row],'blur',this.elementBlur);
            }
        }
    },

    elementOnFocus: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.addClassName(element, this.highlightClass);
        }
    },

    elementOnBlur: function(event){
        var element = Event.findElement(event, 'fieldset');
        if(element){
            Element.removeClassName(element, this.highlightClass);
        }
    },

    setElementsRelation: function(parent, child, dataUrl, first){
        if (parent=$(parent)) {
            // TODO: array of relation and caching
            if (!this.cache[parent.id]){
                this.cache[parent.id] = $A();
                this.cache[parent.id]['child']     = child;
                this.cache[parent.id]['dataUrl']   = dataUrl;
                this.cache[parent.id]['data']      = $A();
                this.cache[parent.id]['first']      = first || false;
            }
            Event.observe(parent,'change',this.childLoader);
        }
    },

    onChangeChildLoad: function(event){
        element = Event.element(event);
        this.elementChildLoad(element);
    },

    elementChildLoad: function(element, callback){
        this.callback = callback || false;
        if (element.value) {
            this.currLoader = element.id;
            this.currDataIndex = element.value;
            if (this.cache[element.id]['data'][element.value]) {
                this.setDataToChild(this.cache[element.id]['data'][element.value]);
            }
            else{
                new Ajax.Request(this.cache[this.currLoader]['dataUrl'],{
                        method: 'post',
                        parameters: {"parent":element.value},
                        onComplete: this.reloadChildren.bind(this)
                });
            }
        }
    },

    reloadChildren: function(transport){
        var data = eval('(' + transport.responseText + ')');
        this.cache[this.currLoader]['data'][this.currDataIndex] = data;
        this.setDataToChild(data);
    },

    setDataToChild: function(data){
        if (data.length) {
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<select name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                if(this.cache[this.currLoader]['first']){
                    html+= '<option value="">'+this.cache[this.currLoader]['first']+'</option>';
                }
                for (var i in data){
                    if(data[i].value) {
                        html+= '<option value="'+data[i].value+'"';
                        if(child.value && (child.value == data[i].value || child.value == data[i].label)){
                            html+= ' selected';
                        }
                        html+='>'+data[i].label+'</option>';
                    }
                }
                html+= '</select>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }
        else{
            var child = $(this.cache[this.currLoader]['child']);
            if (child){
                var html = '<input type="text" name="'+child.name+'" id="'+child.id+'" class="'+child.className+'" title="'+child.title+'" '+this.extraChildParams+'>';
                Element.insert(child, {before: html});
                Element.remove(child);
            }
        }

        this.bindElements();
        if (this.callback) {
            this.callback();
        }
    }
}

RegionUpdater = Class.create();
RegionUpdater.prototype = {
    initialize: function (countryEl, regionTextEl, regionSelectEl, regions, disableAction, zipEl)
    {
        this.countryEl = $(countryEl);
        this.regionTextEl = $(regionTextEl);
        this.regionSelectEl = $(regionSelectEl);
        this.zipEl = $(zipEl);
        this.config = regions['config'];
        delete regions.config;
        this.regions = regions;

        this.disableAction = (typeof disableAction=='undefined') ? 'hide' : disableAction;
        this.zipOptions = (typeof zipOptions=='undefined') ? false : zipOptions;

        if (this.regionSelectEl.options.length<=1) {
            this.update();
        }

        Event.observe(this.countryEl, 'change', this.update.bind(this));
    },

    _checkRegionRequired: function()
    {
        var label, wildCard;
        var elements = [this.regionTextEl, this.regionSelectEl];
        var that = this;
        if (typeof this.config == 'undefined') {
            return;
        }
        var regionRequired = this.config.regions_required.indexOf(this.countryEl.value) >= 0;

        elements.each(function(currentElement) {
            Validation.reset(currentElement);
            label = $$('label[for="' + currentElement.id + '"]')[0];
            if (label) {
                wildCard = label.down('em') || label.down('span.required');
                if (!that.config.show_all_regions) {
                    if (regionRequired) {
                        label.up().show();
                    } else {
                        label.up().hide();
                    }
                }
            }

            if (label && wildCard) {
                if (!regionRequired) {
                    wildCard.hide();
                    if (label.hasClassName('required')) {
                        label.removeClassName('required');
                    }
                } else if (regionRequired) {
                    wildCard.show();
                    if (!label.hasClassName('required')) {
                        label.addClassName('required')
                    }
                }
            }

            if (!regionRequired) {
                if (currentElement.hasClassName('required-entry')) {
                    currentElement.removeClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    currentElement.hasClassName('validate-select')) {
                    currentElement.removeClassName('validate-select');
                }
            } else {
                if (!currentElement.hasClassName('required-entry')) {
                    currentElement.addClassName('required-entry');
                }
                if ('select' == currentElement.tagName.toLowerCase() &&
                    !currentElement.hasClassName('validate-select')) {
                    currentElement.addClassName('validate-select');
                }
            }
        });
    },

    update: function()
    {
        if (this.regions[this.countryEl.value]) {
            var i, option, region, def;

            def = this.regionSelectEl.getAttribute('defaultValue');
            if (this.regionTextEl) {
                if (!def) {
                    def = this.regionTextEl.value.toLowerCase();
                }
                this.regionTextEl.value = '';
            }
            if (this.regionSelectEl && this.regionSelectEl.value && !def) {
                def = this.regionSelectEl.value;
            }

            this.regionSelectEl.options.length = 1;
            for (regionId in this.regions[this.countryEl.value]) {
                region = this.regions[this.countryEl.value][regionId];

                option = document.createElement('OPTION');
                option.value = regionId;
                option.text = region.name.stripTags();
                option.title = region.name;

                if (this.regionSelectEl.options.add) {
                    this.regionSelectEl.options.add(option);
                } else {
                    this.regionSelectEl.appendChild(option);
                }

                if (regionId==def || (region.name && region.name.toLowerCase()==def) ||
                    (region.name && region.code.toLowerCase()==def)
                ) {
                    this.regionSelectEl.value = regionId;
                }
            }

            if (this.disableAction=='hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = 'none';
                }

                this.regionSelectEl.style.display = '';
            } else if (this.disableAction=='disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = true;
                }
                this.regionSelectEl.disabled = false;
            }
            this.setMarkDisplay(this.regionSelectEl, true);
        } else {
            if (this.disableAction=='hide') {
                if (this.regionTextEl) {
                    this.regionTextEl.style.display = '';
                }
                this.regionSelectEl.style.display = 'none';
                Validation.reset(this.regionSelectEl);
            } else if (this.disableAction=='disable') {
                if (this.regionTextEl) {
                    this.regionTextEl.disabled = false;
                }
                this.regionSelectEl.disabled = true;
            } else if (this.disableAction=='nullify') {
                this.regionSelectEl.options.length = 1;
                this.regionSelectEl.value = '';
                this.regionSelectEl.selectedIndex = 0;
                this.lastCountryId = '';
            }
            this.setMarkDisplay(this.regionSelectEl, false);
        }

        this._checkRegionRequired();
        // Make Zip and its label required/optional
        var zipUpdater = new ZipUpdater(this.countryEl.value, this.zipEl);
        zipUpdater.update();
    },

    setMarkDisplay: function(elem, display){
        elem = $(elem);
        var labelElement = elem.up(0).down('label > span.required') ||
                           elem.up(1).down('label > span.required') ||
                           elem.up(0).down('label.required > em') ||
                           elem.up(1).down('label.required > em');
        if(labelElement) {
            inputElement = labelElement.up().next('input');
            if (display) {
                labelElement.show();
                if (inputElement) {
                    inputElement.addClassName('required-entry');
                }
            } else {
                labelElement.hide();
                if (inputElement) {
                    inputElement.removeClassName('required-entry');
                }
            }
        }
    }
}

ZipUpdater = Class.create();
ZipUpdater.prototype = {
    initialize: function(country, zipElement)
    {
        this.country = country;
        this.zipElement = $(zipElement);
    },

    update: function()
    {
        // Country ISO 2-letter codes must be pre-defined
        if (typeof optionalZipCountries == 'undefined') {
            return false;
        }

        // Ajax-request and normal content load compatibility
        if (this.zipElement != undefined) {
            this._setPostcodeOptional();
        } else {
            Event.observe(window, "load", this._setPostcodeOptional.bind(this));
        }
    },

    _setPostcodeOptional: function()
    {
        this.zipElement = $(this.zipElement);
        if (this.zipElement == undefined) {
            return false;
        }

        // find label
        var label = $$('label[for="' + this.zipElement.id + '"]')[0];
        if (label != undefined) {
            var wildCard = label.down('em') || label.down('span.required');
        }

        // Make Zip and its label required/optional
        if (optionalZipCountries.indexOf(this.country) != -1) {
            while (this.zipElement.hasClassName('required-entry')) {
                this.zipElement.removeClassName('required-entry');
            }
            if (wildCard != undefined) {
                wildCard.hide();
            }
        } else {
            this.zipElement.addClassName('required-entry');
            if (wildCard != undefined) {
                wildCard.show();
            }
        }
    }
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */

var Translate = Class.create();
Translate.prototype = {
    initialize: function(data){
        this.data = $H(data);
    },

    translate : function(){
        var args = arguments;
        var text = arguments[0];

        if(this.data.get(text)){
            return this.data.get(text);
        }
        return text;
    },
    add : function() {
        if (arguments.length > 1) {
            this.data.set(arguments[0], arguments[1]);
        } else if (typeof arguments[0] =='object') {
            $H(arguments[0]).each(function (pair){
                this.data.set(pair.key, pair.value);
            }.bind(this));
        }
    }
}

/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Mage
 * @package     js
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */
// old school cookie functions grabbed off the web

if (!window.Mage) var Mage = {};

Mage.Cookies = {};
Mage.Cookies.expires  = null;
Mage.Cookies.path     = '/';
Mage.Cookies.domain   = null;
Mage.Cookies.secure   = false;
Mage.Cookies.set = function(name, value){
     var argv = arguments;
     var argc = arguments.length;
     var expires = (argc > 2) ? argv[2] : Mage.Cookies.expires;
     var path = (argc > 3) ? argv[3] : Mage.Cookies.path;
     var domain = (argc > 4) ? argv[4] : Mage.Cookies.domain;
     var secure = (argc > 5) ? argv[5] : Mage.Cookies.secure;
     document.cookie = name + "=" + escape (value) +
       ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
       ((path == null) ? "" : ("; path=" + path)) +
       ((domain == null) ? "" : ("; domain=" + domain)) +
       ((secure == true) ? "; secure" : "");
};

Mage.Cookies.get = function(name){
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    var j = 0;
    while(i < clen){
        j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return Mage.Cookies.getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if(i == 0)
            break;
    }
    return null;
};

Mage.Cookies.clear = function(name) {
  if(Mage.Cookies.get(name)){
    document.cookie = name + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
};

Mage.Cookies.getCookieVal = function(offset){
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == -1){
       endstr = document.cookie.length;
   }
   return unescape(document.cookie.substring(offset, endstr));
};

// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

jQuery(document).ready(function($){

	var AjaxLogin = {

		init: function( options ){

			var self = this;

			self.options = $.extend( {}, $.fn.ajaxLogin.options, options );

		    // Close mini login
            $('#close-mini-login-link').unbind('click').bind('click', function (e) {
				$('.header .logged-out').removeClass('active');
				$('.forget').hide();
				$('#mini-login-container').hide();
			});

			// When logged out and click
            $('.header .logged-out').unbind('click').bind('click', function (e) {
				$(this).addClass('active');
				$('#mini-login-container').show();
				return false;
			});

			// Frgt
            $('.frgt').unbind('click').bind('click', function (e) {
                $('.forget').show();
				return false;
			});

			// Login action
             $('.login-btn').unbind('click').bind('click', function (e) {

			 	$('.login-loader').show();

				var jqurl2 = $('#mini-login').attr('action');
			 	var jqparams2 =  $('#mini-login').serialize();

				$.ajax({
					type: "POST",
					url: jqurl2,
					data: jqparams2,
					success: function(responseText){
						if (responseText == "1"){
							if(self.options.redirect_dashboard == '1'){
								window.location = self.options.redirect_url;
							}
		                }else if (responseText == "2"){ //all ok, but stay on page (reload current)
		                    //window.location = window.location;
						}else{
							$('.ajax-response').text(responseText);
							$('.mini-login-inner-container .input-text').addClass('validation-failed');
						}
					},
					error: function(xhr, textStatus, errorThrown){
						$('.ajax-response').text(textStatus);
					},
					complete: function (jqXHR, textStatus){
						$('.login-loader').hide();
					}
				});

				return false;
			});

			// Forget action
            $('.forget-btn').unbind('click').bind('click', function (e) {

				$('.forget-loader').show();

				var jqurl = $('#retrieve_password_form').attr('action');
			 	var jqparams =  $('#retrieve_password_form').serialize();

				$.ajax({
					type: "POST",
					url: jqurl,
					data: jqparams,
					success: function(responseText){

						$('.forget-feedback').show();
						$('.forget-feedback').text('');
						$('.forget-feedback').append(responseText).delay(2000).fadeOut();
						$('#email_address').delay(2000).val('');
						$('.forget-loader').css('display','none');

						if (responseText != "A new password has been sent."){
							$('.forget .input-text').removeClass('validation-passed');
							$('.forget .input-text').addClass('validation-failed');
						}
						else{
							$('.forget .input-text').removeClass('validation-failed');
							$('.forget .input-text').addClass('validation-passed');
						}
					}
				});

				return false;
			});
		}
	}

    $.fn.ajaxLogin = function( options ) {

    	var ajaxLogin = Object.create( AjaxLogin );
    	ajaxLogin.init( options );

    	return this;
	};

	$.fn.ajaxLogin.options = {
	      'redirect_dashboard' : 0,
	      'redirect_url' : ''
	};
});
/*! jQuery Mobile v1.3.2 | Copyright 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function x(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function T(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=x(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function N(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function C(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function k(){g=!1}function L(){g=!0}function A(){E=0,v.length=0,m=!1,L()}function O(){k()}function M(){_(),c=setTimeout(function(){c=0,A()},e.vmouse.resetTimerDuration)}function _(){c&&(clearTimeout(c),c=0)}function D(t,n,r){var i;if(r&&r[t]||!r&&C(n.target,t))i=T(n,t),e(n.target).trigger(i);return i}function P(t){var n=e.data(t.target,s);if(!m&&(!E||E!==n)){var r=D("v"+t.type,t);r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function H(t){var n=x(t).touches,r,i;if(n&&n.length===1){r=t.target,i=N(r);if(i.hasVirtualBinding){E=w++,e.data(r,s,E),_(),O(),d=!1;var o=x(t).touches[0];h=o.pageX,p=o.pageY,D("vmouseover",t,i),D("vmousedown",t,i)}}}function B(e){if(g)return;d||D("vmousecancel",e,N(e.target)),d=!0,M()}function j(t){if(g)return;var n=x(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=N(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&D("vmousecancel",t,s),D("vmousemove",t,s),M()}function F(e){if(g)return;L();var t=N(e.target),n;D("vmouseup",e,t);if(!d){var r=D("vclick",e,t);r&&r.isDefaultPrevented()&&(n=x(e).changedTouches[0],v.push({touchID:E,x:n.clientX,y:n.clientY}),m=!0)}D("vmouseout",e,t),d=!1,M()}function I(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function q(){}function R(t){var n=t.substr(1);return{setup:function(r,s){I(this)||e.data(this,i,{});var o=e.data(this,i);o[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,P),e(this).bind(n,q),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",H).bind("touchend",F).bind("touchmove",j).bind("scroll",B))},teardown:function(r,s){--l[t],l[t]||b.unbind(n,P),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",H).unbind("touchmove",j).unbind("touchend",F).unbind("scroll",B));var o=e(this),u=e.data(this,i);u&&(u[t]=!1),o.unbind(n,q),I(this)||o.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var U=0;U<o.length;U++)e.event.special[o[U]]=R(o[U]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,r){var i=r.type;r.type=n,e.event.dispatch.call(t,r),r.type=i}var i=e(n);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)});var s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var t=this,n=e(t);n.bind("vmousedown",function(r){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),s===e.target&&l(t,"tap",e)}if(r.which&&r.which!==1)return!1;var s=r.target,o=r.originalEvent,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){l(t,"taphold",e.Event("taphold",{target:s}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,n){n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=this,n=e(t);n.bind(u,function(t){function o(t){if(!i)return;s=e.event.special.swipe.stop(t),Math.abs(i.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()}var i=e.event.special.swipe.start(t),s;n.bind(f,o).one(a,function(){n.unbind(f,o),i&&s&&e.event.special.swipe.handleSwipe(i,s),i=s=r})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)}}})}(e,this)});
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE_AFL.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Varien
 * @package     js
 * @copyright   Copyright (c) 2014 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

/**
 * @classDescription simple Navigation with replacing old handlers
 * @param {String} id id of ul element with navigation lists
 * @param {Object} settings object with settings
 */
var mainNav = function() {

    var main = {
        obj_nav :   $(arguments[0]) || $("nav"),

        settings :  {
            show_delay      :   0,
            hide_delay      :   0,
            _ie6            :   /MSIE 6.+Win/.test(navigator.userAgent),
            _ie7            :   /MSIE 7.+Win/.test(navigator.userAgent)
        },

        init :  function(obj, level) {
            obj.lists = obj.childElements();
            obj.lists.each(function(el,ind){
                main.handlNavElement(el);
                if((main.settings._ie6 || main.settings._ie7) && level){
                    main.ieFixZIndex(el, ind, obj.lists.size());
                }
            });
            if(main.settings._ie6 && !level){
                document.execCommand("BackgroundImageCache", false, true);
            }
        },

        handlNavElement :   function(list) {
            if(list !== undefined){
                list.onmouseover = function(){
                    main.fireNavEvent(this,true);
                };
                list.onmouseout = function(){
                    main.fireNavEvent(this,false);
                };
                if(list.down("ul")){
                    main.init(list.down("ul"), true);
                }
            }
        },

        ieFixZIndex : function(el, i, l) {
            if(el.tagName.toString().toLowerCase().indexOf("iframe") == -1){
                el.style.zIndex = l - i;
            } else {
                el.onmouseover = "null";
                el.onmouseout = "null";
            }
        },

        fireNavEvent :  function(elm,ev) {
            if(ev){
                elm.addClassName("over");

                /* START - Additional change: To avoid JS error when no <a> exists */
                var a = elm.down("a");
                if (typeof a !== 'undefined') {
                    a.addClassName("over");
                }
                /* END */

                if (elm.childElements()[1]) {
                    //main.show(elm.childElements()[1]);
                    main.show(elm.childElements()[2]);
                }
            } else {
                elm.removeClassName("over");

                /* START - Additional change: To avoid JS error when no <a> exists */
                var a = elm.down("a");
                if (typeof a !== 'undefined') {
                    a.removeClassName("over");
                }
                /* END */

                if (elm.childElements()[1]) {
                    //main.hide(elm.childElements()[1]);
                    main.hide(elm.childElements()[2]);
                }
            }
        },

        show : function (sub_elm) {
            if (sub_elm.hide_time_id) {
                clearTimeout(sub_elm.hide_time_id);
            }
            sub_elm.show_time_id = setTimeout(function() {
                if (!sub_elm.hasClassName("shown-sub")) {
                    sub_elm.addClassName("shown-sub");
                }
            }, main.settings.show_delay);
        },

        hide : function (sub_elm) {
            if (sub_elm.show_time_id) {
                clearTimeout(sub_elm.show_time_id);
            }
            sub_elm.hide_time_id = setTimeout(function(){
                if (sub_elm.hasClassName("shown-sub")) {
                    sub_elm.removeClassName("shown-sub");
                }
            }, main.settings.hide_delay);
        }

    };
    if (arguments[1]) {
        main.settings = Object.extend(main.settings, arguments[1]);
    }
    if (main.obj_nav) {
        main.init(main.obj_nav, false);
    }

    return main;
};

document.observe("dom:loaded", function() {
    //run navigation without delays and with default id="#nav"
    //mainNav();

    //run navigation with delays
    mainNav("nav", {"show_delay":"100","hide_delay":"100"});
});
/*!
 * jQuery UI Widget 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
(function ($) {
    "use strict";

    $.widget('vaimo.SlideShow', {
        options: {
            selector: '',
            interval: 5000
        },
        _create: function() {
            var $carousel = $(this.options.selector);

            $carousel.carousel({
                interval: this.options.interval
            });

            if (typeof $carousel.swiperight != 'undefined' && typeof $carousel.swipeleft != 'undefined') {
                $carousel.swiperight(function () {
                    $(this).carousel('prev');
                });

                $carousel.swipeleft(function () {
                    $(this).carousel('next');
                });
            }
        }
    });
})(jQuery);
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderradius-opacity-rgba-generatedcontent-input-inputtypes-touch-shiv-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_boxsizing-css_lastchild-css_mediaqueries-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},r.backgroundsize=function(){return H("backgroundSize")},r.borderradius=function(){return H("borderRadius")},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("boxsizing",function(){return Modernizr.testAllProps("boxSizing")&&(document.documentMode===undefined||document.documentMode>7)}),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(a){return a.lastChild.offsetWidth>a.firstChild.offsetWidth},2)}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all"));
/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-carousel.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery)
/**
 * Magento Enterprise Edition
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Magento Enterprise Edition License
 * that is bundled with this package in the file LICENSE_EE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.magentocommerce.com/license/enterprise-edition
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    design
 * @package     enterprise_default
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://www.magentocommerce.com/license/enterprise-edition
 */

// Add validation hints
Validation.defaultOptions.immediate = true;
Validation.defaultOptions.addClassNameToContainer = true;

Event.observe(document, 'dom:loaded', function() {
    var inputs = $$('ul.options-list input');
    for (var i = 0, l = inputs.length; i < l; i ++) {
        inputs[i].addClassName('change-container-classname');
    }
})

if (!window.Enterprise) {
    window.Enterprise = {};
}
Enterprise.templatesPattern =  /(^|.|\r|\n)(\{\{(.*?)\}\})/;

Enterprise.TopCart = {
    initialize: function(container) {
        this.container = $(container);
        this.element = this.container.up(0);
        this.elementHeader = this.container.previous(0);
        this.intervalDuration = 4000;
        this.interval = null;
        this.onElementMouseOut = this.handleMouseOut.bindAsEventListener(this);
        this.onElementMouseOver = this.handleMouseOver.bindAsEventListener(this);
        this.onElementMouseClick = this.handleMouseClick.bindAsEventListener(this);

        this.element.observe('mouseout', this.onElementMouseOut);
        this.element.observe('mouseover', this.onElementMouseOver);
        this.elementHeader.observe('click', this.onElementMouseClick);
    },

    handleMouseOut: function (evt) {
        if ($(this.elementHeader).hasClassName('expanded')) {
            this.interval = setTimeout(this.hideCart.bind(this), this.intervalDuration);
        }
    },

    handleMouseOver: function (evt) {
        if (this.interval !== null) {
             clearTimeout(this.interval);
             this.interval = null;
        }
    },

    handleMouseClick: function (evt) {
        if (!$(this.elementHeader).hasClassName('expanded') && !$(this.container.id).hasClassName('process'))  {
            this.showCart();
        }
        else {
            this.hideCart();
        }
    },

    showCart: function (timePeriod) {
        this.container.parentNode.style.zIndex=992;
        new Effect.SlideDown(this.container.id, { duration: 0.5,
            beforeStart: function(effect) {$( effect.element.id ).addClassName('process');},
            afterFinish: function(effect) {$( effect.element.id ).removeClassName('process'); }
            });
        $(this.elementHeader).addClassName('expanded');
        if(timePeriod) {
            this.timePeriod = timePeriod*1000;
            this.interval = setTimeout(this.hideCart.bind(this), this.timePeriod);
        }
    },

    hideCart: function () {

        if (!$(this.container.id).hasClassName('process') && $(this.elementHeader).hasClassName('expanded')) {
            new Effect.SlideUp(this.container.id, { duration: 0.5,
                beforeStart: function(effect) {$( effect.element.id ).addClassName('process');},
                afterFinish: function(effect) {
                    $( effect.element.id ).removeClassName('process');
                    effect.element.parentNode.style.zIndex=1;
                    }
                });
        }
        if (this.interval !== null) {
            clearTimeout(this.interval);
            this.interval = null;
        }
        $(this.elementHeader).removeClassName('expanded');
    }
};


Enterprise.Bundle = {
     oldReloadPrice: false,
     initialize: function () {
        this.slider = $('bundleProduct');
        this.xOffset = $('bundle-product-wrapper').getDimensions().width;
     },
     swapReloadPrice: function () {
         Enterprise.Bundle.oldReloadPrice = Product.Bundle.prototype.reloadPrice;
         Product.Bundle.prototype.reloadPrice = Enterprise.Bundle.reloadPrice;
         Product.Bundle.prototype.selection = Enterprise.Bundle.selection;
     },
     reloadPrice: function () {
         var result = Enterprise.Bundle.oldReloadPrice.bind(this)();
         var priceContainer, duplicateContainer = null
         if (priceContainer = $('bundle-product-wrapper').down('.price-box .price-as-configured')) {
            if (duplicateContainer = $('bundle-product-wrapper').down('.duplicate-price-box .price-as-configured')) {
                duplicateContainer.down('.price').update(
                    priceContainer.down('.price').innerHTML
                );
            }
         }
         if (!this.summaryTemplate && $('bundle-summary-template')) {
             this.summaryTemplate = new Template($('bundle-summary-template').innerHTML, Enterprise.templatesPattern);
             this.optionTemplate = new Template($('bundle-summary-option-template').innerHTML, Enterprise.templatesPattern);
             this.optionMultiTemplate = new Template($('bundle-summary-option-multi-template').innerHTML, Enterprise.templatesPattern);
         }

         if (this.summaryTemplate && $('bundle-summary')) {
             var summaryHTMLArray = [];
             for (var option in this.config.options) {
                if (typeof (this.config.selected[option]) !== 'undefined') {
                    var optionHTML = '';
                    for (var i = 0, l = this.config.selected[option].length; i < l; i ++) {
                        var selection = this.selection(option, this.config.selected[option][i]);
                        if (selection && this.config.options[option].isMulti) {
                            optionHTML += this.optionMultiTemplate.evaluate(selection);
                        } else if (selection) {
                            optionHTML += this.optionTemplate.evaluate(selection);
                        }
                    }

                    if (optionHTML.length > 0) {
                        var position = parseInt(this.config.options[option].position);
                        summaryHTMLArray[position] = this.summaryTemplate.evaluate({label:this.config.options[option].title.escapeHTML(), options: optionHTML});
                    }
                }
             }

             var summaryHTML = summaryHTMLArray.join('');
             if (typeof($('bundle-summary').update(summaryHTML).childElements().last()) != 'undefined') {
                 $('bundle-summary').update(summaryHTML).childElements().last().addClassName('last');
             }
         }
         return result;
     },
     selection: function(optionId, selectionId) {
        if (selectionId == '' || selectionId == 'none') {
            return false;
        }
        var qty = null;
        if (this.config.options[optionId].selections[selectionId].customQty == 1 && !this.config['options'][optionId].isMulti) {
            if ($('bundle-option-' + optionId + '-qty-input')) {
                qty = $('bundle-option-' + optionId + '-qty-input').value;
            } else {
                qty = 1;
            }
        } else {
            qty = this.config.options[optionId].selections[selectionId].qty;
        }

        return {qty: qty, name: this.config.options[optionId].selections[selectionId].name.escapeHTML()};
     },
     start: function () {
        if (!$('bundle-product-wrapper').hasClassName('moving-now')) {
            new Effect.Move(this.slider, {
                x: -this.xOffset, y: 0, mode: 'relative', duration: 1.5,
                beforeStart: function (effect) {
                    $('bundle-product-wrapper').setStyle({height: $('productView').getHeight() + 'px'});
                    $('options-container').show();
                    Enterprise.BundleSummary.initialize();
                    $('bundle-product-wrapper').addClassName('moving-now');
                },
                afterFinish: function (effect) {
                    $('bundle-product-wrapper').setStyle({height: 'auto'});
                    $('productView').hide();
                    $('bundle-product-wrapper').removeClassName('moving-now');
                }
            });
         }
     },
     end: function () {
        if (!$('bundle-product-wrapper').hasClassName('moving-now')) {
            new Effect.Move(this.slider, {
                    x: this.xOffset, y: 0, mode: 'relative', duration: 1.5,
                    beforeStart: function (effect) {
                        $('bundle-product-wrapper').setStyle({height: $('options-container').getHeight() + 'px'});
                        $('productView').show();
                        $('bundle-product-wrapper').addClassName('moving-now');
                    },
                    afterFinish: function (effect) {
                        $('bundle-product-wrapper').setStyle({height: 'auto'});
                        $('options-container').hide();
                        Enterprise.BundleSummary.exitSummary();
                        $('bundle-product-wrapper').removeClassName('moving-now');
                    }
                });
        }
     }
};

Enterprise.BundleSummary = {
    initialize: function () {
        this.summary = $('bundleSummary');
        this.summaryOffsetTop = $('customizeTitle').getDimensions().height;
        this.summary.setStyle({top:this.summaryOffsetTop + "px"});
        this.summaryContainer = this.summary.up(0);
        this.doNotCheck = false;
        this.summaryStartY = this.summary.positionedOffset().top;
        this.summaryStartY = this.summaryOffsetTop;
        this.summaryStartX = this.summary.positionedOffset().left;
        this.onDocScroll = this.handleDocScroll.bindAsEventListener(this);
        this.GetScroll = setInterval(this.onDocScroll, 50);
        this.onEffectEnds = this.effectEnds.bind(this);
    },

    handleDocScroll: function () {
        if (this.currentOffsetTop == document.viewport.getScrollOffsets().top
            && (this.checkOffset(null) == null)) {
            return;
        } else {
            if (this.currentOffsetTop == document.viewport.getScrollOffsets().top) {
                this.doNotCheck = true;
            }
            this.currentOffsetTop = document.viewport.getScrollOffsets().top;
        }

        if (this.currentEffect) {
            this.currentEffect.cancel();
            var topOffset = 0;
            if (this.summaryContainer.viewportOffset().top < -60) {
               topOffset =  -(this.summaryContainer.viewportOffset().top);
            } else {
               topOffset = this.summaryStartY;
            }

            topOffset = this.checkOffset(topOffset);
            if (topOffset === null) {
                this.currentEffect = false;
                return;
            }

            this.currentEffect.start({
                x: this.summaryStartX,
                y: topOffset,
                mode: 'absolute',
                duration: 0.3,
                afterFinish: this.onEffectEnds
            });



            return;
        }


        this.currentEffect = new Effect.Move(this.summary);
    },

    effectEnds: function () {
        if (this.doNotCheck == true) {
            this.doNotCheck = false;
        }
    },

    checkOffset: function (offset) {
        if (this.doNotCheck && offset === null) {
            return null;
        }
        var dimensions = this.summary.getDimensions();
        var parentDimensions = this.summary.up().getDimensions();
        if ((offset !== null ? offset : this.summary.offsetTop) + dimensions.height >= parentDimensions.height) {
            offset = parentDimensions.height - dimensions.height;
        } else if (offset === null &&
            this.currentOffsetTop > (this.summaryContainer.viewportOffset().top) &&
            (this.currentOffsetTop - this.summaryContainer.viewportOffset().top) > this.summary.offsetTop) {
            offset = this.currentOffsetTop - this.summaryContainer.viewportOffset().top;
        }

        return offset;
    },

    exitSummary: function () {
        clearInterval(this.GetScroll);
    }
};

Enterprise.Tabs = Class.create();
Object.extend(Enterprise.Tabs.prototype, {
    initialize: function (container) {
        this.container = $(container);
        this.container.addClassName('tab-list');
        this.tabs = this.container.select('dt.tab');
        this.activeTab = this.tabs.first();
        this.tabs.first().addClassName('first');
        this.tabs.last().addClassName('last');
        this.onTabClick = this.handleTabClick.bindAsEventListener(this);
        for (var i = 0, l = this.tabs.length; i < l; i ++) {
            this.tabs[i].observe('click', this.onTabClick);
        }
        this.select();
    },
    handleTabClick: function (evt) {
        this.activeTab = Event.findElement(evt, 'dt');
        this.select();
    },
    select: function () {
        for (var i = 0, l = this.tabs.length; i < l; i ++) {
            if (this.tabs[i] == this.activeTab) {
                this.tabs[i].addClassName('active');
                this.tabs[i].style.zIndex = this.tabs.length + 2;
                /*this.tabs[i].next('dd').show();*/
                new Effect.Appear (this.tabs[i].next('dd'), { duration:0.5 });
                this.tabs[i].parentNode.style.height=this.tabs[i].next('dd').getHeight() + 15 + 'px';
            } else {
                this.tabs[i].removeClassName('active');
                this.tabs[i].style.zIndex = this.tabs.length + 1 - i;
                this.tabs[i].next('dd').hide();
            }
        }
    }
});

Enterprise.Slider = Class.create();

Object.extend(Enterprise.Slider.prototype, {
    initialize: function (container, config) {
        this.container = $(container);
        this.config = {
            panelCss: 'slider-panel',
            sliderCss: 'slider',
            itemCss: 'slider-item',
            slideButtonCss: 'slide-button',
            slideButtonInactiveCss: 'inactive',
            forwardButtonCss: 'forward',
            backwardButtonCss: 'backward',
            pageSize: 6,
            scrollSize: 2,
            slideDuration: 1.0,
            slideDirection: 'horizontal',
            fadeEffect: true
        };

        Object.extend(this.config, config || {});

        this.items = this.container.select('.' + this.config.itemCss);
        this.isPlaying = false;
        this.isAbsolutized = false;
        this.offset = 0;
        this.onClick = this.handleClick.bindAsEventListener(this);
        this.sliderPanel = this.container.down('.' + this.config.panelCss);
        this.slider =  this.sliderPanel.down('.' + this.config.sliderCss);
        this.container.select('.' + this.config.slideButtonCss).each(
            this.initializeHandlers.bind(this)
        );
        this.updateButtons();

        Event.observe(window, 'load', this.initializeDimensions.bind(this));
    },
    initializeHandlers: function (element) {
        if (element.hasClassName(this.config.forwardButtonCss) ||
            element.hasClassName(this.config.backwardButtonCss)) {
            element.observe('click', this.onClick);
        }
    },
    handleClick: function (evt) {
        var element = Event.element(evt);
        if (!element.hasClassName(this.config.slideButtonCss)) {
            element = element.up('.' + this.config.slideButtonCss);
        }

        if (!element.hasClassName(this.config.slideButtonInactiveCss)) {
           element.hasClassName(this.config.forwardButtonCss) || this.backward();
           element.hasClassName(this.config.backwardButtonCss) || this.forward();
        }
        Event.stop(evt);
    },
    updateButtons: function () {
        var buttons = this.container.select('.' + this.config.slideButtonCss);
        for (var i = 0, l = buttons.length; i < l; i++) {
            if (buttons[i].hasClassName(this.config.backwardButtonCss)) {
                if (this.offset <= 0) {
                    buttons[i].addClassName(this.config.slideButtonInactiveCss);
                }
                else {
                    buttons[i].removeClassName(this.config.slideButtonInactiveCss);
                }
            } else if (buttons[i].hasClassName(this.config.forwardButtonCss)) {
                if (this.offset >= this.items.length - this.config.pageSize) {
                    buttons[i].addClassName(this.config.slideButtonInactiveCss);
                }
                else {
                    buttons[i].removeClassName(this.config.slideButtonInactiveCss);
                }
            }
        }
    },
    initializeDimensions: function () {
        if ((this.config.slideDirection == 'horizontal' && this.sliderPanel.style.width) ||
            (this.config.slideDirection != 'horizontal' && this.sliderPanel.style.height)) {
            return this;
        }
        var firstItem = this.items.first();
        var offset = 0;
        if (this.config.slideDirection == 'horizontal') {
            offset = (parseInt(firstItem.getStyle('margin-left')) + parseInt(firstItem.getStyle('margin-right'))) * (this.config.pageSize - 1);
            this.sliderPanel.setStyle({width: (firstItem.getDimensions().width * this.config.pageSize + offset) + 'px'});
        } else {
            offset = (parseInt(firstItem.getStyle('margin-bottom')) + parseInt(firstItem.getStyle('margin-top'))) * (this.config.pageSize - 1);
            this.sliderPanel.setStyle({height: (firstItem.getDimensions().height * this.config.pageSize + offset) + 'px'});
        }

        var dimensions = this.sliderPanel.getDimensions();

        var sliderParent = this.sliderPanel.up();
        /*
        dimensions.height += parseInt(sliderParent.getStyle('padding-top'));
        dimensions.height += parseInt(sliderParent.getStyle('padding-bottom'));
        dimensions.width += parseInt(sliderParent.getStyle('padding-left'));
        dimensions.width += parseInt(sliderParent.getStyle('padding-right'));

        if (sliderParent.down('.slide-button')) {
            var buttonDimensions = sliderParent.down('.slide-button').getDimensions();
            if (this.config.slideDirection == 'horizontal') {
                dimensions.width += 2 * buttonDimensions.width;
            } else {
                dimensions.height += 2 * buttonDimensions.height;
            }
        }
        */
        sliderParent.setStyle({
            width: dimensions.width + 'px',
            height: dimensions.height + 'px'
        });
        return this;
    },
    absolutize: function () {
        if (!this.isAbsolutized) {
            this.isAbsolutized = true;
            var dimensions = this.sliderPanel.getDimensions();
            this.sliderPanel.setStyle({
                height: dimensions.height + 'px',
                width: dimensions.width + 'px'
            });

            this.slider.absolutize();
        }
    },

    forward: function () {
        if (this.offset + this.config.pageSize <= this.items.length - 1) {
            this.slide(true);
        }
    },
    backward: function () {
        if (this.offset > 0) {
            this.slide(false);
        }
    },
    slide: function (isForward) {

        if (this.isPlaying) {
            return;
        }
        this.absolutize();
        this.effectConfig = {
            duration: this.config.slideDuration
        };
        if (this.config.slideDirection == 'horizontal') {
            this.effectConfig.x = this.getSlidePosition(isForward).left;
        } else {
            this.effectConfig.y = this.getSlidePosition(isForward).top;
        }
        this.start();

    },
    start: function ()
    {
        if (this.config.fadeEffect) {
            this.fadeIn();
        } else {
            this.move();
        }
    },
    fadeIn: function ()
    {
        new Effect.Fade(this.slider.up('div.slider-panel'), {
            from: 1.0,
            to:0.5,
            afterFinish: this.move.bind(this),
            beforeStart: this.effectStarts.bind(this),
            duration: 0.3
        });
    },
    fadeOut: function ()
    {
        new Effect.Fade(this.slider.up('div.slider-panel'), {
                from: 0.5,
                to:1.0,
                afterFinish: this.effectEnds.bind(this),
                duration: 0.3
        });
    },
    move: function ()
    {
        if (this.config.fadeEffect) {
            this.effectConfig.afterFinish = this.fadeOut.bind(this);
        } else {
            this.effectConfig.afterFinish = this.effectEnds.bind(this);
            this.effectConfig.beforeStart = this.effectStarts.bind(this);
        }

        new Effect.Move(this.slider, this.effectConfig);
    },
    effectStarts: function () {
        this.isPlaying = true;
    },
    effectEnds: function () {
        this.isPlaying = false;
        this.updateButtons();
    },
    getSlidePosition: function (isForward) {
        var targetOffset;
        if (isForward) {
            targetOffset = Math.min(this.items.length - this.config.pageSize, this.offset + this.config.scrollSize)
        }
        else {
            targetOffset = Math.max(this.offset - this.config.scrollSize, 0);
        }
        this.offset = targetOffset;
        var item = this.items[targetOffset];
        var itemOffset = {left:0, top:0};

        itemOffset.left = -(item.cumulativeOffset().left
                       -  this.slider.cumulativeOffset().left + this.slider.offsetLeft);
        itemOffset.top = -(item.cumulativeOffset().top
                       -  this.slider.cumulativeOffset().top + this.slider.offsetTop);
        return itemOffset;
    }
});

Enterprise.PopUpMenu = {
    currentPopUp: null,
    documentHandlerInitialized: false,
    popUpZIndex: 994,
    hideDelay: 2000,
    hideOnClick: true,
    hideInterval: null,
    initializeDocumentHandler: function () {
        if (!this.documentHandlerInitialized) {
            this.documentHandlerInitialized = true;
            Event.observe(
                document.body,
                'click',
                this.handleDocumentClick.bindAsEventListener(this)
            );
        }
    },
    handleDocumentClick: function (evt) {
        if (this.currentPopUp !== null) {
            var element = Event.element(evt);
            if (!this.currentPopUp.onlyShowed && this.hideOnClick) {
                this.hide();
            } else {
                this.currentPopUp.onlyShowed = false;
            }
        }
    },
    handlePopUpOver: function (evt) {
        if (this.currentPopUp !== null) {
            this.currentPopUp.removeClassName('faded');
            this.resetTimeout(0);
        }
    },
    handlePopUpOut: function (evt) {
        if (this.currentPopUp !== null) {
            this.currentPopUp.addClassName('faded');
            this.resetTimeout(1);
        }
    },
    show: function (trigger) {
        this.initializeDocumentHandler();

        var container = $(trigger).up('.switch-wrapper');
        if (!$('popId-' + container.id)) {
            return;
        }

        if (this.currentPopUp !== null && $('popId-' + container.id) !== this.currentPopUp) {
            this.hide(true);
        } else if (this.currentPopUp !== null && this.currentPopUp === $('popId-' + container.id)) {
            this.hide();
            return;
        }

        this.currentPopUp = $('popId-' + container.id);
        this.currentPopUp.container = container;
        this.currentPopUp.container.oldZIndex = this.currentPopUp.container.style.zIndex;
        this.currentPopUp.container.style.zIndex = this.popUpZIndex;
        new Effect.Appear(this.currentPopUp, { duration:0.3 });


        if (!this.currentPopUp.isHandled) {
            this.currentPopUp.observe('mouseover', this.handlePopUpOver.bindAsEventListener(this));
            this.currentPopUp.observe('mouseout', this.handlePopUpOut.bindAsEventListener(this));
            this.currentPopUp.isHandled = true;
        }
        this.currentPopUp.onlyShowed = true;
        this.currentPopUp.container.down('.switcher').addClassName('list-opened');
        this.resetTimeout(2);
    },
    hide: function () {
        if (this.currentPopUp !== null) {
            if (arguments.length == 0) {
                new Effect.Fade(this.currentPopUp, {duration: 0.3});
            } else {
                this.currentPopUp.hide();
            }
            this.currentPopUp.container.style.zIndex = this.currentPopUp.container.oldZIndex;
            this.resetTimeout(0);
            this.currentPopUp.container.down('.switcher').removeClassName('list-opened');
            this.currentPopUp = null;
        }
    },
    resetTimeout: function (delay) {
        if (this.hideTimeout !== null) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        if (delay) {
            this.hideTimeout = setTimeout(
                this.hide.bind(this),
                this.hideDelay * delay
            );
        }
    }
};


function popUpMenu(element) {
   Enterprise.PopUpMenu.show(element);
}
/*
function popUpMenu(element,trigger) {
        var iDelay = 2000;
        var new_popup = 0;
        var sTempId = 'popUped';
        if (document.getElementById(sTempId)) {
            var eTemp = document.getElementById(sTempId);
            $(sTempId).previous(0).down('.switcher').removeClassName('list-opened');
            new Effect.Fade (eTemp, { duration:0.3 });
            eTemp.id = sNativeId;
            clearTimeout(tId);
            document.onclick = null;
        }

        sNativeId = 'popId-'+$(element).up(1).id;
        var el = $(sNativeId);
        el.id = sTempId;

        if (eTemp && el == eTemp) {
            hideElement();
        } else {
            $(element).addClassName('list-opened');
            $(sTempId).getOffsetParent().style.zIndex = 994;
            new Effect.Appear (el, { duration:0.3 });
            tId=setTimeout("hideElement()",2*iDelay);
        }
        new_popup = 1;
        document.onclick = function() {
            if (!new_popup) {
                hideElement();
                document.onclick = null;
            }
            new_popup = 0;
        }

        el.onmouseout = function() {
            if ($(sTempId)) {
                $(sTempId).addClassName('faded');
                tId=setTimeout("hideElement()",iDelay);
            }
        }

        el.onmouseover = function() {
            if ($(sTempId)) {
                $(sTempId).removeClassName('faded');
                clearTimeout(tId);
            }
        }

        hideElement = function() {
            //el.hide();
            new Effect.Fade (el, { duration:0.3 });
            $(element).removeClassName('list-opened');
            el.getOffsetParent().style.zIndex = 1;
            el.id = sNativeId;
            if (tId) {clearTimeout(tId);}
        }
} */

Enterprise.Widget = Class.create({
    _node: null,
    _children: [],

    initialize: function (node) {
        this._node = node;
    },

    getNode: function() {
        return this._node;
    },

    /**
     * @param {Enterprise.Widget} widget
     */
    addChild: function(widget) {
        this._children.push(widget);
        var children = $(this._node).immediateDescendants(),
            exists = false;
        $(this._node).immediateDescendants().each(function(child) {
            if (child == widget.getNode()) {
                exists = true;
            }
        });
        if (!exists) {
            widget.placeAt(this._node);
        }
    },

    placeAt: function(node) {
        $(node).insert(this._node);
    }
});

Enterprise.Widget.Dialog = Class.create(Enterprise.Widget, {

    _title: '',

    _titleNode: {},

    _contentNode: {},

    _backNode: {},

    _isPlaced: false,

    initialize: function ($super, title, content, additionalClass) {
        this._title = title;
        //this._node = new Element('div', {'class': 'popup-block block', 'style': {'display': 'none'}});
        this._node = new Element('div', {'class': 'popup-block block'});
        this._node.addClassName(additionalClass);
        //this._windowOverlay = new Element('div', {'class': 'window-overlay', 'style': {'display': 'none'}});
        this._windowOverlay = new Element('div', {'class': 'window-overlay'});
        var headerNode = new Element('div', {'class': 'block-title'});
        this._titleNode = new Element('strong').update(title);
        this._closeButton = new Element('div', {'class': 'btn-close'}).update('Close');
        $(this._closeButton).onclick = (function() {
            this.hide();
        }).bind(this);
        headerNode.insert(this._titleNode);
        headerNode.insert(this._closeButton);
        this._node.insert(headerNode);

        this._contentNode = new Element('div', {'class': 'block-content'});
        this._contentNode.insert(content);

        this._node.insert(this._contentNode);
    },

    place: function() {
        $(document.body).insert(this._windowOverlay);
        $(document.body).insert(this._node);
        this._isPlaced = true;
    },

    setTitle: function(title) {
        $(this._titleNode).update(title);
    },

    setContent: function(content) {
        $(this._contentNode).update(content);
    },

    getContent: function() {
        return this._contentNode;
    },

    show: function() {
        if (!this._isPlaced) {
            this.place();
        }
        //$(this._windowOverlay).setStyle({'display':'block'});
        $(this._windowOverlay).addClassName('active');
        this._windowOverlay.style.height=$$('body')[0].getHeight()+'px';
        //$(this._node).setStyle({'display': 'block'});
        $(this._node).addClassName('active');
    },

    hide: function() {
        //$(this._windowOverlay).setStyle({'display':'none'});
        $(this._windowOverlay).removeClassName('active');
        //$(this._node).setStyle({'display':'none'});
        $(this._node).removeClassName('active');
    },

    setBusy: function(state) {
        if (state) {
            $(this._node).addClassName('loading');
        } else {
            $(this._node).removeClassName('loading');
        }
    },

    destroy: function() {
        $(this._node).remove();
    }
});

Enterprise.Widget.SplitButton = Class.create(Enterprise.Widget, {
    _list: null,
    _templateString: '<strong><span></span></strong>' +
        '<a href="#" class="change"></a>' +
        '<div class="list-container">' +
            '<ul>' +
            '</ul>' +
        '</div>',

    initialize: function($super, title, alt, type) {
        if (typeof title != 'string') {
            $super(title);
        } else {
            $super(new Element('div', {'class': 'split-button split-button-created' + ((type)? ' ' + type: '')}));
            this._node.update(this._templateString);
            this._node.down('strong span').update(title);
            this._node.down('.change').update(alt);
        }
        Event.observe($(this._node).down('strong'), 'click', (function(event){this.onClick(event);}).bind(this));

        this._node.down('.change').setAttribute('tabindex', 20);
        this._list = $(this._node).down('ul');
        Event.observe($(this._node).down('.change'), 'click', this.onToggle.bind(this));
        Event.observe($(this._node).down('.change'), 'blur', this.close.bind(this));
    },

    onClick: function(event) {
    },

    onToggle: function(event) {
        Event.stop(event);
        if (this.isOpened()) {
            this.close();
        } else {
            this.open();
        }
    },

    isOpened: function() {
        return $(this._node).hasClassName('active');
    },

    open: function() {
        $(this._node).addClassName('active');
        this.onOpen();
    },

    onOpen: function() {
    },

    close: function() {
        $(this._node).removeClassName.bind($(this._node), 'active').delay(0.2);
        this.onClose();
    },

    onClose: function() {
    },

    /**
     * @param {Enterprise.Widget.SplitButton.Option} option
     */
    addOption: function(option) {
        option.placeAt(this._list);
        option.onClick = option.onClick.wrap((function(proceed) {
            proceed();
            this.close();
        }).bind(this));
    }
});

Enterprise.Widget.SplitButton.Option = Class.create(Enterprise.Widget, {

    initialize: function($super, title, type) {
        $super(new Element('li', {'class' : type ? type : null}));
        this._node.update('<span title="' + title + '">' + title + '</span>');
        Event.observe(this._node, 'click', (function(){this.onClick()}).bind(this));
    },

    getNode: function() {
        return this._node;
    },

    onClick: function() {

    }
})

Enterprise.loadSplitButtons = function() {
    if (typeof Enterprise.splitButtonsLoaded == 'undefined') {
        Enterprise.splitButtonsLoaded = true;
        $$('.split-button').each(function(node) {
            if (!$(node).hasClassName('split-button-created')) {
                new Enterprise.Widget.SplitButton(node);
            }
        });
    }
};

Enterprise.textOverflow = function(elem) {
    var container = $(elem);
    if (container.getStyle('overflow') == 'hidden') {
        var inner = container.down(0);
        var initialHeight = container.getHeight();
        if (inner.getHeight() > initialHeight) {
            var words = inner.innerHTML.split(' ');
            var test = new Element('span', {'style': 'visibility:hidden;'});
            test.style.width = container.getWidth();
            container.insert(test);
            var tempString = '';
            for (var i = 0; $(test).getHeight() <= initialHeight || i < words.legth; i++) {
                tempString = tempString + words[i] + ' ';
                test.update(tempString)
            };
            var finalstring = (words.slice(-words.length, i - 2)).join(' ');
            test.remove();
            inner.update(finalstring + '&hellip;');
        }
    }
};
Event.observe(document, 'dom:loaded', Enterprise.loadSplitButtons);

function heightAdjustGrid(numItemsPerRow) {

    var maxHeight = 0, rows = Array(), i = 1, row = Array(), j = 1, numHeadings = jQuery('.products-grid li h5').size();

    // Put headings in row array
    jQuery('.products-grid li h5').each(function(){
        row.push(this);
        if(i == numItemsPerRow || j == numHeadings) {
            rows.push(row);
            row = [];
            i = 0;
        }
        i++;
        j++;
    });

    // Loop through each row and set height per row
    jQuery.each(rows, function(i, l){
        jQuery.each(rows[i], function(){
            maxHeight = maxHeight < jQuery(this).height() ? jQuery(this).height() : maxHeight;
        });
        jQuery.each(rows[i], function(){
            jQuery(this).css('height', maxHeight);
        });
        maxHeight = 0;
    });

    row = Array(), rows = Array(), i = 1, j = 1, maxHeight = 0;

    // Loop through each row and set height per row
    jQuery.each(rows, function(i, l){
        jQuery.each(rows[i], function(){
            maxHeight = maxHeight < jQuery(this).height() ? jQuery(this).height() : maxHeight;
        });
        jQuery.each(rows[i], function(){
            jQuery(this).css('height', maxHeight);
        });
        maxHeight = 0;
    });
}

jQuery(document).ready(function ($) {

    /* Focus handler for footer newsletter subscribe
     ----------------------------------------------------------
     */
    $('.newsletter-subscription-field').focus(function () {
        $('.newsletter-subscription-field').val('');
    });

    /* Adjust height on grid rows */
    heightAdjustGrid(4);
});
function getViewMode(windowWidth) {

    var viewMode = '';

    if(windowWidth > 1199) {
        viewMode = 'large';
    } else if(windowWidth > 979) {
        viewMode = 'default';
    } else if(windowWidth > 767) {
        viewMode = 'portraitTablet';
    } else if(windowWidth < 768 && windowWidth > 480) {
        viewMode = 'phonesToTablets';
    } else {
        viewMode = 'phones';
    }

    return viewMode;
}

function copyFooterMenu (viewMode){

    // If not yet added, then add...
    if(jQuery('#sitemap-and-advanced-search-wrapper').find('.bottomlinks').size() < 1) {
        jQuery('#sitemap-and-advanced-search-wrapper').append('<div class="content">' + jQuery('#footer-bottom-menu').html() + '</div>');
    }
}

function resetInlineStyles () {
    jQuery("#footer .heading i, #footer .content").removeAttr('style');
    jQuery('#search_mini_form').show();
    jQuery('#nav').show();
}

jQuery(document).ready(function ($) {

    /* Toggle search field on phone
     ----------------------------------------------------------
     */
    $('#toggle-search').click(function (e) {
        e.preventDefault();
        $('#search_mini_form').toggle();
    });

    /* Toggle main nav on phone
     ----------------------------------------------------------
     */
    $('#toggle-nav').click(function (e) {
        e.preventDefault();
        $('#nav').toggle();
    });

    /* Toggle footer boxes on phone
     ----------------------------------------------------------
     */
    $('#footer h5.heading').click(function () {
        if ($(window).width() < 769) {
            $(this).closest('div').find('.content').toggle();
            $(this).find('i').toggle();
        }
    });

    /* Fix list heights on document ready
     ----------------------------------------------------------
     */
    var viewMode = getViewMode($(window).width());
    if(viewMode == 'default' || viewMode == 'large') {
        heightAdjustGrid(4);
    }
    else if(viewMode == 'portraitTablet') {
        heightAdjustGrid(3);
    }
    else {
        heightAdjustGrid(2);
        copyFooterMenu();
    }

    /* Custom responsive handling for footer menu and grid lists..
     --------------------------------------------------------------
     */
    $(window).resize(function() {

        if(viewMode != getViewMode($(window).width())){

            viewMode = getViewMode($(window).width());

            // Fix list heights on window resize
            if(viewMode == 'default' || viewMode == 'large') {
                heightAdjustGrid(4);
                resetInlineStyles();
            }
            else if(viewMode == 'portraitTablet') {
                heightAdjustGrid(3);
                resetInlineStyles();
            }
            else {
                copyFooterMenu(viewMode);
                heightAdjustGrid(2);
            }
        }
    });
});

var AddToCartAjax = Class.create({

    initialize: function(options){

        var defaults = {
            addUrl: '',
            addFromWishlistUrl: '',
            removeUrl: '',
            redirectUrl: '',
            overlayHexColorCode: '',
            overlayOpacity: '0.5',
            popupTimeout: '10',
            popupFadeoutDuration: '0.5',
            defaultQty: '1',
            confirmDeleteMessage: '',
            popupWidth: '255',
            afterCartUpdateFunc: null,
            showPopupWhenAdding: true,
            beforeAddFunc: null
        };

        this.options = Object.extend(defaults, options);

        this.options.popupTimeout = parseInt(parseFloat(this.options.popupTimeout) * 1000);
    },

    add: function(clickedNode, productId, buyRelated, callback, serialPair){

        this.callback = (typeof callback == 'function') ? callback  : this.callback =  function() { console.log('cart call back missing') };
        this.serialPair = (typeof serialPair == 'string') ? serialPair  : '';

        /* BeforeAddFunc is where we can add our custom validation...
        ... or any other feature we like..
        */
        if( this.options.beforeAddFunc && !this.options.beforeAddFunc() ){
            return false;
        }

        this.buyRelated = (typeof buyRelated == 'undefined' || buyRelated === '') ? false : buyRelated;

        if(!this.isLoading){

            var qty = this.options.defaultQty;

            if ($('qty_' + productId) != null) {
                qty = $F('qty_' + productId);
            }

            var params = '';
            var formNode = $(clickedNode).up('form');

            this.parent = $(clickedNode).up('.item');

            if(typeof(formNode) == 'undefined'){
                params = 'product=' + productId + '&qty=' + qty;
            }
            else {

                var varienForm = new VarienForm($(formNode).readAttribute('id'));

                if (!varienForm.validator.validate()) {
                    return false;
                }
                params = $(formNode).serialize();
                params += '&product=' + productId;
            }
            if(this.buyRelated){
                params += '&buyRelated=' + this.buyRelated;
                this.showRelated();
                this.isLoading = true;
            }
            else{
                params += '&buyRelated=' + this.buyRelated;

                this.isLoading = true;

                this.resetPopup();

                if(this.options.showPopupWhenAdding == '1'){
                    this.showPopup();
                }

            }

            var r = new Ajax.Request(this.options.addUrl,
                {
                    method: 'post',
                    parameters: params,
                    onSuccess: this.onSuccess.bind(this),
                    onFailure: this.onFailure.bind(this)
                });
        }
        else {
            return false;
        }
    },
    addByString: function(params, buyRelated){

        this.buyRelated = (typeof buyRelated == 'undefined') ? false : buyRelated;

        if(!this.isLoading){
            if(this.buyRelated){
                params += '&buyRelated=' + this.buyRelated;
                this.showRelated();
                this.isLoading = true;
            }
            else{
                params += '&buyRelated=' + this.buyRelated;

                this.isLoading = true;

                this.resetPopup();
                this.showPopup();
            }

            var r = new Ajax.Request(this.options.addUrl,
                {
                    method: 'post',
                    parameters: params,
                    onSuccess: this.onSuccess.bind(this),
                    onFailure: this.onFailure.bind(this)
                });
        }
        else {
            return false;
        }
    },
    addFromWishList: function(itemId){

        if(!this.isLoading){

            var params = '',
                qty = 1;

            var form = $('wishlist-view-form');
            if (form) {
                var input = form['qty[' + itemId + ']'];
                if (input) {
                    qty = input.value;
                }
            }

            params = 'item=' + itemId + '&qty=' + qty;

            this.isLoading = true;

            this.resetPopup();
            this.showPopup();

            var r = new Ajax.Request(this.options.addFromWishlistUrl,
                {
                    method: 'post',
                    parameters: params,
                    onSuccess: this.onSuccess.bind(this),
                    onFailure: this.onFailure.bind(this)
                });
        }
        else {
            return false;
        }
    },

    remove: function(clickedNode, productId){

        if(!this.isLoading){

            this.resetPopup();
            this.showPopup();

            $('atca-button-container').show();
            $('atca-please-wait').hide();

            // Hide contine shop buttons
            $('atca-continue-btn').hide();
            $('atca-redirect-btn').hide();

            // Show atca yes no buttons
            $('atca-no-btn').show();
            $('atca-yes-btn').show();

            $('atca-message-text').update(this.options.confirmDeleteMessage);
            $('atca-message-text').addClassName('atca-notice');
            $('atca-message-text').show();

            this.productId = productId;


        }
        else {
            return false;
        }
    },

    dontRemove: function(){
        this.closePopup();
    },

    continueRemove:function(){

        var url = this.options.removeUrl;

        var params = '';
        params += 'id/' + this.productId;

        url += params;

        this.isLoading = true;

        this.resetPopup();
        $('atca-message-text').hide();
        $('atca-please-wait-remove').show();

        this.isRemoving = true;

        var r = new Ajax.Request(url,
            {
                method: 'get',
                onSuccess: this.onSuccess.bind(this),
                onFailure: this.onFailure.bind(this)
            });
    },

    onSuccess: function(transport){

        if(transport && transport.responseText){

            try{
                response = eval('(' + transport.responseText + ')');
            }
            catch(e){
                response = {};
            }

            $('atca-please-wait').hide();
            $('atca-please-wait-remove').hide();

            if($('atca-please-wait-related')){
                this.pleaseWaitContainer.hide();
                this.pleaseWaitImageContainer.hide();
            }
            if($('atca-please-wait-related') && !response.redirectRelated){
                this.relatedtimeout = setTimeout(function(){
                    this.relatedContainer.hide();
                    this.relatedText.hide();
                    this.relatedImage.hide();
                }.bind(this),2000);
            }

            /*
                Redirect to product page if product has mandatory options or if
                standing on cart/checkout-page and cart has been emptied.
            */
            if(response.redirect){

                // Show notice message
                $('atca-message-text').update(response.redirect.message);
                $('atca-message-text').addClassName('atca-notice');
                $('atca-message-text').show();

                // Redirect
                window.location = response.redirect.url;
                return false;
            }

            /*
                Redirect to product page if product has mandatory options or if
                standing on cart/checkout-page and cart has been emptied.
            */
            if(response.redirectRelated){

                $('atca-message-text').hide();
                this.relatedText.show();
                this.relatedImage.show();

                // Show notice message
                this.relatedText.update(response.redirectRelated.message);
                this.relatedText.addClassName('atca-notice');
                this.relatedImage.addClassName('atca-notice');

                // Redirect
                window.location = response.redirectRelated.url;
                return false;
            }

            // Something went wrong...
            if(response.error){
                $('atca-message-text').update(response.error.message);
                $('atca-message-text').addClassName('atca-error');
                if(response.error.html && $('atca-cart')){
                    $('atca-cart').update(response.error.html);
                    if( this.options.afterCartUpdateFunc ){
                        this.options.afterCartUpdateFunc();
                    }
                }
            }

            // Something went wrong...
            if(response.errorRelated){

                $('atca-message-text').hide();
                this.relatedText.show();
                this.relatedImage.show();

                this.relatedText.update(response.errorRelated.message);
                this.relatedText.addClassName('atca-error');
                this.relatedImage.addClassName('atca-error');

                if(response.errorRelated.html && $('atca-cart')){
                    $('atca-cart').update(response.errorRelated.html);

                    if( this.options.afterCartUpdateFunc ){
                        this.options.afterCartUpdateFunc();
                    }
                }

            }

            // Yeah, added/removed successfully!
            if(response.success){

                //Cookie.updateSerial(window.currentSerialPair);
                this.callback();

                $('atca-message-text').update("THE PRODUCT WAS ADDED TO BASKET!");
                $('atca-related-container').update(response.success.buyRelated);
                $('atca-message-text').addClassName('atca-success');

                // Update cart
                if($('atca-cart')){
                    $('atca-cart').update(response.success.html);

                    if(response.success.html_quickcheckoutcart){
                        if($('quickcheckoutcart-cart-container')){
                            $('quickcheckoutcart-cart-container').update(response.success.html_quickcheckoutcart);
                            $('quickcheckoutcart-cart-container').fire('quickcheckoutcart:aftercartupdate');
                        }
                    }

                    if(response.success.wishlist_html){
                        $$('.my-wishlist').each(function(node){
                            node.replace(response.success.wishlist_html);
                        }.bind(this));
                    }

                    var itemCountNumber = (typeof(response.successRelated) === 'object') ? response.successRelated.itemCount : response.success.itemCount,
                    itemQtyNumber = (typeof(response.successRelated) === 'object') ? response.successRelated.itemQty : response.success.itemQty;

                    // JS hooks
                    $('atca-cart').fire('addtocartajax:update', { itemCount: itemCountNumber, itemQty: itemQtyNumber });
                    $('atca-cart').fire('quickcheckout:reload');

                    if( this.options.afterCartUpdateFunc ){
                        this.options.afterCartUpdateFunc();
                    }
                }

                if(response.cart_is_empty){
                    $('atca-redirect-btn').hide();

                    $('atca-continue-btn').setStyle({
                        'float': 'none'
                    });
                }
            }

            // Yeah, added/removed successfully!
            if(response.successRelated){

                $('atca-message-text').hide();
                this.relatedText.show();
                this.relatedImage.show();
                this.relatedText.update(response.successRelated.message);
                this.relatedText.addClassName('atca-success');
                this.relatedImage.addClassName('atca-success');

                // Update cart
                if($('atca-cart')){
                    $('atca-cart').update(response.successRelated.html);

                    if(response.successRelated.html_quickcheckoutcart){
                        if($('quickcheckoutcart-cart-container')){
                            $('quickcheckoutcart-cart-container').update(response.successRelated.html_quickcheckoutcart);
                            $('quickcheckoutcart-cart-container').fire('quickcheckoutcart:aftercartupdate');
                        }
                    }

                    if(response.successRelated.wishlist_html){
                        $$('.my-wishlist').each(function(node){
                            node.replace(response.successRelated.wishlist_html);
                        }.bind(this));
                    }

                    // JS hooks
                    $('atca-cart').fire('addtocartajax:update');
                    $('atca-cart').fire('quickcheckout:reload');

                    if( this.options.afterCartUpdateFunc ){
                        this.options.afterCartUpdateFunc();
                    }
                }

                if(response.cart_is_empty){
                    $('atca-redirect-btn').hide();

                    $('atca-continue-btn').setStyle({
                        'float': 'none'
                    });
                }

            }
            if(!response.successRelated){
                $('atca-message-text').show();
                $('atca-related-container').show();
                $('atca-button-container').show();


                // Show checkout button on product page
                if(response.success && $('atca-checkoutbutton')){
                    $('atca-checkoutbutton').setStyle({
                        display: 'block'
                    });
                }
                if(!response.success.buyRelated){
                    this.timeout = setTimeout(function(){
                        this.closePopup();
                    }.bind(this),this.options.popupTimeout);
                }

            }
            this.isLoading = false;
            this.isRemoving = false;
        }
    },

    onFailure: function(){
        this.closePopup();
    },

    resetPopup: function(){

        if($('atca-continue-btn')){
            $('atca-continue-btn').setStyle({
                'float': 'left'
            });
        }

        if($('atca-no-btn')){
            $('atca-no-btn').hide();
        }

        if($('atca-yes-btn')){
            $('atca-yes-btn').hide();
        }

        if($('atca-continue-btn')){
            $('atca-continue-btn').show();
        }

        if($('atca-redirect-btn')){
            $('atca-redirect-btn').show();
        }

        if($('atca-message-text')){
            $('atca-message-text').hide();
        }

        if($('atca-related-container')){
            $('atca-related-container').hide();
        }

        if($('atca-button-container')){
            $('atca-button-container').hide();
        }

        if($('atca-message-text')){
            $('atca-message-text').removeAttribute('class');
        }

    },

    showPopup: function(){

        // Overlay functionality
        if(this.options.overlayHexColorCode != ''){

            var viewport = document.viewport.getDimensions();
            var windowHeight = viewport.height;

            var bodyNode = $$('body')[0];
            var bodyHeight = bodyNode.getHeight();

            if(bodyHeight > windowHeight){
                windowHeight = bodyHeight;
            }

            if(!this.overlayObserverHasBeenAdded){
                $('atca-overlay').observe('click', function(e){
                    if(!this.isLoading){
                        this.closePopup();
                    }
                }.bind(this));

                this.overlayObserverHasBeenAdded = true;
            }

            $('atca-overlay').setStyle({
                width: '100%',
                height: windowHeight + 'px',
                background: this.options.overlayHexColorCode,
                opacity: this.options.overlayOpacity,
                zIndex: '199',
                position: 'absolute',
                top: '0',
                left: '0',
                cursor: 'pointer',
                background: 'rgba(255,255,255, '+ this.options.overlayOpacity + ')'
        });

            $('atca-overlay').show();
        }

        $('atca-popup-container').setStyle({
            width: this.options.popupWidth + 'px',
            marginLeft: '-'+(this.options.popupWidth/2)+'px'
        });

        $('atca-popup-container').show();

        if(this.isRemoving){
            $('atca-please-wait-remove').show();
        }
        else {
            $('atca-please-wait').show();
        }


        this.centerElementVertically($('atca-popup-container'));
    },

    showRelated: function(){

        this.pleaseWaitContainer = this.parent.down('#atca-please-wait-related');
        this.pleaseWaitImageContainer = this.parent.down('#atca-please-wait-image-related');
        this.relatedContainer = this.parent.down('#atca-message-text-related-container');
        this.relatedText = this.parent.down('#atca-message-text-related');
        this.relatedImage = this.parent.down('#atca-message-image-related');

        this.relatedText.hide();
        this.relatedImage.hide();

        this.relatedContainer.show();
        this.pleaseWaitContainer.show();
        this.pleaseWaitImageContainer.show();

    },

    closePopup: function(){

        clearTimeout(this.timeout);

        Effect.Fade('atca-popup-container', { duration: this.options.popupFadeoutDuration });

        if($('messages_product_view')){
            Effect.Fade('messages_product_view', { duration: this.options.popupFadeoutDuration });
        }

        if($('atca-overlay')){
            Effect.Fade('atca-overlay', { duration: this.options.popupFadeoutDuration });
        }

        this.isLoading = false;
    },

    centerElementVertically: function(element){

        if($(element) != null){
            var viewport = document.viewport.getDimensions();
            var windowHeight = viewport.height;

            var scrollOffsets = document.viewport.getScrollOffsets();
            var scrollTop = scrollOffsets.top;

            var yPos = Math.round(windowHeight/2) + scrollTop;
            yPos = yPos - ($(element).getHeight()/2)

            $(element).setStyle({
                top: yPos + 'px'
            });
        }
    },

    redirect: function(url){

        url = typeof(url) != 'undefined' ? url : '';

        if(url == ''){
            url = this.options.redirectUrl;
        }

        window.location = url;
    }
});


var MultiOptionFilter = Class.create(
{
    initialize: function(url, ajax_search_layered,extra_updatehtml_func,filter_preaction_func,use_exploded_ajaxmenu, use_history_pushState) {
        this.url = url;
        this.ajax_search_layered = ajax_search_layered;
        this.extra_updatehtml_func = extra_updatehtml_func;
        this.filter_preaction_func = filter_preaction_func;
        this.href_extract_func = null;
        this.live_req_cnt = 0;
        this.use_exploded_ajaxmenu = use_exploded_ajaxmenu;
        this.use_history_pushState = use_history_pushState;
        this.use_loader = 1;
        this.prefetch_next_page = 0;
        this.autoload_page = 1;
        this.uses_gradual_autoload = false;
        this.uses_scroll_autoload = false;
        this.scroll_autoload_triggered = false;
        this.before_autoload_insert_func = null;

        var options = (typeof mof_filter_options !== "undefined" ? mof_filter_options : "");
        var options = (typeof mof_filter_options !== "undefined" ? mof_filter_options : "");
        this.autoload_request_params = options;
        this.request_params = options;
        this.request_url = url;

        this.resetObserverArrays();
		this.addEventListenersToFilterLinks();
	},

    addUpdateLayeredPanelHooks: function( hook_before_update, hook_after_update ){
        this.hook_before_update = hook_before_update;
        this.hook_after_update = hook_after_update;
    },

    setExtraUpdateHtmlFunc: function( extra_updatehtml_func ){
        this.extra_updatehtml_func = extra_updatehtml_func;
    },

    setExtraUpdateHtmlFuncAfterListeners: function( extra_updatehtml_func_after_listeners ){
        this.extra_updatehtml_func_after_listeners = extra_updatehtml_func_after_listeners;
    },

    setFilterPreactionFunc: function( filter_preaction_func ){
        this.filter_preaction_func = filter_preaction_func;
    },

    setExplodedMenuUpdateFunc: function( exploded_menu_update_func ){
        this.exploded_menu_update_func = exploded_menu_update_func;
    },

    setHrefExtractFunc: function( href_extract_func ){
        this.href_extract_func = href_extract_func;
    },

    setPrefetchNextPage: function( prefetch_next_page ){
        this.prefetch_next_page = prefetch_next_page;
    },

    setItemToggleFunc: function( item_toggle_func ){
        this.item_toggle_func = item_toggle_func;
    },

    setUseLoader: function( use_loader ){
        this.use_loader = use_loader;
    },

    setAutoloadBeforeInsertFunc: function( func ){
        this.before_autoload_insert_func = func;
    },

    setUsesScrollAutoload: function( use_it, count ){
        this.uses_scroll_autoload = use_it;
        this.scroll_trigger_count = (typeof count != "undefined" ? count : 15);

        if(use_it) {
            Event.observe(window, 'scroll', function() {
                if(!mof.scroll_autoload_triggered){
                    mof.scrollGradualAutoLoad();
                }
            });
        }
    },

    resetObserverArrays:function(){
        //this.obs_search = new Array();
        this.obs_toolbars_click = new Array();
        this.obs_toolbars_change = new Array();
        this.obs_filter = new Array();
        this.obs_search = new Array();
        this.obs_others = new Array();
        this.obs_dupl_cnt = 0;
    },

    addInStockSwitch: function(){
        var checkBox = $$('.inStockCheckBox');
        if(checkBox){
            checkBox.each(function(node){
                if( this.obs_filter.indexOf(node)<0 ){
                    Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                    this.obs_filter.push(node);
                } else {
                    this.obs_dupl_cnt++; //alert("Found old filt node");
                }
            }.bind(this));
        }
    },


    addEventListenersToFilterLinks:function(){
        this.addInStockSwitch();
		// Remove the original onchange-attributes from selects
        var toolbars = $$('.toolbar');
        toolbars.each(function(node){
            if($(node).select('select').length > 0){
                $(node).select('select').each(function(node){
                    node.removeAttribute('onchange');
                    // IE Fix
                    node.onchange = null;
                }.bind(this));
            }
        }.bind(this));

		// Add listeners to links in layered nav
        //if($$('.header-filter-menu a').length > 0){
        var nodes = $$(".filter-block ul li a");
        nodes.each(function(node){
            if( this.obs_filter.indexOf(node)<0 ){
                Event.observe(node, 'click', this.multiOptionFilterAction.bind(this));
                this.obs_filter.push(node);
            } else {
                this.obs_dupl_cnt++; //alert("Found old filt node");
            }

        }.bind(this));

        var price_range_fields = $$(".filter-block ul li .price_range");
        price_range_fields.each(function(node){
            if( this.obs_filter.indexOf(node)<0 ){
                Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                this.obs_filter.push(node);
            } else {
                this.obs_dupl_cnt++;
            }

        }.bind(this));

		// Add listeners to toolbar links and selects
        toolbars.each(function(node){
            if($(node).select('a').length > 0){
                $(node).select('a').each(function(node){
                    if( this.obs_toolbars_click.indexOf(node)<0 ){
                        Event.observe(node, 'click', this.multiOptionFilterAction.bind(this));
                        this.obs_toolbars_click.push(node);
                    } else {
                        this.obs_dupl_cnt++; //alert("Found old tb cl node");
                    }
                }.bind(this));
            }

            if($(node).select('select').length > 0){
                $(node).select('select').each(function(node){
                    if( this.obs_toolbars_change.indexOf(node)<0 ){
                        Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                        this.obs_toolbars_change.push(node);
                    } else {
                        this.obs_dupl_cnt++; //alert("Found old tb chg node");
                    }
                }.bind(this));
            }
        }.bind(this));

        // Add listeners to Search minifrom - only once
        if( this.ajax_search_layered ){
            var sform = $("search_mini_form");
            if( sform ){
                if( this.obs_search.indexOf(sform)<0 ){
                    Event.observe( sform, 'submit', this.multiOptionFilterAction.bind(this) );
                    this.obs_search.push(sform);
                }
                /*var sbutton = sform.select("button");
                if( sbutton.length>0 ){
                    Event.observe( sbutton[0], 'click', this.multiOptionFilterAction.bind(this) );
                }*/
            }
        }
	},

    // Add custom event listeners from externally
    addNodesToListeners : function ( nodes, event ){
        if( nodes ){
            nodes.each( function(node){
                if( this.obs_others.indexOf(node)<0 ){
                    Event.observe(node, event, this.multiOptionFilterAction.bind(this));
                    this.obs_others.push(node);
                } else {
                    this.obs_dupl_cnt++;
                }
            }.bind(this) );
        }
    },

    getOptionIdFromLink : function( link ){
        var hr_cls = $w(link.className);
        for( var ix=0; ix<hr_cls.length; ix++ ){
            var cls = hr_cls[ix].split("--");
            if( cls.length>1 ) return cls[1];
        }
        this.addNodesToListeners;
    },


    // In exploded menu mode, update the static menu:s links
    updateActiveMenuLinks : function( trigger_node, opt_id ){
        var attrib = this.attrib;
        var out_this = this;
        trigger_node.select("a").each( function(node){
            var qs = node.readAttribute('href'); //.split("?");
            var qso = qs;
            var p = qs.indexOf(attrib+"=");
            if( p>0 && (qs[p-1]=='?' || qs[p-1]=='&') ){
                if( opt_id!="view-all" ){
                    // Found attribute in query string
                    p += attrib.length+1;
                    var pp = p-1;
                    while( (pp=qs.indexOf(opt_id,pp+1))>0 ){
                        // Real hit ?
                        var pr = pp+opt_id.length;
                        if( (qs[pp-1]=='=' || qs[pp-1]==',') &&
                            (pr>=qs.length || qs[pr]=='&' || qs[pr]==',') ){
                            // It was there, so remove it
                            if( qs[pp-1]==',' ) qs = qs.substr(0,pp-1)+qs.substr(pr);
                            else if( qs[pr]!='&' )  qs = qs.substr(0,pp)+qs.substr(pr+1);
                            else qs = qs.substr(0,pp)+qs.substr(pr);
                            break;
                        }
                    }
                    // If p>0 then we have already removed the option (above loop).
                    // Otherwise, insert it
                    if( pp<0 ){
                        var tail = qs.substr(p);
                        qs = qs.substr(0,p)+opt_id;
                        if( tail ){
                            qs += ","+tail;
                        }
                    }
                } else {
                    // We clicked "View all", have to reset all links back to only the original option
                    var pp = qs.indexOf("&",p+1);
                    var qsn = qs.substr(0,p);
                    if( pp>0 ) qsn += qs.substr(pp);
                    qs = qsn;
                }
            }
            else {
                // After "View all", we're happy when the links don't have the attribute nae
                if( opt_id!="view-all" ){
                    if( !node.hasClassName("mof-view-all") ){
                        // If the option is not in the query string, we have to put it there
                        if( qs.indexOf("?")>=0 ) qs += "&";
                        qs += attrib+"="+opt_id;
                    }
                }
            }

            if( opt_id=="view-all" ){
                var node_opt_id = out_this.getOptionIdFromLink( node );
                if( node_opt_id ){
                    if( qs.indexOf("?")>=0 && qs.charAt(qs.length-1)!="&" ) qs += "&";
                    qs += attrib+"="+node_opt_id;
                }
            }

            // Change the href
            node.writeAttribute('href',qs);
        } );
    },

	multiOptionFilterAction : function(e){

		var href = null;
        var realHref = null;
        var params = "";
        var opt_id = null;
        this.trigger_menu = null;
        this.attrib = null;
        var trigger_node = null;

        if( this.href_extract_func ){
            href = this.href_extract_func( e );
        }

		if( href==null ){
            var link = Event.findElement(e, 'A');
            if( link != null ){
                href = link.readAttribute('href');
                if (link.hasAttribute('data-ajax-url')) {
                    realHref = href;
                    href = link.readAttribute('data-ajax-url');
                }
                if( link.hasClassName("mof-view-all") ){
                    opt_id = "view-all";
                } else {
                    // Extract the option ID
                    opt_id = this.getOptionIdFromLink(link);
                }
                // Extract the attribute name
                $(link).ancestors().each( function(node){

                    if( $(node).hasClassName('filter-block') ){

                        trigger_node = node;

                        $w(node.className).each(function(cls){

                            // If it contain -- we select it, no one else is using -- in classnames...
                            if( cls.match(/\-\-/) ){
                                this.trigger_menu = cls;
                                this.attrib = this.trigger_menu.split("--")[1];
                            }

                        }.bind(this));

                    }
                }.bind(this));

                // Callback to app, for process item
                if( this.attrib && this.item_toggle_func ){
                    this.item_toggle_func( link );
                }
            }
            else {
                var price_input = Event.findElement(e, '.price_range');
                if (price_input){
                    params = mof_filter_options;
                    // Clear out old search
                    params = params.replace(/(.*)price=[^\&]*(.*)/,"$1$2");
                    params = params.replace(/(.*)\&\&(.*)/,"$1\&$2");
                    if( params[params.length-1]!='&' ) params += "&";
                    params += 'price=' + price_input.value;

                } else {

                    // most likely a select
                    var select = Event.findElement(e, 'SELECT');
                    if( select ){
                        href = $F(select);
                    }
                    if( !href ){
                        var checkBox = Event.findElement(e, 'input');
                        href = checkBox.readAttribute('data-ajax-url');
                        if (!href) {
                            // Mini search form
                            href = e.element().readAttribute('action');
                            if( href ){
                                //var word = $('search').value;
                                var word = encodeURIComponent( $('search').value );
                                try {
                                    // See if we get the search instruction here
                                    if( word==mof_search_instruction ){
                                        //alert( "Empty search" );
                                        //Event.stop(e);
                                        //return;
                                        // Let it go through to clear all searching
                                        word = "";
                                    }
                                } catch( e ){ }
                                params = mof_filter_options;
                                // Clear out old search
                                params = params.replace(/(.*)q=[^\&]*(.*)/,"$1$2");
                                params = params.replace(/(.*)\&\&(.*)/,"$1\&$2");
                                if( word ){
                                    if( params ){
                                        if( params[params.length-1]!='&' ) params += "&";
                                    }
                                    params += 'q='+word;
                                }
                            }
                        }
                    }
                }
            }
        }

        // We should have a href here. If we continue without it,
        // we will empty out the filters, stop that here
        if( !href || href=="javascript:void(0)" ) return;

        var parts = href ? href.split('?') : [];
        if( !params && parts.length>1 ){
            params = parts[1];
        }

        // Give application a chance if it has a pre-hook
        var processed = false;
        if( this.filter_preaction_func ){
            processed = this.filter_preaction_func( e, this.url, params );
        }

        // Avoid further request processing
        Event.stop(e);

        if( !processed ){
            if( !this.live_req_cnt++ ){
                this.addLoader();
            }
            // Should we use different Ajax call ?
            var url = this.url;
            if( this.attrib && opt_id ){
                url += "ExplodedMenu";
            }

            this.request_url = url;
            this.request_params = params;
            var request = new Ajax.Request(
                url,
                {
                    method:'get',
                    parameters:params,
                    onSuccess: this.updateHtml.bind(this),
                    onFailure: this.ajaxFailure
                }
            );

            // Now modify the hrefs for this menu, once the query is in progress, we need all hrefs in this menu to include it
            if( this.attrib && opt_id && trigger_node ){
                this.updateActiveMenuLinks( trigger_node, opt_id );
            }
        }

        if (realHref !== null && this.use_history_pushState && typeof history.pushState !== "undefined") {
            history.pushState(null, null, realHref);
        }
	},

    intializeNextPage: function() {
       if(this.prefetch_next_page == 1) {
           this.getNextPage();
       }
    },

    getNextPageParams: function(params) {
        var nextPage = false;
        var parts = params.split('&');
        for(i = 0; i<parts.length; i++) {
            var val = parts[i].split('=');
            if(val[0] == 'p') {
                val[1] = (parseInt(val[1])+1);
                nextPage = 'p=' + val[1];
                params = params.replace(parts[i], nextPage);
            }
        }

        if(nextPage == false) {
            params+="&p=2";
        }

        return params;
    },

    getNextPage: function() {
        this.request_params = this.getNextPageParams(this.request_params) + "&__prefetch__=1";
        var request = new Ajax.Request(
                this.request_url,
                {
                    method:'get',
                    parameters:this.request_params
                }
            );
    },

    updateHtml:function(transport){
        //console.log(transport);
        if( transport && transport.responseText!=null ){
            try{
                response = eval('(' + transport.responseText + ')');
            }
            catch (e) {
                response = {};
            }
        }

        /*if(response.error){
            alert(response.message);
            return false;
        }*/

        if( !--this.live_req_cnt ){
            this.removeLoader();
        }
        // If we do not get any panel back, we end up in a dead state. Stop that
        if( response.r_code<0 ){
            // No products returned?
            if( response.r_code==-1 ){
                var msg = "There were no products matching this filter";
                try {
                    msg = ic_mof_empty_nav_panel_msg;
                } catch( e ){ }
                alert( msg );
                return;
            }

            // Session dead?
            if( response.r_code==-2 ){
                // Do full page request
                window.location = mof_base_url;
                return;
            }
        }

        // Empty nav HTML indicates we should keep old panel
        if( typeof response.block_layered_nav != "undefined" ){
            if( response.block_layered_nav.html ){
                var nodes = $$('.block-layered-nav');
                if(nodes){
                    if( this.hook_before_update ) this.hook_before_update(this.trigger_menu);
                    nodes[0].update(response.block_layered_nav.html);
                    if( this.hook_after_update ) this.hook_after_update(this.trigger_menu);
                }
            }
        } else if( typeof response.exploded_menu != "undefined" ){
            // We have received exploded menus in return
            if( this.hook_before_update ) this.hook_before_update(this.trigger_menu);
            var rem = response.exploded_menu;
            for( var a in rem ){
                if( !rem.hasOwnProperty(a) ){
                    continue;
                }
                // Is it a menu ?
                var ul_node = $("filter-ul-id--"+a);
                // Not the triggering menu?
                if( ul_node && a!=this.attrib ){
                    var html = response.exploded_menu[a];
                    if( this.exploded_menu_update_func ){
                        this.exploded_menu_update_func( ul_node, html );
                    } else {
                        ul_node.update(html);
                    }
                }
            }
            if( this.hook_after_update ) this.hook_after_update(this.trigger_menu);
        }


        // List block tagged in some various ways
        var list_elem = $('product-list-container');
        if( !list_elem ){
            if( $$('.category-view').length>0 ){
                list_elem = $$('.category-view')[0];
            } else if( $$('.category-products').length>0 ){
                list_elem = $$('.category-products')[0];
            }
        }
        // We get an error if no listblock found. But that's OK.
        list_elem.update(response.block_product_list.html);

        // Prefetch
        if(this.prefetch_next_page == 1) {
            this.getNextPage();
        }

        // Update the global query string variable
        mof_filter_options = response.query_string;

        if( this.extra_updatehtml_func ) {
            this.extra_updatehtml_func(response);
        }

        this.addEventListenersToFilterLinks();

        if( this.extra_updatehtml_func_after_listeners ){
            this.extra_updatehtml_func_after_listeners();
        }

        // Trigger auto-load ?
        if( this.uses_gradual_autoload ){
            mof_last_page_num = response.last_page_num;
            this.autoload_page  = 1;
            this.initGradualAutoLoad();
        }
    },

    ajaxFailure:function(){
        //console.log('ajaxfailure');
    },

    centerElementVertically:function(element) {
        if($(element) != null) {

            var viewport = document.viewport.getDimensions();
            var windowHeight = viewport.height;

            var scrollOffsets = document.viewport.getScrollOffsets();
            var scrollTop = scrollOffsets.top;

            var yPos = Math.round(windowHeight/2) + scrollTop;
            yPos = yPos - ($(element).getHeight()/2)

            $(element).style.top = yPos + 'px';
        }
    },

    addLoader:function(){
        if( this.use_loader ){
            var loaderHtml = '<div id="multioptionfilter-loader"><div class="loader"></div></div>';
            $$('body')[0].insert(loaderHtml);
            this.centerElementVertically($('multioptionfilter-loader'));
        }
    },

    removeLoader:function(){
        if( this.use_loader ){
            if($('multioptionfilter-loader')){
                $('multioptionfilter-loader').remove();
            }
        }
    },

    gradualAutoLoadUpdatehtml:function ( transport ){
        //console.log(transport);
        if( transport && transport.responseText!=null ){
            try{
                response = eval('(' + transport.responseText + ')');
            }
            catch (e) {
                response = {};
            }
        }

        // If we do not get any panel back, we end up in a dead state. Stop that
        if( response.r_code<0 ){
            // No particular error handling at this time
            return;
        }

        if( typeof response.block_product_list.html !== "undefined" ){
            // Find the list block
            var list_elem = $('product-list-container');
            if( !list_elem ){
                if( $$('.category-view').length>0 ){
                    list_elem = $$('.category-view')[0];
                } else if( $$('.category-products').length>0 ){
                    list_elem = $$('.category-products')[0];
                }
            }
            if( !list_elem ) return;

            var append_node = list_elem.down(".products-grid");
            if( !append_node ) return;

            // Extract out the inner level of products returned
            var div = new Element("div");
            try{
                div.insert(response.block_product_list.html);
                var inner_list_new = div.down(".products-grid");
                // Run custom function on this ?
                if( this.before_autoload_insert_func ){
                    this.before_autoload_insert_func(inner_list_new);
                }
            } catch( e ){
                var x = 1;
            }

            // Append new products
            var elems = inner_list_new.childElements();
            elems.each( function add(e){
                append_node.insert(e);
            } );

            // Update state and start another batch
            this.autoload_request_params = this.temp_autoload_request_params;
            this.autoload_page++;

            // Only start a new background fetch if we're currently not waiting for real filter response
            if( !this.live_req_cnt && !this.uses_scroll_autoload ){
                this.initGradualAutoLoad();
            }

            if( this.uses_scroll_autoload ){
                mof.scroll_autoload_triggered = false;
            }
        }
    },

    scrollGradualAutoLoad:function(){
        var $itemTotal   = $$(".products-grid .item").length,
            $itemDisplay = this.scroll_trigger_count,
            $itemTrigger = (($itemTotal - $itemDisplay) < $itemDisplay) ? $$(".products-grid .item")[0] : $$(".products-grid .item")[$itemTotal - $itemDisplay],
            $itemOffset  = $itemTrigger.viewportOffset(),
            $viewPort    = document.viewport.getDimensions();

    	if($itemOffset.top < $viewPort.height){
            mof.scroll_autoload_triggered = true;
            mof.initGradualAutoLoad();
    	}
    },

    initGradualAutoLoad:function(){
        // Continue with next auto load ?
        this.uses_gradual_autoload = true;
        if( this.autoload_page < mof_last_page_num ){
            this.temp_autoload_request_params = this.getNextPageParams(this.autoload_request_params);
            var url = this.url+"AutoLoad";
            var request = new Ajax.Request(
                url,
                {
                    method:'get',
                    parameters:this.temp_autoload_request_params,
                    onSuccess: this.gradualAutoLoadUpdatehtml.bind(this),
                    onFailure: this.ajaxFailure
                }
            );
        }
    }

});

//
// Module:      Icommerce_QuickSignup
// Company:     Icommerce Nordic AB
// Developer:   Magnus Eriksson
//
var QuickSignup = Class.create();
QuickSignup.prototype = {

    initialize: function(){
        this.addEventListeners();
    },

    saveCustomer:function(e){

        $("qs-error").setStyle({'display':'none'});
        $("qs-register").setStyle({'display':'none'});
        $("qs-submitting").setStyle({'display':'block'});

        var url = $("qs-form").readAttribute("action");

        // submit values
        new Ajax.Request(url, {
          method: 'get',
          parameters: $('qs-form').serialize(true),
          onSuccess: function(transport) {
            var result = transport.responseText.evalJSON();
            if(result.status == 1){
                //$("qs-submitting").setStyle({'display':'none'});
                $("qs-register").hide();
                window.location.reload();
            }else{
                $("qs-submitting").setStyle({'display':'none'});
                $("qs-register").setStyle({'display':'block'});
                $("qs-error").setStyle({'display':'block'});
                $("qs-error").update(result.message);
            }
          }
        });


    },
    addEventListeners:function(){

        $('qs-form').observe('submit',
            function(event){
                this.saveCustomer();
                Event.stop(event);
            }.bind(this));

    }


}

/*************** Vaimo.JpiFrontend ***************/
/*
 * Developed by Vaimo Sweden AB @ 2012
 *
 * Notes:
 * All the selectors used must have the jQuery syntax.
 * The default selectors correspond to the "Vaimo Imitate" theme. Other themes may require the changing of the selectors.
 *
 * More info: wiki.vaimo.com/docu/wiki
 *
 * flightclub_theme
 *
 */

vJpi();
function vJpi(){

    //"use strict";

    jQuery.fn.vaimoJpiFrontend = function(options, customFunctions, customBinders){

        //Private variables
        var thisProductContainer = this;
        var optionElementToLoad = null;
        var lookupLastPos;
        var lookupLastPos_ix;
        var gallery;

        var settings = jQuery.extend({
            attributeIds : null,
            msg_more_options : null,
            confProductId : null,
            lookup : null,
            mainImageSelector : ".product-image a img",
            categoryListMainImageSelector : "",
            gallerySelector : '.more-views ul',
            galleryImagesSelector : ".more-views a img",
            priceSelector : ".product-options-bottom .price",
            selectedItemInfo : null,
            qty_sel : 0,
            useConfImages : "No",
            useForSimples : "No",
            optionsRenderMethod : "Buttons",
            isGalleryRendered : true,
            enabledDebug : false,
            debugMode : "Console",
            isCategory : false,
            categoryAllowClickOnDisabledOptions : true
        }, options || {});

        var functions = jQuery.extend({
            //The awesome functions
            adjustPrice : function(price) {
                jQuery(settings.priceSelector).each(function(){
                    if (price){
                        thisProductContainer.find(settings.priceSelector).replaceWith(price);
                    }
                });
            },

            adjustPriceHtml : function(price_html) {
                jQuery(settings.priceSelector).each(function(){
                    if (price_html){
                        thisProductContainer.find(settings.priceSelector).replaceWith(price_html);
                    }
                });
            },

            hasStockBelow : function(lut, ix) {
                // Are we at bottom level ?
                if (typeof lut["qty"] != "undefined" && typeof lut["qty"] != "object") {
                    return lut["qty"];
                }

                if (ix < settings.attributeIds.length){
                    // Not at bottom, we need positive result from at least one below
                    for( var optId in lut ){
                        if (lut.hasOwnProperty(optId)){
                            var qtyArray = this.hasStockBelow(lut[optId], ix+1);
                            if( qtyArray ) { return qtyArray; }
                        }
                    }
                }

                // None had stock below, return false
                return false;
            },

            lookupFirstBelow : function(lut, key, ix) {
                // Are we at bottom level ?
                if (typeof lut[key] !="undefined" && lut[key]) {
                    return lut[key];
                }

                // Not at bottom, keep looking deeper
                for (var optId in lut) {
                    if (ix+1 > settings.attributeIds.length) { break; }
                    if (lut.hasOwnProperty(optId)) {
                        var r = this.lookupFirstBelow(lut[optId], key, ix+1);
                        if (r) { return r; }
                    }
                }

                // None had key defined below (or it was empty)
                return false;
            },

            getOptionsStockInfo : function(lut, ix) {
                // Check each option, if it has stock below
                qtyArray = {};
                for( var optId in lut ){
                    if( lut.hasOwnProperty(optId) ){
                        qtyArray[optId] = this.hasStockBelow(lut[optId], ix+1);
                    }
                }
                return qtyArray;
            },

            // This will walk through super attributes after position "ix" and
            // enable or disable buttons according to simple product availability
            enableDisableFromLevel : function(lut, ix, productId){
                // Here we decide if we start from the top of the lookup array.
                if( !lut ){
                    lut = settings.lookup;
                    ix = 0;
                }

                // Keep track of selected variant and qty
                var selectedItemInfo;

                // Go through options, trace selection
                // Enable/disable options according to stock status
                while(ix < settings.attributeIds.length) {
                    var aid = settings.attributeIds[ix];
                    // First disable all nodes on this level
                    jQuery("."+productId+"_jpi_attr_"+aid).each( function() {
                        jQuery(this).attr('disabled', 'disabled');
                    } );

                    // Enable buttons at this level according to stock
                    var stockInfo = this.getOptionsStockInfo(lut, ix);
                    var firstOpt, option;
                    var optionsArray = [];
                    for (var oid2 in stockInfo){
                        if (stockInfo.hasOwnProperty(oid2)){
                            if (!firstOpt ) { firstOpt = oid2; }
                            optionsArray[0] = jQuery('#' + productId + '_jpi_option_' + aid + "-" + oid2); // Buttons
                            optionsArray[1] = jQuery('#' + productId + '_jpi_option_' + aid + "-" + oid2 + "_selectOption"); // Selects
                            for (var i=0; i<optionsArray.length; i++) {
                                option = optionsArray[i];
                                if (option){
                                    if (stockInfo[oid2]){
                                        option.removeAttr('disabled');
                                    }
                                    if (ix == settings.attributeIds.length-1 && option.hasClass("attribute-selected")){
                                        selectedItemInfo = stockInfo[oid2] > 0 ? lut[oid2] : null;
                                    }

                                    // Update main image and price
                                    if(option.hasClass('attribute-selected') && typeof selectedItemInfo != "undefined"){
                                        var price, price_html;
                                        if (selectedItemInfo['price_html'] !== undefined) {
                                            price_html = selectedItemInfo['price_html'];
                                            this.adjustPriceHtml(price_html);
                                        } else {
                                            price = selectedItemInfo['price'];
                                            this.adjustPrice(price);
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // If this option is not available in stock, suppress it
                    var optionElement = jQuery('#' + productId + "_jpi_hidden_attr_" + settings.attributeIds[ix]);
                    var optionValue = optionElement.val();
                    if (optionValue && !stockInfo[optionValue]){
                        optionElement.val('');
                        jQuery('#' + productId + '_jpi_option_' + aid + "-" + optionValue).removeClass("attribute-selected");
                    }

                    //  Continue in LUT
                    lut = lut[ optionValue ? optionValue : firstOpt ];
                    ix++;
                }

                settings.selectedItemInfo = selectedItemInfo;
            },

            restoreOnLoad : function() {
                // Restore the old load function
                if (optionElementToLoad) {
                    optionElementToLoad.onload = this.old_load_f ;
                    optionElementToLoad = null;
                    this.old_load_f = null;
                }
            },

            // Check that all options are specified before adding to cart
            checkAddToCart : function(productId) {
                for (var ix=0; ix < settings.attributeIds.length; ix++ )  {
                    var v = jQuery('#' + productId + "_jpi_hidden_attr_" + settings.attributeIds[ix]).val();
                    if (!v){
                        alert( this.msg_more_options );
                        return false;
                    }
                }
                return true;
            },

            replaceMainImage : function(src, dataZoomImage){
                thisProductContainer.find(settings.mainImageSelector).fadeTo(500,0);

                setTimeout(function(){
                    thisProductContainer.find(settings.mainImageSelector).attr('src', src);
                    thisProductContainer.find(settings.mainImageSelector).attr('data-zoom', dataZoomImage);
                    if (!settings.isCategory) { //On the category page we still need the image to point at the product page
                        thisProductContainer.find(settings.mainImageSelector).parent('a').attr('href', dataZoomImage);
                    }
                    thisProductContainer.find(settings.mainImageSelector).fadeTo(500,1);

                },600);

                return false;
            },

            setMainImageFromGallery : function(){
                if (gallery.length > 0){
                    thisProductContainer.find(settings.mainImageSelector).attr('src', gallery[0].main);
                    thisProductContainer.find(settings.mainImageSelector).attr('data-zoom', gallery[0].zoom);
                    if (!settings.isCategory) { //On the category page we still need the image to point at the product page
                        thisProductContainer.find(settings.mainImageSelector).parent('a').attr('href', gallery[0].zoom);
                    }
                }
            },

            // AdjustGallery takes care of what happens when the gallery is being reloaded. It is invoked by
            // the function optionClick();
            //
            // This must change the thumbnais according to the gallery and also the main image
            adjustGallery : function(useConf) {
                var newSetOfImages = true;
                if (useConf == "No") { useConf = false; } else { useConf = true; }

                if (!useConf) {
                    //It is not enough to replace the href and src in our thumbs because one color may have more images
                    //than another. Let's empty the gallery and rebuild it
                    thisProductContainer.find(settings.gallerySelector).empty();
                    var newGallery = '';
                    for (var i in gallery){
                        if (is_int(i)) {
                            var imageMain = gallery[i].main;
                            var imageThumb = gallery[i].thumb;
                            var imageZoom = gallery[i].zoom;
                            newGallery += '<li class="image-from-simple"><a href="' + imageMain + '"><img src="' + imageThumb + '" data-main="' + imageMain + '" data-zoom="' + imageZoom + '" /></a></li>';

                            if (imageMain ==  thisProductContainer.find(settings.mainImageSelector).attr('src')) {
                                newSetOfImages = false;
                            }
                        }
                    }
                } else {
                    //We must keep the original images there in this case, so we don't empty gallery first
                    thisProductContainer.find(settings.gallerySelector).find('li.image-from-simple').remove();
                    var newGallery = '';
                    for (var i in gallery){
                        if (this.is_int(i)) {
                            var imageMain = gallery[i].main;
                            var imageThumb = gallery[i].thumb;
                            var imageZoom = gallery[i].zoom;
                            newGallery += '<li class="image-from-simple"><a href="' + imageMain + '"><img src="' + imageThumb + '" data-main="' + imageMain + '" data-zoom="' + imageZoom + '" /></a></li>';

                            if (imageMain ==  thisProductContainer.find(settings.mainImageSelector).attr('src')) {
                                newSetOfImages = false;
                            }
                        }
                    }
                }

                thisProductContainer.find(settings.gallerySelector).prepend(newGallery);
                this.bindGalleryImages();

                if (newSetOfImages && !useConf){
                    //setMainImageFromGallery();
                    thisProductContainer.find(settings.gallerySelector).find('li:first-child').click();
                } else if (useConf) {
                    thisProductContainer.find(settings.gallerySelector).find('li:first-child').click();
                }

            },

            is_int : function (value){
                if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
                    return true;
                } else {
                    return false;
                }
            },

            /* optionClick is the function called when the user clicks on a button/selector on the product page
             * and or category page
             *
             * thisButton : The button that invoiced the action
             * attributeId, optionId : Parameters that show the attribute and the value that the click button corresponds to
            */
            optionClick : function ( thisButton, attributeId, optionId, productId ){
                var previouslySelectedOptionId = jQuery('#' + productId + "_jpi_hidden_attr_" + attributeId).val();
                if (previouslySelectedOptionId != optionId || settings.optionsRenderMethod != "Both") { // This is in case we have both select and buttons rendered and connected
                    // We should also make sure that options after jpi_frontend one are adjusted according to stock situation
                    // First walk past already chosen options (which are obviously in stock)
                    var currentLookup = settings.lookup;
                    var ix = 0;
                    while (settings.attributeIds[ix] != attributeId) {
                        var oid = jQuery('#' + productId + "_jpi_hidden_attr_" + settings.attributeIds[ix]).val();
                        if (oid == "") {
                            alert ("optionClick - No value - should not happen");
                        }
                        else {
                            currentLookup = currentLookup[oid];
                        }
                        ix++;
                    }

                    // Handle current attribute, follow it in lookup
                    //currentLookup = currentLookup[opt_id]; ix++;

                    // Change the hidden input
                    jQuery('#' + productId + "_jpi_hidden_attr_" + attributeId).val(optionId);

                    // Remove class on previous selected
                    if (previouslySelectedOptionId) {
                        jQuery(".list-size .js-disabled").removeClass("attribute-selected");
                        jQuery('#' + productId + '_jpi_option_' + attributeId + "-" + previouslySelectedOptionId).removeClass("attribute-selected");
                    }

                    // Add class on selected one
                    jQuery(thisButton).addClass("attribute-selected");

                    // For those that are left, we accept chosen options as long as there are choices in stock
                    this.enableDisableFromLevel(currentLookup, ix, productId);



                    // Store current position in lookup
                    lookupLastPos = currentLookup[optionId];
                    lookupLastPos_ix = ix + 1;
                } else { // Something must still be done
                    jQuery(thisButton).addClass("attribute-selected");
                }
            }

            //End of the functions
        }, customFunctions || {});

        var binders = jQuery.extend({

            bindOptionButtons : function(){
                thisProductContainer.find('.attribute-button-text').on('click', function(){
                    if (jQuery(this).attr('disabled') != 'disabled' || settings.categoryAllowClickOnDisabledOptions) {
                        var productId = jQuery(this).data('productid');
                        var attributeId = jQuery(this).data('attributeid');
                        var optionId = jQuery(this).data('optionid');

                        if (typeof optionId != undefined && optionId != null && optionId != "") {
                            functions.optionClick(this, attributeId, optionId, productId);
                        }
                        jQuery('.attribute-select-text.attribute-' + attributeId).val(optionId);
                    }
                });
            },

            bindOptionSelects : function(){
                thisProductContainer.find('.attribute-select-text').on('change', function(){
                    if (jQuery(this).attr('disabled') != 'disabled') {
                        var productId = jQuery(this).data('productid');
                        var attributeId = jQuery(this).data('attributeid');
                        var optionId = jQuery(this).val();

                        if (typeof optionId != undefined && optionId != null && optionId != "") {
                            functions.optionClick(this, attributeId, optionId, productId);
                        }
                        jQuery('#' + productId + '_jpi_option_' + attributeId + "-" + optionId).click();
                    }
                });
            },

            bindGalleryImages : function(){
                thisProductContainer.find(settings.gallerySelector + ' li').off('click');
                thisProductContainer.find(settings.gallerySelector + ' li').on('click', function(){
                    if (jQuery(this).attr('disabled') != 'disabled') {
                        thisProductContainer.find(settings.gallerySelector + ' li').removeClass('selected');
                        jQuery(this).addClass('selected');
                        functions.replaceMainImage(jQuery(this).children('a').children('img').data('main'), jQuery(this).children('a').children('img').data('zoom'));
                        return false;
                    }
                });
            }
        }, customBinders || {});

        // Build in functions that cannot be overriden
        debugMessage = function (message) {
            if (settings.enabledDebug){
                switch (settings.debugMode) {
                case "Console" :
                    console.log(message);
                    break;
                case "Alert" :
                    alert(message);
                    break;
                case "Both" :
                    console.log(message);
                    alert(message);
                    break;
                }
            }
        };

        if (jQuery(settings.gallerySelector).length == 0) {
            settings.isGalleryRendered = false;
            debugMessage('Vaimo_JpiFrontend debug : The product gallery seems to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
        }

        if (jQuery(settings.mainImageSelector).length == 0) {
            debugMessage('Vaimo_JpiFrontend debug : The main product image seems to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
        }

        if (jQuery(settings.priceSelector).length == 0) {
            debugMessage('Vaimo_JpiFrontend debug : The main product price to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
        }

        if (settings.isCategory) {
            settings.mainImageSelector = settings.categoryListMainImageSelector;
            if (jQuery(settings.categoryListMainImageSelector).length == 0) {
                debugMessage('Vaimo_JpiFrontend debug : The main category product image on the category listing seems to be missing. If it is omitted by design ignore this message. Otherwise check your selector!');
            }
        }

        window.jpiSettings = settings;
        window.jpiFunctions = functions;

        this.each(function () {

            this.attributeIds = settings.attributeIds;
            this.msg_more_options = settings.msg_more_options;
            this.confProductId = settings.confProductId;
            this.lookup = settings.lookup;
            this.mainImageSelector = settings.mainImageSelector;
            this.categoryListMainImageSelector = settings.categoryListMainImageSelector;
            this.gallerySelector = settings.gallerySelector;
            this.galleryImagesSelector = settings.galleryImagesSelector;
            this.priceSelector = settings.priceSelector;
            this.selectedItemInfo = settings.selectedItemInfo;
            this.qty_sel = settings.qty_sel;
            this.useConfImages = settings.useConfImages;
            this.useForSimples = settings.useForSimples;
            this.optionsRenderMethod = settings.optionsRenderMethod;
            this.isGalleryRendered = settings.isGalleryRendered;
            this.enabledDebug = settings.enabledDebug;
            this.debugMode = settings.debugMode;
            this.isCategory = settings.isCategory;
            this.categoryAllowClickOnDisabledOptions = settings.categoryAllowClickOnDisabledOptions;

            this.adjustPrice = functions.adjustPrice;
            this.adjustPriceHtml = functions.adjustPriceHtml;
            this.hasStockBelow = functions.hasStockBelow;
            this.lookupFirstBelow = functions.lookupFirstBelow;
            this.getOptionsStockInfo = functions.getOptionsStockInfo;
            this.enableDisableFromLevel = functions.enableDisableFromLevel;
            this.restoreOnLoad = functions.restoreOnLoad;
            this.checkAddToCart = functions.checkAddToCart;
            this.replaceMainImage = functions.replaceMainImage;
            this.setMainImageFromGallery = functions.setMainImageFromGallery;
            this.adjustGallery = functions.adjustGallery;
            this.optionClick = functions.optionClick;
            this.is_int = functions.is_int;
        });

        //Let's call some function now that the plugin is initialized (remember the document is already 'ready' here)
        if ( settings.useForSimples == 'No' ) { //Default case
            this.get(0).enableDisableFromLevel(false, 0, settings.confProductId);
            switch (settings.optionsRenderMethod) {
                case "Buttons":
                    binders.bindOptionButtons();
                    break;
                case "Selects":
                    binders.bindOptionSelects();
                    break;
                case "Both":
                    binders.bindOptionButtons();
                    binders.bindOptionSelects();
                    //connectButtonsAndSelects();
                    break;
            }

            if (settings.isGalleryRendered && typeof functions.bindGalleryImages!="undefined") { functions.bindGalleryImages(); }
            thisProductContainer.find('.attribute-selected:first-child').click(); //Let's click to invoke the clickOption here
        } else { //Only Image funcitonality needed
            if (settings.isGalleryRendered) { functions.bindGalleryImages(); }
        }
    };

    //Initializing the module
    jQuery(document).ready(function(){
        jQueryinitialized = false;
        var customFunctionsArray = null;
        var customBindersArray = null;
        if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }
        if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }

        jQuery('.product-data-mine').each(function(){
            var lookupMalformedJSON = jQuery(this).data('lookup');
            var JSONLookup = lookupMalformedJSON.replace(/'/g, '\"');
            var jpiSettings = jQuery('.jpi-settings');
            var optionsArray = {
                attributeIds : jQuery(this).data('attributeids'),
                confProductId : jQuery(this).data('confproductid'),
                messageMoreOptions : jQuery(this).data('messagemoreoptions'),
                lookup : jQuery.parseJSON(JSONLookup),
                useConfImages : jpiSettings.data('useimagesfromconfigurable'),
                optionsRenderMethod : jpiSettings.data('optionsrendermethod'),
                enabledDebug : jpiSettings.data('enabledebug'),
                debugMode : jpiSettings.data('debugmode'),
                mainImageSelector : jpiSettings.data('mainimageselector'),
                categoryListMainImageSelector : jpiSettings.data('categorylistmainimageselector'),
                gallerySelector : jpiSettings.data('galleryselector'),
                galleryImageSelector : jpiSettings.data('galleryimageselector'),
                priceSelector : jpiSettings.data('priceselector'),
                isCategory : jpiSettings.data('iscategory')
            };

            if (jpiSettings.data('iscategory')){
                jQuery(this).parents('.item').vaimoJpiFrontend(optionsArray, customFunctionsArray);
            } else {
                jQuery(this).parents('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray);
            }

            jQueryinitialized = true;
        });

        if (!jQueryinitialized) {
            if ( jQuery('.jpi-settings').length > 0 && jQuery('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes') == 'Yes' ) {
                var optionsArray = {
                    useForSimples : jQuery('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes')
                };

                if (jQuery('.jpi-settings').data('iscategory')){
                    jQuery(this).parents('.item').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
                } else {
                    jQuery(this).parents('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
                }
            }
        }
    });

    //Initializing the module for quickview
    jQuery(document).on("quickviewUpdate", function(){
        jQueryinitialized = false;
        var customFunctionsArray = null;
        var customBindersArray = null;
        if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }
        if (!typeof customJpiFunction === undefined){ customFunctionsArray = customJpiFunctions; }

        jQuery('.product-data-mine').each(function(){
            var lookupMalformedJSON = jQuery(this).data('lookup');
            var JSONLookup = lookupMalformedJSON.replace(/'/g, '\"');
            var jpiSettings = jQuery('.jpi-settings');
            var optionsArray = {
                attributeIds : jQuery(this).data('attributeids'),
                confProductId : jQuery(this).data('confproductid'),
                messageMoreOptions : jQuery(this).data('messagemoreoptions'),
                lookup : jQuery.parseJSON(JSONLookup),
                useConfImages : jpiSettings.data('useimagesfromconfigurable'),
                optionsRenderMethod : jpiSettings.data('optionsrendermethod'),
                enabledDebug : jpiSettings.data('enabledebug'),
                debugMode : jpiSettings.data('debugmode'),
                mainImageSelector : jpiSettings.data('mainimageselector'),
                categoryListMainImageSelector : jpiSettings.data('categorylistmainimageselector'),
                gallerySelector : jpiSettings.data('galleryselector'),
                galleryImageSelector : jpiSettings.data('galleryimageselector'),
                priceSelector : jpiSettings.data('priceselector')
            };

            jQuery(this).parents('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
            jQueryinitialized = true;
        });

        if (!jQueryinitialized) {
            if ( jQuery('.jpi-settings').length > 0 && jQuery('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes') == 'Yes' ) {
                var optionsArray = {
                    useForSimples : jQuery('.jpi-settings').data('useimageswitcherfunctionalityforallproducttypes')
                };
                jQuery('.product-essential').vaimoJpiFrontend(optionsArray, customFunctionsArray, customBindersArray);
            }
        }
    });

}

//same code as vertnav
jQuery(document).ready(function($) {

    $('.expandlink').click(function(e){

        e.preventDefault();

        var clickedNode = $(e.target);
        var parentLi = clickedNode.closest('li');

        if(parentLi.hasClass('closed')){
            parentLi.removeClass('closed');
            parentLi.addClass('open');
            parentLi.find('ul').show();
        }
        else {
            parentLi.removeClass('open');
            parentLi.addClass('closed');
            parentLi.find('ul').hide();
        }
    });

    $('.vertnavlink span').each(function(){

        var spanWidth = $(this).width();

        $(this).closest('li').find('.expandlink').each(function(){
            $(this).css('left', (spanWidth + 20) + 'px');
            $(this).show();
        });
    });
});
jQuery(document).ready(function($){
    $('.carousel-nav a').click(function(q){
        q.preventDefault();
        targetSlide = parseInt($(this).attr('data-to'));

        //Cycles the carousel to a particular slide
        $($(this).attr('href')).carousel(targetSlide);

        //Add active-bullet class to current slide
        $(this).addClass('active-bullet').siblings().removeClass('active-bullet');
    });

    $(".carousel").live("slid", function(obj){
        //Change active bullet on slide
        $(this).find('.carousel-nav').children().eq($(this).find('.active').index()).addClass('active-bullet')
            .siblings().removeClass('active-bullet');
    });
});
var $j = jQuery;

$j(document).ready(function() {

});
var jpiContainer = {
    alreadyInCart: new Array(),
    conditionalPairs: new Array(),
    unconditionalPairs: new Array()
};

var showToplinksSubmenu = function() {
    jQuery(".toplinks [data-submenu]").click(function(e) {
        e.preventDefault();
        var thisSubmenu = jQuery(".toplinks-submenu-"+ jQuery(this).data("submenu")),
            allSubmenus = jQuery(".toplinks-submenu .span12"),
            submenuWrapper = jQuery(".toplinks-submenu"),
            allToplinks = jQuery(".toplinks [data-submenu]");

        if (thisSubmenu.length > 0) {
            allToplinks.removeClass("active");

            if(thisSubmenu.is(":hidden")) {
                allSubmenus.hide();
                submenuWrapper.show();
                thisSubmenu.show();
                jQuery(this).addClass("active");
            } else {
                allSubmenus.hide();
                submenuWrapper.hide();
            }
        }
    });
};

//Toggle Multi Option Filter
var showMofSubmenu = function() {
    jQuery(document).on("click", ".filter-block a[data-mofmenu]",function(e) {
        e.preventDefault();
        var thisMofSubmenu = jQuery(".mof-submenu-" + jQuery(this).data("mofmenu")),
            allMofSubMenus = jQuery(".filter-block"),
            mofWrap = jQuery("#toggle-mof");

        if (thisMofSubmenu.length > 0) {
            allMofSubMenus.addClass("hidden-mof");

            if(thisMofSubmenu.is(":hidden")) {
                thisMofSubmenu.show();
                allMofSubMenus.addClass("hidden-mof");
                jQuery(this).removeClass("closed").addClass("open").parent(".filter-block").addClass("open-filter");
                jQuery(mofWrap).addClass("mof-open");
            } else {
                thisMofSubmenu.hide();
                jQuery(this).removeClass("open").addClass("closed").parent(".filter-block").removeClass("open-filter");
                jQuery(mofWrap).removeClass("mof-open");
                allMofSubMenus.removeClass("hidden-mof");
            }
        }
    });
};

// Adds the show more link on model filter
var showMoreModels = function() {
    var modelFilter = jQuery("#filter-ul-id--cab_model"),
        modelFilterJordan = jQuery("#filter-ul-id--cab_air_jordan_model"),
        models = jQuery([modelFilter.get(0), modelFilterJordan.get(0)]);

    jQuery(models).each(function(){
        var modelLi = jQuery(this).find("li").length,
            index = 9; // Show only first ten li under model attribute in MOF
        if( modelLi > (index + 1)) {
            jQuery("li", this).eq(index).nextAll().hide().addClass("expand");
            jQuery(this).append("<li class=\"show-more\"> Show More </li>");
        }
    });

    jQuery(models).on("click",".show-more",function() {
        $this = jQuery(this);
        var text = ($this.text() == "Show Less") ? "Show More" : "Show Less";
        $this.text(text);
        var siblings = jQuery(this).siblings("li.expand");
        if(siblings.is(":hidden")) {
            siblings.show();
        } else {
            siblings.hide();
        }
    });
};

var updateMOFCount = function() {
    jQuery(".filter-block a[data-mofmenu]").each(function() {
        var activeFilter = jQuery(".mof-submenu-" + jQuery(this).data("mofmenu")),
            count = activeFilter.find("span.selected-filter").length,
            filtersActive = jQuery("span.selected-filter").length,
            label = activeFilter.closest(".filter-block").find(".filter-count");
        if(count) {
            jQuery(label).empty().append( "(" + count + ")");
        }
        if(filtersActive) {
            jQuery(".clear-filters").show();
            jQuery("#toggle-mof").addClass("filters-chosen");
        } else {
            jQuery(".clear-filters").hide();
            jQuery("#toggle-mof").removeClass("filters-chosen");
        }
    });
};

//Update counter next to cart icon
var updateTopCartCounter = function() {
    document.observe("addtocartajax:update", function(event) {
        if(typeof(event.memo.itemQty) !== "undefined") {
            jQuery(".header-cart-count").html(event.memo.itemQty);
            var headerCartTotal = jQuery("#atca-cart .subtotal .price"),
                headerBarTotal = jQuery(".header-cart-price");
            headerBarTotal.empty();
            headerCartTotal.clone().appendTo(headerBarTotal);
        } else {
            jQuery(".add-to-cart-loader").hide();
        }
        nostojs(function(api) {
            api.sendTagging("tag-header-cart");
        });
        afterAddToCart();
        hideFindSize();
    });
};

var hideFindSize = function () {
    var notifyButton = jQuery(".bttn-find-size-wrapper-outer");
    if (notifyButton.length > 0) {
        notifyButton.hide();
    }
};

var afterAddToCart = function() {
    jQuery("fieldset.add-to-cart").addClass("atca-in-cart");
};

var toggleTermsInOnepage = function() {
    jQuery(".checkout-onepage-index").on("change", "#onepage-terms",function() {
        jQuery("#place-order-button").attr("disabled", !$(this).is(":checked"));
    });
};


var scrollTopGrid = function() {
    jQuery(".i-next, .i-previous").on("click", function() {
        jQuery("html, body").animate({scrollTop:0}, "slow");
    });
};


activateProductNavigation = function() {
    // Product image slider
    var mediaImages = jQuery(".media-images"),
        moreViews = jQuery(".more-views"),
        moreViewsSelected = jQuery(".more-views-li.selected"),
        mainImage = jQuery(".product-image img.product-img");
    if (moreViewsSelected.length == 0) {
        moreViews.find("li:first-child").addClass("selected");
    }

    mediaImages.on("click", ".more-views-li", function(e) {
        e.preventDefault();
        var href = jQuery(this).find("a").attr("data-url"),
            id = jQuery(this).find("a").data("id");
        moreViews.find(".selected").removeClass("selected");
        jQuery(this).addClass("selected");
        mainImage.attr("src", href).load();
    });

    mediaImages.on("click",mainImage,function(e) {
        e.preventDefault();
    });

    var moreViewsLi = jQuery(".more-views-li");
    mediaImages.on("click",".product-image-next",function() {
        var next = jQuery(".more-views .selected").next(),
            next = (next.length == 0) ? moreViewsLi.eq(0) : next;
        next.click();
    });

    mediaImages.on("click",".product-image-prev",function() {
        var prev = jQuery(".more-views .selected").prev(),
            prev = (prev.length == 0) ? moreViewsLi.eq(moreViewsLi.length-1) : prev;
        prev.click();
    });
};

applyTouchInteractionToImageGallery = function() {

    var image = jQuery("img.product-img").parents(".product-image"),
        tabletFingerScroll = 40,
        startX = 0,
        movedX = 0;

    // Windows mobile has pointer events instead of touch/swipe events
    if (window.navigator.msPointerEnabled) {
        image.on("MSPointerDown", function(e) {
            e.preventDefault();
            startX = e.originalEvent.pageX;
        });

        image.on("MSPointerMove", function(e) {
            e.preventDefault();
            movedX = e.originalEvent.pageX;
        });

        image.on("MSPointerOut", function(e) {
            e.preventDefault();
            movedX = e.originalEvent.pageX;

            var movedPixels = (movedX - startX);

            if (movedX && movedPixels >= tabletFingerScroll) {
                image.find(".product-image-prev").click();
            }
            if (movedX && movedPixels <= -tabletFingerScroll) {
                image.find(".product-image-next").click();
            }

            startX = 0;
            movedX = 0;
        });
    }

    image.on("swipeleft",function() {
        image.find(".product-image-next").click();
    });

    image.on("swiperight",function() {
        image.find(".product-image-prev").click();
    });
};

var initializeFaq = function() {
    jQuery(".faq p:even").addClass("faq-question pointer" ).append('<span class="sprite expand"></span>');
    jQuery(".faq p:odd").addClass("faq-answer");

    jQuery(".faq-question").on("click", function() {
        jQuery(this).next(".faq-answer").toggle();
        jQuery(this).toggleClass("open");
    });
};
var reloadCartAfterRemove = function() {
    $("remove-shoe").fire("quickcheckout:reload");
};
var reloadCartAfterUpdate = function() {
    $("update-checkout").fire("quickcheckout:reload");
};
var reloadCartAfterShoeBought = function() {
    $("back-to-checkout").fire("quickcheckout:reload");
};
var triggerPayment = function() {
    $$("#checkout-payment-method-load input[name=\"payment[method]\"]").first().fire("payment-method:switched");
};

var shareButton = function() {
    jQuery(".bttn-share").click( function() {
        var $this = jQuery(this);
        $this.toggleClass("open");
        jQuery(".bttn-share-reveal").toggle();
        $this.find("i").toggle();
    });
};

jQuery(document).ready(function($) {

    if(jQuery(".catalogsearch-result-index .col-main .note-msg").length > 0) {
        jQuery(".main-container .sidebar").css("background", "none");
    }

    // Toggle sizechart Men / Women
    jQuery(".sizechart-container").on("click", ".sizechart-toggle", function() {
        if(jQuery(this).hasClass("open")) {
            return;
        }

        var $clickedToggle = jQuery(this),
            $allToggles = jQuery(".sizechart-toggle"),
            $allSizesDivs = jQuery(".sizechart-container").find(".sizes"),
            $sizeDivToShow = $allSizesDivs.filter("."+$clickedToggle.data("content"));

        $allSizesDivs.removeClass("open");
        $sizeDivToShow.addClass("open");

        $allToggles.removeClass("open");
        $clickedToggle.addClass("open");

        $allToggles.find("span").removeClass("sprite").removeClass("current");
        $clickedToggle.find("span").addClass("sprite").addClass("current");

    });

    if(jQuery(".my-account-nav").length) {
        $("select#my-account-navigation").vaimoSelect({
            vsMobile: true,
            vsCycle: true,
            vsCallback: function() {
                $(".my-account-nav .loading").removeClass("hide");
                window.location = $("select#my-account-navigation option:selected").data("url");
            }
        });

        var menuval = $(".hide.h1").length > 0 ? $(".hide.h1").text() : $(".my-account h1").text();
        $(".my-account-nav .vaimo_select  span.label").text(menuval);
    }


    var menuval = $(".hide.h1").length > 0 ? $(".hide.h1").text() : $(".my-account h1").text();
    $(".my-account-nav .vaimo_select  span.label").text(menuval);

    $("button.sign-in-normal").on("click", function(e) {
        e.stopPropagation();
        var $pageFade = $(".pagefade"),
            regPopContainer = $(".register-popup-container");
        $pageFade.height($(document).height());
        $pageFade.fadeIn("fast");
        regPopContainer.fadeIn("fast");
        $(".pagefade:not(.register-popup-container)").on("click", function(e) {
            e.stopPropagation();
            $pageFade.fadeOut("fast");
            regPopContainer.fadeOut("fast");
        });
    });

    // Agreement popup in checkout
    jQuery(".terms-trigger").on("click", function(e) {
        e.stopPropagation();
        var fadeBackround = $(".checkout-fade-background");

        $("html, body").animate({scrollTop:0}, "slow");
        fadeBackround.height($(document).height());
        fadeBackround.fadeIn("fast");
        $(".agreement-content").fadeIn("fast");
        $(".checkout-fade-background:not(.agreement-content), .closeIcon").on("click", function(e) {
            e.stopPropagation();
            fadeBackround.fadeOut("fast");
            $(".agreement-content").fadeOut("fast");
        });
    });

    jQuery(".scrolltosignin").on("click", function(){
        jQuery("html, body").animate({
            scrollTop: $("h2.sign-in").offset().top
        }, 1000);
    });

    // FAQ page Fix for scrolling to success/error messages in mobile view
    if(jQuery(".cms-faq li.success-msg").length > 0 && jQuery(window).width() < 776){
        jQuery("html, body").animate({
            scrollTop: jQuery("li.success-msg").last().offset().top
        }, 1000);
    }

    // If trying to login and fails the page scrolls down to the loginform
    var windowWidth = jQuery(window).width();
    if(jQuery(".slab-h1-red.sign-in").length > 0 && windowWidth < 776 && jQuery(".error-msg").length > 0){

        jQuery("html, body").animate({
            scrollTop: jQuery("h2.sign-in").offset().top
        }, 500);
    }

    $("#back-to-checkout").on("click", function(){
        $("#shoe-bought").hide();
        $(".checkout-fade-background").fadeOut("fast");
        if(ItemData.itemsLeft > 0) {
            reloadCartAfterShoeBought();
        } else {
            window.location.href = "../cart";
        }
    });

    $("#update-checkout").on("click", function() {
        $("#price-updated").hide();
        $(".checkout-fade-background").fadeOut("fast");
        reloadCartAfterUpdate();
    });

    $("#hide-error").on("click", function() {
        $("#error-message-reserve").hide();
        $(".checkout-fade-background").fadeOut("fast");
        reloadCartAfterUpdate();
    });

    $("#remove-shoe").on("click", function(e) {
        e.preventDefault();
        var data = { id: ItemData.id };
        jQuery.post("../../fchelper/ajax/remove", data, function (response) {
            $("#price-updated").hide();
            $(".checkout-fade-background").fadeOut("fast");
            if(response.itemsLeft > 0) {
                reloadCartAfterRemove();
            } else {
                window.location.href = "../cart";
            }
        }, "json");
    });

    $(document).on("click", "div[data-show]",function(e) {
        e.preventDefault();
        var thisDescription = $("#show-" + $(this).data("show"));
        if(thisDescription.is(":hidden")) {
            thisDescription.show();
            $(this).removeClass("closed").addClass("open");
        } else {
            thisDescription.hide();
            $(this).removeClass("open").addClass("closed");
        }
    });

    if ($("#directpost-cvv-what-is-this")) {
        $(document).on("click", "#directpost-cvv-what-is-this", function(e) {
            e.preventDefault();
            var toolTip = $("#directpost-tool-tip");
            if(toolTip.is(":hidden")){
                toolTip.css("top","500px").show();
            } else {
                toolTip.hide();
            }
        });
        $(document).on("click", "#directpost-tool-tip-close", function(e) {
            e.preventDefault();
            $("#directpost-tool-tip").hide();
        });
    }

    document.observe("quickcheckout:shippingload", function() {
        var selectedShippingMethod = $("#checkout-shipping-method-load input[name=shipping_method]:checked");
        selectedShippingMethod.closest("li").addClass("active-shipping-method");
    });

    $(document).on("click", "#checkout-shipping-method-load input[name=shipping_method]", function() {
        $("#checkout-shipping-method-load li").removeClass("active-shipping-method");
        $(this).parent().addClass("active-shipping-method");
    });

    $(document).on("click", ".conditionals-scroll", function() {
        jQuery("html, body").animate({
            scrollTop: $("#scroll-to-conditional").offset().top
        }, 200);
    });

    $(document).on("click", ".cond-pair-link", function() {
        jQuery("html, body").animate({
            scrollTop: $("#messages_product_view").offset().top
        }, 200);
    });

    $(document).on("click", ".limiter", function() {
        jQuery("html, body").animate({
            scrollTop: $("#messages_product_view").offset().top
        }, 200);
    });

//Mobile navigation
    var $mobilenav = jQuery(".mobilenav"),
        $page = jQuery("#entire-page-wrap"),
        $mobilnavBreadcrumb = jQuery(".mobilnav-breadcrumb"),
        $showAllLink = jQuery(".go-show-all"),
        $toplevel = jQuery("ul#toplevel"),
        $showDiv = jQuery(".showdiv");

    jQuery(".menu-toggle").toggle(function() {
        $mobilenav.animate({ left: "+=80%" }, { duration: 300, queue: false });
        $page.css("position", "fixed").animate({ left: "+=80%" }, { duration: 300, queue: false });
    },function() {
        $mobilenav.animate({
            left: "-=80%" }, { duration: 300, queue: false });
        $page.animate({ left: "-=80%" }, {
            duration: 300,
            queue: false,
            complete:  function() { $page.css("position", "static");
            }
        });

    });

    $mobilenav.on("click", "ul a", function(e) {
        e.preventDefault();

        var $thisLink = jQuery(this),
            hasSubUl = $thisLink.closest("li").find("ul").length > 0 ? true : false;

        if(hasSubUl) {
            $mobilnavBreadcrumb.show();
            var idOfMenuToShow = $thisLink.closest("li").find("ul").attr("id"),
                $menuToShow = $thisLink.closest("li").find("ul#"+idOfMenuToShow);
            $menuToShow.find("ul").hide();
            $toplevel.hide();
            $menuToShow.clone().appendTo($showDiv);
            $mobilnavBreadcrumb.find(".breadcrumb").html("<span><a href=\"" + $thisLink.attr("href") + "\">" + $thisLink.text() + "</a></span>");
            $showAllLink.html("<span><a href=\"" + $thisLink.attr("href") + "\"> Show all" + $thisLink.text() + "</a></span>");

        } else {
            window.location = $thisLink.attr("href");
        }
    });

    $showDiv.on("click", "a", function(e) {
        e.preventDefault();

        var $thisLink = jQuery(this),
            currentLevel = parseInt($thisLink.data("level")),
            hasSubUl = $thisLink.closest("li").find("ul").length > 0 ? true : false;

        if(hasSubUl) {
            var $showMenu = "<ul>" +$thisLink.closest("li").find(">ul").html() +"</ul>";
            $showDiv.html($showMenu);
            $mobilnavBreadcrumb.show();
            $showAllLink.show().html("<span><a href=\"" + $thisLink.attr("href") + "\"> Show all" + $thisLink.text() + "</a></span>");
            if(currentLevel == 1) {
                $mobilnavBreadcrumb.find(".breadcrumb").append("<span>&nbsp; > &nbsp;</span><span><a href=\"" + $thisLink.attr("href") + "\">" + $thisLink.text() + "</a></span>");
            } else {
                $mobilnavBreadcrumb.find(".breadcrumb").html("<span><a href=\"" + $thisLink.attr("href") + "\">" + $thisLink.text() + "</a></span>");
            }
        } else {
            window.location = $thisLink.attr("href");
        }
    });

    jQuery(".back").on("click", function() {

        var linkid = $showDiv.find("a").first().data("partoful"),
            currentLevel = parseInt(jQuery("ul#toplevel a[data-partoful=\"" + linkid + "\"]").data("level")),
            $parentUlToShow = "<ul>" + jQuery("ul#toplevel a[data-partoful=\"" + linkid + "\"]").parent().parent().parent().parent().html() + "</ul>";

        $showDiv.empty();

        if(currentLevel == 1) {
            $mobilnavBreadcrumb.hide();
            $showAllLink.hide();
        } else {
            $mobilnavBreadcrumb.show();
            $mobilnavBreadcrumb.find(".breadcrumb span").slice(-2).remove();
            var showAllhref = $mobilnavBreadcrumb.find(".breadcrumb a");
            $showAllLink.show().html("<a href=\"" + showAllhref.attr("href") + "\"> Show all" + showAllhref.text() + "</a>");
        }
        $showDiv.append($parentUlToShow);
        $showDiv.find("ul ul").hide();
    });
    // End mobile navigation
    // Desktop menu adjustments
    jQuery(".easymenu-wrapper > li.root-category-wrapper").on("hover", function() {
        var $this = jQuery(this);
        if($this.find(".level3-category").length < 1) {
            $this.find("div").remove();
        }
        if($this.find("ul.level3-category-wrapper").length > 4) {
            $this.find("div.root-category").css("width", "100%");
        }
    });

    jQuery(".instagram-grid").on("click", ".span2", function() {
        var imgUrl = jQuery(this).data('bigimage'),
            imgText = jQuery(this).data('imgtext'),
            modal =  jQuery(".instagram-modal"),
            fadeBackground = jQuery(".modal-background-overlay");
        fadeBackground.show();
        modal.html("<img src='" + imgUrl + "' alt='' /><p>"+ imgText +"</p>").show();
        modal.add(fadeBackground).click(function() {
            modal.hide();
            fadeBackground.hide();
        });
    });

});
document.observe("dom:loaded", function() {

    if (typeof QuickCheckout !== "undefined") {

        var agreement = jQuery('#agreement-1'),
            checkoutAgreements = jQuery('ol.checkout-agreements');

        // Validate checkbox
        if(agreement){
            agreement.on('change', function(){
                if(agreement.is(':checked')){
                    checkoutAgreements.find('.validation-advice').remove();
                }
                else {
                    jQuery('p.agree').after('<div class="validation-advice">Please agree to our Terms and Conditions</div>');
                }
            });

            QuickCheckout.prototype.validateTermsAndCondition = function (event){
                if(!agreement.is(':checked')){
                    checkoutAgreements.find('.validation-advice').remove();
                    jQuery('p.agree').after('<div class="validation-advice">Please agree to our Terms and Conditions</div>');
                    return false;
                }
                checkoutAgreements.find('.validation-advice').remove();
                return true;
            }
        }

        QuickCheckout.prototype.reserveShoes = function (event) {

            var validationError = false;
            if(!QuickCheckout.prototype.validateTermsAndCondition()) {
                validationError = true;
            }


            if (ENABLE_ADYEN) {
                if (!paymentValidator.validate()) {
                    moveValidation();
                    validationError = true;
                }
            } else {
                if ($('directpost-iframe')) {
                    if (!directPostModel.validate()) {
                        moveValidation();
                        validationError = true;
                    }
                }
            }
            var shippingIsValid = true;
            if ($('billing:use_for_shipping_no') && $('billing:use_for_shipping_no').checked) {
                var shippingValidator = new Validation(shipping.form);
                if (!shippingValidator.validate()) {
                    shippingIsValid = false;
                    validationError = true;
                }
            }
            var billingValidator = new Validation(billing.form);

            if(!(billingValidator.validate() && shippingIsValid)) {
                validationError = true;
            }

            var shippingMethodValidator = new Validation('co-shipping-method-form');

            if(!shippingMethodValidator.validate()) {
                validationError = true;
            }

            if(validationError) {
                return;
            }

            jQuery.getJSON(mageBaseUrlJs + "fchelper/ajax/reserve", function (response) {
                if (response.success) {
                    if (ENABLE_ADYEN) {
                        cse.call(this);
                    }
                    QuickCheckout.prototype.saveOrder();
                } else if(response.code) {
                    backgroundFade();
                    jQuery("html, body").animate({scrollTop:0}, "slow");
                    if(response.item.status == 'removed'){
                        shoeBought(response);
                    } else if(response.item.status == 'switchable'){
                        priceOrLocationUpdated(response);
                    } else {
                        $('error-message-reserve').style.display = 'block';
                    }
                }
            });
        }

        QuickCheckout.prototype.addEventListenerToSaveOrderButton = function() {
            $('place-order-button').observe('click', this.reserveShoes.bindAsEventListener(this));
        }

    }

    backgroundFade = function(){
        var fadeBackground = jQuery(".checkout-fade-background");
        fadeBackground.height(jQuery(document).height());
        fadeBackground.fadeIn('fast');
    }

    shoeBought = function(response){
        $('shoe-bought').style.display = "block";
        jQuery('html, body').animate({scrollTop:0}, 'slow');

        ItemData.itemsLeft = response.item.itemsLeft;

        var name = response.item.name,
            url = response.item.url,
            thumbnail = response.item.thumbnail,
            size = response.item.size;
        $('bought-name').innerHTML = name;
        $('bought-size').innerHTML = "Size: " + size;
        $('popup-thumbnail').setAttribute('src',thumbnail);
        $('find-size').setAttribute('href',url);
    }

    priceOrLocationUpdated = function(response){
        $('price-updated').style.display = "block";
        jQuery('html, body').animate({scrollTop:0}, 'slow');

        ItemData.id = response.item.id;

        var name = response.item.name,
            thumbnail = response.item.thumbnail,
            size = response.item.size,
            newPrice = response.item.newPrice,
            oldPrice = response.item.oldPrice,
            newLocation = response.item.newLocation,
            oldLocation = response.item.oldLocation;
        $('size-updated-name').innerHTML = name;
        $('item-size').innerHTML = "Size: " + size;
        $('popup-thumbnail-price').setAttribute('src',thumbnail);
        if ( newPrice !== oldPrice) {
            $('popup-item-price').innerHTML = newPrice;
            $('popup-item-price-old').innerHTML = oldPrice;
        } else {
            jQuery('.price-updated-wrap').hide();
        }
        if ( newLocation !== oldLocation) {
            $('popup-item-location').innerHTML = newLocation;
            $('popup-item-location-old').innerHTML = oldLocation;
        } else {
            jQuery('.location-updated-wrap').hide();
        }
    }

});

var ItemData = {};
/* ===========================================================
 *
 *  Name:          jquery.vaimo_select.min.js
 *  Created:       2013-03-11
 *  Updated:       2013-03-15
 *  Version:       0.1.1
 *  Updated by:    Per
 *  Created by:    Per @ Vaimo
 *
 *  Released under the MIT License:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Vaimo | Beard, Rock & Loud Guns
 * =========================================================== */


(function(a){a.fn.vaimoSelect=function(b){var e,f,c=a.extend({},{vsID:!1,vsClass:!1,vsPlaceholder:!1,vsPrefix:!1,vsCycle:!1,vsMobile:!0,vsCallback:function(){}},b),d=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/),g=function(){var m,n,e=a(this).attr("title"),f=a("option:selected",this).text(),g=a(this).is(":disabled"),i="";c.vsPrefix?i+='<span class="prefix">'+c.vsPrefix+"</span> ":a(this).data("prefix")&&(i+='<span class="prefix">'+a(this).data("prefix")+"</span> "),i+=c.vsPlaceholder?'<span class="label placeholder">'+c.vsPlaceholder+"</span>":a(this).data("placeholder")?'<span class="label placeholder">'+a(this).data("placeholder")+"</span>":'<span class="label">'+f+"</span>",a("<div/>",{id:c.vsID?c.vsID:"","class":g?"vaimo_select disabled":"vaimo_select",title:e,tabindex:0,html:i}).insertAfter(this),m=a(this).next(".vaimo_select"),c.vsClass?m.addClass(c.vsClass):"",d&&c.vsMobile&&m.addClass("mobile"),a("<ul/>").appendTo(m),n=a(m).find("ul"),a("option, optgroup",this).each(function(){var c=a(this).text(),d=a(this).is(":selected"),e=a(this).is(":disabled"),f=a(this).parent().is("optgroup");a(this).is("option")?(a("<li/>",{"class":d?"selected":e?"disabled":"",text:c}).appendTo(n),f&&a(n).find("li:last").addClass("groupchild")):a("<li/>",{"class":"optgroup",text:a(this).attr("label")}).appendTo(n)}),a(this).appendTo(m),a(this).parent(".vaimo_select").on("focus",h).on("click","li",j).on("keydown",l).on("blur",k)},h=function(){e=a(this),f=a(this).find("li").filter(".selected"),a(this).find("li").filter(".selected").addClass("focused")},i=function(){var d=a(this).closest(".vaimo_select"),e=a(":selected",this).text();a(":selected",this).index(),d.find(".label").html(e).removeClass("placeholder"),c.vsCallback.call(this)},j=function(){var d=a(this).text(),e=a(this).closest(".vaimo_select"),f=a(this).hasClass("disabled"),g=a(this).hasClass("optgroup"),h=e.find("li:not('.optgroup')").index(this);f||g||(e.find(".label").html(d).removeClass("placeholder"),e.find(".selected").removeClass("selected"),e.find("select option")[h].selected=!0,e.find(".focused").removeClass("focused"),e.blur(),a(this).addClass("selected"),c.vsCallback.call(this))},k=function(){var a=e.find("li").filter(".focused"),b=e.find("li").filter(".selected");a.length&&!b.length&&(a.removeClass("focused"),f.addClass("selected"))},l=function(b){var g,h,d=a(this).find("li"),e=d.filter(".selected"),f=d.filter(".focused");return e.length||f.length?e.addClass("focused").removeClass("selected"):d.eq(0).addClass("focused"),38==b.keyCode?(g=f.prevAll(":not('.disabled, .optgroup')").first(),h=d.not(".disabled, .optgroup").last()):40==b.keyCode&&(g=f.nextAll(":not('.disabled, .optgroup')").first(),h=d.not(".disabled, .optgroup").first()),38==b.keyCode||40==b.keyCode?(g.is("li")?(f.removeClass("focused"),g.addClass("focused")):c.vsCycle&&(f.removeClass("focused"),h.addClass("focused")),!1):(13==b.keyCode?f.trigger("click"):27==b.keyCode&&a(this).blur(),void 0)};return this.each(function(){a(this).each(g),a(this).on("change",i)})}})(jQuery);
jQuery(document).ready( function() {
    var thisPage = jQuery("#entire-page-wrap"),
        sizeGuide = jQuery("#whats-my-size");

    thisPage.on("click", ".accordion h5", function() {
        var $this = jQuery(this),
            drawer = $this.data("accordion");
        $this.toggleClass("open");
        jQuery(".show-" + drawer).toggle();

    });

    sizeGuide.on("click", function() {
        jQuery("#sizechartaccordion").addClass("open");
        jQuery(".show-sizechart").show();
    });

});

// Fix for windows phone mobile rendering
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
        document.createTextNode(
            "@-ms-viewport{width:auto!important}"
        )
    );
    document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
};
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
};
jQuery(function(){
    if (!Modernizr.boxsizing) {
        jQuery('.boxSized, .boxSized *').each(function(){
            var $this = jQuery(this),
                fullW = $this.outerWidth(),
                actualW = $this.width(),
                wDiff = fullW - actualW,
                newW = actualW - wDiff;
            $this.css('width',newW);
        });
    }
});

jQuery(document).ready(function(){
	showToplinksSubmenu();
    showMofSubmenu();
    showMoreModels();
    updateTopCartCounter();
    updateMOFCount();
	toggleTermsInOnepage();
    scrollTopGrid();
    activateProductNavigation();
    applyTouchInteractionToImageGallery();
    initializeFaq();
    shareButton();
});

/* Placeholders.js v3.0.2 */
(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);
