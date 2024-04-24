// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import {Chainlink, ChainlinkClient} from '@chainlink/contracts/src/v0.8/ChainlinkClient.sol';
import {ConfirmedOwner} from '@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol';
import {LinkTokenInterface} from '@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol';

contract ExternalApiCaller is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 private fee;
    bytes32 private jobId;

    // string public response;
    event debuggingApiLog(string message);

    // event responseEvent(bytes32 indexed requestId, string response);

    // ----

    constructor() ConfirmedOwner(msg.sender) {
        // Initialize Chainlink:
        _setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        _setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD);
        jobId = '7d80a6386ef543a3abb52817f6707e3b';
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    // ----

    function requestTokenInrPrice(
        string memory tokenId,
        function(string memory) external callback
    ) public {
        Chainlink.Request memory req = _buildChainlinkRequest(
            jobId,
            address(this),
            callback.selector // CHECK THIS LINE
        );

        string memory url = string.concat(
            'https://api.coingecko.com/api/v3/simple/price?ids=',
            tokenId,
            '&vs_currencies=inr'
        );

        req._add('get', url);
        req._add('path', string.concat(tokenId, ',inr'));

        _sendChainlinkRequest(req, fee);
    }

    // function fulfill(
    //     bytes32 _requestId,
    //     string memory _id
    // ) public recordChainlinkFulfillment(_requestId) {
    //     emit responseEvent(_requestId, response);
    //     response = _id;
    // }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            'Unable to transfer'
        );
    }
}
