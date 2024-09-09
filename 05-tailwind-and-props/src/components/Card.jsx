import React from "react";

function Card(props) {
  return (
    <div className="my-10">
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/18915012/pexels-photo-18915012/free-photo-of-dandelion.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="fon">
            <div>{props.details.name || "Anonymous"}</div>
            <div>Staff Engineer, Algolia</div>
            <div>System used: {props.system}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
