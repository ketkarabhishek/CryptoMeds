import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button } from '@material-ui/core';
import StartDialog from './StartDialog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignupDialog from 'components/SignupDialog/SignupDialog';
import { connect } from 'react-redux';
import { MetamaskConnect } from 'utils/metamask';
import MedicalRecords from 'contracts/MedicalRecords.json';
import {setLogin, setWeb3, setAccount, setContract, setSign} from 'redux/actions';
import Web3 from 'web3';
import { Redirect } from 'react-router';
import { MESSAGE } from 'constants/SignMessage';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0,
  });
}

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

function ElevateAppBar(props) {
  const{hasMetamask, isLoggedIn, setLogin, setWeb3, setContract, setAccount, setSign} = props;

  const [metamaskOpen, setMetamaskOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleMetamaskOpen = () => {
    setMetamaskOpen(true);
  }

  const handleMetamaskClose = () => {
    setMetamaskOpen(false);
  }

  const handleSignupOpen = () => {
    setSignupOpen(true);
  }

  const handleSignupClose = () => {
    setSignupOpen(false);
  }

  const handleSignin = async () => {
    // setloading(true)
    try {
        await MetamaskConnect();
        const web3 = new Web3(window.ethereum)

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        
        // // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = MedicalRecords.networks[networkId];
        const instance = new web3.eth.Contract(
            MedicalRecords.abi,
            deployedNetwork && deployedNetwork.address,
        );

        //Set Redux state
        setWeb3(web3);
        setContract(instance)
        setAccount(accounts[0])
        
        // const request = await instance.methods.addPatient("46jnskdjnj46kj5bksjdbkj4b6336rge5645").send({ from: accounts[0] });
        // const rec = await web3.eth.personal.ecRecover("Hello", sign);
        const userExists = await instance.methods.checkPatientExist().call();
        if(userExists){
          const msgHex = web3.utils.keccak256("\x19Ethereum Signed Message:\n" + MESSAGE.length + MESSAGE);
          const sign = await web3.eth.personal.sign(MESSAGE, accounts[0], "")
          const verified = await instance.methods.verifySenderSign(msgHex, sign).call()
          console.log("VERIFIED: " + verified)
          if(verified){
            setSign({message: msgHex, signature: sign})
            setLogin(true);
          }
          
        }
        else{
          handleSignupOpen();
        }
        
        // console.log(accounts);
        console.log(userExists);
    } catch (err) {
        if (err.code === 4001) { // EIP 1193 userRejectedRequest error
            console.log('Please connect to MetaMask.')
        } else {
            console.error(err)
        }
    }
    
    // onClose();
}

  const handleStartButton = () => {
    if(!hasMetamask){
      handleMetamaskOpen();
    }
    else{
      handleSignin()
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="secondary">
          <Toolbar>
            <FontAwesomeIcon icon="dice-d20" size="3x" style={{margin: 16}}  />
            {/* <Typography color="primary" variant="h5">Crypto-Meds</Typography> */}
            <div style={{marginLeft: 'auto',}}>
                <Button style={{margin: '0 16px'}}>About</Button>
                <Button color="primary" variant="contained" onClick={handleStartButton}>Start</Button>
            </div>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />

      <StartDialog open={metamaskOpen} onClose={handleMetamaskClose} />
      <SignupDialog open={signupOpen} onClose={handleSignupClose} />
      {isLoggedIn && <Redirect to="/dashboard" />}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  hasMetamask: state.hasMetamask,
})

export default connect(mapStateToProps, {setLogin, setWeb3, setAccount, setContract, setSign})(ElevateAppBar)