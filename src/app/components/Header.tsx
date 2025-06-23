export default function Header() {
    return (
<header style={{color: "var(--color-olivewood)",}}className="p-4">
            <h1 className="text-2xl font-bold">Thomas Kone</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-color-slate hover:text-color-mocha">Home</a></li>
                    <li><a href="/about" className="text-color-slate hover:text-color-mocha">About</a></li>
                    <li><a href="/projects" className="text-color-slate hover:text-color-mocha">Projects</a></li>
                    <li><a href="/contact" className="text-color-slate hover:text-color-mocha">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
