import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="col">
          <div className="head">FIND US HERE</div>
          <a href="https://www.facebook.com/profile.php?id=100058551763288">
          <img src="Images/facebook.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/shruti-singh-86657b202/">
          <img src="Images/linkedin.png" alt="" /></a>
          <a href="https://www.instagram.com/__s__h_r_u__/">
          <img src="Images/insta.png" alt="" /></a>
        </div>
        <div className="col">
          <div className="head">CONTACT INFO</div>

          <div className="Items">Call: (+91)7980012430</div>
          <div className="Items">gshrutisingh@gmail.com</div>
        </div>
        <div className="col">
          <div className="head">QUICK LINKS</div>
          <div className="Items"> <a href="/">Refresh</a></div>
        </div>
      </div>
      <div className="copyright">
        <div className="body">&copy; Shruti Singh</div>
      </div>
    </>
  );
}
