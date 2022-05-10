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
      AddFood
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
              <MKTypography variant={'h6'}>商品編集</MKTypography>
            </Grid>

            <Grid
              item
              xs={6}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField label="商品名" variant="outlined" fullWidth />
            </Grid>

            <Grid
              item
              xs={6}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField label="値段" variant="outlined" fullWidth />
            </Grid>

            <Grid
              item
              xs={6}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField label="商品の詳細" variant="outlined" fullWidth />
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
                  <InputLabel id="demo-simple-select-label">
                    カテゴリー
                  </InputLabel>
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
              xs={6}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Box style={{ width: '100%', height: '100%' }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <MKButton variant="contained" component="span">
                      <Grid container justifyContent={'flex-start'}>
                        <PhotoCamera />

                        <MKTypography
                          variant="subtitle2"
                          sx={{ fontSize: '0.8rem', fontWeight: 'bold' }}
                        >
                          画像を追加する
                        </MKTypography>
                        <MKTypography
                          variant="subtitle2"
                          sx={{ fontSize: '0.8rem' }}
                        >
                          (推奨のサイズは1MB以下(PNG, JPG可))
                        </MKTypography>
                      </Grid>
                    </MKButton>
                  </label>
                </Stack>
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
                    登録する
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
