"use strict";angular.module("translatorApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("translatorApp").controller("MainCtrl",["$scope","$http",function(a){function b(a,b,c){for(var d=b.length-1,e=0;d>e;++e){var f=b[e];f in a||(a[f]={}),a=a[f]}a[b[d]]=c}function c(b,c,e){"string"==typeof c&&(d.length&&(b=d.join(".")+"."+b),a.data.items[e][b]=c)}var d=[];a.data={},a.data.items={source:{},dest:{}},a.data.finalJson={},a.data.files={source:"",dest:""},a.data.disableDownload=!0,a.readFile=function(b,c){var d=null,g=b[0],h=new FileReader;h.onload=function(b){return function(g){d=JSON.parse(g.target.result),a.data.files[c]=b.name,e(d,c),angular.equals(a.data.items.source,{})||angular.equals(a.data.items.dest,{})||a.$apply(function(){a.data.finalJson=f(a.data.items.source,a.data.items.dest),a.data.disableDownload=!1})}}(g),h.readAsText(g)};var e=function(b,d){a.data.items[d]={},h(b,c,d)},f=function(a,b){var c=[];return angular.forEach(a,function(a,d){c.push({key:d,en:a,translate:angular.isUndefined(b[d])?"":b[d]})}),c};a.exportJson=function(){var b=g(a.data.finalJson),c="data:application/json;charset=utf-8,"+encodeURIComponent(b),d=document.createElement("a");d.href=c,d.download=a.data.files.dest,document.body.appendChild(d),d.click(),document.body.removeChild(d)};var g=function(a){var c={};return angular.forEach(a,function(a){b(c,a.key.split("."),a.translate)}),JSON.stringify(c,null,2)},h=function(a,b,c){for(var e in a)b.apply(this,[e,a[e],c]),null!==a[e]&&"object"==typeof a[e]&&(d.push(e),h(a[e],b,c),d.splice(d.length-1,1))}}]),angular.module("translatorApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);