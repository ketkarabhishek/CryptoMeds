import React from 'react';
import { Typography, Container, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PatientProfile from 'components/PatientProfile';
import LatestReports from 'components/LatestReports';
// import {ReactComponent as Profile} from '../assets/profile.svg';

const useStyles = makeStyles(theme => ({
   
    divider: {
        backgroundColor: theme.palette.primary.main,
        height: '3px',
        width: 100,
    }
  }));


  

export default function Dashboard() {
    
    const classes = useStyles();

    const Heading = ({text}) => (
        <Box my={4}>
            <Typography variant="h4" gutterBottom>{text} </Typography>
            <Divider className={classes.divider} />
        </Box>
      )
    return (

        <div>
           <Container maxWidth="lg">
                {/* <Box mb={4}>
                   <Typography variant="h4" gutterBottom>Welcome!</Typography>
                   <Divider className={classes.divider} />
                </Box>
                <Box mb={4}>
                   <Typography variant="h4" gutterBottom>Welcome!</Typography>
                   <Divider className={classes.divider} />
                </Box> */}

                <Heading text="Welcome!" />
                <PatientProfile/>
                <Heading text="Latest Records" />
                <LatestReports/>

           </Container>
        </div>
    )
}
