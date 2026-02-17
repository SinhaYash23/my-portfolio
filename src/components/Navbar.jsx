import React from "react";

const Navbar = () => {

  const menuList = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Services",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex shrink-0">
            <span className="text-2xl font-bold text-purple-900">
              YashSinha
            </span>
          </div>
          <div className="md:flex space-x-8 font-medium font-bold text-gray-900">
            {menuList.map((item, index)=>{
              return(<a href={item.link} key={index} className="hover:text-blue-700">
              {item.name}
            </a>)
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
