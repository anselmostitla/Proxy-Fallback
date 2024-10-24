// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductProxy {
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    fallback() external {
        // Delegate call to the implementation contract
        (bool success, bytes memory data) = implementation.delegatecall(msg.data);
        require(success, "Delegate call failed");
        assembly {
            return(add(data, 0x20), mload(data))
        }
    }

    function updateImplementation(address _newImplementation) public {
        implementation = _newImplementation;
    }
}