import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { green, cyan, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      //   main: '#00BFA6'
      main: "#ffffff",
    },
    // action: {
    //   selected: teal[400],
    // }
    //   type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

export default function ThemeWrapper(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
