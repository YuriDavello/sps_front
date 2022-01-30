import UserContext from "../user/UserContext";
import RepoForm from "../../base/repo-form/RepoForm";
import filter from 'filter-url/filter';
import { createContext, useEffect, useState } from "react";

const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        console.log("effect")
        findallrepos();
    }, []);

    const findallrepos = async() => {
        const response = await fetch(`/repos`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log("set state")
        setRepos(data);
        return data;
    }

    const addrepo = async(filteredrepo) => {
        
        const repo = filter(filteredrepo);
        
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

    const searchrepo = async(searchstring) => {
        const response = await fetch(`/repos`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return data;
    }

    const deleterepo = async(filteredrepo) => {
        
    }

    return(
        <RepoContext.Provider value={
            {
                addrepo: addrepo,
                deleterepo: deleterepo,
                searchrepo: searchrepo,
                findallrepos: findallrepos,
                repos: repos
            }
        }
        >{ children }</RepoContext.Provider>
    );
};

export default RepoContext;