import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

function HomeMenu({ useAuth, deAuthenticate, sidebarVisible }) {
  const { authenticated } = useAuth();

  return (
    <div>
      <Menu color="blue" inverted secondary>
        <Menu.Item value="menu" icon="bars" onClick={() => sidebarVisible(true)} />
        <Menu.Menu>
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
        {authenticated ? (
          <Menu.Item
            position="right"
            name="Logout"
            as={Link}
            to="/"
            onClick={deAuthenticate}
          />
        ) : (
          <Menu.Item position="right" name="Login" as={Link} to="/login" />
        )}
      </Menu>
    </div>
  );
}

export default HomeMenu;
