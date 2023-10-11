import Layout from "@/components/Layout";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => setShortUrl(data.shortUrl));
  };
  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Aqui podras poner al Url"
          className=" text-center pl-30 px-10 py-2 rounded-xl bg-purple-950 placeholder:text-[#e5e7eb] text-[#e5e7eb] "
        />
        <button
          type="submit"
          className="mt-5 px-8 py-3 bg-violet-700 hover:bg-violet-900 rounded-xl text-[#e5e7eb]"
        >
          Acortar
        </button>
      </form>
      <a target="_blank" className="mt-5 px-8 rounded-xl text-[#e5e7eb] bg-violet-900 hover:bg-violet-950" href={`/${shortUrl}`}>{shortUrl ? `${shortUrl}` : ''} </a>
    </Layout>
  );
}
