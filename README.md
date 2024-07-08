# My nextjs-starter-template 🚀

Screaming architecture.

With bun.sh, simple but extremely fast.

### Includes:

- [Tailwind CSS](https://tailwindcss.com/docs/installation "TailwindCSS docs") - Utility-first CSS framework, you already know it.
- [Shadcn/ui](https://ui.shadcn.com/ "shadcn/ui website") - Beautiful designed components - open source.
- [ESLint](https://eslint.org/ "ESLint website") - Find and fix problems in your code.
- [Husky](https://github.com/typicode/husky "Husky repo") - Git hooks made easy.
- [Playwright](https://playwright.dev/ "Playwright website") - Reliable end-to-end testing.

### Use this template:

1. Install bun.js locally:

   ```bash
   # Linux & macOS
   curl -fsSL https://bun.sh/install | bash

   # Windows
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```
2. Install dependencies.

   ```bash
   bun install

   # If it is your first time using playwright then run:
   bunx playwright install
   ```
3. Run the project.

   ```bash
   bun run dev
   ```

### Project structure:

- **/src:** Root source folder.
- **/src/app/(routes):** Contains the app routes.
- **/src/core:** Contains the layout and ui components, constants, types, lib, and the script to generate version from package.json.
- **/tests:** Contains the test files.

### Dependencies

###### Dev Dependencies:

```json
"devDependencies": {
    "@playwright/test": "^1.45.1",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "15.0.0-rc.0",
    "eslint-config-standard-with-typescript": "^43.0.1",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-n": "^17.9.0",
    "eslint-plugin-promise": "^6.4.0",
    "eslint-plugin-react": "^7.34.3",
    "husky": "^9.0.11",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
```

###### Runtime Dependencies

```json
"dependencies": {
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "dotenv": "^16.4.5",
    "lucide-react": "^0.401.0",
    "next": "15.0.0-rc.0",
    "react": "19.0.0-rc-f994737d14-20240522",
    "react-dom": "19.0.0-rc-f994737d14-20240522",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7"
  }
```
