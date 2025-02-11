import { title } from 'process'

const data = {
  headerMenus: [
    {
      name: 'Hot Deals',
      href: '/search?tags=todays-deals',
    },
    {
      name: 'New Arrivals',
      href: '/search?tags=new-arrivals',
    },
    {
      name: 'Featured Products',
      href: '/search?tags=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tags=best-sellers',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Most popular in Books',
      buttonCaption: 'Shop Now',
      image: '/images/1.jpg',
      url: '/search?category=books',
      isPublished: true,
    },
    {
      title: 'Best seller in clothes',
      buttonCaption: 'Shop Now',
      image: '/images/6.jpg',
      url: '/search?category=women-clothes',
      isPublished: true,
    },
    {
      title: 'Popular Deals in Grocery',
      buttonCaption: 'Shop Now',
      image: '/images/banner3.jpg',
      url: '/search?category=grocery',
      isPublished: true,
    },
  ],
}

export default data
