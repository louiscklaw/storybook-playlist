import * as React from 'react';
import { Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
      <Chip
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
      <Chip
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
      <Chip
        variant="contained"
        badgeContent="準備中"
        color="primary"
        size="s"
        container
      />
    ),
  },
];
