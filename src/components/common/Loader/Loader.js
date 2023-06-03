import React from "react";
import  Spinner  from 'react-bootstrap/Spinner';

const Loader = () => {
    return(
        <div className="d-inline-flex my-2">
        <Spinner role='status' animation="border">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="ms-2 pt-1">Loading...</p>
        </div>
    );
};

export default Loader;