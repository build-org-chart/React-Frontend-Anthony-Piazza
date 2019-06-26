import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const CREATE_COMPANY_START = "CREATE_COMPANY_START";
export const CREATE_COMPANY_SUCCESS = "CREATE_COMPANY_SUCCESS";
export const CREATE_COMPANY_FAIL = "CREATE_COMPANY_FAIL";
export const CREATE_COMPANY_UPDATED_USER = "CREATE_COMPANY_UPDATED_USER";

export const CREATE_DEPARTMENT_START = "CREATE_DEPARTMENT_START";
export const CREATE_DEPARTMENT_SUCCESS = "CREATE_DEPARTMENT_SUCCESS";
export const CREATE_DEPARTMENT_FAIL = "CREATE_DEPARTMENT_FAIL";

export const GET_COMPANIES_START = "GET_COMPANIES_START";
export const GET_COMPANIES_SUCCESS = "GET_COMPANIES_SUCCESS";

export const ADD_USER_TO_COMPANY_START = "ADD_USER_TO_COMPANY_START";
export const ADD_USER_TO_COMPANY_SUCCESS = "ADD_USER_TO_COMPANY_SUCCESS";

export const GETTING_EMPLOYEES_START = "GETTING_EMPLOYEES_START";
export const GETTING_EMPLOYEES_SUCCESS = "GETTING_EMPLOYEES_SUCCESS";

export const UPDATE_EMPLOYEE_START = "UPDATE_EMPLOYEE_START";
export const UPDATE_EMPLOYEE_SUCCESS = "UPDATE_EMPLOYEE_SUCCESS";

const URLEndpoint = "http://localhost:5000";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post(`${URLEndpoint}/api/login`, creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("SHEIIIIT");
    });
};

export const signUp = creds => dispatch => {
  dispatch({ type: SIGNUP_START });

  return axios
    .post(`${URLEndpoint}/api/register`, creds)
    .then(res => {
      // this.props.history.push("/user/login");
      return dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => {
      return dispatch({
        type: SIGNUP_FAIL
      });
    });
};

export const createCompany = (newCompany, userID) => dispatch => {
  dispatch({ type: CREATE_COMPANY_START });

  return axios
    .post(`${URLEndpoint}/api/companies`, newCompany)
    .then(res => {
      dispatch({ type: CREATE_COMPANY_SUCCESS, payload: res.data });
      const updatedUser = {
        company_id: res.data.id,
        id: userID,
        account_type: 2
      };

      return axios.put(`${URLEndpoint}/api/users/${userID}`, updatedUser);
    })
    .then(res => {
      return dispatch({ type: CREATE_COMPANY_UPDATED_USER, payload: res.data });
    })
    .catch(err => {
      return dispatch({
        type: CREATE_COMPANY_FAIL
      });
    });
};

export const getAllCompanies = () => dispatch => {
  dispatch({ type: GET_COMPANIES_START });

  return axios
    .get(`${URLEndpoint}/api/companies`, {
      Authorization: localStorage.getItem("token")
    })
    .then(res => {
      return dispatch({ type: GET_COMPANIES_SUCCESS, payload: res.data });
    });
};

export const addUserToCompany = (company, userID, history) => dispatch => {
  dispatch({ type: ADD_USER_TO_COMPANY_START });

  const updatedUser = {
    company_id: company.id,
    account_type: 1, // because this is an employee
    id: userID
  };

  return axios
    .put(`${URLEndpoint}/api/users/${userID}`, updatedUser)
    .then(res => {
      history.push("/home");
      return dispatch({ type: ADD_USER_TO_COMPANY_SUCCESS, payload: res.data });
    });
  // console.log("we in here bruh", company, userID);
};

export const getCompanyEmployees = company_id => dispatch => {
  dispatch({ type: GETTING_EMPLOYEES_START });

  return axios.get(`${URLEndpoint}/api/users`).then(res => {
    let employees = res.data.filter(user => user.company_id === company_id);

    dispatch({ type: GETTING_EMPLOYEES_SUCCESS, payload: employees });
  });
};

export const editEmployee = (updates, userID, history) => dispatch => {
  console.log(updates, userID);
  dispatch({ type: UPDATE_EMPLOYEE_START });

  return axios.put(`${URLEndpoint}/api/users/${userID}`, updates).then(res => {
    console.log(res);
    history.push("/home");
    return dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, payload: res.data });
  });
};

// export const createDepartment = newDepartment => dispatch => {
//   dispatch({ type: CREATE_DEPARTMENT_START });
//   console.log(newDepartment);
//   return axios
//     .post(`${URLEndpoint}/api/companies`, newDepartment)
//     .then(res => {
//       return dispatch({ type: CREATE_DEPARTMENT_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       console.log(err);
//       return dispatch({
//         type: CREATE_DEPARTMENT_FAIL
//       });
//     });
// };
