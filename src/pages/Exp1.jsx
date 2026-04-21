import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Paper, Typography, Box, Alert, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const fakeAuth = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      email === 'admin@test.com' && password === 'password123'
        ? resolve()
        : reject(new Error('Invalid credentials'));
    }, 1500);
  });

function Exp1() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    try {
      await fakeAuth(data.email, data.password);
      setStatus({ type: 'success', msg: 'Login successful! Redirecting...' });
    } catch (err) {
      setStatus({ type: 'error', msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 480, margin: '60px auto', padding: 2 }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#1976d2', fontSize: 14 }}>← Back to Home</Link>
      <Typography variant="h5" mt={2} mb={3}>Exp 3.1.1 – Login Form</Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="body2" mb={2} color="text.secondary">
          Test credentials: <strong>admin@test.com</strong> / <strong>password123</strong>
        </Typography>

        {status && (
          <Alert severity={status.type === 'success' ? 'success' : 'error'} sx={{ mb: 2 }}>
            {status.msg}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth label="Email" margin="normal"
            error={!!errors.email} helperText={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' }
            })}
          />
          <TextField
            fullWidth type="password" label="Password" margin="normal"
            error={!!errors.password} helperText={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Min 6 characters' }
            })}
          />
          <Button
            type="submit" fullWidth variant="contained" disabled={loading} sx={{ mt: 2 }}
            startIcon={loading && <CircularProgress size={18} color="inherit" />}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Exp1;
