import React, {Component} from 'react';

export class Blop extends Component {
    static displayName = Blop.name;

    constructor(props) {
        super(props);
        this.state = {picData: [], loading: true};
    }

    componentDidMount() {
        const url = "https://localhost:7128/api/client/1";

        this.setState({
            picData:
        });


    }

    render() {
        return (
           this.state.picData
            // <img
            //     id="omar"
            //     src=v
            //     alt="omar"></img>
        );
    }
}

             