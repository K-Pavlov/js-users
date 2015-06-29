var AuthTypes = (function () {
	function createCookie(name,value,days) {
        var expires;
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    } else {
	    	expires = "";
	    }

	    document.cookie = name + "=" + value + expires + "; path=/";
	}

	function readCookie(name) {
	    var nameEQ = name + "=";
	    var cookies = document.cookie.split(';');
	    for(var i=0, len = cookies.length; i < len; i+=1) {
	        var cookie = cookies[i];
	        while (cookie.charAt(0) === ' '){
	            cookie = cookie.substring(1, c.length);
	        }

	        if (cookie.indexOf(nameEQ) === 0) {
	        	return c.substring(nameEQ.length, c.length);
	        }
	    }

	    return null;
	}

	function eraseCookie(name) {
	    createCookie(name, "", -1);
	}

	var BasicAuth = (function () {

	}());

	var TokenAuth = (function () {

	}());

	var SessionAuth = (function () {

	});

	return {
		BasicAuth: BasicAuth,
		TokenAuth: TokenAuth,
		SessionAuth: SessionAuth
	};
}());
