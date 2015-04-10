//>>built
define("dojox/av/_Media",["dojo"],function(b){b.experimental("dojox.av.FLVideo");return b.declare("dojox.av._Media",null,{mediaUrl:"",initialVolume:1,autoPlay:!1,bufferTime:2E3,minBufferTime:300,updateTime:100,id:"",isDebug:!1,percentDownloaded:0,_flashObject:null,flashMedia:null,allowScriptAccess:"always",allowNetworking:"all",wmode:"transparent",allowFullScreen:!0,_initStatus:function(){this.status="ready";this._positionHandle=b.connect(this,"onPosition",this,"_figureStatus")},getTime:function(){return this.flashMedia.getTime()},
onLoad:function(a){},onDownloaded:function(a){},onClick:function(a){},onSwfSized:function(a){},onMetaData:function(a,b){console.warn("onMeta",a);this.duration=a.duration},onPosition:function(a){},onStart:function(a){},onPlay:function(a){},onPause:function(a){},onEnd:function(a){},onStop:function(){},onBuffer:function(a){this.isBuffering=a},onError:function(a,b){console.warn("ERROR-"+a.type.toUpperCase()+":",a.info.code," - URL:",b)},onStatus:function(a){},onPlayerStatus:function(a){},onResize:function(){},
_figureStatus:function(){var a=this.getTime();if("stopping"==this.status)this.status="stopped",this.onStop(this._eventFactory());else if("ending"==this.status&&a==this._prevPos)this.status="ended",this.onEnd(this._eventFactory());else if(this.duration&&a>this.duration-0.5)this.status="ending";else if(0===a){if("ready"!=this.status&&(this.status="stopped","stopped"!=this._prevStatus))this.onStop(this._eventFactory())}else if("ready"==this.status)this.status="started",this.onStart(this._eventFactory()),
this.onPlay(this._eventFactory());else if(this.isBuffering)this.status="buffering";else if("started"==this.status||"playing"==this.status&&a!=this._prevPos)this.status="playing";else if(!this.isStopped&&"playing"==this.status&&a==this._prevPos){if(this.status="paused",console.warn("pause",a,this._prevPos),this.status!=this._prevStatus)this.onPause(this._eventFactory())}else if(("paused"==this.status||"stopped"==this.status)&&a!=this._prevPos)this.status="started",this.onPlay(this._eventFactory());
this._prevPos=a;this._prevStatus=this.status;this.onStatus(this.status)},_eventFactory:function(){return{status:this.status}},_sub:function(a,c){b.subscribe(this.id+"/"+a,this,c)},_normalizeVolume:function(a){if(1<a)for(;1<a;)a*=0.1;return a},_normalizeUrl:function(a){if(a&&(0>a.toLowerCase().indexOf("http")||0==a.indexOf("/"))){var b=window.location.href.split("/");b.pop();b=b.join("/")+"/";a=b+a}return a},destroy:function(){this.flashMedia?(b.forEach(this._subs,function(a){b.unsubscribe(a)}),b.forEach(this._cons,
function(a){b.disconnect(a)}),this._flashObject.destroy()):this._cons.push(b.connect(this,"onLoad",this,"destroy"))}})});
//@ sourceMappingURL=_Media.js.map