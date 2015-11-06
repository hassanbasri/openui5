/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var S={};S.render=function(r,c){var h=c.getOrientation()===sap.ui.core.Orientation.Horizontal;var o=h?"sapUiLoSplitterH":"sapUiLoSplitterV";var a=sap.ui.getCore().getConfiguration().getAnimation();r.write("<div");r.writeControlData(c);r.addClass("sapUiLoSplitter");r.addClass(o);if(a&&!c._liveResize){r.addClass("sapUiLoSplitterAnimated");}r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");this.renderInitialContent(r,c);r.write("</div>");};S.renderInitialContent=function(r,c){var I=c.getId();var h=c.getOrientation()===sap.ui.core.Orientation.Horizontal;var s=h?"width":"height";var g="sap-icon://"+(h?"horizontal":"vertical")+"-grip";var C=c.getContentAreas();var l=C.length;var a=c.getCalculatedSizes();for(var i=0;i<l;++i){var L=C[i].getLayoutData();var b="0";if(a[i]){b=a[i]+"px";}else if(L){b=L.getSize();}r.write("<section "+"id=\""+I+"-content-"+i+"\" "+"style=\""+s+": "+b+";\" "+"class=\"sapUiLoSplitterContent\">");r.renderControl(C[i]);r.write("</section>");if(i<l-1){r.write("<div id=\""+I+"-splitbar-"+i+"\" "+"role=\"separator\" "+"title=\""+c._getText("SPLITTER_MOVE")+"\" "+"class=\"sapUiLoSplitterBar\" "+"aria-orientation=\""+(h?"vertical":"horizontal")+"\" "+"tabindex=\"0\">");r.writeIcon(g,"sapUiLoSplitterBarIcon",{"id":I+"-splitbar-"+i+"-icon","title":null,"aria-label":null});r.write("</div>");}}r.write("<div id=\""+I+"-overlay\" class=\"sapUiLoSplitterOverlay\" style=\"display: none;\">"+"<div id=\""+I+"-overlayBar\" class=\"sapUiLoSplitterOverlayBar\">");r.writeIcon(g,"sapUiLoSplitterBarIcon",{"id":I+"-splitbar-Overlay-icon","title":null,"aria-label":null});r.write("</div>"+"</div>");};return S;},true);
