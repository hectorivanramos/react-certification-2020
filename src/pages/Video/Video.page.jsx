import React, { useEffect, useRef, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Header, Grid, Card } from 'semantic-ui-react';
import APIClient from '../../client/apiClient';
import './Video.styles.css';
import SidebarMenu from '../../components/Menus/Sidebar.component';
import { useFavorites } from '../../utils/hooks/useFavorites';
import CardComponent from '../../components/Card/Card.component';

function VideoPage() {
  const [favorites, dispatch] = useReducer(useFavorites, [], () => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  });
  const { id } = useParams();
  const sectionRef = useRef(null);
  const apiClient = new APIClient();
  const [videos, setVideos] = useState([]);

  const requestRelatedVideos = async () => {
    console.log('Request Test', videos.length, id);
    try {
      if (videos.length === 0) {
        const response = await apiClient.getRelatedVideos(id);
        console.log('Request Returned...', response.items);
        setVideos(response.items);
      }
    } catch (error) {
      console.log('Request Failed...', error);
    }
  };

  const addToFavorites = async () => {
    try {
      const response = await apiClient.getSingleVideo(id);
      console.log('Request Returned...', response);
      dispatch({ type: 'add', item: response.items[0] });
    } catch (error) {
      console.log('Request Failed...', error);
    }
  };

  function removeFromFavorites() {
    dispatch({ type: 'remove', id });
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    requestRelatedVideos();
  }, []);

  return (
    <section className="homepage" ref={sectionRef}>
      <SidebarMenu>
        <Header as="h1" color="blue">
          Hello stranger!
        </Header>
        <section>
          <Grid columns={3}>
            <Grid.Column width={12}>
              <Grid.Row>
                <iframe
                  width="800"
                  height="450"
                  allowFullScreen
                  frameBorder="0"
                  title={id}
                  src={`https://www.youtube.com/embed/${id}`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
              </Grid.Row>

              {favorites.some((item) => item.id === id) ? (
                <Button onClick={removeFromFavorites}>Remove from favorites</Button>
              ) : (
                  <Button onClick={addToFavorites}>Add to favorites</Button>
                )}
            </Grid.Column>
            <Grid.Column width={4}>
              <Card.Group itemsPerRow={1}>
                {videos.map((item) => {
                  return <CardComponent key={item.etag} item={item} />;
                })}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </section>
      </SidebarMenu>
    </section>
  );
}

export default VideoPage;
