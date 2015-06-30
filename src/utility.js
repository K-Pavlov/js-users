var utility = (function () {
    function getAjaxClient() {
        if(typeof XMLHttpRequest === "undefined") {
            XMLHttpRequest = function () {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.6.0");
                } catch (e) {
                }

                try {
                    return new ActiveXObject("Msxml2.XMLHTTP.3.0");
                } catch (e) {
                }

                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                }

                throw new Error("This browser does not support XMLHttpRequest.");
            };
        }

        return new XMLHttpRequest();
    }

    function checkHttpMethod(method) {
        var httpMethods = CONSTANTS.HTTP_METHODS;
        for(var prop in httpMethods) {
            if(httpMethods.hasOwnProperty(prop)){
                if(httpMethods[prop] === method) {
                    return true;
                }
            }
        }

        throw CONSTANTS.ERRORS.HTTP.INVALID_METHOD;
    }

    function ajax(settings) {
        var client = getAjaxClient();

        checkHttpMethod(settings.method);
    }

    return {
        ajax: ajax
    };
}());
