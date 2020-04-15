import React from 'react';

const ErrorValidator = ({message}) => {
    return ( 
        <div className="alert alert-danger text-center lead" role="alert">{message}</div>
     );
}
 
export default ErrorValidator;