<template>
  <header class="bg-primary">
    <nav class="flex justify-around divide-x-2 divide-primary-alt">
      <LangLink
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :code="locale.code"
        >{{ locale.name }}</LangLink
      >
    </nav>
  </header>
</template>
