
const Header = (props) => {
  return (
    <header className="App-header flex items-center justify-between p-4">
      <div className="text-3xl text-sky-500 font-bold">{props.name}</div>
      <div className="text-sky-500">links</div>
    </header>
  );
};
export default Header;
