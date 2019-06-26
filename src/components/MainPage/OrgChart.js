import React, { Component } from 'react';
import OrgChart from 'react-orgchart';
import styled from 'styled-components';


import './OrgChart.css';



const Icon = styled.i`
  background-color: white;
  padding: 5px;
  color: #36393f;
  margin-left: 1%;
  border-radius: 5px;
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const IconContainer = styled.div`
  margin-bottom: 30px;
  margin-top: 0px;
`

class Org extends Component {
    constructor(){
      super();
      this.state={
        expandedNode: false,
        initechOrg: {
          department_head: "Bill Lumbergh",
          department: "HR & Communications",
          children: [
            {
              manager: "Peter Gibbons",
              title: "Manager",
              children: [
                {
                  name: "Jon Snow",
                  title: "Employee"
                }
              ]
            },
            {
              manager: "Milton Waddams",
              title: "Manager",
              children: [
                {
                  name: "Danaerys Targaryen",
                  title: "Employee"
                }
              ]
            },
            {
              manager: "Bob Slydell",
              children: [
                {
                  name: "Bran Stark",
                  title: "Employee"
                }
              ]
            },
          ]
        }
      }
    }

    MyNodeComponent = ({node}) => {
      const toggleExpand = () => {
        this.setState({ expandedNode: !this.state.expandedNode });
      }
      return (
        <div className="rando">
          <div className={this.state.expandedNode ? 'expandedinitechNode' : 'initechNode'} onClick={() => toggleExpand()}>
            { node.department }
            <div>
              {node.name}
            </div>  
            <div>
              {node.title}
            </div>  
            <div>
              {node.manager}
            </div>
          </div>
        </div>
      );
    };

    handleAddMember = e => {
      // e.preventDefault();
      this.props.history.push("/addmember");
    }
    
    handleEditMember = e => {
      // e.preventDefault();
      this.props.history.push("/editmember");
    }

    handleDeleteMember = e => {
      // e.preventDefault();
      this.props.history.push("/deletemember");
    }

    render() {
        return (
        <div id="initechOrgChart">
            <IconContainer>
              
              <Icon onClick={this.handleAddMember} className="fas fa-user-plus"></Icon>
              <Icon onClick={this.handleEditMember} className="fas fa-user-edit"></Icon>
              <Icon onClick={this.handleDeleteMember} className="fas fa-user-minus"></Icon>
            </IconContainer>
            <OrgChart tree={this.state.initechOrg} NodeComponent={this.MyNodeComponent} />
        </div>
        );
    }
}

export default Org;