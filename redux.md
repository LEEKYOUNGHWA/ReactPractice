1. 스토어 : state를 관리하는 저장소    
2. 액션/ 액션함수  
    A. 액션 : const CLICK="CLICK"  
    B. 액션함수 : const click = () =>({type:"CLICK"})  
    C. 액션실행 : click()  
3. 디스패치 : store.dispatch(click())  
4. 리듀서 : {type:"CLICK"} 받기  