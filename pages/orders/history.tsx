import { useState } from 'react';
import NextLink from 'next/link'
import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import ShopLayout from '@/components/layouts/ShopLayout'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra informacion si esta pagado el pedido o no',
        width: 150,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color="success" label="Pagada" variant="outlined" style={{ width: '100%' }} />
                    : <Chip color="error" label="No Pagada" variant="outlined" style={{ width: '100%' }} />
            )
        }
    },

    {
        field: 'Pedido',
        headerName: 'Ver Pedido',
        description: 'Muestra informacion si esta pagado el pedido o no',
        width: 150,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <NextLink passHref legacyBehavior href={`/orders/${params.row.id}`}>
                    <Link underline='always'>
                    Ver Pedido
                    </Link>
                </NextLink>
            )
        }
    }
];

const rows = [
    { id: 1, paid: false, fullname: 'Jesus Guerrero' },
    { id: 2, paid: true, fullname: 'María Rodriguez' },
    { id: 3, paid: true, fullname: 'Juan Pérez' },
    { id: 4, paid: false, fullname: 'Ana López' },
    { id: 5, paid: false, fullname: 'Luis García' },
    { id: 6, paid: true, fullname: 'Laura Martínez' },
    { id: 7, paid: false, fullname: 'Carlos Sánchez' },
    { id: 8, paid: true, fullname: 'Elena Ramírez' },
    { id: 9, paid: false, fullname: 'Pedro González' },
    { id: 10, paid: true, fullname: 'Sofía Fernández' },
    { id: 11, paid: true, fullname: 'Alejandro Morales' },
    { id: 12, paid: false, fullname: 'Carmen Jiménez' },
    { id: 13, paid: true, fullname: 'Andrés Torres' },
    { id: 14, paid: false, fullname: 'Isabel Ruiz' },
    { id: 15, paid: true, fullname: 'Miguel Herrera' }
]
const HistoryPage = () => {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10,
    })
    return (
        <ShopLayout title={'Historial de Pedidos'} pageDescription={'Historial de Pedidos del cliente'}>
            <Typography variant='h1' component='h1'>Historial de Pedidos</Typography>

            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pageSizeOptions={[10]}
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                    />
                </Grid>
            </Grid>

        </ShopLayout>
    )
}

export default HistoryPage