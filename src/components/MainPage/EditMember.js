import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { editEmployee } from "../../actions";
import { colors } from "../../styles";

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
class EditMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      title: "",
      //   department: "",
      password: "",
      id: null,
      manager_id: null,
      department_id: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit = e => {
    e.preventDefault();

    const updatedUser = {
      id: parseInt(this.state.id)
    };

    // for every key in
    if (this.state.username.length > 0) {
      updatedUser["username"] = this.state.username;
    }
    if (this.state.title.length > 0) {
      updatedUser["title"] = this.state.title;
    }
    if (this.state.password.length > 0) {
      updatedUser["password"] = this.state.password;
    }
    if (this.state.manager_id !== null) {
      updatedUser["manager_id"] = parseInt(this.state.manager_id);
    }

    if (this.state.department_id !== null) {
      updatedUser["department_id"] = parseInt(this.state.department_id);
    }

    // console.log(updatedUser, `and edit user with id of ${this.state.id}`);

    this.props.editEmployee(
      updatedUser,
      parseInt(this.state.id),
      this.props.history
    );
    // this.props.history.push("/home");
  };
  render() {
    return (
      <FormContainer>
        <SignUpForm>
          <Select
            required
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Select an Employee...
            </option>
            {this.props.employees
              .filter(u => u.company_id === this.props.company_id)
              .map(employee => {
                return (
                  <option name="id" value={employee.id} key={employee.id}>
                    {employee.full_name}
                  </option>
                );
              })}
          </Select>
          <Input
            placeholder="Username"
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="username"
          />
          <Input
            placeholder="Password"
            onChange={this.handleChange}
            type="text"
            value={this.state.password}
            name="password"
          />
          <Input
            placeholder="Title"
            onChange={this.handleChange}
            type="text"
            value={this.state.title}
            name="title"
          />

          <Select
            required
            name="manager_id"
            value={this.state.manager_id}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Assign a manager...
            </option>
            {this.props.employees
              .filter(u => u.company_id === this.props.company_id)
              .map(employee => {
                return (
                  <option
                    name="manager_id"
                    value={employee.id}
                    key={employee.id}
                  >
                    {employee.full_name}
                  </option>
                );
              })}
          </Select>
          {/* <Input
            placeholder="Department"
            onChange={this.handleChange}
            type="text"
            value={this.state.department}
            name="department"
          /> */}
          <Select
            required
            name="department_id"
            value={this.state.department_id}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Assign to Department...
            </option>
            {this.props.departments.map(dept => {
              return (
                <option name="department_id" value={dept.id} key={dept.id}>
                  {dept.name}
                </option>
              );
            })}
          </Select>

          <Button onClick={this.handleEdit}> Edit Member</Button>
        </SignUpForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees,
    company_id: state.user.company_id,
    departments: state.departments
  };
};
export default connect(
  mapStateToProps,
  { editEmployee }
)(EditMember);
