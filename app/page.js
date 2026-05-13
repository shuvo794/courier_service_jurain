import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 font-sans">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
        <div className="flex-1">
          <a className="text-xl font-bold text-primary flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-primary-content rounded-lg flex items-center justify-center">
              <span className="text-2xl">📦</span>
            </div>
            Jurain Courier
          </a>
        </div>
        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li><a>Services</a></li>
            <li><a>Tracking</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
          <button className="btn btn-primary ml-4">Get Started</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero py-20 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
               <Image 
                src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop"
                alt="Delivery Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">Fastest Delivery in <span className="text-primary">Jurain</span> & Beyond!</h1>
            <p className="py-6 text-lg text-base-content/70">
              Reliable, secure, and lightning-fast courier services tailored for your business and personal needs. We handle every package with care.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary btn-lg px-8">Book Now</button>
              <button className="btn btn-outline btn-lg px-8">Track Package</button>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar border-2 border-base-100">
                  <div className="w-12">
                    <img src="https://i.pravatar.cc/150?u=1" />
                  </div>
                </div>
                <div className="avatar border-2 border-base-100">
                  <div className="w-12">
                    <img src="https://i.pravatar.cc/150?u=2" />
                  </div>
                </div>
                <div className="avatar border-2 border-base-100">
                  <div className="w-12">
                    <img src="https://i.pravatar.cc/150?u=3" />
                  </div>
                </div>
                <div className="avatar placeholder border-2 border-base-100">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium">
                <span className="text-primary">500+</span> Happy customers in Jurain
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 md:px-8 bg-base-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mb-4">
                🚚
              </div>
              <h2 className="card-title">Home Delivery</h2>
              <p>Door-to-door delivery service with real-time tracking for your peace of mind.</p>
              <div className="card-actions mt-4">
                <button className="btn btn-ghost text-primary btn-sm">Learn More →</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-3xl mb-4">
                🏢
              </div>
              <h2 className="card-title">Corporate Logistics</h2>
              <p>Custom solutions for businesses including bulk shipping and warehouse management.</p>
              <div className="card-actions mt-4">
                <button className="btn btn-ghost text-secondary btn-sm">Learn More →</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center text-3xl mb-4">
                ⚡
              </div>
              <h2 className="card-title">Express Shipping</h2>
              <p>Need it there yesterday? Our express service guarantees same-day or next-day delivery.</p>
              <div className="card-actions mt-4">
                <button className="btn btn-ghost text-accent btn-sm">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

