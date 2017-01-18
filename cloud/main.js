
// Android push test
Parse.Cloud.define("sendEntry", function(request, response) {
        var name = request.params.senderName;
        var msg = request.params.message;

        Parse.Push.send({
                channels: [ request.params.channelId ],
                data: {
                        title: name,
                        message: msg,
                        action: "com.parse.push.intent.RECEIVE",
                        senderId: request.params.senderId,
                        receiverId: request.params.receiverId
                }
        }, {
                success: function() {
                        // Push was successful
                        response.success("sendAnnouncement sent");
                },
                error: function(error) {
                        // Handle error
                        response.error("error with sendAnnouncement: " + error);
                },
                useMasterKey: true
        });
});


