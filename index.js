var fs = require('fs');
var dirname = require('path').dirname;
var users = require('users_data');
var _ = require('underscore');

module.exports = function(context) {
  return {
    whoIs: function(req, res) {
      var name = formatName(req.params.name);
      var message = "User not found.";
      if (users[name]){
        message = describeUser(users[name]);
      }

      try {
        return res.text(message).send();
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

function formatName(name){
  if (name && name.charAt(0) !== '@') {
    name = '@' + name;
  }
  return name.toLowerCase();
}

function describeUser(user){
  return mdBold(user.name) + "\n" +
    mdBold("Cask: ") + user.cask + "\n" +
    mdBold("Crew: ") + user.crew + "\n" +
    mdBold("Projects: ") + user.projects;
}

function describeCodeArray(array){
  return _.map(array, function(item){
    return mdCode(item);
  });
}

// MarkDown Format Helper Functions
function mdBold(text){
  return "**" + text + "**";
}

function mdCode(text){
  return "`" + text + "`";
}
