import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { history } from "../../helpers/history";

import { removeMember } from "../../actions";

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
const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #db6450;
  color: white;
  padding: 10px;
  border: 1px solid grey;
`;

const DeleteMemberPageDiv = styled.div`
  display: flex;
  height: 100vh;
  background-color: #db6450;
  color: white;
  padding-top: 20px;
`;
const DeleteMemberForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px 35% 0px 35%;
  width: 50%;
  background-color: white;
  height: 130px;
  padding: 25px 1% 0px 1%;
  border-radius: 10px;
`;

class DeleteMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRemove = e => {
    e.preventDefault();
    this.props.removeMember(this.state.id, this.props.history);
  };
  render() {
    return (
      <DeleteMemberPageDiv>
        <DeleteMemberForm>
          <Select
            required
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Select an Employee...
            </option>
            {this.props.employees.map(employee => {
              return (
                <option name="id" value={employee.id} key={employee.id}>
                  {employee.full_name}
                </option>
              );
            })}
          </Select>
          <Button onClick={this.handleRemove}>Delete This Member</Button>
        </DeleteMemberForm>
      </DeleteMemberPageDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    employees: state.employees
  };
};

export default connect(
  mapStateToProps,
  { history, removeMember }
)(DeleteMember);
