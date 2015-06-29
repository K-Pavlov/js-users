var User = function() {
	var userErrors = CONSTANTS.ERRORS.USERS,
		user = function(options) {
			this._id = options.id;
			this.setUsername(options.username);
			this.minLength = options.minLength;
			this.maxLength = options.maxLength;
		};

	function validateUsername(value) {
		if (!value) {
			throw userErrors.NO_VALUE;
		} else if (!(typeof value === 'string' || value instanceof String)) {
			throw userErrors.INVALID_DATA_TYPE;
		} else if (value.length < this.minLength) {
			throw userErrors.MIN_LENGTH;
		} else if (value.length > this.maxLength) {
			throw userErrors.MAX_LENGTH;
		}
	}

	user.prototype.getUsername = function() {
		return this.username;
	};

	user.prototype.setUsername = function(value) {
		validateUsername(value);
		this.username = value;
	};

	user.prototype.generateForm = function () {
		var form = document.createElement('form');

		return form;
	};

	return user;
};
