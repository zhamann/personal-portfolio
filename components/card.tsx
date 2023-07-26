import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, image }) => {
  return (
    <a
      href={link}
      className="
        mt-8 basis-[45%] relative bg-white
        border-8 border-white rounded-xl
        shadow-lg shadow-black/25
        hover:text-blue-500 hover:shadow-xl hover:shadow-black/30
      "
    >
      <div className="relative h-48 rounded-lg overflow-hidden shadow-inner">
        <Image
          src={image}
          alt={title}
          fill={true}
        />
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </a>
  );
};

export default Card;