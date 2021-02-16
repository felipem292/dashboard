import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LogoThemed } from './../LogoThemed/LogoThemed';

const HeaderAuth = (props) => (
    <div className="mb-4">
        <div className="mb-4 text-center">
            <Link to="/" className="d-inline-block">
                {
                    props.icon ? (
                        <i className={ `fa fa-${ props.icon } fa-3x ${ props.iconClassName }` }></i>
                    ) : (
                        <LogoThemed checkBackground height="45" width="260" />
                    )
                }
            </Link>
        </div>
        <p className="text-center">
            { props.text }
        </p>
    </div>
)
HeaderAuth.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    title: PropTypes.node,
    text: PropTypes.node,
};
HeaderAuth.defaultProps = {
    text: "",
    iconClassName: "text-theme"
};

export { HeaderAuth };
