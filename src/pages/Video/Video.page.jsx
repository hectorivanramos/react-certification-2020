import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Grid } from 'semantic-ui-react';
import APIClient from '../../client/apiClient';
import './Video.styles.css';
import SidebarMenu from '../../components/Menus/Sidebar.component';
import VideoDisplay from './components/VideoDisplay.component';
import CardGroup from './components/CardGroup.component';

function VideoPage() {
  const { id } = useParams();
  const sectionRef = useRef(null);
  const apiClient = new APIClient();
  const [videos, setVideos] = useState([]);

  const requestRelatedVideos = async () => {
    console.log('Request Test', videos.length, id);
    try {
      if (videos.length === 0) {
        console.log('Request related videos to the main video');
        const response = await apiClient.getRelatedVideos(id);
        console.log('Request Returned...', response.items);
        setVideos(response.items);
      }
    } catch (error) {
      console.log('Request Failed...', error);
    }
  };

  useEffect(() => {
    requestRelatedVideos();
  }, []);

  return (
    <section className="homepage" ref={sectionRef}>
      <SidebarMenu>
        <Header as="h1" color="blue">
          Video
        </Header>
        <section>
          <Grid columns={3}>
            <VideoDisplay id={id} />
            <CardGroup payload={videos} />
          </Grid>
        </section>
      </SidebarMenu>
    </section>
  );
}

export default VideoPage;
