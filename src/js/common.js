function addDebug() {
$('body').append('<div id="acc_debug_container"><textarea id="jscode" name="jscode"></textarea><button type="button" id="execbtn">exec</button></div>');
$('#execbtn').on('click', function(e) {
var code = $('#jscode').val();
$.globalEval(code);
});
}
function removeDebug() {
$('#execbtn').off();
$('#acc_debug_container').remove();
}
function amo(proc, target, options) {
target = target || document.body;
options = options || {
      'childList': true,
      'subtree': true
    };
    let mo = new MutationObserver((records) => {proc();});
    mo.observe(target, options);
return mo;
}
// 向页面注入JS
function injectCustomJs(jsPath)
{
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function()
	{
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.body.appendChild(temp);
}
