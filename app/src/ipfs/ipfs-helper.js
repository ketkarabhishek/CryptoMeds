import ipfs from "./ipfs-initialize";

const IPFS_URL = "https://ipfs.io/ipfs/";
const filehash = "QmVaWGaazFtYrVcYgCDfmPrKqbUnB2VJXmUjcAsHynw9bM";

export function addToIpfs(files) {
  return new Promise(async (resolve, reject) => {
    const res = [];
    files.forEach(async (file) => {
      const buffer = await convertToBuffer(file);
      // console.log(buffer);
      for await (const result of ipfs.add(buffer)) {
        // console.log("Hash: " + JSON.stringify(result));
        res.push(result.path);
      }
    });
    resolve(res);
  });
}

export function addStringToIpfs(str) {
  return new Promise(async (resolve, reject) => {
    console.log("addStringToIpfs: " + str);
    for await (const result of ipfs.add(str)) {
      // console.log("Hash: " + JSON.stringify(result));
      resolve(result.path);
    }
  });
}

function convertToBuffer(file) {
  return new Promise((resolve, reject) => {
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = async () => {
      //file is converted to a buffer for upload to IPFS
      const buffer = await Buffer.from(reader.result);
      resolve(buffer);
    };
  });
}

export function getFromIpfs(cid) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(IPFS_URL + cid);
      const res = await response.headers.get("Content-Type");
      resolve(res);
    } catch (error) {
      console.error(error.body);
    }
  });
}
