import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValue, registerUser  } from '../../store/actions/register.action'
import { rootUrl} from '../../config/globalConfig' 

import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export class Register extends Component {
    register = () =>{
        this.props.registerUser(this.props.data)
        .then( () => {
            if(this.props.success){
                window.location.replace(rootUrl+'painel')

            }

        })
        
    }


    render() {
        return (
            <div>
               <Container component="main" maxWidth="xs" >
                     <div className="mt-3 mt-md-5">
                        <div className="text-center">
                        <Typography classname="mt-3 font-weight" component="h1" variant="h6">Crie a sua conta. Teste grátis!</Typography>
                        </div>
                        <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nome"
                            name="name"
                            type="text"
                            value={this.props.data.name}
                            onChange={(text) => {
                                
                                this.props.changeValue({name: text.target.value})
                                if(this.props.error.name){
                                    delete this.error.name

                                }
                            }}
                            />

                            {(this.props.error.name)&&
                                <strong className="text-danger">{this.props.error.name[0]}</strong>
                                }


                            <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            value={this.props.data.username}
                            onChange={(text) => {
                                
                                this.props.changeValue({email: text.target.value})
                                if(this.props.error.email){
                                    delete this.error.email
                                }   
                            }}
                            />
                            {(this.props.error.email)&&
                                <strong className="text-danger">{this.props.error.email[0]}</strong>
                                }

                            <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            type="password"
                            value={this.props.data.password}
                            onChange={(text) => this.props.changeValue({password: text.target.value})}
                            />  

                            <Button 
                            type="button"
                            variant="contained"
                            fullWidth
                            color="primary"
                            size="large"
                            classname="mb-3 mb-md-4 mt-4"
                            onChange={() => this.register()}
                            >
                            Cadastrar
                            </Button>
                            <div classname="">
                                <Link href="/login" classname="mt-4" color="secondary" variant="body2" disableElevation>
                                Fazer Login
                                
                                </Link>
                            </div>
                        </div>


                     </div>


                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.registerReducer.data,
    success: state.registerReducer.success,
    error: state.registerReducer.error,
})

const mapDispatchToProps = dispatch => ({
    registerUser: data => dispatch(registerUser(data)),
    changeValue: value => dispatch(changeValue(value)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
