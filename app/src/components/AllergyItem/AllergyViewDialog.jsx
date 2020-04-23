import React from 'react'
import { Dialog, DialogTitle, Grid, Typography, IconButton, DialogContent, Box, Divider } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import dayjs from 'dayjs';
// import DownloadFile from 'components/DownloadFile';

export default function AllergyViewDialog(props) {
    const { onClose, open, data} = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
            <DialogTitle disableTypography>
                <Grid container justify="space-between">
                    <Typography variant="h5">{data.title} </Typography>
                    <IconButton size="small" onClick={handleClose}><Close /></IconButton>
                </Grid>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Box mt={1}>
                    <Typography color="primary">Substance</Typography>
                    <Typography variant="body1" style={{fontSize: "1.2rem"}}>{data.substance} </Typography>
                </Box>
                <Box mt={1}>
                    <Typography color="primary">Reaction</Typography>
                    <Typography variant="body1" style={{fontSize: "1.2rem"}}>{data.reaction} </Typography>
                </Box>
                <Box mt={1}>
                    <Typography color="primary">Onset</Typography>
                    <Typography variant="body1" style={{fontSize: "1.2rem"}}>{dayjs(data.onset).format("Do MMM, YYYY")} </Typography>
                </Box>
                <Box mt={1}>
                    <Typography color="primary">Recorded on</Typography>
                    <Typography variant="body1" style={{fontSize: "1.2rem"}}>{dayjs(data.recordedDate).format("Do MMM, YYYY")} </Typography>
                </Box>
               
                {/* <Box mt={1}>
                    <Typography color="primary">Notes</Typography>
                    <Typography variant="body1" style={{fontSize: "1.2rem"}}>
                        {data.notes}
                    </Typography>
                </Box> */}
               
            </DialogContent>
        </Dialog>
    )
}
