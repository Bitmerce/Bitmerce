'use strict';
app.factory("Blockchaininfo", ["$resource", "$window", "$http", function($resource, $window, $http) {

  var baseUrl = "https://blockchain.info";

  return {
        resource : $resource(baseUrl + "/", {}, {
            multiAddr: {
                method: "GET",
                url: baseUrl + '/multiaddr?active=:addresses'+"&cors=true",
                params: {
                    addresses: "@addresses"
                }
            },
            getBlockCount: {
                method: "GET",
                isArray: false,
                url: baseUrl + "/latestblock"+"&cors=true",
            },
            getTx: {
                method: "GET",
                isArray: false,
                url: baseUrl + "/rawtx/:txHash"+"&cors=true",
                params: {
                    txHash: "@txHash"
                }
            },
            getUnspent: {
                method: "GET",
                isArray: false,
                url: baseUrl + "unspent?active=:addresses"+"&cors=true",
                params:{ 
                  addresses: "@addresses"
                }
            },
            pushTx: {
                method: "POST",
                isArray: false,
                url: baseUrl + "pushtx",
                params: {
                    post_data: "@post_data"
                }
            }

        })
    }
}])
