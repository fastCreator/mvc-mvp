function Controller(model) {
    this.model = model;
}
Controller.prototype.addValue = function (value) {
    this.model.addVal(value);
}
