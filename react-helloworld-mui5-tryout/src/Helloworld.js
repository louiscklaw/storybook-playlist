import { Box, useTheme } from '@mui/material';
import AlertNewServiceRequest from 'components/Lynked/AlertNewServiceRequest';

export default function Helloworld() {
  let { palette } = useTheme();
  return (
    <>
      <Box>Helloworld</Box> <AlertNewServiceRequest />
      <pre>{JSON.stringify(palette, null, 2)}</pre>
    </>
  );
}
