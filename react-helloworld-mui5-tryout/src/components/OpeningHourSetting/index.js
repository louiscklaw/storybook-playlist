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
import { Check, Save, X } from 'react-feather';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import OpenHourEntry from './OpenHourEntry';

const Input = styled('input')({
  display: 'none',
});

export default () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      OpeningHourSetting
      <Box p={2}>
        <Box
          sx={{
            borderLeft: '8px solid #800000',
            borderRight: '8px solid #eee',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            backgroundColor: '#fff',
          }}
          p={2}
        >
          <Box sx={{ borderBottom: '1px solid #ccc' }}>
            <Typography variant={'h6'} sx={{ textAlign: 'left' }} opacity={0.8}>
              営業時間設定
            </Typography>
          </Box>
          <Box pt={2}>
            <OpenHourEntry day_label="月" />
            <OpenHourEntry day_label="火" />
            <OpenHourEntry day_label="水" />
            <OpenHourEntry day_label="木" />
            <OpenHourEntry day_label="金" />
            <OpenHourEntry day_label="土" />
            <OpenHourEntry day_label="日" />
          </Box>
          <Box pt={2}>
            <Grid
              item
              xs={12}
              container
              justifyContent="space-between"
              pt={4}
              alignItems="center"
            >
              <Grid item xs={4}>
                <Button variant="contained" fullWidth>
                  <Box mr={1}>
                    <X />
                  </Box>
                  <Typography variant="subtitle2">キャンセル</Typography>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" fullWidth>
                  <Box mr={1}>
                    <Save />
                  </Box>
                  <Typography variant="subtitle2" color="#fff">
                    OK
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
