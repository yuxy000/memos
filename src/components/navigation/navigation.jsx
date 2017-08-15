import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLink from './navLink';

/**
 * `导航`组件
 * @class Navigation
 * @extends {Comment}
 */
class Navigation extends Component {
    render () {
        return (
            <div className="navigation">
                <Row className="className" type="flex" align="middle" justify="space-around">
                    <Col span={6}>
                        <NavLink
                            activeOnlyWhenExact={true}
                            to="/"
                            label="全部"
                            memoNumber={this.props.allMemos} />
                    </Col>
                    <Col span={6}>
                        <NavLink
                            to="/todo"
                            label="新建事项"
                            memoNumber={this.props.todoNumber} />
                    </Col>
                    <Col span={6}>
                        <NavLink
                            to="/doing"
                            label="正在进行"
                            memoNumber={this.props.doingNumber} />
                    </Col>
                    <Col span={6}>
                        <NavLink
                            to="/done"
                            label="已完成"
                            memoNumber={this.props.doneNumber} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Navigation;