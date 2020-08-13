import React, {useEffect, useState} from 'react'
import Axios from 'axios';

export default function userDetail({ match }) {
    useEffect(() => {
        fetchUserDetails(match.params.id);
        console.log("match", match)
    }, [])

    let [user, updateUser] = useState({});

    const fetchUserDetails = (id) => {
        Axios({
            method : "GET",
            url : '/getPlayers/'+match.params.id
        }).then((response) => {
            updateUser(response.data);
        })
    }
    return (
        <div>
            <h1>User Information</h1>
            <label>Name : {user.name}</label><br />
            <label>Age : {user.age}</label>
        </div>
    )
}
