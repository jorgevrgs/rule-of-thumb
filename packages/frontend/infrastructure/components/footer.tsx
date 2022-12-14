import Icon from './icon';

export default function Footer() {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="footer__links">
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <span>Follow us</span>
          <ul>
            <li>
              <a href="#">
                <Icon name="facebook" aria-label="Follow us in Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <Icon name="twitter" aria-label="Follow us in Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
