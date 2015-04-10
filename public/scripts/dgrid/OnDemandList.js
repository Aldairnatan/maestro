//>>built
define("dgrid/OnDemandList","./List ./_StoreMixin dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/on ./util/misc put-selector/put".split(" "),function(E,F,G,B,r,q,t,n){return G([E,F],{minRowsPerPage:25,maxRowsPerPage:250,maxEmptySpace:Infinity,bufferRows:10,farOffRemoval:2E3,queryRowsOverlap:1,pagingMethod:"debounce",pagingDelay:t.defaultDelay,keepScrollPosition:!1,rowHeight:22,postCreate:function(){this.inherited(arguments);var c=this;q(this.bodyNode,"scroll",t[this.pagingMethod](function(g){c._processScroll(g)},
null,this.pagingDelay))},renderQuery:function(c,g,k){function b(a){n(u,"!");if(a)throw h._refreshDeferred&&(h._refreshDeferred.reject(a),delete h._refreshDeferred),a;}var h=this,l={query:c,count:0,node:g,options:k},m=this.preload,d;if(!g){var a={node:n(this.contentNode,"div.dgrid-preload",{rowIndex:0}),count:0,query:c,next:l,options:k};a.node.style.height="0";l.node=g=n(this.contentNode,"div.dgrid-preload");l.previous=a}g.rowIndex=this.minRowsPerPage;m?((l.next=m.next)&&this.bodyNode.scrollTop>=m.node.offsetTop?
l.previous=m:(l.next=m,l.previous=m.previous),l.previous.next=l,l.next.previous=l):this.preload=l;var u=n(g,"-div.dgrid-loading");n(u,"div.dgrid-below").innerHTML=this.loadingMessage;k=B.mixin(this.get("queryOptions"),k,{start:0,count:this.minRowsPerPage,query:c});this._trackError(function(){return d=c(k)});if("undefined"===typeof d)b();else return r.when(h.renderArray(d,g,k),function(a){return r.when("undefined"===typeof d.total?d.length:d.total,function(b){n(u,"!");var c=a.length;0===b&&(h.noDataNode&&
(n(h.noDataNode,"!"),delete h.noDataNode),h.noDataNode=n(h.contentNode,"div.dgrid-no-data"),h.noDataNode.innerHTML=h.noDataMessage);for(var k=0,m=0;m<c;m++)k+=h._calcRowHeight(a[m]);c&&k&&(h.rowHeight=k/c);b-=c;l.count=b;g.rowIndex=c;b?g.style.height=Math.min(b*h.rowHeight,h.maxEmptySpace)+"px":g.style.display="none";h._previousScrollPosition&&(h.scrollTo(h._previousScrollPosition),delete h._previousScrollPosition);h._processScroll();h._refreshDeferred&&(h._refreshDeferred.resolve(d),delete h._refreshDeferred);
return a},b)},b),d},refresh:function(c){var g=this,k=c&&c.keepScrollPosition,b;"undefined"===typeof k&&(k=this.keepScrollPosition);k&&(this._previousScrollPosition=this.getScrollPosition());this.inherited(arguments);if(this.store)return k=this._refreshDeferred=new r,b=g.renderQuery(function(b){return g.store.query(g.query,b)}),"undefined"===typeof b&&k.reject(),k.then(function(b){setTimeout(function(){q.emit(g.domNode,"dgrid-refresh-complete",{bubbles:!0,cancelable:!1,grid:g,results:b})},0);delete g._refreshDeferred;
return b},function(b){delete g._refreshDeferred;throw b;})},resize:function(){this.inherited(arguments);this._processScroll()},_calcRowHeight:function(c){var g=c.previousSibling;return g&&g.offsetTop!=c.offsetTop?c.offsetHeight:0},lastScrollTop:0,_processScroll:function(c){function g(a,c,d,h){var g=b.farOffRemoval,f=a.node;if(c>2*g){for(var e,l=f[d],m=0,p=0,r=[];e=l;){var s=b._calcRowHeight(e);if(m+s+g>c||0>l.className.indexOf("dgrid-row")&&0>l.className.indexOf("dgrid-loading"))break;var l=e[d],
q,t=e.observerIndex;if(t!=q&&-1<q){var u=b.observers,v=u[q];v&&v.cancel();u[q]=0}m+=s;p+=e.count||1;q=t;b.removeRow(e,!0);r.push(e)}a.count+=p;h?(f.rowIndex-=p,k(a)):f.style.height=f.offsetHeight+m+"px";var w=n("div",r);setTimeout(function(){n(w,"!")},1)}}function k(a,c){a.node.style.height=Math.min(a.count*b.rowHeight,c?Infinity:b.maxEmptySpace)+"px"}var b=this,h=b.bodyNode;c=c&&c.scrollTop||this.getScrollPosition().y;var l=h.offsetHeight+c,m,d,a=b.preload,u=b.lastScrollTop,z=b.bufferRows*b.rowHeight,
q=z-b.rowHeight,t,C,A;for(b.lastScrollTop=c;a&&!a.node.offsetWidth;)a=a.previous;for(;a&&a!=m;){m=b.preload;b.preload=a;d=a.node;var f=d.offsetTop;if(l+1+q<f){do a=a.previous;while(a&&!a.node.offsetWidth)}else if(c-1-q>f+d.offsetHeight){do a=a.next;while(a&&!a.node.offsetWidth)}else{var e=((d.rowIndex?c-z:l)-f)/b.rowHeight,f=(l-c+2*z)/b.rowHeight,w=Math.max(Math.min((c-u)*b.rowHeight,b.maxRowsPerPage/2),b.maxRowsPerPage/-2),f=f+Math.min(Math.abs(w),10);0==d.rowIndex&&(e-=f);e=Math.max(e,0);10>e&&
(0<e&&f+e<b.maxRowsPerPage)&&(f+=Math.max(0,e),e=0);f=Math.min(Math.max(f,b.minRowsPerPage),b.maxRowsPerPage,a.count);if(0==f)return;var f=Math.ceil(f),e=Math.min(Math.floor(e),a.count-f),s=B.mixin(b.get("queryOptions"),a.options);a.count-=f;var p=d,x,y=b.queryRowsOverlap;if(w=0<d.rowIndex&&a){var v=a.previous;v&&(g(v,c-(v.node.offsetTop+v.node.offsetHeight),"nextSibling"),0<e&&v.node==d.previousSibling?(e=Math.min(a.count,e),a.previous.count+=e,k(a.previous,!0),d.rowIndex+=e,y=0):f+=e,a.count-=e);
s.start=d.rowIndex-y;d.rowIndex+=f}else a.next&&(g(a.next,a.next.node.offsetTop-l,"previousSibling",!0),p=d.nextSibling,p==a.next.node?(a.next.count+=a.count-e,a.next.node.rowIndex=e+f,k(a.next),a.count=e,y=0):x=!0),s.start=a.count;s.count=Math.min(f+y,b.maxRowsPerPage);x&&(p&&p.offsetWidth)&&(x=p.offsetTop);k(a);d=n(p,"-div.dgrid-loading[style\x3dheight:"+f*b.rowHeight+"px]");n(d,"div.dgrid-"+(w?"below":"above")).innerHTML=b.loadingMessage;d.count=f;d.blockRowIndex=!0;s.query=a.query;var D=a.query(s);
if(void 0===b._trackError(function(){return D})){n(d,"!");return}(function(a,c,d,f,e){A=r.when(b.renderArray(e,a,s),function(c){C=e;p=a.nextSibling;n(a,"!");if(f&&p&&p.offsetWidth){var g=b.getScrollPosition();b.scrollTo({x:g.x,y:g.y+p.offsetTop-f,preserveMomentum:!0})}d&&r.when(e.total||e.length,function(a){d.count=a-d.node.rowIndex;k(d)});b._processScroll();return c},function(b){n(a,"!");throw b;})}).call(this,d,h,w,x,D);a=a.previous}}if(A&&(t=this._refreshDeferred))delete this._refreshDeferred,
r.when(A,function(){t.resolve(C)})}})});
//@ sourceMappingURL=OnDemandList.js.map