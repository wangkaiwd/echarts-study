## `echarts`入门篇

### 构建实例

### `echarts`基本组件概念
一个直角坐标系中`echarts`有如下一些基础组件：  
* `title`: 标题组件，包含主标题和副标题
* `tooltip`: 提示框
* `grid`: 直角系内绘图网格
* `xAxis/yAxis`: 直角坐标系grid中的x轴(y轴类似)
* `legend`: 图例组件。展现了不同系列的标记(`symbol`)，颜色和名字。可以通过点击图例控制哪些系列不显示
* `toolbox`: 工具栏
* `legend`: 图例
* `series`: 系列列表。每个系列通过`type`决定自己的图表类型

这里我将常用的一些属性以图形的方式进行了一个简单整理，方便记忆：  
![echarts-basic](../screenshots/echarts-basic.png)
### 第一个`echarts`图表

预览地址: 

这里我根据官方的一个最简单的`demo`进行了一些扩展，并为对应的配置项都添加了相应的注释，方便阅读。

