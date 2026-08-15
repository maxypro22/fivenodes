/* Stage data ported verbatim from the Five Nodes static prototype.
   `mock` holds raw markup and is injected with dangerouslySetInnerHTML,
   exactly as the prototype assigned it via innerHTML. */

export const QV_NODES = [
  {
    n:"01", key:"trigger", tab:"Trigger", title:"Trigger",
    text:"Launch automated workflows instantly with smart triggers, real-time events, and custom conditions.",
    list:["Connect multiple trigger sources","Real-time event detection","Custom conditions & filters"],
    mock:`
      <div class="qv-mock__bar">
        <span class="qv-mock__chip"><i class="qv-mock__dot"></i>Trigger Configuration</span>
        <span class="qv-mock__chip qv-mock__chip--cyan" style="margin-left:auto">Webhook</span>
      </div>
      <div class="qv-mock__split">
        <div class="qv-mock__grid">
          <div class="qv-row"><span>Trigger Source</span><b>Webhook</b></div>
          <div class="qv-row"><span>Event Type</span><b>Incoming Request</b></div>
          <div class="qv-row"><span>Condition</span><b>Method is POST</b></div>
          <div class="qv-row"><span>Active</span><b>Enabled</b><i class="qv-toggle"></i></div>
          <div class="qv-row"><span>Run once</span><b>Per event</b><i class="qv-toggle"></i></div>
          <div class="qv-cta">⚡ Activate Trigger</div>
        </div>
        <div class="qv-mock__graph">
          <svg class="qv-wires" viewBox="0 0 130 160" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="rgb(var(--qv-accent-rgb) / .7)" stroke-width="1.5" class="qv-flowline" opacity=".85">
              <path d="M0 62 Q26 62 34 80"/><path d="M0 98 Q26 98 34 80"/>
            </g>
            <g fill="none" stroke="#67e8f9" stroke-width="1.5" class="qv-flowline" opacity=".85">
              <path d="M96 80 Q112 80 122 44"/><path d="M96 80 H122"/><path d="M96 80 Q112 80 122 116"/>
            </g>
            <g fill="#67e8f9"><circle cx="122" cy="44" r="3"/><circle cx="122" cy="80" r="3"/><circle cx="122" cy="116" r="3"/></g>
            <circle cx="34" cy="80" r="4.5" fill="rgb(var(--qv-accent-rgb) / .55)"/>
          </svg>
          <div class="qv-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="rgb(var(--on-primary))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z"/></svg>
            Trigger
          </div>
        </div>
      </div>`
  },
  {
    n:"02", key:"processing", tab:"AI Processing", title:"AI Processing",
    text:"Transform incoming data into intelligent actions with advanced AI-powered analysis, decision-making, and automated workflow execution.",
    list:["Smart AI decision making","Real-time data analysis","Advanced logic & automation filters"],
    mock:`
      <div class="qv-mock__bar">
        <span class="qv-mock__chip"><i class="qv-mock__dot"></i>Analyzing…</span>
        <span class="qv-mock__chip qv-mock__chip--cyan" style="margin-left:auto"><i class="qv-mock__dot qv-mock__dot--cyan"></i>98% accuracy</span>
      </div>
      <div class="qv-mock__svgwrap">
        <svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <linearGradient id="qvChip" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="rgb(var(--qv-accent-rgb))"/><stop offset="1" stop-color="rgb(var(--qv-accent-rgb) / .55)"/>
            </linearGradient>
            <filter id="qvGlow"><feGaussianBlur stdDeviation="3.2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <g stroke="rgb(var(--qv-accent-rgb))" stroke-width="1.6" fill="none" filter="url(#qvGlow)" class="qv-flowline">
            <path d="M14 52 H74 Q92 52 92 68 H120"/><path d="M14 100 H74 Q92 100 92 84 H120"/>
          </g>
          <g stroke="#06b6d4" stroke-width="1.6" fill="none" filter="url(#qvGlow)" class="qv-flowline">
            <path d="M200 68 H228 Q246 68 246 50 H306"/><path d="M200 84 H228 Q246 84 246 102 H306"/>
          </g>
          <rect x="120" y="38" width="80" height="76" rx="10" fill="url(#qvChip)" stroke="rgb(var(--qv-accent-rgb) / .7)" stroke-width="1.4" filter="url(#qvGlow)"/>
          <text x="160" y="84" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="24" font-weight="700" fill="rgb(var(--on-primary))">AI</text>
          <g fill="rgb(var(--qv-accent-rgb) / .55)">
            <circle cx="14" cy="52" r="3.4"/><circle cx="14" cy="100" r="3.4"/>
          </g>
          <g fill="#67e8f9"><circle cx="306" cy="50" r="3.4"/><circle cx="306" cy="102" r="3.4"/></g>
        </svg>
      </div>`
  },
  {
    n:"03", key:"action", tab:"Action", title:"Action",
    text:"Dispatch the right action across every connected tool the moment a decision is made, with retries and full delivery tracking.",
    list:["Multi-tool action dispatch","Automatic retries & fallbacks","Delivery status tracking"],
    mock:`
      <div class="qv-mock__bar">
        <span class="qv-mock__chip"><i class="qv-mock__dot"></i>Action Queue</span>
        <span class="qv-mock__chip qv-mock__chip--cyan" style="margin-left:auto">4 running</span>
      </div>
      <div class="qv-mock__split">
        <div class="qv-mock__grid">
          <div class="qv-row"><span>Send Email</span><b>Delivered</b><i class="qv-toggle"></i></div>
          <div class="qv-row"><span>Update CRM</span><b>Delivered</b><i class="qv-toggle"></i></div>
          <div class="qv-row"><span>Post to Slack</span><b>Running</b><i class="qv-toggle"></i></div>
          <div class="qv-row"><span>Create Ticket</span><b>Queued</b><i class="qv-toggle"></i></div>
          <div class="qv-cta">▷ Run Action Set</div>
        </div>
        <div class="qv-mock__graph">
          <svg class="qv-wires" viewBox="0 0 130 160" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="rgb(var(--qv-accent-rgb) / .7)" stroke-width="1.5" class="qv-flowline" opacity=".85">
              <path d="M0 80 H34"/>
            </g>
            <g fill="none" stroke="#67e8f9" stroke-width="1.5" class="qv-flowline" opacity=".85">
              <path d="M96 80 Q110 80 122 32"/><path d="M96 80 Q112 80 122 64"/>
              <path d="M96 80 Q112 80 122 96"/><path d="M96 80 Q110 80 122 128"/>
            </g>
            <g fill="#67e8f9"><circle cx="122" cy="32" r="3"/><circle cx="122" cy="64" r="3"/><circle cx="122" cy="96" r="3"/><circle cx="122" cy="128" r="3"/></g>
          </svg>
          <div class="qv-node">
            <svg viewBox="0 0 24 24" fill="none" stroke="rgb(var(--on-primary))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            Action
          </div>
        </div>
      </div>`
  },
  {
    n:"04", key:"monitor", tab:"Monitor", title:"Monitor",
    text:"Watch every run in real time with live metrics, execution logs, and alerts the moment something drifts off track.",
    list:["Live execution metrics","Full run history & logs","Instant anomaly alerts"],
    mock:`
      <div class="qv-mock__bar">
        <span class="qv-mock__chip"><i class="qv-mock__dot"></i>Live Runs</span>
        <span class="qv-mock__chip qv-mock__chip--cyan" style="margin-left:auto">99.2% success</span>
      </div>
      <div class="qv-tiles">
        <div class="qv-tile"><em>Runs today</em><b>12,480</b><i>↑ 18.6%</i></div>
        <div class="qv-tile"><em>Avg latency</em><b>1.24s</b><i>↓ 8.2%</i></div>
        <div class="qv-tile"><em>Failures</em><b>0.8%</b><i>↓ 2.4%</i></div>
      </div>
      <div class="qv-mock__svgwrap">
        <svg viewBox="0 0 320 150" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="qvFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#06b6d4" stop-opacity=".38"/>
              <stop offset="1" stop-color="#06b6d4" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <g stroke="var(--qv-hair-1)" stroke-width="1">
            <line x1="0" y1="30" x2="320" y2="30"/><line x1="0" y1="70" x2="320" y2="70"/><line x1="0" y1="110" x2="320" y2="110"/>
          </g>
          <path d="M4 122 L52 96 L100 104 L148 62 L196 74 L244 38 L292 24 L316 18 L316 150 L4 150 Z" fill="url(#qvFill)"/>
          <path class="qv-drawline" d="M4 122 L52 96 L100 104 L148 62 L196 74 L244 38 L292 24 L316 18"
                fill="none" stroke="#06b6d4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <g fill="rgb(var(--qv-accent-rgb))" stroke="rgb(var(--qv-accent-rgb) / .3)" stroke-width="1.4">
            <circle cx="148" cy="62" r="4"/><circle cx="244" cy="38" r="4"/><circle cx="316" cy="18" r="4"/>
          </g>
        </svg>
      </div>`
  },
  {
    n:"05", key:"optimize", tab:"Optimize", title:"Optimize",
    text:"Let the system tune itself — surfacing bottlenecks, testing better paths, and continuously improving every workflow you ship.",
    list:["Automatic bottleneck detection","Continuous path optimization","Cost & latency reduction"],
    mock:`
      <div class="qv-mock__bar">
        <span class="qv-mock__chip"><i class="qv-mock__dot"></i>Optimization</span>
        <span class="qv-mock__chip qv-mock__chip--cyan" style="margin-left:auto">+38% faster</span>
      </div>
      <div class="qv-mock__svgwrap">
        <svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <linearGradient id="qvArc" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="rgb(var(--qv-accent-rgb))"/><stop offset="1" stop-color="#06b6d4"/>
            </linearGradient>
          </defs>
          <circle cx="160" cy="82" r="52" fill="none" stroke="var(--qv-hair-5)" stroke-width="11"/>
          <circle class="qv-arc" cx="160" cy="82" r="52" fill="none" stroke="url(#qvArc)" stroke-width="11"
                  stroke-linecap="round" transform="rotate(-90 160 82)"/>
          <text x="160" y="78" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="27" font-weight="700" fill="var(--qv-white)">75%</text>
          <text x="160" y="98" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="10" fill="var(--qv-tx-3)">efficiency gain</text>
        </svg>
      </div>
      <div class="qv-bars">
        <div class="qv-bar"><span>Latency</span><u style="--w:34%"></u><b>-38%</b></div>
        <div class="qv-bar"><span>Cost</span><u style="--w:52%"></u><b>-24%</b></div>
        <div class="qv-bar"><span>Throughput</span><u style="--w:78%"></u><b>+61%</b></div>
      </div>`
  }
];
