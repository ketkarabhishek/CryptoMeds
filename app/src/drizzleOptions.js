// import Web3 from "web3";
// import SimpleStorage from "./contracts/SimpleStorage.json";
// import ComplexStorage from "./contracts/ComplexStorage.json";
// import TutorialToken from "./contracts/TutorialToken.json";
import MedicalRecords from "./contracts/MedicalRecords.json";


const getoptions = {
  web3: {
    block: false,
    // customProvider: new Web3("ws://localhost:7545"),
    fallback: {
      // type: 'ws',
      // url: 'ws://127.0.0.1:7545'
    }
  },
  contracts: [MedicalRecords],
  events: {
    // SimpleStorage: ["StorageSet"],
    // Records: ["StorageSet"],
  },
  polls: {
    accounts: 1500,
  },
}

export default getoptions;
