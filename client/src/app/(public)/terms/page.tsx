'use client';

export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: October 2023</p>
          <p>
            Please read these Terms of Service ("Terms") carefully before using the TrustLancer platform.
          </p>
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our platform, you agree to be bound by these Terms. If you disagree 
            with any part of the terms, you may not access the service.
          </p>
          
          <h2>2. Decentralized Nature</h2>
          <p>
            TrustLancer is a decentralized interface providing access to the Solana blockchain. 
            We do not control the blockchain, your funds, or your interactions. You are solely 
            responsible for your keys and transactions.
          </p>
          
          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for:
          </p>
          <ul>
            <li>Safeguarding your private keys</li>
            <li>Ensuring legal compliance in your jurisdiction</li>
            <li>Verifying project details before committing funds</li>
          </ul>
          
          {/* More terms */}
        </div>
      </div>
    </div>
  );
}
