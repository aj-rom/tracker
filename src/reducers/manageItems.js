function manageItems(state = { items: [] }, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            action.item.id = state.items.length
            return { ...state, items: [...state.items, action.item] }
        case 'REMOVE_ITEM':
            let items = [...state.items]
            items.splice(action.item.id, 1)
            return { ...state, items: items }
        case 'INCREASE_COUNT_OF_ITEM':
            let arr = [...state.items]
            const x = arr[action.item.id]
            x.count += 1
            return { ...state, items: arr }
        case 'DECREASE_COUNT_OF_ITEM':
            let dec = [...state.items]
            const y = dec[action.item.id]
            if (y.count === 0) return state

            y.count -= 1
            return { ...state, items: dec}
        default:
            return state;
    }
}

export default manageItems