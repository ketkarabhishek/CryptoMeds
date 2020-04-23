import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  Divider,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { KeyboardDatePicker } from "@material-ui/pickers";
import dayjs from "dayjs";
import { addCondition } from "redux/actions";
import { connect } from "react-redux";
import { CONDITION } from "constants/HealthRecordModels";

function AddConditionDialog(props) {
  const { onClose, open, addCondition } = props;

  const [title, setTitle] = useState("");
  const [asserter, setAsserter] = useState("");
  const [clinicalStatus, setCinicalStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [recordedDate, setRecordedDate] = useState(dayjs());
  const [onsetDate, setOnsetDate] = useState(dayjs());

  const handleClose = () => {
    onClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAsserterChange = (e) => {
    setAsserter(e.target.value);
  };

  const handleCinicalStatusChange = (e) => {
    setCinicalStatus(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleRecordedDateChange = (date) => {
    setRecordedDate(date);
  };

  const handleOnsetDateChange = (date) => {
    setOnsetDate(date);
  };

  const handleSubmit = () => {
    const newCondition = {
      ...CONDITION,
      id: 0,
      title: title,
      asserter: asserter,
      clinicalStatus: clinicalStatus,
      onset: onsetDate,
      recordedDate: recordedDate,
      notes: notes,
    };
    addCondition(newCondition);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle disableTypography>
        <Grid container justify="space-between">
          <Typography variant="h4" style={{ fontSize: "1.5rem" }}>
            New Condition{" "}
          </Typography>
          <IconButton size="small" onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <TextField
          value={title}
          onChange={handleTitleChange}
          variant="outlined"
          margin="normal"
          label="Title"
          fullWidth
        />
        <TextField
          value={asserter}
          onChange={handleAsserterChange}
          variant="outlined"
          margin="normal"
          label="Asserter"
          fullWidth
        />
        <TextField
          value={clinicalStatus}
          onChange={handleCinicalStatusChange}
          variant="outlined"
          margin="normal"
          label="CinicalStatus"
          fullWidth
        />
        <KeyboardDatePicker
          // variant="inline"
          format="DD/MM/YYYY"
          margin="normal"
          id="date-picker-inline"
          label="Onset Date"
          value={onsetDate}
          onChange={handleOnsetDateChange}
          fullWidth
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          inputVariant="outlined"
          disableFuture
        />

        <KeyboardDatePicker
          // variant="inline"
          format="DD/MM/YYYY"
          margin="normal"
          id="date-picker-inline"
          label="Recorded Date"
          value={recordedDate}
          onChange={handleRecordedDateChange}
          fullWidth
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          inputVariant="outlined"
          disableFuture
        />

        <TextField
          value={notes}
          onChange={handleNotesChange}
          variant="outlined"
          margin="normal"
          label="Notes"
          fullWidth
          multiline
          rows={3}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});
const mapDispachToProps = { addCondition };

export default connect(mapStateToProps, mapDispachToProps)(AddConditionDialog);
