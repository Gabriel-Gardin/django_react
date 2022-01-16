import React from 'react';
import ItemComponent from './ItemComponents';

export default function ListComponent(props){
    return (
        <div>
            <h2>{props.listname}</h2>
            <ul>
                <ItemComponent name={"Meu item"}></ItemComponent>
                <ItemComponent name={"Meu item2"}></ItemComponent>
                <ItemComponent name={"Meu item3"}></ItemComponent>
                <ItemComponent name={"Meu item4"}></ItemComponent>
            </ul>
        </div>)
}