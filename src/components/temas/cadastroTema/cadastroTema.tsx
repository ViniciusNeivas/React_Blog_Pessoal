import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Temas from '../../../models/Temas';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroTema() {
  
    let history = useNavigate ();
    const {id}= useParams<{id:string}>();
    const [token, setToken] = useLocalStorage('token');
    const [temas,setTemas] = useState<Temas>({

        id:0,
        descricao: ''

    })

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
            headres:{

            'Authorization': token

        }
        })

    }

        function updatedTemas (e: ChangeEvent<HTMLInputElement> ) {

        

        setTemas ({
            ...temas,
            [e.target.name]: e.target.value,
            
        })
 
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("temas " + JSON.stringify(temas))

        if (id !== undefined) {
            
            console.log(temas)
            
            put(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            
            alert('Tema Atualizado Com Sucesso');
        
        } else {
            
            post(`/temas`, temas, setTemas, {
                headers: {
                    'Authorization': token
                }
            })
            
            alert('Tema Cadastrado Com Sucesso');
        }
        back()

    }

    function back() {
        history ('/temas')
    }




    return (
        <Container maxWidth="sm" className="topo">
           
            <form onSubmit={onSubmit}>
               
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
               
                <TextField value={temas.descricao} onChange ={(e:ChangeEvent<HTMLInputElement>) => updatedTemas(e)}  id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
               
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
           
            </form>
        </Container>
    )
}

export default CadastroTema; 