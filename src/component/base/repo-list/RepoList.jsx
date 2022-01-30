import { useContext } from 'react';
import RepoContext from '../../context/repos/RepoContext';
import '../repo/Repo.css';

function RepoList(){
    const {repos} = useContext(RepoContext);

    console.log("list")
    console.log(repos);

    return (
        <div className="repos-list">
        <h3>Repositórios</h3>
            <ul>
                {repos.map((repodata) => (
                                    <li>
                                    <div className="left-block">
                                        <span className="repo-owner">
                                            <b>{repodata.name}</b>
                                        </span>
                                        <span className="repo-name">
                                            {repodata.owner}
                                        </span>
                                    </div>
                                    <div className="right-block">
                                    <i className="material-icons">delete</i>
                                    </div>
                                </li>
                ))}
            </ul>
        </div> 
    )
}

export default RepoList;