<template>
  <div>
    <div
      class="
        h-full
        border border-gray-200
        dark:border-gray-700
        border-opacity-10
        rounded-lg
        overflow-hidden
        bg-white
        dark:bg-gray-900
        shadow-md
        hover:shadow-lg
        transition
      "
    >
      <div class="relative">
        <img
          class="lg:h-44 md:h-36 w-full object-cover object-center"
          :src="card.thumbnail"
          alt="blog"
        />
        <div
          class="
            absolute
            inset-0
            bg-black
            flex
            items-center
            justify-center
            z-1
            cursor-pointer
            bg-opacity-20
            hover:bg-opacity-40
            group
            transition
          "
          @click="$emit('video', card)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-10
              w-10
              md:h-16 md:w-16
              text-white
              transform
              transition
              group-hover:text-green-500
              transform
              group-hover:scale-110
            "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div class="p-2 md:p-4 md:pb-3">
        <h2
          class="
            tracking-widest
            text-xs
            title-font
            font-medium
            text-gray-400
            mb-1
          "
        >
          {{ card.competition }}
        </h2>
        <h1
          class="
            title-font
            text-sm
            md:text-base
            font-medium
            text-gray-900
            dark:text-gray-200
            mb-2
            line-clamp-1
          "
        >
          {{ card.title }}
        </h1>
        <div class="flex md:items-center gap-1 flex-wrap">
          <a
            :href="card.matchviewUrl"
            target="_blank"
            class="
              text-green-600 text-sm
              md:text-base
              hover:text-green-700
              inline-flex
              items-center
              md:mb-2
              lg:mb-0
            "
            >View Match
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span
            class="
              text-gray-400
              mr-3
              inline-flex
              md:items-center
              lg:ml-auto
              md:ml-0 md:ml-auto
              leading-none
              text-sm
              pr-3
              py-1
              border-r-2 border-gray-200
              dark:border-gray-500
            "
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle></svg
            >1.2K
          </span>
          <span
            class="
              text-gray-400
              inline-flex
              md:items-center
              leading-none
              text-sm
            "
          >
            <svg
              class="w-4 h-4 mr-1"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              ></path></svg
            >6
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
}
</script>

<style></style>
