interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-4 w-4 fill-amber-400"
      >
        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
      </svg>
      {rating.toFixed(1)}
    </span>
  );
}
