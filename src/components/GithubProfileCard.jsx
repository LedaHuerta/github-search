import React, {Fragment} from 'react';


const GithubProfileCard = (props) => {
    let {name, avatar_url, bio, html_url } = props.profile;
    return (
        <Fragment>
                 <div className="card">
                     <img src={ avatar_url } alt="user" className="img-fluid"/>
                     <div className="card-body">
                         <h5 className="card-title">{ name }</h5>
                         <p>{ bio }</p>
                         <a href={ html_url }  rel="noreferrer"target="_blank" className="btn btn-success btn-sm">Profile</a>
                     </div>
                 </div>
             </Fragment>
    );
};

export default GithubProfileCard;