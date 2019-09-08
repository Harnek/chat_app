
'use strict';

if (process.env.NODE_ENV === 'dev') {
    exports.config = {
        PORT : 8000,
        dbURI : 'mongodb://vipcart-db-uSeR:cKFpCAuZa6D5QXkh@localhost/vipcart-DB'
    }
} else if (process.env.NODE_ENV === 'test') {
    exports.config = {
        PORT : 8001,
        dbURI : 'mongodb://vipcartTest:cKFpCAuZa6D5QXkh@34.215.225.250/vipcartTest'
    }
} else if (process.env.NODE_ENV === 'live') {
    exports.config = {
        PORT : 8002,
        dbURI : 'mongodb://vipcartLive:cKFpCAuZa6D5QXkh@34.215.225.250/vipcartLive'
    }
}
else {
    exports.config = {
        PORT : 8081,
        dbURI : 'mongodb://localhost/chat_app'
    };
}