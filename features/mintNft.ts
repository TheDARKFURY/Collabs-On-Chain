import {
	Metaplex,
	keypairIdentity,
	mockStorage,
	useMetaplexFileFromBrowser,
	walletAdapterIdentity,
  } from "@metaplex-foundation/js";
  import {
	Connection,
	clusterApiUrl,
	Keypair,
	PublicKey,
	LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
  
  async function airdropSol(wallet, connection) {
	const airdropSignature = await connection.requestAirdrop(
	  wallet.publicKey,
	  LAMPORTS_PER_SOL
	);
	const rx = await connection.confirmTransaction(airdropSignature);
	console.log("sols airdropped", rx);
  }
  
  async function uploadImage(dataSrc) {
	let ipfs: IPFSHTTPClient | undefined;
	try {
	  ipfs = create({
	  	url: 'https://ipfs.infura.io:5001/api/v0/964e43a1d4b789850dc353736a74ffc3',
	  })
	  const projectId = "ENTER-PROJECT-ID FROM INFURA";
	  const projectSecret = "ENTER SECRET KEY";
	  const auth =
		"Basic " +
		Buffer.from(projectId + ":" + projectSecret).toString("base64");
  
	  var client = await create({
		host: "ipfs.infura.io",
		port: 5001,
		protocol: "https",
		apiPath: "/api/v0",
		headers: {
		  authorization: auth,
		},
	  });
	  console.log("==>", client);
	} catch (error) {
	  console.error("IPFS error ", error);
	  ipfs = undefined;
	}
  
	const result = await client.add(
	  Buffer.from(dataSrc.replace("data:image/png;base64,", ""), "base64")
	);
	console.log("res ==> ", result);
  
	const cid = result.cid;
	const path = result.path;
	const url = `https://collab-nft.infura-ipfs.io/ipfs/${cid}`;
  
	return url;
  }
  
  async function collabNftMetadata(name, description, ipfsImage, metaplex) {
	try {
	  const uri = await metaplex.nfts().uploadMetadata({
		name: name,
		description: description,
		image: ipfsImage,
	  });
  
	  console.log("metadata uploaded", uri);
	  return uri;
	} catch (error) {
	  console.error("Metadata upload error ", error);
	}
  }
  
  async function creteNfts(metadata, title, metaplex) {
	const { nft } = await metaplex.nfts().create({
	  uri: metadata,
	  name: title,
	  sellerFeeBasisPoints: 0,
	});
  
	return { nft };
  }
  
  export {
	uploadImage,
	collabNftMetadata,
	creteNfts,
	airdropSol,
  };