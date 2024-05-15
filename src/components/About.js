import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{

    return (
        <div className="About">
            <h1>This is About Component </h1>
            <div className="font-semibold">
                LoggedInUser: 
                <UserContext.Consumer>
                    {({LoggedInUser})=>(
                        <h1>{LoggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>

            <User name = {"Sonali Singh"}/>
            <UserClass name = {"Sonika Singh"} designation={"Software Engineer"} Contact={"sonikasingh2401@gmail.com"} location={"Agra, Uttar Pradesh"}/>
        </div>
    )
}

export default About;