import React, { Fragment, useState } from 'react';
import GithubUserProfile from './GithubUserProfile';
import NotFound from './NotFound';
import { clientId, clientSecret } from './GithubCredentials';
import { axios } from "./axios";

const GithubUsers = () => {
    const[updateInput, setUpdateInput] = useState('');
    const[profile, setProfile] = useState(null);
    
    //get the username from user
    const handleChange = (e) => {
        setUpdateInput(e.target.value);
    };

    //search profile
    const getProfile = async () => {
        const responseUser = await axios
        .get( `${updateInput}?clientId=${clientId}&clientSecret=${clientSecret}` )
        .catch((err) => {console.log("Error:", err)})
        
        if(responseUser && responseUser.data) {
            setProfile(responseUser.data);
        }
        
    };
       

    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <h3>Github User Search</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group mr-2">
                                    <input
                                        value = {updateInput}
                                        onChange = {handleChange}
                                        size="40"
                                        type="text" 
                                        className="form-control" 
                                        placeholder="User Name"/>
                                </div>
                                <div>
                                    <button onClick={getProfile} className="btn btn-secondary btn-md">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                {
                                    profile ? <GithubUserProfile profile={ profile }/> : <NotFound/>
                                }
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GithubUsers;