import { NextPage } from 'next'
import { Typography } from '@mui/material'

import ShopLayout from '@/components/layouts/ShopLayout'
import ProductList from '@/components/products/ProductList'
import FSLoading from '@/components/ui/FSLoading'
import { useProducts } from '@/hooks'


const KidsPage: NextPage = () => {

  const { products, isLoading } = useProducts('/products?gender=kid')

  return (
    <ShopLayout title={'TENAX-Shop - kids'} pageDescription={'Los mejores productos deportivos para niños'}>
      <Typography variant='h1' component='h1'>Niños</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Productos para niños</Typography>
      {
        isLoading
          ? <FSLoading />
          : <ProductList products={products} />
      }

    </ShopLayout>
  )
}

export default KidsPage