import React from 'react';
import { Header, Grid, Card } from 'semantic-ui-react';
import SidebarMenu from '../../components/Menus/Sidebar.component';
import CardComponent from '../../components/Card/Card.component';

function FavoritesPage() {
  const localData = localStorage.getItem('favorites');
  const favorites = localData ? JSON.parse(localData) : [];

  return (
    <SidebarMenu>
      <Header as="h1" color="blue">
        Favorite Vids!
      </Header>
      <section>
        <Grid>
          <Card.Group>
            {favorites.map((item) => {
              return <CardComponent key={item.etag} item={item} />;
            })}
          </Card.Group>
        </Grid>
      </section>
    </SidebarMenu>
  );
}

export default FavoritesPage;
