import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'


const EmployeeList = () => {
  const [menuData, setMenuData] = useState(null); 
  const getEmployee = async () =>{
    let res =  await  fetch('http://localhost:3000/employee/get');
    let data =   await res.json();
    setMenuData(data);
    console.log("response");
    console.log(data);
    console.log(menuData);
  };
  
  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <>
      <h3>Employee list</h3>
      <Table striped bordered hover varient="dark" size="sm">
      <thead>
        <tr>
          <th width="170">First Name</th>
          <th width="170">Last Name</th>
          <th width="170">Age</th>
          <th width="170">Experience</th>
          <th width="170">Address</th>
          <th width="170">MobileNo</th>
          <th width="170">Position</th>    
        </tr>
      </thead>
      <tbody>
      {menuData && menuData.map((curElem)=>{
        const{firstName,lastName,age,experience,address,mobileNo,position} = curElem;
        console.log("curElem");
        console.log(firstName);
        return (
          <>
            <tr>
              <th>{firstName}</th>
              <th>{lastName}</th>
              <th>{age}</th>
              <th>{experience}</th>
              <th>{address}</th>
              <th>{mobileNo}</th>
              <th>{position}</th>
          </tr>
        </>
      );
        })}    
        </tbody>
      </Table>   
    </>
  );
};

export default EmployeeList;

