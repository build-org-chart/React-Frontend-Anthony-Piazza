import React, { Component } from "react";
import OrgChart from "react-orgchart";
import styled from "styled-components";

import {
  getCompanyEmployees,
  getDepartments,
  getRequests
} from "../../actions/index.js";

import { connect } from "react-redux";

import "./OrgChart.css";

const Icon = styled.i`
  color: #36393f;
  margin-left: 1%;
  :hover{
    background-color: #db6450;
    color: white;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const IconContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 0px;
  margin-right: 50px;
  background-color: white;
  border-radius: 10px;
  font-size: .9rem;
  font-weight: lighter;
  padding: 5px;
  :hover{
    cursor: pointer;
    background-color: #db6450;
    color: white;
  }
`;

const H2 = styled.h2`
  font-size: .7rem;
  :hover{
    cursor: pointer;
  }
`

const FlexDiv2 = styled.div`
  display: flex;
  justify-content: center;
`

class Org extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedNode: false,
      initechOrg: {
        department_head: "",
        department: "",
        children: []
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getCompanyEmployees(this.props.company_id);
    }, 10);

    setTimeout(() => {
      this.props.getDepartments(this.props.company_id);
    }, 10);

    setTimeout(() => {
      // console.log(this.props.employees);
      this.props.employees.map(emp => {
        if (emp.account_type === 2) {
          this.setState({
            initechOrg: {
              ...this.state.initechOrg,
              department_head: emp.full_name,
              department: emp.full_name
            }
          });
        } else {
          this.setState({
            initechOrg: {
              ...this.state.initechOrg,
              children: [
                ...this.state.initechOrg.children,
                {
                  department: emp.department_id
                    ? this.props.departments.filter(
                        dept => dept.id === emp.department_id
                      )[0].name
                    : "no department",
                  name: emp.full_name,
                  title: emp.title ? emp.title : "no title",
                  id: emp.id,
                  manager: emp.manager_id
                    ? this.props.employees.filter(
                        manager => manager.id === emp.manager_id
                      )[0].full_name
                    : "not assigned to a manager"
                }
              ]
            }
          });
        }
      });
    }, 10);

    setTimeout(() => {
      this.props.getRequests();
    }, 10);
  }

  MyNodeComponent = ({ node }) => {
    // const toggleExpand = () => {
    //   this.setState({ expandedNode: !this.state.expandedNode });
    // };
    return (
      <div className="rando">
        <div
          className={
            this.props.searchMemberID === node.id
              ? "expandedinitechNode"
              : "initechNode"
          }
          // onClick={() => toggleExpand()}
        >
          {node.department}
          <div>{node.name}</div>
          <div>{node.title}</div>
          <div>{node.manager}</div>
        </div>
      </div>
    );
  };

  handleAddMember = e => {
    // e.preventDefault();
    this.props.history.push("/addmember");
  };

  handleEditMember = e => {
    // e.preventDefault();
    this.props.history.push("/editmember");
  };

  handleDeleteMember = e => {
    // e.preventDefault();
    this.props.history.push("/deletemember");
  };

  handleAddDepartment = e => {
    this.props.history.push("/adddepartment");
  };

  render() {
    return (
      <div id="initechOrgChart">
        <FlexDiv2>
          <IconContainer onClick={this.handleAddMember}>
            <H2>Add Member</H2>
            <Icon onClick={this.handleAddMember} className="fas fa-user-plus" />
          </IconContainer>
          <IconContainer onClick={this.handleEditMember}>
            <H2>Edit Member</H2>
            <Icon onClick={this.handleEditMember} className="fas fa-user-edit" />
          </IconContainer>
          <IconContainer onClick={this.handleDeleteMember}>  
          <H2>Delete Member</H2>
            <Icon
              onClick={this.handleDeleteMember}
              className="fas fa-user-minus"
            />
          </IconContainer> 
          <IconContainer onClick={this.handleAddDepartment}> 
            <H2>Add Department</H2>  
            <Icon
              onClick={this.handleAddDepartment}
              className="fas fa-user-plus"
            />
          </IconContainer>
        </FlexDiv2>
        <OrgChart
          tree={this.state.initechOrg}
          NodeComponent={this.MyNodeComponent}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_id: state.user.company_id,
    employees: state.employees,
    departments: state.departments
  };
};

export default connect(
  mapStateToProps,
  { getCompanyEmployees, getDepartments, getRequests }
)(Org);
