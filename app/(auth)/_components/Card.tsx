import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  title: string;
  url: string;
}

const Card: FC<CardProps> = ({ title, url }) => {
  return (
    <div className="bg-accent border rounded-lg hover:bg-muted transition-all">
      <Link href={url} className="group">
        <div className="flex-center rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <ArrowUpRight className="w-5 h-5 mb-2 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
