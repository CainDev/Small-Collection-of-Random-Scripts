const SteamUser = require("steam-user");
const request = require("request");
const twilio = require("twilio");

/* Variables */
var steamAPI = "-";
var twilioSID = "-";
var twilioToken = "-";
var twilioClient = new twilio(twilioSID, twilioToken);


function SendTextMessage(body) {
	try {
		twilioClient.messages.create({
			body: body,
			to: "+-",
			from: "+-"
		})
	} catch { }
}

class Bot {
	constructor(username, password, desired_hours) {
		this.username = username;
		this.password = password;
		this.desired_hours = desired_hours;
		this.steamID = "";
		this.currentSteamHours = 0;
		this.client = new SteamUser();

		// Initiate Script
		this.login();
	}

	GrabHours() {
		var name = this.username;
		try {
			request('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + steamAPI + '&include_played_free_games=1&steamid=' + this.steamID, function (error, response, body) {
				if (error) {
					console.log(error);
				} else {
					var obj = JSON.parse(body);
					if (isNaN(obj.response.game_count) || obj.response.game_count == null) {
						console.log("User's profile is private.");
						console.log(body);
						return;
					} else {
						var game_count = obj.response.game_count;
						var games = obj.response.games;
						for (var i = 0; i < game_count; i++) {
							if (games[i].appid == "730") {
								this.currentSteamHours = Math.trunc(games[i].playtime_forever / 60);
								this.currentSteamHours = parseInt(this.currentSteamHours);
								console.log(`Account: ${name} is currently at ${this.currentSteamHours} hours.`);
							}
						}
					}
				}
			});
		} catch {
			SendTextMessage("Hour Look-up Failed, Check Bot.");
		}
	}


	HourlyCheck() {
		this.GrabHours(this.username, this.steamID);

		if (this.currentSteamHours >= this.desired_hours) {
			console.log(`${this.username} | Hours ${this.currentSteamHours}`)
			console.log("Hour Boosting Finished, sleeping for 3 seconds.");
			setInterval(function () {
				this.client.logOff();
				this.client.removeAllListeners();
				DeleteBot();
			}.bind(this), 3500);
		}
	}

	on_logon() {
		console.log(`Logged on as ${this.username}.`);
		this.client.gamesPlayed(730, true);
		this.client.setPersona(4);
		this.steamID = this.client.steamID.getSteamID64();

		this.HourlyCheck();

		setTimeout(function () {
			this.HourlyCheck();
		}.bind(this), 3780000);
	}

	log_off() {
		setTimeout(function () {
			this.client.logOff();
			console.log("Logged Off");
			this.client.removeAllListeners();
		}.bind(this), 3500);
	}

	login() {
		this.client.logOn({
			accountName: this.username,
			password: this.password
		});
		this.client.on('loggedOn', this.on_logon.bind(this));
	}
}

function DeleteBot() {
	delete bot;
}


var bot1 = new Bot("Account Username", "Account Password", 1000);
