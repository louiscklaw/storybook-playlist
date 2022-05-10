// Material Kit 2 PRO React Examples
import { Box, Button, Grid, Typography } from '@mui/material';
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
              <Typography variant={'h6'}>注意事項</Typography>
            </Box>

            <Box pt={2}>
              <Typography variant={'subtitle2'}>
                お客様は「営業中」の間は注文することができます。
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
                  <Button variant="contained" fullWidth>
                    <Box mr={1}>
                      <X />
                    </Box>
                    <Typography variant="subtitle2" size="small">
                      キャンセル
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button variant="contained" fullWidth>
                    <Box mr={1}>
                      <Save />
                    </Box>
                    <Typography variant="subtitle2" size="small">
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
