        var request = require('request');
// Change these variables
        var email = 'GDO_EMAIL_GOES_HERE'
        var pass = 'PASSWORD'
        

    const doSomething = () => new Promise((resolve, reject) => {
         var requestmsg = '{"username":"emailhere","password":"passwordhere"}'
        var requestmsg = requestmsg.replace('emailhere', email)
        var requestmsg = requestmsg.replace('passwordhere', pass)
        var requestmsg = JSON.parse(requestmsg)
var options = {url:'https://tti.tiwiconnect.com/api/devices/DEVICE_ID_HERE ',method:'GET',json:requestmsg} // CHANGE DEVICE ID
           request(options, (err, res, body) => {
        if (err) return reject(err)
        resolve(body)
    })
})

const someController = async function() {
    var someValue = await doSomething()
                var doorval = someValue.result[0].deviceTypeMap.garageDoor_7.at.doorState.value
                if (doorval === 0) {
            gdoState = "CLOSED";
        } else if (doorval === 1) {
            gdoState = "OPEN";
        } else if (doorval === 2) {
            gdoState = "CLOSING";
        } else {
            gdoState = "OPENING";
}
        console.log(gdoState)

}


someController()


