## 修改连接线逻辑

修改线连接逻辑可以通过注册节点时，传入checkNewLine函数进行线连接逻辑的确认，当有线连接到端点时，会触发checkNewLine函数进行判断。

如下代码所示
```js
    /**
     * @param {} data 
     **/ 
    checkNewLine(data) {     
        const { from, to } = data;     // 来源节点等于连接节点则不进行连接     
        if (from === to) {
            return false;     
        }     
        return true;
    }
```