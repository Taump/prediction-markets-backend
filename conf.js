/*jslint node: true */
"use strict";

exports.bServeAsHub = false;
exports.bLight = true;
exports.bNoPassphrase = true;
exports.webPort = null;

exports.webserverPort = 3001;
exports.testnet = process.env.testnet == "1";
exports.factory_aa = "ZPOO7GQ6X4L7STBRSI4PVLEYEAYQ6CZE";
exports.hub = process.env.testnet ? 'obyte.org/bb-test' : 'obyte.org/bb';
exports.forward_aa = "E4BAASPOCW6WHXSUOY2XEKXKA42RRD5I";
exports.token_registry_aa_address = process.env.testnet ? "O6H6ZIFI57X3PLTYHOCVYPP5A553CYFQ" : "O6H6ZIFI57X3PLTYHOCVYPP5A553CYFQ";

exports.supported_reserve_assets = process.env.testnet == "1" ? {
  base: {
    symbol: "GBYTE",
    decimals: 9
  },
  'lwvZjepKoGSiMIDalxi2GB8Pd+nK86Qsnsn1Ng7TAJE=': {
    symbol: "USDC",
    decimals: 4
  }
} : {
  base: {
    symbol: "GBYTE",
    decimals: 9
  },
  'S/oCESzEO8G2hvQuI6HsyPr0foLfKwzs+GU73nO9H40=': {
    symbol: "USDC",
    decimals: 4
  }
};

exports.footballDataApiKey = process.env.footballDataApiKey;
exports.sportOracleAddress = process.env.testnet === '1' ? 'MDKKPO375Q5M3GDET2X4H4ZNSO37OIIZ' : 'TKT4UESIKTTRALRRLWS4SENSTJX6ODCW';
exports.currencyOracleAddress = 'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N';
exports.limitMarketsOnPage = 5;

console.error('finished server conf');