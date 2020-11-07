<template>
  <!-- border-2 border-orange-700 -->
  <header class="bg-orange-600">
    <nav class="flex justify-around divide-x-2 divide-orange-700">
      <LangLink
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :code="locale.code"
        >{{ locale.name }}</LangLink
      >
    </nav>
  </header>
</template>
