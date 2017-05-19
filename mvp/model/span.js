function modelSpan() { 
    this.value = [];
}

modelSpan.prototype = new MyEvent();

modelSpan.prototype.getVal = function () {
    return this.value;
}
modelSpan.prototype.addVal = function (value) {
    this.value.push(value);
    this.emit('add', this.value);
}

