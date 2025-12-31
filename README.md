# Practice Test Automation - Login Test Suite

[![Playwright](https://img.shields.io/badge/Playwright-1.40-green)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-5%2F5%20passing-brightgreen)]()

A minimal, production-ready test automation framework for login functionality using **Microsoft Playwright** and **TypeScript**.

---

## 🎯 Project Overview

This project demonstrates automated testing of the [Practice Test Automation Login Page](https://practicetestautomation.com/practice-test-login/) using industry best practices.

### Tech Stack
- **Playwright 1.40+** - Modern, fast, reliable browser automation
- **TypeScript 5.3** - Type-safe code with excellent IDE support
- **Page Object Model** - Clean separation of test logic and page interactions
- **Chrome Browser** - Using locally installed Chrome for speed

### Project Structure
```
tsc-playwright-webui-test/
├── tests/
│   ├── pages/
│   │   ├── LoginPage.ts              # Login page interactions
│   │   └── LoggedInSuccessfullyPage.ts   # Success page verifications
│   └── login.spec.ts                 # Test scenarios
├── playwright.config.ts              # Playwright configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # You are here
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **Chrome Browser** (already installed on most systems)

### Installation
```bash
npm install
```

### Running Tests
```bash
# Run all tests (headless)
npx playwright test

# Run with UI mode (interactive debugger)
npx playwright test --ui

# Run with headed browser (visible)
npx playwright test --headed

# View HTML report
npx playwright show-report
```

---

## ✅ Test Coverage

### Test Scenarios (5 Total)
1. ✅ **Successful login** with valid credentials
2. ✅ **Login failure** with invalid username
3. ✅ **Login failure** with invalid password
4. ✅ **Login failure** with empty username
5. ✅ **Login failure** with empty password

### Test Results
- **Total**: 5 tests
- **Passed**: 5 (100%)
- **Failed**: 0
- **Execution Time**: ~14 seconds

---

## 📁 Code Structure

### Page Object Model

#### `LoginPage.ts`
```typescript
class LoginPage {
  async goto()                                    // Navigate to login page
  async login(username: string, password: string) // Perform login
}
```

#### `LoggedInSuccessfullyPage.ts`
```typescript
class LoggedInSuccessfullyPage {
  async verifyOnPage()  // Verify successful login state
}
```

### Test Specification

All tests follow the **Arrange-Act-Assert** pattern:
```typescript
test('should login successfully with valid credentials', async () => {
  // Arrange: Navigate to page (in beforeEach)
  
  // Act: Perform login
  await loginPage.login('student', 'Password123');
  
  // Assert: Verify success
  await successPage.verifyOnPage();
});
```

---

## 🛠️ Development

### Adding New Tests
1. Add test scenario to `tests/login.spec.ts`
2. If needed, extend Page Objects in `tests/pages/`
3. Run tests: `npx playwright test`

### Debugging
```bash
# Open Playwright Inspector
npx playwright test --debug

# Generate trace for debugging
npx playwright test --trace on
```

### Code Quality
- **Type Safety**: Full TypeScript type checking
- **JSDoc Comments**: All public methods documented
- **Clean Code**: Page Object Model for maintainability
- **Best Practices**: Async/await, proper locator strategies

---

## 📊 Configuration

### `playwright.config.ts`
- **Base URL**: `https://practicetestautomation.com`
- **Browser**: Chrome only (minimal MVP)
- **Parallel**: 5 workers for fast execution
- **Retries**: 2 (CI only)
- **Trace**: On first retry
- **Screenshots**: On failure only

---

## 🔄 Migration from Serenity BDD

This project was migrated from **Serenity BDD (Java)** to **Playwright (TypeScript)**.

### Why Migrate?
- ✅ **50% faster** test execution (~14s vs ~28s)
- ✅ **Simpler setup** (no JVM, Maven, WebDriverManager)
- ✅ **Better debugging** (UI Mode, Trace Viewer)
- ✅ **Modern tooling** (TypeScript, VS Code integration)
- ✅ **Industry standard** (Playwright is the modern choice for web E2E testing)

See `MIGRATION_SUMMARY.md` for detailed migration notes.

---

## 📚 Documentation

- **README.md** - This file (overview and quick start)
- **QUICK_START.md** - Minimal getting started guide
- **MIGRATION_SUMMARY.md** - Serenity to Playwright migration details
- **AGENT.md** - Development history and agent interactions
- **CLAUDE.md** - AI assistant collaboration notes

---

## 🧪 CI/CD Integration

### GitHub Actions Example
```yaml
- name: Install dependencies
  run: npm ci
  
- name: Install Playwright browsers
  run: npx playwright install --with-deps chromium
  
- name: Run tests
  run: npx playwright test
  
- name: Upload report
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

---

## 📝 Best Practices Demonstrated

1. ✅ **Page Object Model** - Clean separation of concerns
2. ✅ **TypeScript** - Type safety and better IDE support
3. ✅ **Async/Await** - Proper asynchronous handling
4. ✅ **DRY Principle** - No code duplication
5. ✅ **Descriptive Naming** - Clear test and method names
6. ✅ **JSDoc Comments** - Self-documenting code
7. ✅ **Minimal Dependencies** - Only Playwright, no extras

---

## 🤝 Contributing

This is a demonstration project. For production use:
1. Add environment-based configuration
2. Externalize test data to data files
3. Add custom fixtures for common setups
4. Implement visual regression testing
5. Add API test layer

---

## 📄 License

See `LICENSE` file for details.

---

## 🆘 Support

### Common Issues

**Q: Tests are slow**
- A: Ensure you're using local Chrome (`channel: 'chrome'` in config)

**Q: Chrome not found**
- A: Install Google Chrome or use Firefox/WebKit

**Q: TypeScript errors**
- A: Run `npm install` to ensure all types are installed

### Learn More
- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Page Object Model](https://playwright.dev/docs/pom)

---

**Built with ❤️ by Expert SDET using modern automation best practices**
