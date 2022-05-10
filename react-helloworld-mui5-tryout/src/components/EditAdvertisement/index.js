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
import { Check, X } from 'react-feather';

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
      EditAdvertisement
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
          <Grid container p={2} spacing={2}>
            <Grid item xs={12} container justifyContent="flex-start">
              <MKTypography variant={'h6'}>広告編集</MKTypography>
            </Grid>

            <Grid
              item
              xs={3}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <TextField label="広告名" variant="outlined" fullWidth />
            </Grid>

            <Grid
              item
              xs={3}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Box style={{ width: '100%', height: '100%' }}>
                <FormControl fullWidth style={{ height: '100%' }}>
                  <InputLabel id="demo-simple-select-label">
                    広告位置
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="広告位置"
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
              xs={3}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Box style={{ width: '100%', height: '100%' }}>
                <FormControl fullWidth style={{ height: '100%' }}>
                  <InputLabel id="demo-simple-select-label">
                    アクション
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="アクション"
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
              xs={3}
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
            >
              <Box style={{ width: '100%', height: '100%' }}>
                <FormControl fullWidth style={{ height: '100%' }}>
                  <InputLabel id="demo-simple-select-label">
                    メニュー詳細
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="メニュー詳細"
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
              <Grid item xs={5}>
                <MKButton variant="contained" color="dark" fullWidth>
                  <Box mr={1}>
                    <X />
                  </Box>
                  <Typography variant="subtitle2" color="white" size={'small'}>
                    キャンセル
                  </Typography>
                </MKButton>
              </Grid>
              <Grid item xs={5}>
                <MKButton variant="contained" color="success" fullWidth>
                  <Box mr={1}>
                    <Check />
                  </Box>
                  <Typography variant="subtitle2" color="white" size={'small'}>
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
