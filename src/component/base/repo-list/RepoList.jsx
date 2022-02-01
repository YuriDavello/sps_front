import { useContext, useEffect } from 'react';
import RepoContext from '../../context/repos/RepoContext';
import '../repo/Repo.css';

function RepoList(){
    const {repos, deleterepo, repoFound, repo, findallrepos} = useContext(RepoContext);

    useEffect(() => {
        findallrepos();
    }, []);

    const handleDelete = (repoName) => {
        deleterepo(repoName);
    }

    if (repoFound) {
        return (
            <div className="repos-list">
                <h3>Repositórios</h3>
                <ul>
                    <li>
                        <div className="left-block">
                            <span className="repo-owner">
                                <b>{repo.owner}</b>
                            </span>
                            <span className="repo-name">
                                {repo.name}
                            </span>
                        </div>
                        <div className="right-block">
                            <i onClick={() => handleDelete(repo.name)} className="material-icons">delete</i>
                        </div>
                    </li>
                </ul>
            </div> 
        );
    }

    if (repos.length === 0) return <h1>Add a repo to display</h1>
    
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
                        <i onClick={() => handleDelete(repodata.name)} className="material-icons">delete</i>
                        </div>
                    </li>
                ))}
            </ul>
        </div> 
    )
}

export default RepoList;