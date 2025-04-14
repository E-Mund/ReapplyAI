'use client';

const Welcome = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-300 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to ReapplyAI</h1>
      <p className="text-xl mb-8">Resume creation with a fun twist. AI-powered tools help provide feedback to land the job of our dreams.</p>
      <a href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition">
        Get Started
      </a>
    </section>
  );
};

export default Welcome;
