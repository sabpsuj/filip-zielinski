import MenuItem from '~/types/MenuItem'

interface Logo {
  alternativeText: string
  url: string
}

interface Menu {
  logo: Logo
  menuItems: MenuItem[]
}

export default Menu
