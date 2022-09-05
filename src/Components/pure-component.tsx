import React from 'react';

class FirstPureComponent extends React.PureComponent<any , any>{

    render() {
        return (<p>Pure Component</p>);
    }
}

export default FirstPureComponent;