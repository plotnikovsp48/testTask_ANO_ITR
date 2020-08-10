import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconPeople from '@material-ui/icons/People'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Документы',
    Icon: IconDashboard,
    items: [
      {
        name: 'Договоры',
        items: [
          {
            name: 'Договор 1',
            link: '/contract1'
          },
          {
            name: 'Договор 2',
            link: '/contract2'
          },
          {
            name: 'Договор 3',
            link: '/contract3'
          }
        ],
      },
      {
        name: 'Декларации',
        items: [
          {
            name: 'Декларация 1',
            link: '/declaration1'
          },
          {
            name: 'Декларация 2',
            link: '/declaration2'
          },
          {
            name: 'Декларация 3',
            link: '/declaration3'
          }
        ],
      },
    ],
  },
  {
    name: 'Переписка',
    Icon: IconPeople,
    items: [
      {
        name: 'Партнеры',
        link: '/partners'
      },
      {
        name: 'ФНС',
        link: '/fts'
      }
    ],
  }
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu
