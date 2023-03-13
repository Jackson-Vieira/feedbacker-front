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

import useModal from '@/composables/useModal'

export default {
  components: {
    Contact,
    CustomHeader
  },
  setup() {
    const modal = useModal()

    const handleAccountCreate = () => {}

    const handleLogin = () => {
      modal.open({
        component: 'ModalLogin'
      })
    }

    return {
      handleAccountCreate,
      handleLogin
    }
  }
}
</script>

<style lang="postcss" scoped></style>
