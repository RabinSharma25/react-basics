import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = React.useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/RabinSharma25")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img className="rounded-full  w-52" src={data.avatar_url} alt="_blank" />
    </div>
  );
}

const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/RabinSharma25");
  return res.json();
};

export { Github, githubInfoLoader };
