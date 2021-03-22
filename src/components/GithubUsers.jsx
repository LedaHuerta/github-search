import React, { Fragment, useState, useEffect } from 'react';
import GithubUserProfile from './GithubUserProfile';
import NotFound from './NotFound';
import { clientId, clientSecret } from './GithubCredentials';
import { axios } from "./axios";

const GithubUsers = () => {
    const[updateInput, setUpdateInput] = useState('');
    const[profile, setProfile] = useState(null);
    const[noLoad, setNoLoad] = useState(true);   
    let noProfile = !profile || (profile && profile.length === 0 );

    //get the username from user
    const handleChange = (e) => {
        setUpdateInput(e.target.value);
    };

    //search profile
    const getProfile = async () => {
        const responseUser = await axios
        .get( `${updateInput}?clientId=${clientId}&clientSecret=${clientSecret}` )
        .catch((err) => {
            console.log("Error:", err);
            setProfile(null);
        })
        
        if(responseUser && responseUser.data) {
            setProfile(responseUser.data);
            setNoLoad(false);
        }
        
    };
    
    useEffect(() => {
        getProfile();
    }, []);
    

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
                                {noLoad && 
                                    <div className="row justify-content-center text-secondary mt-2">
                                        <h2>Enter a User Name</h2>
                                    </div>
                                }
                                { (noProfile && !noLoad) && <NotFound/> }
                                {
                                    !noProfile &&
                                    <GithubUserProfile profile={ profile }/>
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