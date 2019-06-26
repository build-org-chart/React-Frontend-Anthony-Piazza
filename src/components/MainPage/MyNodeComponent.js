import React from 'react';

class MyNodeComponent extends React.Component{
    constructor({node}){
        super({node});
        this.state={
            expandedNode: false
        }
    }

    toggleExpandedNode() {
        this.setState({ expandedNode: !this.state.expandedNode });
    }

    render({node}){
        return (
            <div className="wrapper">
        {/* // Listening on onClick event in the following div// And toggling css classes expanded-ticket and normal-ticket accordingly */}
                <div
                    className={`row ${this.state.expandedNode ? 'expanded-ticket' : 'normal-ticket'}`}
                    onClick={this.toggleExpandedNode}
                >
                    <div className="rando">
                        <div className="initechNode" onClick={() => alert("Hi" + node.name)}>
                            { node.department }
                        </div>
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
            </div>
        )
    }
};

export default MyNodeComponent;