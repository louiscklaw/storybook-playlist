// Material Kit 2 PRO React Examples
import { Box, Button, Grid, Typography } from '@mui/material';
import { Trash2, X } from 'react-feather';

export default () => {
  return (
    <>
      DeleteAdvertisement
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
          <Box p={4}>
            <Box>
              <Typography variant={'h6'}>削除</Typography>
            </Box>

            <Grid
              container
              flexDirection={'row'}
              pt={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant={'subtitle2'} pl={1}>
                広告を削除しますか？
              </Typography>
            </Grid>

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
                    <Typography variant="subtitle2" size={'small'}>
                      キャンセル
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button variant="contained" color="error" fullWidth>
                    <Box mr={1}>
                      <Trash2 />
                    </Box>
                    <Typography variant="subtitle2" size={'small'}>
                      削除
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
