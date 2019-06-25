import { LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
  user: {
    id: 0,
    username: "my username",
    full_name: "Thomas Hessburg",
    email: "thomas.hessburg@gmail.com",
    password: "password",
    title: null,
    company_id: null,
    manager_id: null,
    department_id: null,
    account_type: 0 // 0 -> means this person isnt a part of a company, 1 -> this person is an admin in a company. 2 -> this person is an employee of a company
  },
  company: {
    id: 100,
    name: "Google"
  },
  departments: [
    {
      id: 0,
      name: "Computers",
      company_id: 100,
      department_head: null
    },
    {
      id: 1,
      name: "Toys",
      company_id: 100,
      department_head: null
    },
    {
      id: 2,
      name: "Couches",
      company_id: 100,
      department_head: null
    }
  ],
  employees: [
    {
      id: 103,
      username: "tom",
      full_name: "tom hessburg",
      email: "tom.hessburg@yahoo.com",
      title: "Janitor",
      department: "Couches",
      manager_id: 0,
      account_type: 2
    },
    {
      id: 207,
      username: "Jim",
      full_name: "Jim hessburg",
      email: "Jim.hessburg@yahoo.com",
      title: "Janitor",
      department: "Couches",
      manager_id: 103,
      account_type: 2
    }
  ],
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
        token: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
