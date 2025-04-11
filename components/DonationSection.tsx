import { useState } from "react";

const DonationSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const accountInfo = {
    bank: "국민",
    number: "924501-01-351204",
    recipient: "사단법인 사취위장기",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${accountInfo.bank} ${accountInfo.number}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left side - decorative image */}
            <div className="md:w-1/3 bg-amber-200 flex items-center justify-center p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Right side - content */}
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                기부를 통해 따뜻한 마음을 보내고 싶다면,
              </h2>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  후원계좌 안내
                </h3>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-medium text-gray-800">
                        {accountInfo.bank}{" "}
                        <span className="text-gray-600">
                          {accountInfo.number}
                        </span>
                      </p>
                      <p className="text-gray-600 mt-1">
                        {accountInfo.recipient}
                      </p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          복사됨
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                          계좌번호 복사
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  <p>※ 후원금은 더 따뜻한 세상을 만드는데 소중히 사용됩니다.</p>
                  <p className="mt-1">
                    ※ 후원내역 확인을 위해 입금 시 성함을 남겨주시면
                    감사하겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
