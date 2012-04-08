(function (global, doc) {

    /**
    * Chain callbacks.
    * @param {Function[]} [No arguments name] Call function objects as chain method.
    * @return undefined
    * @example
    *   chain(function (next) {... next(); }, function (next) {... next(); }, function (next) {... next(); }...);
    *       -> next is callback.
    */
    function chain() {

        var actors = Array.prototype.slice.call(arguments);

        function next() {
        
            var actor = actors.shift(),
                arg = Array.prototype.slice.call(arguments);

            //push `next` method to argumetns to last.
            arg.push(next);

            //when `actor` is function, call it.
            (Object.prototype.toString.call(actor) === '[object Function]') && actor.apply(actor, arg);
        }

        next();
    }

    /* -----------------------------------------------
       EXPORT
    -------------------------------------------------- */
    global.chain = chain;
}(this, document));
