import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BookDetail = () => {
  const params = useParams("id");
  let {
    data: book,
    isPending,
    error,
  } = useFetch(`https://book-site-api.onrender.com/books/${params.id}`);
  return (
    <div className="flex gap-[3vh]">
      <div className="home w-[30%] h-[78vh] bg-white  items-start flex flex-col px-[6vh] pt-[4vh] pb-[3vh] text-black rounded-xl">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {book && (
          <>
            <img className="h-[40vh]" src={book.coverImage} alt="" />
            <div className="w-[100%] mt-[4vh]">
              <p className="text-2xl text-zinc-700 mb-3">
                <span className="text-xl text-orange-600 font-semibold mr-1">
                  Name :
                </span>
                {book.title}
              </p>
              <p className="text-2xl text-zinc-700 mb-3">
                <span className="text-xl text-orange-600 font-semibold mr-1 ">
                  Written by :
                </span>
                {book.author}
              </p>
              <p className="text-2xl text-zinc-700 mb-3">
                <span className="text-xl text-orange-600 font-semibold mr-1 ">
                  Total pages :
                </span>
                {book.pages}
              </p>
              <p className="text-2xl text-zinc-700 mb-3">
                <span className="text-xl text-orange-600 font-semibold mr-1 ">
                  Rating :
                </span>
                {book.rating}
              </p>
              <p className="text-2xl text-zinc-700 mb-3">
                <span className="text-xl text-orange-600 font-semibold mr-1 ">
                  Genres :
                </span>
                {...book.genre}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="home w-[70%] h-[78vh] bg-white overflow-x-hidden overflow-y-auto flex flex-col items-center px-[6vh] pt-[6vh] pb-[3vh] text-black rounded-xl">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {book && (
          <>
            <p className="text-5xl font-semibold text-orange-500 pb-[6vh]">
              Summary
            </p>
            <p className="w-[90%] text-xl tracking-widest text-zinc-600">
              {book.summary}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
