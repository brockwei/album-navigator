import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAlbumData } from '../utils/xhr';
import { updateData, deleteData, updateCrud, updateId, updateTitle } from '../actions';

// Components
import Pagination from './pagination';
import Title from './title';

interface DemoPageProps {
    albumData: { userId: number, id: number, title: string }[];
    albumId: number;
    currentPage: number;
    crud: string;
    updateData: (data: { userId: number, id: number, title: string }[]) => Dispatch<Object>;
    deleteData: (id: number) => Dispatch<Object>;
    updateCrud: (method: string) => Dispatch<Object>;
    updateId: (id: number) => Dispatch<Object>;
    updateTitle: (input: string) => Dispatch<Object>;
}

class DemoPage extends React.Component<DemoPageProps, {}> {
    componentWillMount() {
        getAlbumData();
    }
    render() {
        return (
            <div className="demo-page">
                <div className="actions">
                    <button
                        onClick={() => {
                            this.props.updateCrud('modify');
                            this.props.updateTitle(this.props.albumData[this.props.currentPage].title);
                        }}
                    >
                        Update
                    </button>
                    <button
                        onClick={() => {
                            this.props.deleteData(this.props.currentPage);
                        }}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => {
                            if(this.props.crud!=='create'){
                                this.props.updateCrud('create');
                                this.props.updateId(this.props.albumData[this.props.albumData.length-1].id+1);
                                this.props.updateTitle('');
                            }
                        }}
                    >
                        Create New
                    </button>
                </div>
                <div className="view">
                    <Title />
                    <img src="http://via.placeholder.com/450x300" />
                </div>
                
                <Pagination />
            </div>
        );
    }
}

function mapStateToProps(state: { [key: string]: Object }) {
    return {
        albumData: state.albumData,
        albumId : state.updateId,
        currentPage: state.updatePage,
        crud: state.updateCrud
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            updateData: updateData,
            deleteData: deleteData,
            updateCrud: updateCrud,
            updateId: updateId,
            updateTitle: updateTitle,
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);