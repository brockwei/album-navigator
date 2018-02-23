export const updatePage = (state = 0, action: { type: string, page: number }) => {
        switch (action.type) {
            case 'INCREASE PAGE':
                return state+1;
            case 'DECREASE PAGE':
                return state-1;
            case 'NEW PAGE':
                return action.page;
            default:
                return state;
    }
};