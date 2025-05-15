# D3 Coverage Dashboard

**An interactive, D3.js-based dashboard for visualizing test coverage data from V8 (Node.js).**

This tool provides a structured view of feature files, test scenarios, and executed test steps based on V8's coverage output. It helps distinguish between source files that were only invoked (e.g., during setup) and those that were actively tested.

---

## 🚀 Features

- 📊 **Visualize test coverage** from V8 coverage data
- 📁 **Overview of feature files and scenarios**
- 🔍 **Collapsible scenario views** showing passed, failed, and skipped test steps *(optional)*
- 📂 **Source file analysis**: differentiate between *called-only* and *tested* files
- ⚙️ Built with **D3.js**, **TypeScript**, and **Vite**
- 🤖 Automatic versioning with **semantic-release**
- 🧪 Future support for loading and filtering multiple test runs

---

## 📦 Installation

```bash
git clone https://github.com/your-username/d3-coverage-dashboard.git
cd d3-coverage-dashboard
pnpm install