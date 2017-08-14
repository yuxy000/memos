import React from 'react';
import { Route, Link } from 'react-router-dom';

class NavLink extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { to, activeOnlyWhenExact, label, memoNumber } = this.props;
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
                    <Link className={match ? 'active' : ''} to={to}>
                        {label}&nbsp;<span>{memoNumber}</span>
                        </Link>

            )} />
        );
    }
}

export default NavLink;