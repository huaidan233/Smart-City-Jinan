export const useRightTop = () => {
  const data = [
      {type: '历下', value: 27},
      {type: '槐荫', value: 25},
      {type: '市中', value: 18},
    { type: '其他', value: 18 },
  ]
  const config = {
    appendPadding: 10,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
      style: {
        /* 设置标注的颜色 */
        fill: '#fff',
        stroke: 'black',
        shadowColor: '#652e80',
        shadowBlur: 20,
        cursor: 'pointer',
      },
    },
    interactions: [{ type: 'element-active' }],
    data,
    height: 150,
    legend: {
      position: 'top',
      itemName: {
        style: {
          fill: '#fff',
        },
      },
    },
  }
  return {
    config,
  }
}
