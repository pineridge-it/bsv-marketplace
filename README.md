# BSV Marketplace

A decentralized pay-per-use content marketplace built on the BSV (Bitcoin SV) blockchain. This platform enables creators to monetize their content directly while providing consumers with instant, micropayment-based access to premium content.

## 🌟 Features

### For Creators
- **Content Publishing**: Upload and manage various content types (articles, videos, images, documents)
- **Flexible Pricing**: Set custom pricing models (per-view, per-download, subscription-based)
- **Real-time Analytics**: Track content performance, earnings, and audience engagement
- **BSV Integration**: Direct micropayments to your BSV wallet
- **Content Protection**: Secure content delivery with blockchain-verified access

### For Consumers
- **Instant Access**: Pay-per-use model with BSV micropayments
- **Content Discovery**: Browse and search through diverse content categories
- **Transparent Pricing**: Clear, upfront pricing with no hidden fees
- **Purchase History**: Track your content purchases and access history
- **Quality Assurance**: Community-driven content rating system

### For Developers
- **API Access**: RESTful APIs for content management and transactions
- **Blockchain Integration**: Built-in BSV wallet and transaction handling
- **Extensible Architecture**: Modular design for easy customization
- **Developer Dashboard**: Monitor API usage and integration metrics

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14 with TypeScript
- **UI Framework**: Tailwind CSS with Radix UI components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Blockchain**: BSV (Bitcoin SV) integration
- **State Management**: Zustand + React Query
- **Charts & Analytics**: Chart.js, Plotly.js, Recharts

### Key Components
- **Content Management System**: Upload, categorize, and manage content
- **Payment Processing**: BSV micropayment integration
- **User Authentication**: Secure login/signup with role-based access
- **Analytics Dashboard**: Real-time metrics and reporting
- **API Layer**: RESTful endpoints for all platform operations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- BSV wallet setup
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pineridge-it/bsv-marketplace.git
   cd bsv-marketplace
   ```

2. **Navigate to the app directory**
   ```bash
   cd app
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Environment Setup**
   Create a `.env` file in the app directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/bsv_marketplace"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   
   # BSV Configuration
   BSV_NETWORK="testnet" # or "mainnet"
   BSV_PRIVATE_KEY="your-bsv-private-key"
   BSV_PUBLIC_KEY="your-bsv-public-key"
   
   # API Keys (if needed)
   ENCRYPTION_KEY="your-encryption-key"
   ```

5. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # Seed the database (optional)
   yarn seed
   ```

6. **Start the development server**
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
bsv-marketplace/
├── app/                          # Next.js application
│   ├── app/                      # App router pages
│   │   ├── (auth)/              # Authentication pages
│   │   ├── admin/               # Admin dashboard
│   │   ├── api/                 # API routes
│   │   ├── content/             # Content pages
│   │   ├── creator/             # Creator dashboard
│   │   ├── dashboard/           # User dashboard
│   │   └── marketplace/         # Marketplace pages
│   ├── components/              # Reusable UI components
│   │   ├── navigation/          # Navigation components
│   │   └── ui/                  # Base UI components
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── prisma/                  # Database schema and migrations
│   ├── scripts/                 # Database seeding scripts
│   └── types/                   # TypeScript type definitions
└── README.md                    # Project documentation
```

## 🔧 Configuration

### BSV Wallet Setup
1. Create a BSV wallet (testnet for development)
2. Fund your wallet with test BSV
3. Add your private/public keys to the `.env` file
4. Configure the network (testnet/mainnet)

### Database Configuration
The application uses PostgreSQL with Prisma ORM. Update the `DATABASE_URL` in your `.env` file to match your database setup.

### Authentication
NextAuth.js is configured for user authentication. You can extend it to support additional providers by modifying the configuration in `app/api/auth/[...nextauth]/route.ts`.

## 🚀 Deployment

### Production Build
```bash
cd app
yarn build
yarn start
```

### Environment Variables for Production
Ensure all environment variables are properly set for production:
- Use `mainnet` for BSV network
- Set secure `NEXTAUTH_SECRET`
- Configure production database URL
- Set proper domain for `NEXTAUTH_URL`

### Deployment Platforms
The application can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **DigitalOcean**
- **Self-hosted servers**

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/session` - Get current session

### Content Management
- `GET /api/content` - List all content
- `POST /api/content` - Create new content
- `GET /api/content/[id]` - Get specific content
- `PUT /api/content/[id]` - Update content
- `DELETE /api/content/[id]` - Delete content

### Payment Processing
- `POST /api/payments/create` - Create payment transaction
- `GET /api/payments/verify` - Verify payment status
- `GET /api/payments/history` - Get payment history

### Analytics
- `GET /api/analytics/overview` - Platform overview
- `GET /api/analytics/content` - Content performance
- `GET /api/analytics/earnings` - Earnings data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the documentation wiki

## 🔮 Roadmap

- [ ] Mobile application (React Native)
- [ ] Advanced content analytics
- [ ] Multi-language support
- [ ] Enhanced BSV wallet integration
- [ ] Content recommendation engine
- [ ] Creator collaboration tools
- [ ] Advanced payment options
- [ ] Content versioning system

## ⚡ BSV Integration

This marketplace leverages the BSV blockchain for:
- **Micropayments**: Instant, low-cost transactions
- **Content Verification**: Blockchain-based content authenticity
- **Transparent Transactions**: All payments recorded on-chain
- **Global Accessibility**: Borderless payment system
- **Creator Empowerment**: Direct monetization without intermediaries

---

Built with ❤️ using BSV blockchain technology
