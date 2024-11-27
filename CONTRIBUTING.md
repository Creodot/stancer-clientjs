# Contributing Guide

Thank you for considering contributing to the **Stancer ClientJS** project! 🎉 We are thrilled to have you in the community. This document will guide you through your contributions.

---

## 🚀 How to start ?

1. **Fork this repository** :
   - Click on the "Fork" button at the top of the page.

2. **Clone your fork** :
   - Clone your fork locally :
     ```bash
     git clone https://github.com/Creodot/stancer-clientjs.git
     ```

3. **Create a branch** :
   - Work on a new branch for your changes :
     ```bash
     git checkout -b my-feature
     ```

4. **Make your changes** :
   - Make the necessary changes to the code or documentation.

5. **Test your work** :
   - Run the tests to ensure everything works :
     ```bash
     yarn test:watch
     ```

6. **Submit a Pull Request (PR)** :
   - Push your changes to your fork and create a PR to the `develop` branch of this repository.

---

## ✅ Checklist for a Pull Request

Before submitting a PR, ensure that :
- [ ] Your code respects the linting rules (run `yarn lint`).
- [ ] The tests pass successfully (`yarn test`).
- [ ] You have added tests for new features or fixed existing ones.
- [ ] You have updated the documentation if necessary.

---

## 🌟 Contribution rules

1. **Be respectful** :
   - Refer to our [Code of Conduct](./CODE_OF_CONDUCT.md).
   - Remember that we are here to learn and build together.

2. **Follow the code style** :
   - Use the linting tools (ex : Biome) to format the code.

3. **Clear and concise commits** :
   - Format your commit messages like this :
     ```
     feat(auth): add login method
     fix(payments): fix bug #42 on payment creation
     ```

4. **Prioritize tests** :
   - Each new feature or bug fix must be accompanied by tests.

---

## 🌟 Contribution Guidelines

- Be respectful:
  - Read our [Code of Conduct](./CODE_OF_CONDUCT.md) for community guidelines.

- Follow the code style:
  - Use the linting rules defined in the project by running `yarn lint`.

- Commit messages:
  - Write concise, meaningful commit messages:
    ```
    feat(auth): added login functionality
    fix(payments): resolved issue #42 with payment creation
    ```

- Write tests:
  - Every new feature or bug fix should include relevant tests.

---

## 🛠️ Local development

1. Install the dependencies :
   ```bash
   yarn install
   ```

2. Run tests:
   ```bash
   yarn test:watch
   ```

3. Build the project:
   ```bash
   yarn build
   ```

4. Start the documentation server:
   ```bash
   yarn docs
   ```

---

### 🔧 Customization Notes:
- **Issue and Contact Info**: The email `support@creodot.com` is added as a placeholder. Replace it if needed.
- **Repository Link**: All links point to `https://github.com/Creodot/stancer-clientjs`. Double-check if this is correct.
- **Commit Message Format**: The format follows conventional commits. Let me know if you'd like changes here.

You're all set to make your project welcoming and easy for contributors! 😊