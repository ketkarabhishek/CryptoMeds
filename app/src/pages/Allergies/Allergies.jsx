import React, { useState } from "react";
import { Container, Fab, makeStyles, Grid, Box } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import Heading from "components/Heading";
import AddAllergyDialog from "./AddAllergyDialog";
import AllergyItem from "components/AllergyItem";

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

function Allergies(props) {
  const { allergies } = props;
  console.log(allergies);
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
        <Heading text="Allergies" />
        <Box my={4}>
          <Fab variant="extended" color="primary" onClick={handleOpen}>
            <Add className={classes.extendedIcon} />
            Add New
          </Fab>
        </Box>
      </Grid>

      <Grid container spacing={3}>
        {allergies.map((value, index) => (
          <Grid item md={3} key={index}>
            <AllergyItem data={value}></AllergyItem>
          </Grid>
        ))}
      </Grid>

      <AddAllergyDialog open={open} onClose={handleClose} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  allergies: state.userData.allergies,
});

export default connect(mapStateToProps)(Allergies);
