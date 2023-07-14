import {TextField} from '@mui/material';
import React from 'react';
import {ParentProps} from '../common/types/Interfaces';
import {handleBlur, handleChange} from '../common/Utils/Form';

export const PhoneField = ({error, setError, form, setForm}: ParentProps) => {

  return (
    <>
      <TextField
        label={'Numer telefonu'}
        fullWidth
        value={form.phone}
        sx={{marginBottom: '1dvh'}}
        required={form.phoneConf?.required !== false}
        onChange={(event) => handleChange(event.target.value, 'phone',
          {form: {
            phoneConf: {
              regex: form.phoneConf?.regex !== undefined ? form.phoneConf?.regex : /^[0-9\s]+$/,
              min: form.phoneConf?.min !== undefined ? form.phoneConf.min : 6,
              max: form.phoneConf?.max !== undefined ? form.phoneConf.max : 15
              }, ...form}, setForm, error, setError})}
        onBlur={(event) => handleBlur(event.target.value, 'phone',
          {form: {phoneConf: {regex: form.phoneConf?.regex !== undefined ? form.phoneConf?.regex : /^[0-9\s]+$/}, ...form}, setForm, error, setError})}
        error={error.phoneError.error}
        helperText={error.phoneError.errMsg}
      />
    </>
  );
};