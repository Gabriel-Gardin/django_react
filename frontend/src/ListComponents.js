import React from 'react';
import ItemComponent from './ItemComponents';

export default function ListComponent(props){
    const items = props.items;

    return (
        <div>
            <h2>{props.listname}</h2>
            <ul>
                {items.map(item => <ItemComponent key={item.id} name={item.name} status={item.done} />)}
            </ul>
        </div>)
}