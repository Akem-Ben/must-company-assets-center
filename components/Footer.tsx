"use client";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  사색의향기
                </h2>
                <h3 className="text-lg font-semibold mb-4">
                  개인정보 처리방법 이용약관
                </h3>
                <p className="mb-4">
                  고객센터 (평일 08:00~19:00) (주말 및 공휴일 휴무)
                </p>

                <div className="space-y-2">
                  <p>사업자번호 서비스확인서</p>
                  <p>1-01-02 30분화</p>
                  <p>2-03-12 35분 45분 60분화</p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0">
                <div className="space-y-3">
                  <p>
                    <span className="font-medium">주소:</span> 세계 사색과
                    비밀번호 정보로 제작되었습니다.
                  </p>
                  <p>
                    <span className="font-medium">전화:</span> 06-20-9-001
                  </p>
                  <p>
                    <span className="font-medium">수료:</span> 070-3668-5001
                  </p>
                  <p>
                    <span className="font-medium">이메일:</span> cxmp@cxmp.com
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p>Copyright © 2025 서비스확인서, Michigan Business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              뉴스레터 구독하기
            </h3>
            <p className="mb-6">
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
              빠르게 받아보실 수 있습니다.
            </p>

            <div className="border-t border-gray-700 pt-6">
              <h4 className="font-medium mb-4">이메일 구독신청</h4>

              {isSubscribed ? (
                <div className="bg-green-100 text-green-800 p-3 rounded-md">
                  감사합니다! 구독이 완료되었습니다.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력해주세요"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    구독하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a href="#" className="hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white transition-colors">
                고객센터
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
