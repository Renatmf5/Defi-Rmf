// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Script, console2} from "forge-std/src/Script.sol";
import {USDT} from "../src/USDT.sol";

contract Local is Script {
    USDT usdt;

    function setUp() public {}

    function run() public {
        vm.startBroadcast(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);

        usdt = new USDT('Dolar token','USDT');
        console2.log("usdt address: ", address(usdt));

        vm.stopBroadcast();
    }
}
