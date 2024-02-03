import React, { useEffect, useState } from 'react'
import ProductList from './../components/products/ProductList'
import { getProducts } from '../actions/productsActions'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
export default function Products () {
  const { category } = useParams()
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getProducts('category', category).then((res) => {
      setProductList(res.data.result)
      setLoading(false)
    })
  }, [category])
  return (
    loading
      ? <Spinner />
      : <ProductList
          products={productList}
          noDataMsg="Currently No Prdouct available for this category."
        />
  )
}
