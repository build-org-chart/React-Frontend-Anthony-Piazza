import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin-top: 10px;
    border-radius: 10px;
    background-color: #db6450;
    color: white;
    padding: 10px;
    border: 1px solid grey;
`
const CreateCompanyForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px 35% 0px 35%;
    width: 30%;
    background-color: white;
    height: 120px;
    padding: 25px 1% 0px 1%;
    border-radius: 10px;
`
const Input = styled.input`
    padding: 11px 10px 11px 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid grey;
`

const CreateCompany = () => {
    return(
        <CreateCompanyForm>
            <Input
                type="text"
                name="company"
                value=""
                onChange=""
                placeholder="Company Name"
            />
            <Button>
                Create My Company Chart
            </Button>
        </CreateCompanyForm>
    )
}

export default CreateCompany;