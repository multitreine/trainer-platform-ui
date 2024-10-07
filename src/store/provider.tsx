"use client";

import { Provider } from "react-redux";
import { makeStore } from "./createStore";
import { useEffect, useMemo } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    const store = useMemo(() => makeStore, []);

  return <Provider store={store}> {children} </Provider>;
}

export default Providers;
