import React, {useState} from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import ConditionViewDialog from './ConditionViewDialog'
import dayjs from 'dayjs';

export default function ConditionItem(props) {
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
                    <Typography color="textSecondary" variant="subtitle1" >{dayjs(data.recordedDate).format("Do MMM, YYYY")}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" >{data.clinicalStatus}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={handleOpen} color="primary" size="small">View</Button>
                </CardActions>
            </Card>
            <ConditionViewDialog open={open} onClose={handleClose} data={data}></ConditionViewDialog>
        </div>
    )
}
