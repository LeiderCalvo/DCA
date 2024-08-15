###### Class 05

# Modules 🧑‍💻

![Modules](https://media.wired.com/photos/5954a0ce267cf6013d251f4e/191:100/w_1280,c_limit/HighRes_LEGO_DUPLO_bricks-ft.jpg)

**What Module JS?**

A Module is a small piece of code capable of solving a specific problem. This is useful because it helps us to focus on solving a bigger problem by splitting it into small, not overwhelming steps.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

<br />

---

<br />

### **Adding a Server**

![Serve](https://raw.githubusercontent.com/vercel/serve/main/media/banner.png)

This dev dependency helps us to see our static application served in a local IP address, this is usually http://localhost:3000. This is helpful since it constantly refreshes the application after each change, and offers a dev experience similar to the one used in the market.

[check more on the documentation](https://github.com/vercel/serve#readme)

<br />

---

<br />

### **Differences between CommonJS require Imports, ES6 Named Imports, and ES6 Default Imports**

|                            | CommonJS `require`                                                                   | ES6 named imports                                     | ES6 default imports                                                        |     |
| -------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------- | --- |
| Syntax                     | `const anyName = require('module')`                                                  | `import { namedExport } from 'module'`                | `import anyName from 'module'`                                             |     |
| Multiple imports           | `const anyName = require('module1');`<br/>`const anyOtherName = require('module2');` | `import { namedExport1, namedExport2 } from 'module'` | `import anyName from 'module1';`<br />`import anyOtherName from 'module2'` |     |
| Importing the whole module | `const anyName = require('module')`                                                  | `import * as module from 'module'`                    | `import anyName from 'module'`                                             |     |
| Exporting                  | `module.exports = ...`                                                               | `export const namedExport = ...`                      | `export default ...`                                                       |     |

> ⚠️ **For ES6 imports to work** make sure to add `type="module"` to the `script` tag in the **HTML**
