import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-Bm0wGLDR.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useSwitchLocalePath, a as useI18n } from './server.mjs';
import { u as useHead } from './index-DvJI-FXh.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LangSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const switchLocalePath = useSwitchLocalePath();
    const { locale } = useI18n();
    const toggleToLang = computed(() => locale.value === "en" ? "lv" : "en");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "lang-switcher",
        to: unref(switchLocalePath)(unref(toggleToLang))
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(locale) === "en" ? "Lat" : "En")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(locale) === "en" ? "Lat" : "En"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LangSwitcher.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2c29f0b5"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='148'%20height='29'%20viewBox='0%200%20148%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201.08123H3.89991V19.3578H13.6497V22.6538H0V1.08123Z'%20fill='%2305171F'/%3e%3cpath%20d='M16.1648%207.14847H19.8832V22.6483H16.1648V7.14847ZM18.0266%200C19.4061%200%2020.4589%201.08101%2020.4589%202.46407C20.4589%203.84714%2019.4113%204.95994%2018.0266%204.95994C16.6419%204.95994%2015.6255%203.88423%2015.6255%202.46407C15.6255%201.04392%2016.6782%200%2018.0266%200Z'%20fill='%2305171F'/%3e%3cpath%20d='M22.9428%207.15419H26.6612L26.5679%2010.4502C27.2265%208.16632%2028.9068%206.78325%2031.339%206.78325C34.6114%206.78325%2036.7948%209.27913%2036.7948%2013.0998V22.654H33.0764V13.688C33.0764%2011.2822%2031.9665%209.86732%2029.9855%209.86732C27.854%209.86732%2026.656%2011.4994%2026.656%2014.3662V22.6593H22.9376V7.15948L22.9428%207.15419Z'%20fill='%2305171F'/%3e%3cpath%20d='M47.4783%2019.3573C49.9987%2019.3573%2051.9176%2017.2959%2051.9176%2014.6411C51.9176%2011.9862%2050.0558%209.92486%2047.4783%209.92486C44.9008%209.92486%2043.0079%2011.9279%2043.0079%2014.6411C43.0079%2017.3542%2044.9268%2019.3573%2047.4783%2019.3573ZM40.2489%2023.8244L43.9103%2023.5753C44.3304%2025.0538%2046.0106%2025.9811%2047.7791%2025.9811C49.9106%2025.9811%2051.7412%2024.5981%2051.7412%2021.9432V19.7547C50.9011%2021.3232%2049.1327%2022.5897%2046.7626%2022.5897C42.5619%2022.5897%2039.2636%2019.1718%2039.2636%2014.6358C39.2636%2010.0997%2042.5049%206.68182%2046.7626%206.68182C49.0704%206.68182%2051.0204%207.85293%2051.9227%209.63872V7.14284H55.4648V21.3179C55.4648%2026.7442%2051.5649%2028.9645%2047.6961%2028.9645C43.8273%2028.9645%2040.7364%2026.8978%2040.2541%2023.8191'%20fill='%2305171F'/%3e%3cpath%20d='M57.4616%207.15398H61.3615L65.3807%2018.494L69.431%207.15398H73.1805L67.2114%2022.6538H63.4307L57.4616%207.15398Z'%20fill='%2305171F'/%3e%3cpath%20d='M81.5767%2019.8817C84.0038%2019.8817%2085.6841%2017.8151%2085.6841%2014.89C85.6841%2011.9649%2084.0038%209.93004%2081.5767%209.93004C79.1496%209.93004%2077.4382%2011.9967%2077.4382%2014.89C77.4382%2017.7833%2079.1185%2019.8817%2081.5767%2019.8817ZM73.6835%2014.8847C73.6835%2010.1049%2076.9818%206.687%2081.5715%206.687C86.1612%206.687%2089.4336%2010.1102%2089.4336%2014.8847C89.4336%2019.6592%2086.1301%2023.1142%2081.5715%2023.1142C77.013%2023.1142%2073.6835%2019.691%2073.6835%2014.8847Z'%20fill='%2305171F'/%3e%3cpath%20d='M94.049%200C95.4285%200%2096.4761%201.08101%2096.4761%202.46407C96.4761%203.84714%2095.4285%204.95994%2094.049%204.95994C92.6695%204.95994%2091.6478%203.87893%2091.6478%202.46407C91.6478%201.04922%2092.6954%200%2094.049%200ZM90.5951%2023.1782L94.7336%206.75103L98.3327%207.4929L94.1631%2023.9519C92.934%2029.7173%2087.9242%2029.5901%2085.4038%2028.207L86.3062%2025.2184C88.4377%2026.3895%2089.9364%2025.5893%2090.5951%2023.1835'%20fill='%2305171F'/%3e%3cpath%20d='M107.066%2019.9406C108.954%2019.9406%20110.095%2018.584%20110.308%2016.21V7.1486H114.026V22.6484H110.308L110.37%2020.2744C109.53%2022.0019%20107.937%2023.0194%20105.78%2023.0194C102.57%2023.0194%20100.412%2020.5871%20100.412%2016.8883V7.1486H104.131V16.1147C104.131%2018.5204%20105.21%2019.9353%20107.071%2019.9353'%20fill='%2305171F'/%3e%3cpath%20d='M117.075%207.15419H120.794L120.7%2010.4502C121.359%208.16632%20123.039%206.78325%20125.471%206.78325C127.904%206.78325%20129.703%208.13982%20130.481%2010.4184C131.171%208.13982%20132.908%206.78325%20135.403%206.78325C138.613%206.78325%20140.77%209.21553%20140.77%2012.9143V22.654H137.052V13.688C137.052%2011.2822%20135.973%209.86732%20134.111%209.86732C132.073%209.86732%20130.901%2011.4994%20130.901%2014.3662V22.6593H127.183V13.6933C127.183%2011.2875%20126.073%209.87263%20124.123%209.87263C121.992%209.87263%20120.794%2011.5047%20120.794%2014.3715V22.6646H117.075V7.15419Z'%20fill='%2305171F'/%3e%3cpath%20d='M143.706%207.14847H147.424V22.6483H143.706V7.14847ZM145.568%200C146.947%200%20148%201.08101%20148%202.46407C148%203.84714%20146.952%204.95994%20145.568%204.95994C144.183%204.95994%20143.167%203.88423%20143.167%202.46407C143.167%201.04392%20144.219%200%20145.568%200Z'%20fill='%2305171F'/%3e%3c/svg%3e";
const _imports_1 = "" + buildAssetsURL("slide-1.mjnm1myz.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home | App",
      meta: [{ name: "description", content: "My amazing site." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LangSwitcher = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-90ef13c2><section class="slide-main" data-v-90ef13c2><div class="slide-dots" data-v-90ef13c2><div class="slide-dot" data-v-90ef13c2></div><div class="slide-dot" data-v-90ef13c2></div></div><div class="container" data-v-90ef13c2><div class="header" data-v-90ef13c2><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-90ef13c2>`);
      _push(ssrRenderComponent(_component_LangSwitcher, null, null, _parent));
      _push(`</div><h1 class="slide-main-title" data-v-90ef13c2>${(_a = _ctx.$t("@main-slide$title")) != null ? _a : ""}</h1><div class="slide-main-body" data-v-90ef13c2><div class="slide-main-content" data-v-90ef13c2><div class="slide-main-text" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@main-slide$text"))}</div><div class="slide-main-image" data-v-90ef13c2><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-90ef13c2></div></div></div></div></section><section class="slide-services" data-v-90ef13c2><div class="slide-dots" data-v-90ef13c2><div class="slide-dot" data-v-90ef13c2></div><div class="slide-dot" data-v-90ef13c2></div></div><div class="container" data-v-90ef13c2><div class="slide-services-content" data-v-90ef13c2><h2 class="slide-services-title" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@services-slide$title"))}</h2><ul class="slide-services-list" data-v-90ef13c2><li class="service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$1"))}</li><li class="service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$2"))}</li><li class="service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$3"))}</li><li class="service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$4"))}</li><li class="service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$5"))}</li></ul><article class="total" data-v-90ef13c2><div data-v-90ef13c2><h2 class="total-count" data-v-90ef13c2>1.3M</h2><p class="total-text" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@services-slide$counter"))}</p></div></article></div></div></section><section class="slide-promo" data-v-90ef13c2><div class="slide-dots" data-v-90ef13c2><div class="slide-dot" data-v-90ef13c2></div><div class="slide-dot" data-v-90ef13c2></div></div><div class="container" data-v-90ef13c2><div class="slide-promo-header" data-v-90ef13c2><h2 class="slide-promo-title" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@promo-slide$title"))}</h2><a href="https://wa.me/37128118166" target="_blank" class="btn-start" data-v-90ef13c2><span data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@promo-slide$button"))}</span><i class="btn-start-arrow" data-v-90ef13c2></i></a></div><article class="slide-promo-services" data-v-90ef13c2><h2 class="slide-promo-label" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@services-slide$title"))}</h2><ul class="slide-promo-list" data-v-90ef13c2><li class="slide-promo-service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$1"))}</li><li class="slide-promo-service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$2"))}</li><li class="slide-promo-service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$3"))}</li><li class="slide-promo-service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$4"))}</li><li class="slide-promo-service" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@service$5"))}</li></ul></article><div class="slide-contacts" data-v-90ef13c2><address class="slide-address" data-v-90ef13c2><p class="slide-promo-label" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@contacts@label"))}</p><p class="slide-promo-address" data-v-90ef13c2>Skolas iela 21, R\u012Bga<br data-v-90ef13c2>LV-1010</p></address><address class="slide-web-address" data-v-90ef13c2><a href="tel:+37128118166" data-v-90ef13c2>+371 28 118 166</a><a href="mailto:info@lingvojumi.lv" data-v-90ef13c2>info@lingvojumi.lv</a></address></div><footer class="slide-promo-footer" data-v-90ef13c2><a href="#" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@footer$info"))}</a><a href="#" data-v-90ef13c2>${ssrInterpolate(_ctx.$t("@footer$terms"))}</a><p data-v-90ef13c2>2020-2025</p></footer></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-90ef13c2"]]);

export { index as default };
//# sourceMappingURL=index-CmLQAKXA.mjs.map
