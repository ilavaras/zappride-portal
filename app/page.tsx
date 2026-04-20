'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [roi, setRoi] = useState(0);
  const [inputs, setInputs] = useState({ scooters: 10, rides: 5, price: 50 });

  const calculateROI = () => {
    const monthly = inputs.scooters * inputs.rides * inputs.price * 30;
    setRoi(monthly);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">⚡ Zappride</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#business">Business</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-6">
          Ride Smart. Ride Electric ⚡
        </motion.h1>
        <p className="text-xl mb-4">India’s Smart EV Ride Network</p>
        <p className="bg-white text-blue-600 inline-block px-4 py-1 rounded-full mb-6">Launching soon in Bangalore & Chennai</p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl shadow">Get Started</button>
          <button className="border px-8 py-3 rounded-2xl">Partner With Us</button>
        </div>
      </section>

      {/* Fake Map Section */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Live Scooter Availability</h2>
        <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
          <p className="text-gray-500">[ Map Preview Coming Soon ]</p>
        </div>
      </section>

      {/* Stats */}
      <section className="p-12 grid md:grid-cols-3 text-center gap-6">
        {["10,000+ Rides", "500+ EV Scooters", "5 Cities"].map((stat, i) => (
          <div key={i} className="text-xl font-semibold">{stat}</div>
        ))}
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-100 p-12 text-center">
        <h2 className="text-3xl font-semibold mb-8">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{ name: "Pay as you go", price: "₹5/min" }, { name: "Daily", price: "₹199" }, { name: "Monthly", price: "₹1999" }].map((plan, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-2xl mt-2">{plan.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="p-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">ROI Calculator</h2>
        <div className="max-w-xl mx-auto space-y-4">
          <input type="number" value={inputs.scooters} onChange={(e)=>{
  const value = e.target.value;
  // Convert to number, or default to 0 if empty
  const newValue = value === "" ? 0 : Number(value);  setInputs({...inputs, scooters:newValue})}} className="w-full p-3 border rounded-xl" placeholder="Scooters" />
          <input type="number" value={inputs.rides} onChange={(e)=>{
  const value = e.target.value;
  // Convert to number, or default to 0 if empty
  const newValue = value === "" ? 0 : Number(value);setInputs({...inputs, rides:newValue})}} className="w-full p-3 border rounded-xl" placeholder="Rides/day" />
          <input type="number" value={inputs.price} onChange={(e)=>{
  const value = e.target.value;
  // Convert to number, or default to 0 if empty
  const newValue = value === "" ? 0 : Number(value);setInputs({...inputs, price:newValue})}} className="w-full p-3 border rounded-xl" placeholder="Price" />
          <button onClick={calculateROI} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Calculate</button>
          {roi && <p className="text-xl font-bold">Monthly Revenue: ₹{roi}</p>}
        </div>
      </section>

      {/* Business */}
      <section id="business" className="p-12 text-center bg-blue-50">
        <h2 className="text-3xl font-semibold mb-4">Partner With Zappride</h2>
        <p className="mb-6">Deploy EV fleets in IT parks, metros & apartments</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">Become a Partner</button>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-xl" />
          <button className="bg-green-500 text-white px-6 py-2 rounded-xl">Submit</button>
        </form>
      </section>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/91XXXXXXXXXX" className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg">Chat</a>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-center">
        <p>© 2026 Zappride</p>
      </footer>
    </div>
  );
}
