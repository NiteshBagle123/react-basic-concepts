import React from 'react';

// const withClass = props => (
//     <div className={props.className}>{props.children}</div>
// );

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    );
};

export default withClass;
