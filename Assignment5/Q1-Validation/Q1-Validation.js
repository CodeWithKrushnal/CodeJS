const Constants = {
    ERROR_REQUIRED: 'Value is required',
    ERROR_MIN_LENGTH: (minLength) => `Value must be at least ${minLength} characters long`,
    ERROR_MAX_LENGTH: (maxLength) => `Value must be no more than ${maxLength} characters long`,
    OUTPUT_VALID: 'Valid 👍',
    OUTPUT_INVALID: 'Invalid 🚫',
    ELEMENT_ID_STRING_INPUT: 'stringInput',
    ELEMENT_ID_MIN_LENGTH: 'minLength',
    ELEMENT_ID_MAX_LENGTH: 'maxLength',
    ELEMENT_ID_OUTPUT: 'output'
};

class Validator {
    constructor(value) {
        this.value = value;
        this.errors = [];
    }

    // Validate if the value is required
    required() {
        if (this.value === undefined || this.value === null || this.value === '') {
            this.errors.push(Constants.ERROR_REQUIRED);
        }
        return this;
    }

    // Validate the minimum length of the string
    min(minLength) {
        if (typeof this.value === 'string' && this.value.length < minLength) {
            this.errors.push(Constants.ERROR_MIN_LENGTH(minLength));
        }
        return this;
    }

    // Validate the maximum length of the string
    max(maxLength) {
        if (typeof this.value === 'string' && this.value.length > maxLength) {
            this.errors.push(Constants.ERROR_MAX_LENGTH(maxLength));
        }
        return this;
    }

    // Check if the value is valid based on the applied rules
    isValid() {
        return this.errors.length === 0;
    }

    // Get all validation errors
    getErrors() {
        return this.errors;
    }
}

function actOnInput() {
    const validator = new Validator(document.getElementById(Constants.ELEMENT_ID_STRING_INPUT).value);
    validator.required().min(Number(document.getElementById(Constants.ELEMENT_ID_MIN_LENGTH).value)).max(Number(document.getElementById(Constants.ELEMENT_ID_MAX_LENGTH).value));
    if (validator.isValid()) {
        document.getElementById(Constants.ELEMENT_ID_OUTPUT).innerText = Constants.OUTPUT_VALID;
    } else {
        document.getElementById(Constants.ELEMENT_ID_OUTPUT).innerText = (Constants.OUTPUT_INVALID + '\n' + validator.getErrors().join('\n'));
    }
}