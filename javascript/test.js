async function fiveSecond() { 
    return await new Promise((resolve,reject) => { 
        setTimeout(() => { 
            resolve(true);
        },5000)
    }) 
}

(async () => { 
    // for (var i = 0; i < 10; i++) { 
    //     setTimeout(() => {
    //         console.log(i)
    //     },500)
    // }
    let value = await fiveSecond();
    console.log(value);
})()