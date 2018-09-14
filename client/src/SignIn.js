import React, { Component } from 'react';
const send = {};
export default class SignIn extends Component {
    state = {
        name: '',
        surname: '',
        response: ''
    };  
    
    handleChange = (event) =>  {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }

    callApi = async () => {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(send)
        });
        // console.log(response);
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
    };


    handleSubmit = (event) => {
        const {name, surname, response} = this.state;
        send.name = name;
        send.surname = surname;
        event.preventDefault();
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
        // console.log(this.state.name);
        // console.log(this.state.surname);

        //fetch without async await
        // fetch('/api', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        //     body: JSON.stringify(send)
        // })
        // .then(res => res.json())
        // .then(get => console.log(get))
        // .catch(err => console.log("err", err));
        

        console.log('response', this.state.response);

        console.log(send);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>

                <label>
                    Surname:
                    <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
           </form>  
        );
    }
}