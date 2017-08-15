import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/navigation/navigation';
import AllMemosRoute from '../routes/AllMemosRoute';
import TodoRoute from '../routes/TodoRoute';
import DoingRoute from '../routes/DoingRoute';
import DoneRoute from '../routes/DoneRoute';

import { addTodo } from '../actions';
import '../styles/app.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    render () {

        const { todolist, addTodos } = this.props;
        const allMemos = todolist.length;
        let [todoNumber, doingNumber, doneNumber] = [0, 0, 0];

        todolist.forEach((item) => {
            if (item.istodo) {
                todoNumber += 1;
            } else if (item.doing) {
                doingNumber += 1;
            } else {
                doneNumber += 1;
            }
        });

        return (
            <div>
                <Header
                    todolist={todolist}
                    onAdd={text => addTodos(text)}
                    onKeyUp={this.props.onKeyUp}
                />
                <Navigation
                    allMemos={allMemos}
                    todoNumber={todoNumber}
                    doingNumber={doingNumber}
                    doneNumber={doneNumber}
                />
                <Switch>
                    <Route path="/todo" component={TodoRoute} />
                    <Route path="/doing" component={DoingRoute} />
                    <Route path="/done" component={DoneRoute} />
                    <Route component={AllMemosRoute} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

const mapStateToProps =(state) => {
    return {
        todolist: state.todolist
    };
}

const mapDispatchToProps  = (dispatch) => {
    return {
        addTodos: (text) => {
            dispatch(addTodo(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
