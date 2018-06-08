"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.showMessageBox = showMessageBox;
function showMessageBox(vMessage, mOptions) {
	var oDialog,
	    oMessageText,
	    vMessageContent,
	    oResult = null,
	    that = this,
	    aButtons = [],
	    i,
	    sIcon,
	    sTitle,
	    vActions,
	    fnCallback,
	    sDialogId,
	    sClass,
	    mDefaults = {
		initialFocus: null,
		textDirection: sap.ui.core.TextDirection.Inherit,
		verticalScrolling: true,
		horizontalScrolling: true,
		details: "",
		contentWidth: null
	};
	var mIcons = {
		"INFORMATION": "sap-icon://message-information",
		"WARNING": "sap-icon://message-warning",
		"ERROR": "sap-icon://message-error",
		"SUCCESS": "sap-icon://message-success",
		"QUESTION": "sap-icon://question-mark"
	};
	var mClasses = {
		"INFORMATION": "sapMMessageBoxInfo",
		"WARNING": "sapMMessageBoxWarning",
		"ERROR": "sapMMessageBoxError",
		"SUCCESS": "sapMMessageBoxSuccess",
		"QUESTION": "sapMMessageBoxQuestion",
		"STANDARD": "sapMMessageBoxStandard"
	};
	if (mOptions && mOptions.hasOwnProperty("details")) {
		mDefaults.icon = "INFORMATION";
		mDefaults.actions = ["OK", "CANCEL"];
		mOptions = jQuery.extend({}, mDefaults, mOptions);
	}

	mOptions = jQuery.extend({}, mDefaults, mOptions);

	if (typeof mOptions.actions !== "undefined" && !jQuery.isArray(mOptions.actions)) {
		mOptions.actions = [mOptions.actions];
	}
	if (!mOptions.actions || mOptions.actions.length === 0) {
		mOptions.actions = ["OK"];
	}

	function button(sAction) {
		var sText;

		var oButton = new sap.m.Button({
			id: sap.ui.core.ElementMetadata.uid("mbox-btn-"),
			text: sText || sAction,
			press: function press() {
				oResult = sAction;
				oDialog.close();
			}
		});
		return oButton;
	}

	for (i = 0; i < mOptions.actions.length; i++) {
		aButtons.push(button(mOptions.actions[i]));
	}

	function getInformationLayout(mOptions, oMessageText) {
		if (_typeof(mOptions.details) == 'object') {
			mOptions.details = "<pre>" + JSON.stringify(mOptions.details, null, '\t').replace(/{/gi, "\\{") + "</pre>";
		}

		var oFT = new sap.m.FormattedText({
			htmlText: mOptions.details
		}).setVisible(false);

		var oShowLink = new sap.m.Link({
			text: sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("MSGBOX_LINK_TITLE"),
			press: function press() {
				oFT.setVisible(true);
				this.setVisible(false);
				oDialog._setInitialFocus();
			}
		});

		oShowLink.addStyleClass("sapMMessageBoxLinkText");
		oFT.addStyleClass("sapMMessageBoxDetails");

		return new sap.m.VBox({
			items: [oMessageText, oShowLink, oFT]
		});
	}

	function onclose() {
		if (typeof mOptions.onClose === "function") {
			mOptions.onClose(oResult);
		}
		oDialog.detachAfterClose(onclose);
		oDialog.destroy();
	}

	function getInitialFocusControl() {
		var i = 0;
		var oInitialFocusControl = null;
		if (mOptions.initialFocus) {
			if (mOptions.initialFocus instanceof sap.ui.core.Control) {
				oInitialFocusControl = mOptions.initialFocus;
			}

			if (typeof mOptions.initialFocus === "string") {
				for (i = 0; i < aButtons.length; i++) {
					{
						if (mOptions.initialFocus.toLowerCase() === aButtons[i].getText().toLowerCase()) {
							oInitialFocusControl = aButtons[i];
							break;
						}
					}
				}
			}
		}

		return oInitialFocusControl;
	}

	if (typeof vMessage === "string") {
		vMessageContent = new sap.m.Text({
			textDirection: mOptions.textDirection
		}).setText(vMessage).addStyleClass("sapMMsgBoxText");

		oMessageText = vMessageContent;
	} else if (vMessage instanceof sap.ui.core.Control) {
		vMessageContent = vMessage.addStyleClass("sapMMsgBoxText");
	}

	if (mOptions && mOptions.hasOwnProperty("details") && mOptions.details !== "") {
		vMessageContent = getInformationLayout(mOptions, vMessageContent);
	}

	function onOpen() {
		if (sap.ui.getCore().getConfiguration().getAccessibility()) {
			oDialog.$().attr("role", "alertdialog");
		}
	}

	oDialog = new sap.m.Dialog({
		id: mOptions.id,
		type: sap.m.DialogType.Message,
		title: mOptions.title,
		content: vMessageContent,
		icon: mIcons[mOptions.icon],
		initialFocus: getInitialFocusControl(),
		verticalScrolling: mOptions.verticalScrolling,
		horizontalScrolling: mOptions.horizontalScrolling,
		afterOpen: onOpen,
		afterClose: onclose,
		buttons: aButtons,
		ariaLabelledBy: oMessageText ? oMessageText.getId() : undefined,
		contentWidth: mOptions.contentWidth
	});

	if (mClasses[mOptions.icon]) {
		oDialog.addStyleClass(mClasses[mOptions.icon]);
	} else {
		oDialog.addStyleClass(mClasses.STANDARD);
	}

	if (mOptions.styleClass) {
		oDialog.addStyleClass(mOptions.styleClass);
	}

	oDialog.open();
}