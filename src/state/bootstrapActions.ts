import { Store } from "redux";

const bootstrapActions = (store: Store) => {
  console.log("Bootstrap Actions =>", { store });
};

export { bootstrapActions };
