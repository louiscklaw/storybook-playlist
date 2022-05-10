import { Box, Grid, Typography } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Check, X } from 'react-feather';

export default function TableInfo() {
  return (
    <>
      <Grid
        container
        sx={{ borderLeft: '1px solid #eee', height: '100%' }}
        pl={1}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Grid item>
          <Grid container justifyContainer={'space-between'}>
            <Grid item xs={6} sx={{ textAlign: 'left' }}>
              <Typography variant="h6">1 様</Typography>
            </Grid>

            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography variant="h6">テーブル 1</Typography>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption">1 様 大人 1 / 子供 0</Typography>
          </Box>

          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="caption">合計 1 点</Typography>
          </Box>
        </Grid>

        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            alignItem={'center'}
            sx={{ textAlign: 'left', borderTop: '1px solid #eee' }}
            pt={1}
            mt={1}
          >
            <Grid
              item
              xs={8}
              component={Typography}
              variant="subtitle2"
              sx={{ fontSize: '0.8rem' }}
            >
              （サービス料＋消費税）
            </Grid>

            <Grid
              item
              xs={4}
              component={Typography}
              variant="h4"
              color="info"
              sx={{ textAlign: 'right' }}
            >
              ¥1
            </Grid>
          </Grid>

          <Grid container spacing={2} pt={2}>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                <Box mr={1}>
                  <X />
                </Box>
                <Typography
                  variant="subtitle2"
                  color="#eee"
                  sx={{ fontSize: '0.8rem' }}
                >
                  全て見る
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="error" fullWidth>
                <Box mr={1}>
                  <Check />
                </Box>
                <Typography
                  variant="subtitle2"
                  color="#eee"
                  sx={{ fontSize: '0.8rem' }}
                >
                  会計完了
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
