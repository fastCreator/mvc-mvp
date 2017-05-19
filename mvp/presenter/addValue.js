function Presenter(view, model) {
    this.model = model;
    this.view = view;
}
Presenter.prototype.addValue = function (value) {
    this.model.addVal(value);
    this.view.setValue(this.model.getVal());
}
