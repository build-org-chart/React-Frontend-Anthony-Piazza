import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { createCompany } from "../../actions/index.js";

import { history } from "../../helpers/history";

const Button = styled.button`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #36393f;
  color: white;
  padding: 10px;
  border: 1px solid white;
  :hover{
    background-color: #db6450;
    color: white;
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  display: flex;
`;

const CreateCompanyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 10% 0px 10%;
  height: 110px;
  padding: 7px 1% 0px 1%;
  border-radius: 10px;
`;
const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid grey;
`;

class CreateCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = e => {
    e.preventDefault();
    // console.log(this.state.company_name);
    this.props.createCompany(this.state, this.props.userID);
    // // this.setState({ company_name: this.state.company_name });
    // this.props.history.push("/home");
  };
  render() {
    return (
      <FormContainer>
        <CreateCompanyForm>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Company Name"
          />
          <Button onClick={this.handleCreate}>Create My Company Chart</Button>
        </CreateCompanyForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    userID: state.user.id
  };
};

export default connect(
  mapStateToProps,
  { history, createCompany }
)(CreateCompany);


// @-webkit-keyframes tracking-in-expand{
//   0%{
//     letter-spacing:-.5em;
//     opacity:0;
//   }
//   40%{
//     opacity:.6;
//   }
//   100%{
//     opacity:1;
//   }
// }
// @keyframes tracking-in-expand{
//   0%{
//     letter-spacing:-.5em;
//     opacity:0;
//   }
//   40%{
//     opacity:.6;
//   }
//   100%{
//     opacity:1;
//   }
// }
// @-webkit-keyframes tracking-out-contract{
//   0%{
//     opacity:1;
//   }
//   50%{
//     opacity:1;
//   }
//   100%{
//     letter-spacing:-.5em;
//     opacity:0;
//   }
// }
// @keyframes tracking-out-contract{
//   0%{
//     opacity:1;
//   }
//   50%{
//     opacity:1;
//   }
//   100%{
//     letter-spacing:-.5em;
//     opacity:0;
//   }
// }