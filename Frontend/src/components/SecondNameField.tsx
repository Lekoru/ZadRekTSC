import {TextField} from '@mui/material';
import React from 'react';
import {ParentProps} from '../common/types/Interfaces';
import {handleBlur, handleChange} from '../common/Utils/Form';

export const SecondNameField = ({error, setError, form, setForm}: ParentProps) => {

  return (
    <>
      <TextField
        label={'Nazwisko'}
        fullWidth
        value={form.secondName}
        sx={{marginBottom: '1dvh'}}
        required={form.secondNameConf?.required}
        onChange={(event) => handleChange(event.target.value, 'secondName', {form, setForm, error, setError})}
        onBlur={(event) => handleBlur(event.target.value, 'secondName', {form, setForm, error, setError})}
        error={error.secondNameError.error}
        helperText={error.secondNameError.errMsg}
      />
    </>
  );
};