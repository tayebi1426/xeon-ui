import React, {useState, useEffect} from 'react'
import XhrRequest from "../../core/util/XhrRequest";

const github_repository_url_api = 'https://api.github.com/search/repositories';
let fetchTimeout;

function SearchGithub() {
    const [repoName, setRepoName] = useState('-');
    const [count, setCount] = useState(0);
    const [queryResult, setQueryResult] = useState({});
    const queryGithubRepository = () => {
        new Promise(resolve => {
            console.debug('call api', new Date());
            setTimeout(resolve({total_count: Math.round(455)}), 1000);
        }).then(result => {
            console.debug('result : ', new Date());
            setQueryResult(result);
        });
    };
    useEffect(() => {

    });
    const handleChange = (e) => {
        setRepoName(e.target.value);
        if (fetchTimeout) {
            clearTimeout(fetchTimeout);
        }
        fetchTimeout = setTimeout(queryGithubRepository, 2000)
    };
    console.debug('qu', queryResult);
    return (
        <div>
            <label>Repository Name :
                <input onChange={handleChange}/>
            </label>
            <br/>
            <span>repoName : {repoName}</span>
            <br/>
            {
                !queryResult ? (<div>empty</div>) : (
                    <span>total_count : {queryResult.total_count}</span>

                )
            }

        </div>
    )
}

export default SearchGithub
