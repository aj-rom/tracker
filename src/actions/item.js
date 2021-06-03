export const addItem = (item) => {
    console.log('Adding', item)
    return { type: 'ADD_ITEM', item: item}
}

export const removeItem = (item) => {
    console.log('Removing', item)
    return { type : 'REMOVE_ITEM', item: item}
}

export const increaseCount = (item) => {
    console.log('Incrementing Count', item)
    return { type: 'INCREASE_COUNT_OF_ITEM', item: item}
}

export const decreaseCount = (item) => {
    console.log('Decreasing Count', item)
    return { type: 'DECREASE_COUNT_OF_ITEM', item: item}
}