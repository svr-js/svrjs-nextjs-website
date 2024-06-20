import { FC } from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="">{content}</p>
    </div>
  );
};

export default Card;
