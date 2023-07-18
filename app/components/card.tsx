interface CardProps {
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <a 
        href={link} 
        className="
          mt-8 p-6 basis-[45%] 
          border border-black/5 rounded-lg 
          shadow-lg shadow-black/25 
          hover:text-blue-500 hover:border-blue-500
        "
    >
        <h3 className="text-2xl font-bold mb-2">{title}  &rarr;</h3>
        <p className="text-lg">{description}</p>
    </a>
  );
};

export default Card;
