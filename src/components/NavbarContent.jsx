function NavbarContent({ genre }) {
  return (
    <div>
      <a className="dropdown-item" href={`#${genre}`}>
        {genre}
      </a>
    </div>
  );
}

export default NavbarContent;
