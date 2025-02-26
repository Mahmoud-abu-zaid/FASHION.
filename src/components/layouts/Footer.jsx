export default function Footer() {
  return <>
  <div className="flex justify-around items-center flex-wrap py-[60px] bg-black text-white">
    <div>
      <h2 className="text-[22px]"><b> FASHION</b></h2>
      <p>Complete your style with awesome <br /> clothes from us.</p>
    </div>
    <div className="p-2">
      <ul>
        <li><a href="#"> <b>Company</b></a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div className="p-2">
      <ul>
        <li><a href="#"> <b>Quick Link</b></a></li>
        <li><a href="#">Share Location</a></li>
        <li><a href="#">Orders Tracking</a></li>
        <li><a href="#">Size Guide</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>
    <div className="p-2">
      <ul>
        <li><a href="#"> <b>Legal</b></a></li>
        <li><a href="#">Terms & conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  </>;
}
