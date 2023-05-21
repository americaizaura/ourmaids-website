import { Card, Image, Text, Badge, Button, Group, Avatar } from "@mantine/core";

interface MenuProps {
  title: string;
  image: string;
}

function Menu(props: MenuProps) {
  return (
    <div>
      <div className="rounded-full ">
      <aside className="w-60 h-14 flex flex-row cursor-pointer">
            <img
              className="w-full h-14 rounded-2xl relative object-cover"
              src={props.image}
              alt={props.title}
            />
            <p className="absolute z-10 text-[#fff] px-5 font-semibold">{props.title}</p>
      </aside>
    </div> 
      </div>
      
      
  );
}

export default Menu;
