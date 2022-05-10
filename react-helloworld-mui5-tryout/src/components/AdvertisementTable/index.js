import { Grid } from '@mui/material';
import MKBadge from 'components/MKBadge';
import MKButton from 'components/MKButton';
import Icon from '@mui/material/Icon';
import LynkedStyleTable from './LynkedStyleTable';

export default function AdvertisementTable() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          AdvertisementTable
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
  { column_text: '広告名', name: 'function', align: 'left' },
  { column_text: '画像', name: 'status', align: 'center' },
  { column_text: '広告位置', name: 'email', align: 'center' },
  { column_text: 'アクション', name: 'employed', align: 'center' },
  { column_text: '移動先', name: 'food_status', align: 'center' },
];

const table_data = [
  {
    name: '1',
    function: 'テスト',
    status: (
      <MKBadge
        variant="contained"
        badgeContent="メニュー"
        color="warning"
        size="s"
        container
      />
    ),
    email: (
      <MKBadge
        variant="contained"
        badgeContent="メニュー詳細"
        color="warning"
        size="s"
        container
      />
    ),
    employed: (
      <MKBadge
        variant="contained"
        badgeContent="test1"
        color="disabled"
        size="s"
        container
      />
    ),
    food_status: (
      <>
        <MKButton iconOnly size="large">
          <Icon>delete</Icon>
        </MKButton>
        <MKButton iconOnly size="large">
          <Icon>edit</Icon>
        </MKButton>
      </>
    ),
  },
  {
    name: '1',
    function: 'Programator',
    status: 1,
    email: 'alexa@user.com',
    employed: '11/01/19',
    food_status: (
      <>
        <MKButton iconOnly size="large">
          <Icon>delete</Icon>
        </MKButton>
        <MKButton iconOnly size="large">
          <Icon>edit</Icon>
        </MKButton>
      </>
    ),
  },
  {
    name: '1',
    function: 'Executive',
    status: 1,
    email: 'laurent@user.com',
    employed: '19/09/17',
    food_status: (
      <>
        <MKButton iconOnly size="large">
          <Icon>delete</Icon>
        </MKButton>
        <MKButton iconOnly size="large">
          <Icon>edit</Icon>
        </MKButton>
      </>
    ),
  },
];
