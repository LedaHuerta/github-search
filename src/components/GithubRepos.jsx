import React, { Fragment, useState, useEffect } from 'react';
import Repos from './Repos';
import NotFound from './NotFound';
import { axios } from "./axios";
import { clientId, clientSecret } from './GithubCredentials';


const GithubRepos = () => {
    const[updateInput, setUpdateInput] = useState('');
    const[repos, setRepos] = useState(null);
    const[noRequest, setNoRequest] = useState(true);
    let noRepos = !repos || (repos && repos.length === 0);

    //get the username from user
    const handleChange = (e) => {
        setUpdateInput(e.target.value)
    };

    //search repos
    const getRepos = async () => {
        const responseRepos = await axios
        .get( `${updateInput}/repos?clientId=${clientId}&clientSecret=${clientSecret}` )
        .catch((err) => {
            console.log("Error:", err);
            setRepos(null);
        })

        if(responseRepos && responseRepos.data) {
            setRepos(responseRepos.data);
            setNoRequest(false);
        }
        
    };
   
    useEffect(() => {
        getRepos();
    }, []);


    return(
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <h3>Github Repos</h3>
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
                                    <button onClick={getRepos} className="btn btn-secondary btn-md">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container mt-3">
                        <div className="row">
                            <Fragment>
                                {
                                    noRequest &&
                                    <div className="row justify-content-center text-secondary mt-2">
                                            <h2>Enter a User Name</h2>
                                    </div>
                                }
                                { (noRepos && !noRequest) && <NotFound/> }
                                {
                                    !noRepos && <Repos repos={ repos }/>
                                }
                            </Fragment>
                            {/* <Fragment className="col">
                                {
                                    repos ? <Repos repos={ repos }/> :  <NotFound/>
                                }
                            </Fragment>  */}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GithubRepos;