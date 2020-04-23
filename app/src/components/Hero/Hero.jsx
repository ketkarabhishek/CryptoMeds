import React from 'react'
import { Typography, Button, Grid, Link, Fade, Container, Box } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { KeyboardArrowDown } from '@material-ui/icons'
import { ReactComponent as Medicine } from 'assets/medicine.svg'
import './Hero.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Hero() {
    return (
        <div className="hero-image">
            {/* <div className="hero-text"> */}
                
                {/* <Typography variant="h1" align="center" color="secondary">Crypto - Meds</Typography>
                <Typography variant="h5" align="center" gutterBottom>Electronic Health Records on Blockchain</Typography>
                <Grid container justify="center">
                    
                    <Button style={{color: "#ffffff"}} color="secondary" variant="contained">Get Started</Button>
                </Grid> */}
                
            {/* </div> */}
            <Container maxWidth="lg" style={{height: '100%'}}>
            
                <Grid container justify="center" alignItems="center" direction="row" style={{height: '100%'}}>
                    <Grid item xs={6}>
                        {/* <FontAwesomeIcon icon="dice-d20" size="9x" style={{margin: 16, textAlign: 'center', width: '100%'}}  /> */}
                        {/* <Fade in={true} timeout={1000}>
                            <Typography variant="h1" align="center" color="primary">Crypto - Meds</Typography>
                        </Fade> */}
                        <Fade in={true} timeout={1000}>
                            <Typography variant="h2" align="left" gutterBottom>Blockchain based Electronic Health Records</Typography>
                        </Fade>
                        <Button size="large" variant="outlined" color="primary">Get Started!</Button>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <Fade in={true} timeout={1000}>
                            <Medicine style={{height: 'auto', width: '100%'}} color="primary" />
                        </Fade>
                        
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Typography align="center">Learn More</Typography>
                        <Typography align="center"><KeyboardArrowDown/></Typography>
                        
                    </Grid> */}
                </Grid>

                
            </Container>
            {/* <Grid container justify="center" alignItems="center" direction="column">
                    <Typography>Learn More</Typography>
                    <KeyboardArrowDown/>
                </Grid> */}
           
        </div>
    )
}
