import { ref,computed,onUnmounted } from 'vue'
import dayjs from 'dayjs'
// 封装倒计时逻辑函数

export const useCountDown = () => {
    let timer = null;
    const time = ref(0)
    // 格式化时间为xx分xx秒
    const formatTime = computed(() => {
        return dayjs.unix(time.value).format('mm分ss秒')
    })
    // 2.开启倒计时的函数
    const start = (currentTime) => {
        // 开启倒计时的逻辑
        // 每隔一秒减一
        time.value = currentTime
        setInterval(() => {
            time.value--
        }, 1000)

    }

    onUnmounted(() => {
        timer && clearInterval(timer)
    })

    return {
        formatTime,
        start
    }
}

