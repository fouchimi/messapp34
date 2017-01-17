
// Android push test
<<<<<<< HEAD
Parse.Cloud.define('chatChannel', function(request, response) {
=======
Parse.Cloud.define('pushChannelTest', function(request, response) {
>>>>>>> 7f3d543ef11c1f11baf78e9357f6fee8c1d7fb1f

  // request has 2 parameters: params passed by the client and the authorized user
  var params = request.params;
  var user = request.user;
<<<<<<< HEAD
  
  var sender = params.sender;
  var receiver = params.receiver;
  var message = params.message;

  var payload = {"sender" : sender, "receiver" : receiver, "message" : message};
=======

  // To be used with:
  // https://github.com/codepath/ParsePushNotificationExample
  // See https://github.com/codepath/ParsePushNotificationExample/blob/master/app/src/main/java/com/test/MyCustomReceiver.java
  var customData = params.customData;
  var launch = params.launch;
  var broadcast = params.broadcast;
>>>>>>> 7f3d543ef11c1f11baf78e9357f6fee8c1d7fb1f

  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");

<<<<<<< HEAD
=======
  var payload = {};

  if (customData) {
      payload.customdata = customData;
  }
  else if (launch) {
      payload.launch = launch;
  }
  else if (broadcast) {
      payload.broadcast = broadcast;
  }
>>>>>>> 7f3d543ef11c1f11baf78e9357f6fee8c1d7fb1f

  // Note that useMasterKey is necessary for Push notifications to succeed.

  Parse.Push.send({
  where: pushQuery,      // for sending to a specific channel
  data: payload,
  }, { success: function() {
     console.log("#### PUSH OK");
  }, error: function(error) {
     console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
<<<<<<< HEAD
=======
});

// iOS push testing
Parse.Cloud.define("iosPushTest", function(request, response) {

  // request has 2 parameters: params passed by the client and the authorized user                                                                                                                               
  var params = request.params;
  var user = request.user;

  // Our "Message" class has a "text" key with the body of the message itself                                                                                                                                    
  var messageText = params.text;

  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo('deviceType', 'ios'); // targeting iOS devices only                                                                                                                                          

  Parse.Push.send({
    where: pushQuery, // Set our Installation query                                                                                                                                                              
    data: {
      alert: "Message: " + messageText
    }
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
>>>>>>> 7f3d543ef11c1f11baf78e9357f6fee8c1d7fb1f
});

