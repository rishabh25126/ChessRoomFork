import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";

export const Wrapper = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
