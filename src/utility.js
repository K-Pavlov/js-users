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
                console.log(prop, headers[prop]);
                client.setRequestHeader(prop, headers[prop]);
            }
        }
    }

    function onReadyStateChange(settings) {
        var readyState = this.readyState,
            httpReadyStates = CONSTANTS.HTTP_READY_STATES,
            result,
            status,
            firstStatusDigit;

        if(readyState === httpReadyStates.UNSENT) {
            if(settings.beforeSend) {
                result = settings.beforeSend(this, settings);
                // Abort only when false is explictly returned
                if(result === false) {
                    this.abort();
                }
            }
        } else if(readyState === httpReadyStates.OPENED) {
            if(settings.headers) {
                addHeaders(this, settings.headers);
            }
        } else if(readyState === httpReadyStates.LOADING) {
            if(settings.onLoading) {
                settings.onLoading(this);
            }
        } else if(readyState === httpReadyStates.DONE) {
            status = this.status;
            firstStatusDigit = +status.toString()[0];
            if(firstStatusDigit === 2 || status === 304) {
                //format response
                if(settings.success) {
                    settings.success(this.response, this.status, this);
                }
            } else if (firstStatusDigit === 3 || firstStatusDigit === 4 ||
                       firstStatusDigit === 5 || firstStatusDigit === 0) {
                if(settings.error) {
                    settings.error(this, this.status, this.statusText);
                }
            }

            if(settings.complete) {
                settings.complete(this, this.status);
            }
        }
    }

    // Needs mime type, content type handling
    // and formatting the response accordingly
    function ajax(settings) {
        var client = getAjaxClient(),
            type = settings.type;

        if(!type) {
            type = 'GET';
        } else {
            type = type.toUpperCase();
        }

        checkHttpMethod(type);
        settings.type = type;
        client.onreadystatechange = function () {
            onReadyStateChange.call(this, settings);
        };

        client.open(settings.type, settings.url);
        client.send();
    }

    return {
        ajax: ajax
    };
}());
