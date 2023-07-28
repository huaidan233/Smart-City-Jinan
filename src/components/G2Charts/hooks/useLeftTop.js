import { ref } from 'vue'
export const useLeftTop = () => {
  const data = ref([
      {type: '历下区', value: 10000},
      {type: '市中区', value: 20000},
      {type: '槐荫区', value: 50000},
      {type: '天桥区', value: 30000},
      {type: '历城区', value: 35000},
      {type: '长清区', value: 25000},
  ])
  // 模拟动态增长
  setInterval(() => {
    let res = data.value.map((item) => {
      let { value } = item
      value += Math.floor(Math.random() * 100)

      return { ...item, value: value }
    })
    data.value = res
  }, 1200)

  const green = '#00B96B'
  const yellow = '#fd7e14'
  const red = '#dc3545'

  const config = {
    xField: 'type',
    yField: 'value',
    seriesField: 'value',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    color: ({ value }) => {
      if (value > 40000) {
        return red
      } else if (value > 20000 && value < 40000) {
        return yellow
      } else {
        return green
      }
    },
    legend: false,
    height: 200,
    width: 250,
  }
  return {
    config,
    data,
  }
}
