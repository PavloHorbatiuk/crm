import { type ReactNode } from "react";
import { type StateSchema } from "../types/stateShema";
import { createReduxStore } from "../store";
import { Provider } from "react-redux";

interface IProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider: React.FC<IProps> = (props: IProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
