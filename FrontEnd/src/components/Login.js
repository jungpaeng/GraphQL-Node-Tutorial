import React from 'react';
import gql from 'graphql-tag';
import {useHistory} from 'react-router';
import {useMutation} from '@apollo/react-hooks';
import {AUTH_TOKEN} from '../constants';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const _saveUserData = token => {
  localStorage.setItem(AUTH_TOKEN, token)
}

const Login = () => {
  const history = useHistory();
  const [{login, email, password, name}, setInfo] = React.useState({
    login: true,
    email: '',
    password: '',
    name: '',
  });

  const _confirm = async data => {
    const {token} = login ? data.login : data.signup;
    _saveUserData(token);
    history.push('/');
  };

  const mutation = login ? LOGIN_MUTATION : SIGNUP_MUTATION;
  const [submit] = useMutation(mutation, {
    variables: {email, password, name},
    onCompleted: data => _confirm(data),
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
          onClick={submit}
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