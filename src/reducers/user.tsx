export const updateUserid = (state = 0, action: { type: string, id: number }) => {
    switch (action.type) {
        case 'UPDATE USER ID':
            return action.id;
        default:
            return state;
}
};