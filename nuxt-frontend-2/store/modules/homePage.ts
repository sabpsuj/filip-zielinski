import fetchData from '~~/helpers/fetchData'

const data = {
  query: `query homePage {
    page(id: 3) {
      data {
        attributes {
          Hero {
            Title
            Description
            Background {
              data {
                attributes {
                  name
                  url
                }
              }
            }
            MainCTA
            SecondCTA
            Phone
            Email
          }
          TrustMe {
            Title
            Subtitle
            TrustMeCard {
              Icon {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              Title
              Description
            }
          }
        }
      }
    }
  }
`
}
// create mapper for data response
export const getHomePageContent = async () => {
  
  try {
    const homePageResponse = await fetchData({ data })
    const menuObject = homePageResponse.data?.page.data.attributes
    const homePage = {
      heroBlock: menuObject.Hero,
      trustMeBlock: menuObject.TrustMe
    }

    return homePage
  } catch (error) {
    console.error(error)
  }
}
