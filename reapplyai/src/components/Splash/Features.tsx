'use client';

const Features = () => {
	return (
		<section className="py-16 px-6 max-w-5xl mx-auto">
			<h2 className="text-3xl font-bold text-center mb-12">Why ReapplyAI?</h2>
			<div className="grid gap-10 md:grid-cols-3">
				<div className="text-center">
					<h3 className="text-xl font-semibold mb-2">Tailored Resumes</h3>
					<p className="text-gray-600">Generate personalized resumes for every job you apply to with just one click.</p>
				</div>
				<div className="text-center">
					<h3 className="text-xl font-semibold mb-2">Smart Suggestions</h3>
					<p className="text-gray-600">Let AI recommend improvements based on job descriptions and your experience.</p>
				</div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Fun Atmosphere</h3>
          <p className="text-gray-600">Our AI doesn’t just help—it roasts. Expect helpful feedback with a side of sass.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;