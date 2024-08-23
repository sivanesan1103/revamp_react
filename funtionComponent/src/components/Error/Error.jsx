import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    let error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <h1>Error</h1>

                <div>
                    <p>Status: {error.status}</p>
                    
                </div>
            
        </div>
    );
};
