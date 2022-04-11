import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            Main layout
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            doloremque in quia, officiis iste modi id reprehenderit nam tempora
            non ullam cumque ipsam maiores aliquid, commodi recusandae iusto
            consequuntur quibusdam.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Button variant='contained'>Main call to action</Button>
            <Button variant='outlined'>Secondary action</Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
