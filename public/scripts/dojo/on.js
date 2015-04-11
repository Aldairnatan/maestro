//>>built
define("dojo/on",["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(v,w,h){function x(a,b,c,d,f){if(d=b.match(/(.*):(.*)/))return b=d[2],d=d[1],k.selector(d,b).call(f,a,c);h("touch")&&(y.test(b)&&(c=m(c)),!h("event-orientationchange")&&"orientationchange"==b&&(b="resize",a=window,c=m(c)));n&&(c=n(c));if(a.addEventListener){var e=b in p,g=e?p[b]:b;a.addEventListener(g,c,e);return{remove:function(){a.removeEventListener(g,c,e)}}}if(q&&a.attachEvent)return q(a,"on"+b,c);throw Error("Target must be an event emitter");
}function z(){this.cancelable=!1;this.defaultPrevented=!0}function A(){this.bubbles=!1}var r=window.ScriptEngineMajorVersion;h.add("jscript",r&&r()+ScriptEngineMinorVersion()/10);h.add("event-orientationchange",h("touch")&&!h("android"));h.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation);h.add("event-focusin",function(a,b,c){return"onfocusin"in c||c.addEventListener&&function(){function a(){c=!0}var c=!1;try{var e=b.createElement("input"),
g=b.activeElement;e.style.position="fixed";e.addEventListener("focusin",a,!1);b.body.appendChild(e);e.focus();b.body.removeChild(e);e.removeEventListener("focusin",a,!1);g.focus()}catch(k){}return c}()});var k=function(a,b,c,d){return"function"==typeof a.on&&"function"!=typeof b&&!a.nodeType?a.on(b,c):k.parse(a,b,c,x,d,this)};k.pausable=function(a,b,c,d){var f;a=k(a,b,function(){if(!f)return c.apply(this,arguments)},d);a.pause=function(){f=!0};a.resume=function(){f=!1};return a};k.once=function(a,
b,c,d){var f=k(a,b,function(){f.remove();return c.apply(this,arguments)});return f};k.parse=function(a,b,c,d,f,e){if(b.call)return b.call(e,a,c);if(-1<b.indexOf(",")){b=b.split(/\s*,\s*/);for(var g=[],k=0,h;h=b[k++];)g.push(d(a,h,c,f,e));g.remove=function(){for(var a=0;a<g.length;a++)g[a].remove()};return g}return d(a,b,c,f,e)};var y=/^touch/;k.selector=function(a,b,c){return function(d,f){function e(b){for(g=g&&g.matches?g:w.query;!g.matches(b,a,d);)if(b==d||!1===c||!(b=b.parentNode)||1!=b.nodeType)return;
return b}var g="function"==typeof a?{matches:a}:this,h=b.bubble;return h?k(d,h(e),f):k(d,b,function(a){var b=e(a.target);return b&&f.call(b,a)})}};var B=[].slice,C=k.emit=function(a,b,c){var d=B.call(arguments,2),f="on"+b;if("parentNode"in a){var e=d[0]={},g;for(g in c)e[g]=c[g];e.preventDefault=z;e.stopPropagation=A;e.target=a;e.type=b;c=e}do a[f]&&a[f].apply(a,d);while(c&&c.bubbles&&(a=a.parentNode));return c&&c.cancelable&&c},p=h("event-focusin")?{}:{focusin:"focus",focusout:"blur"};if(!h("event-stopimmediatepropagation"))var D=
function(){this.modified=this.immediatelyStopped=!0},n=function(a){return function(b){if(!b.immediatelyStopped)return b.stopImmediatePropagation=D,a.apply(this,arguments)}};if(h("dom-addeventlistener"))k.emit=function(a,b,c){if(a.dispatchEvent&&document.createEvent){var d=a.ownerDocument.createEvent("HTMLEvents");d.initEvent(b,!!c.bubbles,!!c.cancelable);for(var f in c)f in d||(d[f]=c[f]);return a.dispatchEvent(d)&&d}return C.apply(k,arguments)};else{k._fixEvent=function(a,b){a||(a=(b&&(b.ownerDocument||
b.document||b).parentWindow||window).event);if(!a)return a;try{l&&(a.type==l.type&&a.srcElement==l.target)&&(a=l)}catch(c){}if(!a.target)switch(a.target=a.srcElement,a.currentTarget=b||a.srcElement,"mouseover"==a.type&&(a.relatedTarget=a.fromElement),"mouseout"==a.type&&(a.relatedTarget=a.toElement),a.stopPropagation||(a.stopPropagation=E,a.preventDefault=F),a.type){case "keypress":var d="charCode"in a?a.charCode:a.keyCode;10==d?(d=0,a.keyCode=13):13==d||27==d?d=0:3==d&&(d=99);a.charCode=d;d=a;d.keyChar=
d.charCode?String.fromCharCode(d.charCode):"";d.charOrCode=d.keyChar||d.keyCode}return a};var l,s=function(a){this.handle=a};s.prototype.remove=function(){delete _dojoIEListeners_[this.handle]};var G=function(a){return function(b){b=k._fixEvent(b,this);var c=a.call(this,b);b.modified&&(l||setTimeout(function(){l=null}),l=b);return c}},q=function(a,b,c){c=G(c);if(((a.ownerDocument?a.ownerDocument.parentWindow:a.parentWindow||a.window||window)!=top||5.8>h("jscript"))&&!h("config-_allow_leaks")){"undefined"==
typeof _dojoIEListeners_&&(_dojoIEListeners_=[]);var d=a[b];if(!d||!d.listeners){var f=d,d=Function("event","var callee \x3d arguments.callee; for(var i \x3d 0; i\x3ccallee.listeners.length; i++){var listener \x3d _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");d.listeners=[];a[b]=d;d.global=this;f&&d.listeners.push(_dojoIEListeners_.push(f)-1)}d.listeners.push(a=d.global._dojoIEListeners_.push(c)-1);return new s(a)}return v.after(a,b,c,!0)},E=function(){this.cancelBubble=
!0},F=k._preventDefault=function(){this.bubbledKeyCode=this.keyCode;if(this.ctrlKey)try{this.keyCode=0}catch(a){}this.defaultPrevented=!0;this.returnValue=!1;this.modified=!0}}if(h("touch"))var t=function(){},u=window.orientation,m=function(a){return function(b){var c=b.corrected;if(!c){var d=b.type;try{delete b.type}catch(f){}if(b.type){if(h("mozilla")){var c={},e;for(e in b)c[e]=b[e]}else t.prototype=b,c=new t;c.preventDefault=function(){b.preventDefault()};c.stopPropagation=function(){b.stopPropagation()}}else c=
b,c.type=d;b.corrected=c;if("resize"==d){if(u==window.orientation)return null;u=window.orientation;c.type="orientationchange";return a.call(this,c)}"rotation"in c||(c.rotation=0,c.scale=1);var d=c.changedTouches[0],g;for(g in d)delete c[g],c[g]=d[g]}return a.call(this,c)}};return k});
//@ sourceMappingURL=on.js.map