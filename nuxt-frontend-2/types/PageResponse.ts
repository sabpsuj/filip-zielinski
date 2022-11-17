import MenuItem from '~/types/MenuItem'

interface PageResponse {
  Logo: {
    data: {
      attributes: {
        alternativeText: string,
        url: string
      }
    }
  },
  MenuItem: MenuItem[]
}

export default PageResponse