// 定义懒加载指令
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            // 进入视口区域
                            console.log('进入视口区域')
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}
