import React, {Component} from 'react';

export class Blop extends Component {
    static displayName = Blop.name;

    constructor(props) {
        super(props);
        this.state = {pic:null, loading: true,error:null};
    }
    async getPic()
    {
        let rep=await fetch("https://localhost:7128/api/picture/1");
        let json= await rep.json()
        //console.log(json)
        return json
    }
    
    componentDidMount() {
        this.getPic().then((x)=>{this.setState({pic:x.data})})
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

             