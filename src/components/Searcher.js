import React from 'react'
import { useNavigate } from 'react-router-dom';
import sAlert from '@sweetalert/with-react';

function Searcher() {
    const navigation = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyWord = e.currentTarget.keyword.value.trim();
        
        if(keyWord.length < 4){
            sAlert("Debes escribir algo", "El minimo de caracteres es 4", "error")
        }else{
            e.currentTarget.keyword.value = '';
            navigation(`/results?key-word=${keyWord}`)
        }


    }

  return (
    <form className='d-flex align-items-center' onSubmit={submitHandler}>
        <label className='form-label mb-0'>
                <input className='form-control' type="text" name="keyword" placeholder='Buscar pelicula' />
        </label>
        <button className='btn btn-secondary m-1 text-white' type='submit' >Buscar</button>
    </form>
  )
}

export default Searcher
