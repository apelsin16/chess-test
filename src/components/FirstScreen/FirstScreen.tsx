import React from "react";
import classNames from "classnames";

type FirstScreenProps = {
    player1: number,
    fightersArray: { name: string; logo: string; }[];
    loading: boolean,
    fighter: { name: string; logo: string; }
}

const FirstScreen = ({player1, fightersArray, loading, fighter}:FirstScreenProps)  => {

    return (
        <div className="FirstScreen">
            {loading && <h1>Your choise is {fighter.name}</h1>}
            <ul className="FirstScreen__list" >
                {fightersArray.map(({name, logo}, index) =>
                    <li
                        key={name}
                        tabIndex={1}
                        data-index={index}
                        className={classNames("FirstScreen__item", {
                            "FirstScreen__item--green": index===player1
                        })
                    }>
                        <img src={logo} alt={name} className="FirstScreen__img"/>
                    </li>
                )}
            </ul>


        </div>)
}

export default FirstScreen;