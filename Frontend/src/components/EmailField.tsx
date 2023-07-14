import {TextField} from '@mui/material';
import React from 'react';
import {ParentProps} from '../common/types/Interfaces';
import {handleBlur, handleChange} from '../common/Utils/Form';

export const EmailField = ({error, setError, form, setForm}: ParentProps) => {

  return (
    <>
      <TextField
        label={'Email'}
        fullWidth
        value={form.email}
        sx={{marginBottom: '1dvh'}}
        required={form.emailConf?.required !== false}
        onChange={(event) => handleChange(event.target.value, 'email',
          {form: {emailConf: {regex: form.emailConf?.regex ? form.emailConf?.regex : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i}, ...form}, setForm, error, setError})}
        onBlur={(event) => handleBlur(event.target.value, 'email',
          {form: {emailConf: {regex: form.emailConf?.regex ? form.emailConf?.regex : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i}, ...form}, setForm, error, setError})}
        error={error.emailError.error}
        helperText={error.emailError.errMsg}
      />
    </>
  );
};