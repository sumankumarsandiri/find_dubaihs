import React from 'react';
import './PopularServices.css';

export function PopularServices() {
    const services = [
        { icon: "📍", title: "City Transfer", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "🏢", title: "Whole City Tour", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "🚗", title: "Unlimited Miles Car Rental", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "⏰", title: "Fast & Easy Booking", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "📍", title: "Many Pickup Locations", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "✈️", title: "Airport Transfer", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "📍", title: "Many Pickup Locations", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" },
        { icon: "✈️", title: "Airport Transfer", description: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem.", footer: "Gubergren gub" }
    ];

    return (
        <div className="popular-services">
            <h2>See our</h2>
            <h3>Popular Services</h3>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-details">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <p className="service-footer">{service.footer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
