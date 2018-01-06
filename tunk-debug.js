; (function () {

    function debug(utils) {
        var tunk = this;
        var hooks = Object.keys(utils.hooks);
        console.log('[tunk-debug]: All hook names: ', hooks.join(','));
        for (var i = 0; i < hooks.length; i++) {
            (function(hook){
                utils.hook(hook, function (origin) {
                    return function () {
                        var debug = arguments[arguments.length - 1].debug;
                        if (debug) {
                            if(debug && typeof debug === 'object'){
                                if(debug[hook] || debug.constructor === Array && debug.indexOf(hook) > -1){
                                    consoleLog(arguments, hook);
                                }
                            } else {
                                consoleLog(arguments, hook);
                            }
                            
                        }
                        return origin.apply(null, arguments);
                    }
                });
            })(hooks[i]);
        }
        
        function consoleLog(args, hook){
            args = Array.prototype.slice.call(args, 0, args.length);
            console.groupCollapsed('[tunk-debug]: ' + hook);
            for(var i=0; i<args.length; i++) {
                console.log(args[i]);
            }
            console.groupEnd('[tunk-debug]: ' + hook);
        }
    }

    if (typeof module === 'object' && module.exports) {
        module.exports = debug;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return debug;
        });
    }

})();
