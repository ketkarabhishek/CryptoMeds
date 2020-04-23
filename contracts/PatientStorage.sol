pragma solidity >=0.4.21 <0.7.0;

contract PatientStorage{
    struct Patient{
        uint id;
        address accountAddress;
        string dataHash;
    }
    
    uint patientCount = 0;
    
    mapping (address => bool) public isPatient;
    mapping(address => Patient) private patients;
    
    
    modifier patientExist(address _address){
        require(isPatient[_address], "Patient does not exist!");
        _;
    }
    modifier patientNotExist(address _address){
        require(!isPatient[_address], "Patient already exists!");
        _;
    }

    function checkPatientExist() public view returns(bool){
        return isPatient[msg.sender];
    }
    
    function addPatient(string memory _dataHash) public patientNotExist(msg.sender){
        patientCount++;
        patients[msg.sender] = Patient(patientCount, msg.sender, _dataHash);
        isPatient[msg.sender] = true;
    }
    
    function getPatient(address _address) public view returns(string memory){
        require(msg.sender == _address, "Access Denied!");
        return(patients[_address].dataHash);
    }
    
    function updatePatientRecords(address _address, string memory _dataHash) internal {
        patients[_address].dataHash = _dataHash;
    }
    
}