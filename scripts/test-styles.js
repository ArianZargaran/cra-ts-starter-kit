const execSync = require("child_process").execSync;
const exec = require("child_process").exec;

const openReporter = () => {
  try {
    execSync("open ./.loki/report.html", { stdio: "ignore" });
    console.log("Opening the reporter!");
  } catch (e) {
    throw e;
  }
};

const diffingWithLoki = () => {
  try {
    execSync("cp -r ./.loki/difference/ ./.loki/reg-diff");
  } catch (e) {
    openReporter();
    throw e;
  }
  openReporter();
};

const runInterface = () => {
  try {
    execSync(
      "reg-cli ./.loki/current/ ./.loki/reference/ ./.loki/reg-diff/ -R ./.loki/report.html"
    );
    diffingWithLoki();
  } catch (e) {
    diffingWithLoki();
    throw e;
  }
};

const runLokiTests = () => {
  exec("yarn loki test --reactUri	file:./.storybook/static-link", error => {
    if (error) {
      console.log(`Your tests DID NOT pass`);
    } else {
      console.log("Your tests PASSED");
    }
    runInterface();
  });
};

runLokiTests();
