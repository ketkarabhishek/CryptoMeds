import React from 'react'

import { Drizzle, generateStore } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";

import drizzleOptions from "../../drizzleOptions";


export default function DrizzleWrapper(props) {
    const drizzleStore = generateStore(drizzleOptions);
    const drizzle = new Drizzle(drizzleOptions, drizzleStore);

    return (
        <DrizzleContext.Provider drizzle={drizzle}>
            {props.children}
        </DrizzleContext.Provider>
    )
}
