
import { useEffect, useState } from "react"
import axios from "axios"


export function AboutProduct(){

     const [products , setProducts] = useState([{id: "",image: null,title: "", price:0, category: "", rating:{rate:0, count: 0}}])

    //  function getProduct(){
    //    axios.get("https://fakestoreapi.com/products")
    //    .then(function (response){
    //     console.log( response.data )
    //     setProducts(response.data )


    //    })
    //  }
     useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
       .then(function (response){
        console.log( response.data )
        setProducts(response.data )


       })

     },[])
     
    return(
        <>

        {/* <button onClick={getProduct}>Product</button> */}
         <div className="d-flex flex-wrap gap-2 justify-content-center bg-body-secondary ">
             
             {
                products.map((item, index)=>{
                    return (
                    <div className="card w-25" key={index}>
                            <div className="card-header">
                                <p className="card-title">{item.title}</p>
                            </div>
                            <div className="card-body">
                                <img className="card-img" src={item.image} height="300"/>
                            </div>
                             <div className="card-footer">
                                <p className="card-title" >{item.price}</p>
                            </div>
                    </div>
                    )
                })
             }
         </div>
        </>
    )
}