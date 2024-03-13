
const Header = (props) => {
  return (
    <header className="header flex items-center justify-between p-4 sticky top-0">
      <span className="text-3xl font-bold text-sky-500">{props.name}</span>

      <img
        className="profile-image border-4 w-40 h-40 rounded-full absolute right-4 top-4"
        src="../images/brian.jpg"
        alt="Brian"
        style={{ zIndex: 20 }} // Inline style for higher z-index
      />
    </header>
  );
};
export default Header;
