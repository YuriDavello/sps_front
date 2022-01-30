import UserContext from "../user/UserContext";
import RepoForm from "../../base/repo-form/RepoForm";
import filter from 'filter-url/filter';
import { createContext, useEffect, useState } from "react";
import { Repo } from "../../model/repo/Repo";

const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
    const [repoFound, setRepoFound] = useState(false);
    const [repos, setRepos] = useState([]);
    const [repo, setRepo] = useState({});

    useEffect(() => {
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
            body: JSON.stringify(repo)
        });

        const data = await response.json();
        setRepos([data, ...repos]);
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
        const repo = new Repo("name", "owner", "url");
        setRepoFound(true);
        setRepo(repo);
        return data;
    }

    const deleterepo = async(repoId) => {
        const response = await fetch(`/repos/${repoId}`,
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        setRepos(repos.filter((repo) => repo.id !== repoId));
        return data;
    }

    return(
        <RepoContext.Provider value={
            {
                addrepo: addrepo,
                deleterepo: deleterepo,
                searchrepo: searchrepo,
                findallrepos: findallrepos,
                repos: repos,
                repoFound: repoFound,
                repo: repo
            }
        }
        >{ children }</RepoContext.Provider>
    );
};

export default RepoContext;