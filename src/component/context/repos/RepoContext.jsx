import { createContext } from "react";
import RepoForm from "../../base/repo-form/RepoForm";
import UserContext from "../user/UserContext";


const RepoContext = createContext();

export const RepoProvider = ({ children }) => {


    const addrepo = async(filteredrepo) => {
        const response = await fetch('/repos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filteredrepo)
        });

        const data = await response.json();
        return data;
    }

    const searchrepo = async(filteredrepo) => {
        
    }

    const deleterepo = async(filteredrepo) => {
        
    }

    return(
        <RepoContext.Provider value={
            {
                addrepo: addrepo,
                deleterepo: deleterepo,
                searchrepo: searchrepo
            }
        }
        >{ children }</RepoContext.Provider>
    );
};

export default RepoContext;