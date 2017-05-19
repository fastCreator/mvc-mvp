function modelSpan() {
    this.value = [];
}
modelSpan.prototype.getVal = function () {
    return this.value;
}
modelSpan.prototype.addVal = function (value) {
    this.value.push(value);
    this.change();
}
modelSpan.prototype.change = function () {
    myEvent.emit('add', this.value);
}