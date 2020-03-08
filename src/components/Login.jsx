import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.log = this.log.bind(this);
        this.state = { username: '', password:''};
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)    
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChange1(event) {
        this.setState({ username:event.target.value })
      }
    
      handleChange2(event) {
        this.setState({ password:event.target.value })
      }  
      log(){
          this.props.handleIndex(0);
      }
      handleSubmit(e){
          e.preventDefault();
        var url = 'http://localhost:8080/proyecto/Servlet1';
        let details = {
            'user': this.state.username,
            'password': this.state.password
        };
    
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
       

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            } ,
            body: formBody, // data can be `string` or {object}!
            
            }).then(res => res.text())
            .catch(error => console.error('Error:', error))
            .then(response => alert(response));
            
        }


    render(){
        return(
            <div className="App">
            <form onSubmit={this.handleSubmit}>
            Usuario <input type="text" name="user" onChange={this.handleChange1}/><br/>
            Contraseña <input type="text" name="pass" onChange={this.handleChange2}/><br/>
            <input type="submit" value="Entrar"/><br/>
            {this.props.index}
            </form>
            </div>

        );

    }


}
export default Login;