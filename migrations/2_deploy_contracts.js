// const SimpleStorage = artifacts.require("SimpleStorage");
// const TutorialToken = artifacts.require("TutorialToken");
// const ComplexStorage = artifacts.require("ComplexStorage");

const MedicalRecords = artifacts.require("MedicalRecords");
// const PatientStorage = artifacts.require("PatientStorage");


module.exports = function(deployer) {
  // deployer.deploy(SimpleStorage);
  // deployer.deploy(TutorialToken);
  // deployer.deploy(ComplexStorage);
  deployer.deploy(MedicalRecords);
};
