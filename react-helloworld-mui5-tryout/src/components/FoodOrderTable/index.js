import { Grid } from '@mui/material';
import MKBadge from 'components/MKBadge';
import LynkedStyleTable from './LynkedStyleTable';

export default function FoodOrderTable() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          FoodOrderTable
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
  { column_text: '商品名', name: 'function', align: 'left' },
  { column_text: '数量', name: 'status', align: 'center' },
  { column_text: 'テーブル', name: 'email', align: 'center' },
  { column_text: '受付時間', name: 'employed', align: 'center' },
  { column_text: 'ステータス', name: 'food_status', align: 'center' },
];

const table_data = [
  {
    name: '1',
    function: 'テスト',
    status: 1,
    email: '#1',
    employed: '04月24日 19時23分',
    food_status: (
      <MKBadge
        variant="contained"
        badgeContent="準備中"
        color="warning"
        size="s"
        container
      />
    ),
  },
  {
    name: '1',
    function: 'Programator',
    status: 1,
    email: 'alexa@user.com',
    employed: '11/01/19',
    food_status: (
      <MKBadge
        variant="contained"
        badgeContent="準備中"
        color="primary"
        size="s"
        container
      />
    ),
  },
  {
    name: '1',
    function: 'Executive',
    status: 1,
    email: 'laurent@user.com',
    employed: '19/09/17',
    food_status: (
      <MKBadge
        variant="contained"
        badgeContent="準備中"
        color="primary"
        size="s"
        container
      />
    ),
  },
];
