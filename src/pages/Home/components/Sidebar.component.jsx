import React from 'react';
import { Grid, Menu, Sidebar } from 'semantic-ui-react';

const SidebarMenu = (props) => {
  return (
    <Grid.Column>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => props.setVisible(false)}
          vertical
          visible={props.visible}
          width="thin"
        >
          <Menu.Item as="a">Home</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={props.visible}>{props.children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </Grid.Column>
  );
};

export default SidebarMenu;
