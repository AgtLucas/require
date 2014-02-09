define(function(require) {

  var button = document.createElement("button");
  button.onclick = function() {
    var alerter = require(["wtf/alerter"], function(alerter) {
      alerter("WTF APP?");
    });
  }

  button.textContent = "Click here!";
  document.body.appendChild(button);
})