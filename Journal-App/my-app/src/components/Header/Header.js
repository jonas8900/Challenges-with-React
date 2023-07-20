import "./Header.css";

export default function Header({ children }) {
  return (
    <header>
      <h1 className="header__h1--settings">{children}</h1>
    </header>
  );
}
