import React, {useState} from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import RecordViewDialog from './RecordViewDialog'
import dayjs from 'dayjs';

export default function RecordItem(props) {
    const {data} = props;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
      }
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5" >{data.title}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" gutterBottom>{dayjs(data.issueDate).format("Do MMM, YYYY")}</Typography>
                    
                    {/* <Typography variant="body2" gutterBottom>Dr. Jack Sparrow</Typography> */}
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} color="primary" size="small">View</Button>
                </CardActions>
            </Card>
            <RecordViewDialog open={open} onClose={handleClose} data={data}></RecordViewDialog>
        </div>
    )
}
