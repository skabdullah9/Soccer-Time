<template>
  <div
    class="
      fixed
      inset-0
      bg-black bg-opacity-50
      flex
      items-center
      justify-center
    "
    @click.self="$emit('closeModal')"
  >
    <div
      class="
        bg-white
        dark:bg-gray-900 dark:text-gray-300
        px-5
        md:px-10
        py-4
        rounded-lg
        h-2/3
        md:h-3/4
        w-11/12
        max-w-screen-xl
      "
    >
      <div class="flex items-center justify-between">
        <div class="mb-4">
          <h1 class="text-lg md:text-2xl">{{ post.title }}</h1>
          <p class="text-gray-500 font-mono text-xs md:text-base">
            {{ new Date(post.date).toLocaleString() }}
          </p>
        </div>
        <button @click="$emit('closeModal')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 hover:text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="h-full">
        <div
          class="
            w-3/4
            mx-auto
            text-center
            flex flex-col
            md:flex-row
            gap-2
            items-center
            pb-4
            justify-between
          "
        >
          <h1 class="text-md md:text-xl">
            Competition:
            <a
              :href="post.competitionUrl"
              target="_blank"
              class="
                text-green-700
                hover:text-green-500 hover:underline
                transition
              "
              >{{ post.competition }}</a
            >
          </h1>

          <h4>
            <a
              :href="post.matchviewUrl"
              target="_blank"
              class="
                text-green-600
                py-1
                px-3
                md:px-4 md:py-2
                border border-green-600
                rounded-3xl
                hover:bg-green-600 hover:text-white
                inline-flex
                items-center
                gap-1
                transition
                inline-block
              "
              >View Match
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                />
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                /></svg
            ></a>
          </h4>
        </div>
        <iframe
          :src="videoUrl + '&autoplay=1'"
          allowfullscreen
          allow="autoplay; fullscreen"
          frameborder="0"
          class="w-full lg:w-3/4 h-2/3 md:h-3/4 rounded-2xl mx-auto"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      videoUrl: '',
    }
  },
  mounted() {
    this.videoUrl = this.post.videos[0].embed.split("'")[3]
  },
}
</script>

<style></style>
