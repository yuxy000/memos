import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';
import PropTypes from 'prop-types';

/**
 * 头文件
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
    constructor(props) {
        super(props);

        //hidden,hint属性判断用户输入空字符
        this.state = {
            hidden: true,
            hint: ''
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    /**
     * 响应键盘事件
     * @param {any} e
     * @memberof Header
     */
    handleKeyUp(e) {
        if (e.keyCode !== '13') {
            this.setState({hidden: true});
        }
    }

    /**
     * 添加新事项并对输入字符做出判断
     * @param {any} e
     * @memberof Header
     */
    handleClick(e) {
        e.preventDefault();

        const inputNode = ReactDOM.findDOMNode(this.refs.inputNew);
        const text = inputNode.value.trim();
        if (text.length > 20) {
            this.setState({
                hidden: false,
                hint: '请输入20字以内'
            });
        } else if (text !== '') {
            this.props.onAdd(text);
            this.setState({
                hidden: true
            });
        } else {
            this.setState({
                hidden: false,
                hint: '请输入内容'
            });
        }
        inputNode.value = '';
    }

    render() {
        return (
            <header>
                <section>
                    <form onSubmit={e => this.handleClick(e)}>
                        <label htmlFor="new-todo">备忘录</label>
                        <Input
                            type="text"
                            onKeyUp ={this.handleKeyUp}
                            ref="inputNew"
                            placeholder="新建事项(20字以内)"
                            defaultValue={this.props.text}
                            id="new-todo"
                            style={{
                                width: '40%'
                            }}
                        />
                        <div>
                            <Button type="default" ghost onClick={e => this.handleClick(e)}>
                                添加
                            </Button>
                        </div>
                    </form>
                </section>
                <div
                    className="hint"
                    style={{
                        display: this.state.hidden
                        ? 'none'
                        : 'inline-block'
                    }}>
                        <div className="test">
                            <span className="bot"></span>
                            <span className="top"></span>
                        </div>
                        <div>
                            {this.state.hint}
                        </div>
                    </div>
            </header>
        );
    }

}

Header.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Header;