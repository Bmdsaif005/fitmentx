"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <section className="text-center mb-12">
          <h1 className="hero-title mb-4">SUPPORT CENTER</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get expert help with fitment, orders, and everything FitmentX. We're here to ensure your ride looks and performs perfectly.
          </p>
        </section>

        {/* Core Contact & Communication */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 uppercase">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact Form */}
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
              <h3 className="text-xl font-semibold text-accent mb-4">Direct Inquiry</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-background border border-accent/45 rounded text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-background border border-accent/45 rounded text-white placeholder-gray-400"
                />
                <select className="w-full p-3 bg-background border border-accent/45 rounded text-white">
                  <option>Fitment Advice</option>
                  <option>Order Support</option>
                  <option>Technical Issue</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Describe your inquiry..."
                  rows={4}
                  className="w-full p-3 bg-background border border-accent/45 rounded text-white placeholder-gray-400"
                ></textarea>
                <button type="submit" className="w-full bg-accent text-white py-3 rounded uppercase font-bold">
                  Send Message
                </button>
              </form>
            </div>

            {/* Department Contacts */}
            <div className="space-y-6">
              <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
                <h3 className="text-xl font-semibold text-accent mb-2">Technical Fitment Support</h3>
                <p className="text-gray-300 mb-2">Get expert advice on wheel fitment and compatibility.</p>
                <a href="mailto:fitment@fitmentx.com" className="text-accent hover:text-white">fitment@fitmentx.com</a>
              </div>
              <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
                <h3 className="text-xl font-semibold text-accent mb-2">Order Tracking</h3>
                <p className="text-gray-300 mb-2">Check your order status and shipping updates.</p>
                <a href="mailto:orders@fitmentx.com" className="text-accent hover:text-white">orders@fitmentx.com</a>
              </div>
              <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
                <h3 className="text-xl font-semibold text-accent mb-2">Returns & Warranty</h3>
                <p className="text-gray-300 mb-2">Handle returns, exchanges, and warranty claims.</p>
                <a href="mailto:returns@fitmentx.com" className="text-accent hover:text-white">returns@fitmentx.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* Technical & Product Support */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 uppercase">Technical Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35 text-center">
              <h3 className="text-xl font-semibold text-accent mb-4">Fitment Guide</h3>
              <p className="text-gray-300 mb-4">Learn about Bolt Pattern, Offset (ET), and Profile measurements.</p>
              <Link href="#fitment-guide" className="text-accent hover:text-white">Read Guide →</Link>
            </div>
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35 text-center">
              <h3 className="text-xl font-semibold text-accent mb-4">Wheel Care</h3>
              <p className="text-gray-300 mb-4">Maintenance tips for Brushed, Polished, and Painted finishes.</p>
              <Link href="#wheel-care" className="text-accent hover:text-white">View Instructions →</Link>
            </div>
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35 text-center">
              <h3 className="text-xl font-semibold text-accent mb-4">Video Tutorials</h3>
              <p className="text-gray-300 mb-4">Step-by-step guides for measurement and installation.</p>
              <Link href="/gallery" className="text-accent hover:text-white">Watch Videos →</Link>
            </div>
          </div>
        </section>

        {/* Order & Policy Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 uppercase">Orders & Policies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
              <h3 className="text-xl font-semibold text-accent mb-4">Shipping & Delivery</h3>
              <p className="text-gray-300 mb-4">Track your orders with real-time updates. Fast delivery across India.</p>
              <Link href="#shipping" className="text-accent hover:text-white">Track Order →</Link>
            </div>
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
              <h3 className="text-xl font-semibold text-accent mb-4">Warranty</h3>
              <p className="text-gray-300 mb-4">Brand-specific warranties for Vossen, Ferrada, and more.</p>
              <Link href="#warranty" className="text-accent hover:text-white">Learn More →</Link>
            </div>
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
              <h3 className="text-xl font-semibold text-accent mb-4">Returns & Exchanges</h3>
              <p className="text-gray-300 mb-4">Easy returns for fitment issues. 30-day policy on all items.</p>
              <Link href="#returns" className="text-accent hover:text-white">Start Return →</Link>
            </div>
          </div>
        </section>

        {/* Interactive Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accent mb-8 uppercase">Tools & Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
              <h3 className="text-xl font-semibold text-accent mb-4">Vehicle Compatibility Checker</h3>
              <p className="text-gray-300 mb-4">Enter your car's Make and Model to find compatible wheels.</p>
              <div className="space-y-3">
                <select className="w-full p-3 bg-background border border-accent/45 rounded text-white">
                  <option>Select Make</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Ford</option>
                </select>
                <select className="w-full p-3 bg-background border border-accent/45 rounded text-white">
                  <option>Select Model</option>
                  <option>Camry</option>
                  <option>Civic</option>
                  <option>F-150</option>
                </select>
                <button className="w-full bg-accent text-white py-3 rounded uppercase font-bold">
                  Check Compatibility
                </button>
              </div>
            </div>
            <div className="bg-gunmetal p-6 rounded-lg border border-accent/35">
              <h3 className="text-xl font-semibold text-accent mb-4">Share Your Build</h3>
              <p className="text-gray-300 mb-4">Upload photos of your FitmentX setup for community features.</p>
              <Link href="/gallery" className="inline-block bg-accent text-white px-6 py-3 rounded uppercase font-bold hover:bg-red-700 transition">
                Submit to Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
