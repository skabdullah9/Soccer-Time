<template>
  <div
    class="
      sticky
      top-0
      z-10
      shadow
      border-b border-gray-300
      dark:border-gray-700
    "
  >
    <header class="body-font bg-white dark:bg-gray-900">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
          text-gray-600
          dark:text-gray-300
        "
      >
        <nuxt-link class="flex title-font font-medium items-start" to="/">
          <NuxtLogo />
          <span class="text-3xl font-bold inline-block ml-2 font-mono"
            >SoccerTime</span
          >
        </nuxt-link>
        <nav
          class="
            md:ml-auto
            flex flex-wrap
            items-center
            text-base
            justify-center
          "
        >
          <a
            :href="latest.match"
            target="_blank"
            class="
              mr-5
              hover:text-green-600
              cursor-pointer
              border-b border-transparent
              hover:border-green-600
              transition
            "
            >Latest Match</a
          >
          <a
            :href="latest.competition"
            target="_blank"
            class="
              mr-5
              hover:text-green-600
              cursor-pointer
              border-b border-transparent
              hover:border-green-600
              transition
            "
            >Latest Competition</a
          >
          <a
            href="https://www.scorebat.com/england-premier-league-live-scores/"
            target="_blank"
            class="
              mr-5
              hover:text-green-600
              cursor-pointer
              border-b border-transparent
              hover:border-green-600
              transition
            "
            >Premier League</a
          >
        </nav>

        <div class="toggler flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 invisible dark:visible"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div
            class="
              relative
              inline-block
              w-10
              mr-2
              align-middle
              select-none
              transition
              duration-200
              ease-in
            "
          >
            <input
              id="toggle"
              type="checkbox"
              name="toggle"
              class="
                toggle-checkbox
                absolute
                block
                w-6
                h-6
                rounded-full
                bg-white
                border-4
                appearance-none
                cursor-pointer
                transition
              "
              @click="toggleDarkMode"
            />
            <label
              for="toggle"
              class="
                toggle-label
                block
                overflow-hidden
                h-6
                rounded-full
                bg-gray-300
                cursor-pointer
                transition
              "
            ></label>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 visible dark:invisible"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latest: {},
    }
  },
  async fetch() {
    const response = await this.$axios.get(
      'https://www.scorebat.com/video-api/v3/'
    )
    const latest = response.data.response[0]
    this.latest = {
      match: latest.matchviewUrl,
      competition: latest.competitionUrl,
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('DARKMODE_TOGGLE')
    },
  },
}
</script>

<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-500;
  right: 0;
  border-color: #10b981;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-500;
  background-color: #10b981;
}
</style>
