'use client';

const Content = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-300 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Error: Page Not Found</h1>
      <p className="text-xl mb-8">Found yourself trying to go into the unkown.</p>
      <a href="/" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition">
        Get Back On Track!
      </a>
    </section>
  );
};

export default Content;
