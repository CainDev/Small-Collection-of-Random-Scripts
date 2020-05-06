# Steam HourBoost Script
I made this as a way to learn NodeJS it uses the newest version of the "node-steam-user" library by DoctorMcKay. There is a ton of issues with this that I am actively aware of, lack of error handling,
no good use of callbacks, no bulk import etc. I will *maybe* update it in the future as I am busy with other projects.

> To start the script fill in all the API information, write up an account and type "node bare.js".

# Requirements
> npm i steam-user

<a href="https://github.com/DoctorMcKay/node-steam-user">

> npm i twilio

> npm i request

<a href="https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey">Steam Web API Key</a>

Steam account info must be public with SteamGuard disabled!

# Known Issues
Horrible Call-back Usage

No way to handle SteamGuard (Keep it disabled)

Have to manually hand-write objects into memory (var bot2 = new bot("etc", "etc", 1000);)

Some weird Memory-leak that even after the object has been deleted and all processes stopped still takes up memory? Have to restart OS. I think is is a problem with the Library itself unfortunately.

Sometimes the API returns no hours. This doesn't really cause an issue just means the bot won't stop boosting until the NodeJS process is closed.

# Gif (70+ Accounts, Running on Ubuntu 20.04 Server, Uses 100-250mb of RAM)
<img src="https://i.imgur.com/S0EhQm5.gif">