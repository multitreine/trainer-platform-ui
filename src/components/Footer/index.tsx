const footerData = {
  copyright: "© 2024 Multi Treine. Todos os direitos reservados.",
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
}