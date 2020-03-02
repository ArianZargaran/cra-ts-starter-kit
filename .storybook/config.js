import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import theme from "./theme";

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
