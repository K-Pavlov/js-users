var User = function() {
	var userErrors = CONSTANTS.ERRORS.USERS,
		user = function(options) {
			this._id = options.id;
			this.setUsername(options.username);
                        this.setEmail(options.email);
			this.minLength = options.minLength;
			this.maxLength = options.maxLength;
		};

	function validateUsername(value) {
		if (!value) {
			throw userErrors.NO_VALUE_USERNAME;
		} else if (!(typeof value === 'string' || value instanceof String)) {
			throw userErrors.INVALID_DATA_TYPE_USERNAME;
		} else if (value.length < this.minLength) {
			throw userErrors.MIN_LENGTH;
		} else if (value.length > this.maxLength) {
			throw userErrors.MAX_LENGTH;
		}
	}

    function validateEmail(value){
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (!value) {
                    throw userErrors.NO_VALUE_EMAIL;
            } else if(!(typeof value === 'string' || value instanceof String)){
                    throw userErrors.INVALID_DATA_TYPE_EMAIL;
            } else if(re.test(value) === false){ //validate by regex
                    throw userErrors.INVALID_EMAIL;
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

    user.prototype.getEmail = function(){
            return this.email;
    };

    user.prototype.setEmail = function(value){
            validateEmail(value);
            this.email = value;
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
