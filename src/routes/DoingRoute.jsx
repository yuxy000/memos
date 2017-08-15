import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListDoingMemos from '../components/ListDoingMemos';

import {
    changeDoingToTodo,
    changeDoingToDone,
    deleteTodo
} from '../actions';

/**
 * `正在进行`组件
 * @class DoingRoute
 * @extends {Component}
 */
class DoingRoute extends Component {
    render() {
        const { dispatch, todolist } = this.props;
        return (
            <ListDoingMemos
                todolist={todolist}
                onDel={index =>dispatch(deleteTodo(index))}
                onDoingToTodo={index => dispatch(changeDoingToTodo(index))}
                onDoingToDone={index => dispatch(changeDoingToDone(index))}
            />
        );
    }
}

DoingRoute.propTypes = {
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
export default connect(mapStateToProps)(DoingRoute);