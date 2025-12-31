# Quick Start Guide

Get up and running with Playwright tests in **2 minutes**.

---

## Prerequisites
- [Node.js](https://nodejs.org/) v16+

## Installation
```bash
npm install
```

## Run Tests
```bash
npx playwright test
```

## View Report
```bash
npx playwright show-report
```

---

## Essential Commands

| Command | Description |
|---------|-------------|
| `npx playwright test` | Run all tests (headless) |
| `npx playwright test --ui` | Interactive UI mode |
| `npx playwright test --headed` | See browser |
| `npx playwright test --debug` | Debug with inspector |
| `npx playwright show-report` | View HTML report |

---

## Project Structure
```
tests/
├── pages/          # Page Object Models
└── login.spec.ts   # Test scenarios
```

---

## Test Scenarios
- ✅ Valid login
- ✅ Invalid username
- ✅ Invalid password  
- ✅ Empty username
- ✅ Empty password

**Result**: 5/5 passing ✨

---

## Next Steps
- Read `README.md` for full documentation
- Check `MIGRATION_SUMMARY.md` for migration details
- Explore tests in `tests/login.spec.ts`

---

**Happy Testing! 🎭**
