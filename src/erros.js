class InvalidArgumentError extends Error {
	constructor(mensagem) {
		super(mensagem);
		this.name = 'InvalidArgumentError';
	}
}

class InternalServerError extends Error {
	constructor(mensagem) {
		super(mensagem);
		this.name = 'InternalServerError';
	}
}

class ExpirationError extends Error {
	constructor(messagem) {
		super(messagem);
		this.name = 'ExpirationError'
	}
}

module.exports = {
	InvalidArgumentError: InvalidArgumentError,
	InternalServerError: InternalServerError,
	ExpirationError: ExpirationError
};
