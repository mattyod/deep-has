'use strict';

module.exports = function (obj, key) {
    var matches = [];

    var itterate = function itterate(object, path) {
        var match, item;

        var newPath = function newPath(add) {
            return path ? (path + '.' + add) : add;
        };

        if (object.hasOwnProperty(key)) {
            match = {};
            match[newPath(key)] = object[key];
            matches.push(match);
        }

        for (item in object) {
            if (object.hasOwnProperty(item) && typeof object[item] === 'object') {
                itterate(object[item], newPath(item));
            }
        }

    };

    itterate(obj);

    return matches;

};