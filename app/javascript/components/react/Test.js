import React from "react"

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: props.greeting,
            admin_users: props.admin_users,
            name: props.name,
            name2: props.name2
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.greeting}</div>
                <div>22{this.state.name}</div>
                <div>222{this.state.name2}</div>
                <div>22323{this.state.admin_users}</div>
            </div>
        );
    }
}

export default Test
