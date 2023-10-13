import NextLink from 'next/link';
import ShopLayout from "@/components/layouts/ShopLayout"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Link, Typography } from "@mui/material"

const EmptyPage = () => {
    return (
        <ShopLayout title={"Carrito vacio"} pageDescription={"No hay productos en el carrito"}>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box>
                    <Typography>Su carrito esta vacio</Typography>
                    <NextLink href='/' passHref legacyBehavior>
                        <Link typography="h4" color="secundary">
                            Regresar
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage