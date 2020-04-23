import React, {useState} from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, Button, Grid, Link, IconButton, CircularProgress } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import { MetamaskConnect } from 'utils/metamask';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import Web3 from 'web3';
import {setLogin, setWeb3, setAccount, setContract} from 'redux/actions';

import downloadmetamask from 'assets/downloadmetamask.png';
import { ReactComponent as Signin } from 'assets/signin.svg';
import PatientStorage from 'contracts/PatientStorage.json';


function StartDialog(props) {
    const { onClose, open, hasMetamask, isLoggedIn, setLogin, setWeb3 } = props;

    const [loading, setloading] = useState(false)
    const handleClose = () => {
        onClose();
    };
    
  

    const handleSignInButton = async () => {
        setloading(true)
        try {
            await MetamaskConnect();
            const web3 = new Web3(window.ethereum)
            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();
            
            // // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = PatientStorage.networks[networkId];
            const instance = new web3.eth.Contract(
                PatientStorage.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // const request = await instance.methods.addPatient("46jnskdjnj46kj5bksjdbkj4b6336rge5645").send({ from: accounts[0] });
            // const response = await instance.methods.checkPatientExist().call();
            setWeb3(web3);
            setContract(instance)
            setAccount(accounts[0])
            setLogin(true);
            // console.log(accounts);
            // console.log(response);
        } catch (err) {
            if (err.code === 4001) { // EIP 1193 userRejectedRequest error
                console.log('Please connect to MetaMask.')
            } else {
                console.error(err)
            }
        }
        
        // onClose();
    }
    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
            <DialogTitle disableTypography>
                <Grid container justify="space-between">
                    <Typography variant="h6">Welcome!</Typography>
                    <IconButton size="small" onClick={handleClose}><Close /></IconButton>
                </Grid>
            </DialogTitle>

            <DialogContent>
            <Grid container alignItems="center" justify="center" direction="column">
                <Typography variant="h5" align="center" gutterBottom>You’ll need a wallet to store all your Health Records!</Typography>
                <Typography>We recommend Metamask.</Typography>
                <Link href="https://metamask.io/" target="_blank" style={{textAlign: 'center', margin: 16}}>
                    <img style={{width: "50%"}} src={downloadmetamask} alt="Download Metamask"/>
                </Link>
                {/* <img style={{width: "50%", margin: 16}} src={downloadmetamask} alt="Download Metamask"/> */}
                <Typography>This will also act as your login to the site (no extra password needed).</Typography>
                <Typography variant="caption">Currently Metamask is the only wallet supported.</Typography>
            </Grid>
               
            </DialogContent>
            {isLoggedIn && <Redirect to="/dashboard" />}
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
    hasMetamask: state.hasMetamask,
})

export default connect(mapStateToProps, {setLogin, setWeb3, setAccount, setContract})(StartDialog)
