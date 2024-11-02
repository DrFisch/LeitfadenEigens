import Link from 'next/link';

type ButtonProps = {
  href: string;
  text: string;
};

export default function Button({ href, text }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        {text}
      </button>
    </Link>
  );
}