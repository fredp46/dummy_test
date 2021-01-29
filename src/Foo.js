import React, { PropTypes } from 'react';
import Api from './api'

const propTypes = {};

const defaultProps = {};

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        toggle: 'no'
    }
  }

  async componentDidMount()  {
      const t = await (new Api()).dummyApi()
      console.log(t)
      this.setState({
          toggle: t.value
      })
  }

  render() {
    return (
      <div className="foo">
        {this.state.toggle}
      </div>
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;