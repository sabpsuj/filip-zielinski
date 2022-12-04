<template>
  <div>
    <div>
      <h1>{{ heroBlock.Title }}</h1>
      <p>{{ heroBlock.Description }}</p>
      <img :src="`http://localhost:1337${heroBlock.Background.data.attributes.url}`" />
      <button src="#">{{ heroBlock.MainCTA }}</button>
      <button src="#">{{ heroBlock.SecondCTA }}</button>
      <p>{{ heroBlock.Phone }}</p>
      <p>{{ heroBlock.Email }}</p>
    </div>
    <br />
    <div>
      <h3>{{ trustMeBlock.Title }}</h3>
      <h4>{{ trustMeBlock.Subtitle }}</h4>

      <div v-for="card in trustMeBlock.TrustMeCard">
        <img :src="`http://localhost:1337${card.Icon.data.attributes.url}`" />
        <h5>{{ card.Title }}</h5>
        <p>{{ card.Description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getHomePageContent } from '~~/store/modules/homePage'

const { data } = await useAsyncData('/api/home-page', () => getHomePageContent())

const heroBlock = computed(() => data.value?.heroBlock)
const trustMeBlock = computed(() => data.value?.trustMeBlock[0])
</script>