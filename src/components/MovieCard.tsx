import { motion } from 'framer-motion';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  rating: number;
}

export default function MovieCard({ id, title, posterPath, rating }: MovieCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer focus-ring group"
      tabIndex={0}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-right">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-primary text-xs">⭐ {rating.toFixed(1)}</p>
      </div>
    </motion.div>
  );
}