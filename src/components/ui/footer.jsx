import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* IPL Score Tracker */}
        <div>
          <h2 className="text-xl font-bold mb-3">IPL Score Tracker</h2>
          <p className="text-gray-300">
            The ultimate destination for IPL cricket fans to stay updated with live scores,
            team standings, and match schedules.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-gray-300">Live Scores</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Schedule</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Teams</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Stats</a></li>
            <li><a href="#" className="hover:underline text-gray-300">News</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-xl font-bold mb-3">Connect With Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mb-3">
            <a href="#" className="hover:text-blue-400 text-lg"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 text-lg"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 text-lg"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 text-lg"><FaYoutube /></a>
          </div>
          <p className="text-gray-300">Download our mobile app for a better experience</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-sm text-gray-500">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
