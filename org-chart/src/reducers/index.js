import { LOGIN_START, LOGIN_SUCCESS } from '../actions';

const initialState = {
    user: {
        id: 0,
        username: 'my username',
        full_name: 'Thomas Hessburg',
        email: 'thomas.hessburg@gmail.com',
        password: 'password',
        title: null,
        company_id: null,
        manager_id: null,
        department_id: null,
        account_type: 0
    },
    company: {
        id: 100,
        name: 'Google'
    },
    departments: {
        id: 0,
        name: 'Computers',
        company_id: 100,
        department_head: null
    },
    // company_info: {

    //     employees: [
    //         {
    //             …employee1 info
    //         },
    //         {
    //             …employee2 info
    //         },
    //         {
    //             …employee3 info
    //         }
    //     ],
    
    //     departments: [
    //         {
    //             …department1 info
    //         },
    //         {
    //             …department2 info
    //         }
    //     ]
    // },
    loggingIn: false,
    error: '',
    token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return{
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loggingIn: false,
                token: action.payload
            } 
        default:
            return state;
    }
}

export default reducer;
