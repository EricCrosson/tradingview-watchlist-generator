const fs = require('fs')

const Binance = require('binance-api-node').default
const binance = Binance()

// TODO: use logger with error messages

// TODO: allow generation of non-exchange pairs (e.g. replace BTC with USD)
// TODO: allow generation of non-traded pairs (e.g. WAN/ICX)

// TODO: remove defunct pairs (BINANCE:VEN*)

const docopt = require('docopt').docopt
const docstring = `
Usage:
  watchlist <exchange> [-b=<basepair>] [--inverse]
  watchlist -h | --help
  watchlist --version

Options:
  -h --help        Show this screen.
  --version        Show version.
  -b=<basepair>    Only include tradepairs traded against basepair in watchlist [default: BTC].
  -i --inverse     Invert every tradepair in watchlist.

Supported exchanges:
  - binance
`


async function main() {

    let parsed = docopt(docstring)
    const exchange = parsed['<exchange>'].toLowerCase()
    const basepair = parsed['-b'].toUpperCase()
    const inverted = parsed['--inverse']

    // todo: use std-debug
    console.log(parsed)

    let tickers = ['dummyBTC', 'tickersETH', 'deadBNB', 'beefBTC']

    switch(exchange) {

    case 'binance':
        tickers = Object.keys(await binance.allBookTickers())
        break

    default:
        //todo: use stderr
        console.log(`Unrecognized exchange: ${parsed['<exchange>']}`)
        break
    }

    //todo: use std-debug
    // console.log(`Tickers: ${tickers}`)

    let filename = `\
output/scan-\
${inverted ? 'inverse-' : ''}\
${exchange}-\
${basepair.toLowerCase()}-\
pairs.txt`


    //todo: use std-debug
    console.log(`Writing to filename: ${filename}`)

    let watchlist = tickers
        .filter(elt => elt.endsWith(basepair))
        .reduce((acc, elt) => acc + `\
${inverted ? '0-' : ''}\
${exchange.toUpperCase()}:\
${elt.toUpperCase()},`, '')

    //todo: use std-debug
    console.log(watchlist)

    fs.writeFileSync(filename, watchlist)
}

main()
