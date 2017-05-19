function Presenter(view, model) {
    this.model = model;
    this.view = view;
    this.listen();
}
Presenter.prototype.addValue = function (value) {
    this.model.addVal(value); 
}
Presenter.prototype.listen = function (value) {
    var that = this;
    this.model.on('add', function (val) {
        that.view.setValue(val);
    });
}