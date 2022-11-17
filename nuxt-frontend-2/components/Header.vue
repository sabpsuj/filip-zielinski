<template>
  <header>
    <img :src="`http://localhost:1337${logotype.url}`" :alt="logotype?.alternativeText" />
    <ul>
      <li v-for="item in menuItems" :key="item.Text">
        <a :href="item.Link">{{ item.Text }}</a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { getMainMenu } from '~~/store/modules/header'
import Menu from '~/types/Menu'

const { data } = await useAsyncData<Menu>('/api/menu', () => getMainMenu())

const menuItems = computed(() => data.value.menuItems)
const logotype = computed(() => data.value.logo)
</script>
