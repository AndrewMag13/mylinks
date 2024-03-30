var links = require('./links.json');
var me = require('./me.json');

module.exports = function () {
    return {
        links: links,
        me: me,
    }
}