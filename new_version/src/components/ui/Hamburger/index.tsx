import s from "./s.module.scss";

function Hamburger() {
  return (
    <div className={s.hamburger}>
      <div className={s.hamburgerLine}></div>
      <div className={s.hamburgerLine}></div>
      <div className={s.hamburgerLine}></div>
    </div>
  )
}

export default Hamburger;