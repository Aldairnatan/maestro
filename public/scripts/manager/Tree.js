//>>built
define("manager/Tree",["dojo/_base/declare","dojo/_base/window","dojo/store/Memory","dijit/tree/ObjectStoreModel","dijit/Tree"],function(b,f,c,d,e){return b("Manager.Tree",[e],{constructor:function(a){this.root=a.root?a.root:"root";this.store=new c({data:a.data,getChildren:function(a){return this.query({parent:a.id})}});this.model=new d({store:this.store,mayHaveChildren:function(a){return"folder"==a.type},query:{id:this.root}});this.layout=a.layout;this.onClick=a.selectEvent;this.iconFolderOpened=
a.iconFolderOpened?a.iconFolderOpened:"iconFolderOpened";this.iconFolderClosed=a.iconFolderClosed?a.iconFolderClosed:"iconFolderClosed";this.iconLeaf=a.iconLeaf?a.iconLeaf:"iconLeaf"},store:null,model:null,getIconClass:function(a,b){return(!a||"folder"==a.type?b?this.iconFolderOpened:this.iconFolderClosed:this.iconLeaf)+this.layout},showRoot:!1})});
//@ sourceMappingURL=Tree.js.map