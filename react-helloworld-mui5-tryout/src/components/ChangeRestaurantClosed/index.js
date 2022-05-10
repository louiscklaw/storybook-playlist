// Material Kit 2 PRO React Examples
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Box, Button, Grid, Typography } from '@mui/material';

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
              <Typography variant={'h6'}>注意事項</Typography>
            </Box>

            <Grid
              container
              flexDirection={'row'}
              pt={2}
              justifyContent="center"
              alignItems="center"
            >
              <FeedbackIcon />
              <Typography variant={'subtitle2'} pl={1}>
                お客様は「準備中」の間はご注文頂けません。
              </Typography>
            </Grid>

            <Box pt={2}>
              <Typography variant={'body2'}>
                ※次の指定した営業開始時間から注文することができます。
              </Typography>
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
                  <Button variant="contained" fullWidth size="small">
                    <Typography variant="subtitle2">キャンセル</Typography>
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    size="small"
                  >
                    <Typography variant="subtitle2" color="#fff">
                      OK
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
