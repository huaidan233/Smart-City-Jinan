import {getPoints} from "@/api/smart_city";
import {PointLayer, LayerPopup} from "@antv/l7";
import scene from "three/addons/offscreen/scene";

export default async (scene) => {
    const points_data = await getPoints()
    const points_layer = new PointLayer({
        name: '舆情点',
        zIndex: 0,
        depth: true,
    })
        .source(points_data) // 加载数据源
        .shape('cylinder') // 设置形状
        .scale('sentiment_score', {
            type: 'linear',
            range: [0, 50],
        })
        .size(5) // 设置大小
        .color('sentiment_score', [
            '#5bb859',
            '#73c271',
            '#8acc89',
            '#a1d6a0',
            '#b9e0b8',
            '#d0ebd0',
            '#e8f5e7',
            '#66ccff',
        ])
        .animate({
            enable: true,
        })
    const layerPopup = new LayerPopup({
        items: [
            {
                layer: points_layer,
                fields: [
                    {
                        field: 'title',
                        formatField: () => '标题',
                    },
                    {
                        field: 'sentiment_score',
                        formatField: () => '情感得分',
                        formatValue: (val) => val.toFixed(2),
                    },
                    {
                        field: 'location_name',
                        formatField: () => '地点',
                    },
                    // {
                    //     field: 'geometry', // 添加经纬度字段的配置
                    //     formatField: () => '经纬度', // 设置字段名称为 "经纬度"
                    //     formatValue: (val) => {
                    //         if (val && Array.isArray(val) && val.length === 2) {
                    //             return `经度: ${val.coordinates[0].toPrecision(6)}, 纬度: ${val.coordinates[0].toPrecision(6)}`;
                    //             print(val);
                    //         } else {
                    //             console.log(val)
                    //             return val;
                    //         }
                    //     }, // 提取并格式化经纬度数据
                    // },
                    // {
                    //     field: 'geometry.coordinates[0]',
                    //     formatField: () => '经度',
                    // }
                ],
            },
        ],
    });
    scene.addPopup(layerPopup);
    return points_layer
}
