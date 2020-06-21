const path = require("path")

function getPath() {
    return path.join(__dirname, "src");
}
function getManifest() {
    return require(path.join(__dirname, "src", "manifest.json"));
}
function getLocaleMessages() {
    return require(path.join(__dirname, "src", "_locales", "zh_CN", "messages.json"));
}
exports.getPath = getPath;
exports.getManifest = getManifest;
exports.getLocaleMessages = getLocaleMessages;
