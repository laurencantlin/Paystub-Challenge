import Link from 'next/link'
import {Table} from 'react-materialize'
import MyContext from '../config/Context'
import MyProvider from '../provider/ContextProvider'

class Stub extends React.Component {
  componentDidMount() {
    console.log("Stub component Mounted", this.state)
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  

  render() {

    return (
      <MyContext.Consumer>
        {({context}) => (
          <React.Fragment>
            <div>
            <div>hello {context.state.fn}</div>
            </div>
          </React.Fragment>
        )}</MyContext.Consumer>

    );
  }
}

// const WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode); const
// WrappedHorizontalLoginForm = Form.create()(EmployeeForm);
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);

export default Stub