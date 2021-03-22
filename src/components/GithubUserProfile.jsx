import React, {Fragment} from 'react';
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails';


const GithubUserProfile = (props) => {
    const { profile } = props;
    return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {
                                //Validate object isn't empty
                                Object.keys(profile).length !== 0 ?
                                <GithubProfileCard profile={ profile }/> : null
                            }
                        </div>
                        <div className="col-md-9">
                            {
                                //Validate object isn't empty
                                Object.keys(profile).length !== 0 ?
                                <GithubProfileDetails profile={ profile }/> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
    );
};

export default GithubUserProfile;
