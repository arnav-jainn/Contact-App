import React from "react";

const Navbar = () => {
  return (
    <div className="my-4 flex h-[60px] items-center justify-center gap-2 rounded-md bg-white text-xl font-medium">
      <img src="/firebase.svg" alt="firebase" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
