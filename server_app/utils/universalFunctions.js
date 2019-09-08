const MD5 = require('md5');

const CryptData = function (stringToCrypt) {
    return MD5(MD5(stringToCrypt));
};

module.exports = {
    CryptData: CryptData,
}