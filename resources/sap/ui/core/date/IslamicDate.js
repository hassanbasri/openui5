/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object'],function(q,B){"use strict";var c=1400,G=1721425.5,I=1948439.5,d=-42521587200000,O=86400000;var C=null;var e=B.extend("sap.ui.core.date.IslamicDate",{constructor:function(){if(!C){this.initCustomizationMap();}if(!this||!(this instanceof e)){return new e().toString();}B.apply(this);this._year=1;this._month=0;this._date=1;this._hours=0;this._minutes=0;this._seconds=0;this._milliseconds=0;var a=arguments.length;if(!a){this._fromGregorian(new Date());}else if(a==1&&typeof arguments[0]=="number"){this._fromGregorian(new Date(arguments[0]));}else if(a>=2){this.setYear(arguments[0]);this.setMonth(arguments[1]);if(arguments[2]){this.setDate(arguments[2]);}else{this.setDate(arguments[2]===0?0:1);}this.setHours(arguments[3]?arguments[3]:0);this.setMinutes(arguments[4]?arguments[4]:0);this.setSeconds(arguments[5]?arguments[5]:0);this.setMilliseconds(arguments[6]?arguments[6]:0);}else{throw new Error("Invalid Date");}}});function p(a){if(typeof a=="number"){return a;}var v=parseInt(a,10);if(isNaN(v)){throw new Error("Invalid Date");}return v;}e.prototype.getDate=function(){return this._date;};e.prototype.getMonth=function(){return this._month;};e.prototype.getFullYear=function(){return this._year;};e.prototype.getYear=function(){return this._year-c;};e.prototype.getDay=function(){return this._toGregorian().getDay();};e.prototype.getHours=function(){return this._hours;};e.prototype.getMinutes=function(){return this._minutes;};e.prototype.getSeconds=function(){return this._seconds;};e.prototype.getMilliseconds=function(){return this._milliseconds;};e.prototype.getTime=function(){return this._toGregorian().getTime();};e.prototype.setDate=function(a){a=p(a);if(a>0&&a<=this.getMonthLength(this._month,this._year)){this._date=a;}else{var D;if(a>0){for(D=this.getMonthLength(this._month,this._year);a>D;a-=D,D=this.getMonthLength(this._month,this._year)){this._month++;if(this._month>=12){this._year++;this._month-=12;}}this._date=a;}else{for(D=this.getMonthLength((this._month-1)>=0?(this._month-1):11,((this._month-1)>=0)?this._year:this._year-1);a<=0;D=this.getMonthLength((this._month-1)>=0?(this._month-1):11,((this._month-1)>=0)?this._year:this._year-1)){this._month--;if(this._month<0){this._year--;this._month+=12;}a+=D;}this._date=a;}}return this.getTime();};e.prototype.setFullYear=function(y){y=p(y);this._year=y;return i.call(this,arguments,"setMonth");};e.prototype.setYear=function(y){y=p(y);if(y>99){return this.setFullYear(y);}else{return this.setFullYear(c+y);}};e.prototype.setMonth=function(m){m=p(m);var r=f(m,12);this._month=r.iValue;if(r.iAddend){this.setFullYear(this.getFullYear()+r.iAddend);}return i.call(this,arguments,"setDate");};e.prototype.setHours=function(){var a=arguments.length;if(a>=1){var H=p(arguments[0]);var o=f(H,24);this._hours=o.iValue;if(o.iAddend){this.setDate(this.getDate()+o.iAddend);}}return i.call(this,arguments,"setMinutes");};e.prototype.setMinutes=function(m){m=p(m);var o=f(m,60);this._minutes=o.iValue;if(o.iAddend){this.setHours(this.getHours()+o.iAddend);}return i.call(this,arguments,"setSeconds");};e.prototype.setSeconds=function(s){s=p(s);var o=f(s,60);this._seconds=o.iValue;if(o.iAddend){this.setMinutes(this.getMinutes()+o.iAddend);}return i.call(this,arguments,"setMilliseconds");};e.prototype.setMilliseconds=function(m){m=p(m);var o=f(m,1000);this._milliseconds=o.iValue;if(o.iAddend){this.setSeconds(this.getSeconds()+o.iAddend);}return this.getTime();};function f(v,m){var r=0;if(v>0){r=Math.floor(v%m);}else{r=Math.floor(((v%m)+m)%m);}return{iValue:r,iAddend:Math.floor(v/m)};}e.prototype._toGregorian=function(U){var a=this._year,b=this._month,j=this._date,J=j+this.getCustomMonthStartDays(12*(a-1)+b)+I-1,k=Math.floor(J-0.5)+0.5,D=k-G,Q=Math.floor(D/146097),l=this._mod(D,146097),m=Math.floor(l/36524),n=this._mod(l,36524),o=Math.floor(n/1461),r=this._mod(n,1461),y=Math.floor(r/365),Y=(Q*400)+(m*100)+(o*4)+y;if(!(m==4||y==4)){Y++;}var s=G+(365*(Y-1))+Math.floor((Y-1)/4)-(Math.floor((Y-1)/100))+Math.floor((Y-1)/400);var t=k-s;var v=(G-1)+(365*(Y-1))+Math.floor((Y-1)/4)-(Math.floor((Y-1)/100))+Math.floor((Y-1)/400)+Math.floor((739/12)+((this._isGregorianLeapYear(new Date(Y,3,1),U)?-1:-2))+1);var L=0;if(k<v){L=0;}else{L=this._isGregorianLeapYear(new Date(Y,3,1),U)?1:2;}var M=Math.floor((((t+L)*12)+373)/367);var w=(G-1)+(365*(Y-1))+Math.floor((Y-1)/4)-(Math.floor((Y-1)/100))+Math.floor((Y-1)/400);var x=0;if(M>2){x=this._isGregorianLeapYear(new Date(Y,(M-1),1),U)?-1:-2;}w+=Math.floor((((367*M)-362)/12)+x+1);var z=(k-w)+1;if(U){return new Date(Date.UTC(Y,(M-1),z,this._hours,this._minutes,this._seconds,this._milliseconds));}return new Date(Y,(M-1),z,this._hours,this._minutes,this._seconds,this._milliseconds);};e.prototype._fromGregorian=function(o,U){var D=new Date(o.getTime());var a=U?D.getUTCFullYear():D.getFullYear(),b=U?D.getUTCMonth():D.getMonth(),j=U?D.getUTCDate():D.getDate();var l=0;if((b+1)>2){l=(this._isGregorianLeapYear(D,U)?-1:-2);}var J=(G-1)+(365*(a-1))+Math.floor((a-1)/4)+(-Math.floor((a-1)/100))+Math.floor((a-1)/400)+Math.floor((((367*(b+1))-362)/12)+l+j);J=Math.floor(J)+0.5;var k=J-I;var m=Math.floor(k/29.530588853);m++;while(this.getCustomMonthStartDays(m)>k){m--;}var n=Math.floor(m/12)+1;var r=m%12;var s=(k-this.getCustomMonthStartDays(12*(n-1)+r))+1;this._date=s;this._month=r;this._year=n;this._hours=U?D.getUTCHours():D.getHours();this._minutes=U?D.getUTCMinutes():D.getMinutes();this._seconds=U?D.getUTCSeconds():D.getSeconds();this._milliseconds=U?D.getUTCMilliseconds():D.getMilliseconds();return this;};e.prototype.valueOf=function(){return this._toGregorian().valueOf();};e.prototype.initCustomizationMap=function(){var D,o;C={};D=sap.ui.getCore().getConfiguration().getFormatSettings().getLegacyDateFormat();o=sap.ui.getCore().getConfiguration().getFormatSettings().getLegacyDateCalendarCustomizing();o=o||[];if(!D&&!o.length){q.sap.log.info("No calendar customizations.");return;}if((D&&!o.length)||(!D&&o.length)){q.sap.log.warning("There is a inconsistency between customization data ["+JSON.stringify(o)+"] and the date format ["+D+"]. Calendar customization won't be used.");return;}o.forEach(function(E){if(E.dateFormat===D){var a=g(E.gregDate);var b=new Date(Date.UTC(a.year,a.month-1,a.day));var m=b.getTime();var j=(m-d)/O;a=g(E.islamicMonthStart);var k=(a.year-1)*12+a.month-1;C[k]=j;}});q.sap.log.info("Working with date format: ["+D+"] and customization: "+JSON.stringify(o));};function g(D){return{year:p(D.substr(0,4)),month:p(D.substr(4,2)),day:p(D.substr(6,2))};}e.prototype.getCustomMonthStartDays=function(m){var a=C[m];if(!a){var y=Math.floor(m/12)+1;var b=m%12;a=this._monthStart(y,b);}return a;};e.prototype._monthStart=function(y,m){return Math.ceil(29.5*m)+(y-1)*354+Math.floor((3+11*y)/30.0);};e.prototype._civilLeapYear=function(y){return(14+11*y)%30<11;};e.prototype.getMonthLength=function(m,y){var a=(y-1)*12+m;var b=this.getCustomMonthStartDays(a);if(b){return(this.getCustomMonthStartDays(a+1)-b);}else{var l=0;l=29+((m+1)%2);if(m==11&&this._civilLeapYear(y)){l++;}return l;}};e.prototype._mod=function(a,b){return a-(b*Math.floor(a/b));};e.prototype._isGregorianLeapYear=function(a,U){var y=U?a.getUTCFullYear():a.getFullYear();return!(y%400)||(!(y%4)&&!!(y%100));};e.now=function(){return new e().getTime();};e.prototype.getTimezoneOffset=function(){return this._toGregorian().getTimezoneOffset();};e.prototype.getUTCDate=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getDate();};e.prototype.getUTCMonth=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getMonth();};e.prototype.getUTCFullYear=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getFullYear();};e.prototype.getUTCDay=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getDay();};e.prototype.getUTCHours=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getHours();};e.prototype.getUTCMinutes=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getMinutes();};e.prototype.getUTCSeconds=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getSeconds();};e.prototype.getUTCMilliseconds=function(){var o=new e()._fromGregorian(this._toGregorian(),true);return o.getMilliseconds();};e.prototype.setUTCFullYear=function(y,m,a){var M=arguments.length>=2?m:this.getUTCMonth();var D=arguments.length>=3?a:this.getUTCDate();var t=new e(e.UTC(y,M,D,this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds(),this.getUTCMilliseconds()));u.call(this,t);return this.getTime();};e.prototype.setUTCMonth=function(m,a){var D=arguments.length>=2?a:this.getUTCDate();var t=new e(e.UTC(this.getUTCFullYear(),m,D,this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds(),this.getUTCMilliseconds()));u.call(this,t);return this.getTime();};e.prototype.setUTCDate=function(a){var t=new e(e.UTC(this.getUTCFullYear(),this.getUTCMonth(),a,this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds(),this.getUTCMilliseconds()));u.call(this,t);return this.getTime();};e.prototype.setUTCHours=function(a){var t=new e(e.UTC(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),a,this.getUTCMinutes(),this.getUTCSeconds(),this.getUTCMilliseconds()));u.call(this,t);return i.call(this,arguments,"setUTCMinutes");};e.prototype.setUTCMinutes=function(m){var t=new e(e.UTC(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),this.getUTCHours(),m,this.getUTCSeconds(),this.getUTCMilliseconds()));u.call(this,t);return i.call(this,arguments,"setUTCSeconds");};e.prototype.setUTCSeconds=function(s){var t=new e(e.UTC(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),s,this.getUTCMilliseconds()));u.call(this,t);return i.call(this,arguments,"setUTCMilliseconds");};e.prototype.setUTCMilliseconds=function(m){var t=new e(e.UTC(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds(),m));u.call(this,t);return this.getTime();};e.UTC=function(){var o=new e(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),a=o._toGregorian(true);return a.getTime();};e.prototype.toString=function(U){var o=new Date(this.getTime());return(U?"UTC":"Local")+" Islamic Date:"+h(String(U?this.getUTCFullYear():this.getFullYear()),String(U?(this.getUTCMonth()+1):(this.getMonth()+1)),String(U?this.getUTCDate():this.getDate()),String(U?this.getUTCDay():this.getDay()),String(U?this.getUTCHours():this.getHours()),String(U?this.getUTCMinutes():this.getMinutes()),String(U?this.getUTCSeconds():this.getSeconds()),String(U?this.getUTCMilliseconds():this.getMilliseconds()))+"; Gregorian: "+h(String(U?o.getUTCFullYear():o.getFullYear()),String(U?(o.getUTCMonth()+1):(o.getMonth()+1)),String(U?o.getUTCDate():o.getDate()),String(U?o.getUTCDay():o.getDay()),String(U?o.getUTCHours():o.getHours()),String(U?o.getUTCMinutes():o.getMinutes()),String(U?o.getUTCSeconds():o.getSeconds()),String(U?o.getUTCMilliseconds():o.getMilliseconds()));};e.parse=function(){};e.prototype.toDateString=function(){};e.prototype.toGMTString=function(){};e.prototype.toISOString=function(){};e.prototype.toJSON=function(){};e.prototype.toLocaleDateString=function(){};e.prototype.toLocaleString=function(){};e.prototype.toLocaleTimeString=function(){};e.prototype.toTimeString=function(){};e.prototype.toUTCString=function(){};function u(F,U){this._year=U?F.getUTCFullYear():F.getFullYear();this._month=U?F.getUTCMonth():F.getMonth();this._date=U?F.getUTCDate():F.getDate();this._hours=U?F.getUTCHours():F.getHours();this._minutes=U?F.getUTCMinutes():F.getMinutes();this._seconds=U?F.getUTCSeconds():F.getSeconds();this._milliseconds=U?F.getUTCMilliseconds():F.getMilliseconds();}function h(y,m,a,b,j,k,s,l){return q.sap.padLeft(String(y),"0",4)+"/"+q.sap.padLeft(String(m),"0",2)+"/"+q.sap.padLeft(String(a),"0",2)+"("+b+") "+q.sap.padLeft(String(j),"0",2)+":"+q.sap.padLeft(String(k),"0",2)+":"+q.sap.padLeft(String(s),"0",2)+"."+q.sap.padLeft(String(l),"0",4);}function i(P,s){if(P.length==1){return this.getTime();}else{return e.prototype[s].apply(this,Array.prototype.slice.call(P,1));}}return e;});