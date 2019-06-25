import axios from 'axios';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://steemly-org-chart.herokuapp.com/', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})    
            this.props.history.push('/home');
        })
}