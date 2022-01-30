import { useContext, useState } from 'react';
import RepoContext from '../../context/repos/RepoContext';
import '../repo/Repo.css';

function RepoForm({spanText}){
    // state/context
    const[text, setText] = useState('');
    const { addrepo, searchrepo } = useContext(RepoContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(spanText == 'Adicionar'){
            addrepo(text);
            setText('');
        } else {
            searchrepo(text);
        }
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    return (
        <form className="container-form">
            <span className="text">{spanText}</span>
            <input onChange={handleTextChange}
             id="search"
              className="new-repo-input"
              value={text} />
            {/* {
                true ?
                <img
                    style={{width: '30px'}}
                /> : 
                <button className="new-repo-button">Click</button>
            }    */}
            <button type="submit" onClick={handleSubmit}>{spanText}</button>
        </form>
    );
}

export default RepoForm;