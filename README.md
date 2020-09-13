# phrase.shop #

[**phrase.shop**](https://phrase.shop) is a small web app to generate secure yet memorable passphrases.

![](./screenshot-iPhoneX.png)

## Purpose

* [You Should Probably Change Your Password](https://www.youtube.com/watch?v=aHaBH4LqGsI)
* [How long should my passphrase be?](http://world.std.com/~reinhold/dicewarefaq.html#howlong)

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

### Prerequisites

Install [`npm`](https://www.npmjs.com/) using whatever
means is most convenient for you, such as [Homebrew](https://brew.sh/) on macOS.

### Initialization

    $ npm install
 
This creates a `node_modules` directory.

### Unit-test

    $ npm test

### View locally

    $ npm start

And your browser will magically open to the web app.
This supports hot-reloading, so feel free to edit Javascript and see your changes
in the browser immediately.

The other way that works is to build the app explicitly (`npm run build`), then
simply open _index.html_ from the local filesystem in the browser.

### Publish to the Internet

Build:

    $ npm run build

This will create `docs/app.bundle.js`.

Then upload the contents of `docs/` to your web host.

### React/TS template

The React/TS template for this web app came from https://github.com/philipmw/spa-template.

### favicon

I made the favicon with Inkscape 1.0, with all the creativity that I could muster.
