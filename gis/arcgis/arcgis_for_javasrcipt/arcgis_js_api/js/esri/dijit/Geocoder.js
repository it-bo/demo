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
require({cache:{"url:esri/dijit/templates/Geocoder.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.GeocoderContainerClass}" role\x3d"presentation"\x3e\n    \t\x3cdiv class\x3d"${_css.GeocoderClass}" data-dojo-attach-point\x3d"containerNode" role\x3d"presentation"\x3e\n    \t\t\x3cdiv title\x3d"${_i18n.widgets.Geocoder.main.searchButtonTitle}" tabindex\x3d"0" class\x3d"${_css.searchButtonClass} ${_css.GeocoderIconClass}" data-dojo-attach-point\x3d"submitNode" role\x3d"button"\x3e\x3c/div\x3e\n    \t\t\x3cdiv aria-haspopup\x3d"true" id\x3d"${id}_menu_button" title\x3d"${_i18n.widgets.Geocoder.main.geocoderMenuButtonTitle}" tabindex\x3d"0" class\x3d"${_css.geocoderMenuArrowClass} ${_css.GeocoderIconClass}" data-dojo-attach-point\x3d"geocoderMenuArrowNode" role\x3d"button" aria-expanded\x3d"false"\x3e\x3c/div\x3e\n    \t\t\x3cinput aria-haspopup\x3d"true" id\x3d"${id}_input" tabindex\x3d"0" placeholder\x3d"" value\x3d"${value}" autocomplete\x3d"off" type\x3d"text" data-dojo-attach-point\x3d"inputNode" role\x3d"textbox"\x3e\n    \t\t\x3cdiv tabindex\x3d"0" class\x3d"${_css.clearButtonClass} ${_css.GeocoderIconClass}" data-dojo-attach-point\x3d"clearNode" role\x3d"button"\x3e\x3c/div\x3e\n    \t\t\x3cdiv class\x3d"${_css.GeocoderClearClass}" role\x3d"presentation"\x3e\x3c/div\x3e\n    \t\x3c/div\x3e\n    \t\x3cdiv class\x3d"${_css.resultsContainerClass}" data-dojo-attach-point\x3d"resultsNode" aria-labelledby\x3d"${id}_input" role\x3d"menu" aria-hidden\x3d"true"\x3e\x3c/div\x3e\n    \t\x3cdiv class\x3d"${_css.geocoderMenuClass}" data-dojo-attach-point\x3d"geocoderMenuNode" role\x3d"presentation"\x3e\n    \t\t\x3cdiv class\x3d"${_css.geocoderMenuHeaderClass}"\x3e\n    \t\t\t${_i18n.widgets.Geocoder.main.geocoderMenuHeader}\n    \t\t\t\x3cdiv role\x3d"button" data-dojo-attach-point\x3d"geocoderMenuCloseNode" title\x3d"${_i18n.widgets.Geocoder.main.geocoderMenuCloseTitle}" tabindex\x3d"0" class\x3d"${_css.geocoderMenuCloseClass}"\x3e\x3c/div\x3e\n    \t\t\t\x3cdiv class\x3d"${_css.GeocoderClearClass}" role\x3d"presentation"\x3e\x3c/div\x3e\n    \t\t\x3c/div\x3e\n    \t\t\x3cdiv data-dojo-attach-point\x3d"geocoderMenuInsertNode" aria-labelledby\x3d"${id}_menu_button" role\x3d"menu" aria-hidden\x3d"true"\x3e\x3c/div\x3e\n    \t\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/Geocoder","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/event dojo/dom-attr dojo/dom-class dojo/dom-style dojo/dom-construct dojo/json dojo/keys dojo/on dojo/query dojo/i18n!esri/nls/jsapi dojo/text!esri/dijit/templates/Geocoder.html dojo/uacss dijit/a11yclick dijit/_TemplatedMixin dijit/focus esri/kernel esri/SpatialReference esri/graphic esri/request esri/dijit/_EventedWidget esri/geometry/Point esri/geometry/Extent esri/tasks/locator esri/geometry/scaleUtils".split(" "),
function(q,f,r,n,h,k,m,B,u,d,l,s,t,C,D,p,E,v,F,w,x,G,H,y,z,A,I){q=q([H,E],{declaredClass:"esri.dijit.Geocoder",templateString:C,_eventMap:{select:["result"],"find-results":["results"],"auto-complete":["results"],"geocoder-select":["geocoder"],clear:!0,"enter-key-select":!0,load:!0},constructor:function(a,b){this._css={GeocoderContainerClass:"esriGeocoderContainer",GeocoderClass:"esriGeocoder",GeocoderMultipleClass:"esriGeocoderMultiple",GeocoderIconClass:"esriGeocoderIcon",GeocoderActiveClass:"esriGeocoderActive",
GeocoderResultsOpenClass:"esriGeocoderResultsOpen",GeocoderMenuOpenClass:"esriGeocoderMenuOpen",loadingClass:"esriGeocoderLoading",resultsContainerClass:"esriGeocoderResults",resultsItemClass:"esriGeocoderResult",resultsItemEvenClass:"esriGeocoderResultEven",resultsItemOddClass:"esriGeocoderResultOdd",resultsItemFirstClass:"esriGeocoderResultFirst",resultsItemLastClass:"esriGeocoderResultLast",resultsPartialMatchClass:"esriGeocoderResultPartial",searchButtonClass:"esriGeocoderSearch",clearButtonClass:"esriGeocoderReset",
hasValueClass:"esriGeocoderHasValue",geocoderMenuClass:"esriGeocoderMenu",geocoderMenuHeaderClass:"esriGeocoderMenuHeader",geocoderMenuCloseClass:"esriGeocoderMenuClose",activeMenuClass:"esriGeocoderMenuActive",geocoderMenuArrowClass:"esriGeocoderMenuArrow",geocoderSelectedClass:"esriGeocoderSelected",geocoderSelectedCheckClass:"esriGeocoderSelectedCheck",GeocoderClearClass:"esriGeocoderClearFloat"};this.options={autoComplete:!1,arcgisGeocoder:!0,value:"",theme:"simpleGeocoder",activeGeocoderIndex:0,
maxLocations:6,minCharacters:3,searchDelay:300,geocoderMenu:!0,autoNavigate:!0,showResults:!0,map:null,activeGeocoder:null,geocoders:null,zoomScale:1E4};var c=f.mixin({},this.options,a);this.set("autoComplete",c.autoComplete);this.set("arcgisGeocoder",c.arcgisGeocoder);this.set("value",c.value);this.set("theme",c.theme);this.set("activeGeocoderIndex",c.activeGeocoderIndex);this.set("maxLocations",c.maxLocations);this.set("minCharacters",c.minCharacters);this.set("searchDelay",c.searchDelay);this.set("geocoderMenu",
c.geocoderMenu);this.set("autoNavigate",c.autoNavigate);this.set("showResults",c.showResults);this.set("map",c.map);this.set("activeGeocoder",c.activeGeocoder);this.set("geocoders",c.geocoders);this.set("zoomScale",c.zoomScale);this.set("results",[]);this._i18n=t;this._deferreds=[];this._defaultSR=new w(4326);this.watch("value",this._updateValue);this.watch("theme",this._updateTheme);this.watch("activeGeocoder",this._setActiveGeocoder);this.watch("activeGeocoderIndex",this._setActiveGeocoderIndex);
this.watch("geocoders",this._updateGeocoder);this.watch("arcgisGeocoder",this._updateGeocoder);this.watch("geocoderMenu",this._updateGeocoder);this.watch("map",this._setupEvents);this.domNode=b},startup:function(){if(this._geocoders.length)if(this.domNode)if(this.get("map"))if(this.get("map").loaded)this._init();else l.once(this.get("map"),"load",f.hitch(this,function(){this._init()}));else this._init();else console.log("domNode is undefined."),this.destroy();else console.log("No geocoders defined."),
this.destroy()},postCreate:function(){this.inherited(arguments);this.own(l(this.submitNode,p,f.hitch(this,this._findThenSelect)));this.own(l(this.geocoderMenuArrowNode,p,f.hitch(this,this._toggleGeolocatorMenu)));this.own(l(this.inputNode,p,f.hitch(this,this._inputClick)));this.own(l(this.clearNode,p,f.hitch(this,this.clear)));this.own(l(this.geocoderMenuCloseNode,p,f.hitch(this,this._hideGeolocatorMenu)));this._updateGeocoder();this._setupEvents();this.get("value")&&this._checkStatus();this._hideMenus()},
destroy:function(){this._removeEvents();B.empty(this.domNode);this.inherited(arguments)},clear:function(){this.onClear();h.set(this.inputNode,"value","");this.set("value","");this.set("results",[]);k.remove(this.containerNode,this._css.hasValueClass);h.set(this.clearNode,"title","");this._hideMenus();this._hideLoading()},show:function(){m.set(this.domNode,"display","block")},hide:function(){m.set(this.domNode,"display","none")},find:function(a){var b=new r;if(a)if("string"===typeof a)this._queryDeferred(a).then(function(a){b.resolve(a)});
else if("object"===typeof a&&a.hasOwnProperty("geometry")){var c;switch(a.geometry.type){case "extent":c=a.geometry.getCenter();break;case "multipoint":c=a.geometry.getExtent().getCenter();break;case "point":c=a.geometry;break;case "polygon":c=a.geometry.getExtent().getCenter();break;case "polyline":c=a.geometry.getExtent().getCenter()}c&&this._reverseGeocodePoint(c,a.geometry).then(function(c){c.results[0]&&(a.hasOwnProperty("attributes")&&c.results[0].feature.setAttributes(f.mixin(c.results[0].feature.attributes,
a.attributes)),a.hasOwnProperty("infoTemplate")&&c.results[0].feature.setInfoTemplate(a.infoTemplate),a.hasOwnProperty("symbol")&&c.results[0].feature.setSymbol(a.symbol));b.resolve(c)},function(a){b.reject(a)})}else"object"===typeof a&&"point"===a.type?this._reverseGeocodePoint(a).then(function(a){b.resolve(a)},function(a){b.reject(a)}):a instanceof Array&&2===a.length?(c=new y(a,new w({wkid:4326})),this._reverseGeocodePoint(c).then(function(a){b.resolve(a)},function(a){b.reject(a)})):b.reject("Invalid find type");
else this._queryDeferred(this.get("value")).then(function(a){b.resolve(a)});return b.promise},focus:function(){v.focus(this.inputNode)},blur:function(){v.curNode&&v.curNode.blur();this.inputNode.blur();this._hideMenus()},select:function(a){this.onSelect(a);this._hideMenus();this._hideLoading();this.get("autoNavigate")&&(a&&a.hasOwnProperty("extent")&&this.get("map"))&&this.get("map").setExtent(a.extent)},onSelect:function(){},onFindResults:function(){},onAutoComplete:function(){},onGeocoderSelect:function(){},
onClear:function(){},onEnterKeySelect:function(){},onLoad:function(){},_init:function(){this.set("loaded",!0);this.onLoad()},_queryDeferred:function(a){var b=new r;this._query({delay:0,search:a}).then(f.hitch(this,function(a){this.onFindResults(a);b.resolve(a)}),f.hitch(this,function(a){this.onFindResults(a);b.reject(a)}));return b.promise},_reverseGeocodePoint:function(a,b){var c=new r;if(a&&this.get("activeGeocoder")){var e=b||a;this._reverseTask=new A(this.get("activeGeocoder").url);this._reverseTask.outSpatialReference=
this._defaultSR;this.get("map")&&(this._reverseTask.outSpatialReference=this.get("map").spatialReference);var g=this.get("activeGeocoder").distance||1500;this._reverseTask.locationToAddress(a,g,f.hitch(this,function(a){a={results:[this._hydrateResult(a)],geometry:e};this.onFindResults(a);c.resolve(a)}),f.hitch(this,function(a){c.reject(a)}))}else c.reject("no point or active geocoder defined");return c.promise},_setEsriGeocoder:function(){this.get("arcgisGeocoder")?("object"===typeof this.get("arcgisGeocoder")?
this._arcgisGeocoder=this.get("arcgisGeocoder"):this._arcgisGeocoder={},this._arcgisGeocoder.hasOwnProperty("suggest")||(this._arcgisGeocoder.suggest=!0),this._arcgisGeocoder.url||(this._arcgisGeocoder.url=location.protocol+"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),this._arcgisGeocoder.name||(this._arcgisGeocoder.name=t.widgets.Geocoder.esriGeocoderName),this._arcgisGeocoder.hasOwnProperty("localSearchOptions")||(this._arcgisGeocoder.localSearchOptions={minScale:3E5,distance:5E4}),
this.set("arcgisGeocoder",this._arcgisGeocoder)):this.set("arcgisGeocoder",!1)},_setActiveGeocoder:function(){this.set("activeGeocoder",this._geocoders[this.get("activeGeocoderIndex")]);this._updatePlaceholder()},_setGeocoderList:function(){var a=[];this.get("arcgisGeocoder")&&(a=a.concat([this._arcgisGeocoder]));this.get("geocoders")&&this.get("geocoders").length&&(a=a.concat(this.get("geocoders")));this._geocoders=a},_updateGeocoder:function(){this.set("activeGeocoderIndex",0);this._setEsriGeocoder();
this._setGeocoderList();this._setActiveGeocoder();this._insertGeocoderMenuItems()},_updatePlaceholder:function(){this._placeholder="";this.get("activeGeocoder")&&this.get("activeGeocoder").placeholder&&(this._placeholder=this.get("activeGeocoder").placeholder);h.set(this.inputNode,"placeholder",this._placeholder);h.set(this.submitNode,"title",this._placeholder)},_updateValue:function(a,b,c){this._ignoreUpdateValue||(h.set(this.inputNode,"value",c),this._checkStatus())},_updateTheme:function(a,b,c){k.remove(this.domNode,
b);k.add(this.domNode,c)},_setActiveGeocoderIndex:function(a,b,c){this.set("activeGeocoderIndex",c);this._setActiveGeocoder();this._hideMenus();this._insertGeocoderMenuItems();a={attr:this.get("activeGeocoder"),oldVal:b,newVal:c};this.onGeocoderSelect(a)},_query:function(a){a||(a={delay:0});a.search||(a.search=this.get("value"));var b=new r;this._deferreds.push(b);this._queryTimer=setTimeout(f.hitch(this,function(){this._performQuery(b,a)}),a.delay);return b.promise},_performQuery:function(a,b){if(b.search){this._hideGeolocatorMenu();
this._showLoading();var c,e=this.get("activeGeocoder").outFields||"",g="";this.get("activeGeocoder").prefix&&(g+=this.get("activeGeocoder").prefix);g+=b.search;this.get("activeGeocoder").suffix&&(g+=this.get("activeGeocoder").suffix);c=this.get("maxLocations")||6;if(this.get("activeGeocoder").suggest){var d=this._defaultSR;this.get("map")&&(d=this.get("map").spatialReference);c={text:g,maxLocations:c,outSR:d.wkid||u.stringify(d.toJson()),f:"json"};if(this.get("map")&&(this.get("activeGeocoder").localSearchOptions&&
this.get("activeGeocoder").localSearchOptions.hasOwnProperty("distance")&&this.get("activeGeocoder").localSearchOptions.hasOwnProperty("minScale"))&&(g=this.get("map").extent.getCenter().normalize(),d=this.get("map").getScale(),!this.get("activeGeocoder").localSearchOptions.minScale||d&&d<=parseFloat(this.get("activeGeocoder").localSearchOptions.minScale)))c.location=u.stringify(g.toJson()),c.distance=this.get("activeGeocoder").localSearchOptions.distance;b.magicKey&&(c.magicKey=b.magicKey);e&&(c.outFields=
e);this.get("activeGeocoder").sourceCountry&&(c.sourceCountry=this.get("activeGeocoder").sourceCountry);this.get("activeGeocoder").searchExtent&&(e={xmin:this.get("activeGeocoder").searchExtent.xmin,ymin:this.get("activeGeocoder").searchExtent.ymin,xmax:this.get("activeGeocoder").searchExtent.xmax,ymax:this.get("activeGeocoder").searchExtent.ymax,spatialReference:this.get("activeGeocoder").searchExtent.spatialReference.toJson()},c.bbox=u.stringify(e));e="/find";b.autoComplete&&this.get("activeGeocoder").suggest&&
(e="/suggest");e=this.get("activeGeocoder").url+e;b.autoComplete&&(this.get("activeGeocoder").suggest&&this.get("activeGeocoder").suggestUrl)&&(e=this.get("activeGeocoder").suggestUrl);G({url:e,content:c,handleAs:"json",callbackParamName:"callback",load:f.hitch(this,function(c){this._receivedResults(c.suggestions||c.locations,a,b)})})}else c={address:{},maxLocations:c},b.magicKey&&(c.magicKey=b.magicKey),this.get("activeGeocoder").singleLineFieldName?c.address[this.get("activeGeocoder").singleLineFieldName]=
g:c.address["Single Line Input"]=g,e&&(c.outFields=[e]),this.get("activeGeocoder").searchExtent&&(c.searchExtent=this.get("activeGeocoder").searchExtent),this._task=new A(this.get("activeGeocoder").url),this._task.outSpatialReference=this._defaultSR,this.get("map")&&(this._task.outSpatialReference=this.get("map").spatialReference),this._task.addressToLocations(c,f.hitch(this,function(c){this._receivedResults(c,a,b)}),f.hitch(this,function(c){this._receivedResults(c,a,b)}))}else this._hideLoading(),
a.reject("no search to perform")},_showResults:function(){this._hideGeolocatorMenu();var a="";if(this.get("results")&&this.get("results").length&&this.resultsNode){for(var b=this.get("value"),c=RegExp("("+b+")","gi"),a=a+'\x3cul role\x3d"presentation"\x3e',b=0;b<this.get("results").length&&5>b;++b){var e=this.get("results")[b].text||this.get("results")[b].name,g=this._css.resultsItemClass+" ",g=0===b%2?g+this._css.resultsItemOddClass:g+this._css.resultsItemEvenClass;0===b?g+=" "+this._css.resultsItemFirstClass:
b===this.get("results").length-1&&(g+=" "+this._css.resultsItemLastClass);a+='\x3cli title\x3d"'+e+'" data-text\x3d"'+e+'" data-item\x3d"true" data-index\x3d"'+b+'" role\x3d"menuitem" tabindex\x3d"0" class\x3d"'+g+'"\x3e'+e.replace(c,'\x3cstrong class\x3d"'+this._css.resultsPartialMatchClass+'"\x3e$1\x3c/strong\x3e')+"\x3c/li\x3e"}a+="\x3c/ul\x3e";this.resultsNode&&(this.resultsNode.innerHTML=a);this._autoCompleteEvent();this._showResultsMenu()}else this.resultsNode&&(this.resultsNode.innerHTML=a),
this._hideResultsMenu()},_autoComplete:function(){this._query({delay:this.get("searchDelay"),autoComplete:!0,search:this.get("value")}).then(f.hitch(this,function(a){this.onAutoComplete(a);this.get("showResults")&&this._showResults(a)}))},_receivedResults:function(a,b){this._hideLoading();var c=this._hydrateResults(a);this.set("results",c);c={results:c,value:this.get("value")};b.resolve(c)},_showLoading:function(){k.add(this.containerNode,this._css.loadingClass)},_hideLoading:function(){k.remove(this.containerNode,
this._css.loadingClass)},_showGeolocatorMenu:function(){k.add(this.containerNode,this._css.activeMenuClass);k.add(this.domNode,this._css.GeocoderMenuOpenClass);m.set(this.geocoderMenuNode,"display","block");h.set(this.geocoderMenuInsertNode,"aria-hidden","false");h.set(this.geocoderMenuArrowNode,"aria-expanded","true")},_hideGeolocatorMenu:function(){k.remove(this.containerNode,this._css.activeMenuClass);k.remove(this.domNode,this._css.GeocoderMenuOpenClass);m.set(this.geocoderMenuNode,"display",
"none");h.set(this.geocoderMenuInsertNode,"aria-hidden","true");h.set(this.geocoderMenuArrowNode,"aria-expanded","false")},_toggleGeolocatorMenu:function(){this._hideResultsMenu();"block"===m.get(this.geocoderMenuNode,"display")?this._hideGeolocatorMenu():this._showGeolocatorMenu()},_showResultsMenu:function(){k.add(this.containerNode,this._css.GeocoderActiveClass);k.add(this.domNode,this._css.GeocoderResultsOpenClass);m.set(this.resultsNode,"display","block");h.set(this.resultsNode,"aria-hidden",
"false")},_hideResultsMenu:function(){m.set(this.resultsNode,"display","none");k.remove(this.containerNode,this._css.GeocoderActiveClass);k.remove(this.domNode,this._css.GeocoderResultsOpenClass);h.set(this.resultsNode,"aria-hidden","true")},_hideMenus:function(){this._hideGeolocatorMenu();this._hideResultsMenu()},_insertGeocoderMenuItems:function(){if(this.get("geocoderMenu")&&this._geocoders&&1<this._geocoders.length){var a,b="",c;a='\x3cul role\x3d"presentation"\x3e';for(c=0;c<this._geocoders.length;c++){b=
this._css.resultsItemClass+" ";b=0===c%2?b+this._css.resultsItemOddClass:b+this._css.resultsItemEvenClass;c===this.get("activeGeocoderIndex")&&(b+=" "+this._css.geocoderSelectedClass);0===c?b+=" "+this._css.resultsItemFirstClass:c===this._geocoders.length-1&&(b+=" "+this._css.resultsItemLastClass);var e=this._geocoders[c].name||t.widgets.Geocoder.main.untitledGeocoder;a+='\x3cli data-index\x3d"'+c+'" data-item\x3d"true" role\x3d"menuitem" tabindex\x3d"0" class\x3d"'+b+'"\x3e';a+='\x3cdiv class\x3d"'+
this._css.geocoderSelectedCheckClass+'"\x3e\x3c/div\x3e';a+=e;a+='\x3cdiv class\x3d"'+this._css.GeocoderClearClass+'"\x3e\x3c/div\x3e';a+="\x3c/li\x3e"}this.geocoderMenuInsertNode.innerHTML=a+"\x3c/ul\x3e";this._geocoderMenuEvent();m.set(this.geocoderMenuNode,"display","none");m.set(this.geocoderMenuArrowNode,"display","block");k.add(this.containerNode,this._css.GeocoderMultipleClass)}else this.geocoderMenuInsertNode.innerHTML="",m.set(this.geocoderMenuNode,"display","none"),m.set(this.geocoderMenuArrowNode,
"display","none"),k.remove(this.containerNode,this._css.GeocoderMultipleClass)},_checkStatus:function(){this.get("value")?(k.add(this.containerNode,this._css.hasValueClass),h.set(this.clearNode,"title",t.widgets.Geocoder.main.clearButtonTitle)):this.clear()},_autoCompleteEvent:function(){var a=s('[data-item\x3d"true"]',this.resultsNode);this._acEvent&&this._acEvent.remove();this._acEvent=l(a,"click, keydown",f.hitch(this,function(b){clearTimeout(this._queryTimer);var c=parseInt(h.get(b.currentTarget,
"data-index"),10),e=h.get(b.currentTarget,"data-text");"click"===b.type||"keydown"===b.type&&b.keyCode===d.ENTER?(h.set(this.inputNode,"value",e),this.set("value",e),this.get("results")&&this.get("results")[c]&&(this.get("results")[c].name?this.select(this.get("results")[c]):(b=this.get("results")[c].text,c=this.get("results")[c].magicKey||null,this._query({delay:0,search:b,magicKey:c}).then(f.hitch(this,function(a){this.select(a.results[0])}))))):"keydown"===b.type&&b.keyCode===d.UP_ARROW?(n.stop(b),
c-=1,0>c?this.inputNode.focus():a[c].focus()):"keydown"===b.type&&b.keyCode===d.DOWN_ARROW?(n.stop(b),c+=1,c>=a.length?this.inputNode.focus():a[c].focus()):b.keyCode===d.ESCAPE&&this._hideMenus()}))},_geocoderMenuEvent:function(){var a=s('[data-item\x3d"true"]',this.geocoderMenuInsertNode);this._gmEvent&&this._gmEvent.remove();this._gmEvent=l(a,"click, keydown",f.hitch(this,function(b){var c=parseInt(h.get(b.currentTarget,"data-index"),10);"click"===b.type||"keydown"===b.type&&b.keyCode===d.ENTER?
(this._setActiveGeocoderIndex(null,null,c),this._hideGeolocatorMenu()):"keydown"===b.type&&b.keyCode===d.UP_ARROW?(n.stop(b),b=c-1,0>b?this.geocoderMenuArrowNode.focus():a[b].focus()):"keydown"===b.type&&b.keyCode===d.DOWN_ARROW?(n.stop(b),b=c+1,b>=a.length?this.geocoderMenuArrowNode.focus():a[b].focus()):b.keyCode===d.ESCAPE&&this._hideGeolocatorMenu()}))},_removeEvents:function(){var a;if(this._events&&this._events.length)for(a=0;a<this._events.length;a++)this._events[a].remove();this._acEvent&&
this._acEvent.remove();this._gmEvent&&this._gmEvent.remove();this._events=[]},_setupEvents:function(){this._removeEvents();var a=l(document,"click",f.hitch(this,function(a){this._hideResultsMenu(a)}));this._events.push(a);a=l(this.inputNode,"keyup",f.hitch(this,function(a){this._inputKeyUp(a)}));this._events.push(a);a=l(this.inputNode,"keydown",f.hitch(this,function(a){this._inputKeyDown(a)}));this._events.push(a);a=l(this.geocoderMenuArrowNode,"keydown",this._geocoderMenuButtonKeyDown());this._events.push(a);
this.get("map")&&(a=l(this.get("map"),"click",f.hitch(this,function(){this.blur()})),this._events.push(a));this._geocoderMenuEvent();this._autoCompleteEvent()},_findThenSelect:function(){this.find().then(f.hitch(this,function(a){a.results&&a.results.length&&(this.select(a.results[0]),this.onEnterKeySelect())}))},_inputKeyUp:function(a){if(a){clearTimeout(this._queryTimer);var b=this.inputNode.value;this._ignoreUpdateValue=!0;this.set("value",b);this._ignoreUpdateValue=!1;var c=0;b&&(c=b.length);if(a.keyCode===
a.copyKey||a.ctrlKey||a.shiftKey||a.metaKey||a.altKey||a.keyCode===a.ALT||a.keyCode===a.CTRL||a.keyCode===a.META||a.keyCode===a.shiftKey||a.keyCode===d.UP_ARROW||a.keyCode===d.DOWN_ARROW||a.keyCode===d.LEFT_ARROW||a.keyCode===d.RIGHT_ARROW)return a;a&&a.keyCode===d.ENTER?(this._cancelDeferreds(),this._findThenSelect()):a&&a.keyCode===d.ESCAPE?(this._cancelDeferreds(),this._hideMenus()):a&&a.keyCode===d.TAB?(this._cancelDeferreds(),this._hideMenus()):this.get("autoComplete")&&c>=this.get("minCharacters")?
this._autoComplete():this._hideMenus();this._checkStatus()}},_cancelDeferreds:function(){if(this._deferreds.length){for(var a=0;a<this._deferreds.length;a++)this._deferreds[a].cancel("stop query");this._deferreds=[]}},_inputKeyDown:function(a){var b=s('[data-item\x3d"true"]',this.resultsNode);a&&a.keyCode===d.TAB?(this._cancelDeferreds(),this._hideMenus()):a&&a.keyCode===d.UP_ARROW?(n.stop(a),(a=b.length)&&b[a-1].focus()):a&&a.keyCode===d.DOWN_ARROW&&(n.stop(a),b[0]&&b[0].focus())},_geocoderMenuButtonKeyDown:function(a){var b=
s('[data-item\x3d"true"]',this.geocoderMenuInsertNode);a&&a.keyCode===d.UP_ARROW?(n.stop(a),this._showGeolocatorMenu(),(a=b.length)&&b[a-1].focus()):a&&a.keyCode===d.DOWN_ARROW&&(n.stop(a),this._showGeolocatorMenu(),b[0]&&b[0].focus())},_inputClick:function(){this._hideGeolocatorMenu();this.get("value")||(this.clear(),this._hideMenus());this._checkStatus()},_hydrateResult:function(a){var b={},c=this._defaultSR;this.get("map")&&(c=this.get("map").spatialReference);if(a.hasOwnProperty("text")&&a.hasOwnProperty("magicKey"))return a;
if(a.hasOwnProperty("feature")){b.feature=new x(a.feature);var e=b.feature.geometry;e&&e.setSpatialReference(c)}else if(a.hasOwnProperty("location")){var e=new y(a.location.x,a.location.y,c),d={};a.hasOwnProperty("attributes")&&(d=a.attributes);a.hasOwnProperty("score")&&(d.score=a.score);b.feature=new x(e,null,d,null)}else b.feature=null;a.hasOwnProperty("extent")?(b.extent=new z(a.extent),b.extent.setSpatialReference(new w(c))):b.feature&&b.feature.geometry?this.get("map")?this.get("map").getScale()>
this.get("zoomScale")?b.extent=I.getExtentForScale(this.get("map"),this.get("zoomScale")).centerAt(b.feature.geometry):b.extent=this.get("map").extent.centerAt(b.feature.geometry):b.extent=new z({xmin:b.feature.geometry.x-0.25,ymin:b.feature.geometry.y-0.25,xmax:b.feature.geometry.x+0.25,ymax:b.feature.geometry.y+0.25,spatialReference:{wkid:4326}}):b.extent=null;a.hasOwnProperty("name")?b.name=a.name:a.hasOwnProperty("address")&&"string"===typeof a.address?b.name=a.address:a.hasOwnProperty("address")&&
"object"===typeof a.address&&a.address.hasOwnProperty("Address")?b.name=a.address.Address:b.name=b.feature&&b.feature.geometry?b.feature.geometry.x+","+b.feature.geometry.y:"";return b},_hydrateResults:function(a){var b=[];if(a&&a.length){var c=0;for(c;c<a.length;c++){var d=this._hydrateResult(a[c]);b.push(d)}}return b}});D("extend-esri")&&f.setObject("dijit.Geocoder",q,F);return q});