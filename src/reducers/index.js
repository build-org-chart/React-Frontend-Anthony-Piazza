import {
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  CREATE_COMPANY_START,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_UPDATED_USER,
  GET_COMPANIES_SUCCESS,
  ADD_USER_TO_COMPANY_SUCCESS,
  ADD_USER_TO_COMPANY_START,
  GETTING_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  GET_DEPTS_SUCCESS
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
  companies: [],
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

    case CREATE_COMPANY_START:
      return state;
    case CREATE_COMPANY_FAIL:
      return state;
    case CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        company: {
          ...action.payload
        }
      };

    case CREATE_COMPANY_UPDATED_USER:
      return {
        ...state,
        user: {
          ...action.payload
        }
      };

    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        companies: [...action.payload]
      };

    case ADD_USER_TO_COMPANY_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload
        }
      };

    case GETTING_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: [...action.payload]
      };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map(emp => {
          if (emp.id === action.payload.id) {
            return action.payload;
          } else {
            return emp;
          }
        })
      };

    case GET_DEPTS_SUCCESS:
      return {
        ...state,
        departments: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
