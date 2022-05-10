// Material Kit 2 PRO React Examples
import { Box, Grid, Typography } from '@mui/material';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';
import { Save, X } from 'react-feather';

export default () => {
  return (
    <>
      ChangeRestaurantOpen
      <Box p={2}>
        <Box
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
          <Box p={8} pt={4} pb={4}>
            <Box>
              <MKTypography variant={'h6'}>注意事項</MKTypography>
            </Box>

            <Box pt={2}>
              <MKTypography variant={'subtitle2'}>
                お客様は「営業中」の間は注文することができます。
              </MKTypography>
            </Box>

            <Box pt={2}>
              <Grid
                container
                justifyContent="space-between"
                mt={3}
                mb={3}
                alignItems="center"
              >
                <Grid item xs={5}>
                  <MKButton variant="contained" color="dark" fullWidth>
                    <Box mr={1}>
                      <X />
                    </Box>
                    <Typography variant="subtitle2" color="white" size="small">
                      キャンセル
                    </Typography>
                  </MKButton>
                </Grid>
                <Grid item xs={5}>
                  <MKButton variant="contained" color="success" fullWidth>
                    <Box mr={1}>
                      <Save />
                    </Box>
                    <Typography variant="subtitle2" color="white" size="small">
                      OK
                    </Typography>
                  </MKButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
