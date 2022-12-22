import { eMenuNodeType, eRouteURL, MenuNode } from '../common/common.model';

export const footerMenuList = [
  {
    order: 1,
    iconClassName: 'home',
    name: 'home',
    visible: true, //Handle this in parent
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.HOME,
  },
  {
    order: 2,
    iconClassName: 'volunteer_activism',
    name: 'donate',
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.DONATE,
    visible: true,
  },
  {
    order: 3,
    iconClassName: 'alarm',
    name: 'prayers',
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.PRAYER,
    visible: true,
  },
  {
    order: 4,
    iconClassName: 'menu',
    name: 'menu',
    type: eMenuNodeType.EVENT,
    url: '',
    visible: true,
  },
  {
    order: 5,
    iconClassName: 'contact',
    name: 'contact',
    type: eMenuNodeType.ROUTE,
    url: 'contact', //TODO Change with URL ENum
    visible: false,
  },
] as Array<MenuNode>;

export const headerMenuList = [
  {
    order: 1,
    iconClassName: 'alarm',
    name: 'prayers',
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.PRAYER,
    visible: true,
  },
  {
    order: 2,
    iconClassName: 'volunteer_activism',
    name: 'donate',
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.DONATE,
    visible: true,
  },
  {
    order: 3,
    iconClassName: 'perm_phone_msg',
    name: 'contact',
    type: eMenuNodeType.ROUTE,
    url: 'contact', //TODO Change with URL ENum
    visible: true,
  },
  {
    order: 4,
    iconClassName: 'manage_accounts',
    name: 'profile',
    type: eMenuNodeType.ROUTE,
    url: 'profile', //TODO Change with URL ENum
    visible: true,
  },
] as Array<MenuNode>;

export const sidenavMenuList = [
  {
    order: 1,
    iconClassName: 'alarm',
    name: 'prayers',
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.PRAYER,
    visible: true,
  },
  {
    order: 1,
    iconClassName: 'diversity_2',
    name: 'volunteer',
    type: eMenuNodeType.ROUTE,
    url: eRouteURL.DONATE,
    visible: true,
  },
  {
    order: 3,
    iconClassName: 'perm_phone_msg',
    name: 'contact',
    type: eMenuNodeType.ROUTE,
    url: 'contact', //TODO Change with URL ENum
    visible: true,
  },
] as Array<MenuNode>;
