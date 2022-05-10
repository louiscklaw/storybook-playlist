// Material Kit 2 PRO React Examples
import { useContext } from 'react';
import { TestContext } from '../TestContext';
import MKButton from 'components/MKButton';
import { Typography, Button, Grid, Box } from '@mui/material';
import Icon from '@mui/material/Icon';

export default () => {
  return (
    <>
      <>OutlineSmallCardRed</>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <Grid
            sx={{
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            }}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Grid container ml={1} mr={1} justifyContent="flex-start">
                <Box>
                  <Typography variant="caption" sx={{ paddingLeft: '0.2rem' }}>
                    2022年04月21日 19時28分
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderTop: '1px solid black',
                    width: '100%',
                    textAlign: 'left',
                  }}
                  mr={2}
                >
                  <Typography variant="caption" sx={{ paddingLeft: '0.2rem' }}>
                    テーブル 1
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid
                container
                sx={{ height: '100px' }}
                justifyContent="center"
                alignItems="center"
              >
                <MKButton
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0px 8px 8px 0px',
                  }}
                  color="success"
                >
                  <Typography variant="subtitle2">完了</Typography>
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
