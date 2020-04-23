pragma solidity >=0.4.21 <0.7.0;

import "../node_modules/@openzeppelin/contracts/access/Roles.sol";
import "../node_modules/@openzeppelin/contracts/cryptography/ECDSA.sol";

contract MedicalRecords{
    using Roles for Roles.Role;
    using ECDSA for bytes32;

    Roles.Role private _patient;
    Roles.Role private _hospital;
    
    function verifySenderSign(bytes32 data, bytes memory signature) public view returns(bool){
        return data.recover(signature) == msg.sender;
    }
    
    //Patients
    struct Patient{
        uint id;
        address accountAddress;
        string dataHash;
    }
    
    uint patientCount = 0;

    mapping(address => Patient) private patients;
    
    function checkPatientExist() public view returns(bool){
        return _patient.has(msg.sender);
    }
    
    
    function addPatient(string memory _dataHash, bytes32 hash, bytes memory signature) public{
        require(!_patient.has(msg.sender), "IS_A_PATIENT");
        require(hash.recover(signature) == msg.sender, "UNAUTHORISED_REQUEST");
        
        patientCount++;
        patients[msg.sender] = Patient(patientCount, msg.sender, _dataHash);
        _patient.add(msg.sender);
    }
    
    function getPatient(address _address, bytes32 hash, bytes memory signature) public view returns(string memory){
        require(_patient.has(msg.sender), "NOT_A_PATIENT");
        require(hash.recover(signature) == _address, "UNAUTHORISED_REQUEST");
        return(patients[_address].dataHash);
    }
    
}