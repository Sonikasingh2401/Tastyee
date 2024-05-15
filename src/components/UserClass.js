// This is a class based component lecture :--
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);   // use because to implement (this) keyword 
        console.log(props);
    
    this.state = {
        userInfo: {
            name: "Sonika",
            location: "Agra",
            company: "XYZ",
            bio: "I believe in you only.."
        }
    };
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });
    console.log(json);
    
}

    render (){
        const {name, bio,company, location} = this.state.userInfo;
        
        return(
            <div className="user-card">
            <img src="https://avatars.githubusercontent.com/u/12824231?v=4"></img>
            <h1>{name}</h1>
            <h3>{bio}</h3>
            <h3>{company}</h3>
            <h3>{location}</h3>
        </div>
        );
    }
};

export default UserClass;