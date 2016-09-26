var fs = require('fs');
var dirname = require('path').dirname;

module.exports = function(context) {
  return {
    whoIs: function(req, res) {
      try {

        return res.text('I\'m still new here..').send();
      } catch (e) {
        return res.text('Something\'s wrong.. I cannot answer you right now.\n```' + JSON.stringify(e) + '```').send();
      }
    },
    help: function(req, res) {
      var helpMessage = "I can give you information about a specific person. Try asking `who is @user`.";
      return res.text(helpMessage).send();
    }
  };
};
