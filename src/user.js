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

	function generateInput(type, name, placeholder) {
		var input = document.createElement('input');
		input.setAttribute('type', type);
		input.setAttribute('name', name);
		input.setAttribute('placeholder', placeholder);

		return input;
	}

	user.prototype.getUsername = function() {
		return this.username;
	};

	user.prototype.setUsername = function(value) {
		validateUsername(value);
		this.username = value;
	};

	user.prototype.generateForm = function () {
		function formSubmit () {

		}

		var form = document.createElement('form'),
			emailInput = generateInput('email', 'email', 'Email'),
			usernameInput = generateInput('text', 'username', 'Username'),
			passwordInput = generateInput('password', 'password', 'Password');

		form.appendChild(usernameInput);
		form.appendChild(passwordInput);
		form.appendChild(emailInput);
		form.submit = formSubmit;

		return form;
	};

	return user;
};
