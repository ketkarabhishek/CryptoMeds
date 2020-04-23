import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import ThemeWrapper from "./components/ThemeWrapper";
import Router from "./Router";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayJsUtils from "@date-io/dayjs";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDiceD20,
  faFilePrescription,
  faFilePdf,
  faFileImage,
  faAllergies,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faDiceD20,
  faFilePrescription,
  faFilePdf,
  faFileImage,
  faAllergies,
  faStethoscope
);

export default function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <MuiPickersUtilsProvider utils={DayJsUtils}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </ThemeWrapper>
    </Provider>
  );
}
