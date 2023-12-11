import {
  DashboardOutlined,
  ShoppingCartOutlined,
  FontColorsOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'main',
    title: 'sidenav.main',
    submenu: [{
      key: 'main',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'sidenav.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: [],
    }, {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/user-list`,
      title: 'sidenav.clients',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [{
        key: 'clientList',
        path: `${APP_PREFIX_PATH}/user-list`,
        title: 'sidenav.clientList',
        submenu: [],
      }],
    }, {
      key: 'plan',
      path: `${APP_PREFIX_PATH}/plan-maker`,
      title: 'sidenav.planMaker',
      icon: FontColorsOutlined,
      breadcrumb: true,
      submenu: [],
    },
    ],
  },
];

const navigationConfig = [
  ...dashBoardNavTree,
];

export default navigationConfig;
