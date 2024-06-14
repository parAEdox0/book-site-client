import ListBooks from "../components/ListBooks";
import useFetch from "../hooks/useFetch";

const Home = () => {
  let {
    data: books,
    isPending,
    error,
  } = useFetch("https://book-site-api.onrender.com/books");

  return (
    <div className="home w-[100%] bg-white px-[6vh] pt-[3vh] pb-[3vh] text-black rounded-xl">
      <p className="text-4xl font-bold text-[#eb6344] pb-[3vh]">All Books</p>
      {error && (
        <p className="h-[35vh] text-2xl text-red-500 pt-[12vh] font-bold">
          {error}
        </p>
      )}
      {isPending && (
        <div className="w-[100%] h-[35vh] flex justify-start items-start pt-10">
          <img
            className="h-60"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2dpaDk1amNhZzY3c2x6OG1ianh1eWx6eWpld3RvbndmZXA5dGVmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y1ZBcOGOOtlpC/200w.webp"
          />
        </div>
      )}
      {books && <ListBooks books={books} />}
    </div>
  );
};

export default Home;
