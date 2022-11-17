import fetchData from '~~/helpers/fetchData'
import Menu from '~~/types/Menu'
import PageResponse from '~/types/PageResponse'

const data = {
  query: `query mainMenu {
    menu {
      data {
        attributes {
          Logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          MenuItem {
            Text
            Link
          }
        }
      }
    }
  }
`
}
// create mapper for data response
export const getMainMenu = async () => {
  
  try {
    const menuResponse = await fetchData<PageResponse>({ data })
    const menuObject = menuResponse.data?.menu.data.attributes
    const menu: Menu = {
      logo: menuObject.Logo.data.attributes,
      menuItems: menuObject.MenuItem
    }

    return menu
  } catch (error) {
    console.error(error)
  }
}
