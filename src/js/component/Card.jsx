
import React from "react";

function Card(props) {
    return (
        <div className="col-md-3 d-flex justify-content-center mb-4">
            <div className="card text-center" style={{ width: '18rem' }} >
                <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text ">{props.descripcion}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-primary btn-lg ">Find Out More!</button>
                </div>
            </div>
        </div>
    );
}
export default Card;