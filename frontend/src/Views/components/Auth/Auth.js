import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { register, login } from '../../../Store/actions/authActions';
import useStyles from './Styles';
import Input from './Input';

const initialState = { name: '', email: '', password: '', confirmPassword: '', mobile_no: '' };

const Register = () => {
  const [form, setForm] = useState(initialState);
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsRegister((prevIsRegister) => !prevIsRegister);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      dispatch(register(form, history));
    } else {
      dispatch(login(form, history));
    }
  };

  // const success = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });

  //     history.push('/');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        
        <Typography component="h1" variant="h5">{isRegister ? 'Register' : 'Login'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>

            <Input name="email" label="Email Address" handleChange={handleChange} />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isRegister && (
              <>
                <Input name="name" label="Name" handleChange={handleChange} autoFocus />
                <Input name="mobile_no" label="Mobile No" handleChange={handleChange} />
              </>
            )}
            {isRegister && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isRegister ? 'Register' : 'Login'}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;