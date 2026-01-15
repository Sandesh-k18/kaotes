import React from "react";
import { Link } from "react-router";
import { ShieldAlert, FileText, Lock, Database, Eye } from "lucide-react";

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-[#020F0C] text-emerald-50 relative font-sans p-6 md:p-24 selection:bg-emerald-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
        {/* GOOGLE API DISCLOSURE - REQUIRED FOR VERIFICATION */}
        <section className="border-b border-emerald-500/10 pb-12">
          <div className="flex items-center gap-3 mb-8">
            <Eye className="text-emerald-400" size={24} />
            <h1 className="text-3xl font-black tracking-tighter uppercase">
              Google_API_Disclosure
            </h1>
          </div>
          <div className="space-y-6 font-mono text-[13px] text-emerald-100/70 leading-loose">
            <p className="border-l-2 border-emerald-500/30 pl-4 bg-emerald-500/5 py-2">
              KAOTES's use and transfer of information received from Google APIs
              to any other app will adhere to the
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline mx-1"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <p>
              <span className="text-emerald-400">[DATA_ACCESS]</span> Our
              application explicitly requests access to your
              <strong> Google Email Address</strong> and{" "}
              <strong>Basic Public Profile</strong> (Name and Profile Picture).
            </p>
            <p>
              <span className="text-emerald-400">[DATA_USAGE]</span> This data
              is used solely to authenticate your identity, create your unique
              neural vault, and prevent unauthorized access to your notes. We do
              not use this data for marketing, advertising, or training AI
              models.
            </p>
          </div>
        </section>

        {/* PRIVACY SECTION */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <ShieldAlert className="text-emerald-400" size={24} />
            <h1 className="text-3xl font-black tracking-tighter uppercase">
              Privacy_Protocols
            </h1>
          </div>
          <div className="space-y-6 font-mono text-[13px] text-emerald-100/50 leading-loose">
            <p>
              <span className="text-emerald-400">[01]</span>{" "}
              <strong>Collection:</strong> We store your Google ID, email, and
              the content of your notes. No third-party tracking or data-mining
              scripts are active.
            </p>
            <p>
              <span className="text-emerald-400">[02]</span>{" "}
              <strong>Storage & Security:</strong> Data is stored in encrypted
              clusters. Access is governed by JWT (JSON Web Tokens) and Google
              OAuth 2.0 protocols.
            </p>
            <p>
              <span className="text-emerald-400">[03]</span>{" "}
              <strong>Data Sharing:</strong> KAOTES does not share, sell, or
              lease your personal information or note content to any third-party
              entities.
            </p>
            <p>
              <span className="text-emerald-400">[04]</span>{" "}
              <strong>Deletion:</strong> You maintain full sovereignty. Deleting
              your account or notes purges all associated Google user data from
              our active databases within 30 days.
            </p>
          </div>
        </section>

        <hr className="border-emerald-500/10" />

        {/* TERMS SECTION */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-emerald-400" size={24} />
            <h1 className="text-3xl font-black tracking-tighter uppercase">
              Terms_of_Entry
            </h1>
          </div>
          <div className="space-y-6 font-mono text-[13px] text-emerald-100/50 leading-loose">
            <p>
              <span className="text-emerald-400">[01]</span> Usage: KAOTES is a
              personal knowledge management tool. Misuse of system nodes or
              reverse-engineering attempts will result in immediate IP-level
              termination.
            </p>
            <p>
              <span className="text-emerald-400">[02]</span> Responsibility: The
              user assumes all liability for the legal nature of the content
              archived within their encrypted vault.
            </p>
          </div>
        </section>

        <div className="mt-24 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:text-emerald-400 transition-all text-[10px] uppercase tracking-[0.5em] group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              {"<"} Return_to_Mainframe {"/ >"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
