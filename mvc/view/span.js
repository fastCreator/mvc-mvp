function ViewSpan(controller) {
    this.controller = controller;
    this.model = model;
    this.el = document.querySelector('span');
    this.listen();
}
ViewSpan.prototype.getValue = function () {
    return this.el.value;
}
ViewSpan.prototype.setValue = function (val) {
    console.log(this.el)
    this.el.innerText = val;
}
ViewSpan.prototype.listen = function () {
    var that = this;
    myEvent.on('add', function (val) {
        that.setValue(val);
    });
}

