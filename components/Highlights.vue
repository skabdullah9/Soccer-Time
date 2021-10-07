<template>
  <div>
    <div class="container mx-auto py-12 px-2">
      <div
        v-if="posts.length > 0"
        class="
          grid grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-2
          md:gap-4
          xl:gap-8
        "
      >
        <Card
          v-for="card in posts"
          :key="card.title"
          :card="card"
          @video="toggleModal"
        />
      </div>
      <transition name="modal">
        <Modal v-if="showModal" :post="post" @closeModal="showModal = false" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      showModal: false,
      post: {},
    }
  },
  async fetch() {
    const response = await this.$axios.get(
      'https://www.scorebat.com/video-api/v3/'
    )
    this.posts = await response.data.response
  },
  methods: {
    toggleModal(card) {
      this.showModal = true
      this.post = card
    },
  },
}
</script>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.modal-enter,
.modal-leave-to {
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}
</style>
