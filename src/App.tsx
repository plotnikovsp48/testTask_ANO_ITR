import React, {ChangeEvent} from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'

import AppMenu from './AppMenu'

let contract1Text = '';
let contract2Text = '';
let contract3Text = '';

function savePageText(e: React.MouseEvent) {
  console.log(e.target);
}

function changeInput(e: ChangeEvent<HTMLInputElement>) {

  // e.target.value = e.
}

const PageContract1 = () => <div><input id="contract-1" onChange={changeInput}/><button id="contract-1-button" onClick={savePageText}>Сохранить</button></div>
const PageContract2 = () => <div><input id="contract-2" /><button id="contract-2-button" onClick={savePageText}>Сохранить</button></div>
const PageContract3 = () => <div><input id="contract-3" /><button id="contract-3-button" onClick={savePageText}>Сохранить</button></div>

const PageDeclaration1 = () => <div><input id="declaration-1" /><button id="declaration-1-button" onClick={savePageText}>Сохранить</button></div>
const PageDeclaration2 = () => <div><input id="declaration-2" /><button id="declaration-2-button" onClick={savePageText}>Сохранить</button></div>
const PageDeclaration3 = () => <div><input id="declaration-3" /><button id="declaration-3-button" onClick={savePageText}>Сохранить</button></div>

const PagePartners = () => <div><input id="partners" /><button id="partners-button" onClick={savePageText}>Сохранить</button></div>
const PageFTS = () => <div><input id="fts" /><button id="fts-button" onClick={savePageText}>Сохранить</button></div>

const App: React.FC = () => {
  const classes = useStyles();


  return (
    <BrowserRouter>
      <div className={clsx('App', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route path="/contract1" component={PageContract1} />
              <Route path="/contract2" component={PageContract2} />
              <Route path="/contract3" component={PageContract3} />

              <Route path="/declaration1" component={PageDeclaration1} />
              <Route path="/declaration2" component={PageDeclaration2} />
              <Route path="/declaration3" component={PageDeclaration3} />

              <Route path="/partners" component={PagePartners} />
              <Route path="/fts" component={PageFTS} />
            </Switch>

          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default App
