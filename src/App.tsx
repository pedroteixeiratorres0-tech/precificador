import htmlContent from "./imports/precificador-bolo.html?raw";

export default function App() {
  return (
    <iframe
      srcDoc={htmlContent}
      style={{ width: "100%", height: "100vh", border: "none", display: "block" }}
      title="Precificador de Receitas"
    />
  );
}
