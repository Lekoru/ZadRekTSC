import {TextField} from '@mui/material';
import React from 'react';
import {ParentProps} from '../common/types/Interfaces';
import {handleBlur, handleChange} from '../common/Utils/Form';

export const NameField = ({error, setError, form, setForm}: ParentProps) => {

  return(
    <>
      <TextField
        label={'Imie'}
        fullWidth
        value={form.name}
        sx={{marginBottom: '1dvh'}}
        required={form.nameConf?.required}
        onChange={(event) => handleChange(event.target.value, 'name', {form, setForm, error, setError})}
        onBlur={(event) => handleBlur(event.target.value, 'name', {form, setForm, error, setError})}
        error={error.nameError.error}
        helperText={error.nameError.errMsg}
      />
    </>
  );
};