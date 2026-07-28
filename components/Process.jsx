import WorkflowScan from "./WorkflowScan";
import DashboardIntegration from "./DashboardIntegration";
import DashboardMonitor from "./DashboardMonitor";
import { PROCESS } from "./data";

// All three steps now use animated mockups instead of videos.
const CUSTOM = [WorkflowScan, DashboardIntegration, DashboardMonitor];

export default function Process() {
  return (
    <section className="py-24 bg-surface">
      <div className="wrap">
        <div className="text-center max-w-[640px] mx-auto">
          <span className="eyebrow reveal inline-flex justify-center">How it works</span>
          <h2 className="reveal d1 font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] tracking-[-.02em] text-ink mt-3">
            Three Steps to Deploy an AI Agent in Qatar
          </h2>
          <p className="reveal d2 text-muted text-base mt-[14px] mx-auto">
            We map your workflows, build and integrate your AI agents, then launch with dedicated
            ongoing support.
          </p>
        </div>

        {/* flat 3-up layout: heading + copy above the mockup, thin hairlines
            between columns, no card frame — text and mockup share the same
            plain background */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
          {PROCESS.map((s, i) => {
            const Custom = CUSTOM[i];
            return (
              <div key={s.n} className={`reveal d${i + 1} group py-10 md:py-0 md:px-9 first:md:pl-0 last:md:pr-0`}>
                <h3 className="font-heading font-bold text-[19px] text-ink tracking-[-.01em]">{s.t}</h3>
                <p className="text-[14px] text-muted mt-2 leading-[1.6] max-w-[280px]">{s.d}</p>

                <div className="mt-4 rounded-2xl overflow-hidden aspect-[16/12]">
                  <Custom />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
