import React from "react";
import { Routes, Route } from "react-router-dom";
import ClassRoom from '../pages/ClassRoom'
import Teacher from '../pages/Teacher'
import Student from '../pages/Student'
import Grade from '../pages/Grade'
import Subject from '../pages/Subject'


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/Grade" element={<Grade />} />
        <Route path="/ClassRoom" element={<ClassRoom />} />
        <Route path="/Subject" element={<Subject />} />
        <Route path="/Teacher" element={<Teacher />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
