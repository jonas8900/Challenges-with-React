export default function Entries({ children, allCards }) {
  return (
    <section className="container__seciton">
      <h3>All Entries {allCards}</h3>
      <h4>Favorites</h4>
      <div>
        <h5>{children}</h5>
        <p>{children}</p>
      </div>
    </section>
  );
}
