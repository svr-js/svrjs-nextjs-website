import Link from "next/link";

const NotFound = () => {
  return (
    <section id="404error" className="flex-center flex-col wrapper container">
      <h1 className="text-3xl md:text-5xl text-center">
        <span className="text-red-500">404</span> Page not Found
      </h1>
      <p className="text-lg mt-3 text-muted-foreground">
        Please return back to{" "}
        <Link href="/" className="underline font-bold">
          Home
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
