import React, {Component} from 'react';
import {getPic} from '../API/apiService.js'
export class Blop extends Component {
    static displayName = Blop.name;

    constructor(props) {
        super(props);
        this.state = {pic:null, loading: true,error:null};
    }
    
    
    componentDidMount() {
        getPic().then((x)=>{this.setState({pic:x[0].data})})
    }
    
    render() {
     
        if(this.state.pic==null)
        {
           return "LOADING..."
                }else{
            var dt = `data:image/png;base64, ${this.state.pic}`;
            return(<img id="ItemPreview" src ={dt} />);
        }
    }
}

             