// Material Kit 2 PRO React Examples
import { useContext } from 'react';
import { TestContext } from '../../TestContext';
import MKButton from 'components/MKButton';
import { Typography, Button, Grid, Box, TextField } from '@mui/material';
import Icon from '@mui/material/Icon';

import { Save, X } from 'react-feather';
import MKTypography from 'components/MKTypography';
import FeedbackIcon from '@mui/icons-material/Feedback';
export default () => {
  return (
    <>
      ChangeRestaurantClosed
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

            <Grid
              container
              flexDirection={'row'}
              pt={2}
              justifyContent="center"
              alignItems="center"
            >
              <FeedbackIcon />
              <MKTypography variant={'subtitle2'} pl={1}>
                お客様は「準備中」の間はご注文頂けません。
              </MKTypography>
            </Grid>

            <Box pt={2}>
              <MKTypography variant={'body2'}>
                ※次の指定した営業開始時間から注文することができます。
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
                  <MKButton
                    variant="contained"
                    color="dark"
                    fullWidth
                    size="small"
                  >
                    <Typography variant="subtitle2" color="white">
                      キャンセル
                    </Typography>
                  </MKButton>
                </Grid>
                <Grid item xs={5}>
                  <MKButton
                    variant="contained"
                    color="error"
                    fullWidth
                    size="small"
                  >
                    <Typography variant="subtitle2" color="#fff">
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
