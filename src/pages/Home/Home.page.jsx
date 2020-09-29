import React, { useEffect, useRef, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { useHistory } from 'react-router';
import APIClient from '../../client/apiClient';
import './Home.styles.css';
import SidebarMenu from '../../components/Menus/Sidebar.component';
import CardGroup from './components/CardGroup.component';

function HomePage() {
  const sectionRef = useRef(null);
  const apiClient = new APIClient();
  const [payload, setPayload] = useState([]);
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const search = params.get('search');

  const requestOverview = async () => {
    if (search == null) {
      try {
        const response = await apiClient.getOverview();
        console.log('Request Returned...', response);
        setPayload(response.items);
      } catch (error) {
        console.log('Request Failed...', error);
      }
    } else {
      try {
        const response = await apiClient.getSearch(search);
        console.log('Request Returned...', response);
        setPayload(response.items);
      } catch (error) {
        console.log('Request Failed...', error);
      }
    }
  };

  useEffect(() => {
    requestOverview();
  }, []);

  useEffect(() => {
    history.listen(requestOverview);
  }, []);

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
