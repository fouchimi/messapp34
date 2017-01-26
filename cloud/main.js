
// Android push test
Parse.Cloud.define('sendPushToUser', function(request, response) {
  var sender = request.params.sender;
  var receiver = request.params.receiver;
  var message = request.params.message;

  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");
  pushQuery.equalTo("user", receiver);

  var payload = {"title" : sender, 
                 "alert": message };

  // Note that useMasterKey is necessary for Push notifications to succeed.

  Parse.Push.send({
  where: pushQuery,      // for sending to a specific channel
  data: payload,
  }, { success: function() {
     console.log("#### PUSH OK");
     console.log(response.success());
  }, error: function(error) {
     console.log("#### PUSH ERROR" + error.message);
     console.log(response.message);
  }, useMasterKey: true});

  response.success('success');
});


