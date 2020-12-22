# Node

## 高阶函数



## Promise
### 手写promise

```js
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
class Promise{
    constructor(executor){
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        
        let resolve = (value) => {
            if(this.status === PENDING) {
                this.status = RESOLVED;
                this.value = value;
                this.onResolveCallbacks.forEach(fn => fn());
            }
        };
        
        let reject = (reason) => {
            if(this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        
        try{
            executor(resolve,reject);
        }catch(e){
            reject(e);
        }
    }
    
    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function'? onFulfilled:v => v;
        onRejected = typeof onRejected === 'function'? onRejected: v => {
            throw v;
        };
        
        let promise2 = new Promise((resolve, reject) => {
            
        });
        
        return promise2;
    }
}
```

