import React from "react";
import Header from "../components/Header";
import courseslist from "./coursesdata";
function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-intro-content">
          <h1>Cursos</h1>

          <div>
            <p>
              “No puedo enseñar a las personas todo lo que necesitan saber. 
              Lo mejor que puedo hacer es colocarlas en una posición donde 
              puedan encontrar lo que necesitan saber cuando lo necesiten.”
            </p>

            <button className="primary-button"><a href="#courses-list">START</a></button>
          </div>
        </div>
      </div>

      <div className="why-shey-parent">
        <div className="why-shey n-box1 flex-with-center">
          <h1>Por que Juan José ?</h1>
          <div className="why-shey-content">
            <p>Simple..</p>

            <p>Sé cómo comunicarme...</p>

            <p>No, no, no... No me refiero a charlas complicadas.</p>

            <p>Sé cómo</p>

            <p>Mantenerlo Claro y Sencillo</p>
          </div>
        </div>
      </div>

      <div className="container courses-list mb-5" id='courses-list'>
        <h3 className="font-bold">Echa un vistazo a mis cursos</h3>
        <hr />

        <div className="row mt-5">
          {courseslist.map((course) => {
            return (
              <div className="col-md-4">
                <div className="position-relative course">
                  <img src={course.image} alt="" className='w-100'/>
                  <div className="course-content w-100">
                    <h3>{course.title}</h3>
                    <hr />
                    <p>{course.description}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
