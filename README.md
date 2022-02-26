#     __Frame.js (一个金融学大三自学前端的前端菜鸡开发的一个小小的的前端开发框架)__   
+ __Mvvm框架：基于Proxy进行数据劫持, 通过发布订阅模式实现完全以数据驱动视图,监听数据变化来更新视图__

+ __超高效率：自主开发全新的模板引擎, on,bind,for等指令应有尽有, 告别书写传统HTML的繁琐__

+ __全组件化：基于单文件组件构建整个项目,并能很方便的通过prop进行组件间传值__  

 ### __最新演示地址 (也是网站地址)：https://gitborlando.cn/__
 ### __我的其他项目 (动画插件Animation.js, 拖拽插件Drag.js, 还有网站源码等): https://github.com/gitborlando/store__

## DEMO 展示

```js
const template = `
div .root style{{display: flex; align-items: center; flex-direction: column;}}
    h1 {{ Satrt with your Frame app }} 
    input {{ <aValue> }} @input=>inputEvents 
    p {{ <aValue> }}
    button {{ 这是一个按钮 }} @click=>clickEvents 
    ul 
        li *eachItem=>dataArray 
            a href{{https://gitborlando.cn}} 
            img src{{https://gitborlando.cn/aImg.jpg}} 
            div .info 
                h4 {{User:}} 
                p {{ <eachItem.user> }} 
            div .info 
                h4 {{Password:}} 
                p {{ <eachItem.password> }} 
            div .info 
                h4 {{Sex:}} 
                p {{ <eachItem.sex> }} 
    myComponent @component=>myComponent prop{{ <aProp> }} 
`
//import myComponent from './myComponent'

export default {
    template,
    data:{
        aValue: '',
        dataArray: [
            {user:'', password: '', age: ''}
        ],
        aProp: 'this is a component'
    },
    method:{
        inputEvents(){
            this.data.aValue = this.curent.value
        },
        clickEvents(){
            alert(this.curent.innerText)
        }
    },
    component:{
        //myComponent
    },
    beforeMount:{
        aValue(){
            this.data.aValue = '双向绑定'
        }
    },
    afterMount:{
        async getUser(){
            let res = await fetch('https://gitborlando.cn/example')
            this.data.dataArray = await res.json()
        }
    },
    style:{
        h1: `
            color: skyBlue;`
            ,
        img: `
            width: 35px;`
            ,
        li: `
            list-style-type: none;`
            ,
        ul : `
            margin-top: 25px;
            padding: 0;`
            ,
        '.info': `
            display: flex;
            flex-direction: row;`
            ,
        h4: `
            margin: 16px 15px`
    }
}
```



### 关于 dom 与其所依赖数据的对应关系的创建

1.
```js
template = ` p {{ <data.a.b.c> }} `
```
2.
```js
data: {
  a: {
    b: {
      c: 123
    }
  }
}
```
3.
```js
map1: {
  'data.a.b.c' : p
}

map2: {
  { c: 123 } : 'data.a.b.c'
}
```
4.
```js
data.a.b.c = 456
```
5.
```js
target: {c:123}, key: c, value: 456
```
6.
```js
map2.get({ c: 123 }) => 'data.a.b.c'

map1.get('data.a.b.c') => p

{ c: 123 } => p

p.innerText = 456
```
