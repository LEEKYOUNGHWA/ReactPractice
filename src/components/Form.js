import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className="Form">
            <form>
                <input type="text" placeholder="할일입력" />
                <button>추가</button>
            </form>
        </div>
    );
};

export default Form;