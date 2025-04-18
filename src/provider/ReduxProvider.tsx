import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/Store";

interface IProvider {
  children: ReactNode;
}
const ReduxProvider: FC<IProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
