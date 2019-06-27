import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { createDepartment } from "../../actions";

const FormContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #db6450;
  color: white;
  padding-top: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
  :invalid {
    color: gray;
  }
  :first {
    color: grey;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 35% 0px 35%;
  width: 50%;
  background-color: white;
  height: 450px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #db6450;
  color: white;
  padding: 10px;
`;
class AddDepartment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      id: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newDept = {
      company_id: this.props.company_id,
      department_head: parseInt(this.state.id),
      name: this.state.department
    };

    this.props.createDepartment(newDept, this.props.history);
  };
  render() {
    return (
      <FormContainer>
        <SignUpForm>
          <Input
            placeholder="Department"
            onChange={this.handleChange}
            type="text"
            value={this.state.department}
            name="department"
          />

          <Select
            required
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Select an Department Head...
            </option>
            {this.props.employees.map(employee => {
              return (
                <option name="id" value={employee.id} key={employee.id}>
                  {employee.full_name}
                </option>
              );
            })}
          </Select>

          <Button onClick={this.handleSubmit}>Name Your Department</Button>
        </SignUpForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees,
    company_id: state.user.company_id
  };
};
export default connect(
  mapStateToProps,
  { createDepartment }
)(AddDepartment);
