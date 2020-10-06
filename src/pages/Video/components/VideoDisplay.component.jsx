import React, { useEffect, useReducer } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import APIClient from '../../../client/apiClient';
import { useFavorites } from '../../../utils/hooks/useFavorites';

const VideoDisplay = ({ id }) => {
  const [favorites, dispatch] = useReducer(useFavorites, [], () => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  });
  const apiClient = new APIClient();

  const addToFavorites = async () => {
    try {
      const response = await apiClient.getSingleVideo(id);
      console.log('Request Returned...', response);
      console.log('Sending info to favorites storage');
      dispatch({ type: 'add', item: response.items[0] });
    } catch (error) {
      console.log('Request Failed...', error);
    }
  };

  function removeFromFavorites() {
    console.log('Removing info from favorites');
    dispatch({ type: 'remove', id });
  }

  useEffect(() => {
    console.log(id)
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);



  return (
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
  );
};

export default VideoDisplay;
