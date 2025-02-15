import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { u as useHead, a as useSeoMeta } from './index-DvJI-FXh.mjs';
import { _ as _export_sfc } from './server.mjs';
import '@unhead/shared';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          type: "text/javascript",
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
          tagPosition: "bodyClose"
        },
        {
          type: "text/javascript",
          src: "https://www.googletagmanager.com/gtag/js?id=G-SRB7S7MLJN",
          async: true,
          tagPosition: "bodyClose"
        },
        {
          type: "text/javascript",
          innerHTML: `
        window.dataLayer = window.dataLayer || []
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'G-SRB7S7MLJN')
      `,
          tagPosition: "bodyClose"
        }
      ]
    });
    useSeoMeta({
      ogUrl: 'http://www.lingvojumi.lv"',
      title: "Lingvojumi \xB7 Tulko\u0161anas birojs",
      ogTitle: "Lingvojumi \xB7 Tulko\u0161anas birojs",
      description: "M\u0113s sniedzam pilnu tulko\u0161anas pakalpojumu kl\u0101stu uz un no jebkuras valodas. Apostille, tulko\u0161ana un notari\u0101lie apliecin\u0101jumi.",
      ogDescription: "M\u0113s sniedzam pilnu tulko\u0161anas pakalpojumu kl\u0101stu uz un no jebkuras valodas. Apostille, tulko\u0161ana un notari\u0101lie apliecin\u0101jumi.",
      ogImage: "https://lingvojumi.lv/og.png"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-1ded6115>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ded6115"]]);

export { _default as default };
//# sourceMappingURL=default-BgZeJqjN.mjs.map
