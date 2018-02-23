export const albumData = (state: { userId: number, id: number, title: string }[] = [],
                          action: { 
                              type: string, 
                              data: { userId: number, id: number, title: string }[],
                              newdata: { userId: number, id: number, title: string },
                              id: number                            
                            }) => {
    switch (action.type) {
        case 'CREATE DATA':
            return state.concat(action.newdata);
        case 'UPDATE DATA':
            return state.concat(action.data);
        case 'MODIFY DATA':
            return state.map((val) => {
                if(val.id===action.newdata.id){
                    return action.newdata;
                } else {
                    return val;
                }
            });
        case 'DELETE DATA':
            return state.filter((val, index) => {
                return index !== action.id;
            });
        default:
            return state;
    }
};
export const updateId = (state = 0, action: {type: string, id: number}) => {
    switch (action.type) {
        case 'UPDATE ID':
            return action.id;
        default:
            return state;
    }
};