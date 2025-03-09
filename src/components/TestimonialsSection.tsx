import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    message: "This service is fantastic! Highly recommend it.",
    image: "path/to/image1.jpg" // Placeholder for image path
  },
  {
    name: "Jane Smith",
    message: "A wonderful experience from start to finish.",
    image: "path/to/image2.jpg" // Placeholder for image path
  },
  {
    name: "Alice Johnson",
    message: "I couldn't be happier with the results!",
    image: "path/to/image3.jpg" // Placeholder for image path
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card p-4 border rounded">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-2" />
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
