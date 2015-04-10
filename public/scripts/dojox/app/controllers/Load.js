//>>built
define("dojox/app/controllers/Load","require dojo/_base/lang dojo/_base/declare dojo/on dojo/Deferred dojo/when dojo/dom-style ../Controller".split(" "),function(m,k,p,r,l,g,s,q,t){return p("dojox.app.controllers.Load",q,{_waitingQueue:[],constructor:function(a,b){this.events={"app-init":this.init,"app-load":this.load}},init:function(a){g(this.createView(a.parent,null,null,{templateString:a.templateString,controller:a.controller},null,a.type),function(b){g(b.start(),a.callback)})},load:function(a){this.app.log("in app/controllers/Load event.viewId\x3d"+
a.viewId+" event \x3d",a);for(var b=[],c=(a.viewId||"").split("+");0<c.length;){var f=c.shift();b.push(f)}var e;this.proceedLoadViewDef=new l;if(b&&1<b.length){for(var d=0;d<b.length-1;d++)c=k.clone(a),c.callback=null,c.viewId=b[d],this._waitingQueue.push(c);this.proceedLoadView(this._waitingQueue.shift());g(this.proceedLoadViewDef,k.hitch(this,function(){var c=k.clone(a);c.viewId=b[d];return e=this.loadView(c)}))}else return e=this.loadView(a)},proceedLoadView:function(a){var b=this.loadView(a);
g(b,k.hitch(this,function(){this.app.log("in app/controllers/Load proceedLoadView back from loadView for event",a);var b=this._waitingQueue.shift();b?(this.app.log("in app/controllers/Load proceedLoadView back from loadView calling this.proceedLoadView(nextEvt) for ",b),this.proceedLoadView(b)):(this._waitingQueue=[],this.proceedLoadViewDef.resolve())}))},loadView:function(a){var b=a.parent||this.app,c=(a.viewId||"").split(","),f=c.shift(),c=c.join(","),e=a.params||"";this._defaultHasPlus=this._handleDefault=
!1;b=this.loadChild(b,f,c,e,a);a.callback&&g(b,k.hitch(this,function(){this._handleDefault&&!a.initLoad&&(this.app.log("logTransitions:",""," emit app-transition this.childViews\x3d["+this.childViews+"]"),this.app.emit("app-transition",{viewId:this.childViews,defaultView:!0,forceTransitionNone:a.forceTransitionNone,opts:{params:e}}));a.callback(this._handleDefault,this._defaultHasPlus)}));return b},createChild:function(a,b,c,f){var e=a.id+"_"+b;!f&&(a.views[b]&&a.views[b].defaultParams)&&(f=a.views[b].defaultParams);
if(c=a.children[e])return f&&(c.params=f),this.app.log("in app/controllers/Load createChild view is already loaded so return the loaded view with the new parms ",c),c;var d=new l;g(this.createView(a,e,b,null,f,a.views[b].type),function(b){a.children[e]=b;g(b.start(),function(a){d.resolve(a)})});return d},createView:function(a,b,c,f,e,d){var h=new l,g=this.app;m([d?d:"../View"],function(d){d=new d(k.mixin({app:g,id:b,name:c,parent:a},{params:e},f));h.resolve(d)});return h},loadChild:function(a,b,c,
f,e){if(!a)throw Error("No parent for Child '"+b+"'.");if(!b){var d=a.defaultView?a.defaultView.split(","):"default";a.defaultView&&!e.initLoad?(d=this._getViewNamesFromDefaults(a),this.app.log("logTransitions:","Load:loadChild","setting _handleDefault true for parent.defaultView childViews\x3d["+d+"]"),this._handleDefault=!0,0<=a.defaultView.indexOf("+")&&(this._defaultHasPlus=!0)):(b=d.shift(),c=d.join(","))}var h=new l,n;try{n=this.createChild(a,b,c,f)}catch(m){return console.warn("logTransitions:",
"","emit reject load exception for \x3d["+b+"]",m),h.reject("load child '"+b+"' error."),h.promise}g(n,k.hitch(this,function(a){if(!c&&a.defaultView){var d=this._getViewNamesFromDefaults(a);this.app.log("logTransitions:","Load:loadChild"," setting _handleDefault \x3d true child.defaultView childViews\x3d["+d+"]");this._handleDefault=!0;0<=a.defaultView.indexOf("+")&&(this._defaultHasPlus=!0);this.childViews=d;h.resolve()}d=c.split(",");b=d.shift();c=d.join(",");b?(a=this.loadChild(a,b,c,f,e),g(a,
function(){h.resolve()},function(){h.reject("load child '"+b+"' error.")})):h.resolve()}),function(){console.warn("loadChildDeferred.REJECT() for ["+b+"] subIds\x3d["+c+"]");h.reject("load child '"+b+"' error.")});return h.promise},_getViewNamesFromDefaults:function(a){for(var b=a.parent,c=a.name,f="";b!==this.app;)c=b.name+","+c,b=b.parent;a=a.defaultView.split("+");for(var e in a)a[e]=c+","+a[e];return f=a.join("+")}})});
//@ sourceMappingURL=Load.js.map