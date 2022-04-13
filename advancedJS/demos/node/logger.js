const EventEmitter = require("events");


class Logger extends EventEmitter{
    log(message) {
        console.log(message);
        this.emit( "messageLogged", {"message": message});
    }
}

const log = message => {
    console.log(`Here is your message: ${message}`);
}

//module.exports = log;

module.exports = Logger;