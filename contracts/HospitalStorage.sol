pragma solidity >=0.4.21 <0.7.0;

contract HospitalStorage{
    struct Hospital{
        uint id;
        address accountAddress;
        string name;
        uint[] recordIndexes;
    }
    
    uint hospitalCount = 0;
    mapping (address => bool) public isHospital;
    mapping(address => Hospital) private hospitals;
    
     modifier hospitalExist(address _address){
        require(isHospital[_address], "Hospital does not exist!");
        _;
    }
    modifier hospitalNotExist(address _address){
        require(!isHospital[_address], "Hospital already exists!");
        _;
    }
    
    function addHospital(string memory name) public hospitalNotExist(msg.sender){
        hospitalCount++;
        uint[] memory balance = new uint[](1);
        hospitals[msg.sender] = Hospital(hospitalCount, msg.sender, name, balance);
        isHospital[msg.sender] = true;
    }
    
    function getHospital(address _address) public view returns(uint, address, string memory, uint[] memory){
        return(hospitals[_address].id, hospitals[_address].accountAddress, hospitals[_address].name, hospitals[_address].recordIndexes);
    }
    
    function addHospitalRecordIndex(address _address, uint index) internal {
        hospitals[_address].recordIndexes.push(index);
    }
}