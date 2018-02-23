import store from '../reducers';
var config = require('../config/config.json');

export const getAlbumData = () => {
    return new Promise((resolve, reject) => {
        fetch(config.data_url).then((response) => {
            return response.json();
        }).then((data) => {
            store.dispatch({
                type: 'UPDATE DATA',
                data
            });
            store.dispatch({
                type: 'UPDATE ID',
                id: data[data.length-1].id
            })
            resolve();
        });
    });
};