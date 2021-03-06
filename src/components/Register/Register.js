import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value.trim() })
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value.trim() })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value.trim() })
  }

  handleSubmit = async () => {
    try {
      const res = await fetch('https://damp-retreat-12750.herokuapp.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
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
      console.log('error reaching register endpoint at server')
    }
  }

  render() {
    return (
      <div className="mt3">
        <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 center">Register</legend>

                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleNameChange}
                  />
                </div>

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
                  value="Register"
                  onClick={this.handleSubmit}
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => {
                    this.props.handleRouteChange('signin')
                  }}
                  className="f6 link dim black db tc pointer"
                >
                  Sign In
                </p>
              </div>
            </form>
          </main>
        </article>
      </div>
    )
  }
}

export default Register
