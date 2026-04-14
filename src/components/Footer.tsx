export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Yana Chen. Built with passion in Tampere, Finland.</p>
      </div>
    </footer>
  );
}
