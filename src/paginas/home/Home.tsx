import React from 'react';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import './Home.css';
import musica from '../../assets/images/musica.jpg'
function Home() {
    return (
        <>
            <Grid container className="background" direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className = 'texto1' >Seja Bem Vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className = 'texto2' > <p>Expresse Aqui <br /> Os Seus Pensamentos <br /> E <br /> Opiniões !</p> </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className = 'botao' >Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    {/* <img src= {musica} alt="Musica" width="500px" height="500px" /> */}
                </Grid>
                <Grid xs={12} className = 'postagens' >
                </Grid>
            </Grid>
        </>
    );
}

export default Home;