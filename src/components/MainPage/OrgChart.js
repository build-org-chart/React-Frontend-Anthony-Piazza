import React, { Component } from "react";
import OrgChart from "react-orgchart";
import styled from "styled-components";

import { getCompanyEmployees, getDepartments } from "../../actions/index.js";

import { connect } from "react-redux";

import "./OrgChart.css";

const Icon = styled.i`
  background-color: white;
  padding: 5px;
  color: #36393f;
  margin-left: 1%;
  border-radius: 5px;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const IconContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 0px;
`;

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
    }, 200);

    setTimeout(() => {
      this.props.getDepartments(this.props.company_id);
    }, 250);

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
    }, 500);
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
        <IconContainer>
          <Icon onClick={this.handleAddMember} className="fas fa-user-plus" />
          <Icon onClick={this.handleEditMember} className="fas fa-user-edit" />
          <Icon
            onClick={this.handleDeleteMember}
            className="fas fa-user-minus"
          />
          <Icon
            onClick={this.handleAddDepartment}
            className="fas fa-user-plus"
          />
        </IconContainer>

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
  { getCompanyEmployees, getDepartments }
)(Org);
