import { Divider, Grid, Typography } from "@mui/material"

const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>No. Productos</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>3</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{`$${155.36}`}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>IVA (19%)</Typography>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>{`$${20}`}</Typography>
            </Grid>

            <Grid item xs={6} sx={{ mt: 2 }}>
                <Typography variant="subtitle1">TOTAL:</Typography>
            </Grid>
            <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
                <Typography variant="subtitle1">{`$${175.36}`}</Typography>
            </Grid>
        </Grid>
    )
}

export default OrderSummary