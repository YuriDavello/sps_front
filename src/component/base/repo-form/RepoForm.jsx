import '../repo/Repo.css';

function RepoForm(){
    return (
        <form 
        className="container-form"
        >
            <span className="text">Show</span>
            <input
                id="search"
                className="new-repo-input" 
            />
            {/* {
                true ?
                <img
                    style={{width: '30px'}}
                /> : 
                <button className="new-repo-button">Click</button>
            }    */}
            <button>Show</button>
        </form>
    );
}

export default RepoForm;