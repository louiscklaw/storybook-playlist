import { Box, Grid, Icon, Typography } from '@mui/material';
import MKButton from 'components/MKButton';

export default function AlertNewServiceRequest() {
  return (
    <>
      <Grid
        component={Box}
        sx={{
          width: '50vh',
          height: '50vh',
          maxWidth: '15rem',
          maxHeight: '15rem',
          backgroundColor: '#800000',
          color: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        }}
        container
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h4" color="#fff">
            新しいオーダ
            <br />
            ーがありました
          </Typography>
        </Box>

        <Box>
          <Icon color="#fff" fontSize="large">
            favorite
          </Icon>
        </Box>

        <Box>
          <MKButton size="small">
            <Typography
              variant="subtitle2"
              sx={({
                typography: { size, fontWeightBold },
                borders: { borderWidth, borderColor },
              }) => ({
                fontSize: size.s,
                color: '#000',
              })}
            >
              OK
            </Typography>
          </MKButton>
        </Box>
      </Grid>
    </>
  );
}
