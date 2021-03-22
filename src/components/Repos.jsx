import React, { Fragment } from 'react';



const Repos = (props) => {
    let { repos } = props;
    return(
        <table className="table table-hover text-left justify-content-around">
                    <thead className="bg-info">
                        <tr>
                            <th>Repo Name</th>
                            <th>Stars</th>
                            <th>Watchers</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                        {
                            repos.length > 0 && <Fragment>
                                {
                                    repos.map((repo, idx) => {
                                        return(
                                            <tr key={idx}>
                                                <td><a href={repo.html_url} target="_blank" rel="noreferrer" className="text-dark">{ repo.name }</a></td>
                                                <td><span className="badge badge-success mx-2" >{ repo.stargazers_count } Stars</span></td>
                                                <td><span className="badge badge-warning mx-2">{ repo.watchers_count } Watches</span></td>
                                            </tr>
                                        )
                                    })
                                }
                            </Fragment>
                        }
                    </tbody>
                        
                </table>
    );
};

export default Repos;