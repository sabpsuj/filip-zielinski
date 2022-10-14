<template>
  <header>
    <button @click="changeName">change name</button>
  </header>
</template>

<script setup lang="ts">
import axios from "axios"

const dupa = ref('Andrzej')
const menu = {}

const changeName = (event: MouseEvent) => {
  dupa.value = dupa.value === 'Andrzej' ? 'Jarosław' : 'Andrzej'
}

const { pending, data } = useAsyncData('mysuperkey', () => {
  return $fetch('http://localhost:1337/graphql', {body: `
    query mainMenu {
  menu {
    data {
      attributes {
        MenuItem {
          Text
          Link
        }
        Logo {
          data {
            attributes {
              hash
              alternativeText
              url
            }
          }
        }
      }
    }
  }
}
    `})
})

// const someData = await useAsyncData('costam', async () => axios({
//   url: 'http://localhost:1337/graphql',
//   method: 'post',
//   data: {
//     query: `
//     query mainMenu {
//   menu {
//     data {
//       attributes {
//         MenuItem {
//           Text
//           Link
//         }
//         Logo {
//           data {
//             attributes {
//               hash
//               alternativeText
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// }
//     `
//   }
// }).then((result) => {
//   return result
// }))

console.log(data)

</script>