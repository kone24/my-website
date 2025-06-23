export default function Footer() {
    return (
        <footer style={{color: "var(--color-olivewood)",}}className="p-4">
            <div className="text-center">
                <p className="text-sm">© {new Date().getFullYear()} Thomas Kone. All rights reserved.</p>
            </div>
        </footer>
    );

}
