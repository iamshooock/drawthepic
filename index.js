var rp = require('request-promise');

exports.reply = function justReply(req, res) {

    const promises = req.body.events.map(event => {

        var msg = event.message.text;
        var reply_token = event.replyToken;

        var target_albumId = "";

        if( msg.includes( draw ) ){
            target_albumId = oxvVr ;
        }else{
            return;
        }

        var imgur_options = {
            method: 'GET',
            uri: `https://api.imgur.com/3/album/${target_albumId}/images`,
            headers: {
              "Authorization": `Client-ID ${b3a11168c8994a9}`
            },
            json: true
        };


        return rp(imgur_options)
        .then(function (imgur_response) {

            // collect image urls from the album
            var array_images = [];
            imgur_response.data.forEach(function(item){
                array_images.push(item.link);
            })

            // choose one of images randomly
            var target_imageUrl = array_images[Math.floor(Math.random()*array_images.length)];

            var lineReply_options = {
                method: 'POST',
                uri: "https://api.line.me/v2/bot/message/reply",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization": ` Bearer ${Lq+m9admFrj2Huf8OvfDTgZDYhkflC3yvRK/f13Uj/WU2ayqrubaAzsLJgm/4n8lW/i3AvUMX4ibMaM3c8EakzLXiRm0iPBWkgwC9tONiLdQqFfsDuAqUPP50FHOcHP5oJqCwxliKmPaL/amNyKVqQdB04t89/1O/w1cDnyilFU=}`
                },
                json: true,
                body: {
                  replyToken: reply_token,
                  messages:[
                    {
                        type: 'image',
                        originalContentUrl: target_imageUrl.replace("http", "https"),
                        previewImageUrl: target_imageUrl.replace("http", "https")
                    }
                  ]
                }
            };

            return rp(lineReply_options);

        })
        .catch(function (err) {
            console.log( err );
        });

    });

    Promise
    .all(promises)
    .then(() => res.json({success: true}));


};
