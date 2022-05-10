// Material Kit 2 PRO React Examples
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
import { styled } from '@mui/material/styles';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';
import * as React from 'react';
import { UserPlus, X } from 'react-feather';

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
      AddRestaurantOperator
      <Box p={2}>
        <Box
          sx={{
            borderLeft: '8px solid #263238',
            borderRight: '8px solid #eee',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            backgroundColor: '#fff',
          }}
        >
          <Grid container p={4} spacing={2}>
            <Grid item xs={12} container justifyContent="flex-start">
              <MKTypography variant={'h6'}>新客戶</MKTypography>
            </Grid>

            <Grid
              item
              xs={4}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField label="email" variant="outlined" fullWidth />
            </Grid>

            <Grid
              item
              xs={4}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField
                type="password"
                label="password"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={4}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Box style={{ width: '100%', height: '100%' }}>
                <FormControl fullWidth style={{ height: '100%' }}>
                  <InputLabel id="demo-simple-select-label">
                    Service plan
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Service plan"
                    onChange={handleChange}
                    style={{ height: '100%' }}
                  >
                    <MenuItem value={10}>Meny Light</MenuItem>
                    <MenuItem value={20}>Meny</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              container
              justifyContent="space-between"
              pt={4}
              alignItems="center"
            >
              <Grid item xs={5}>
                <MKButton variant="contained" color="dark" fullWidth>
                  <Box mr={1}>
                    <X />
                  </Box>
                  <Typography variant="subtitle2" color="white" size={'small'}>
                    cancel
                  </Typography>
                </MKButton>
              </Grid>
              <Grid item xs={5}>
                <MKButton variant="contained" color="success" fullWidth>
                  <Box mr={1}>
                    <UserPlus />
                  </Box>
                  <Typography variant="subtitle2" color="white" size={'small'}>
                    add user
                  </Typography>
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
