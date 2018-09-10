import React from 'react'

// const Signin = ({ handleRouteChange }) => {
class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value.trim() })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value.trim() })
  }

  handleSubmit = async () => {
    try {
      const res = await fetch('https://damp-retreat-12750.herokuapp.com/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
      const result = await res.json()
      if (res.status === 200) {
        this.props.loadUser(result)
        this.props.handleRouteChange('home')
      } else {
        alert(result)
      }
    } catch (error) {
      console.log('error reaching signin endpoint at server')
    }
  }

  render() {
    return (
      <div className="mt3">
        <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 center">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="username email"
                    onChange={this.handleEmailChange}
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handlePasswordChange}
                  />
                </div>
              </fieldset>
              <div className="center w-50">
                <input
                  className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="button"
                  value="Sign in"
                  onClick={this.handleSubmit}
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  className="f6 link dim black db tc pointer"
                  onClick={() => {
                    this.props.handleRouteChange('register')
                  }}
                >
                  Register
                </p>
              </div>
            </form>
          </main>
        </article>
      </div>
    )
  }
}

export default Signin
