import React from 'react';
import style from './App.module.scss';
import {InputForm} from "../InputForm/InputForm";


const App = () => {
    return (
        <div>
            <header className={style.header}>
                <InputForm/>
            </header>
        </div>
    );
}

export default App;
