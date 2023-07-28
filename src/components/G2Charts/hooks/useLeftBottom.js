export const useLeftBottom = () => {
  const data = [
      {type: '历下区', value: 7},
      {type: '市中区', value: 6},
      {type: '槐荫区', value: 5},
      {type: '天桥区', value: 4},
      {type: '历城区', value: 4},
      {type: '长清区', value: 4},
      {type: '商丘市', value: 4},
      {type: '商河县', value: 3},
  ]
  const config = {
    appendPadding: 20,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15,
    },
    interactions: [{ type: 'element-active' }],
    height: 180,
  }
  return {
    data,
    config,
  }
}
