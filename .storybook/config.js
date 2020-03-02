import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import theme from "./theme";

import "../src/styles/reset.css";
import "../src/styles/index.css";
import "./styles/theme-switch.css";
import "./styles/light-mode-root.css";
import "./styles/dark-mode-root.css";

function loadStories() {
  addDecorator(withKnobs);
  addParameters({ options: { theme } });

  const requireContext = require.context(
    "../src/components",
    true,
    /.story.tsx$/
  );

  requireContext.keys().forEach((filename) => {
    requireContext(filename);
  });
}
configure(loadStories, module);
