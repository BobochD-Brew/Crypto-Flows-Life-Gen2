// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { id } = req.query
  let id2 = id;
  res.status(200).json({
    "name": "Flow Life #"+id2+"",
    "description": "Flow Life #"+id2+" \n by @bobochdbrew",
    "animation_url": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/index.html?id="+id2+"",
    "image": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/0.png",
    "creator": "Boboch D. Brew",
    })
}
/*
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
contract FlowsLifesGen2 is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    string baseURI = "https://https://crypto-flows-life-gen2.vercel.app/api/jsons/";
    uint256 counter = 0;
    mapping(uint256 => string) public convert;
    mapping(uint256 => uint256) public breedCount;
    constructor() ERC721("Flows Life", "CFL1") {}

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory baseuri) public onlyOwner{
        baseURI = baseuri;
    }

    function breed(uint a,uint b,uint c,uint d) public{
        require(ownerOf(a) == msg.sender, "You don't own this nft")
        require(ownerOf(b) == msg.sender, "You don't own this nft")
        require(ownerOf(c) == msg.sender, "You don't own this nft")
        require(ownerOf(d) == msg.sender, "You don't own this nft")
        require(breedCount[a] == 0, "Can't breed")
        require(breedCount[b] == 0, "Can't breed")
        require(breedCount[c] == 0, "Can't breed")
        require(breedCount[d] == 0, "Can't breed")
        convert[counter] = string(abi.encodePacked(convert[a], convert[b],convert[c],convert[d]))
    }

    function testMint(address contractA, uint tokenId) public onlyOwner {
    
            _safeMint(contractA, tokenId);
        
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        _requireMinted(tokenId);
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, Strings.toString(tokenId))) : "";
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
*/