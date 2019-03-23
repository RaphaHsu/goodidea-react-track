'use strict';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        greet: `Hello, I'm there`
    };
  }

  render() {
    return (
        <h1>{this.state.greet}</h1>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));