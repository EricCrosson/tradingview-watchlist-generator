# tradingview-watchlist-generator

> Generate TradingView-importable watchlists of all assets offered on
> supported cryptocurrency exchanges

## Installation

```
npm install --global tradingview-watchlist-generator
```

## Usage

```
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
```

Watchlists are generated in the `/output` directory.
