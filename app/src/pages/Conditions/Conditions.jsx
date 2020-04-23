import React, { useState } from "react";
import { Container, Fab, makeStyles, Grid, Box } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import Heading from "components/Heading";
import AddConditionDialog from "./AddConditionDialog";
import ConditionItem from "components/ConditionItem";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Conditions(props) {
  const { conditions } = props;
  console.log(conditions);
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="lg">
      <Grid container justify="space-between">
        <Heading text="Conditions" />
        <Box my={4}>
          <Fab variant="extended" color="primary" onClick={handleOpen}>
            <Add className={classes.extendedIcon} />
            Add New
          </Fab>
        </Box>
      </Grid>

      <Grid container spacing={3}>
        {conditions.map((value, index) => (
          <Grid item md={3} key={index}>
            <ConditionItem data={value}></ConditionItem>
          </Grid>
        ))}
      </Grid>

      <AddConditionDialog open={open} onClose={handleClose} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  conditions: state.userData.conditions,
});

export default connect(mapStateToProps)(Conditions);
