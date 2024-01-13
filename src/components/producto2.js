import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
} from '@mui/material';

import imageen from './home/img/platillo.jpg';
import imageen2 from './home/img/hamburguesa.jpg';
import imageen3 from './home/img/cotel.jpg';
import imageen4 from './home/img/ceviche.jpg';
import imageen5 from './home/img/pescado.jpeg';
import imageen6 from './home/img/brocheta.jpg';
import imageen7 from './home/img/bebida.jpg';

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1. Detalles adicionales sobre el producto.',
    precio: '$19.99',
    disponibles: 10,
    imagen: imageen,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2. Detalles adicionales sobre el producto.',
    precio: '$29.99',
    disponibles: 5,
    imagen: imageen3,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen2,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen5,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen6,
  },{
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen7,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen2,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen5,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen6,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen2,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen5,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen6,
  },
  
  
];

const Productos2 = () => {
  const agregarAlCarrito = (producto) => {
    // Lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' , marginBottom:'20px'}}>
      <Grid container spacing={3}>
        {productos.map((producto) => (
          <Grid item key={producto.id} xs={20} sm={6} md={4}>
            <Card>
              <CardActionArea  style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
                <CardMedia
                  component="img"
                  alt={producto.nombre}
                  height="160"
                  image={producto.imagen}
                />
                <CardContent style={{ flex: '1' }}>
                  <Typography variant="h6" component="div">
                    {producto.nombre}
                    <Button
                      size="small"
                      onClick={() => agregarAlCarrito(producto)}
                      style={{ marginLeft: '37%',margin:'10px',backgroundColor: 'orange', color:'white' }}
                    ><LocalGroceryStoreOutlinedIcon/>Carrito
                    </Button>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Precio: {producto.precio}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Disponibles: {producto.disponibles}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Productos2;
