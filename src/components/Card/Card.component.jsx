import React from 'react';
import { useHistory } from 'react-router';
import { Card } from 'semantic-ui-react';

const CardComponent = ({ item }) => {
  const history = useHistory();
  const MAX_DESCRIPTION = 150;
  function trimDescription() {
    return `${item.snippet.description.slice(0, MAX_DESCRIPTION)}...`;
  }

  function goToVideo(event) {
    event.preventDefault();
    history.push(`/video/${item.id.videoId}`);
  }

  return (
    <Card
      image={item.snippet.thumbnails.default.url}
      header={item.snippet.title}
      description={trimDescription}
      onClick={goToVideo}
    />
  );
};

export default CardComponent;
