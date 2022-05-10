import { Box, Grid, Typography } from '@mui/material';
import CancelButton from '../CancelButton';
import DeleteButton from '../DeleteButton';

export default () => {
  const handleDeleteOnClick = () => alert('delete onclick');
  return (
    <>
      <Box p={2} sx={{ maxWidth: '500px', width: '50vw' }}>
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
              <Typography variant={'h6'}>レストランを削除する</Typography>
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
                  <CancelButton />
                </Grid>
                <Grid item xs={5}>
                  <DeleteButton onClick={handleDeleteOnClick} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
