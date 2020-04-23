import React, {useState} from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import dayjs from 'dayjs'
import PrescriptionViewDialog from './PrescriptionViewDialog'

export default function PrescriptionItem(props) {
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
                    <Typography variant="h5" >{data.prescriber}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" gutterBottom>{dayjs(data.issueDate).format("Do MMM, YYYY")}</Typography>
                    
                    {/* <Typography variant="body2" gutterBottom>Dr. Jack Sparrow</Typography> */}
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} color="primary" size="small">View</Button>
                </CardActions>
            </Card>
            <PrescriptionViewDialog open={open} onClose={handleClose} data={data} />
        </div>
    )
}
