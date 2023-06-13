import {
  DashboardOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  UserOutlined,
  MailOutlined,
  TabletOutlined,
  PictureOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  GiftOutlined,
  ShopOutlined, SettingOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/apps/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-products',
          path: `${APP_PREFIX_PATH}/apps/project/list`,
          title: 'sidenav.main.products',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-categories',
          path: `${APP_PREFIX_PATH}/apps/categories`,
          title: 'sidenav.main.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-collections',
          path: `${APP_PREFIX_PATH}/apps/collections`,
          title: 'sidenav.main.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-combo',
          path: `${APP_PREFIX_PATH}/apps/combo`,
          title: 'sidenav.main.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'sidenav.main.list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clients-groups',
          path: `${APP_PREFIX_PATH}/apps/clients/groups`,
          title: 'sidenav.main.groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'sidenav.main.promocodes',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offline-markets',
      path: `${APP_PREFIX_PATH}/main/offline-markets`,
      title: 'sidenav.main.offline.markets',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offline-markets-addresses',
          path: `${APP_PREFIX_PATH}/main/offline-markets/addresses`,
          title: 'sidenav.main.offline.markets.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offline-markets-geozones',
          path: `${APP_PREFIX_PATH}/main/offline-markets/geozones`,
          title: 'sidenav.main.offline.markets.geozones',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailing',
      path: `${APP_PREFIX_PATH}/main/mailing`,
      title: 'sidenav.main.mailing',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemsNavTree = [{
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'sidenav.systems',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'systems-settings',
      path: `${APP_PREFIX_PATH}/systems/settings`,
      title: 'sidenav.systems.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systems-mobile-app',
      path: `${APP_PREFIX_PATH}/systems/mobile-app`,
      title: 'sidenav.systems.mobile-app',
      icon: TabletOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systems-logs',
      path: `${APP_PREFIX_PATH}/systems/logs`,
      title: 'sidenav.systems.logs',
      icon: FileTextOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemsNavTree,
]

export default navigationConfig;

