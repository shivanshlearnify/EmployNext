import React from 'react'

const HowItWork = () => {
  return (
    <section className="py-10 px-5 md:px-20 mt-24 md:mt-36 sm:mt-36">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-500 mb-8 text-center">How It Works</h2>

        <div className="space-y-8">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-pink-500 mb-4">1. Sign Up</h3>
            <p className="text-lg text-gray-600">
              Create an account on EmployNext to get started. Whether you're a job seeker looking for new opportunities or an employer searching for talent, our platform is designed to meet your needs.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-pink-500 mb-4">2. Create Your Profile</h3>
            <p className="text-lg text-gray-600">
              Complete your profile with your resume, skills, and experience. Employers can showcase their company and job openings, making it easier to attract top talent.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-pink-500 mb-4">3. Search & Apply</h3>
            <p className="text-lg text-gray-600">
              Browse through job listings or candidate profiles that match your criteria. Apply directly through the platform, and stay updated on the status of your applications.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-pink-500 mb-4">4. Get Hired</h3>
            <p className="text-lg text-gray-600">
              Connect with employers or candidates, schedule interviews, and land your dream job or find the perfect hire. EmployNext streamlines the hiring process, making it efficient and stress-free.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-pink-500 mb-4">5. Stay Connected</h3>
            <p className="text-lg text-gray-600">
              Even after the hiring process, EmployNext helps you stay connected with professional networks and job market trends, ensuring your career continues to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWork