# simple-command-in-chat

[![Maintainability](https://api.codeclimate.com/v1/badges/e71af05a8567b367e3b5/maintainability)](https://codeclimate.com/github/ericN93/module/maintainability)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ericN93/module/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/ericN93/module/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/ericN93/module/badges/build.png?b=master)](https://scrutinizer-ci.com/g/ericN93/module/build-status/master)
[![codecov](https://codecov.io/gh/ericN93/module/branch/master/graph/badge.svg)](https://codecov.io/gh/ericN93/module)
[![Build Status](https://travis-ci.org/ericN93/module.svg?branch=master)](https://travis-ci.org/ericN93/module)

#### Simple command in chatt

## Install
```
npm install simple-command-in-chat
```

## Features

- A extremly easy and light command for a chat etc.
- User enter '/catchPhrase', '/joke','/asci' and '/quote' etc and and random string will be returned from each command.
- Under development, will have more commands/values in future.

## Requirements
- None

## Usage
- Require the module.
```
const Module = require('simple-command-in-chat');
```
- Take your message in your websocket etc
message = command.getCheckCommand(message)

- The message will be replaced if user has send one of the commands.
