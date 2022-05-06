import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Temas from '../../../models/Temas';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {

  const [temas, setTemas] = useState<Temas[]> ([])
  const [token, setToken] = useLocalStorage('token') 
  let history = useNavigate();

  useEffect (() => {

    if (token === ''){

      alert ('Você Precisar Estar Logado!')
      history("/login")
    
    }

  }, [token] )

  async function getTemas() {
    await busca ("/temas", setTemas, {

      headers: {
        
      'Authorization': token
        
      }

    })

  }


  useEffect (() => {
    getTemas ()
  }, [temas.length])


  return (
    <>
    {

        temas.map(temas =>(


      <Box m={2} >
        
        <Card variant="outlined">
        
          <CardContent>,
        
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            
            <Typography variant="h5" component="h2">
              {temas.descricao}
            
            </Typography>
          
          </CardContent>
          
          <CardActions>
            
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTemas/${temas.id}`} className="text-decorator-none">
               
                <Box mx={1}>
                  
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
               
                </Box>
              
              </Link>

              <Link to={`/deletarTemas/${temas.id}`} className="text-decorator-none">
                
                <Box mx={1}>
                  
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                
                </Box>
              
              </Link>
            
            </Box>
          
          </CardActions>
        
        </Card>
      
      </Box>
  ) )  
  }
    </>
  );
}


export default ListaTema;