import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn't find what you were looking for.
      </p>
      <Link href="/" className="text-sm underline">
        Back to home
      </Link>
    </div>
  );
}
