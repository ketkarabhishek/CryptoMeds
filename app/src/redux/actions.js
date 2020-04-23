import {
  SET_LOGIN,
  SET_WEB3,
  SET_CONTRACT,
  SET_ACCOUNT,
  SET_USER,
  SET_SIGN,
  ADD_PRESCRIPTION,
  ADD_REPORT,
  ADD_ALLERGY,
  ADD_CONDITION,
  TEST_ACTION,
} from "./actionTypes";

export const setLogin = (isLoggedIn) => ({
  type: SET_LOGIN,
  payload: isLoggedIn,
});

export const setWeb3 = (web3) => ({
  type: SET_WEB3,
  payload: web3,
});

export const setContract = (contract) => ({
  type: SET_CONTRACT,
  payload: contract,
});

export const setAccount = (account) => ({
  type: SET_ACCOUNT,
  payload: account,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setSign = (sign) => ({
  type: SET_SIGN,
  payload: sign,
});

export const addPrescription = (prescription) => ({
  type: ADD_PRESCRIPTION,
  payload: prescription,
});

export const addReport = (report) => ({
  type: ADD_REPORT,
  payload: report,
});

export const addAllergy = (allergy) => ({
  type: ADD_ALLERGY,
  payload: allergy,
});

export const addCondition = (condition) => ({
  type: ADD_CONDITION,
  payload: condition,
});

export const testAction = () => ({
  type: TEST_ACTION,
});
