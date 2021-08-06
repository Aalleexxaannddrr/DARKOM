import React, {useCallback, useEffect, useState} from "react"
import {useHttp} from "../hooks/http.hook";
import "./admin.css"
import img from "../img/logo.png"

export const AdminPage = () => {

    const [Categories, setCategories] = useState([])
    const [Subcategories, setSubcategories] = useState([])
    const [products, setProducts] = useState([])
    const {request, loading} = useHttp()

    const getCatalog = useCallback(async () => {
        try {
            const cat = await request('/api/category', 'GET', null)
            setCategories(cat)

            const sub = await request('/api/subcategory', 'GET', null)
            setSubcategories(sub)

            const pro = await request('/api/product', 'GET', null)
            setProducts(pro)
        } catch (e) {console.log(e)}
    }, [request])

    useEffect(() => {
        getCatalog()
    }, [getCatalog])

    return(
        <div className="admin">

            <div className="catalog_item" style={{backgroundImage: `url(${img})`}} >
                <h2>Column 1</h2>
                <p>Some text..</p>
            </div>

            <div className="catalog_item" style={{backgroundImage: `url(${img})`}}>
                <h2>Column 2</h2>
                <p>Some text..</p>
            </div>

        </div>
    )
}