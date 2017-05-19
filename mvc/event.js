var events = [];
var myEvent = {};

myEvent.emit = function (ename, data) {
    events[ename](data);
};

myEvent.on = function (ename, fc) {
    events[ename] = fc;
};