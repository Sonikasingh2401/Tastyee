import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{

    const err = useRouteError ();
    console.log(err);
    return(
        <div>
            <h1>Ooppsss !!!</h1>            
            <h1>{err.status} - {err.statusText}</h1>            

            <h2>Something went wrong..</h2>
        </div>
    )
};

export default ErrorPage;
