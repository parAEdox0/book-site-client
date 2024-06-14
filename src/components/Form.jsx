import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  const [pages, setPages] = useState(0);
  const [coverImage, setCoverImage] = useState("");
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = { title, author, genre, summary, pages, coverImage, rating };

    try {
      const response = await fetch("http://localhost:8888/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error(
          `Couldn't fetch the API: ${response.status} ${response.statusText}`
        );
      }
      // Assuming the navigate function is correctly set up
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl text-orange-600 font-bold">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col my-5">
        <label className="text-lg mb-1 text-zinc-500">Title:</label>
        <input
          className="border mb-1 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md w-[30vw] h-9 outline-none"
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="text-lg mb-1 text-zinc-500">Author:</label>
        <input
          className="border mb-1 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md  w-[30vw] h-9 outline-none"
          type="text"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label className="text-lg mb-1 text-zinc-500">Genre:</label>
        <input
          className="border mb-1 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md  w-[30vw] h-9 outline-none"
          type="text"
          value={genre}
          required
          onChange={(e) => setGenre(e.target.value)}
        />
        <label className="text-lg mb-1 text-zinc-500">Summary:</label>
        <textarea
          className="border mb-1 text-zinc-500 text-[20px] px-2 py-2 resize-none border-zinc-300 rounded-md  w-[30vw] h-[10vh] outline-none"
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
        <label className="text-lg mb-1 text-zinc-500">Number of Pages:</label>
        <input
          className="border mb-1 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md  w-[30vw] h-9 outline-none"
          type="text"
          required
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <label className="text-lg mb-1 text-zinc-500">Cover Image Url</label>
        <input
          className="border mb-1 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md  w-[30vw] h-9 outline-none"
          type="text"
          value={coverImage}
          required
          onChange={(e) => setCoverImage(e.target.value)}
        />
        <label className="text-lg mb-1 text-zinc-500">Rating:</label>
        <input
          className="border mb-1 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md  w-[30vw] h-9 outline-none"
          type="text"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <div className="w-[100%] flex justify-center">
          <button className="bg-orange-500 mt-3 text-white py-3 w-[100%] rounded-md font-semibold">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
