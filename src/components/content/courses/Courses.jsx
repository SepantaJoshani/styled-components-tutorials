import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CourseHeading,
  CoursesContainer,
  FilterBtn,
  FilterSection,
  CoursesGrid,
} from "./Courses.styled";
import Course from "./Course";
const Courses = ({ products, showAll, showJS, showCss }) => {
  return (
    <CoursesContainer>
      <FilterSection>
        <FilterBtn onClick={showAll}> همه</FilterBtn>
        <FilterBtn onClick={showJS}> جاواسکریپت</FilterBtn>
        <FilterBtn onClick={showCss}> سی اس اس </FilterBtn>
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
      <CoursesGrid layout>
        <AnimatePresence>
          {products.map(({ id, image, price, text, time }) => (
            <Course
              key={id}
              content={text}
              duration={time}
              price={price}
              image={image}
            />
          ))}
        </AnimatePresence>
      </CoursesGrid>
    </CoursesContainer>
  );
};

export default Courses;
