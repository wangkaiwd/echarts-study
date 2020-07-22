## `Echarts`
### `WebStorm`提示
> 一下方式任选其一
1. `Preferences | Languages & Frameworks | JavaScript | Libraries`
2. `yarn add @types/download -D`

由于操作1无法获取到列表，所以只能暂时使用操作2获得提示
### 安装
### 使用
* 修改主题
* [cheat sheet](https://echarts.apache.org/en/cheat-sheet.html)
* [Loading and Updating of Asynchronous Data](https://echarts.apache.org/en/tutorial.html#Loading%20and%20Updating%20of%20Asynchronous%20Data)
  * `Loading Animation`
  * How to ensure complete current http request before next http request (boolean variable)
  * [tutorial-dynamic-data](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-dynamic-data)
* [Events and Actions in Echarts](https://echarts.apache.org/en/tutorial.html#Events%20and%20Actions%20in%20ECharts)
* [Responsive Mobile-End](https://echarts.apache.org/en/tutorial.html#Responsive%20Mobile-End)
  1. copy mobile taobao meta viewport code
  2. use native js obtain mobile screen width
  3. Media Query : `baseOption` + `media`
