import React,{Component} from   'react';
import axios from 'axios';
import { Grid } from '../../components/grid/grid.component';


export default class NoticiasPages extends Component{
    constructor(props){
        super(props);
        this.state= {data:[],keys:[],banners:[]};
    }

    componentDidMount(){
        axios.get("https://api.myjson.com/bins/11qq59").then(val =>{
            return val.data;
        }).then(json =>{
            var keys = Object.keys(json[0]);
            keys.shift();
            
            this.setState(()=>{
                return {data:json,keys:keys}
            });
        })

        axios.get("https://api.myjson.com/bins/y3zct").then(val =>{
            return val.data;
        }).then(json =>{
            this.setState(()=>{
                return {banners:json}
            });
        })

    }
    render(){
        return(
            <div>
                <h1>Notícias</h1>
                <Grid data_render={this.state.data} keys={this.state.keys}/>
            </div>
        )
    }
}