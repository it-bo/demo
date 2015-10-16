/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/editing/tools/DropDownToolBase","dojo/_base/declare dojo/_base/lang dojo/has dojo/dom-style dijit/registry dijit/Menu dijit/form/ComboButton esri/dijit/editing/tools/ToolBase esri/kernel esri/lang".split(" "),function(c,e,f,d,g,h,k,l,m,n){c=c([k,l],{declaredClass:"esri.dijit.editing.tools.DropDownToolBase",_enabled:!1,_checked:!1,postCreate:function(){this._tools=[];this._createTools();this.inherited(arguments);this._setShowLabelAttr&&this._setShowLabelAttr(!1)},destroy:function(){var a,
b=this._tools;for(a in b)b.hasOwnProperty(a)&&n.isDefined(b[a])&&b[a].destroy();this.inherited(arguments)},_createTools:function(){var a,b=new h;this.dropDown=b;for(a in this._tools)this._tools.hasOwnProperty(a)&&b.addChild(this._tools[a]);this._activeTool=b.getChildren()[0];this._updateUI()},activate:function(a){this.inherited(arguments);this._activeTool?this._activeTool.activate():this._activateDefaultTool()},deactivate:function(){this.inherited(arguments);this._activeTool&&this._activeTool.deactivate()},
enable:function(a){for(var b in this._tools)this._tools.hasOwnProperty(b)&&this._tools[b].enable(a);this.setEnabled(!0);this.inherited(arguments)},setChecked:function(a){this._checked=a;this._updateUI()},_onDrawEnd:function(a){},onLayerChange:function(a,b,c){this._activeTool=null;this._activeType=b;this._activeTemplate=c;this._activeLayer=a},onItemClicked:function(a,b){this._activeTool&&this._activeTool.deactivate();this._activeTool=g.byId(a);!1===this._checked?this._onClick():(this._updateUI(),this._activeTool&&
(this._activeTool.activate(),this._activeTool.setChecked(!0)))},_onClick:function(a){!1!==this._enabled&&(this._checked=!this._checked,this.inherited(arguments))},_updateUI:function(){this.attr("disabled",!this._enabled);d.set(this.focusNode,{outline:"none"});d.set(this.titleNode,{padding:"0px",border:"none"});this._checked?d.set(this.titleNode,{backgroundColor:"#D4DFF2",border:"1px solid #316AC5"}):d.set(this.titleNode,{backgroundColor:"",border:""});this._activeTool&&(this.attr("iconClass",this._checked?
this._activeTool._enabledIcon:this._activeTool._disabledIcon),this.attr("label",this._activeTool.label))}});f("extend-esri")&&e.setObject("dijit.editing.tools.DropDownToolBase",c,m);return c});