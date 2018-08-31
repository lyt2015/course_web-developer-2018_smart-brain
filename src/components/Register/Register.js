import React from 'react'

const Register = ({ handleRouteChange }) => {
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
                />
              </div>
            </fieldset>

            <div className="center w-50">
              <input
                className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="button"
                value="Register"
                onClick={() => {
                  handleRouteChange('home')
                }}
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => {
                  handleRouteChange('signin')
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

export default Register
