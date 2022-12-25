import {
  eMenuNodeType,
  eRouteURL,
  FeatureCard,
  MenuNode,
  TopicHeading,
} from '../common/common.model';

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

export const supportList = [
  {
    order: 1,
    iconClassName: 'currency_exchange',
    header: 'Donate Now',
    content:
      'Please donate generously as this ensures that the mosque is maintained properly and the Muslim community benefits from these facilities',
    visible: true,
  },
  {
    order: 2,
    iconClassName: 'volunteer_activism',
    header: 'Volunteer for Jumuah',
    content:
      'We are short of volunteers for Jumuah preparations. We need volunteers to help us make the arrangement',
    visible: true,
  },
] as Array<FeatureCard>;

export const servicesList = [
  {
    order: 1,
    iconClassName: 'import_contacts',
    header: 'Prayer/Salat',
    content: 'Our Center is now open for prayers five times',
    visible: true,
  },
  {
    order: 2,
    iconClassName: 'import_contacts',
    header: "Qur'an Lessons",
    content:
      'We host a wide range of educational services, for children. Currently we offer only online classes for children and adults through Zoom',
    visible: true,
  },
  {
    order: 3,
    iconClassName: 'restaurant',
    header: 'Food Distribution',
    content:
      'Friday food distribution services have resumed. You can buy food after Jumuah prayer on first come first serve basis',
    visible: true,
  },
  {
    order: 4,
    iconClassName: 'groups',
    header: 'Join us as Volunteer',
    content:
      'Please contact the management if you are interested in becoming a volunteer.',
    visible: true,
  },
] as Array<FeatureCard>;

export const topicList = [
  {
    title: 'Welcome to the',
    subtitle: 'Fraserview Muslim Community Services',
  },
  {
    title: 'Help Us',
    subtitle: 'We Need Your Support',
  },
  {
    title: 'Our Services',
    subtitle: 'Serving Community',
  },
] as Array<TopicHeading>;
