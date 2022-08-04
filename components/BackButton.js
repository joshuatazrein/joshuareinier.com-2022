import Link from "next/link";

export default function BackButton(props) {
  // scrolls to specific point on homepage
  return (
    <Link
      href={{
        pathname: "/",
        query: { section: props.title },
      }}
    >
      <button className="w-full border border-white rounded font-sans font-semibold bg-semiblack-500 accent">
        home
      </button>
    </Link>
  );
}
