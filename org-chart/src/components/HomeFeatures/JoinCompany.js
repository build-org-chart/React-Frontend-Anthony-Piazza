import React from 'react';
import styled from 'styled-components';

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

const JoinCompanyForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 35% 0px 35%;
    width: 30%;
    background-color: white;
    height: 120px;
    padding: 25px 1% 0px 1%;
    border-radius: 10px;
`

const JoinCompany = props => {
    return(
        <JoinCompanyForm>
            <Select 
                required 
                name='company_type' 
                value={props.company} 
                onChange={props.handleChange}>
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
            <Button>View My Company Chart</Button>
        </JoinCompanyForm>
    )
}

export default JoinCompany;