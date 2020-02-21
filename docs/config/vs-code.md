# Visual Studio Code Config

### Settings

Main goal of these settings is to be able to detect and apply my understanding of good Front-End practices. For this commitment, I use the following tools:

- ESLint, to lint and fix Javascript/Typescript files.
- Prettier (\*), to format code alongside Lint tools.

## Editor Rules

```
{
  "editor.rulers": [
    100
  ],
  "editor.minimap.enabled": false,
  "editor.renderIndentGuides": true,
  "editor.scrollBeyondLastLine": false,
  "editor.smoothScrolling": true,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "workbench.iconTheme": "vscode-icons",
  "bracket-pair-colorizer-2.colorMode": "Independent",
  "bracket-pair-colorizer-2.colors": [
    "LightSkyBlue",
    "Orchid",
    "Gold"
  ],
  "versionlens.showVersionLensesAtStartup": false,
  "sync.gist": "",
  "sync.autoDownload": false,
  "sync.autoUpload": false,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "window.zoomLevel": 2,
  "git.autofetch": true,
  "git.confirmSync": false,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.trimFinalNewlines": true,
  "sync.forceUpload": false,
  // Common configs
  "editor.tabSize": 2,
  "javascript.validate.enable": false, // ESlint validates the code
  "scss.validate": false, // Lets Stylelint validate our code
  // "prettier.disableLanguages": [ // Lint tool formats and fixes the code.
  //  "javascript",
  //  "javascriptreact",
  //  "typescript",
  //  "typescriptreact"
  // ], // In case I defer this job to eslint
  "editor.codeActionsOnSave": { // To autofix on save
    "source.fixAll": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  // disable default autoformat in favor of the eslint config one
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "jest.enableInlineErrorMessages": false,
  "editor.formatOnSave": true,
  "gitlens.gitCommands.closeOnFocusOut": true,
  "diffEditor.ignoreTrimWhitespace": false,
  // End common configs
}

```
