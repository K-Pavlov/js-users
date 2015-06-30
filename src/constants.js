var CONSTANTS = (function () {
	var ERRORS = {
		USERS: {
			NO_VALUE_USERNAME: 'No username value',
                        NO_VALUE_EMAIL: 'No email value',
                        INVALID_EMAIL: 'Invalid email',
			INVALID_DATA_TYPE_USERNAME: 'Invalid username type',
                        INVALID_DATA_TYPE_EMAIL: 'Invalid email type',
			LEN_MIN: 'Username is too short',
			LEN_MAX: 'Username is too long'
		},
		HTTP: {
			INVALID_METHOD: 'Nonexistent HTTP method'
		}
	};

	var HTTP_METHODS = {
		GET: 'GET',
		HEAD: 'HEAD',
		POST: 'POST',
		PUT: 'PUT',
		DELETE: 'DELETE',
		TRACE: 'TRACE',
		OPTIONS: 'OPTIONS',
		CONNECT: 'CONNECT',
		PATCH: 'PATCH'
	};

	return {
		ERRORS: ERRORS,
		HTTP_METHODS: HTTP_METHODS
	};
}());
