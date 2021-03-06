import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListDoneMemos from '../components/ListDoneMemos';

import {
    changeDoneToDoing,
    deleteTodo
} from '../actions';

/**
 * `已完成`组件
 * @class DoneRoute
 * @extends {Component}
 */
class DoneRoute extends Component {
    render() {
        const { dispatch, todolist } = this.props;
        return (
             <ListDoneMemos
                todolist={todolist}
                onDel={index => dispatch(deleteTodo(index))}
                onDoneToDoing={index => dispatch(changeDoneToDoing(index))}
            />
        );
    }
}

DoneRoute.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        todolist: state.todolist
    }
}
export default connect(mapStateToProps)(DoneRoute);