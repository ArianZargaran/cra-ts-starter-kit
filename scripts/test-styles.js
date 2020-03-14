const { exec } = require("child_process");

const openReporter = () => {
  exec("open ./report.html", (error, stdout, stderr) => {
    if (error) {
      console.log(
        `There was an error trying to find the file report.html: ${error.message}`
      );
      return;
    }
    if (stderr) {
      console.log(
        `There was an error trying to open the report html: ${stderr}`
      );
      return;
    }
    console.log(`Opening the report!!`, stdout);
  });
};

const executeDiff = (resolve, reject) => {
  exec("cp -r difference/ reg-diff", (error, stdout, stderr) => {
    if (error) {
      console.log(
        `There was an error trying to find the diffs: ${error.message}`
      );
      return;
    }
    if (stderr) {
      console.log(
        `There was an error running the Visual Regression Tests: ${stderr}`
      );
      return;
    }
    console.log("Give me just one more sec...", stdout);
    openReporter();
  });
};

const runReporter = () =>
  exec(
    "reg-cli ./current/ ./reference/ ./reg-diff/ -R ./report.html",
    (error, stdout, stderr) => {
      if (error) {
        console.log("Looks liye something changed on your Layout");
        openReporter();
        return;
      }
      executeDiff();
      console.log(`Output`, stdout);
    }
  );

exec("yarn loki test", (error, stdout, stderr) => {
  console.log("Let me run loki first");
  process.chdir(".loki");
  runReporter();
});
