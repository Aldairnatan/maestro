//>>built
require({cache:{"url:dijit/templates/Dialog.html":'\x3cdiv class\x3d"dijitDialog" role\x3d"dialog" aria-labelledby\x3d"${id}_title"\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"titleBar" class\x3d"dijitDialogTitleBar"\x3e\n\t\t\x3cspan data-dojo-attach-point\x3d"titleNode" class\x3d"dijitDialogTitle" id\x3d"${id}_title"\n\t\t\t\trole\x3d"heading" level\x3d"1"\x3e\x3c/span\x3e\n\t\t\x3cspan data-dojo-attach-point\x3d"closeButtonNode" class\x3d"dijitDialogCloseIcon" data-dojo-attach-event\x3d"ondijitclick: onCancel" title\x3d"${buttonCancel}" role\x3d"button" tabindex\x3d"0"\x3e\n\t\t\t\x3cspan data-dojo-attach-point\x3d"closeText" class\x3d"closeText" title\x3d"${buttonCancel}"\x3ex\x3c/span\x3e\n\t\t\x3c/span\x3e\n\t\x3c/div\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"dijitDialogPaneContent"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dijit/Dialog","require dojo/_base/array dojo/aspect dojo/_base/declare dojo/Deferred dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/fx dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/ready dojo/sniff dojo/window dojo/dnd/Moveable dojo/dnd/TimedMoveable ./focus ./_base/manager ./_Widget ./_TemplatedMixin ./_CssStateMixin ./form/_FormMixin ./_DialogMixin ./DialogUnderlay ./layout/ContentPane dojo/text!./templates/Dialog.html dojo/i18n!./nls/common".split(" "),function(z,
q,r,s,v,A,t,n,g,w,B,x,e,y,C,l,p,D,E,f,h,L,F,G,H,I,u,J,K){h=s("dijit._DialogBase"+(l("dojo-bidi")?"_NoBidi":""),[F,H,I,G],{templateString:K,baseClass:"dijitDialog",cssStateNodes:{closeButtonNode:"dijitDialogCloseIcon"},_setTitleAttr:{node:"titleNode",type:"innerHTML"},open:!1,duration:h.defaultDuration,refocus:!0,autofocus:!0,_firstFocusItem:null,_lastFocusItem:null,doLayout:!1,draggable:!0,_setDraggableAttr:function(a){this._set("draggable",a)},maxRatio:0.9,closable:!0,_setClosableAttr:function(a){this.closeButtonNode.style.display=
a?"":"none";this._set("closable",a)},postMixInProperties:function(){var a=B.getLocalization("dijit","common");e.mixin(this,a);this.inherited(arguments)},postCreate:function(){g.set(this.domNode,{display:"none",position:"absolute"});this.ownerDocumentBody.appendChild(this.domNode);this.inherited(arguments);r.after(this,"onExecute",e.hitch(this,"hide"),!0);r.after(this,"onCancel",e.hitch(this,"hide"),!0);this._modalconnects=[]},onLoad:function(){this._size();this._position();this.autofocus&&k.isTop(this)&&
(this._getFocusItems(this.domNode),f.focus(this._firstFocusItem));this.inherited(arguments)},focus:function(){this._getFocusItems(this.domNode);f.focus(this._firstFocusItem)},_endDrag:function(){var a=n.position(this.domNode),b=p.getBox(this.ownerDocument);a.y=Math.min(Math.max(a.y,0),b.h-a.h);a.x=Math.min(Math.max(a.x,0),b.w-a.w);this._relativePosition=a;this._position()},_setup:function(){var a=this.domNode;this.titleBar&&this.draggable?(this._moveable=new (6==l("ie")?E:D)(a,{handle:this.titleBar}),
r.after(this._moveable,"onMoveStop",e.hitch(this,"_endDrag"),!0)):t.add(a,"dijitDialogFixed");this.underlayAttrs={dialogId:this.id,"class":q.map(this["class"].split(/\s/),function(a){return a+"_underlay"}).join(" "),_onKeyDown:e.hitch(this,"_onKey"),ownerDocument:this.ownerDocument}},_size:function(){this._checkIfSingleChild();this._singleChild?"undefined"!=typeof this._singleChildOriginalStyle&&(this._singleChild.domNode.style.cssText=this._singleChildOriginalStyle,delete this._singleChildOriginalStyle):
g.set(this.containerNode,{width:"auto",height:"auto"});var a=n.position(this.domNode),b=p.getBox(this.ownerDocument);b.w*=this.maxRatio;b.h*=this.maxRatio;if(a.w>=b.w||a.h>=b.h){var d=n.position(this.containerNode),c=Math.min(a.w,b.w)-(a.w-d.w),a=Math.min(a.h,b.h)-(a.h-d.h);this._singleChild&&this._singleChild.resize?("undefined"==typeof this._singleChildOriginalStyle&&(this._singleChildOriginalStyle=this._singleChild.domNode.style.cssText),this._singleChild.resize({w:c,h:a})):g.set(this.containerNode,
{width:c+"px",height:a+"px",overflow:"auto",position:"relative"})}else this._singleChild&&this._singleChild.resize&&this._singleChild.resize()},_position:function(){if(!t.contains(this.ownerDocumentBody,"dojoMove")){var a=this.domNode,b=p.getBox(this.ownerDocument),d=this._relativePosition,c=d?null:n.position(a);g.set(a,{left:Math.floor(b.l+(d?d.x:(b.w-c.w)/2))+"px",top:Math.floor(b.t+(d?d.y:(b.h-c.h)/2))+"px"})}},_onKey:function(a){if(a.keyCode==x.TAB){this._getFocusItems(this.domNode);var b=a.target;
this._firstFocusItem==this._lastFocusItem?(a.stopPropagation(),a.preventDefault()):b==this._firstFocusItem&&a.shiftKey?(f.focus(this._lastFocusItem),a.stopPropagation(),a.preventDefault()):b==this._lastFocusItem&&!a.shiftKey&&(f.focus(this._firstFocusItem),a.stopPropagation(),a.preventDefault())}else this.closable&&a.keyCode==x.ESCAPE&&(this.onCancel(),a.stopPropagation(),a.preventDefault())},show:function(){if(!this.open){this._started||this.startup();this._alreadyInitialized||(this._setup(),this._alreadyInitialized=
!0);this._fadeOutDeferred&&(this._fadeOutDeferred.cancel(),k.hide(this));var a=p.get(this.ownerDocument);this._modalconnects.push(y(a,"scroll",e.hitch(this,"resize")));this._modalconnects.push(y(this.domNode,"keydown",e.hitch(this,"_onKey")));g.set(this.domNode,{opacity:0,display:""});this._set("open",!0);this._onShow();this._size();this._position();var b;this._fadeInDeferred=new v(e.hitch(this,function(){b.stop();delete this._fadeInDeferred}));a=this._fadeInDeferred.promise;b=w.fadeIn({node:this.domNode,
duration:this.duration,beforeBegin:e.hitch(this,function(){k.show(this,this.underlayAttrs)}),onEnd:e.hitch(this,function(){this.autofocus&&k.isTop(this)&&(this._getFocusItems(this.domNode),f.focus(this._firstFocusItem));this._fadeInDeferred.resolve(!0);delete this._fadeInDeferred})}).play();return a}},hide:function(){if(this._alreadyInitialized&&this.open){this._fadeInDeferred&&this._fadeInDeferred.cancel();var a;this._fadeOutDeferred=new v(e.hitch(this,function(){a.stop();delete this._fadeOutDeferred}));
this._fadeOutDeferred.then(e.hitch(this,"onHide"));var b=this._fadeOutDeferred.promise;a=w.fadeOut({node:this.domNode,duration:this.duration,onEnd:e.hitch(this,function(){this.domNode.style.display="none";k.hide(this);this._fadeOutDeferred.resolve(!0);delete this._fadeOutDeferred})}).play();this._scrollConnected&&(this._scrollConnected=!1);for(var c;c=this._modalconnects.pop();)c.remove();this._relativePosition&&delete this._relativePosition;this._set("open",!1);return b}},resize:function(){"none"!=
this.domNode.style.display&&(this._size(),l("touch")||this._position())},destroy:function(){this._fadeInDeferred&&this._fadeInDeferred.cancel();this._fadeOutDeferred&&this._fadeOutDeferred.cancel();this._moveable&&this._moveable.destroy();for(var a;a=this._modalconnects.pop();)a.remove();k.hide(this);this.inherited(arguments)}});l("dojo-bidi")&&(h=s("dijit._DialogBase",h,{_setTitleAttr:function(a){this._set("title",a);this.titleNode.innerHTML=a;this.applyTextDir(this.titleNode)},_setTextDirAttr:function(a){this._created&&
this.textDir!=a&&(this._set("textDir",a),this.set("title",this.title))}}));var m=s("dijit.Dialog",[J,h],{});m._DialogBase=h;var k=m._DialogLevelManager={_beginZIndex:950,show:function(a,b){c[c.length-1].focus=f.curNode;var d=c[c.length-1].dialog?c[c.length-1].zIndex+2:m._DialogLevelManager._beginZIndex;g.set(a.domNode,"zIndex",d);u.show(b,d-1);c.push({dialog:a,underlayAttrs:b,zIndex:d})},hide:function(a){if(c[c.length-1].dialog==a){c.pop();var b=c[c.length-1];1==c.length?u.hide():u.show(b.underlayAttrs,
b.zIndex-1);if(a.refocus){a=b.focus;if(b.dialog&&(!a||!A.isDescendant(a,b.dialog.domNode)))b.dialog._getFocusItems(b.dialog.domNode),a=b.dialog._firstFocusItem;if(a)try{a.focus()}catch(d){}}}else b=q.indexOf(q.map(c,function(a){return a.dialog}),a),-1!=b&&c.splice(b,1)},isTop:function(a){return c[c.length-1].dialog==a}},c=m._dialogStack=[{dialog:null,focus:null,underlayAttrs:null}];f.watch("curNode",function(a,b,d){a=c[c.length-1].dialog;if(d&&a&&!a._fadeOutDeferred&&d.ownerDocument==a.ownerDocument){do if(d==
a.domNode||t.contains(d,"dijitPopup"))return;while(d=d.parentNode);a.focus()}});l("dijit-legacy-requires")&&C(0,function(){z(["dijit/TooltipDialog"])});return m});
//@ sourceMappingURL=Dialog.js.map