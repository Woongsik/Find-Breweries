import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, TextField, Button } from '@mui/material';

type Inputs = {
  name: string
  email: string,
  inquiry: string,
  test: string
}

export function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('Your inquiry is submitted!', data);

    setTimeout(() => {
      setSubmit(true);
    }, 1000);
  }

  if (submit) {
    return <Box component='div' sx={{ height: '50vh', display: 'flex', alignItems: 'center' }}>
      <Box component='div' alignItems='center' justifyContent='center' display='ruby' >
        <h1>Thank you so much, we will contact you soon! </h1>
        <Button 
          variant='outlined' 
          color='primary'>
            <Link to="/home">Back to Home</Link>
        </Button>
      </Box>
    </Box>
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            {...register("name", { required: true, pattern: /^[A-Za-z]+$/i }) }
            error={Boolean(errors.name)}
            label="Name"
            helperText={errors.name ? 'Incorrect name! Avoid numbers or special characters' : ''} />
        </div>
        <div>
          <TextField
            {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ }) }
            error={Boolean(errors.email)}
            label="Email"
            helperText={errors.email ? 'Incorrect email! Check again with proper address' : ''} />
        </div>
        <div>
          <TextField
            {...register("inquiry", { required: true, pattern: /^[A-Za-z]+$/i }) }
            error={Boolean(errors.inquiry)}
            label="Ask us anything!"
            helperText={errors.inquiry ? 'Write your inquiries...' : ''}
            multiline
            rows={10} />
        </div>

        <div style={{ margin: '30px 0' }}>
          <Button 
            variant='contained' 
            color='primary' 
            sx={{ width: '100%' }}
            type='submit'>
            Submit
          </Button>
        </div>
    </Box>
  );
}