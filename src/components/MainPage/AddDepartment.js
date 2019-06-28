import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { createDepartment } from "../../actions";

import BGimg from "../../imgs/triangles.jpg";

const FormContainer = styled.div`
  display: flex;
  background-color: #36393f;
  margin: 0px 35% 0px 35%;
  padding: 0px 0%;
  border-radius: 10px;
  opacity:0.95;
`

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
  width: 100%;
  margin: 20px 10% 0px 10%;
  height: 160px;
  padding: 5px 1% 2px 1%;
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

const ContentDiv = styled.div`
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 280px;
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
      <ContentDiv>
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
      </ContentDiv>
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
