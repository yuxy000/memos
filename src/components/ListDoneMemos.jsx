import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Row, Col, Button, Icon } from 'antd';

/**
 * `已完成`组件
 * 
 * @class ListDoneMemos
 * @extends {Component}
 */
class ListDoneMemos extends Component {
    constructor(props) {
        super(props);

        this.handleToDoing = this.handleToDoing.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    /**
     * done -> doing
     * 
     * @param {any} e 
     * @memberof ListDoneMemos
     */
    handleToDoing(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDoneToDoing(changeIndex);
    }

    /**
     * 删除事项
     * 
     * @param {any} e 
     * @memberof ListDoneMemos
     */
    handleDel(e) {
        const changeIndex = e.target.getAttribute('data-key');
        this.props.onDel(changeIndex);
    }

    render() {
        let number = 0;
        this.props.todolist.map((item) => {
            if (item.done) {
                number += 1;
            }

            return true;
        });

        const collapseStyle = {
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto'
        };

        const Panel = Collapse.Panel;
        const header = (
            <Row>
                <Col span={22}>
                    <h3>已完成</h3>
                </Col>
                <Col span={2}>
                    <Button size="small" shape="circle">
                        {number}
                    </Button>
                </Col>
            </Row>
        );
        return (
            <main>
                <Collapse style={collapseStyle}>
                    <Panel header={header}>
                        <ul>
                            {
                                this.props.todolist.map((item, i) => {
                                    if (item.done) {
                                        return (
                                            <li style={{opacity: '.4'}} key={i}>
                                                <Row>
                                                    <Col span={3}>
                                                        <input
                                                            type="checkbox"
                                                            checked={item.done}
                                                            disabled
                                                        />
                                                    </Col>
                                                    <Col span={20}>
                                                        <p
                                                            key={i}
                                                            onClick={this.handleToDoing}
                                                            style={{
                                                                textDecoration: 'line-through'
                                                            }}
                                                        >
                                                        {item.todo}
                                                        </p>
                                                    </Col>
                                                    <Col span={1}>
                                                        <Icon
                                                            type="close-circle"
                                                            data-key={i}
                                                            onClick={this.handleDel}
                                                            style={{fontSize: '20px'}}
                                                        />
                                                    </Col>
                                                </Row>
                                            </li>
                                        );
                                    }
                                    return true;
                                })
                            }
                        </ul>
                    </Panel>
                </Collapse>
            </main>
        );
    }
}

ListDoneMemos.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onDoneToDoing: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired
};

export default ListDoneMemos;