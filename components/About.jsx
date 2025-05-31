import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://gofloaters.com/work-from-anywhere-toolkit/assets/images/stats.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            At Acme Solutions, we are dedicated to delivering innovative and reliable software products that empower businesses to thrive in a digital world. Our team of passionate developers, designers, and strategists work collaboratively to create solutions tailored to our clients’ unique needs.
                        </p>
                        <p className="mt-4 text-gray-600">
                            With years of experience in the industry, we pride ourselves on our commitment to quality, transparency, and customer satisfaction. Whether you are a startup or an established enterprise, we are here to help you achieve your goals and drive success through technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}