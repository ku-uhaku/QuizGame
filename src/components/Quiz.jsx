import React, { useEffect, useRef } from "react";
import "./quiz.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Quiz = () => {
  const inputref = useRef(null);

  const quiz = useSelector((state) => state.mainReducer);
  const [indexx, setIndex] = React.useState(0);
  const [currQ, setCurrQ] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [next, setNext] = React.useState(true);
  const [i, setI] = React.useState(0);
  useEffect(() => {
    setCurrQ([quiz[indexx]]);
  }, [indexx]);

  const handleGoNext = (e) => {
    e.preventDefault();
    if (indexx < quiz.length - 1) {
      setIndex(indexx + 1);
      setResult([...result, inputref.current.option.value]);
    } else {
      setNext(false);
      setResult([...result, inputref.current.option.value]);
    }
  };
  useEffect(() => {
    console.log(result);
    result.filter((item, index) => {
      if (quiz[i].answer.includes(item) && item !== "") {
        setScore(score + 1);
        setI(i + 1);
        return score;
      } else {
        setI(i + 1);
        setScore(score);
        return score;
      }
    });
  }, [result]);

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
                      <label htmlFor={`radio${index}`}>{item}</label>
                    </div>
                  );
                })}
                <div className="btn">
                  {next ? (
                    <button
                      type="submit"
                      onClick={(e) => {
                        handleGoNext(e);
                      }}
                    >
                      NExT
                    </button>
                  ) : (
                    <Link to={`result/${score}`}>Result</Link>
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
