import React from "react";


export default function HomeHead() {
    return (
        <div className='header'>
            <div className='headerImg' />
            <div className='headerMain'>
                <div className='headerLogin'>
                    <btn className='btnLoginSecondary' >Zaloguj</btn>
                    <btn className='btnLoginPrimary'>Załóż konto</btn>
                </div>
                <div className='headerMenu'>
                    <ul className='headerMenuElements'>
                        <li className='btnMenuPrimary'>Start</li>
                        <li className='btnMenuSecondary'>O co chodzi?</li>
                        <li className='btnMenuSecondary'>O nas</li>
                        <li className='btnMenuSecondary'>Fundacja i organizacje</li>
                        <li className='btnMenuSecondary'>Kontakt</li>
                    </ul>
                </div>
                <div className='headerText'>
                    <p>Zacznij pomagać!</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                </div>
            </div>
        </div>
    );
}