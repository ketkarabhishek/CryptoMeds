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
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { DropzoneArea } from "material-ui-dropzone";
import dayjs from "dayjs";
import { addPrescription, testAction } from "redux/actions";
import { connect } from "react-redux";
import { addToIpfs } from "ipfs/ipfs-helper";
import { PRESCRIPTION } from "constants/HealthRecordModels";

function AddPrescriptionDialog(props) {
  const { onClose, open, addPrescription, test, testAction, userData } = props;

  const [prescriber, setPrescriber] = useState("");
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [files, setFiles] = useState([]);

  const handleClose = () => {
    onClose();
  };

  const handlePrescriberChange = (e) => {
    setPrescriber(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFilesChange = (files) => {
    setFiles(files);
    console.log(files);
  };

  const handleSubmit = async () => {
    const hashes = await addToIpfs(files);
    console.log(hashes);

    const newPrescription = {
      ...PRESCRIPTION,
      id: hashes[0],
      issueDate: selectedDate,
      prescriber: prescriber,
      fileHash: hashes,
    };
    addPrescription(newPrescription);
    // const newUserData = {
    //     ...userData,
    //     ...userData.prescriptions.push(newPrescription)
    // }
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle disableTypography>
        <Grid container justify="space-between">
          <Typography variant="h5">New Prescription </Typography>
          <IconButton size="small" onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <TextField
          value={prescriber}
          onChange={handlePrescriberChange}
          label="Prescriber"
          fullWidth
        />
        <KeyboardDatePicker
          // variant="inline"
          format="DD/MM/YYYY"
          margin="normal"
          id="date-picker-inline"
          label="Issued Date"
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <DropzoneArea
          acceptedFiles={["image/*", "application/pdf"]}
          showPreviews
          showPreviewsInDropzone={false}
          onChange={handleFilesChange}
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
  test: state.test,
  userData: state.userData,
});
const mapDispachToProps = { addPrescription, testAction };

export default connect(
  mapStateToProps,
  mapDispachToProps
)(AddPrescriptionDialog);
