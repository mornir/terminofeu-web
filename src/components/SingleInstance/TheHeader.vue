<template>
  <header class="bg-primary">
    <h1>Header {{ $t('index') }}</h1>
    <nav class="flex justify-around divide-x-2 divide-primary-alt">
      <!--      <LangLink
        v-for="locale in $i18n.availableLocales"
        :key="locale.code"
        :code="locale.code"
        >{{ locale.name }}</LangLink
      >
 -->
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
          >{{ locale }}</option
        >
      </select>
    </nav>
  </header>
</template>

<script>
export default {}
</script>
