import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

const URLEndpoint = "http://localhost:5000";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(`${URLEndpoint}`, creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    this.props.history.push("/home");
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
