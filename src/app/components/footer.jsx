// components/Footer.js

import Link from 'next/link';

export default function Footer() {
    return (

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

            <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
                <div className="bg-gray-700 p-3 rounded-full">
                    <span className="text-white text-xl font-bold">*</span>
                </div>
                <p className="mt-3 text-center md:text-left">
                    © 2024 Alayers, made with NextJS.<br />
                    All rights reserved.
                </p>
            </div>

            {/* Middle Section: Links */}
            <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
                <div>
                    <h3 className="text-gray-300 font-medium mb-3">Explore</h3>
                    <ul className="space-y-1">
                        <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
                        <li><Link href="#faqs" className="hover:text-white">FAQs</Link></li>
                        <li><Link href="#about" className="hover:text-white">About</Link></li>
                        <li><Link href="#testimonials" className="hover:text-white">Testimonials</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-gray-300 font-medium mb-3">Connect</h3>
                    <ul className="space-y-1">
                        <li><Link href="https://github.com/Alayers2804" className="hover:text-white">GitHub</Link></li>
                        <li><Link href="https://www.linkedin.com/in/ferdinand-aprillian-bb232a17a/" className="hover:text-white">LinkedIn</Link></li>
                        <li><Link href="#portfolio" className="hover:text-white">Portfolio</Link></li>
                        <li><Link href="#resume" className="hover:text-white">Resume</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-gray-300 font-medium mb-3">Legal</h3>
                    <ul className="space-y-1">
                        <li><Link href="#terms" className="hover:text-white">Terms</Link></li>
                        <li><Link href="#privacy" className="hover:text-white">Privacy</Link></li>
                        <li><Link href="#cookies" className="hover:text-white">Cookies</Link></li>
                        <li><Link href="#sitemap" className="hover:text-white">Sitemap</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
