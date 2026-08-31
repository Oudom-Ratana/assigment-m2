export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="text-3xl font-semibold">404 - Page Not Found</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn't find what you were looking for.
      </p>
    </div>
  );
}