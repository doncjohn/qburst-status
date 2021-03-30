const Header = () => {
  const date = new Date().toTimeString();
  return (
    <div className="date">
      <h2>QBS - Qburst Status</h2>
      <h3>{date} Koratty</h3>
    </div>
  );
};

export default Header;
