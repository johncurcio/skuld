import React from 'react';
import {
  Container,
  Dropdown,
  Header,
  Image,
  Menu,
} from 'semantic-ui-react'

class DashboardHeader extends React.Component {
	render(){
		return(
			<Menu fixed='top'>
				<Container>
				<Menu.Item as='a' header>
					<Header as='h3' color='yellow' textAlign='center'>
            <span className="skranji">skuld</span>
          </Header>
				</Menu.Item>
				{  
					// <Menu.Item as='a'>Home</Menu.Item> 
				}

				<Menu.Item position='right'>
					<Dropdown item simple text='User Doe' icon='dropdown'>
						<Dropdown.Menu>
							<Dropdown.Header>Header Item</Dropdown.Header>
							<Dropdown.Item><i className='wrench icon'/>Settings</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item><i className='log out icon'/>Log out</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Item>
				</Container>
			</Menu>
		);
	}
}

export default DashboardHeader;