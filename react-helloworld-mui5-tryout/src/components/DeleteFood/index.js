// Material Kit 2 PRO React Examples
import { Box, Grid, Typography } from '@mui/material';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';
import { Check, Trash2, X } from 'react-feather';

export default () => {
  return (
    <>
      DeleteFood
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
              <MKTypography variant={'h6'}>商品削除</MKTypography>
            </Box>

            <Grid
              container
              flexDirection={'row'}
              pt={2}
              justifyContent="center"
              alignItems="center"
            >
              <MKTypography variant={'subtitle2'} pl={1}>
                商品を削除しますか？
              </MKTypography>
            </Grid>

            <Box pt={2}>
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
                      キャンセル
                    </Typography>
                  </MKButton>
                </Grid>
                <Grid item xs={4}>
                  <MKButton variant="contained" color="error" fullWidth>
                    <Box mr={1}>
                      <Trash2 />
                    </Box>
                    <Typography variant="subtitle2" color="#fff">
                      削除
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
