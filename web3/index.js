var Web3 = require("web3");
var contract = require("truffle-contract");

var abi = require('../build/contracts/Adoption.json').abi;

var MetaCoin = contract({abi});

var provider = new Web3.providers.HttpProvider("http://localhost:7545/");

MetaCoin.setProvider(provider);

var account_one = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
// 合约地址
var contract_address = require('../build/contracts/Adoption.json').networks['5777'].address;

var instance = null;

MetaCoin.at(contract_address).then(function(data){
    instance = data;
    return instance.getAdopters.call();
})
.then(function(info){
    // 不需要付费的接口 都需要call ; 接口都需要 {from:''}
    return instance.adopt.call(1,{from:account_one});
})
.then(petId => {
    console.log('adpoted petId: ',petId);
})
.catch(function(err){
    console.log('hahs',err);
});
