import React, {useState} from 'react'
import { Container, Fab, makeStyles, Grid, Box } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { connect } from 'react-redux';
import PrescriptionItem from 'components/PrescriptionItem';
import Heading from 'components/Heading';
import AddPrescriptionDialog from './AddPrescriptionDialog';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
      },

    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

function Prescriptions(props) {
    const {prescriptions, test} = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
      }

    const classes = useStyles(props);
    return (
        <Container maxWidth="lg">
            <Grid container justify="space-between">
                <Heading text="Prescriptions" />
                <Box my={4}>
                    <Fab variant="extended" color="primary" onClick={handleOpen}>
                        <Add className={classes.extendedIcon} />
                        Add New
                    </Fab>
                </Box>
            </Grid>
            <Grid container spacing={3}>
                {prescriptions.map((value, index) => (
                    <Grid item md={3} key={index}>
                        <PrescriptionItem data={value}></PrescriptionItem>
                    </Grid>
                ))}
            </Grid>
            
            <AddPrescriptionDialog open={open} onClose={handleClose} />
        </Container>
    )
}

const mapStateToProps = (state) => ({
    prescriptions: state.userData.prescriptions,
    test: state.test
})

export default connect(mapStateToProps)(Prescriptions);