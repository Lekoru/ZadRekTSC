import React, {useState} from "react";
import {Button, Checkbox, FormControl, FormHelperText, Grid, TextField, Typography} from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import VerifiedIcon from '@mui/icons-material/Verified';
export const Zad2 = () => {
  const [form, setForm] = useState<Form>( {name: '', secondName: '', email: '', phone: '', message: '', privacy: false})

  return (
    <>
      <Grid container justifyContent={'space-evenly'} alignContent={'space-around'}>
        <FormControl size={"small"}>
          <Grid item container justifyContent={'center'}>
            <Typography variant={'h3'} sx={{marginBottom: '1dvh'}}>
              Kontakt
            </Typography>
          </Grid>
          <Grid item container justifyContent={'space-between'}>
            <Grid item xs={5.90} >
              <TextField
                label={'Imie'}
                fullWidth
                sx={{marginBottom: '1dvh'}}
              />
            </Grid>
            <Grid item xs={5.90}>
              <TextField
                label={'Nazwisko'}
                fullWidth
                sx={{marginBottom: '1dvh'}}/>
            </Grid>
          </Grid>
          <Grid item container justifyContent={'space-between'}>
            <Grid item xs={5.90}>
              <TextField
                label={'E-mail'}
                fullWidth
                sx={{marginBottom: '1dvh'}}
              />
            </Grid>
            <Grid item xs={5.90}>
              <TextField
                label={'Numer telefonu'}
                type={'number'}
                fullWidth
                sx={{marginBottom: '1dvh'}}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Wiadomość'}
              fullWidth
              multiline
            />
          </Grid>
          <Grid item container alignContent={'center'} justifyContent={'center'}>
            <Grid item>
              <Checkbox
                sx={{margin: '0 0.5dvw 1dvh 0', height: '100%'}}
                icon={<TaskAltIcon />}
                checkedIcon={<VerifiedIcon />}
              />
            </Grid>
            <Grid item xs={5} container alignContent={'center'}>Polityka prywatności</Grid>
          </Grid>
          <Button type={'submit'} variant={'contained'}>Wyślij</Button>
        </FormControl>
      </Grid>
    </>
  )
}