import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from '@mui/material'

import CartList from '@/components/cart/CartList'
import ShopLayout from '@/components/layouts/ShopLayout'
import OrderSummary from '@/components/cart/OrderSummary'

const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen de compra' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen del Pedido</Typography>
            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>resumen (3 productos)</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Direccion de entrega</Typography>
                                <NextLink href="/checkout/address" passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography>Jesus Guerrero</Typography>
                            <Typography>Colombia</Typography>
                            <Typography>Ocaña</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href="/cart" passHref legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" className='circular-btn' fullWidth>
                                    Confirmar Pedido
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage