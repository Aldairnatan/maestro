//>>built
define("manager/JSGrid",["dojo/_base/declare"],function(e){return e("Manager.JSGrid",[],{constructor:function(b,a){this.name=b;this.page=a;this.idSelect=this.name+"_SELECT_CHECKED";this.firstIndex=0;this.data=null;this.hover();this.widget=null},hover:function(){dojo.query("table#"+this.name+" tbody tr").forEach(function(b,a,d){manager.hover(b.id,function(c){c.currentTarget.originalClassName="row"+a%2;c.currentTarget.className=c.currentTarget.className.replace(c.currentTarget.originalClassName,"rowenter")},
function(a){a.currentTarget.className=a.currentTarget.className.replace("rowenter",a.currentTarget.originalClassName)})})},selectRow:function(b){dojo.query("table#"+this.name+" tbody tr").forEach(function(a,d,c){a.index=d;dojo.connect(a,"ondblclick",function(a){b(a.currentTarget.index)})})},setData:function(b){this.data=b},changeRow:function(b){var a=manager.getElementById("row"+this.name+"["+b+"]");dijit.byId(this.name+"_SELECT["+b+"]").get("checked")?"row1"==a.className?a.className="row1checked":
"row2"==a.className?a.className="row2checked":"row0"==a.className&&(a.className="row0checked"):"row1checked"==a.className?a.className="row1":"row2checked"==a.className?a.className="row2":"row0checked"==a.className&&(a.className="row0")},check:function(b,a){var d=dijit.byId(this.name+"_SELECT["+b+"]"),c=manager.getElementById(this.idSelect);d.get("checked")?c.value=(""!=c.value?c.value+":":"")+a:c.value=c.value.replace(RegExp("^"+a+":?|"+a+":?|:?"+a+"$"),"");this.changeRow(b)},checkAll:function(b){for(var a=
0;a<b;a++){var d=this.firstIndex+a,c=dijit.byId(this.name+"_SELECT["+d+"]");dijit.byId(this.name+"chkAll").checked!=c.checked&&(c.checked?(value=c.get("value"),c.set("checked",!1)):(c.set("checked",!0),value=c.get("value")),this.check(d,value))}},checkEachRow:function(b){for(var a=0;a<b;a++)this.changeRow(this.firstIndex+a)},goPage:function(b){manager.setElementValueById("_PAGING","yes");manager.setElementValueById(this.name+"_PAGE",this.page);manager.setElementValueById(this.name+"_GOPAGE",b);manager.setElementValueById("_GRIDNAME",
this.name);manager.doPostBack(this.name)}})});
//@ sourceMappingURL=JSGrid.js.map