function ViewInput() { 
    this.el = document.querySelector('input');
    this.presenter = null;
    this.initSubmit();
}
ViewInput.prototype.getValue = function () {
    return this.el.value;
}
ViewInput.prototype.setValue = function (val) {
    return this.el.value = val;
}
ViewInput.prototype.initSubmit = function (event) {
    var that = this;
    this.el.onkeydown = function (e) {
        console.log(e.keyCode)
        if (e.keyCode == 13) {
            that.presenter.addValue(that.getValue());
            that.setValue('');
        }
    };
}
ViewInput.prototype.setPresenter = function (presenter) {
    this.presenter = presenter;
} 