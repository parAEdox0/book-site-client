import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 1024, min: 720 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 720, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ListBooks = ({ books }) => {
  return (
    <Carousel
      responsive={responsive}
      className="books h-[35vh] flex gap-8 overflow-x-auto no-scrollbar"
    >
      {books.reverse().map((book) => (
        <Link key={book._id} to={`/books/${book._id}`}>
          <div
            key={book._id}
            className=" flex flex-col items-start cursor-pointer"
          >
            <img
              className="h-[25vh] w-[160px] object-cover object-top rounded-md shadow-md"
              src={book.coverImage}
              alt="cover_image"
            />
            <p className="text-zinc-600 hover:text-orange-600 w-[15vh] mt-4 mb-1 text-sm font-semibold ml-1">
              {book.title}
            </p>
            <p className="text-zinc-400  text-sm ml-1">{book.author}</p>
          </div>
        </Link>
      ))}
    </Carousel>
  );
};

export default ListBooks;
