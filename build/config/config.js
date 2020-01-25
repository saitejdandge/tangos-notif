"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SMSEnabled = exports.SMSEnabled = true;
var SESEnabled = exports.SESEnabled = true;
class setSMSEnabled {
    constructor(value) {
        this.SMSEnabled = value;
    }
}
exports.setSMSEnabled = setSMSEnabled;
class setSESEnabled {
    constructor(value) {
        this.SESEnabled = value;
    }
}
exports.setSESEnabled = setSESEnabled;