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

                throw CONSTANTS.ERROS.HTTP.NO_XML_HTTP_CLIENT;
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

    function addHeaders(client, headers) {
        for(var prop in headers) {
            if(headers.hasOwnProperty(prop)) {
                client.setRequestHeader(prop, headers[prop]);
            }
        }
    }

    function onReadyStateChange(success, error) {
        var readyState = this.readyState,
            httpReadyStates = CONSTANTS.HTTP_READY_STATES;

        if(readyState === httpReadyStates.UNSENT) {
            // beforeSend callback
        } else if(readyState === httpReadyStates.LOADING) {
            // onLoading callback
        } else if(readyState === httpReadyStates.DONE) {
            // check status code
            // call success / error / complete callbacks
        }
    }

    function ajax(settings) {
        var client = getAjaxClient();

        checkHttpMethod(settings.method);

        if(settings.headers) {
            addHeaders(client, settings.headers);
        }

        client.onreadystatechange = function () {
            onReadyStateChange.call(this, settings.success, settings.error);
        };
    }

    return {
        ajax: ajax
    };
}());
