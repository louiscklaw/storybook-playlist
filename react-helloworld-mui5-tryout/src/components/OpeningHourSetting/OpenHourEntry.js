// Material Kit 2 PRO React Examples
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import * as React from 'react';
import { Check, X } from 'react-feather';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function OpenHourEntry({ day_label }) {
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} pt={2}>
        <Grid
          item
          xs={3}
          container
          justifyContent="center"
          alignItem="center"
          sx={{}}
        >
          <Typography variant={'h6'} opacity={0.8}>
            {day_label}
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent="center"
          alignItem="center"
          sx={{}}
        >
          <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="営業開始"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="営業終了"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ minWidth: 120, height: '100%' }}>
            <FormControl fullWidth sx={{ height: '100%' }}>
              <InputLabel id="date-open">enabled?</InputLabel>
              <Select
                labelId="date-open"
                id="date-open"
                value={age}
                label="enabled?"
                onChange={handleChange}
                sx={{ height: '100%' }}
              >
                <MenuItem value={10}>使用</MenuItem>
                <MenuItem value={20}>不使用</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
