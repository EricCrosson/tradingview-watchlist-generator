const Binance = require('binance-api-node').default
const _ = require('lodash')
const fs = require('fs')

const client = Binance()


client.allBookTickers().then((res, err) => {
    fs.writeFileSync('output/scan-binance-btc-pairs.txt',
                     matches = _.reduce(
                         _.filter(res, (obj) => {return obj.symbol.endsWith('BTC')}),
                         (acc, obj) => {return acc + 'BINANCE:' + obj.symbol + ','}, ''))

    fs.writeFileSync('output/scan-binance-usd-pairs.txt',
                     matches = _.reduce(
                         _.filter(res, (obj) => {return obj.symbol.endsWith('BTC')}),
                         (acc, obj) => {return acc + 'BINANCE:' + obj.symbol.replace('BTC', 'USD') + ','}, ''))

    fs.writeFileSync('output/scan-binance-eth-pairs.txt',
                     matches = _.reduce(
                         _.filter(res, (obj) => {return obj.symbol.endsWith('ETH')}),
                         (acc, obj) => {return acc + 'BINANCE:' + obj.symbol + ','}, ''))

    fs.writeFileSync('output/scan-binance-bnb-pairs.txt',
                     matches = _.reduce(
                         _.filter(res, (obj) => {return obj.symbol.endsWith('BNB')}),
                         (acc, obj) => {return acc + 'BINANCE:' + obj.symbol + ','}, ''))

})
