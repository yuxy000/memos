import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListTodoMemos from '../components/ListTodoMemos';
import ListDoingMemos from '../components/ListDoingMemos';
import ListDoneMemos from '../components/ListDoneMemos';

import {
    changeTodoToDoing,
    changeDoingToTodo,
    changeDoingToDone,
    changeDoneToDoing,
    deleteTodo
} from '../actions';


/**
 * `全部事项`组件
 * 
 * @class AllMemosRoute
 * @extends {Component}
 */
class AllMemosRoute extends Component {
    render() {
        const { dispatch, todolist } = this.props;
        return (
            <div>
                <ListTodoMemos
                    todolist={todolist}
                    onDel={index => dispatch(deleteTodo(index))}
                    onTodoToDoing={index => dispatch(changeTodoToDoing(index))}
                />

                <ListDoingMemos
                    todolist={todolist}
                    onDel={index =>dispatch(deleteTodo(index))}
                    onDoingToTodo={index => dispatch(changeDoingToTodo(index))}
                    onDoingToDone={index => dispatch(changeDoingToDone(index))}
                />

                <ListDoneMemos
                    todolist={todolist}
                    onDel={index => dispatch(deleteTodo(index))}
                    onDoneToDoing={index => dispatch(changeDoneToDoing(index))}
                />
            </div>
        );
    }
}

AllMemosRoute.propTypes = {
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
export default connect(mapStateToProps)(AllMemosRoute);