/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var R={};R.render=function(r,o){var a=r;if(!o.aRBs){return;}var v=o.aRBs.filter(function(b){return b.getVisible();});var C=o.getColumns();var s=o.getTextDirection();var g=sap.ui.getCore().getConfiguration().getRTL();a.write("<div");a.writeControlData(o);a.addClass("sapMRbG");if(!o.getEditable()){a.addClass("sapMRbGRo");}if(C>1){if(C==v.length){a.addClass("sapMRbG1Row");}else{a.addClass("sapMRbGTab");}}if(o.getWidth()&&o.getWidth()!=""){a.addStyle("width",o.getWidth());}if(o.getTooltip_AsString()){a.writeAttributeEscaped("title",o.getTooltip_AsString());}if(!g&&s!=sap.ui.core.TextDirection.Inherit){a.writeAttribute("dir",s.toLowerCase());}a.writeAccessibilityState(o,{role:"radiogroup"});a.writeClasses();a.writeStyles();a.write(">");for(var c=0;c<C;c++){if(C>1&&C!=v.length){a.write("<div");a.addClass("sapMRbGCol");a.writeClasses();a.write(">");}for(var i=c;i<v.length;i=i+C){a.renderControl(v[i]);}if(C>1&&C!=v.length){a.write("</div>");}}if(C>1&&C!=v.length){a.write('<div class="sapMRbGDummy"> </div>');}a.write("</div>");};return R;},true);
