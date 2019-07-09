import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'





export default function SideDrawer(props) {
    return (
        <div>
            <Drawer
                anchor="right"
                open={props.open}
                onClose={() => { props.onClose(false) }}

            >

                <List component="nav">
                    <ListItem button onClick={() => { }}>
                        Events starts in
                    </ListItem>
                    <ListItem button onClick={() => { }}>
                        Venue info
                    </ListItem>
                    <ListItem button onClick={() => { }}>
                        Highlights
                    </ListItem>
                    <ListItem button onClick={() => { }}>
                        Pricing
                    </ListItem>
                    <ListItem button onClick={() => { }}>
                        Location
                    </ListItem>
                </List>
                
            </Drawer>
        </div>
    )
}
