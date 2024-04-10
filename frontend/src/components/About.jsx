import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">About Heart Space</h2>
            <p className="text-lg mb-6">
                Heart Space is dedicated to promoting mental health and well-being
                through various programs and initiatives. Our team is passionate
                about providing support and resources to individuals in need.
            </p>
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg mb-6">
                Our mission is to create a supportive community where individuals
                can find comfort, guidance, and resources to improve their mental
                health and overall well-being.
            </p>
            <h3 className="text-2xl font-bold mb-2">Meet Our Team</h3>
            <div className="flex flex-wrap -mx-2 mb-8">
                <div className="w-1/2 md:w-1/4 px-2 mb-4">
                    <img src="https://via.placeholder.com/150" alt="Team Member 1" className="rounded-full" />
                    <h4 className="text-xl font-bold mt-2">John Doe</h4>
                    <p>Founder & CEO</p>
                </div>
                <div className="w-1/2 md:w-1/4 px-2 mb-4">
                    <img src="https://via.placeholder.com/150" alt="Team Member 2" className="rounded-full" />
                    <h4 className="text-xl font-bold mt-2">Jane Smith</h4>
                    <p>Head of Operations</p>
                </div>
                {/* Add more team members as needed */}
            </div>
            <h3 className="text-2xl font-bold mb-2">Our Achievements</h3>
            <p className="text-lg mb-6">
                Over the years, Heart Space has achieved significant milestones
                in promoting mental health awareness and providing support to
                individuals in need. Some of our notable achievements include:
            </p>
            <ul className="list-disc ml-6 mb-6">
                <li>Reached over 10,000 individuals through our counseling programs</li>
                <li>Organized multiple community events to raise awareness about mental health</li>
                <li>Received recognition from several organizations for our contributions</li>
            </ul>
            <h3 className="text-2xl font-bold mb-2">Our Goals</h3>
            <p className="text-lg mb-6">
                At Heart Space, we are constantly striving to improve our services
                and expand our reach. Some of our key goals include:
            </p>
            <ul className="list-disc ml-6 mb-6">
                <li>Extend our counseling services to reach more individuals in rural areas</li>
                <li>Develop new initiatives to support specific demographics such as teenagers and elderly</li>
                <li>Collaborate with other organizations to advocate for better mental health policies</li>
            </ul>
            <h3 className="text-2xl font-bold mb-2">Testimonials</h3>
            <div className="mb-8">
                <div className="mb-4">
                    <p className="text-lg">"Heart Space has been a lifesaver for me. The counseling sessions
                    helped me navigate through difficult times, and I'm grateful for the
                    support I received."</p>
                    <p className="font-semibold">- Sarah Johnson</p>
                </div>
                {/* Add more testimonials as needed */}
            </div>
            <div className="mb-8">
                <div className="mb-4">
                    <p className="text-lg">Start your healing Journey Now</p>
                </div>
                {/* Add more testimonials as needed */}
            </div>
            <Link to='/signup'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                JOIN US
            </button>
            </Link>
            
        </div>
  );
};

export default About;