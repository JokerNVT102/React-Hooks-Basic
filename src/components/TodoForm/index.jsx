import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    //Khi input thay đổi thì cập nhật lại state
    function handleValueChane(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        // enter không reload lại trình duyệt
        e.preventDefault();

        if(!onSubmit)return;
        const formValues ={
            title: value,
        };
        onSubmit(formValues);

        //reset form value
        setValue('');
    }

    return (
       <form onSubmit={handleSubmit} >
           <input 
           type="text" 
           value = {value}
           onChange ={handleValueChane}
           />
       </form>
    );
}

export default TodoForm;