# Visual Studio Code Config

### Settings

Main goal of these settings is to be able to detect and apply my understanding of good Front-End practices. For this commitment, I use the following tools/extensions:

**Required Extensions**

- ESLint. Lint and fix Javascript/Typescript files. Please visit the following link for more info, https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

- Prettier. Format code alongside Lint tools. Please visit the following link for more info, https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

- EditorConfig. Specific cross-team Editor settings. Please visit the following link for more info, https://editorconfig.org/#overview

  **Recommended Extensions**
  My personal and preferred VS Code extensions:

- Android iOS Emulator. Launch an Android or iOS Viertual Device emulator.
- Bracket Pair Colorizer 2. Adds some cool and nice colors to brackets for a better readability.
- GitLens. Expose a phantom text to track Git per line on your codebase.
- Live Share. Crutial for peer-programming sesions while coding.
- stylelint. Modern CSS/SCSS/Less linter.
- SVG Previewer. Shows SVG preview to the side panel.
- Version Lens. Checks whether you are out of date on your dependencies maintenance.
- vscode-icons. Icons for your Visual Studio Code.

## Editor Settings

```
settings: {
  "bracket-pair-colorizer-2.colorMode": "Independent",
  "bracket-pair-colorizer-2.colors": ["LightSkyBlue", "Orchid", "Gold"],
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.rulers": [100],
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.renderIndentGuides": true,
  "editor.scrollBeyondLastLine": false,
  "editor.smoothScrolling": true,
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    // To autofix on save
    "source.fixAll": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "git.autofetch": false,
  "git.confirmSync": false,
  "gitlens.gitCommands.closeOnFocusOut": true,
  "javascript.validate.enable": false, // Lets ESlint validate our code
  "prettier.disableLanguages": [],
  // Optional: I use Oh-My ZSH!
  "terminal.integrated.shell.osx": "/bin/zsh",
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "versionlens.showVersionLensesAtStartup": false,
  "window.zoomLevel": 2,
  "workbench.iconTheme": "vscode-icons",
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  }
}

```
