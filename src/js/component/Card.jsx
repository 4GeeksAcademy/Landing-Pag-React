import { Button } from "bootstrap";
import React from "react";

function Card() {
    return (
        <div className="card mt-5 text-center" style={{ width: '18rem' }} >
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam unde </p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-primary btn-lg ">Find Out More!</button>
            </div>
        </div>
    );

}
export default Card;