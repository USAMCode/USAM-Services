import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { styles } from "@/styles/styles";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="2xl:w-[60%] xl:w-[70%] lg:w-[75%] md:w-[80%] sm:w-[85%] xs:w-[95%] mx-auto">
        <div className="mt-5">
          <div className="w-full flex xs:gap-4 sm:gap-4 md:gap-4 justify-between items-center max-w-7xl mx-auto">
            <Image
              className="w-40 xs:w-28 sm:w-32 md:w-52 h-10 object-contain"
              src="https://d1nw187rmwcpt3.cloudfront.net/usam_logo.webp"
              alt=""
              width={208}
              height={40}
            />

            <div className="flex flex-row gap-2 xs:gap-4">
              <Image
                className="w-40 xs:w-28 sm:w-32 md:w-52 h-12 object-contain"
                src="https://d1nw187rmwcpt3.cloudfront.net/AutodeskBlack.webp"
                alt=""
                width={208}
                height={48}
              />
              <Image
                className="w-40 sm:w-32 xs:w-28 md:w-36 h-12 object-contain"
                src="https://d1nw187rmwcpt3.cloudfront.net/autodesk-authorised-developer-logo-rgb-black.webp"
                alt=""
                width={208}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full gap-4 flex flex-col sm:mx-0 xs:mx-0 mx-6 mt-5 mb-10">
          <div className="font-bold text-3xl">Privacy Policy</div>
          <div>
            <div className="font-semibold text-xl mb-3">Use License</div>
            <div className="w-full mx-auto flex flex-col gap-3">
              <div>
                <b className="text-lg">1.Permission to Use:</b> Permission is granted to temporarily
                download one copy of the trial application from Autodesk Appstore
                after trail period user need to contact to USAM Technology
                solutions.And under this license you may not:
              </div>
              <div className="flex flex-col gap-1 w-[95%] mx-auto">
                <div> &#x25CF; modify or copy the trial application</div>
                <div>
                  &#x25CF; use the trial application for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </div>
                <div>
                  &#x25CF; attempt to decompile or reverse engineer any software contained
                  in the trial application;
                </div>
              </div>
              <div>
                <b className="text-lg">2. Consequences of Violation:</b> Violation of any of these
                restrictions may result in actions as specified in the manual
                license agreement provided after the trial period.
              </div>
            </div>
          </div>
          {/* === */}
          <div>
            <div className="font-semibold text-xl mb-3">Use License</div>

            <div className="w-full mx-auto flex flex-col gap-3">
              <div>
                <b className="text-lg">1. Data Collection:</b> USAM Technologies may collect
                anonymized download information such as the number of downloads
                and geographic region for statistical purposes only.
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">2. Data Usage:</div>
                <div className="flex flex-col gap-2 w-[95%] mx-auto">
                  <div>
                    <b>Confidentiality:</b> Any data collected, including download
                    information, will remain confidential.
                  </div>
                  <div>
                    <b>Purpose:</b> The collected data is used solely for
                    statistical analysis and internal reporting.
                  </div>
                  <div>
                    <b>Communication:</b> It may be used to communicate with users
                    about updates, new applications, or promotions related to our
                    products.
                  </div>
                </div>
              </div>
              <div >
                <div className="font-semibold text-lg mb-2">3. Data Sharing:</div>
                <div className="flex flex-col  w-[95%] mx-auto">
                  <b>No Third-Party Sharing:</b> USAM Technologies does not share
                  any collected data, including download information, with third
                  parties.
                </div>
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">
                  4. Data Retention and Deletion:
                </div>
                <div className="flex flex-col gap-2 w-[95%] mx-auto">
                  <div>
                    <b>Retention:</b> Data collected, including download
                    information, will be retained as long as necessary for the
                    purposes outlined in this policy.
                  </div>
                  <div>
                    <b>Deletion:</b> Upon removal of the trial application from
                    distribution channels, all collected data will be securely
                    deleted.
                  </div>
                </div>
              </div>
              <div >
                <div className="font-semibold text-lg mb-2">5. User Rights:</div>
                <div className="flex flex-col 2xl:flex-row w-[95%] mx-auto">
                  <b>Access and Control:</b>Users may contact USAM Technologies
                  to inquire about the data collected and request its deletion.
                </div>
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">6. Updates to Privacy Policy:</div>
                <div className="flex flex-col gap-2 w-[95%] mx-auto">
                  USAM Technologies may update this Privacy Policy from time to
                  time. Any changes will be posted on this page.
                </div>
              </div>
              <div>
                <div className="italic font-semibold text-lg">
                  7. Contact Us: supportdesk@usam.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default PrivacyPolicy;
