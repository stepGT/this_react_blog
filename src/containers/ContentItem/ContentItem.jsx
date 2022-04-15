import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '@hooks/useAxios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Preloader from '@components/Preloader';

const ContentItem = () => {
  const { postID } = useParams();
  const { data, loaded } = useAxios(`posts/${postID}`);
  return (
    <>
      {!loaded && <Preloader />}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 5,
          pb: 5,
        }}
      >
        <Container>
          <Card sx={{ maxWidth: 640, margin: '0 auto' }}>
            <CardMedia
              height='640'
              component='img'
              image={data?.image}
              alt=''
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {data?.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Share</Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </>
  );
};
export default ContentItem;
