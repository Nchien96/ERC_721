//SPDX-License-Identifier: None
pragma solidity ^0.8.2;

import "./ERC721.sol";

contract Nft is ERC721 {
  string public name;
  string public symbol;
  mapping(uint256  => string) private _tokenURIs;

  uint public tokenCount;

  constructor (string memory _name, string memory _symbol){
    name = _name;
    name = _symbol;
  }
// tokenURI : trả về đường dẫn URI chỗ mình lưu metadata của NFT, để fon-end lấy đc dữ liệu từ metadata hiện thị lên
  function tokenURI(uint tokenID) public view returns(string memory) {
    require(_owners[tokenID] != address(0), "token ID does not exist");
    return _tokenURIs[tokenID];
  }

  function mint(string memory _tokenURI ) public{
    tokenCount +=1; // tokenID
    _balances[msg.sender] +=1;
    _owners[tokenCount] = msg.sender;
    _tokenURIs[tokenCount] = _tokenURI;
    emit Transfer(address(0), msg.sender, tokenCount);
    
  }

  function supportInterface(bytes4 interfaceID)
        public
        pure
        override
        returns (bool)
    {
        return interfaceID == 0x80ac58cd || interfaceID == 0x5b5e139f;
    }
  
}