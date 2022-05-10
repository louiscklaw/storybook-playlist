// Material Kit 2 PRO React Examples
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { Save, X } from 'react-feather';

export default () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      AddCategory
      <Box p={2}>
        <Box
          sx={{
            borderLeft: '8px solid #800000',
            borderRight: '8px solid #eee',
            borderRadius: '8px',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            backgroundColor: '#fff',
          }}
        >
          <Grid container p={4} spacing={2}>
            <Grid item xs={12} container justifyContent="flex-start">
              <Typography variant={'h6'}>カテゴリー追加</Typography>
            </Grid>

            <Grid
              item
              xs={6}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField label="カテゴリー追加" variant="outlined" fullWidth />
            </Grid>

            <Grid
              item
              xs={6}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Box style={{ width: '100%', height: '100%' }}>
                <FormControl fullWidth style={{ height: '100%' }}>
                  <InputLabel id="demo-simple-select-label">公開 ?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    style={{ height: '100%' }}
                  >
                    <MenuItem value={10}>公開</MenuItem>
                    <MenuItem value={20}>未公開</MenuItem>
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
                    登録する
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
