var userSchema = require('./User')

exports.User = function (conn) {
    return conn.model('User', userSchema);
}