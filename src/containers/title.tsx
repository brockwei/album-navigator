import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updatePage, updateCrud, updateTitle, createData, modifyData } from '../actions';

interface TitleProps {
    albumData: { userId: number, id: number, title: string }[];
    albumId: number;
    currentPage: number;
    crud: string;
    title: string;
    userId: number;
    updatePage: (page: number) => Dispatch<Object>;
    updateCrud: (method: string) => Dispatch<Object>;
    updateTitle: (input: string) => Dispatch<Object>;
    createData: (newdata: { userId: number, id: number, title: string }) => Dispatch<Object>;
    modifyData: (newdata: { userId: number, id: number, title: string }) => Dispatch<Object>
}

class Title extends React.Component<TitleProps,{}> {
    render() {
        return(
            <div>
                {
                    this.props.albumData.length>0 ? 
                    <div>
                        {   
                            this.props.crud==='read'?
                            this.props.albumData[this.props.currentPage].title:
                            <div>
                                <input 
                                    value={this.props.title}
                                    onChange={(e) => {
                                        this.props.updateTitle(e.currentTarget.value);
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        if(this.props.title.length>0){
                                            this.props.updateCrud('read');
                                            if(this.props.crud==='modify'){
                                                this.props.modifyData(
                                                    {
                                                        userId: this.props.userId, 
                                                        id: this.props.albumData[this.props.currentPage].id, 
                                                        title: this.props.title}
                                                );
                                            }
                                            else if(this.props.crud==='create'){
                                                this.props.createData(
                                                    {
                                                        userId: this.props.userId, 
                                                        id: this.props.albumId, 
                                                        title: this.props.title}
                                                );
                                                this.props.updatePage(this.props.albumData.length);
                                            }
                                        }
                                    }}
                                >
                                    {this.props.crud==='modify' ? 'Update' : 'Save New'}
                                </button>
                            </div>
                        }
                    </div>
                    :''
                }
            </div>
        );
    }
}

function mapStateToProps(state: { [key: string]: Object }) {
    return {
        albumData: state.albumData,
        albumId : state.updateId,
        currentPage: state.updatePage,
        crud: state.updateCrud,
        title: state.updateTitle,
        userId: state.updateUserid,
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            updatePage: updatePage,
            updateCrud: updateCrud,
            updateTitle: updateTitle,
            createData: createData,
            modifyData: modifyData
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Title);