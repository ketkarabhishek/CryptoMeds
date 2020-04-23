import React, {useState, useEffect} from 'react'

import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Drawer, List, ListItem, CssBaseline, Link } from '@material-ui/core';
import {Notifications, Dashboard, LibraryBooks, Receipt, ChromeReaderMode} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

const drawerWidth = 90;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    title: {
        margin: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },

    toolbar: theme.mixins.toolbar,

    iconButton: {
        display: "flex",
        flexDirection: "column",
        margin: "10px 0",
        color: "#616161",
        // "&:hover": {
        //     backgroundColor: "#ffffff"
        // }
    },

    iconButtonHover: {
       
    },

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },

    
    selected:{
        backgroundColor: "#ffffff",
        "&:hover": {
            backgroundColor: "#ffffff"
        }
    }

}));


function BaseWrapper(props) {

    const {sign, account, contract} = props

    const [selected, setselected] = useState(0)

    const classes = useStyles();

    function handleListClick(i) {
        setselected(i);
    }

    useEffect(() => {
        async function getUserData(){
            const dataHash = await contract.methods.getPatient(account, sign.message, sign.signature).call();
            console.log(dataHash);
        }
        getUserData()
        
    }, [])

    // const listItems = ["Dashboard", "Reports", "Prescriptions"]
    return (
        
        <div className={classes.root}>
            <CssBaseline/>
            {/* <AppBar position="fixed" color="secondary" className={classes.appBar}>
                <Toolbar variant="dense">
                    <Button variant="text" color="primary" className={classes.title}><Typography variant="h6" >Crypto-Meds</Typography></Button>
                    <Typography  variant="h6">|</Typography>
                    <Button variant="text" color="inherit" className={classes.title}><Typography variant="h6">{listItems[selected]} </Typography></Button>

                    <IconButton aria-label="show 11 new notifications" color="inherit"  style={{marginLeft: 'auto', marginRight: '20px'}}>
                        <Badge badgeContent={0} color="primary">
                            <Notifications/>
                        </Badge>
                    </IconButton>
                    <Button variant="outlined">Sign Out</Button>
                </Toolbar>
            </AppBar> */}

            <Drawer variant="permanent" className={classes.drawer} classes={{ paper: classes.drawerPaper,}}>
                <div className={classes.toolbar} style={{textAlign: "center", marginTop: 15}}>
                    <FontAwesomeIcon icon="dice-d20" size="4x" />
                </div>
                <List>
                    <Link color="inherit" underline="none" component={RouterLink} to="/dashboard" onClick={e => handleListClick(0)}>
                        <ListItem button className={classes.iconButton} classes={{selected: classes.selected}} selected={selected === 0}>
                            <Dashboard/>
                            <div><Typography variant="caption">Dashboard</Typography></div>
                        </ListItem>
                    </Link>
                    
                    {/* <Link color="inherit" underline="none" component={RouterLink} to="/all">
                        <ListItem button className={classes.iconButton}>
                            <LibraryBooks/>
                            <div><Typography variant="caption">All</Typography></div>
                        </ListItem>
                    </Link> */}
                    
                    <Link color="inherit" underline="none" component={RouterLink} to="/reports" onClick={e => handleListClick(1)}>
                        <ListItem button className={classes.iconButton} selected={selected === 1}>
                            <ChromeReaderMode />
                            <div><Typography variant="caption">Reports</Typography></div>
                        </ListItem>
                    </Link>

                    <Link color="inherit" underline="none" component={RouterLink} to="/prescriptions" onClick={e => handleListClick(2)}>
                        <ListItem button className={classes.iconButton} selected={selected === 2}>
                            {/* <Receipt/> */}
                            <FontAwesomeIcon icon="file-prescription" style={{fontSize: '1.5rem'}} />
                            <div><Typography variant="caption">Prescriptions</Typography></div>
                        </ListItem>
                    </Link>

                    <Link color="inherit" underline="none" component={RouterLink} to="/allergies" onClick={e => handleListClick(3)}>
                        <ListItem button className={classes.iconButton} selected={selected === 3}>
                            <FontAwesomeIcon icon="allergies" style={{fontSize: '1.5rem'}} />
                            <div><Typography variant="caption">Allergies</Typography></div>
                        </ListItem>
                    </Link>

                    <Link color="inherit" underline="none" component={RouterLink} to="/conditions" onClick={e => handleListClick(4)}>
                        <ListItem button className={classes.iconButton} selected={selected === 4}>
                            <FontAwesomeIcon icon="stethoscope" style={{fontSize: '1.5rem'}} />
                            <div><Typography variant="caption">Conditions</Typography></div>
                        </ListItem>
                    </Link>
                    
                </List>
            </Drawer>
            
            <main className={classes.content}>
                {/* <div className={classes.toolbar}></div> */}
                {props.children}
            </main>
        </div> 
    )
}

const mapStateToProps = (state) => ({
    sign: state.sign,
    account: state.account,
    // web3: state.web3,
    contract: state.contract
  })

  export default connect(mapStateToProps)(BaseWrapper)