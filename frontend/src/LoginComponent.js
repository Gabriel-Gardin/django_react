import React from "react";

export default class LoginComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Usuário: ' + this.state.value + ' Senha: ' + this.state.password);
        event.preventDefault();
    }
    
    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
            Nome:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="password" value={this.state.password} onChange={this.handlePassword} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
        );
    }
    
      
}