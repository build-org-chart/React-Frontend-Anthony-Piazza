import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { history } from "../../helpers/history";

import { removeMember } from "../../actions";

import BGimg from "../../imgs/triangles.jpg";

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
  :hover{
    background-color: #db6450;
    color: white;
    cursor: pointer;
  }
`;

const DeleteMemberPageDiv = styled.div`
  display: flex;
  background-color: #36393f;
  margin: 0px 35% 0px 35%;
  padding: 0px 0%;
  border-radius: 10px;
  opacity:0.95;
`

const DeleteMemberForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 10% 0px 10%;
  height: 130px;
  padding: 5px 1% 2px 1%;
  border-radius: 10px;
`;

const ContentDiv = styled.div`
  height: 100vh;
  background-image: url(${BGimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  padding-top: 300px;
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
      <ContentDiv>
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
      </ContentDiv>
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
