import React, { Component } from 'react';

class Test5 extends Component {
    
    render() {

        const isLogin = true

        return (
            <div>
                { isLogin === true ? <button>로그인1</button> : 
                <button>로그아웃1</button>}

                { isLogin === true && <button> 로그인2 </button> }
                { isLogin === false || <button> 로그아웃2 </button> }

                { isLogin && <button> 로그인3 </button> || <button> 로그아웃3</button> }
            </div>
        );
    }
}

export default Test5;