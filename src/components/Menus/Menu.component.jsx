import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Menu } from 'semantic-ui-react';

function HomeMenu({ useAuth, sidebarVisible }) {
  const history = useHistory();
  const { logout, authenticated } = useAuth();
  const [search, setSearch] = useState('');

  function onSearch() {
    if (search !== '') {
      history.push(`/${search}`)
    }
  }

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <div>
      <Menu color="blue" inverted secondary>
        <Menu.Item data-testid="sidebar" value="menu" icon="bars" onClick={() => sidebarVisible(true)} />
        <Menu.Item>
          <Form onSubmit={onSearch}>
            <Form.Input
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              action={{ icon: 'search', color: 'teal' }}
            />
          </Form>
        </Menu.Item>

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
