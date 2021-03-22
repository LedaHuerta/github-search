import React, { Fragment } from 'react';


const NotFound = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Not Found</h3>
                    </div>
                    <div className="card-body">
                        <p className="text-dark">Oops, there's nothing in here!</p>
                        <p className="text-dark">Try again with another user.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default NotFound;