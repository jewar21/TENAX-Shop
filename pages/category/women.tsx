import { NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '@/components/layouts/ShopLayout'
import ProductList from '@/components/products/ProductList'
import FSLoading from '@/components/ui/FSLoading'
import { useProducts } from '@/hooks'


const WomenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=women')

  return (
    <ShopLayout title={'TENAX-Shop - women'} pageDescription={'Los mejores productos deportivos para mujeres'}>
      <Typography variant='h1' component='h1'>Mujeres</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Productos para Mujeres</Typography>
      {
        isLoading
          ? <FSLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default WomenPage