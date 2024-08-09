import React from "react";

function Jumbotron() {
    return (
        <div className="bg-light p-5 rounded-lg m-3 p-10 mt-20">
            <div className="container ">
                <h1 className="display-4 d-flex justify-content-start">A warm Welcome!</h1>
                <p className="lead d-flex justify-content-start" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas quisquam mollitia iure magnam ab, earum, tempore tempora odio voluptate, assumenda autem harum aliquid corporis incidunt repellat officiis quos. Fugiat!</p>
                <button className="btn btn-primary btn-lg d-flex justify-content-start" >Call to action</button>

            </div>
        </div>
    );
}

export default Jumbotron;