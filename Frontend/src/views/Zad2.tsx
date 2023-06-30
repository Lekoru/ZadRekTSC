import React, {useEffect, useState} from 'react';
import {Button, Checkbox, FormControl, FormHelperText, Grid, TextField, Typography} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
import {NameField} from '../components/NameField'; 
export const Zad2 = () => {
  const [form, setForm] = useState<Form>( {name: '', secondName: '', email: '', phone: '', message: '', privacy: false})

  return (
    <>
      <Grid container justifyContent={'space-evenly'} alignContent={'space-around'}>
        <FormControl size={'small'}>
          <Grid item container justifyContent={'center'}>
            <Typography variant={'h3'} sx={{marginBottom: '1dvh'}}>
              Kontakt
            </Typography>
          </Grid>
          <Grid container justifyContent={'space-between'}>
            <Grid item xs={5.90} >
              <NameField error={error} setError={setError} form={form} setForm={setForm} />
            </Grid>
            <Grid item xs={5.90}>
              <TextField
                label={'Nazwisko'}
                fullWidth
                sx={{marginBottom: '1dvh'}}
                required={secondNameConf?.required}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={'space-between'}>
            <Grid item xs={5.90}>
              <TextField
                label={'E-mail'}
                fullWidth
                sx={{marginBottom: '1dvh'}}
                required={emailConf?.required === false ? emailConf?.required : true}
              /> 
            </Grid>
            <Grid item xs={5.90}>
              <TextField
                label={'Numer telefonu'}
                fullWidth
                sx={{marginBottom: '1dvh'}}
                required={phoneConf?.required ? phoneConf?.required : true }
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Wiadomość'}
              fullWidth
              multiline
              required={messageConf?.required}
            />
          </Grid>
          <Grid container alignContent={'center'} justifyContent={'center'}>
            <Grid item>
              <Checkbox
                size={'small'}
                sx={{height: '100%'}}
                icon={<TaskAltIcon color={error.privacyError.error ? 'error' : 'inherit'}/>}
                checkedIcon={<VerifiedIcon />}
                onClick={handlePrivacy}
              />
            </Grid>
            <Grid item xs={5} container alignContent={'center'}>
              <Typography variant={'body1'} color={ error.privacyError.error ? 'error' : 'inherit'}>
                Polityka prywatności
              </Typography>
            </Grid>
          </Grid>
          <Button type={'submit'} variant={'contained'} onClick={handleSubmit}>Wyślij</Button>
        </FormControl>
      </Grid>
    </>
  );
};