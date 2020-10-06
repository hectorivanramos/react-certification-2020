import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Sidebar } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth';
import HomeMenu from './Menu.component';
import './Menus.styles.css';

const SidebarMenu = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { authenticated } = useAuth();

  return (
    <Grid columns={1} className="sidemenu">
      <Grid.Column>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as={Link} to="/">
              Home
            </Menu.Item>
            {authenticated && (
              <Menu.Item as={Link} to="/favorites">
                Favorites
              </Menu.Item>
            )}
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            <HomeMenu
              useAuth={useAuth}
              sidebarVisible={setVisible}
            />
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SidebarMenu;
