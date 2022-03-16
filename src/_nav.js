import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilPuzzle,
  cilSpeedometer,
  cilPeople,
  cilUser,
  cilSettings,
  cilWheelchair,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Attendance',
    to: '/attendance',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'My Tasks',
    to: '/tasks',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'System Functions',
  },
  {
    component: CNavGroup,
    name: 'Registration',
    to: '/base',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Staff',
        to: '/staff',
      },
      {
        component: CNavItem,
        name: 'Patients',
        to: '/patient',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/base',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Groups',
        to: '/group',
      },
      {
        component: CNavItem,
        name: 'Group Services',
        to: '/group_service',
      },
      // {
      //   component: CNavItem,
      //   name: 'Roles',
      //   to: '/role',
      // },
      {
        component: CNavItem,
        name: 'Facilities',
        to: '/facility',
      },
      {
        component: CNavItem,
        name: 'Select Items',
        to: '/select_item',
      },
      {
        component: CNavItem,
        name: 'Service Types',
        to: '/service_type',
      },
      {
        component: CNavItem,
        name: 'Currency Types',
        to: '/currency_type',
      },
      {
        component: CNavItem,
        name: 'Services',
        to: '/service',
      },
      {
        component: CNavItem,
        name: 'Service Charges',
        to: '/service_charge',
      },
      {
        component: CNavItem,
        name: 'Workflow',
        to: '/workflow',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/user',
      },
    ],
  },

  {
    component: CNavTitle,
    name: 'Sections',
  },
  {
    component: CNavItem,
    name: 'Emergency Ward',
    to: '/theme/colors',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Medical Ward',
    to: '/theme/colors',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Maternity Ward',
    to: '/theme/typography',
    icon: <CIcon icon={cilWheelchair} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pharmacy',
    to: '/theme/typography',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Laboratory',
    to: '/theme/typography',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Reports',
  },
  {
    component: CNavGroup,
    name: 'Financial',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Income',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Income Summary',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Income Vs Expenditure',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Expenditure',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Expenditure Summary',
        to: '/base/collapses',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Medical',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Patients Attendance',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Patients Transfer',
        to: '/buttons/button-groups',
      },
    ],
  },
]

export default _nav
