import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Noticias.css'


export default function Noticias(){

    const [data, setData] = useState([])

    useEffect(()=>{
        buscarNoticias();
    }, []);

    const buscarNoticias = () => {
        axios.get("ttps://newsapi.org/v2/everything?q=hunger&apiKey=2db1b15d52174042b9407303345a5769")
        .then((response)=> {
            // console.log(response);
            setData(response.data.articles)
         })
    }

    return(
        <>
            <div className="container-noticias">
                {
                    data.map((value) => {
                        return(
                            <div className="card" style={{width: "26rem"}}>
                                <img src={value.urlToImage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <Link to={value.url} target="_blank" className="btn btn-primary">Ver noticia</Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
