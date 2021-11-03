const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllEmployeeList = async () => {
  let res = await fetch(backendUrl + "/employee/get");
  let data = await res.json();
  return data;
};

export const addEmployee = async (inputField) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputField),
  };

  const response = await fetch(
    backendUrl + "/employee/addEmployee",
    requestOptions
  );
  const data = await response.json();
  return data.message;
};

export const deleteEmployee = async (deleteEmployee) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: deleteEmployee }),
  };

  const response = await fetch(
    backendUrl + "/employee/deleteEmployee",
    requestOptions
  );
  const data = await response.json();
  return data;
};

export const getEmployeeOfPosition = async () => {
  let res = await fetch(backendUrl + "/employee/getEmployeesOfPosition/");
  let data = await res.json();
  return data;
};

export const getEmployeeDetails = async (id) => {
  let res = await fetch(backendUrl + "/employee/get/" + id);
  let data = await res.json();
  return data;
};

export const getEmployeeHigherHierarchy = async (id) => {
  let res = await fetch(
    backendUrl + "/employee/getEmployeeHigherHierarchy/" + id
  );
  let data = await res.json();
  return data;
};

export const updateEmployee = async (inputField) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputField),
  };

  const response = await fetch(
    backendUrl + "/employee/updateEmployee",
    requestOptions
  );
  const data = await response.json();
  return data.message;
};

export const addTeam = async (inputField) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputField),
  };

  const response = await fetch(backendUrl + "/team/addTeam", requestOptions);
  const data = await response.json();
  return data.message;
};

export const getTeamList = async () => {
  let res = await fetch(backendUrl + "/team/get");
  let data = await res.json();
  return data;
};

export const deleteTeam = async (teamId) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: teamId }),
  };

  const response = await fetch(backendUrl + "/team/deleteTeam", requestOptions);
  const data = await response.json();
  return data;
};

export const getTeamDetails = async (id) => {
  let res = await fetch(backendUrl + "/team/get/" + id);
  let data = await res.json();
  return data;
};

export const updateTeam = async (inputField) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inputField),
  };

  const response = await fetch(backendUrl + "/team/updateTeam", requestOptions);
  const data = await response.json();
  return data.message;
};
