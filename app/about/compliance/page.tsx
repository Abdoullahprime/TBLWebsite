function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A820" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* Hero */}
      <div className="bg-[#0A1F5C] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#E8A820]/15 border border-[#E8A820]/30 rounded-full px-3 py-1 text-xs font-bold text-[#E8A820] tracking-widest uppercase mb-4">
            About Us
          </div>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-white mb-3">Compliance Policy</h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            At Trust Bank, compliance is not just a requirement — it&apos;s a culture. We uphold the highest ethical standards in all matters relating to regulation and conduct.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
        {/* Commitment */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-4">Commitment to Compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            At Trust Bank, we are dedicated to ensuring that the Bank&apos;s operations and those of its employees align with applicable laws, regulations, internal policies, procedures, organisational standards, and ethical codes of conduct. We uphold the highest ethical standards in all matters related to compliance.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Compliance is not just a requirement — it&apos;s a culture. The Board of Directors actively promotes a culture of integrity and compliance across all levels of the organisation.
          </p>
        </div>

        {/* Role of Compliance */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] text-xl mb-5">Role of the Compliance Department</h2>
          <ul className="space-y-3">
            {[
              "Embedding compliance with laws, regulations, business principles, and conduct rules in all operations",
              "Establishing and maintaining effective compliance risk management and control systems",
              "Monitoring and reporting within the Bank and to regulatory authorities",
              "Advising Management on relevant and timely changes in the compliance landscape",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{item}
              </li>
            ))}
          </ul>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-4">Managing Compliance Risk</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Compliance efforts are directed at minimising the risk of financial or reputational loss that may result from non-compliance with applicable standards. This includes maintaining adherence to both internal policies and external regulations.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-7">
            <h2 className="font-[family-name:var(--font-sora)] font-bold text-[#0A1F5C] mb-4">Staff Responsibilities</h2>
            <ul className="space-y-2">
              {[
                "Uphold the highest standards of conduct both inside and outside the workplace",
                "Act with honesty and integrity at all times",
                "Follow the letter and spirit of internal rules, policies, and ethical standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
