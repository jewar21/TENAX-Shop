import ShopLayout from "@/components/layouts/ShopLayout"
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

const AddressPAge = () => {
    return (
        <ShopLayout title="Direccion" pageDescription="Confirmar direccion de destino">
            <Typography variant='h1' component='h1'>Direccion</Typography>

            <Grid container spacing={2} sx={{mt:2}}>

                <Grid item xs={12} sm={6}>
                    <TextField label='Nombre' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select
                            variant='filled'
                            fullWidth
                            value={1}
                            label='País'
                        >
                            <MenuItem value={1}>Colombia</MenuItem>
                            <MenuItem value={2}>Venezuela</MenuItem>
                            <MenuItem value={3}>Argentina</MenuItem>
                            <MenuItem value={4}>Ecuador</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Ciudad' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Teléfono' variant='filled' fullWidth />
                </Grid>

            </Grid>

            <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
                <Button color="secondary" className="circular-btn" size="large">
                    Revisar Pedido
                </Button>
            </Box>

        </ShopLayout>
    )
}

export default AddressPAge