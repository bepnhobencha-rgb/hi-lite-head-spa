import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-hl-black px-4 text-center text-white">
      <p className="font-serif text-8xl font-semibold text-hl-gold/20">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-sm text-white/50">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-hl-gold px-6 py-3 text-sm font-semibold text-hl-black hover:bg-hl-gold-light"
      >
        Back to Home
      </Link>
    </div>
  );
}
