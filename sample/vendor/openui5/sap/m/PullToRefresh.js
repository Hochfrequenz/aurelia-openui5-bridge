/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control','sap/ui/core/theming/Parameters'],function(q,l,C,P){"use strict";var a=C.extend("sap.m.PullToRefresh",{metadata:{library:"sap.m",properties:{description:{type:"string",group:"Misc",defaultValue:null},showIcon:{type:"boolean",group:"Appearance",defaultValue:false},customIcon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconDensityAware:{type:"boolean",group:"Appearance",defaultValue:true}},events:{refresh:{}}}});a.prototype.init=function(){this._bTouchMode=sap.ui.Device.support.touch&&!sap.ui.Device.system.combi||q.sap.simulateMobileOnDesktop;this._iState=0;this.oRb=sap.ui.getCore().getLibraryResourceBundle("sap.m");};a.prototype._loadBI=function(){if(this.getVisible()&&!this._oBusyIndicator){q.sap.require("sap.m.BusyIndicator");this._oBusyIndicator=new sap.m.BusyIndicator({size:"1.7rem",design:"auto"});this._oBusyIndicator.setParent(this);}};a.prototype.onBeforeRendering=function(){this._loadBI();if(this._bTouchMode){q(window).off("resize.sapMP2R",this.calculateTopTrigger);var p=this.getParent();this._oScroller=p&&p.getScrollDelegate?p.getScrollDelegate():null;if(this._oScroller){this._oScroller.setBounce(true);this._oScroller.setPullDown(this.getVisible()?this:null);}}};a.prototype.calculateTopTrigger=function(){this._iTopTrigger=1;if(this._oDomRef&&this._oDomRef.parentNode&&this._oDomRef.parentNode.parentNode&&this._oDomRef.parentNode.parentNode.offsetHeight<this._oDomRef.offsetHeight*1.5){this._iTopTrigger=this.getDomRef("T").offsetTop;}};a.prototype.onAfterRendering=function(){this._oDomRef=this.getDomRef();if(this._bTouchMode){if(this._oScroller){this._oScroller.refresh();}if(this.getVisible()&&this._oScroller&&this._oScroller._bIScroll){q(window).on("resize.sapMP2R",q.proxy(this.calculateTopTrigger,this));this.calculateTopTrigger();}}};a.prototype.exit=function(){if(this._bTouchMode&&this._oScroller&&this._oScroller._bIScroll){q(window).off("resize.sapMP2R",this.calculateTopTrigger);}if(this._oScroller){this._oScroller.setPullDown(null);this._oScroller=null;}if(this._oCustomImage){this._oCustomImage.destroy();this._oCustomImage=null;}if(this._oBusyIndicator){this._oBusyIndicator.destroy();this._oBusyIndicator=null;}};a.prototype.doScrollMove=function(){if(!this._oScroller){return;}var d=this._oDomRef;var _=this._oScroller._scroller;if(_.y>-this._iTopTrigger&&this._iState<1){this.setState(1);_.minScrollY=0;}else if(_.y<-this._iTopTrigger&&this._iState==1){this.setState(0);_.minScrollY=-d.offsetHeight;}};a.prototype.doPull=function(p){if(this._bTouchMode&&this._iState<2){this.setState(p>=-1?1:0);}};a.prototype.doRefresh=function(){this.setState(0);};a.prototype.doScrollEnd=function(){if(this._iState==1){this.setState(2);this.fireRefresh();}};a.prototype.setState=function(s){if(this._iState==s){return;}this._iState=s;if(!this._oDomRef){return;}var $=this.$();var b=$.find(".sapMPullDownText");switch(s){case 0:$.toggleClass("sapMFlip",false).toggleClass("sapMLoading",false);b.html(this.oRb.getText(this._bTouchMode?"PULL2REFRESH_PULLDOWN":"PULL2REFRESH_REFRESH"));$.removeAttr("aria-live");$.find(".sapMPullDownInfo").html(q.sap.encodeHTML(this.getDescription()));break;case 1:$.toggleClass("sapMFlip",true);b.html(this.oRb.getText("PULL2REFRESH_RELEASE"));$.removeAttr("aria-live");break;case 2:$.toggleClass("sapMFlip",false).toggleClass("sapMLoading",true);this._oBusyIndicator.setVisible(true);b.html(this.oRb.getText("PULL2REFRESH_LOADING"));$.attr("aria-live","assertive");$.find(".sapMPullDownInfo").html(this._bTouchMode?this.oRb.getText("PULL2REFRESH_LOADING_LONG"):"");break;}};a.prototype.setDescription=function(d){if(this._oDomRef){this.$().find(".sapMPullDownInfo").html(q.sap.encodeHTML(d));}return this.setProperty("description",d,true);};a.prototype.getCustomIconImage=function(){var p={src:this.getCustomIcon(),densityAware:this.getIconDensityAware(),useIconTooltip:false};var c=['sapMPullDownCIImg'];this._oCustomImage=sap.m.ImageHelper.getImageControl(null,this._oCustomImage,this,p,c);return this._oCustomImage;};a.prototype.onclick=function(){if(!this._bTouchMode){this.setState(2);this.fireRefresh();}};a.prototype.onkeydown=function(e){if(e.which==q.sap.KeyCodes.F5){this.onclick();e.stopPropagation();e.preventDefault();}};a.prototype.onsapenter=function(e){if(this._iState<1){this.setState(2);this.fireRefresh();}};a.prototype.onsapspace=function(e){e.preventDefault();if(this._iState<1){this.setState(2);this.fireRefresh();}};a.prototype.hide=function(){this.setState(0);if(this._oScroller){this._oScroller.refresh();}};a.prototype.setVisible=function(v){if(this.getVisible()==v){return this;}if(this._oDomRef&&this._oScroller&&this._oScroller._oControl){this._oScroller._oControl.invalidate();}return this.setProperty("visible",v);};return a;},true);
