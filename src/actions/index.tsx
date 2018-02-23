import { Dispatch } from 'redux';

export const updateId = (id: number) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'UPDATE ID',
            id
        });
    };
};

export const updateData = (data: { userId: number, id: number, title: string }[]) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'UPDATE DATA',
            data
        });
    };
};
export const deleteData = (id: number) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'DELETE DATA',
            id
        });
    };
};
export const createData = (newdata: { userId: number, id: number, title: string }) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'CREATE DATA',
            newdata
        });
    };
};
export const modifyData = (newdata: { userId: number, id: number, title: string }) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'MODIFY DATA',
            newdata
        });
    };
};

export const increasePage = () => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'INCREASE PAGE'
        });
    };
};
export const decreasePage = () => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'DECREASE PAGE'
        });
    };
};

export const updateCrud = (method: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'UPDATE CRUD',
            method
        });
    };
};
export const updatePage = (page: number) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'NEW PAGE',
            page
        });
    };
};
export const updateTitle = (input: string) => {
    return (dispatch: Dispatch<Object>) => {
        dispatch({
            type: 'UPDATE TITLE',
            input
        });
    };
};