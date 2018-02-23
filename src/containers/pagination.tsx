import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increasePage, decreasePage, updatePage } from '../actions';

interface PaginationProps {
    albumData: { userId: number, id: number, title: string }[];
    currentPage: number;
    increasePage: () => Dispatch<Object>;
    decreasePage: () => Dispatch<Object>;
    updatePage: (page: number) => Dispatch<Object>;
}

class Pagination extends React.Component<PaginationProps, {}> {
    render() {
        return (
            <div className="pager">
                <div 
                    className={this.props.currentPage>0? 'page-button' : 'page-button-disabled'}
                    onClick={() => {
                        if(this.props.currentPage>0){
                            this.props.decreasePage();
                        }
                    }}
                >
                    <i className="fa fa-caret-left" />
                </div>
                <select
                    value={this.props.currentPage}
                    onChange={(e) => {
                        this.props.updatePage(Number(e.currentTarget.value));
                    }}
                >
                    {
                        this.props.albumData.map((val, index) => {
                            return <option key={index} value={index}>{index+1}</option>
                        })
                    }
                </select>
                <div 
                    className={this.props.currentPage<this.props.albumData.length-1? 
                                'page-button' : 'page-button-disabled'}
                    onClick={() => {
                        if(this.props.currentPage<this.props.albumData.length-1){
                            this.props.increasePage();
                        }
                    }}
                >
                    <i className="fa fa-caret-right" />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state: { [key: string]: Object }) {
    return {
        albumData: state.albumData,
        currentPage: state.updatePage,
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            updatePage: updatePage,
            increasePage: increasePage,
            decreasePage: decreasePage
        },
        dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);