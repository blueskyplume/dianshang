// 将components中的组件全局化
// 通过插件的方式
import ImageViewIndex from "./ImageView/ImageViewIndex.vue"
import XtxSkuIndex from "./XtxSku/XtxSkuIndex.vue"
export const componentPlugin = {
  install(app) {
      app.component('ImageViewIndex', ImageViewIndex)
      app.component('XtxSkuIndex', XtxSkuIndex)
  }
}