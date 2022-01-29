import '../repo/Repo.css';

function RepoList(){
    return (
        <div className="repos-list">
        <h3>Repositórios</h3>
            <ul>
                <li>
                    <div className="left-block">
                        <span className="repo-owner">
                            <b>repo.name</b>
                        </span>
                        <span className="repo-name">
                            repo.owner
                        </span>
                    </div>
                    <div className="right-block">
                    <i className="material-icons">delete</i>
                    </div>
                </li>
            </ul>
        </div> 
    )
}

export default RepoList;