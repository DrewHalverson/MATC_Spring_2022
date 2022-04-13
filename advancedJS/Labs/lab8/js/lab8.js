
const init = () => {

    let promiseResolve = new Promise((resolve) => {
        setTimeout(() => {
        resolve("hello world")
        }, 1500)
    }); 

    promiseResolve.then(data => {
            console.log(data);
    });

    let promiseReject = new Promise((reject) => {
        setTimeout(() => {
        reject(Error("unable to resolve request"))
        }, 500)
    }); 

    promiseReject.then(data => {
        console.log(data);
    }).catch(error =>{
        console.error(error);
    })
}
window.onload = init;