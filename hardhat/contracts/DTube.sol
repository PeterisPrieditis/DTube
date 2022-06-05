// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @title Decentralized Youtube
/// @notice Contract is like a beacon. It just emits events and all events are picked up by the Graph. 
/// UI is reading from the Graph to know which video's belong to a channel
contract DTube is ERC721, ERC721URIStorage, Ownable {
    event Comment(uint256 indexed tokenId, address indexed author, uint256 indexed timestamp, uint256 amount, string comment);

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Video", "VID") {}

    /// @notice Mints NFT's 
    /// @dev Emits first Transfer event for the specific NFT
    /// @param to NFT new owner
    /// @param to uri link to video
    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    /// @notice Sends NFT to burn address
    /// @dev required by Solidity to do a override
    /// @param tokenId NFT id
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    /// @notice Returns video link
    /// @dev required by Solidity to do a override
    /// @param tokenId NFT id
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function comment(uint256 tokenId, string memory _comment) external payable {
        require(_exists(tokenId), "Video does not exist");
        emit Comment(tokenId, msg.sender, block.timestamp, msg.value, _comment);

        // on ether stuck what should we do?
        (bool success, bytes memory data)= ownerOf(tokenId).call{value: msg.value}("");
    }
}