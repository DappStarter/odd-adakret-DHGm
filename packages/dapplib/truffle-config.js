require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area security ecology remember sister purse coral light army giggle'; 
let testAccounts = [
"0xa3c484b21afe3e4253a41052e3986d67fca614f49ab3e3e13ade5f325712a951",
"0x039371ef54439f43dc572eee131714a0ab87765c2d9bb5b22b5acf4162f6ede7",
"0x6bec48d5e9994c98d112b2257af83d9313dd10d24c31a9d5981b3bf187ed5f6d",
"0xf883652f89808134c1bf3670fd0fca0517bd49ac197b03f2b4b6075f9447df44",
"0x0a1b050be33fae6c3025f794168021db22f95d78ee988fe05f50948d3cb54963",
"0xde0ba244fb57a41fa4d4a0df393c68e16d040bef6fee496efb31d817ae86fba9",
"0x53bcbd95c9f20c905a3503b4c684f21c2f3d17d78bfe8d36e370414372f07a66",
"0x855679adebd0b488825f63cb38f98af3524dc37ad1532b39d0b14857fdce1b00",
"0xee92be4585f5b8e2375608fb23a0b3f0b3733072d6b5e72fe43721194b9cedbb",
"0x6f7affb535d8a7198c077ea5acaa2766bf827fe55f952185f338e0836911d8d6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

