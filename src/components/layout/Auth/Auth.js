import './Auth.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import { Visibility, VisibilityOff } from '@material-ui/icons/'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch'
    }
  },
  textField: {
    width: '35ch',
    marginBottom: '2rem'
  }
}))

function Auth (props) {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const onChangeHandler = (event) => {
    const name = event.target.name
    name === 'email' ? setEmail(event.target.value) : setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password)
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <div className='container'>
      <div className='flex-jcc fw'>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className='mb2r flex-jcc'>
            <h2 className=''>
              Login
            </h2>
          </div>
          <div className={classes.margin}>
            <TextField
              label="Email"
              id="standard-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              name='email'
              value={email}
              onChange={onChangeHandler}
              required
              maxLength={56}
            />
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={onChangeHandler}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className='flex-jcc mb2r'>
            <Button type='submit' variant="contained" color="primary" className='mb2r'>
              Sign In
            </Button>
          </div>
          <div className='flex-jcc mb2r'>
            <span>Do not have an account?</span>&ensp;<Link to='/register'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

Auth.propTypes = {
  User: PropTypes.object
}

export default inject('User')(observer(Auth))
