//>>built
define("manager/DataGrid",["dojo/_base/declare","dojox/grid/DataGrid"],function(b,c){return b("Manager.DataGrid",[c],{constructor:function(a,b){this.obj=this;this.name=a;this.page=b;this.widget=null},canSort:function(a){return 3!=a},get:function(a){return[this.index,a].join(", ")},removeEscape:function(a){return a?a.replace("\x26lt","\x3c"):""},goPage:function(a){manager.setElementValueById("_PAGING","yes");manager.setElementValueById(this.name+"_PAGE",this.page);manager.setElementValueById(this.name+
"_GOPAGE",a);manager.setElementValueById("_GRIDNAME",this.name);manager.doPostBack(this.name)}})});
//@ sourceMappingURL=DataGrid.js.map