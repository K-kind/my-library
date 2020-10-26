<template>
  <div>
    <Card class="w-4/6 mx-auto">
      <template #header>ログイン</template>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem a libero ipsum dolorum dolor voluptatum adipisci, nisi, possimus amet, eos debitis sapiente culpa incidunt necessitatibus! Nihil doloremque nesciunt quibusdam tempora!</p>
      </div>
    </Card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/Card.vue'

export default defineComponent({
  components: {
    Card
  }
})
</script>
