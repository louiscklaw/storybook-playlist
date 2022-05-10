import { Box, Grid, Typography } from '@mui/material';
import MKBadge from 'components/MKBadge';
import MKButton from 'components/MKButton';
import { Check } from 'react-feather';
import LynkedStyleTable from './LynkedStyleTable';

export default function FoodOrderTable() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          ServiceRequestTable
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <LynkedStyleTable columns={column_name} rows={table_data} />
        </Grid>
      </Grid>
    </>
  );
}

const column_name = [
  { column_text: '受付番号', name: 'name', align: 'center' },
  { column_text: '受付時間', name: 'function', align: 'left' },
  { column_text: 'テーブル', name: 'status', align: 'center' },
  { column_text: '名前', name: 'email', align: 'center' },
  { column_text: 'ステータス', name: 'food_status', align: 'center' },
];

const table_data = [
  {
    name: '1',
    function: 'テスト',
    status: 1,
    email: '#1',
    food_status: (
      <MKButton variant="contained" color="success" size={'small'}>
        <Typography variant="caption" color="#fff">
          確認済み
        </Typography>
      </MKButton>
    ),
  },
  {
    name: '1',
    function: 'Programator',
    status: 1,
    email: 'alexa@user.com',
    food_status: (
      <MKButton variant="contained" color="success" size={'small'}>
        <Typography variant="caption" color="#fff">
          確認済み
        </Typography>
      </MKButton>
    ),
  },
  {
    name: '1',
    function: 'Executive',
    status: 1,
    email: 'laurent@user.com',
    food_status: (
      <MKButton variant="contained" color="success" size={'small'}>
        <Typography variant="caption" color="#fff">
          確認済み
        </Typography>
      </MKButton>
    ),
  },
];
