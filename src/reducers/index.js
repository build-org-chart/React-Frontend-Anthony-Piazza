import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_FAIL
} from "../actions";

const initialState = {
  user: {
    id: null,
    username: "",
    full_name: "",
    email: "",
    password: "",
    title: null,
    company_id: null,
    manager_id: null,
    department_id: null,
    account_type: null // 0 -> means this person isnt a part of a company, 1 -> this person is an admin in a company. 2 -> this person is an employee of a company
  },
  company: {
    id: null,
    name: ""
  },
  departments: [],
  employees: [],
  loggingIn: false,
  error: "",
  token: localStorage.getItem("token")
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload.token,
        user: {
          ...action.payload.user
        }
      };
    case SIGNUP_START:
      return state;
    case SIGNUP_SUCCESS:
      return state;
    case SIGNUP_FAIL:
      return state;

    case CREATE_START:
      return state;
    case CREATE_FAIL:
      return state;
    case CREATE_SUCCESS:
      return {
        ...state,
        company: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;