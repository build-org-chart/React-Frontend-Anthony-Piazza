import React, { Component } from 'react';

import OrgChart from 'react-orgchart';
import './OrgChart.css';

class Org extends Component {
    constructor(){
        super();
        this.state={
            initechOrg: {
                name: "Bill Lumbergh",
                actor: "Gary Cole",
                children: [
                  {
                    name: "Peter Gibbons",
                    actor: "Ron Livingston",
                    children: [
                      {
                        name: "And More!!",
                        actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
                      }
                    ]
                  },
                  {
                    name: "Milton Waddams",
                    actor: "Stephen Root"
                  },
                  {
                    name: "Bob Slydell",
                    actor: "John C. McGi..."
                  },
                ]
            }
        }
    }

    MyNodeComponent = ({node}) => {
      return (
        <div className="initechNode" onClick={() => alert("Hi" + node.actor)}>
        { node.name }
        </div>
      );
    };
    render() {
        return (
        <div id="initechOrgChart">
            <OrgChart tree={this.state.initechOrg} NodeComponent={this.MyNodeComponent} />
        </div>
        );
    }
}

export default Org;