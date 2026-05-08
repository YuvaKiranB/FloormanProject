import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Context from '../../Context'

import {
  Label,
  Input,
  LoginContainer,
  FormContainer,
  LogoImage,
  InputContainer,
  CheckBoxLabel,
  CheckBoxInput,
  LoginButton,
  ErrorMessage,
  CheckBoxContainer,
  ButtonLoader,
} from './styling'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    showPassword: false,
    errorMessage: '',
    isLoading: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 1})


    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    this.setState({isLoading:true})
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'http://10.249.168.1:4000/login'

    const jsonUserDetails = JSON.stringify(userDetails)
    const options = {
      method: 'POST',
      headers: {'Content-Type': "application/json"}, 
      body: jsonUserDetails,
    }


    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
      console.log("ok")
    } else {
      this.onSubmitFailure(data.error)
    }
    this.setState({isLoading: false})
  }

  renderPasswordField = isDarkMode => {
    const {password, showPassword} = this.state
    const type = showPassword ? 'text' : 'password'

    return (
      <>
        <Label color={isDarkMode ? 'white' : '#7e858e'} htmlFor="password">
          PASSWORD
        </Label>
        <Input
          type={type}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          backgroundColor={isDarkMode ? 'black' : 'white'}
          color={isDarkMode ? 'white' : '#64748b'}
        />
      </>
    )
  }

  renderUsernameField = isDarkMode => {
    const {username} = this.state
    return (
      <>
        <Label color={isDarkMode ? 'white' : '#7e858e'} htmlFor="username">
          USERNAME
        </Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          backgroundColor={isDarkMode ? 'black' : 'white'}
          color={isDarkMode ? 'white' : '#64748b'}
        />
      </>
    )
  }

  toggleShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Context.Consumer>
        {value => {
          const {isDarkMode} = value
          const {isLoading} = this.state

          return (
            <LoginContainer
              backgroundColor={isDarkMode ? '#181818' : '#f9f9f9'}
            >
              <FormContainer
                onSubmit={this.submitForm}
                backgroundColor={isDarkMode ? 'black' : 'white'}
              >
                {isDarkMode ? (
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LogoImage
                    src="https://res.cloudinary.com/drgoav3vf/image/upload/v1777620359/Floorman_light_guqmsn.jpg"
                    alt="website logo"
                  />
                )}
                <InputContainer>
                  {this.renderUsernameField(isDarkMode)}
                </InputContainer>
                <InputContainer>
                  {this.renderPasswordField(isDarkMode)}
                </InputContainer>
                <CheckBoxContainer>
                  <CheckBoxInput
                    onChange={this.toggleShowPassword}
                    type="checkbox"
                    id="checkBox"
                  />
                  <CheckBoxLabel
                    htmlFor="checkBox"
                    color={isDarkMode ? 'white' : 'black'}
                  >
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">{!isLoading ? "Login" : <ButtonLoader></ButtonLoader>}</LoginButton>
                {showSubmitError && (
                  <ErrorMessage>{`*${errorMessage}`}</ErrorMessage>
                )}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
