<template>
  <CustomHeader @create-account="handleAccountCreate" @login="handleLogin" />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedbacker © 2023</p>
  </div>
</template>
<script>
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

export default {
  components: {
    Contact,
    CustomHeader
  },
  setup() {
    const handleAccountCreate = () => {
      console.log('create account')
    }

    const handleLogin = () => {
      console.log('login')
    }

    return {
      handleAccountCreate,
      handleLogin
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>