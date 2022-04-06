sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<li tabindex="${litRender.ifDefined(context.tabIndex)}" class="${litRender.classMap(context.classes.main)}" dir="${litRender.ifDefined(context.effectiveDir)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" @mouseup="${context._onmouseup}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" @click="${context._onclick}" aria-selected="${litRender.ifDefined(context.ariaSelected)}" role="${litRender.ifDefined(context._accInfo.role)}" aria-expanded="${litRender.ifDefined(context._accInfo.ariaExpanded)}" title="${litRender.ifDefined(context.title)}" aria-level="${litRender.ifDefined(context._accInfo.ariaLevel)}" aria-posinset="${litRender.ifDefined(context._accInfo.posinset)}" aria-setsize="${litRender.ifDefined(context._accInfo.setsize)}" aria-labelledby="${litRender.ifDefined(context._id)}-invisibleText ${litRender.ifDefined(context._id)}-content" aria-disabled="${litRender.ifDefined(context.ariaDisabled)}" style="list-style-type: none;">${ context.placeSelectionElementBefore ? block1(context, tags, suffix) : undefined }<div id="${litRender.ifDefined(context._id)}-content" class="ui5-li-content"><div class="ui5-uci-thumbnail"><slot name="thumbnail"></slot></div><div class="ui5-uci-content-and-edit-container"><div class="ui5-uci-content-and-progress"><div class="ui5-uci-content">${ context._editing ? block5(context, tags, suffix) : block6(context, tags, suffix) }<div class="ui5-uci-description"><slot></slot></div></div>${ context._showProgressIndicator ? block9(context, tags, suffix) : undefined }</div><div class="ui5-uci-edit-buttons">${ context._editing ? block10(context, tags, suffix) : block11(context, tags, suffix) }</div></div></div>${ context.typeDetail ? block15(context, tags, suffix) : undefined }${ context.placeSelectionElementAfter ? block16(context, tags, suffix) : undefined }<span id="${litRender.ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${litRender.ifDefined(context._accInfo.listItemAriaLabel)}${litRender.ifDefined(context.accessibleName)}</span></li>`;
	const block1 = (context, tags, suffix) => litRender.html`${ context.modeSingleSelect ? block2(context, tags, suffix) : undefined }${ context.modeMultiSelect ? block3(context, tags, suffix) : undefined }${ context.renderDeleteButton ? block4(context, tags, suffix) : undefined }`;
	const block2 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-radio-button", tags, suffix)} ?disabled="${context.isInactive}" tabindex="-1" id="${litRender.ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></${litRender.scopeTag("ui5-radio-button", tags, suffix)}>`;
	const block3 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-checkbox", tags, suffix)} ?disabled="${context.isInactive}" tabindex="-1" id="${litRender.ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${litRender.ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></${litRender.scopeTag("ui5-checkbox", tags, suffix)}>`;
	const block4 = (context, tags, suffix) => litRender.html`<div class="ui5-li-deletebtn"><${litRender.scopeTag("ui5-button", tags, suffix)} tabindex="-1" data-sap-no-tab-ref id="${litRender.ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${litRender.ifDefined(context.deleteText)}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;
	const block5 = (context, tags, suffix) => litRender.html`<div class="ui5-uci-edit-container"><${litRender.scopeTag("ui5-input", tags, suffix)} id="ui5-uci-edit-input" data-sap-focus-ref @focusin="${context._onInputFocusin}" @keydown="${context._onInputKeyDown}"></${litRender.scopeTag("ui5-input", tags, suffix)}><span class="ui5-uci-file-extension">${litRender.ifDefined(context._fileExtension)}</span></div>`;
	const block6 = (context, tags, suffix) => litRender.html`${ context.fileNameClickable ? block7(context, tags, suffix) : block8(context) }`;
	const block7 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-link", tags, suffix)} class="ui5-uci-file-name" @click="${context._onFileNameClick}">${litRender.ifDefined(context.fileName)}</${litRender.scopeTag("ui5-link", tags, suffix)}>`;
	const block8 = (context, tags, suffix) => litRender.html`<span class="ui5-uci-file-name">${litRender.ifDefined(context.fileName)}</span>`;
	const block9 = (context, tags, suffix) => litRender.html`<div class="ui5-uci-progress-box"><${litRender.scopeTag("ui5-progress-indicator", tags, suffix)} class="ui5-uci-progress-indicator" hide-value value="${litRender.ifDefined(context.progress)}" value-state="${litRender.ifDefined(context.valueStateName)}"></${litRender.scopeTag("ui5-progress-indicator", tags, suffix)}><div class="ui5-uci-progress-labels"><${litRender.scopeTag("ui5-label", tags, suffix)} show-colon>${litRender.ifDefined(context._progressText)}</${litRender.scopeTag("ui5-label", tags, suffix)}><${litRender.scopeTag("ui5-label", tags, suffix)}>${litRender.ifDefined(context.progress)}%</${litRender.scopeTag("ui5-label", tags, suffix)}></div></div>`;
	const block10 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} design="Transparent" class="ui5-uci-edit-rename-btn" @click="${context._onRename}" @keyup="${context._onRenameKeyup}">${litRender.ifDefined(context._renameBtnText)}</${litRender.scopeTag("ui5-button", tags, suffix)}><${litRender.scopeTag("ui5-button", tags, suffix)} design="Transparent" id="ui5-uci-edit-cancel" @click="${context._onRenameCancel}" @keyup="${context._onRenameCancelKeyup}">${litRender.ifDefined(context._cancelRenameBtnText)}</${litRender.scopeTag("ui5-button", tags, suffix)}>`;
	const block11 = (context, tags, suffix) => litRender.html`${ context._showRetry ? block12(context, tags, suffix) : undefined }${ context._showTerminate ? block13(context, tags, suffix) : undefined }${ context.showEditButton ? block14(context, tags, suffix) : undefined }`;
	const block12 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="refresh" design="Transparent" title="${litRender.ifDefined(context._retryButtonTooltip)}" @click="${context._onRetry}" @keyup="${context._onRetryKeyup}"></${litRender.scopeTag("ui5-button", tags, suffix)}>`;
	const block13 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="stop" design="Transparent" title="${litRender.ifDefined(context._terminateButtonTooltip)}" @click="${context._onTerminate}" @keyup="${context._onTerminateKeyup}"></${litRender.scopeTag("ui5-button", tags, suffix)}>`;
	const block14 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} id="${litRender.ifDefined(context._id)}-editing-button" design="Transparent" title="${litRender.ifDefined(context._editButtonTooltip)}" icon="edit" @click="${context.onDetailClick}" @keyup="${context._onDetailKeyup}" class="ui5-li-detailbtn ui5-uci-edit"></${litRender.scopeTag("ui5-button", tags, suffix)}>`;
	const block15 = (context, tags, suffix) => litRender.html`<div class="ui5-li-detailbtn"><${litRender.scopeTag("ui5-button", tags, suffix)} design="Transparent" icon="edit" @click="${context.onDetailClick}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;
	const block16 = (context, tags, suffix) => litRender.html`${ context.modeSingleSelect ? block17(context, tags, suffix) : undefined }${ context.modeMultiSelect ? block18(context, tags, suffix) : undefined }${ context.renderDeleteButton ? block19(context, tags, suffix) : undefined }`;
	const block17 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-radio-button", tags, suffix)} ?disabled="${context.isInactive}" tabindex="-1" id="${litRender.ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></${litRender.scopeTag("ui5-radio-button", tags, suffix)}>`;
	const block18 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-checkbox", tags, suffix)} ?disabled="${context.isInactive}" tabindex="-1" id="${litRender.ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${litRender.ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></${litRender.scopeTag("ui5-checkbox", tags, suffix)}>`;
	const block19 = (context, tags, suffix) => litRender.html`<div class="ui5-li-deletebtn"><${litRender.scopeTag("ui5-button", tags, suffix)} tabindex="-1" data-sap-no-tab-ref id="${litRender.ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${litRender.ifDefined(context.deleteText)}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;

	return block0;

});