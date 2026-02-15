'use client';

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: October 2023</p>
          
          <h2>1. Data Collection</h2>
          <p>
            As a decentralized platform, we collect minimal personal data. Your interactions 
            with the blockchain are public by nature.
          </p>
          
          <h2>2. On-Chain Data</h2>
          <p>
            Transactions made on TrustLancer are recorded on the Solana blockchain. This data is 
            public and immutable. We cannot modify or delete this data.
          </p>
          
          <h2>3. Off-Chain Data</h2>
          <p>
            If you choose to provide a profile picture or bio, this data is stored on decentralized 
            storage (IPFS) or our caching servers. You retain control over this content.
          </p>
          
          <h2>4. Cookies & Analytics</h2>
          <p>
            We use privacy-preserving analytics to understand platform usage. We do not track 
            users across the web.
          </p>
        </div>
      </div>
    </div>
  );
}
