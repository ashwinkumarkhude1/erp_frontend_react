const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const getAllEmployeeList = async () => {
  let data = [];
  try {
    let res = await fetch(backendUrl + "/employee/get");
    data = await res.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const addEmployee = async (inputField) => {
  let data = [];
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputField),
    };

    const response = await fetch(
      backendUrl + "/employee/addEmployee",
      requestOptions
    );
    data = await response.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const deleteEmployee = async (deleteEmployee) => {
  let data = [];
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteEmployee }),
    };

    const response = await fetch(
      backendUrl + "/employee/deleteEmployee",
      requestOptions
    );
    data = await response.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const getEmployeeOfPosition = async () => {
  let data = [];
  try {
    let res = await fetch(backendUrl + "/employee/getEmployeesOfPosition/");
    data = await res.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const getEmployeeDetails = async (id) => {
  let data = [];
  try {
    let res = await fetch(backendUrl + "/employee/get/" + id);
    data = await res.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const getEmployeeHigherHierarchy = async (id) => {
  let data = [];
  try {
    let res = await fetch(
      backendUrl + "/employee/getEmployeeHigherHierarchy/" + id
    );
    data = await res.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const updateEmployee = async (inputField) => {
  let data = [];
  try {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputField),
    };

    const response = await fetch(
      backendUrl + "/employee/updateEmployee",
      requestOptions
    );
    data = await response.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data.message;
};

export const addTeam = async (inputField) => {
  let data = [];
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputField),
    };

    const response = await fetch(backendUrl + "/team/addTeam", requestOptions);
    data = await response.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const getTeamList = async () => {
  let data = [];
  try {
    let res = await fetch(backendUrl + "/team/get");
    data = await res.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const deleteTeam = async (teamId) => {
  let data = [];
  try {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: teamId }),
    };

    const response = await fetch(
      backendUrl + "/team/deleteTeam",
      requestOptions
    );
    data = await response.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const getTeamDetails = async (id) => {
  let data = [];
  try {
    let res = await fetch(backendUrl + "/team/get/" + id);
    data = await res.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data;
};

export const updateTeam = async (inputField) => {
  let data = [];
  try {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputField),
    };

    const response = await fetch(
      backendUrl + "/team/updateTeam",
      requestOptions
    );
    data = await response.json();
  } catch {
    console.log("Error while getting api call");
  }
  return data.message;
};
