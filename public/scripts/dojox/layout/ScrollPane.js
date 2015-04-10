//>>built
require({cache:{"url:dojox/layout/resources/ScrollPane.html":'\x3cdiv class\x3d"dojoxScrollWindow" dojoAttachEvent\x3d"onmouseenter: _enter, onmouseleave: _leave"\x3e\n    \x3cdiv class\x3d"dojoxScrollWrapper" style\x3d"${style}" dojoAttachPoint\x3d"wrapper" dojoAttachEvent\x3d"onmousemove: _calc"\x3e\n\t\x3cdiv class\x3d"dojoxScrollPane" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv dojoAttachPoint\x3d"helper" class\x3d"dojoxScrollHelper"\x3e\x3cspan class\x3d"helperInner"\x3e|\x3c/span\x3e\x3c/div\x3e\n\x3c/div\x3e'}});
define("dojox/layout/ScrollPane","dojo/_base/kernel dojo/_base/declare dojo/_base/html dojo/_base/fx dijit/_Templated dijit/layout/ContentPane dojo/dom-class dojo/text!./resources/ScrollPane.html".split(" "),function(f,g,c,e,h,k,l,m){f.experimental("dojox.layout.ScrollPane");return g("dojox.layout.ScrollPane",[k,h],{_line:null,_lo:null,_offset:15,orientation:"vertical",autoHide:!0,templateString:m,resize:function(a){a&&(a.h&&c.style(this.domNode,"height",a.h+"px"),a.w&&c.style(this.domNode,"width",
a.w+"px"));a=this._dir;var b=this._vertical,d=this.containerNode[b?"scrollHeight":"scrollWidth"];c.style(this.wrapper,this._dir,this.domNode.style[this._dir]);this._lo=c.coords(this.wrapper,!0);if(this._size=Math.max(0,d-this._lo[b?"h":"w"])){this.helper.style.display="";this._line=new e._Line(0-this._offset,this._size+2*this._offset);var b=this._lo[b?"h":"w"],d=Math.min(1,b/d),f=b*d;this._helpLine=new e._Line(0,Math.floor(b-b*d));c.style(this.helper,a,Math.floor(f)+"px")}else this.helper.style.display=
"none",this.wrapper[this._scroll]=0},postCreate:function(){this.inherited(arguments);this.autoHide&&(this._showAnim=e._fade({node:this.helper,end:0.5,duration:350}),this._hideAnim=e.fadeOut({node:this.helper,duration:750}));(this._vertical="vertical"==this.orientation)?(this._dir="height",this._edge="top",this._scroll="scrollTop"):(l.add(this.containerNode,"dijitInline"),this._dir="width",this._edge="left",this._scroll="scrollLeft");this._hideAnim&&this._hideAnim.play();c.style(this.wrapper,"overflow",
"hidden")},_set:function(a){this._size&&"focused"!==a&&(this.wrapper[this._scroll]=Math.floor(this._line.getValue(a)),c.style(this.helper,this._edge,Math.floor(this._helpLine.getValue(a))+"px"))},_calc:function(a){this._lo||this.resize();this._set(this._vertical?(a.pageY-this._lo.y)/this._lo.h:(a.pageX-this._lo.x)/this._lo.w)},_enter:function(a){this._hideAnim&&("playing"==this._hideAnim.status()&&this._hideAnim.stop(),this._showAnim.play())},_leave:function(a){this._hideAnim&&this._hideAnim.play()}})});
//@ sourceMappingURL=ScrollPane.js.map