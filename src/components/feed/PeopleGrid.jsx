import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PersonCard from "./PersonCard";

const PeopleGrid = ({ people, onLike, onPass }) => {
  const visiblePeople = people.slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {visiblePeople.map((person) => (
          <motion.div
            key={person.id}
            layout
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -100,
              scale: 0.94,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <PersonCard
              person={person}
              onLike={onLike}
              onPass={onPass}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PeopleGrid;