import React, { Component } from 'react';

class Test6 extends Component {
    render() {

        const data = [
            {no:1, name:'홍길동', addr : '서울', age:20, sex :'남'},
            {no:2, name:'강호동', addr : '강원', age:30, sex :'남'},
            {no:3, name:'김제동', addr : '철원', age:10, sex :'여'},
            {no:4, name:'유재석', addr : '제주', age:50, sex :'남'},
            {no:5, name:'김철수', addr : '부산', age:60, sex :'여'},
            {no:6, name:'김순희', addr : '전라', age:40, sex :'남'},
        ]

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>주소</th>
                            <th>나이</th>
                            <th>성별</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) => <tr key ={item.no}> 
                                                    <td> {item.name} </td>
                                                    <td> {item.addr} </td>
                                                    <td> {item.age} </td>
                                                    <td> {item.sex} </td>
                                                </tr>)
                        } 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test6;