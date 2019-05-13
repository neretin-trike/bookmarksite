export const loadFromLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

export const saveToLocaleStorage = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (error) { 
        console.log(error.message);
    }
}
