

// const redux = redux.createRedux(reducers);
// redux.dispatch(loadLists());
// debugger
class Root extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.show && <Item />}
      </div>
    )
  }
};