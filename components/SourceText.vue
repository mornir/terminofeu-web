<template>
  <p class="flex justify-end text-sm text-gray-600">
    <span class="mr-1">{{ $t('quotation.source') }}</span>
    <span v-if="after" class="mr-1">{{ $t('quotation.adapted') }} </span>

    <VDropdown>
      <button class="underline">
        {{ title }}
      </button>

      <template #popper>
        <div class="max-w-sm p-2">
          <p v-if="longTitle" class="mb-1 text-sm">
            {{ longTitle }}
          </p>
          <p class="text-xs">
            {{ $t('quotation.asOf') }}
            {{ new Intl.DateTimeFormat('fr-CH').format(new Date(date)) }}
            <span v-if="url"
              >|
              <a :href="url" class="underline" target="_blank"
                >{{ $t('quotation.link') }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="inline-block w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clip-rule="evenodd"
                  />
                </svg> </a
            ></span>
          </p>
        </div>
      </template>
    </VDropdown>
  </p>
</template>

<script>
export default {
  name: 'SourceText',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    date: {
      type: String,
      default: '',
      required: true,
    },
    after: {
      type: Boolean,
      default: false,
    },
    longTitle: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
}
</script>
