//>>built
define("dojox/app/utils/model",["dojo/_base/lang","dojo/Deferred","dojo/promise/all","dojo/when"],function(h,n,e,p){function k(b,a,f,c){var d=b[a].params?b[a].params:{},g=b[a].modelLoader?b[a].modelLoader:"dojox/app/utils/simpleModel";try{var e=require(g)}catch(k){throw Error(g+" must be listed in the dependencies");}var l=new n,m;try{m=e(b,d,a)}catch(q){throw Error("Error creating "+g+" for model named ["+a+"]: "+q.message);}p(m,h.hitch(this,function(b){c[a]=b;f.log("in app/model, for item\x3d[",
a,"] loadedModels \x3d",c);l.resolve(c);return c}),function(b){throw Error("Error loading model named ["+a+"]: "+b.message);});return l}return function(b,a,f){var c={};a.loadedModels&&h.mixin(c,a.loadedModels);if(b){a=[];for(var d in b)"_"!==d.charAt(0)&&a.push(k(b,d,f,c));return 0==a.length?c:e(a)}return c}});
//@ sourceMappingURL=model.js.map