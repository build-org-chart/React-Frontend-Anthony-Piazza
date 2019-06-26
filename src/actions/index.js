import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAIL = "CREATE_FAIL";

const URLEndpoint = "http://localhost:5000";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post(`${URLEndpoint}/api/login`, creds)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("SHEIIIIT");
    });
};

export const signUp = creds => dispatch => {
  console.log(creds);
  dispatch({ type: SIGNUP_START });

  return axios
    .post(`${URLEndpoint}/api/register`, creds)
    .then(res => {
      console.log(res.data);
      // this.props.history.push("/user/login");
      return dispatch({ type: SIGNUP_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      return dispatch({
        type: SIGNUP_FAIL
      });
    });
};

export const createCompany = newCompany => dispatch => {
  dispatch({ type: CREATE_START });
  console.log(newCompany);
  return axios
    .post(`${URLEndpoint}/api/companies`, newCompany)
    .then(res => {
      return dispatch({ type: CREATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      return dispatch({
        type: CREATE_FAIL
      });
    });
};
