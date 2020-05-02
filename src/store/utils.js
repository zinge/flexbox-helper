export const getChild = (childs, path) => {
    const currentItem = childs.find(child => child.name === path[0])

    if (path.length === 1) {
        return currentItem
    }
    return getChild(currentItem.childs, path.slice(1))
}

export const getHash = () => {
    return Date.now() +  '_' + Math.random().toString(36).substr(2, 9);
}

export const hexGen = () => `#${Math.random().toString(16).slice(2, 8)}`
