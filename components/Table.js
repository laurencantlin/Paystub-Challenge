import Link from 'next/link'
import {Table} from 'react-materialize'
import MyContext from '../config/Context'
import MyProvider from '../provider/ContextProvider'

class Slip extends React.Component {
  componentDidMount() {
    console.log(this.state)
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  

  render() {

    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div>hello {context.state.name}
            </div>
            <div className="container">
              <Table>
                <thead>
                  <tr>
                    <th data-field="id">{context.state.fn} {context.state.ln}</th>
                    {/* <th data-field="name"></th> */}
                    <th data-field="Pay Period" className="has-text-right">Pay Period</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td></td>

                  </tr>
                  <tr>
                    <td>Gross Income:</td>
                    {/* <td></td> */}
                    <td className="has-text-right">$3.76</td>
                  </tr>
                  <tr>
                    <td>Income Tax:</td>
                    {/* <td></td> */}
                    <td className="has-text-right">$7.00</td>
                  </tr>
                  <tr>
                    <td>Net Income:</td>
                    {/* <td></td> */}
                    <td className="has-text-right">$7.00</td>
                  </tr>
                  <tr>
                    <td>Super:</td>
                    {/* <td></td> */}
                    <td className="has-text-right">$7.00</td>
                  </tr>
                </tbody>
              </Table>
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

export default Slip