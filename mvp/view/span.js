function ViewSpan(controller) { 
    this.el = document.querySelector('span');
    this.presenter = null;
}
ViewSpan.prototype.getValue = function () {
    return this.el.value;
}
ViewSpan.prototype.setValue = function (val) {
    this.el.innerText = val;
}
ViewSpan.prototype.setPresenter = function (presenter) {
    this.presenter = presenter;
} 
