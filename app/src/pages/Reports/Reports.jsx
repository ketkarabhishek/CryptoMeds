import React, { useState } from "react";
import { Container, Fab, makeStyles, Grid, Box } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import RecordItem from "components/RecordItem";
import { connect } from "react-redux";
import Heading from "components/Heading";
import AddReportDialog from "./AddReportDialog";

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

function Reports(props) {
  const { reports } = props;
  console.log(reports);
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
        <Heading text="Reports" />
        <Box my={4}>
          <Fab variant="extended" color="primary" onClick={handleOpen}>
            <Add className={classes.extendedIcon} />
            Add New
          </Fab>
        </Box>
      </Grid>

      <Grid container spacing={3}>
        {reports.map((value, index) => (
          <Grid item md={3} key={index}>
            <RecordItem data={value}></RecordItem>
          </Grid>
        ))}
      </Grid>
      {/* <DatePicker
                label="Basic example"
                value={new Date()}
                onChange={(date) => console.log(date.toJSON())}
                animateYearScrolling
                
            /> */}
      <AddReportDialog open={open} onClose={handleClose} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  reports: state.userData.labReports,
});

export default connect(mapStateToProps)(Reports);
