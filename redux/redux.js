//创建仓库

const createStore = (reducer) =>{
    //监听状态
    let state;
    //监听函数数组
    let listeners = [];
    //用来获取最新的状态
    let getState = () =>state;
    //向仓库发送sction
    let dispatch = () => {

    };

    //订阅仓库内的状态变化事件，当状态发生变化之后会对应调用对应的监听函数
    //订阅方法执行后会返回一个订阅取消的函数
    let subscribe = (listener) =>{
        listeners.push(listener);
        return ()=>{
            listeners.filter(l=>listener!=l);
        }
    };

    return {
        getState
    }
};


export {
    createStore
}
