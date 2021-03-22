import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link} from 'react-router-dom'


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const useStyless = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 4,
    color: '#fff',
  },
}));

export default function DrawerNav() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);
  const classess = useStyless();

  
  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    if (event.key === 'Tab' || event.key === 'Shift') {
      
    return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
        
        <ListItem button key={'Categories'}>
          <Link to="/" className="black-text">
            <ListItemText primary={'Categories'} />
          </Link>
        </ListItem>
       
        <ListItem button key={'Vendors List'}>
          <Link to="/Vendors" className="black-text">
            <ListItemText primary={'Vendors List'} />
          </Link>
        </ListItem>
        <ListItem button key={'Create Template'}>
          <Link to="/" className="black-text">
            <ListItemText primary={'Create Template'} />
          </Link>
        </ListItem>
        <ListItem button key={'Statistics'}>
          <Link to="/Stats" className="black-text">
            <ListItemText primary={'Statistics'} />
          </Link>
        </ListItem>
        
      </List>
      
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={'left'}>
          <button type="button" className="btn-flat white-text center"
            onClick={toggleDrawer('left', true)}><Icon>menu</Icon></button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
