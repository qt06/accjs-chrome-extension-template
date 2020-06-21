(function() {
	document.title = document.title + ' - ' + chrome.i18n.getMessage('pluginHasAcc') + ' - 作者： ' + chrome.i18n.getMessage('pluginAuthor');
var DEBUG = false;
window.onerror = function(msg, url, line) {
	alert("error: "+msg+"\r\n line: "+line+"\r\n url: "+url);
	return false;
};


})();
