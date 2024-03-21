// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract CustomToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 10000000 * 10 ** 18);
    }
}

contract CustomDex {
    string[] public tokens = [
        'Tether USD',
        'BNB',
        'USD Coin',
        'stETH',
        'TRON',
        'Matic Token',
        'SHIBA INU',
        'Uniswap'
    ];
    mapping(string => ERC20) public tokenInstanceMap;

    uint256 private constant ethValue = 1 ether; // Define the value of 1 ether in wei

    struct History {
        uint256 historyId;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }

    uint256 public _historyIndex;
    mapping(uint256 => History) private historys;

    constructor() {
        for (uint i = 0; i < tokens.length; i++) {
            CustomToken token = new CustomToken(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
        }
    }

    function getBalance(
        string memory tokenName,
        address _address
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].balanceOf(_address);
    }

    function getTotalSupply(
        string memory tokenName
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].totalSupply();
    }

    function getName(
        string memory tokenName
    ) public view returns (string memory) {
        return tokenInstanceMap[tokenName].name();
    }

    function getTokenAddress(
        string memory tokenName
    ) public view returns (address) {
        return address(tokenInstanceMap[tokenName]);
    }

    function getEtherBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function _transactionHistory(
        string memory tokenName,
        string memory etherToken,
        uint256 inputValue,
        uint256 outputValue
    ) internal {
        _historyIndex++;
        uint256 _historyId = _historyIndex;
        History storage history = historys[_historyId];

        history.historyId = _historyId;
        history.userAddress = msg.sender;
        history.tokenA = tokenName;
        history.tokenB = etherToken;
        history.inputValue = inputValue;
        history.outputValue = outputValue;
    }

    function swapEthToToken(
        string memory tokenName
    ) public payable returns (uint256) {
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / ethValue) * 10 ** 18;
        require(outputValue > 0, 'Insufficient ETH provided');

        ERC20 token = tokenInstanceMap[tokenName];
        require(token.transfer(msg.sender, outputValue), 'Transfer failed');

        string memory etherToken = 'Ether';
        _transactionHistory(tokenName, etherToken, inputValue, outputValue);
        return outputValue;
    }

    function swapTokenToEth(
        string memory tokenName,
        uint256 _amount
    ) public returns (uint256) {
        ERC20 token = tokenInstanceMap[tokenName];
        uint256 exactAmount = _amount / 10 ** token.decimals();
        uint256 ethToBeTransferred = exactAmount * ethValue;
        require(
            address(this).balance >= ethToBeTransferred,
            'Dex is running low on balance'
        );
        payable(msg.sender).transfer(ethToBeTransferred);
        require(
            token.transferFrom(msg.sender, address(this), _amount),
            'Transfer failed'
        );

        string memory etherToken = 'Ether';
        _transactionHistory(
            tokenName,
            etherToken,
            exactAmount,
            ethToBeTransferred
        );
        return ethToBeTransferred;
    }

    function swapTokenToToken(
        string memory srcTokenName,
        string memory destTokenName,
        uint256 _amount
    ) public {
        ERC20 srcToken = tokenInstanceMap[srcTokenName];
        ERC20 destToken = tokenInstanceMap[destTokenName];
        require(
            srcToken.transferFrom(msg.sender, address(this), _amount),
            'Transfer failed'
        );
        require(destToken.transfer(msg.sender, _amount), 'Transfer failed');
        _transactionHistory(srcTokenName, destTokenName, _amount, _amount);
    }

    function getAllHistory() public view returns (History[] memory) {
        uint256 itemCount = _historyIndex;
        History[] memory items = new History[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            items[i] = historys[currentId];
        }
        return items;
    }
}
