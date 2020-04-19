import React from 'react';
import {AUTH_TOKEN} from '../constants';

const _saveUserData = token => {
  localStorage.setItem(AUTH_TOKEN, token)
}

const Login = () => {
  const [{login, email, password, name}, setInfo] = React.useState({
    login: true,
    email: '',
    password: '',
    name: '',
  });

  return (
    <div>
      <h4 className="mv3">
        {login ? "Login" : "Sign Up"}
      </h4>
      <div className="flex flex-column">
        {!login && (
          <input
            type="text"
            value={name}
            placeholder="your name"
            onChange={({target: {value: name}}) => {
              setInfo(curr => ({...curr, name}));
            }}
          />
        )}
        <input
          type="text"
          value={email}
          placeholder="Your email address"
          onChange={({target: {value: email}}) => {
            setInfo(curr => ({...curr, email}));
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Choose a safe password"
          onChange={({target: {value: password}}) => {
            setInfo(curr => ({...curr, password}));
          }}
        />
      </div>
      <div className="flex mt3">
        <div
          className="pointer mr2 button"
          onClick={async () => {

          }}
        >
          {login ? "login" : "create account"}
        </div>
        <div
          className="pointer button"
          onClick={() => setInfo(curr => ({...curr, login: !curr.login}))}
        >
          {login
            ? 'need to create an account?'
            : 'already have an account?'}
        </div>
      </div>
    </div>
  )
};

export default Login;