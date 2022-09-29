require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note magic million guess arm army genuine'; 
let testAccounts = [
"0x0f60c43cdcbd570807c567ab1e2be674f74753cc4d6140cc5f63febd9c6c1e6b",
"0x68b8ffa493629198d97949d9111adcdeaa2d771aab62224e21e34d5fd19b4a39",
"0x11b596dd52de8d448bf51c5934af4932885c95c1f1df2055c4887a2dedf8055c",
"0x15f06773aabc4d9e93265d4f0c106b6a1d8d626fdb66de83e4bf4d678beadf41",
"0xfe645e56bcb32a49d1786a1a2065ce0c7bdd646082b7521cb4e871484c0bd13e",
"0xb5188fb83362dc2cd425e08e926f810091f27796bef45d7fb5fa8e2ab5a0c0d0",
"0x6cb5198e9b4991909860dcd99d33f3bd5d5f73a2662235b9defb75cef9ab8187",
"0xe32597e2f74508130ee0bee88205385975f27f7ef017259cc4c8d89b03d1a2b2",
"0x7b3afb7d7368abdbab368ab3c9bf6f9bdb7886cdc365083358812c39f68a1c26",
"0x1b6cb9f2d26ef4e8490efdc0c7e06f1c9876f03c19fca85aa7458c1e9f647eb0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

