import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AppBar,
  CssBaseline,
  Divider,
  List,
  ListItem,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  useTheme,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import InputIcon from '@material-ui/icons/Input'
import CloseIcon from '@material-ui/icons/Close'
import './Note.scss'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import { userLogout, userDetail } from '../../features/login/LoginSlice'
import actionCreators from './actions/ActionCreator'
import InputActionCreators from './actions/InputActionCreator'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Notes = (props) => {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const { userName } = useSelector(userDetail)
  const dispatch = useDispatch()

  const { setId, setTitle, setContent, resetDetails } = InputActionCreators
  const { deleteNote } = actionCreators
  const notes = useSelector((state) => state.gnotes.notes.notes)

  const onItemClick = (note, index) => {
    dispatch(setId(index))
    dispatch(setTitle(note.title))
    dispatch(setContent(note.content))
  }

  const onDeleteItemClick = (e, index) => {
    e.stopPropagation()
    dispatch(deleteNote(index))
    dispatch(resetDetails())
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const logOut = () => {
    dispatch(userLogout())
    props.history.push('/')
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          G Notes
        </Typography>
      </div>
      <Divider />

      <List>
        {notes.length === 0 ? (
          <ListItem>
            <NoteList note={{ title: 'No note added.', content: '' }} />
          </ListItem>
        ) : (
          notes.map((note, index) => {
            if (note) {
              return (
                <Fragment key={index}>
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      onItemClick(note, index)
                    }}
                  >
                    <NoteList note={note} index={index} />
                    <CloseIcon
                      onClick={(e) => {
                        onDeleteItemClick(e, index)
                      }}
                      className={!note.content ? 'hide' : 'show'}
                      fontSize="small"
                    />
                  </ListItem>
                  <Divider />
                </Fragment>
              )
            }
            return null
          })
        )}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="currentUser">
            {userName} <InputIcon className="logOutIcon" onClick={logOut} />
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <AddNote />
      </main>
    </div>
  )
}

export default Notes
