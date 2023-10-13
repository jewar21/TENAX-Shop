import ShopLayout from '@/components/layouts/ShopLayout'
import ProductList from '@/components/products/ProductList'
import { Typography } from '@mui/material'

// DATA
import { initialData } from '@/database/products'

export default function Home() {
  return (
    <ShopLayout title={'TENAX-Shop - Home'} pageDescription={'Los mejores productos deportivos'}>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList products={initialData.products} />

    </ShopLayout>
  )
}
