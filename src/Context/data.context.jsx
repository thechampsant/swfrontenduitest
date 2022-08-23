import React,{ createContext, useState } from "react";
import axios from "axios";
import '../Util/util'

export const DataContext = createContext({
    data:{},
    setData: () => null
})


export const DataProvider = ({children}) =>{

    const [data, setData] = useState(null);

    const URL = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220821T151535Z&X-Amz-Expires=86400&X-Amz-Signature=0e755c8df5fe854e5a2f2f044f3a07ed7bd0b4c619b48fc7712fc524fd4b9795&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject";
    React.useEffect(()=>{
        axios.get(URL)
        .then((res) =>{
            let obj = res.data
            for (let index = 0; index < obj.length; index++) {
                if(obj[index] === ',' ){
                    let x = index + 1
                    while(true){
                        if(obj[x] === ','){
                            obj = obj.replaceAt(x, '',obj);
                        }
                        else if(obj[x] === '{' || obj[x] === '"'){
                            break;
                        }
                        ++x
                    }
                }
            }
            setData(JSON.parse(obj))
        })
        .catch((err) =>{
            console.log(err);
        })


        //acheiving the same thing using Fetch--------------------------
        // fetch(URL,{method:'GET'})
        // .then((res) => res.body)
        // .then((body) =>{
        //     const reader = body.getReader()
        //     reader.read().then(({ done, value }) => {
                
        //         var string = new TextDecoder().decode(value);
        //         for (let index = 0; index < string.length; index++) {
        //             if(string[index] === ',' ){
        //                 let x = index + 1
        //                 while(true){
        //                     if(string[x] === ','){
        //                         string = string.replaceAt(x, '',string);
        //                     }
        //                     else if(string[x] === '{' || string[x] === '"'){
        //                         break;
        //                     }
        //                     ++x
        //                 }
        //             }
        //         }
        //         setData(JSON.parse(string))
        //      });
        // })
        // .catch((err) =>{
        //     console.log(err);
        // })
        //---------------------------------------------------------------
    },[])

    const value = {data,setData};
    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}