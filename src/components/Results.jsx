import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Results = () => {
    const { score } = useParams();
    return (
        <div className="container">
            <div className="card">
                <h1>Result</h1>
                <p>You get :</p>
                <h2>{score}</h2>
                <div className="btn">
                    <Link to="/">Try Again</Link>
                </div>
            </div>
        </div>
    );
};

export default Results;
