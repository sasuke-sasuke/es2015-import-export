const choice = (items) => {
    const idx = items[Math.floor(Math.random() * items.length)];
    return items[idx];
}

const remove = (items, item) => {
    const idx = items.indexOf(item);
    if (idx > -1) {
        items.splice(idx, 1);
        return item;
    }
    return
}

export {choice, remove};