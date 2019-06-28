import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { editEmployee } from "../../actions";

import BGimg from "../../imgs/triangles.jpg";

const FormContainer = styled.div`
display: flex;
background-color: #36393f;
margin: 0px 35% 0px 35%;
padding: 0px 0%;
border-radius: 10px;
opacity:0.95;
`

const SignUpForm = styled.form`
display: flex;
flex-direction: column;
width: 100%;
margin: 20px 10% 0px 10%;
height: 370px;
padding: 5px 1% 2px 1%;
border-radius: 10px;
`;

const ContentDiv = styled.div`
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 260px;
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
  :hover{
    background-color: #db6450;
    color: white;
    cursor: pointer;
  }
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
    <ContentDiv>
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
    </ContentDiv>
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
