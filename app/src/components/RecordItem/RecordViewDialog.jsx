import React from "react";
import {
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  IconButton,
  DialogContent,
  Box,
  Divider,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import dayjs from "dayjs";
import DownloadFile from "components/DownloadFile";

export default function RecordViewDialog(props) {
  const { onClose, open, data } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle disableTypography>
        <Grid container justify="space-between">
          <Typography variant="h5">{data.title} </Typography>
          <IconButton size="small" onClick={handleClose}>
            <Close />
          </IconButton>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box mt={1}>
          <Typography color="primary">Performed at</Typography>
          <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
            {data.performer}{" "}
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography color="primary">Prescribed By</Typography>
          <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
            {data.prescriber}{" "}
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography color="primary">Issued on</Typography>
          <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
            {dayjs(data.issueDate).format("Do MMM, YYYY")}{" "}
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography color="primary">Notes</Typography>
          <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
            {data.notes}
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography color="primary" gutterBottom>
            Files
          </Typography>
          {data.fileHashes.map((value, index) => (
            <DownloadFile hash={value} key={index} />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
