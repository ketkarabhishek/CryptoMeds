import React, {useState} from 'react'
import { Dialog, DialogTitle, Grid, IconButton, Typography, Divider, DialogContent, TextField, DialogActions, Button, Box } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import { KeyboardDatePicker } from '@material-ui/pickers'
import {DropzoneArea} from 'material-ui-dropzone'
import dayjs from 'dayjs';
import {addReport} from 'redux/actions'
import { connect } from 'react-redux';
import { addToIpfs } from 'ipfs/ipfs-helper';
import { LAB_REPORT } from 'constants/HealthRecordModels';

function AddReportDialog(props) {
    const { onClose, open, addReport, userData} = props;

    const [title, setTitle] = useState("")
    const [prescriber, setPrescriber] = useState("")
    const [performer, setPerformer] = useState("")
    const [notes, setNotes] = useState("")
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const [files, setFiles] = useState([])

    const handleClose = () => {
        onClose();
    };

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handlePrescriberChange = e => {
        setPrescriber(e.target.value);
    };

    const handlePerformerChange = e => {
        setPerformer(e.target.value);
    };

    const handleNotesChange = e => {
        setNotes(e.target.value);
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleFilesChange = files => {
        setFiles(files);
        console.log(files)
    };

    const handleSubmit = async () => {
        const hashes = await addToIpfs(files)
        console.log(hashes)
       
        const newReport = {
            ...LAB_REPORT,
            id: hashes[0],
            title: title,
            issueDate: selectedDate,
            prescriber: prescriber,
            performer: performer,
            notes: notes,
            fileHashes: hashes,
        }
        addReport(newReport)
        // const newUserData = {
        //     ...userData,
        //     ...userData.prescriptions.push(newReport)
        // }
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
             <DialogTitle disableTypography>
                <Grid container justify="space-between">
                    <Typography variant="h4" style={{fontSize: '1.5rem'}}>New Report </Typography>
                    <IconButton size="small" onClick={handleClose}><Close /></IconButton>
                </Grid>
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <TextField value={title} onChange={handleTitleChange} variant="outlined" margin="normal" label="Title" fullWidth/>
                <TextField value={prescriber} onChange={handlePrescriberChange} variant="outlined" margin="normal" label="Prescriber" fullWidth/>
                <TextField value={performer} onChange={handlePerformerChange} variant="outlined" margin="normal" label="Performer" fullWidth/>
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
                        'aria-label': 'change date',
                    }}
                    inputVariant="outlined"
                    disableFuture
                />

                <TextField value={notes} onChange={handleNotesChange} variant="outlined" margin="normal" label="Notes" fullWidth multiline rows={3} />

                <Box mt={1}>
                <DropzoneArea
                 acceptedFiles={["image/*", "application/pdf"]} 
                 showPreviews
                //  showAlerts={false}
                 showFileNames={false}
                 showPreviewsInDropzone={false}
                 onChange={handleFilesChange}
                 dropzoneText="Drag and drop or click here to add files."
                />
                </Box>
                
                
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    userData: state.userData
})
const mapDispachToProps = {addReport}

export default connect(mapStateToProps, mapDispachToProps)(AddReportDialog)