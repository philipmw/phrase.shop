# phrase.shop #

[**phrase.shop**](https://phrase.shop) is a small web app to generate secure yet memorable passphrases.

Some references:

* [How long should my passphrase be?](http://world.std.com/~reinhold/dicewarefaq.html#howlong)
* [Fair coin (Wikipedia)](https://en.wikipedia.org/wiki/Fair_coin)
* [How To Turn Loaded Dice into Fair Coins](http://markus-jakobsson.com/papers/jakobsson-ieeeit00.pdf)
* [Gist: atoponce/bias.py](https://gist.github.com/atoponce/c594f6463cdf067ea8cabd899939c24f)

## Prerequisites

Install [`npm`](https://www.npmjs.com/) using whatever
means is most convenient for you, such as [Homebrew](https://brew.sh/) on macOS.

## Initialization

    $ npm install
 
This creates a `node_modules` directory.

## Unit-test

    $ npm test

## View locally

    $ npm start

And your browser will magically open to the web app.
This supports hot-reloading, so feel free to edit Javascript and see your changes
in the browser immediately.

The other way that works is to build the app explicitly (`npm run build`), then
simply open _index.html_ from the local filesystem in the browser.

## Publish to the Internet

Build:

    $ npm run build

This will create `docs/app.bundle.js`.

Then upload the contents of `docs/` to your web host.

# React/TS template #

The React/TS template for this web app came from https://github.com/philipmw/spa-template.