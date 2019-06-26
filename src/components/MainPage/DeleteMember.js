import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { history } from '../../helpers/history';

const Select = styled.select`
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    :invalid { 
        color: gray; 
    }
    :first{
        color: grey;
    }
`
const Button = styled.button`
    margin-top: 10px;
    border-radius: 10px;
    background-color: #db6450;
    color: white;
    padding: 10px;
    border: 1px solid grey;
`

const DeleteMemberPageDiv = styled.div`
    display: flex;
    height: 100vh;
    background-color: #db6450;
    color: white;
    padding-top: 20px;
`
const DeleteMemberForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 35% 0px 35%;
    width: 50%;
    background-color: white;
    height: 130px;
    padding: 25px 1% 0px 1%;
    border-radius: 10px;
`

class DeleteMember extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            company_name:''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleJoin = e => {
        // e.preventDefault();
        this.props.history.push('/home');
    };    
    render(){
        return(
            <DeleteMemberPageDiv>
                <DeleteMemberForm>
                    <Select 
                        required 
                        name='company_type' 
                        value={this.state.company_name} 
                        onChange={this.handleChange}>
                            <option value="" disabled selected>Select your Company...</option>
                            <option value="agribusiness">Agribusiness</option>
                            <option value="communications-electronics">Communications & Electronic Goods</option>
                            <option value="construction">Construction</option>
                            <option value="defense">Defense</option>
                            <option value="energy-natural-resources">Energy & Natural Resources</option>
                            <option value="finance-insurance-real-estate">Finance, Insurance, & Real Estate</option>
                            <option value="food-beverage">Food & Beverage</option>
                            <option value="health">Health</option>
                            <option value="labor">Labor</option>
                            <option value="law-lobbyists">Law & Lobbyists</option>
                            <option value="misc">Misc Business</option>
                            <option value="other">Other</option>
                            <option value="technology">Technology</option>
                            <option value="transportation">Transportation</option>
                    </Select>
                    <Button onClick={this.handleJoin}>Delete This Member</Button>
                </DeleteMemberForm>
            </DeleteMemberPageDiv>
        )
    }
}


const mapStateToProps = state => {
    return{
        error: state.error,
    }
}

export default connect(mapStateToProps, { history })(DeleteMember);