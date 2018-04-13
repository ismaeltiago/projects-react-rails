// import * as stores from './reducers';
// import Header from './_headers'
const Header = require('./headers');

// const redux = redux.createRedux(reducers);
// redux.dispatch(loadLists());
// debugger
class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Item />
      </div>
    )
  }
};