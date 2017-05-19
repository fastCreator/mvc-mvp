function ViewInput(controller) {
    this.controller = controller; 
    this.el = document.querySelector('input');
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
            that.controller.addValue(that.getValue());
            that.setValue('');
        }
    };
}
