import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {

    function renderItems() {
        return items.map((e, idx) => <Item key={idx} id={idx} item={e.item} count={e.count}/>)
    }

    return (
        <div className='item-list'>
            {renderItems()}
        </div>
    )
}

export default ItemList