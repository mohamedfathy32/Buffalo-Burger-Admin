import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  // {
  //   id: 'page',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'Authentication',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'ti ti-key',
  //       children: [
  //         {
  //           id: 'login',
  //           title: 'Login',
  //           type: 'item',
  //           url: '/guest/login',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'register',
  //           title: 'Register',
  //           type: 'item',
  //           url: '/guest/register',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'page',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'Authentication',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'ti ti-key',
  //       children: [
  //         {
  //           id: 'login',
  //           title: 'Login',
  //           type: 'item',
  //           url: '/guest/login',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'register',
  //           title: 'Register',
  //           type: 'item',
  //           url: '/guest/register',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 'products',
    title: 'Products',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Add Food',
        title: 'Add Food',
        type: 'item',
        classes: 'nav-item',
        url: '/add-food',
        icon: 'ti ti-paper-bag'
      },
      {
        id: 'Add Offer',
        title: 'Add Offer',
        type: 'item',
        classes: 'nav-item',
        url: '/add-offer',
        icon: 'ti ti-paper-bag'
      },
       {
        id: 'food',
        title: 'Foods',
        type: 'item',
        classes: 'nav-item',
        url: '/food',
        icon: 'ti ti-shovel-pitchforks',
      },
      {
        id: 'food-Detail',
        title: 'Food Detail',
        type: 'item',
        classes: 'nav-item',
        url: '/food-Detail',
        icon: 'ti ti-graph',
      }, 
      {
        id: 'offer-Details',
        title: 'Offer Details',
        type: 'item',
        classes: 'nav-item',
        url: '/offer-Details',
        icon: 'ti ti-graph',
      }, 
      
    ]
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
