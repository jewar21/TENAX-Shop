import { NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '@/components/layouts/ShopLayout'
import ProductList from '@/components/products/ProductList'
import { useProducts } from '@/hooks'
import FSLoading from '@/components/ui/FSLoading'


const HomePage: NextPage = () => {

  const { products, isLoading } = useProducts('/products')

  return (
    <ShopLayout title={'TENAX-Shop - Home'} pageDescription={'Los mejores productos deportivos'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      {
        isLoading
          ? <FSLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default HomePage
