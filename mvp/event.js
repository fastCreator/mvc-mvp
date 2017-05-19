function MyEvent() {
    this.events = [];
}

MyEvent.prototype.emit = function (ename, data) {
    this.events[ename](data);
};

MyEvent.prototype.on = function (ename, fc) {
    this.events[ename] = fc;
};