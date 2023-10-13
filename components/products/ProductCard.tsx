import { FC, useMemo, useState } from "react"
import NextLink from "next/link"
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { IProduct } from "../../interfaces"

interface Props {
    product: IProduct
}

const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)

    const productImageAndClassName = useMemo(() => {
        const className = isHovered ? 'slideRight' : '';
        const image = isHovered
            ? `products/${product.images[1]}`
            : `products/${product.images[0]}`;
        return { className, image };
    }, [isHovered, product.images])

    return (
        <Grid
            item
            xs={6}
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <NextLink href="/product/slug" passHref legacyBehavior prefetch={false}>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                className={productImageAndClassName.className}
                                component='img'
                                image={productImageAndClassName.image}
                                alt={product.title}
                            // onLoad={() => console.log('cargó')}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>
            <Box sx={{ mt: 1 }} className="fadeIn">
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>{`$${product.price}`}</Typography>
            </Box>
        </Grid>
    )
}

export default ProductCard