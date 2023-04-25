// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: '', errorFN: '', errorLN: ''}

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({errorFN: 'Required'})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({errorLN: 'Required'})
    }
  }

  render() {
    const {firstName, lastName, errorFN, errorLN} = this.state
    return (
      <div className="con">
        <div className="card">
          <h1 className="heading">Registration</h1>
          <form className="down-card">
            <div className="input-con">
              <label className="label" htmlFor="first">
                FIRST NAME
              </label>
              <input
                className="input"
                id="first"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={this.onChangeFirstName}
                onBlur={this.onBlurFirstName}
              />
              <p className="error">{errorFN}</p>
            </div>
            <div className="input-con">
              <label className="label" htmlFor="last">
                LAST NAME
              </label>
              <input
                className="input"
                id="last"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={this.onChangeLastName}
                onBlur={this.onBlurLastName}
              />
              <p className="error">{errorLN}</p>
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
