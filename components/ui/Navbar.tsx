import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Navbar = () => {

    const { asPath } = useRouter()

    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref legacyBehavior>
                    <Link display='flex' alignItems="center">
                        <Typography variant='h6'>TENAX |</Typography>
                        <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                    </Link>
                </NextLink>

                <Box sx={{ flex: 1 }}></Box>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href="/category/men" passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/men' ? 'secondary' : 'info'}>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/women" passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/women' ? 'secondary' : 'info'} sx={{mx: 1}}>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href="/category/kid" passHref legacyBehavior>
                        <Link>
                            <Button color={asPath === '/category/kid' ? 'secondary' : 'info'}>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref legacyBehavior>
                    <Link sx={{mx:1}}>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>
                    Menú
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar