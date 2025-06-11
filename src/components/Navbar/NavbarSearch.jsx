import React from "react";
import styles from './NavbarSearch.module.scss'
export const NavbarSearch = () => (
  <form className={`search-bar   ${styles.form}`} style={{ maxWidth: '600px' }}>
    <input
      className="form-control rounded-start"
      type="search"
      placeholder="Buscar no site..."
      aria-label="Search"
    />
    <button className="btn btn-white rounded-end px-3" type="submit">
      <i className="bi bi-search text-white"></i>
    </button>
  </form>
);