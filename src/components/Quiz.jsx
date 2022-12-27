import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./quiz.css";

const Quiz = () => {
    const inputref = useRef(null);
    const quiz = useSelector((state) => state.mainReducer);
    const [index, setIndex] = useState(0);
    const [currQ, setCurrQ] = useState([]);
    const [result, setResult] = useState([]);
    const [score, setScore] = useState(0);
    const [next, setNext] = useState(true);

    useEffect(() => {
        setCurrQ([quiz[index]]);
        console.log(index);
    }, [index, quiz]);

    const handleGoNext = (e) => {
        e.preventDefault();
        if (index < quiz.length - 1) {
            setIndex(index + 1);
            setResult([...result, inputref.current.option.value]);
        } else {
            setNext(false);
            setResult([...result, inputref.current.option.value]);
        }
    };

    useEffect(() => {
        result.forEach((item) => {
            if (quiz[index].answer.includes(item) && item !== "") {
                setScore(score + 1);
            }
        });
    }, [result, index, quiz, score]);

    return (
        <div className="container">
            {currQ.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <h1>Quiz_{item.id}</h1>
                        <p>{item.question}</p>
                        <div className="inputs">
                            <form ref={inputref}>
                                {item.options.map((item, index) => {
                                    return (
                                        <div key={index} className="input">
                                            <input
                                                type="radio"
                                                name="option"
                                                value={item}
                                                id={`radio${index}`}
                                            />
                                            <label htmlFor={`radio${index}`}>
                                                {item}
                                            </label>
                                        </div>
                                    );
                                })}
                                <div className="btn">
                                    {next ? (
                                        <button
                                            type="submit"
                                            onClick={(e) => {
                                                handleGoNext(e);
                                            }}>
                                            NExT
                                        </button>
                                    ) : (
                                        <Link to={`/result/${score}`}>
                                            Result
                                        </Link>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Quiz;
