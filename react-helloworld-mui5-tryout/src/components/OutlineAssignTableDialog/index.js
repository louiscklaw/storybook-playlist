// Material Kit 2 PRO React Examples
import { Box, Grid, TextField, Typography } from '@mui/material';
import MKButton from 'components/MKButton';
import { Check, X } from 'react-feather';

export default () => {
  return (
    <>
      <Grid
        sx={{
          borderLeft: '8px solid #800000',
          borderRight: '8px solid #eee',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
          backgroundColor: '#fff',
        }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ width: '90%' }} m={2}>
          <Grid item xs={12} container justifyContent="flex-start">
            <Typography variant="h6">1 様 大人 1 / 子供 0</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ borderTop: '1px solid #dcdde1' }}
            mt={2}
            mb={2}
          ></Grid>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
          >
            <TextField label="テーブル番号" variant="outlined" fullWidth />
          </Grid>

          <Grid
            container
            justifyContent="space-between"
            mt={3}
            mb={3}
            alignItems="center"
          >
            <Grid item xs={4}>
              <MKButton variant="contained" color="dark" fullWidth>
                <Box mr={1}>
                  <X />
                </Box>
                <Typography variant="subtitle2" color="white">
                  Cancel
                </Typography>
              </MKButton>
            </Grid>
            <Grid item xs={4}>
              <MKButton variant="contained" color="success" fullWidth>
                <Box mr={1}>
                  <Check />
                </Box>
                <Typography variant="subtitle2" color="white">
                  OK
                </Typography>
              </MKButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
