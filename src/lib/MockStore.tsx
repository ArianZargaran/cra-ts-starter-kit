import React, { ReactNode } from "react";
import reduxMockStore from "redux-mock-store";
import { Providers } from "./Providers";
import {
  ApplicationStatePropTypes,
  mockApplicationState
} from "./ApplicationState";

interface MockStorePropTypes {
  storeFragment?: Partial<ApplicationStatePropTypes>;
  children: ReactNode;
}

const MockStore = ({ storeFragment = {}, children }: MockStorePropTypes) => {
  const mockStore = reduxMockStore();
  const store = mockStore({ ...mockApplicationState, ...storeFragment });

  return <Providers store={store}>{children}</Providers>;
};

export { MockStore };
