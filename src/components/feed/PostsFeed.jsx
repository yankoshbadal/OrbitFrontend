import React from "react";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    name: "Maya",
    initial: "M",
    avatarColor: "#d99b3f",
    time: "12 min ago",
    location: "Campus Café",
    emoji: "☕",
    tag: "late afternoon fuel",
    background: "linear-gradient(135deg, #8c5a35, #d09a48)",
    likes: 48,
    caption:
      "Found the only quiet table on campus. Keeping the location strictly classified 🤫",
    comments: [
      {
        id: 1,
        name: "Diego",
        initial: "D",
        avatarColor: "#df7659",
        text:
          "Is this 2nd floor library? I recognise that wooden table anywhere!",
      },
      {
        id: 2,
        name: "Lena",
        initial: "L",
        avatarColor: "#78947d",
        text: "Drop the coords please 😭",
      },
    ],
  },

  {
    id: 2,
    name: "Priya",
    initial: "P",
    avatarColor: "#8db69b",
    time: "1 hr ago",
    location: "Sports Complex",
    emoji: "🏸",
    tag: "game night",
    background: "linear-gradient(135deg, #517968, #91b49e)",
    likes: 31,
    caption:
      "Anyone brave enough for doubles tomorrow afternoon?",
    comments: [
      {
        id: 1,
        name: "Maya",
        initial: "M",
        avatarColor: "#d99b3f",
        text: "I'm in!",
      },
    ],
  },

  {
    id: 3,
    name: "Theo",
    initial: "T",
    avatarColor: "#877d70",
    time: "2 hrs ago",
    location: "Student Centre",
    emoji: "🎬",
    tag: "movie night",
    background: "linear-gradient(135deg, #514a42, #83786c)",
    likes: 27,
    caption:
      "Planning a movie night this Friday. Horror or comedy?",
    comments: [
      {
        id: 1,
        name: "Aarav",
        initial: "A",
        avatarColor: "#806c99",
        text: "Definitely horror.",
      },
      {
        id: 2,
        name: "Zoya",
        initial: "Z",
        avatarColor: "#866b80",
        text: "Comedy please 😂",
      },
    ],
  },

  {
    id: 4,
    name: "Aarav",
    initial: "A",
    avatarColor: "#806c99",
    time: "3 hrs ago",
    location: "Computer Lab",
    emoji: "💻",
    tag: "debugging",
    background: "linear-gradient(135deg, #504461, #82709a)",
    likes: 19,
    caption:
      "Three hours debugging and the problem was a missing semicolon.",
    comments: [],
  },

  {
    id: 5,
    name: "Sara",
    initial: "S",
    avatarColor: "#9a6f69",
    time: "4 hrs ago",
    location: "Library",
    emoji: "📚",
    tag: "study break",
    background: "linear-gradient(135deg, #654b48, #a77d76)",
    likes: 42,
    caption:
      "Library is suspiciously peaceful today.",
    comments: [
      {
        id: 1,
        name: "Rohan",
        initial: "R",
        avatarColor: "#5f817d",
        text: "Give it another hour 😂",
      },
    ],
  },

  {
    id: 6,
    name: "Kabir",
    initial: "K",
    avatarColor: "#657d91",
    time: "5 hrs ago",
    location: "Football Ground",
    emoji: "⚽",
    tag: "weekend plans",
    background: "linear-gradient(135deg, #455866, #70899d)",
    likes: 36,
    caption:
      "Looking for five more people for Saturday's game.",
    comments: [],
  },

  {
    id: 7,
    name: "Ananya",
    initial: "A",
    avatarColor: "#927b5b",
    time: "6 hrs ago",
    location: "Design Studio",
    emoji: "🎨",
    tag: "creative mode",
    background: "linear-gradient(135deg, #65543c, #9c835b)",
    likes: 24,
    caption:
      "Finally finished this illustration after way too many revisions.",
    comments: [
      {
        id: 1,
        name: "Sara",
        initial: "S",
        avatarColor: "#9a6f69",
        text: "This looks amazing!",
      },
    ],
  },

  {
    id: 8,
    name: "Rohan",
    initial: "R",
    avatarColor: "#5f817d",
    time: "7 hrs ago",
    location: "Physics Block",
    emoji: "🔭",
    tag: "late lecture",
    background: "linear-gradient(135deg, #405d59, #6f958f)",
    likes: 17,
    caption:
      "The sunset from the physics block is actually insane.",
    comments: [],
  },

  {
    id: 9,
    name: "Zoya",
    initial: "Z",
    avatarColor: "#866b80",
    time: "8 hrs ago",
    location: "Open Air Theatre",
    emoji: "🎶",
    tag: "campus vibes",
    background: "linear-gradient(135deg, #5b4657, #8d7185)",
    likes: 53,
    caption:
      "Best evening on campus in a while.",
    comments: [
      {
        id: 1,
        name: "Theo",
        initial: "T",
        avatarColor: "#877d70",
        text: "That concert was incredible.",
      },
    ],
  },
];

const PostsFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPost = posts[currentIndex];

  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    }
  };

  return (
    <>
      {/* =========================
          MOBILE
          ========================= */}
      <div className="space-y-5 lg:hidden">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={{
              ...post,
              position: posts.indexOf(post) + 1,
              total: posts.length,
            }}
          />
        ))}
      </div>

      {/* =========================
          DESKTOP
          ========================= */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPost.id}
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -35,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <PostCard
              post={{
                ...currentPost,
                position: currentIndex + 1,
                total: posts.length,
              }}
              onNext={handleNext}
              onPrevious={handlePrevious}
              hasNext={currentIndex < posts.length - 1}
              hasPrevious={currentIndex > 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default PostsFeed;