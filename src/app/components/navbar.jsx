import Link from "next/link";

export default function navbar() {
    return (
        <><div className="text-2xl font-bold">Alayers</div><nav className="flex gap-5">
            <Link href="#work" className="hover:text-gray-400 px-4 py-2">Work</Link>
            <Link href="#projects" className="hover:text-gray-400 px-4 py-2">Projects</Link>
            <Link href="#skills" className="hover:text-gray-400 px-4 py-2">Skills</Link>
            <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact
            </Link>
        </nav></>
    );
}
