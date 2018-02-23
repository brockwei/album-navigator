export const updateCrud = (state = 'read', action: {type: string, method: string}) => {
    switch (action.type) {
        case 'UPDATE CRUD':
            return action.method;
        default:
            return state;
    }
};
export const updateTitle = (state = '', action: {type: string, input: string}) => {
    switch (action.type) {
        case 'UPDATE TITLE':
            return action.input;
        default:
            return state;
    }
}