import filter from 'filter-url/filter';
import { useContext, useState } from 'react';
import RepoContext from '../../context/repos/RepoContext';
import '../repo/Repo.css';

function RepoForm(){
    // state/context
    const[text, setText] = useState('');
    const { addrepo } = useContext(RepoContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const repo = filter(text);
        addrepo(repo);
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    return (
        <form 
        className="container-form"
        >
            <span className="text">Show</span>
            <input onChange={handleTextChange} id="search" className="new-repo-input" />
            {/* {
                true ?
                <img
                    style={{width: '30px'}}
                /> : 
                <button className="new-repo-button">Click</button>
            }    */}
            <button type="submit" onClick={handleSubmit}>Show</button>
        </form>
    );
}

export default RepoForm;