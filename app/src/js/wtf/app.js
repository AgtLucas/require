define(["./alerter"], function(require, exports, module) {

  // var a = require("./alerter");

  var button = document.createElement("button");
  button.onclick = function() {
    var alerter = require(["alerter"], function(alerter) {
      alerter("WTF APP?");
    });
  }

  button.textContent = "Click here!";
  document.body.appendChild(button);
});