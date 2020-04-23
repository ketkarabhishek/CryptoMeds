import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Grid,
  Typography,
  IconButton,
  Divider,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
  DialogContentText,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { setLogin, setUser, setSign } from "redux/actions";
import dayjs from "dayjs";
import { PATIENT, RECORD } from "constants/HealthRecordModels";
import { addStringToIpfs } from "ipfs/ipfs-helper";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { MESSAGE } from "constants/SignMessage";

function SignupDialog(props) {
  const {
    onClose,
    open,
    contract,
    setLogin,
    account,
    isLoggedIn,
    web3,
    setSign,
  } = props;

  const handleClose = () => {
    onClose();
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [dob, setDob] = useState(dayjs());

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleBloodType = (e) => {
    setBloodType(e.target.value);
  };

  const handleDob = (e) => {
    setDob(e);
  };

  const handleSubmit = async () => {
    const newUser = {
      ...PATIENT,
      name: name,
      email: email,
      gender: gender,
      phone: phone,
      dateOfBirth: dob,
      bloodType: bloodType,
    };

    const newUserData = {
      ...RECORD,
      user: newUser,
    };

    try {
      const dataHash = await addStringToIpfs(JSON.stringify(newUserData));
      console.log(dataHash);
      const msgHex = web3.utils.keccak256(
        "\x19Ethereum Signed Message:\n" + MESSAGE.length + MESSAGE
      );
      const sign = await web3.eth.personal.sign(MESSAGE, account, "");
      const verified = await contract.methods
        .verifySenderSign(msgHex, sign)
        .call();
      // const rec = await web3.eth.personal.ecRecover(msgHex, sign);
      console.log(sign);
      console.log("MSGHEX: " + msgHex);
      console.log("ACCOUNT: " + account);
      console.log("VERIFIED: " + verified);
      // console.log("REC: " + rec)

      if (verified) {
        const res = await contract.methods
          .addPatient(dataHash, msgHex, sign)
          .send({ from: account });
        console.log(res);
        setUser(newUserData);
        setSign({ message: msgHex, signature: sign });
        setLogin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  // console.log(account)
  return (
    <div>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
        <DialogTitle disableTypography>
          <Grid container justify="space-between">
            <Typography variant="h5">Create Account </Typography>
            <IconButton size="small" onClick={handleClose}>
              <Close />
            </IconButton>
          </Grid>
        </DialogTitle>

        <DialogContent>
          <Divider />
          <DialogContentText></DialogContentText>
          <TextField
            variant="outlined"
            label="Your Name"
            fullWidth
            margin="normal"
            required
            value={name}
            onChange={handleName}
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            required
            value={email}
            onChange={handleEmail}
          />
          <TextField
            variant="outlined"
            label="Phone"
            fullWidth
            margin="normal"
            type="tel"
            value={phone}
            onChange={handlePhone}
          />

          <TextField
            variant="outlined"
            label="Gender"
            fullWidth
            margin="normal"
            select
            required
            value={gender}
            onChange={handleGender}
          >
            <MenuItem key="Male" value="Male">
              Male
            </MenuItem>
            <MenuItem key="Female" value="Female">
              Female
            </MenuItem>
          </TextField>

          <TextField
            variant="outlined"
            label="Blood Type"
            fullWidth
            margin="normal"
            select
            value={bloodType}
            onChange={handleBloodType}
          >
            {bloodTypes.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>

          <KeyboardDatePicker
            // variant="inline"
            format="DD/MM/YYYY"
            margin="normal"
            id="date-picker-inline"
            label="Date of Birth"
            value={dob}
            onChange={handleDob}
            fullWidth
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            inputVariant="outlined"
            disableFuture
          />
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Let's get started!
          </Button>
        </DialogActions>
      </Dialog>
      {isLoggedIn && <Redirect to="/dashboard" />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  contract: state.contract,
  account: state.account,
  web3: state.web3,
});

export default connect(mapStateToProps, { setLogin, setSign, setUser })(
  SignupDialog
);
