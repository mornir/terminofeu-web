<template>
  <header>
    <nav class="flex justify-between py-4">
      <button
        class="underline hover:text-orange-600"
        :class="[$i18n.locale === 'de' ? 'text-orange-800' : 'text-black']"
        @click="$i18n.locale = 'de'"
      >
        Deutsch
      </button>
      <button
        class="underline hover:text-orange-600"
        :class="[$i18n.locale === 'fr' ? 'text-orange-800' : 'text-black']"
        @click="$i18n.locale = 'fr'"
      >
        Français
      </button>
      <button class="cursor-not-allowed">Italieno</button>
    </nav>
  </header>
</template>
