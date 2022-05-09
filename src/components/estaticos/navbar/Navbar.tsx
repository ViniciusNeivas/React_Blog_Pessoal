import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
   const [token,setToken] = useLocalStorage('token')
   let history = useNavigate ();

   function goLogout(){

    setToken('')
    alert ("Usuário Deslogado")
    history ('/login')
}
   
   
    return (
        <>
            <AppBar position="static" className='back'>
                
                <Toolbar variant="dense">
                   
                    <Box className = 'cursor'>
                        
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    
                    </Box>


                    <Box display="flex" justifyContent="start">
                        
                        <Link to ="/home" className='text-decorator-none'>
                        
                            <Box mx={1} className = 'cursor button:hover button:active button' >
                        
                                <Typography variant="h6" color="inherit">
                                  HOME
                                </Typography>
                        
                            </Box>

                        </Link>
                        
                        <Link to ="/posts" className='text-decorator-none '>

                             <Box mx={1} className = 'cursor button:hover button:active button' >
                        
                                <Typography variant="h6" color="inherit">
                                    POSTAGEM
                                </Typography>
                        
                             </Box>
                             
                        </Link>

                    
                        <Link to ="/temas" className='text-decorator-none'>

                            <Box mx={1} className = 'cursor button:hover button:active button' >
                        
                                <Typography variant="h6" color="inherit">
                                    TEMAS
                                 </Typography>
                        
                            </Box>
                        </Link>


                        <Link to ="/formularioTema" className='text-decorator-none'>

                             <Box mx={1}className = 'cursor button:hover button:active button' >
                        
                                <Typography variant="h6" color="inherit">
                                  
                                  CADASTRAR TEMA
                                
                                </Typography>
                    
                            </Box>

                        </Link>

                           
                            <Box mx={1} className = 'cursor button:hover button:active button' onClick={goLogout}>

                                <Typography variant="h6" color="inherit">
                                   
                                    LOGOUT
                               
                                </Typography>

                            </Box>

                        
                        
                    </Box>

                </Toolbar>
            
            </AppBar>
        </>
    )
}

export default Navbar;