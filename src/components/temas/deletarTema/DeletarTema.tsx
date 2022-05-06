import React, { ChangeEvent, useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Temas from '../../../models/Temas';


function DeletarTema() {
  
  let history = useNavigate ();
  const {id}= useParams<{id:string}>();
  const [token, setToken] = useLocalStorage('token');
  const [temas,setTemas] = useState<Temas>( )

  useEffect (() =>{

      if (token === "") {

          alert("Você Precisa Estar Logado")
          history("/login")

      }

  }, [token])

  
  
  useEffect (() =>{

      if (id !== undefined) {
          findById(id)

      }

  }, [id])


  async function findById (id:string) {
      
      buscaId(`/temas/${id}`, setTemas,{
          headers:{

          'Authorization': token

      }
      })

  }

  function sim() {
    history('/temas')
    deleteId(`/temas/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    alert('Tema Deletado Com Sucesso');
  }

  function nao() {
    history('/temas')
  }

  
  return (
    <>
      <Box m={2}>
        
        <Card variant="outlined">
        
          <CardContent>
        
            <Box justifyContent="center">
              
              <Typography color="textSecondary" gutterBottom>
                Deseja Deletar o Tema:
              </Typography>
              
              <Typography color="textSecondary">
               {temas?.descricao}
              </Typography>
            
            </Box>
        
          </CardContent>
          
          <CardActions>
          
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              
              <Box mx={2}>
              
                <Button onClick ={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              
              <Box mx={2}>
               
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              
              </Box>
            
            </Box>
          
          </CardActions>
        
        </Card>
      
      </Box>
    
    </>
  );
}
export default DeletarTema;