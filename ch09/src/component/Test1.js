import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Test1 extends Component {

    state  = {
        data : [
            {no :1 , name :'a', agd:20, addr:'ss'},
            {no :2 , name :'af', agd:20, addr:'ssg'},
            {no :3 , name :'ag', agd:20, addr:'ssh'},
            {no :4 , name :'ah', agd:20, addr:'ssf'},
            {no :5 , name :'aj', agd:20, addr:'ssh'},
            {no :6 , name :'av', agd:20, addr:'sss'},
        ]
    }

    render() {
        
        const {data} = this.state
        const {style} ={width:'1200px' , margin:'auto'}

        return (
            <div style={style}>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>번호</th>
                    <th>Name</th>
                    <th>age</th>
                    <th>addr</th>
                    </tr>
                </thead>
                
                {data.map(dat => 
                   <tr key={dat.no}>
                        <td>{dat.no}</td>
                        <td>{dat.name}</td>
                        <td>{dat.agd}</td>
                        <td>{dat.addr}</td>
                    </tr>
                )}
               
                {/* <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody> */}
                </Table>
            </div>
        );
    }
}

export default Test1;