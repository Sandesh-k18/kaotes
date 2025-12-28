import React from "react";
import { Link } from "react-router";
import { ShieldAlert, FileText, Lock } from "lucide-react";

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-[#020F0C] text-emerald-50 relative font-sans p-6 md:p-24">
      <div className="max-w-3xl mx-auto space-y-16 relative z-10">
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
              <span className="text-emerald-400">[01]</span> Data Collection: We
              only store your Google Profile ID and the encrypted content of
              your notes. No third-party tracking scripts are active within the
              vault.
            </p>
            <p>
              <span className="text-emerald-400">[02]</span> Storage: Your notes
              are stored in a distributed database. Access is restricted via JWT
              authentication and biometric-linked Google Auth.
            </p>
            <p>
              <span className="text-emerald-400">[03]</span> Deletion: You
              maintain full sovereignty over your data. Deleting a note purges
              it from our primary clusters instantly.
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
              tool for personal knowledge management. Attempting to
              reverse-engineer the API or brute-force system nodes will result
              in IP-level blacklisting via Upstash.
            </p>
            <p>
              <span className="text-emerald-400">[02]</span> Liability: While we
              utilize edge-level security, the user assumes responsibility for
              the content archived within the vault.
            </p>
            <p>
              <span className="text-emerald-400">[03]</span> Updates: System
              protocols may be updated as neural technology evolves. Continued
              access implies acceptance of new logic.
            </p>
          </div>
        </section>

        <div className="mt-24 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-red-500/40 hover:text-emerald-400 transition-all text-[10px] uppercase tracking-[0.5em] group"
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
