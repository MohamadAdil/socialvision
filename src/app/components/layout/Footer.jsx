// components/layout/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="">Social Vision</h5>
            <p>AI-powered digital marketing built for the future. Let us help grow your brand with smart tools and creative vision.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className=" mb-3">Pages</h6>
            <ul className="list-unstyled">
              <li><Link className="" href="/">Home</Link></li>
              <li><Link className="" href="/services">Services</Link></li>
              <li><Link className="" href="/ai-insights">AI Insights</Link></li>
              <li><Link className="" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className=" mb-3">Contact</h6>
            <p><i className=" me-2"></i>info@socialvision.tech</p>
            <p><i className=" me-2"></i>Live Chat Available</p>
            <p><i className=" me-2"></i>Remote - India</p>
          </div>
        </div>
      </div>

      <div className="text-center py-3">
        © {new Date().getFullYear()} Social Vision. All rights reserved.
      </div>
    </footer>
  );
}
