"use client";

export default function SmartImg({ src, fallback, className, alt }) {
  return (
    <img
      className={className}
      alt={alt}
      src={src}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallback;
      }}
    />
  );
}
