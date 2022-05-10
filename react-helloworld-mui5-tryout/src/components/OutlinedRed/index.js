// Material Kit 2 PRO React Examples
import { Box, Grid, Typography } from '@mui/material';

export default () => {
  return (
    <>
      OutlinedRed
      <Grid
        sx={{
          borderLeft: '8px solid #800000',
          borderRight: '8px solid #eee',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
          backgroundColor: '#fff',
        }}
        container
        justifyContent="space-between"
      >
        <Box sx={{ width: 'calc(100% - 5px)' }}>
          <Box
            sx={{ margin: '0.5rem', padding: '0.5rem', paddingLeft: '2rem' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4} container justifyContent="flex-start">
                <Typography variant="h6">受付番号 1</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">1 様 大人 1 / 子供 0</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ borderTop: '1px solid #7f8c8d' }}
              mt={1}
              mb={1}
              spacing={2}
            >
              <Grid
                item
                xs={5}
                container
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Box
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    lineHeight: '1.5rem',
                  }}
                >
                  <Typography variant="caption">2022年04月21日</Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    lineHeight: '1.5rem',
                  }}
                >
                  <Typography variant="caption">18時16分</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={7}
                container
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Box
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    lineHeight: '1.5rem',
                  }}
                >
                  <Typography variant="caption">備考: 1</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
