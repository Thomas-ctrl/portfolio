// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		// { label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Projects", href: "/projects" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

				{/* Logo / Name */}
				<Link href="/" className="text-xl font-bold tracking-tight text-gray-800">
					Thomas van Bavel
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex gap-8">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-gray-600 hover:text-gray-900 transition-colors" >
							{item.label}
						</Link>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-gray-700"
					aria-label="Toggle Menu" >
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

			</div>

			{/* Mobile Nav */} {isOpen && (<div className="md:hidden bg-white border-t border-gray-200">
				<nav className="flex flex-col p-4 space-y-4"> {navItems.map((item) =>
				(<Link key={item.href}
					href={item.href}
					className="text-gray-600
							hover:text-gray-900
							transition-colors"
					onClick={() => setIsOpen(false)}
				> {item.label} </Link>))}
				</nav> </div>)}
		</header>);
}
