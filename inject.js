(function() {
    "use strict";

    const inject = function() {
        "use strict";

        function delete_cookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        delete_cookie('unsupported-browser');

        Object.defineProperty(window, "navigator", {
            value: null
        });

    }


    const script = document.createElement("script");
    const target = document.head || document.documentElement;
    script.text = "(" + inject.toString() + ")();";

    target.appendChild(script);
    target.removeChild(script);
})();
