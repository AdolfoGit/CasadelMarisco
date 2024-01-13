// Perfil.js
import React from 'react';
import { Avatar, Button, Card, CardContent, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Person, Lock, Email, Notifications, LocationOn, Phone, Wc, LocationCityx } from '@mui/icons-material';

const Perfil = () => {
  return (
    <Grid container spacing={3} justifyContent="center" marginBottom={5}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item>
                <Avatar alt="Usuario" src="/ruta/a/tu/imagen.jpg" sx={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <Typography variant="h4">Diego Martinez Cruz</Typography>
                <Typography variant="subtitle1">Correo electrónico: diego234_Mart@gamil.com</Typography>
                <Typography variant="body2">
                  Teléfono: +7712763527<br />
                  Sexo: Masculino<br />
                  Ciudad: Huejutal de Reyes Hidalgo
                </Typography>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Typography variant="h6">Opciones</Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <Lock />
                  </ListItemIcon>
                  <ListItemText primary="Cambiar Contraseña" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Editar Datos Personales" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText primary="Gestionar Notificaciones" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary="Actualizar Ubicación" />
                </ListItem>
              </List>
              <Button variant="contained"  style={{ marginTop: '20px' , backgroundColor:' #ff8c00'}}>
                Editar Perfil
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Perfil;
