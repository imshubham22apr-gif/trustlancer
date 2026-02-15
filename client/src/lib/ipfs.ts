export async function uploadToIPFS(content: string | File): Promise<string> {
  // Mock implementation for now
  if (content instanceof File) {
    console.log("Uploading file to IPFS:", content.name);
    return "QmFileHash" + Math.random().toString(36).substring(7);
  }
  console.log("Uploading text to IPFS:", content);
  return "QmTextHash" + Math.random().toString(36).substring(7);
}
