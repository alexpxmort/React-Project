import React,{Component} from 'react';
import axios from 'axios';
import { Slider} from '../../components/slider/slider.component'


export default class Banner extends Component{
    constructor(props){
        super(props);
        this.state = {banners:[]}
    }

    
    componentDidMount(){
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
             <Slider images={this.state.banners}/>
        </div>
       )
    }
}