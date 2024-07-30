import React from "react";
import Header from "@/components/header";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="my-24">
        <Header />
      </div>
      <div className="w-[65%] h-full mx-auto gap-5 flex flex-col">
        <div className="font-bold text-3xl">Privacy Policy</div>
        <div>
          <div className="font-semibold text-lg">Use License</div>
          <div className="w-[95%] mx-auto flex flex-col gap-3">
            <div>
              <b>1.Permission to Use:</b> Permission is granted to temporarily
              download one copy of the trial application from Autodesk Appstore
              after trail period user need to contact to USAM Technology
              solutions.And under this license you may not:
            </div>
            <div className="flex flex-col gap-1 w-[95%] mx-auto">
              <div> &#9675; modify or copy the trial application</div>
              <div>
                &#9675; use the trial application for any commercial purpose, or for any
                public display (commercial or non-commercial);
              </div>
              <div>
                &#9675; attempt to decompile or reverse engineer any software contained
                in the trial application;
              </div>
            </div>
            <div>
              <b>2. Consequences of Violation:</b> Violation of any of these
              restrictions may result in actions as specified in the manual
              license agreement provided after the trial period.
            </div>
          </div>
        </div>
        {/* === */}
        <div>
          <div className="font-semibold text-lg">Use License</div>

          <div className="w-[95%] mx-auto flex flex-col gap-3">
            <div>
              <b>1. Data Collection:</b> USAM Technologies may collect
              anonymized download information such as the number of downloads
              and geographic region for statistical purposes only.
            </div>
            <div>
              <div className="font-semibold">2. Data Usage:</div>
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
              <div className="font-semibold">3. Data Sharing:</div>
              <div className="flex w-[95%] mx-auto">
                <b>No Third-Party Sharing:</b> USAM Technologies does not share
                any collected data, including download information, with third
                parties.
              </div>
            </div>
            <div>
              <div className="font-semibold">
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
            <div>
              <div className="font-semibold">5. User Rights:</div>
              <div className="flex w-[95%] mx-auto">
                <b>Access and Control:</b>Users may contact USAM Technologies
                to inquire about the data collected and request its deletion.
              </div>
            </div>
            <div>
              <div className="font-semibold">6. Updates to Privacy Policy:</div>
              <div className="flex flex-col gap-2 w-[95%] mx-auto">
                USAM Technologies may update this Privacy Policy from time to
                time. Any changes will be posted on this page.
              </div>
            </div>
            <div>
              <div className="italic font-semibold">
                7. Contact Us: supportdesk@usam.in
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
