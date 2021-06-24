import React, {Component} from "react";
import axios from "axios";
export default class Portform extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            description:"",
            category:"",
            position:"",
            url:"",
            thumb_image:"",
            banner_image:"",
            logo:"",
        }
        this.Changer=this.Changer.bind(this);
        this.Submit=this.Submit.bind(this);
    }
    Submit(event){
        axios.post("https://whoami.devcamp.space/portfolio/portfolio_items",this.buildForm(),{withCredentials:true}).then(response => {
            console.log("response", response)
        }).catch(error =>{
            console.log("An error occoured", error)
        })
        event.preventDefault();
    }
    buildForm(){
        let formData = new FormData();
        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
        return formData;
    }
    Changer(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
    return (
        <div>
            <h1>form</h1>
            <form onSubmit={this.Submit}>
                <div>
                <input 
                    type="text"
                    name="position"
                    placeholder="pos"
                    value={this.state.position}
                    onChange={this.Changer}/>
                    <input 
                    type="text"
                    name="name"
                    placeholder="portitem"
                    value={this.state.name}
                    onChange={this.Changer}/>
                    <select 
                    name="category"
                    value={this.state.category}
                    onChange={this.Changer}>
                    <option value="Accomplishment">Accomplishment</option>
                    <option value="Real life">IRL</option>
                    <option value="Web Stuff">Web Stuff</option>
                    </select>
                    <input 
                    type="text"
                    name="url"
                    placeholder="Link"
                    value={this.state.url}
                    onChange={this.Changer}/>
                </div>
                <div>
                <input 
                    type="text"
                    name="description"
                    placeholder="describe"
                    value={this.state.description}
                    onChange={this.Changer}/>
                </div>
                <div>
                    <button type="submit">
                        Save
                        </button>
                    </div>
            </form>
        </div>
    )
    }
}