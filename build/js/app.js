!function t(n,r,o){function e(i,a){if(!r[i]){if(!n[i]){var f="function"==typeof require&&require;if(!a&&f)return f(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var p=r[i]={exports:{}};n[i][0].call(p.exports,function(t){var r=n[i][1][t];return e(r?r:t)},p,p.exports,t,n,r,o)}return r[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)e(o[i]);return e}({1:[function(t,n,r){r.Journal=function(t,n){this.title=t,this.body=n},r.Journal.prototype.countWords=function(t){return t.split(/\s+/).length},r.Journal.prototype.getTodayDate=function(){return moment().format("MM/DD/YY")},r.Journal.prototype.entry=function(){return"<h2>"+this.title+"</h2><hr>"+this.body}},{}],2:[function(t,n,r){var o=t("./../js/journal.js").Journal;$(document).ready(function(){$("#journal").submit(function(t){t.preventDefault();var n=$("#title").val(),r=$("#body").val(),e=new o(n,r);$("#final").append(e.entry()+"<br><h5>Word Count: "+e.countWords(r)+"</h5>"+e.getTodayDate())})}),$(document).ready(function(){$("#signup").submit(function(t){t.preventDefault();var n=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+n+" has been added to our list!</p>")})})},{"./../js/journal.js":1}]},{},[2]);