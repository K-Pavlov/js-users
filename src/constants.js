var CONSTANTS = (function () {
	var ERRORS = {
		USERS: {
			NO_VALUE: 'Invalid username',
			INVALID_DATA_TYPE: 'Invalid username type',
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
