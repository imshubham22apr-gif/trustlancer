# TrustLancer Client

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)

Modern, responsive frontend for TrustLancer decentralized freelance marketplace.

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Deployment](#deployment)

---

**[🔗 Live Demo](https://TrustLancer-hlde7obye-raushansinghrajpoot687-7047s-projects.vercel.app/)**

> **Note:** This is a UI demo only. The demo may be temporarily unavailable at times.

</div>

---

## Features

- **Multi-Wallet Support** - Phantom, Solflare, and Backpack integration
- **Client Dashboard** - Project creation, freelancer browsing, milestone tracking
- **Freelancer Dashboard** - Job browsing, workspace management, earnings tracking
- **Social Feed** - Community posts and interactions
- **Governance** - Dispute voting and resolution
- **Dark Mode** - System-aware theme switching
- **Responsive Design** - Mobile-first approach

---

## Tech Stack

### Framework

- **Next.js 16** - App Router with server components
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Heroicons & Lucide** - Icon libraries
- **next-themes** - Dark mode support

### Blockchain

- **@solana/web3.js** - Solana JavaScript SDK
- **@solana/wallet-adapter** - Wallet integration
- **@coral-xyz/anchor** - Anchor client SDK

### Utilities

- **axios** - HTTP client
- **react-hot-toast** - Toast notifications
- **clsx & tailwind-merge** - Conditional styling

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

Access at `http://localhost:3000`

### Environment Variables

Create a `.env.local` file in the `client/` directory with the following variables:

```bash
# Solana Network Configuration
# Public RPC endpoint for client-side blockchain calls
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# Solana Program ID
# Must match the deployed program ID from 'anchor deploy'
# Update this with your actual program ID after deployment
NEXT_PUBLIC_PROGRAM_ID=H4R1nUBp4Gfuw9uPZwfrKyTVgP3TrQ2RzMD1puWjqYsY

# Backend API URL
# URL where your backend server is running
NEXT_PUBLIC_API_URL=http://localhost:3001

# Network Type
# Options: devnet | testnet | mainnet-beta
NEXT_PUBLIC_NETWORK=devnet
```

#### Important Notes

- **NEXT*PUBLIC* Prefix**: All environment variables that need to be accessible in the browser must have the `NEXT_PUBLIC_` prefix
- **Program ID**: Update this after deploying your Solana program with `anchor deploy` command
- **RPC Endpoints**: For production, consider using dedicated RPC providers:
  - [Helius](https://www.helius.dev/) - High-performance Solana RPC
  - [QuickNode](https://www.quicknode.com/) - Enterprise-grade infrastructure
  - [Alchemy](https://www.alchemy.com/solana) - Developer-friendly platform
- **API URL**: In production, update this to your deployed backend URL
- **Network**: Change to `mainnet-beta` for production deployment

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

---

## Documentation

### Framework & Language

- [Next.js Documentation](https://nextjs.org/docs) - Next.js App Router and features
- [React Documentation](https://react.dev) - React 19 reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide

### Blockchain & Web3

- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) - Solana JavaScript API
- [Anchor Framework](https://www.anchor-lang.com/docs) - Solana program framework
- [Solana Wallet Adapter](https://github.com/anza-xyz/wallet-adapter) - Wallet integration
- [Solana Cookbook](https://solanacookbook.com/) - Solana development recipes

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Icon library
- [Headless UI](https://headlessui.com/) - Unstyled UI components

### Additional Resources

- [Solana Developer Docs](https://docs.solana.com/) - Official Solana documentation
- [Anchor Examples](https://github.com/coral-xyz/anchor/tree/master/examples) - Anchor code examples

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

Add environment variables in Vercel dashboard.

### Build for Production

```bash
npm run build
npm start
```

---

## License

MIT License

---

**Built with Next.js 16 and TypeScript**
