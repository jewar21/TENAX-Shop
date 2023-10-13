import { NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '@/components/layouts/ShopLayout'
import ProductList from '@/components/products/ProductList'
import FSLoading from '@/components/ui/FSLoading'
import { useProducts } from '@/hooks'


const MenPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=men')

  return (
    <ShopLayout title={'TENAX-Shop - men'} pageDescription={'Los mejores productos deportivos para hombres'}>
      <Typography variant='h1' component='h1'>Hombres</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Productos para Hombres</Typography>
      {
        isLoading
          ? <FSLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default MenPage