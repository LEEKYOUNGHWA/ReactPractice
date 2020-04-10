import React, {Component, Fragment} from 'react'

class Test2 extends Component {
    render () {
        //변수
        const title = 'TEST2'
        const name ='lee'
        const age =20
        let addr ='seoul'
        let sex = 'male'
        let tel = '00-000-0000'

        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    <li>이름 : <b>{title}</b></li>
                    <li>나이 : <b>{age}</b></li>
                    <li>주소 : <b>{addr}</b></li>
                    <li>성별 : <b>{sex}</b></li>
                    <li>전화번호 : <b>{tel}</b></li>
                </ul>
                //설명글입니다.
                {/* //설명글입니다. */}

                <p //주석연습
                >  주석연습 </p>
            </div>
        )
    }
}

export default Test2