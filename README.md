# 架构性组件：tunk-debug

tunk开发的debug工具，可全局或精确配置到debug某个方法，设置了 debug:true 之后的动作执行，在console中会有相应详细信息输出


## Usage
````shell
npm install tunk-debug
````
````javascript
import tunkDebug from 'tunk-debug'
tunk.use(tunkDebug);
````
## Config
#### debug:[true | false] default: false 
````javascript
// 全局配置debug，默认为 false
tunk.config({debug:true});

// 精确到模块配置是否debug
@create({debug: true})
class demo {
    constructor(){
        ....
    }
    // 精确到某个动作配置是否debug
    @action({debug:false})
    sayHi(){
        ...
    }

}

````
 



 