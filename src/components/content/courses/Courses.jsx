import React from "react";
import { motion } from "framer-motion";
import {
  CourseHeading,
  CoursesContainer,
  FilterBtn,
  FilterSection,
} from "./Courses.styled";
const Courses = () => {
  return (
    <CoursesContainer>
      <FilterSection>
        <FilterBtn> همه</FilterBtn>
        <FilterBtn> جاواسکریپت</FilterBtn>
        <FilterBtn> سی اس اس </FilterBtn>
      </FilterSection>
      <CourseHeading>
        <div>
          <motion.p
            whileHover={{
              y: -20,
            }}
          >
            دوره های برنامه نویسی اکادمی <br />
            فرانت هوکس
          </motion.p>
          <span />
        </div>
      </CourseHeading>
    </CoursesContainer>
  );
};

export default Courses;
