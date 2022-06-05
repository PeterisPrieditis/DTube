import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ipfs, json } from '@graphprotocol/graph-ts'

import { log } from '@graphprotocol/graph-ts'

import {
  MyNFT,
  Transfer,
  Approval,
  ApprovalForAll,
  OwnershipTransferred
} from "../generated/MyNFT/MyNFT"
import { Video, User } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  log.debug('Block number: {}, block hash: {}, transaction hash: {}', [
    event.block.number.toString(), // "47596000"
    event.block.hash.toHexString(), // "0x..."
    event.transaction.hash.toHexString(), // "0x..."
    //event.transaction.hash.toHexString(),
  ])

  let entity = new Video(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.creator = event.params.from.toString()
  //entity.to = event.params.to.toString()
  entity.videoID = event.params.tokenId
  entity.save()
  /*let token = Video.load(event.params.tokenId.toString());
  if (!token) {
    token = new Video(event.params.tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.videoID = event.params.tokenId;
  
    let tokenContract = MyNFT.bind(event.address);
    const ipfsUrl = tokenContract.tokenURI(event.params.tokenId);
    token.contentURI = ipfsUrl;
    if(!ipfsUrl) {
      return;
    }
    const rawData = ipfs.cat(ipfsUrl);
    if(!rawData) {
      return;
    }
    const jsonData = json.fromBytes(rawData as Bytes).toObject()
    
    const name = jsonData.get('name');
    if (name) {
      token.name = name.toString();
    }
    const vidUrl = jsonData.get('animation_url');
    if (vidUrl) {
      token.videoIPFSPath = vidUrl.toString();
    }
    
    // "animation_url": "ipfs://QmcBccwHQpELQNaqaKZRgCTtwEsdbSFoVg3yPAxKWLU4Vb/video.mp4",
    // "description": "Livepeer video from asset \"video.mp4\"",
    // "image": "ipfs://bafkreidmlgpjoxgvefhid2xjyqjnpmjjmq47yyrcm6ifvoovclty7sm4wm",
    // "name": "video.mp4",
    // "properties": {
    //   "mymetadata": "works!",
    //   "video": "ipfs://QmcBccwHQpELQNaqaKZRgCTtwEsdbSFoVg3yPAxKWLU4Vb/video.mp4"
    // }
    

    
    token.createdAtTimestamp = event.block.timestamp;
  }
  token.owner = event.params.to.toHexString();
  token.save();
    
  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }*/
}


export function handleTokenURIUpdated(): void {
  return;
  // let token = Token.load(event.params.tokenId.toString());
  // if (!token) return
  // token.tokenIPFSPath = event.params.tokenIPFSPath;
  // token.save();
}

export function handleApproval(event: Approval): void {
  return;
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = Video.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new Video(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.mintNFT(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
