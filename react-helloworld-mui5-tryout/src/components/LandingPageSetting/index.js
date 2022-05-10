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
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';
import * as React from 'react';
import { Save, X } from 'react-feather';

import LandingScreenShotPng from './landing_screen_shot.png';

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
      LandingPageSetting
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
            <MKTypography
              variant={'h6'}
              sx={{ textAlign: 'left' }}
              opacity={0.8}
            >
              meny 受付ページの設定
            </MKTypography>
          </Box>
          <Box pt={2}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box pt={2}>
                  <TextField
                    label="テキストヒント"
                    variant="outlined"
                    fullWidth
                  />
                </Box>

                <Box pt={2}>
                  <TextField
                    label="大人の最大人数"
                    variant="outlined"
                    fullWidth
                  />
                </Box>

                <Box pt={2}>
                  <TextField
                    label="子供の最大人数"
                    variant="outlined"
                    fullWidth
                  />
                </Box>

                <Box pt={2}>
                  <TextField label="備考欄" variant="outlined" fullWidth />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundImage: `url("${LandingScreenShotPng}")`,
                    height: '100%',
                    width: '100$%',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></Box>
              </Grid>
            </Grid>
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
                <MKButton variant="contained" color="dark" fullWidth>
                  <Box mr={1}>
                    <X />
                  </Box>
                  <Typography variant="subtitle2" color="white">
                    キャンセル
                  </Typography>
                </MKButton>
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="contained" color="success" fullWidth>
                  <Box mr={1}>
                    <Save />
                  </Box>
                  <Typography variant="subtitle2" color="#fff">
                    OK
                  </Typography>
                </MKButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
