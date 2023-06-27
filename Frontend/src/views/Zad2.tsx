import React, {useState} from "react";
import {Button, FormControl, FormHelperText, Grid, TextField} from "@mui/material";
import {CheckBox} from "@mui/icons-material";

export const Zad2 = () => {
  const [form, setForm] = useState<Form>( {name: '', secondName: '', email: '', phone: '', message: '', privacy: false})

  return (
    <>
      <Grid container justifyContent={'space-evenly'} alignContent={'space-around'}>
        <FormControl size={"small"}>
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
              sx={{marginBottom: '1dvh'}}
            />
          </Grid>
          <Grid item container alignContent={'center'} justifyContent={'center'}>
            <CheckBox sx={{margin: '0 0.5dvw 1dvh 0', }} />
            <span>Polityka prywatności</span>
          </Grid>
          <Button type={'submit'} variant={'contained'}>Wyślij</Button>
        </FormControl>
      </Grid>
    </>
  )
}