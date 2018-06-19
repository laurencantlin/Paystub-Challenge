import Link from 'next/link'
import {Table} from 'react-materialize'
import MyContext from '../config/Context'
import moment from 'moment'
class Slip extends React.Component {
  
  renderDate = (cts) => {
    console.log("cts", moment(cts).format('ll'))
    const formattedDate = moment(cts).format('ll')
    return formattedDate
  }
  renderName = (fn, ln) => {
    const employeeName = `${fn
      .charAt(0)
      .toUpperCase()}${fn
      .slice(1)} ${ln
      .charAt(0)
      .toUpperCase()}${ln
      .slice(1)} `
    console.log(this.state)
    return employeeName
  }
  renderGross = (income) => {
    console.log(income);
    const Gross = Math.floor(income / 12)
    return Gross
  }
  renderIncomeTax = (income, brackets) => {
    let incomeTax;
    const Brackets = brackets.forEach(function (bracket) {
      if (bracket.startingAt < income && income < bracket.upto) {
        console.log("mybracket is", bracket)
        incomeTax = Math.floor((bracket.baseTax + bracket.taxRate * (income - bracket.startingAt)) / 12);
      }
    })
    return incomeTax;
  }
  renderNetIncome = (tax, gross) => {
    console.log(tax, gross);
    const NetIncome=gross - tax;
    return NetIncome
  }
  renderSuper = (gross,supr) => {
    const suprRate=supr/100
    const Supr = (gross*suprRate)
    return Math.floor(Supr)
  }
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div className="container">
              <Table>
                <thead>
                  <tr>
                    <th data-field="id">{this.renderName(context.state.fn, context.state.ln)}</th>
                    <th data-field="Pay Period" className="has-text-right">
                      {this.renderDate(context.state.PeriodStart)}
                      - {this.renderDate(context.state.PeriodEnd)}
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-field="id">Annual Salary:  </td>
                    <td data-field="Pay Period" className="has-text-right">
                      ${context.state.AnnualSalary}
                    </td>
                  </tr>
                  
                  <tr>
                    <td>Gross Income (monthly):</td>
                    <td className="has-text-right">${this.renderGross(context.state.AnnualSalary)} </td>
                  </tr>
                  <tr>
                    <td>Income Tax (monthly):</td>
                    <td className="has-text-right">- ${this.renderIncomeTax(context.state.AnnualSalary, context.state.TaxBrackets)} </td>
                  </tr>
                  <tr>
                    <td>Net Income (monthly): </td>
                    <td className="has-text-right">${this.renderNetIncome(
                      this.renderIncomeTax(
                        context.state.AnnualSalary, context.state.TaxBrackets
                      ), this.renderGross(context.state.AnnualSalary)
                    )} </td>
                  </tr>
                  <tr>
                    <td>Super ({context.state.Super}% monthly):</td>
                    <td className="has-text-right">${this.renderSuper(this.renderGross(context.state.AnnualSalary), context.state.Super)}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </React.Fragment>
        )}</MyContext.Consumer>

    );
  }
}

export default Slip