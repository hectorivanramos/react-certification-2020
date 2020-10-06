import React, { useEffect, useRef, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { useParams } from 'react-router';
import APIClient from '../../client/apiClient';
import './Home.styles.css';
import SidebarMenu from '../../components/Menus/Sidebar.component';
import CardGroup from './components/CardGroup.component';

function HomePage() {
  const sectionRef = useRef(null);
  const apiClient = new APIClient();
  const [payload, setPayload] = useState([]);
  const { key } = useParams();

  const requestOverview = async () => {
    if (key == null) {
      try {
        const response = await apiClient.getOverview();
        console.log('Request Returned...', response);
        console.log('Store data on payload')
        setPayload(response.items);
      } catch (error) {
        console.log('Request Failed...', error);
      }
    } else {
      try {
        const response = await apiClient.getSearch(key);
        console.log('Request Returned...', response);
        console.log('Store data on payload')
        setPayload(response.items);
      } catch (error) {
        console.log('Request Failed...', error);
      }
    }
  };

  useEffect(() => {
    console.log('Fetch info from Api for home page.', key)
    requestOverview();
  }, [key]);

  return (
    <section className="homepage" ref={sectionRef}>
      <SidebarMenu>
        <Header as="h1" color="blue">
          Hello stranger!
        </Header>
        <CardGroup payload={payload} />
      </SidebarMenu>
    </section>
  );
}

export default HomePage;
