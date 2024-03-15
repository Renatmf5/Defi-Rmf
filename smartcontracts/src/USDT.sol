// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.23;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20 {

    mapping(address => uint256) private _balances;
    mapping(address => bool) controllers;

    uint256 private _totalSupply;
    uint256 private MAXSUP;
    uint256 constant MAXIMUMSUPPLY = 1_000_000 * 10 ** 18;
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
        _mint(msg.sender, 1_000_000 * 10 ** 18); //o ERC20 tem 18 casas decimais
    }
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function burnFrom(address account, uint256 amount) public {
        //queimar os tokens
        if (controllers[msg.sender]) {
            //se for controlador ele pode queimar
            _burn(account, amount);
        }
    }

    function addController(address controller) external {
        controllers[controller] = true;
        ///função de adicionar novos controladores do token
    }

    function removeController(address controller) external {
        controllers[controller] = false; //remover controlador
    }

    function totalSupply() public view override returns (uint256) {
        //override da função delimitada no ERC20
        return _totalSupply; //retorna o total emitido
    }

    function maxSupply() public pure returns (uint256) {
        return MAXIMUMSUPPLY; //Retorna o máximo que pode ser emitido
    }
}
