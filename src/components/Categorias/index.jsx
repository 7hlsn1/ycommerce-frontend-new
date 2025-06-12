
import React, { useEffect, useState } from "react"
import Sdk from "../../sdk"
import './categorias.css'
import { FaPercent } from "react-icons/fa6";


const Categorias = () => {

    const [categories, setCategories] = useState([{ icon: "🔥", text: "ATÉ 60% OFF" },
    { icon: <FaPercent />, text: "CUPONS" },
    { icon: "💰", text: "OFERTAS COM PIX" },
    { icon: "⚡", text: "OFERTAS RELÂMPAGO" },
    { icon: "📦", text: "FRETE GRÁTIS" },
    { icon: "💣", text: "OFERTAS DO DIA" },
    { icon: "⚡", text: "ENVIOS RÁPIDOS" },]);


    const main = () => {

        useEffect(() => {


            const fetchData = async () => {
                const api = new Sdk();
                let active = ' active'
                setCategories(await api.getCategories())

            }

            fetchData()
        }, [])
    }
    main()

    return (
        <>
            <div className="container my-4 bg-white rounded p-3">
                <h4>Principais categorias</h4>
                <div className="d-flex mt-3 categories">
                    {categories.map(({ slug, icon, text }) => (
                        <a className="categoria text-dark text-decoration-none" key={slug} href={`/categories/${slug}`}>
                            <div className="img">{icon}</div>
                            <h4>{text}</h4>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categorias;
