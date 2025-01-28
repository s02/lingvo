<script setup lang="ts">
useHead({
  script: [
    {
      type: 'text/javascript',
      innerHTML: `
        ; (function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              ; (h.hj.q = h.hj.q || []).push(arguments)
            }
          h._hjSettings = { hjid: 3671350, hjsv: 6 }
          a = o.getElementsByTagName('head')[0]
          r = o.createElement('script')
          r.async = 1
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
          a.appendChild(r)
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
      `,
      tagPosition: 'bodyClose'
    },
    {
      type: 'text/javascript',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-SRB7S7MLJN',
      async: true,
      tagPosition: 'bodyClose'
    },
    {
      type: 'text/javascript',
      innerHTML: `
        window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'G-SRB7S7MLJN')
      `,
      tagPosition: 'bodyClose'
    }
  ]
})

useSeoMeta({
  ogUrl: 'http://www.lingvojumi.lv"',
  title: 'Lingvojumi · Tulkošanas birojs',
  ogTitle: 'Lingvojumi · Tulkošanas birojs',
  description:
    'Mēs sniedzam pilnu tulkošanas pakalpojumu klāstu uz un no jebkuras valodas. Apostille, tulkošana un notariālie apliecinājumi.',
  ogDescription:
    'Mēs sniedzam pilnu tulkošanas pakalpojumu klāstu uz un no jebkuras valodas. Apostille, tulkošana un notariālie apliecinājumi.',
  ogImage: 'https://kukin.me/og.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (width >= 1920px) {
    align-items: center;
  }
}
</style>
