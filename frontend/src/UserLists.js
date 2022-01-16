import React from "react";

import ListComponent from "./ListComponents";

export default class UserLists extends React.Component{
    state = { lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 947a5cc275ae4ca23abe0c555e3b265cb7d4bdc9'


        var url = "http://127.0.0.1:8000/list/";
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists: data, loading: false});
    }

    render()
    {
        const listsApi = this.state.lists;
        return(
            <div>
                {listsApi.map(list => <ListComponent key={list.id} listname={list.name} />)}
            </div>
        )
    }
}