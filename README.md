# Stancer ClientJS (SDK)

![Stancer SDK](https://img.shields.io/badge/TypeScript-100%25-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)

**Stancer ClientJS** is a simple and powerful tool to integrate Stancer's payment features into your TypeScript/JavaScript applications. Whether you're building an online store, a marketplace, or any other solution requiring secure payments, this SDK is designed for you. 🚀

## 📦 Installation

Add the SDK to your project with npm or Yarn:

```bash
npm install stancer-clientjs
# or
yarn add stancer-clientjs
```

---

## 🚀 Getting Started

### SDK Initialization

Import and configure the SDK with your Stancer API key:

```typescript
import { createStancerSDK } from '@creodot/stancer-clientjs';

const sdk = createStancerSDK('your-api-key');
```

---

### Usage Example

#### Authentication

```typescript
const user = await sdk.auth.login({
  username: 'john.doe@example.com',
  password: 'securepassword'
});
console.log(user);
```

#### Create a payment

```typescript
const payment = await sdk.payments.create({
  amount: 2000, // Amount in cents (20,00€)
  currency: 'EUR',
  description: 'Purchase #12345'
});
console.log(payment);
```

#### Manage customers

```typescript
const customer = await sdk.customers.create({
  name: 'John Doe',
  email: 'john.doe@example.com'
});
console.log(customer);
```

---

## 📚 Documentation

The complete documentation is available here: **[Stancer SDK Documentation](https://stancer-sdk.github.io/)**.

You will find:
- A guide to get started.
- A detailed API reference.
- Concrete examples of integration.

---

## 🛠️ Features

- Payment management: creation, refund, tracking.
- Secure authentication.
- Customer management.
- Full TypeScript support for an optimal developer experience.

---

## 🧪 Tests

To run the unit tests, use:

```bash
npm run test:unit
```

---

## 🤝 Contribution

We welcome your contributions with enthusiasm! If you want to improve this SDK, follow these steps:
1. Clone the repo: `git clone https://github.com/Creodot/stancer-clientjs.git`.
2. Create a branch from `develop`: `git checkout -b my-feature`.
3. Make your changes and run the tests.
4. Send a PR! 😄

---

## ⚖️ Licence

This project is under the **MIT** license. See the [LICENSE](LICENSE) file for more details.

---

## 🌟 Acknowledgements

A big thanks to all those who use and contribute to **Stancer SDK JS**. Together, we make payments easier and accessible to everyone! ❤️

---

### 🌐 Useful links:
- **Official Stancer site** : [stancer.com](https://www.stancer.com)
- **SDK Documentation** : [https://stancer-sdk.github.io/](https://stancer-sdk.github.io/)
- **Issues & Feedback** : [https://github.com/votre-repo/stancer-sdk/issues](https://github.com/votre-repo/stancer-sdk/issues)
