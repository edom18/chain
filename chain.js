/**
* Chain callbacks.
* @param {Array Function} call function objects as chain method.
*/
var chain = function () {

    var actors = Array.prototype.slice.call(arguments);

    function next() {
    
        var actor = actors.shift(),
            arg = Array.prototype.slice.call(arguments);

        arg.push(next);
        (Object.prototype.toString.call(actor) === '[object Function]') && actor.apply(actor, arg);
    }

    next();
};
