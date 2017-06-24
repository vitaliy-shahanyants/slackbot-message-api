var SlackBot = require('slackbots');

var settings = {
  token:'xoxb-203862496598-RM2hJhRWR3BeSif2EuA8VlBq',
  name:'slackbothelper'
};

var bot = new SlackBot(settings);

bot.on('start',function(){
  //bot.postMessageToChannel('general',"Hello");
});
bot.on('message',function(data){
  //console.log(data);
  switch (data.type) {
    case 'message':
      message(data);
      break;
    case 'desktop_notification':
      desktop_notification(data);
      break;
    default:
  }
});
function message(data){
  console.log("Channel data coming in");
  if(data.text.includes("add")){
    var user = data.text.split("add user");
    user = JSON.parse(user[1]);
    console.log(user);
  }
}
function desktop_notification(){
}
