import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link, Chip } from '@mui/material'

import CartList from '@/components/cart/CartList'
import ShopLayout from '@/components/layouts/ShopLayout'
import OrderSummary from '@/components/cart/OrderSummary'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de la orden 32643153' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Orden: 32643153</Typography>

            <Chip
                sx={{ my: 2 }}
                label="Pendiente de pago"
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            />
            <Chip
                sx={{ my: 2 }}
                label="Su pedido ya fue pagado"
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined />}
            />
            <Grid container sx={{ mt: 2 }}>
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

export default OrderPage