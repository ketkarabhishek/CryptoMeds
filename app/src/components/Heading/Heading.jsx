import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: "3px",
    width: 100,
  },
}));

export default function Heading({ text }) {
  const classes = useStyles();

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        {text}{" "}
      </Typography>
      <Divider className={classes.divider} />
    </Box>
  );
}
