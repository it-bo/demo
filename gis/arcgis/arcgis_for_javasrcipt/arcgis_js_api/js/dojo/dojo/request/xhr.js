/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/xhr",["../errors/RequestError","./watch","./handlers","./util","../has"],function(p,x,q,g,c){function y(a,b){var d=a.xhr;a.status=a.xhr.status;c("native-xhr2")&&v[a.options.handleAs]?(a.data=d.response,"blob"===a.options.handleAs&&!c("native-xhr2-blob")&&(a.data=new Blob([a.data],{type:d.getResponseHeader("Content-Type")}))):(a.text=d.responseText,"xml"===a.options.handleAs&&(a.data=d.responseXML));if(!b)try{q(a)}catch(e){b=e}b?this.reject(b):g.checkStatus(d.status)?this.resolve(a):
(b=new p("Unable to load "+a.url+" status: "+d.status,a),this.reject(b))}function z(a){return this.xhr.getResponseHeader(a)}function k(a,b,d){var e=g.parseArgs(a,g.deepCreate(A,b),c("native-formdata")&&b&&b.data&&b.data instanceof FormData);a=e.url;b=e.options;var r,f=g.deferred(e,s,t,w,y,function(){r&&r()}),h=e.xhr=k._create();if(!h)return f.cancel(new p("XHR was not created")),d?f:f.promise;e.getHeader=z;u&&(r=u(h,f,e));var q=b.data,B=!b.sync,C=b.method;try{h.open(C,a,B,b.user||void 0,b.password||
void 0);b.withCredentials&&(h.withCredentials=b.withCredentials);if(c("native-xhr2")){var n=v[b.handleAs]?b.handleAs:b.responseType;"blob"===n&&!c("native-xhr2-blob")&&(n="arraybuffer");n&&(h.responseType=n)}var l=b.headers;a="application/x-www-form-urlencoded";if(l)for(var m in l)"content-type"===m.toLowerCase()?a=l[m]:l[m]&&h.setRequestHeader(m,l[m]);a&&!1!==a&&h.setRequestHeader("Content-Type",a);(!l||!("X-Requested-With"in l))&&h.setRequestHeader("X-Requested-With","XMLHttpRequest");g.notify&&
g.notify.emit("send",e,f.promise.cancel);h.send(q)}catch(D){f.reject(D)}x(f);h=null;return d?f:f.promise}c.add("native-xhr",function(){return"undefined"!==typeof XMLHttpRequest});c.add("dojo-force-activex-xhr",function(){return c("activex")&&!document.addEventListener&&"file:"===window.location.protocol});c.add("native-xhr2",function(){if(c("native-xhr")){var a=new XMLHttpRequest;return"undefined"!==typeof a.addEventListener&&("undefined"===typeof opera||"undefined"!==typeof a.upload)}});c.add("native-xhr2-blob",
function(){if(c("native-xhr2")){var a=new XMLHttpRequest;a.open("GET","/",!0);a.responseType="blob";var b=a.responseType;a.abort();return"blob"===b}});c.add("native-formdata",function(){return"undefined"!==typeof FormData});var v={arraybuffer:1,blob:1,document:1},t,w,u,s;c("native-xhr2")?(t=function(a){return!this.isFulfilled()},s=function(a,b){b.xhr.abort()},u=function(a,b,d){function c(a){b.handleResponse(d)}function g(a){a=new p("Unable to load "+d.url+" status: "+a.target.status,d);b.handleResponse(d,
a)}function f(a){a.lengthComputable&&(d.loaded=a.loaded,d.total=a.total,b.progress(d))}a.addEventListener("load",c,!1);a.addEventListener("error",g,!1);a.addEventListener("progress",f,!1);return function(){a.removeEventListener("load",c,!1);a.removeEventListener("error",g,!1);a.removeEventListener("progress",f,!1);a=null}}):(t=function(a){return a.xhr.readyState},w=function(a){return 4===a.xhr.readyState},s=function(a,b){var c=b.xhr,e=typeof c.abort;("function"===e||"object"===e||"unknown"===e)&&
c.abort()});var A={data:null,query:null,sync:!1,method:"GET"};k._create=function(){throw Error("XMLHTTP not available");};if(c("native-xhr")&&!c("dojo-force-activex-xhr"))k._create=function(){return new XMLHttpRequest};else if(c("activex"))try{new ActiveXObject("Msxml2.XMLHTTP"),k._create=function(){return new ActiveXObject("Msxml2.XMLHTTP")}}catch(E){try{new ActiveXObject("Microsoft.XMLHTTP"),k._create=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}catch(F){}}g.addCommonMethods(k);return k});