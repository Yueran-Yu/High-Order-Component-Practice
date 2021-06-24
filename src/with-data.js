import React from 'react';

const withData = (WrappedComponent) => {
  // Enhanced Component
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      }
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
            .then(response => response.json())
            .then(data => this.setState({data: data.slice(0, 3)}))
      }, 1000)
    }

    render() {
      // because we don't need to pass our dataSource property into the WrappedComponent
      // we can destructure out dataSource, and spreed out else into otherProps
      const {dataSource, ...otherProps} = this.props
      return (
          this.state.data.length < 1 ? (<h1>LOADING</h1>) :
              (<WrappedComponent data={this.state.data} {...otherProps}/>)
      )
    }
  }

  // return the enhanced component
  return WithData;
}

export default withData;