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
import { addAllergy } from "redux/actions";
import { connect } from "react-redux";
import { ALLERGY } from "constants/HealthRecordModels";

function AddAllergyDialog(props) {
  const { onClose, open, addAllergy } = props;

  const [title, setTitle] = useState("");
  const [substance, setSubstance] = useState("");
  const [reaction, setReaction] = useState("");
  // const [notes, setNotes] = useState("")
  const [recordedDate, setRecordedDate] = useState(dayjs());
  const [onsetDate, setOnsetDate] = useState(dayjs());

  const handleClose = () => {
    onClose();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubstanceChange = (e) => {
    setSubstance(e.target.value);
  };

  const handleReactionChange = (e) => {
    setReaction(e.target.value);
  };

  // const handleNotesChange = e => {
  //     setNotes(e.target.value);
  // };

  const handleRecordedDateChange = (date) => {
    setRecordedDate(date);
  };

  const handleOnsetDateChange = (date) => {
    setOnsetDate(date);
  };

  const handleSubmit = () => {
    const newAllergy = {
      ...ALLERGY,
      id: 0,
      title: title,
      substance: substance,
      reaction: reaction,
      onset: onsetDate,
      recordedDate: recordedDate,
    };
    addAllergy(newAllergy);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle disableTypography>
        <Grid container justify="space-between">
          <Typography variant="h4" style={{ fontSize: "1.5rem" }}>
            New Allergy{" "}
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
          value={substance}
          onChange={handleSubstanceChange}
          variant="outlined"
          margin="normal"
          label="Substance"
          fullWidth
        />
        <TextField
          value={reaction}
          onChange={handleReactionChange}
          variant="outlined"
          margin="normal"
          label="Reaction"
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

        {/* <TextField value={notes} onChange={handleNotesChange} variant="outlined" margin="normal" label="Notes" fullWidth multiline rows={3} /> */}
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
const mapDispachToProps = { addAllergy };

export default connect(mapStateToProps, mapDispachToProps)(AddAllergyDialog);
