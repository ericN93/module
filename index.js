'use strict';

class Module {
	constructor() {
		//all different commands
		this.commands = ["/catchPhrase", "/joke", "/asci", '/random', "/quote"];

		//all catchPhrases
		this.catchPhrase = ["Bernie, the bolt!", "Ooh, you are awful ... but I like you!",
			"You might very well think that; I couldn't possibly comment",
			"You stupid boy", "Here's Johnny", "Legendary"];
		//all jokes
		this.joke = ["I Googled how to start a wildfire. \n I got 48,500 matches.",
			"What’s the biggest pan in the world? \n Japan."];
		//all asci
		this.asci = ["(╯°□°）╯︵ ┻━┻", "┌∩┐(◣_◢)┌∩┐", "¯(ツ)_/¯", "༼ つ ◕_◕ ༽つ",
			"ಠ_ರೃ", "{ o }===(:::)", "︻デ┳═ー", "ᶠᶸᶜᵏ♥ᵧₒᵤ", "♪┏(°.°)┛┗(°.°)┓┗(°.°)┛┏(°.°)┓ ♪"];
		this.quote = ["Life can only be understood backwards; but it must be lived forwards.",
			"Beware the barrenness of a busy life.",
			"If you try, you risk failure. If you don’t, you ensure it.",
			"Life is a spell so exquisite that everything conspires to break it.",
			"If you do what you need, you’re surviving. If you do what you want, you’re living.",
			"Go confidently in the direction of your dreams. Live the life you have imagined.",
			"Live today, for tomorrow it will all be history."];
	}

	getCheckCommand(message) {
		let ret = message;

		if (this.commands.indexOf(ret) > -1) {
			console.log(ret + ' in commands');
			switch (ret) {
			case '/catchPhrase':
				ret = this.getCatchPrase();
				break;
			case '/joke':
				ret = this.getJoke();
				break;
			case '/asci':
				ret = this.getAsci();
				break;
			case '/quote':
				ret = this.getQuote();
				break;
			}
		}
		return ret;
	}

	getCatchPrase() {
		let size = this.getCatchPraseSize();

		return this.catchPhrase[Math.floor(Math.random()*size)];
	}

	getCatchPraseSize() {
		return this.catchPhrase.length;
	}

	getJoke() {
		let size = this.getJokeSize();

		return this.joke[Math.floor(Math.random()*size)];
	}

	getJokeSize() {
		return this.joke.length;
	}

	getAsci() {
		let size = this.getAsciSize();

		return  this.asci[Math.floor(Math.random()*size)];
	}

	getAsciSize() {
		return this.asci.length;
	}

	getQuote() {
		let size = this.getQuoteSize();

		return this.quote[Math.floor(Math.random()*size)];
	}

	getQuoteSize() {
		return this.quote.length;
	}
}

module.exports = Module;
