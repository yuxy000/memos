import React, { Component } from 'react';

import Header from '../components/header';
import Navigation from '../components/navigation/navigation';
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
                <Navigation />
                App
            </div>
        );
    }
}

export default App;
