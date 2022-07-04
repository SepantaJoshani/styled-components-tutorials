import React from "react";
import { motion } from "framer-motion";
import {
  CourseHeading,
  CoursesContainer,
  FilterBtn,
  FilterSection,
  CoursesGrid,
} from "./Courses.styled";
import { data } from "../../../helper";
import Course from "./Course";
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
      <CoursesGrid>
        {data.map(({ id, image, price, text, time }) => (
          <Course
            key={id}
            content={text}
            duration={time}
            price={price}
            image={image}
          />
        ))}
      </CoursesGrid>
    </CoursesContainer>
  );
};

export default Courses;
