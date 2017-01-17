
// Android push test
Parse.Cloud.define('chatChannel', function(request, response) {

  console.log("sender "+ request.params.sender + " " + "receiver " + request.params.receiver + " " + " text "+ request.params.text); 

  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");
  pushQuery.equalTo("receiver", request.params.receiver);

  var payload = {"sender" : request.params.sender, 
                 "receiver": request.params.receiver,
                 "text": request.params.text};

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


