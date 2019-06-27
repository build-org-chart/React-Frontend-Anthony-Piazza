import React, { useState } from "react";
import Org from "./OrgChart";
import styled from "styled-components";
import CompanyPage from "../Login-SignUp/CompanyPage.js";
import { connect } from "react-redux";
import { sendRequest } from "../../actions";
import { colors } from "../../styles";

const HomePageDiv = styled.div`
  height: 100vh;
  background-color: #db6450;
  color: white;
  padding-top: 80px;
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

const RequestsBar = styled.div`
  margin: 30px auto;
  background: white;
  width: 95%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  padding: 16px;
  color: black;
`;

const SingleRequest = styled.div`
  padding: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  span {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const HomePage = props => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [recipient_id, setRecipient_id] = useState(null);

  return (
    <HomePageDiv>
      {props.account_type === 0 ? (
        <CompanyPage />
      ) : (
        <Org
          searchMemberID={props.searchMemberID}
          userSearch={props.userSearch}
          history={props.history}
        />
      )}
      <RequestsBar>
        <h3>Requests</h3>
        <hr />

        {props.requests.map(request => {
          // placeholder for an employee whos request id matches their id,
          // this is the person who sent the request
          let sendingEmp = { full_name: "" };
          // map over ther employees, and see who to set as sendingEmp
          props.employees.map(emp => {
            if (emp.id === request.sender_id) {
              sendingEmp = emp;
            }
          });

          return (
            <SingleRequest>
              <h4>
                {request.subject}
                <span> sent from {sendingEmp.full_name}</span>
              </h4>

              <p>{request.content}</p>
            </SingleRequest>
          );
        })}
      </RequestsBar>

      <RequestsBar>
        <h3>Send A Request</h3>
        <hr />

        <label>subject</label>
        <input
          type="text"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <label>content</label>
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Select
          required
          name="id"
          value={recipient_id}
          onChange={e => {
            setRecipient_id(parseInt(e.target.value));
            console.log(recipient_id);
          }}
        >
          <option value="" disabled selected>
            Select an Employee...
          </option>
          {props.employees.map(employee => {
            return (
              <option name="id" value={employee.id} key={employee.id}>
                {employee.full_name}
              </option>
            );
          })}
        </Select>
        <button
          onClick={e => {
            e.preventDefault();
            const newRequest = {
              sender_id: props.id,
              recipient_id: recipient_id,
              content: content,
              subject: subject
            };
            setContent("");
            setSubject("");
            setRecipient_id(null);
            // console.log(newRequest);
            props.sendRequest(newRequest);
          }}
        >
          SEND ITTTTT
        </button>
      </RequestsBar>
    </HomePageDiv>
  );
};

const mapStateToProps = state => {
  return {
    account_type: state.user.account_type,
    requests: state.requests,
    employees: state.employees,
    id: state.user.id
  };
};

export default connect(
  mapStateToProps,
  { sendRequest }
)(HomePage);
