//>>built
define("dojox/wire/TableAdapter",["dijit","dojo","dojox","dojo/require!dojox/wire/CompositeWire"],function(f,d,e){d.provide("dojox.wire.TableAdapter");d.require("dojox.wire.CompositeWire");d.declare("dojox.wire.TableAdapter",e.wire.CompositeWire,{_wireClass:"dojox.wire.TableAdapter",constructor:function(a){this._initializeChildren(this.columns)},_getValue:function(a){if(!a||!this.columns)return a;d.isArray(a)||(a=[a]);var b=[],c;for(c in a){var e=this._getRow(a[c]);b.push(e)}return b},_setValue:function(a,
b){throw Error("Unsupported API: "+this._wireClass+"._setValue");},_getRow:function(a){var b=d.isArray(this.columns)?[]:{},c;for(c in this.columns)b[c]=this.columns[c].getValue(a);return b}})});
//@ sourceMappingURL=TableAdapter.js.map