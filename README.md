# phrase.shop #

[**phrase.shop**](https://phrase.shop) is a web app to generate secure yet memorable passphrases.

![](./screenshot-iPhoneX.png)

## Purpose and inspiration

* [You Should Probably Change Your Password](https://www.youtube.com/watch?v=aHaBH4LqGsI)
* [Diceware](https://en.wikipedia.org/wiki/Diceware)
* [How long should my passphrase be?](http://world.std.com/~reinhold/dicewarefaq.html#howlong)
* [DiceKeys](https://dicekeys.com/)

## Features

While there are several passphrase generators online, this one has the following strengths:

* You can make the phrase as complex as you like. You are not limited to five rolls of six-sided dice.
* It uses _Voice Of America's_ [*Learning English*](https://en.wikipedia.org/wiki/Learning_English_(version_of_English))
  vocabulary of core English words.
* It uses multiple word banks, such as colors, US state abbreviations and musical notes, to help your memory.
* If you don’t want to use your computer’s random number generator, you can roll physical
  dice and submit the rolls to the app to collect entropy.
  There’s a progress bar showing how much entropy you’ve collected, and you can generate the
  passphrase only once you’ve rolled enough times.
  What this feature lacks in practicality it makes up for in educational and entertainment value!
* The app is open-source, and contributions are welcome.
* The app's only motivations is making you good passphrases. Its only customer is you.
  There are no ads and no data collection.

## Design principles

* Strong passphrases are for everyone, including those who don't care about or understand entropy, and including those with limited English.
* App is engaging and educational for those who understand, or want to learn, about entropy.
* Shop theme: you are buying passphrase components, paying for them with entropy.

## Dice

While any modern computer's randomness is just fine, using physical dice is more fun.

I like [hexadecimal (16-sided) dice from Gamescience](https://www.gamescience.com/D16--16-Sided-Dice_c_20.html).
I have three of these, bought specifically for this project.
I roll all three at a time, for 12 bits of entropy per roll.
This makes generating even the longest passphrase a breeze.

Gamescience also sells a [100-sided monster of a dice](https://www.gamescience.com/D100--100-Sided-Dice_c_25.html),
which would yield a massive 6 bits of entropy per roll.

## Developing

![](https://github.com/philipmw/phrase.shop/workflows/Continuous%20Integration/badge.svg)

I welcome your contributions.
In particular, I'm very supportive of newbie developers.

This app is written in [TypeScript](https://typescriptlang.org/)
and uses [Preact](https://preactjs.com/) as the web framework.
For unit tests, it uses [Jest](https://jestjs.io/)
and [Enzyme](https://enzymejs.github.io/enzyme/).

If you are new to developing web applications, I recommend the book
[_Test-Driven React_](https://pragprog.com/titles/tbreact/test-driven-react/),
which will introduce you to React, Jest, Enzyme, and [Wallaby.js](https://wallabyjs.com/).

The workflow I propose:

1. Decide what to work on.
   There are a number of open issues that you're welcome to resolve, or you can scratch your own itch.
   Before starting development, please open an issue for your desired change so we can discuss it and align
   on _whether_ it needs to be addressed and _how_ to address it.
   If you don't lead with an issue, you risk wasting your time developing something I'll disagree with and won't accept.

2. Work on your changes.
   See next sections for how to run this project locally.

3. Run `npm run build` before submitting a pull request and resolve any linter and unit test errors.

4. Submit a pull request on GitHub.
   Check that your change passes the Continuous Integration workflow.
   I'll review your contribution, and we'll either have a discussion, or I'll accept your change as-is.

5. You'll see your contribution on https://phrase.shop!

### Running phrase.shop locally

Install [`npm`](https://www.npmjs.com/) using whatever
means is most convenient for you, such as [Homebrew](https://brew.sh/) on macOS.

Initialize:

    $ npm install
 
This creates a `node_modules` directory.

Run unit tests:

    $ npm test

Run the app locally:

    $ npm start

This supports hot-reloading, so feel free to edit Javascript and see your changes
in the browser immediately.

Run linter and generate final artifacts:

    $ npm run build

This produces the app bundle Javascript that's served to real customers.
If any part of this process fails, please fix any issues before submitting a pull request.

### React/TS template

The React/TS template for this web app came from https://github.com/philipmw/spa-template.

### favicon

I made the favicon with Inkscape 1.0, with all the creativity that I could muster.
