
// Android push test
Parse.Cloud.define('chatChannel', function(request, response) {


  // use to custom tweak whatever payload you wish to send
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo("deviceType", "android");
  pushQuery.equalTo("user_id", request.params.receiver);

  var payload = {"sender" : request.params.sender, 
                 "receiver": request.params.receiver,
                 "text": request.params.text};

  // Note that useMasterKey is necessary for Push notifications to succeed.

  Parse.Push.send({
      data: payload,
      where: pushQuery
    }, {
      useMasterKey: true
    })
    .then(function() {
      response.success("Push Sent!");
    }, function(error) {
      response.error("Error while trying to send push " + error.message);
    });

  response.success('success');
});


