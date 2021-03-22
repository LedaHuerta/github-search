import React, { Fragment } from 'react';
import image from '../assets/octocat.png';



const Home = () => {



    return(
        <Fragment>
          <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 mt-5 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h2>Welcome to Github Search</h2>
                        </div>
                        <div className="card-body">
                            <h3>Find users and repos fast</h3>
                            <img src={image} alt="user" className="img-fluid" />

                        </div>
                    </div>
                </div>
            </div>
          </div>
      </Fragment>  
    );
}

export default Home;