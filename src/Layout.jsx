import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mui">Mui</Link>
            </li>
            <li>
              <Link to="/uikit">Tenjin UI Kit</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Yethi Refelct Testing</p>
      </footer>
    </div>
  );
};

export default Layout;
