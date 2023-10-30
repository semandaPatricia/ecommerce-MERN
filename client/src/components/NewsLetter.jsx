import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // You can implement the subscription logic here, for example, send the email to a backend server.
    // For this example, we'll just log the email to the console.
    console.log(`Subscribed with email: ${email}`);
    // You may want to reset the email state after successful subscription
    setEmail('');
  };

  return (
    <div className="newsletter-container bg-pink-100  mt-8 p-10">
      <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-4">
        Stay updated on the latest trends and exclusive offers!
      </p>
      <div className="flex items-center justify-center">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}
          className="border p-2 mr-2 w-60"
        />
        <button
          onClick={handleSubscribe}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
