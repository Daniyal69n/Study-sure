import React from 'react';

const UKVisaContent = () => {
  return (
    <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* About UK Student Visa Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">About UK Student Visa (formerly Tier 4 General)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <p className="text-gray-700">It is for students of age 16 years and above for a full-time course at a licensed UK institution.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <p className="text-gray-700">Requires CAS letter from selected UK institution</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <p className="text-gray-700">Valid for the duration of the course</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <p className="text-gray-700">Allows limited work rights</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">How to Apply for UK Student Visa</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <p className="text-gray-700">Secure a CAS letter from a desired UK university</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <p className="text-gray-700">Complete academic and financial documents</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <p className="text-gray-700">Submit visa application via UKVI portal</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#83CD20] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <p className="text-gray-700">Remember, the process also includes payment of visa fee and appearing for a biometric appointment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Steps Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">Main Steps to Apply for a UK Student Visa</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#83CD20]"></div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-[#83CD20] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <div className="p-6 bg-gray-50 rounded-lg flex-1">
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">Get Admission and CAS Letter</h3>
                    <p className="text-gray-700">Receive an offer from your selected UK university and Confirmation of Acceptance for Studies (CAS)</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-[#83CD20] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <div className="p-6 bg-gray-50 rounded-lg flex-1">
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">Make Required Documents Ready</h3>
                    <p className="text-gray-700">Ready your passport, academic certificates, bank statement, TB / health certificates, and English Language Test (IELTS / PTE) result</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-[#83CD20] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <div className="p-6 bg-gray-50 rounded-lg flex-1">
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">Apply Online for Visa using UKVI Website</h3>
                    <p className="text-gray-700">Complete and process visa application on official UK website</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-[#83CD20] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <div className="p-6 bg-gray-50 rounded-lg flex-1">
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">Pay Visa Fee and Immigration Health Surcharge (IHS)</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">IHS:</span>
                        <span>776 £ per year</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Visa Fee:</span>
                        <span>490 £</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-[#83CD20] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                  <div className="p-6 bg-gray-50 rounded-lg flex-1">
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">Book & Attend Biometric Appointment</h3>
                    <p className="text-gray-700">Book and attend a biometric session at nearest visa center when called</p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative flex items-start space-x-4">
                  <div className="relative z-10 bg-[#83CD20] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">6</div>
                  <div className="p-6 bg-gray-50 rounded-lg flex-1">
                    <h3 className="text-xl font-semibold text-[#034833] mb-2">The Decision</h3>
                    <p className="text-gray-700">Generally, visa processing takes approx 3–4 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">Documents Required from Students</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#034833] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Document Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "CAS Letter", desc: "Issued by your selected UK Institution" },
                    { type: "Passport", desc: "Valid for your stay in UK" },
                    { type: "Proof of Funds", desc: "Bank statement for 28 days showing required funds" },
                    { type: "English Language Test", desc: "IELTS / PTE or equivalent accepted by the Institution" },
                    { type: "TB Test Certificate", desc: "Mandatory for students from Pakistan" },
                    { type: "Academic Records", desc: "Transcripts, Degrees and other Certificates" },
                    { type: "SOP", desc: "Statement of Purpose (Study Plan)" }
                  ].map((doc, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-[#034833]">{doc.type}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{doc.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cost Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">UK Student Visa Cost</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#034833] to-[#83CD20] p-6 rounded-lg text-white text-center">
                <h3 className="text-lg font-semibold mb-2">Visa Application Fee</h3>
                <p className="text-3xl font-bold">490£</p>
              </div>
              <div className="bg-gradient-to-br from-[#034833] to-[#83CD20] p-6 rounded-lg text-white text-center">
                <h3 className="text-lg font-semibold mb-2">Immigration Health Surcharge</h3>
                <p className="text-3xl font-bold">776£</p>
                <p className="text-sm opacity-90">per year</p>
              </div>
              <div className="bg-gradient-to-br from-[#83CD20] to-[#034833] p-6 rounded-lg text-white text-center">
                <h3 className="text-lg font-semibold mb-2">Total Upfront Cost</h3>
                <p className="text-3xl font-bold">1,266£</p>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Time Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">How Long Does It Take to Get a UK Student Visa from Pakistan?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Normal Processing</h3>
                <p className="text-2xl font-bold text-blue-600">3–4 weeks</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Priority Service</h3>
                <p className="text-2xl font-bold text-green-600">5 working days</p>
                <p className="text-sm text-green-600">(with extra charges)</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">Recommended Application Time</h3>
                <p className="text-2xl font-bold text-yellow-600">6–7 weeks</p>
                <p className="text-sm text-yellow-600">before course start</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Permission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">About Work Permission to Pakistani Students on UK Student Visa</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-700">During Holidays</h3>
                </div>
                <p className="text-green-600">Full-time during official holidays</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-blue-700">During Study</h3>
                </div>
                <p className="text-blue-600">Students are allowed to work 20 hours/week during study</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rejection Reasons Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-red-600">Why is UK Student Visa Rejected</h2>
            </div>
            <p className="text-gray-700 mb-6">There are four main reasons for rejection:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Incomplete or incorrect documents",
                "Insufficient funds or unclear financial proof",
                "CAS letter issues",
                "Security related issues (normally not shared)"
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-red-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">FAQs About UK Student Visa</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Can I apply from Pakistan while final result is yet awaited?",
                  a: "Yes, that's possible. Some institutions issue a CAS based on provisional results, while final documents need to be submitted later"
                },
                {
                  q: "Should the bank statement be in my own name?",
                  a: "Not necessarily, funds can be shown from parents or a guardian, but it will need supporting documents to show consent and proof of relationship"
                },
                {
                  q: "Can I switch to a work visa after completing my Degree Program?",
                  a: "Yes, through UK Graduate Route, graduates are allowed to stay and work for 2 years after completion of their degree."
                },
                {
                  q: "Will my Visa Fee be refunded if my application is rejected?",
                  a: "No, unfortunately the visa and health surcharge are non-refundable even if your visa is refused."
                },
                {
                  q: "Is IELTS a must for all Universities?",
                  a: "No, some universities accept alternatives like Duolingo or PTE etc."
                },
                {
                  q: "Are Dependents Allowed?",
                  a: "Yes, but only for postgraduate and PhD programs at eligible universities"
                },
                {
                  q: "What is the Max age limit?",
                  a: "No fixed age limit, but academic gaps need to be explained"
                },
                {
                  q: "How much money do I need?",
                  a: "Approximately, £9,500 (for 9 months) and tuition fee for first year"
                },
                {
                  q: "How early can I apply before my course starts?",
                  a: "If applying from Pakistan, you can apply 6 months in advance for a UK student visa before your study program"
                },
                {
                  q: "What if I violate Visa conditions?",
                  a: "If you violate visa conditions by working for more time or not attending university, your visa can be refused / cancelled"
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[#034833] mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">Checklist Before You Apply</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Valid passport",
                "CAS Letter from your UK Institution",
                "Bank statement for 28 days with requisite funds",
                "IELTS or English Language test result (if applicable)",
                "TB test certificate",
                "Above documents are to be uploaded on UKVI Portal"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#034833] to-[#83CD20] rounded-lg shadow-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help with Your UK Student Visa?</h2>
            <p className="text-xl mb-8 opacity-90">If you are still need help, let StudySure guide you through the entire process</p>
            <button className="bg-white text-[#034833] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Expert Guidance
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UKVisaContent;
