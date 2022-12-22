// * Menu Node
export class MenuNode {
  id?: number = 0;
  parentId?: number = 0;
  order: number = -1;
  name?: string | '';
  type: number = 0;//ENUM
  description?: string;
  url?: string | undefined;
  iconClassName?: string | undefined;
  visible?: boolean = true;
  children?: MenuNode[] | undefined;
}
//TODO Use Menu node Model without flags that are not need in the component ex:invisible
export enum eMenuNodeType {
  EVENT = 0,
  ROUTE = 1,
}


//Routes
export enum eRouteURL {
  BASE = '',
  HOME = 'home',
  CONTACT = 'contact',
  DONATE = 'donate',
  PRAYER = 'prayer',
}

export enum eRouteActionURL {
  create = 'create',
  update = 'update',
}


export enum eMatElevation {
  DEFAULT_ELEVATION = 2,
  RAISED_ELEVATION = 8,
}


export class Card {
  id?: number = 0;
  order: number = -1;
  header?: string | '';
  iconClassName?: string | undefined;
  title?: string | '';
  subtitle?: string | '';
  content?: string | '';
  visible?: boolean = true;
}
