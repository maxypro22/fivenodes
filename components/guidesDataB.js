/* Guides 4–10. Same structure as guidesData.js, written more compactly.
   See the editorial note in guidesData.js — no invented figures. */

export const MORE_GUIDES = [
  {
    slug: "choosing-an-ai-company-in-qatar",
    updated: "2026-08-15",
    en: {
      title: "How to choose an AI automation company in Qatar",
      description:
        "The questions that separate an AI implementation partner from a reseller — integration depth, data ownership, Arabic capability and who owns the result.",
      answer:
        "Judge an AI company in Qatar on four things: whether they integrate with your actual systems or only demo a chatbot, whether they handle Gulf Arabic natively, who owns your conversation data, and whether they will show you results measured on your own operations rather than generic case studies.",
      sections: [
        {
          h: "Implementation partner or reseller?",
          p: [
            "Many vendors in the region resell a third-party chatbot platform with a logo change. That is a legitimate business model, but it caps what you can get: if the underlying platform cannot write to your booking system, no amount of configuration will make it.",
            "The distinguishing question is simple — ask what happens when you need the agent to do something the platform does not support out of the box. An implementation partner will describe an engineering path. A reseller will describe a roadmap request.",
          ],
        },
        {
          h: "What should you ask about data?",
          p: [
            "Ask where conversation data is stored, how long it is retained, whether it is used to train models, and what happens to it if you leave. Under Qatar's Law No. 13 of 2016 on Personal Data Privacy Protection, the obligation to protect personal data sits with you as the controller, not with your vendor.",
            "Get the answer in the contract, not in an email. A vendor who cannot answer this quickly has not thought about it.",
          ],
        },
        {
          h: "How do you verify Arabic capability?",
          p: [
            "Ask for a live test on your own recorded calls or real WhatsApp threads, with Gulf dialect and mid-sentence code-switching. Scripted demos in Modern Standard Arabic prove very little about how the system behaves with actual Qatari customers.",
          ],
        },
      ],
      table: {
        head: ["Question", "Good answer", "Warning sign"],
        rows: [
          ["Do you integrate with our CRM?", "Names the system and the method", "\"We can look into it\""],
          ["Who owns conversation data?", "You do, stated in the contract", "Vague or verbal assurance"],
          ["Can we test on our own calls?", "Yes, before you commit", "Demo-only, scripted"],
          ["What happens on escalation?", "Full transcript and context to a human", "Transfers a blank call"],
          ["What do you measure?", "Metrics from your operations", "Generic industry statistics"],
        ],
      },
      faq: [
        { q: "Should I choose a local Qatari company or an international vendor?", a: "Local matters for Arabic dialect handling, time-zone support and understanding Qatari business practice. International vendors may have broader platforms. The deciding factor is usually who will actually integrate with your systems." },
        { q: "How long should a first deployment take?", a: "A focused first use case — appointment booking or after-hours call handling — should be live within weeks, not quarters. Anyone quoting six months for a first agent is scoping too broadly." },
        { q: "What should a pilot include?", a: "A single measurable use case, a defined success metric agreed before launch, and an agreed exit if the metric is not met." },
      ],
    },
    ar: {
      title: "كيف تختار شركة أتمتة ذكاء اصطناعي في قطر",
      description:
        "الأسئلة التي تفصل شريك التنفيذ عن مجرد موزّع — عمق التكامل وملكية البيانات والقدرة على العربية ومن يملك النتيجة.",
      answer:
        "احكم على شركة الذكاء الاصطناعي في قطر بأربعة معايير: هل تتكامل مع أنظمتك الفعلية أم تعرض روبوت محادثة فقط، وهل تتعامل مع اللهجة الخليجية أصلاً، ومن يملك بيانات محادثاتك، وهل ستُظهر لك نتائج مقاسة على عملياتك أنت لا دراسات حالة عامة.",
      sections: [
        {
          h: "شريك تنفيذ أم موزّع؟",
          p: [
            "كثير من المزوّدين في المنطقة يعيدون بيع منصة محادثة من طرف ثالث بتغيير الشعار فقط. هذا نموذج عمل مشروع لكنه يحدّ مما يمكنك الحصول عليه: فإن كانت المنصة الأساسية لا تستطيع الكتابة في نظام الحجز لديك فلن يغيّر أي إعداد ذلك.",
            "السؤال الفاصل بسيط: اسأل ماذا يحدث حين تحتاج من الوكيل شيئاً لا تدعمه المنصة جاهزاً. شريك التنفيذ سيصف مساراً هندسياً، أما الموزّع فسيصف طلباً مضافاً لخارطة طريق.",
          ],
        },
        {
          h: "ماذا تسأل عن البيانات؟",
          p: [
            "اسأل أين تُخزَّن بيانات المحادثات، وكم مدة الاحتفاظ بها، وهل تُستخدم لتدريب النماذج، وماذا يحدث لها إن أنهيت التعاقد. بموجب القانون رقم ١٣ لسنة ٢٠١٦ بشأن حماية خصوصية البيانات الشخصية في قطر تقع مسؤولية حماية البيانات الشخصية عليك بصفتك المتحكم لا على المزوّد.",
            "احصل على الإجابة في العقد لا في رسالة بريد. المزوّد الذي لا يجيب بسرعة لم يفكر في الأمر أصلاً.",
          ],
        },
        {
          h: "كيف تتحقق من القدرة على العربية؟",
          p: [
            "اطلب اختباراً حياً على تسجيلات مكالماتك أو محادثات واتساب حقيقية، باللهجة الخليجية مع التبديل بين اللغتين داخل الجملة. العروض المعدّة بالفصحى لا تثبت شيئاً يُذكر عن سلوك النظام مع عملاء قطريين حقيقيين.",
          ],
        },
      ],
      table: {
        head: ["السؤال", "الإجابة الجيدة", "علامة تحذير"],
        rows: [
          ["هل تتكاملون مع نظام العملاء لدينا؟", "يذكر اسم النظام وطريقة الربط", "«سننظر في الأمر»"],
          ["من يملك بيانات المحادثات؟", "أنت، ومنصوص عليه في العقد", "طمأنة شفهية غامضة"],
          ["هل نختبر على مكالماتنا؟", "نعم قبل الالتزام", "عرض تجريبي معدّ فقط"],
          ["ماذا يحدث عند التصعيد؟", "نص كامل وسياق للموظف", "تحويل مكالمة فارغة"],
          ["ماذا تقيسون؟", "مؤشرات من عملياتك", "إحصاءات عامة عن القطاع"],
        ],
      },
      faq: [
        { q: "هل أختار شركة قطرية محلية أم مزوّداً عالمياً؟", a: "المحلية مهمة للهجة العربية والدعم ضمن التوقيت المحلي وفهم بيئة الأعمال القطرية، وقد تملك الشركات العالمية منصات أوسع. لكن العامل الحاسم عادةً هو من سيتكامل فعلياً مع أنظمتك." },
        { q: "كم يجب أن يستغرق أول تطبيق؟", a: "حالة استخدام أولى محددة مثل حجز المواعيد أو الرد خارج الدوام يجب أن تعمل خلال أسابيع لا أرباع سنة. ومن يعرض ستة أشهر لأول وكيل فنطاقه واسع أكثر من اللازم." },
        { q: "ماذا يجب أن تتضمن التجربة الأولية؟", a: "حالة استخدام واحدة قابلة للقياس، ومؤشر نجاح متفق عليه قبل الإطلاق، ومخرج متفق عليه إن لم يتحقق المؤشر." },
      ],
    },
  },

  {
    slug: "ai-receptionist-vs-human-qatar",
    updated: "2026-08-15",
    en: {
      title: "AI receptionist vs human receptionist in Qatar",
      description:
        "An honest comparison — where an AI receptionist genuinely wins, where a human is still better, and how to work out which fits your business.",
      answer:
        "An AI receptionist wins on availability, consistency and cost at volume: it answers every call at 2am, never forgets to log a lead, and costs the same on a public holiday. A human wins on judgement, complaint handling and anything requiring genuine empathy. Most Qatari businesses end up running both.",
      sections: [
        {
          h: "Where AI is genuinely better",
          p: [
            "Coverage. A human receptionist covers roughly 40 hours a week; calls do not. In Qatar, where a substantial share of enquiries arrive outside working hours and over weekends, the gap between those two numbers is usually where the lost revenue sits.",
            "Consistency. The agent asks the same qualifying questions on the hundredth call as on the first, and logs every one. Human performance varies with workload and time of day, which is normal and human.",
            "Simultaneity. Ten callers at once are ten conversations, not a queue.",
          ],
        },
        {
          h: "Where a human is still better",
          p: [
            "Complaints and emotionally charged calls. A frustrated customer wants to be heard by someone who can bend a rule, and an AI agent explicitly should not be bending your rules.",
            "Ambiguous or unusual requests that do not fit any defined flow, and high-value negotiations where reading the person matters as much as the words.",
          ],
        },
        {
          h: "How to decide",
          p: [
            "Measure two numbers first: how many calls you miss, and what a converted enquiry is worth. If you miss meaningful volume and each enquiry has real value, the case makes itself. If you miss almost nothing, the case is much weaker and you should be sceptical of anyone telling you otherwise.",
          ],
        },
      ],
      table: {
        head: ["", "AI receptionist", "Human receptionist"],
        rows: [
          ["Availability", "24/7/365", "Working hours"],
          ["Simultaneous calls", "Unlimited", "One"],
          ["Cost pattern", "Scales with usage", "Fixed salary + benefits"],
          ["Complaint handling", "Escalates", "Strong"],
          ["Consistency of logging", "Every call, always", "Varies with workload"],
          ["Judgement on exceptions", "Limited by design", "Strong"],
        ],
      },
      faq: [
        { q: "Will I have to make my receptionist redundant?", a: "Most deployments do not replace anyone. The usual pattern is the agent absorbs after-hours and overflow calls, and the receptionist stops spending their day on repetitive enquiries." },
        { q: "Can the AI transfer to my team?", a: "Yes, and it should. Any agent worth deploying escalates to a person with the full conversation context attached." },
        { q: "What about callers who refuse to speak to a machine?", a: "The agent should offer a human immediately when asked. Forcing a caller through an automated flow they have rejected is how businesses lose customers." },
      ],
    },
    ar: {
      title: "موظف الاستقبال الذكي مقابل الموظف البشري في قطر",
      description:
        "مقارنة صادقة — أين يتفوق الوكيل الذكي فعلاً، وأين يبقى الإنسان أفضل، وكيف تحدد ما يناسب عملك.",
      answer:
        "يتفوق موظف الاستقبال الذكي في التوفر والاتساق والتكلفة عند الحجم الكبير: يرد على كل مكالمة في الثانية صباحاً، ولا ينسى تسجيل أي عميل محتمل، وتكلفته ثابتة في العطلات الرسمية. أما الإنسان فيتفوق في التقدير ومعالجة الشكاوى وكل ما يتطلب تعاطفاً حقيقياً. وأغلب الشركات القطرية تنتهي بتشغيل الاثنين معاً.",
      sections: [
        {
          h: "أين يتفوق الذكاء الاصطناعي فعلاً",
          p: [
            "التغطية. موظف الاستقبال يغطي نحو ٤٠ ساعة أسبوعياً، أما المكالمات فلا تتوقف. وفي قطر حيث يصل جزء كبير من الاستفسارات خارج الدوام وفي العطلات، فإن الفجوة بين هذين الرقمين هي غالباً موضع الإيراد الضائع.",
            "الاتساق. يطرح الوكيل أسئلة التأهيل نفسها في المكالمة المئة كما في الأولى ويسجّلها جميعاً، بينما يتفاوت أداء الإنسان بحسب ضغط العمل ووقت اليوم، وهذا أمر طبيعي وإنساني.",
            "التزامن. عشرة متصلين في وقت واحد يعني عشر محادثات لا طابور انتظار.",
          ],
        },
        {
          h: "أين يبقى الإنسان أفضل",
          p: [
            "الشكاوى والمكالمات المشحونة عاطفياً. العميل الغاضب يريد من يسمعه ويستطيع تجاوز قاعدة، والوكيل الذكي يجب ألا يتجاوز قواعدك.",
            "الطلبات الغامضة أو غير المعتادة التي لا تنطبق على أي مسار محدد، والمفاوضات عالية القيمة التي تعتمد على قراءة الشخص بقدر اعتمادها على الكلمات.",
          ],
        },
        {
          h: "كيف تقرر",
          p: [
            "قِس رقمين أولاً: كم مكالمة تفوتك، وكم تساوي الفرصة المحوّلة. إن كانت تفوتك أحجام معتبرة ولكل استفسار قيمة حقيقية فالجدوى واضحة بذاتها، وإن كان لا يفوتك شيء تقريباً فالجدوى أضعف بكثير وينبغي التشكيك في من يقول لك غير ذلك.",
          ],
        },
      ],
      table: {
        head: ["", "موظف استقبال ذكي", "موظف استقبال بشري"],
        rows: [
          ["التوفر", "على مدار الساعة طوال العام", "ساعات الدوام"],
          ["المكالمات المتزامنة", "غير محدودة", "واحدة"],
          ["نمط التكلفة", "يتغير مع الاستخدام", "راتب ثابت ومزايا"],
          ["معالجة الشكاوى", "يصعّدها", "قوي"],
          ["اتساق التسجيل", "كل مكالمة دائماً", "يتفاوت بحسب الضغط"],
          ["التقدير في الحالات الاستثنائية", "محدود بحكم التصميم", "قوي"],
        ],
      },
      faq: [
        { q: "هل سأضطر للاستغناء عن موظف الاستقبال؟", a: "أغلب التطبيقات لا تستبدل أحداً. النمط المعتاد أن يستوعب الوكيل مكالمات ما بعد الدوام والفائض، فيتوقف الموظف عن قضاء يومه في الاستفسارات المتكررة." },
        { q: "هل يستطيع الوكيل التحويل لفريقي؟", a: "نعم ويجب ذلك. أي وكيل يستحق التشغيل يصعّد المحادثة إلى إنسان مع سياقها الكامل." },
        { q: "ماذا عن المتصلين الرافضين للتحدث مع آلة؟", a: "يجب أن يعرض الوكيل تحويلهم لموظف فوراً عند الطلب، فإجبار المتصل على مسار آلي رفضه هو أسرع طريق لفقدان العملاء." },
      ],
    },
  },

  {
    slug: "qatar-data-protection-ai-agents",
    updated: "2026-08-15",
    needsRealData: "Have Qatari counsel review before publishing — this is general information, not legal advice.",
    en: {
      title: "Qatar data protection and AI agents: what businesses must know",
      description:
        "How Qatar's Personal Data Privacy Protection Law applies when an AI agent handles customer conversations, and the controls to put in place.",
      answer:
        "Qatar's Law No. 13 of 2016 on Personal Data Privacy Protection applies to AI agents exactly as it applies to any other system processing personal data. The business deploying the agent is the controller and carries the legal obligation — notice, lawful purpose, security and retention limits — regardless of which vendor built it.",
      sections: [
        {
          h: "Who is responsible — you or the vendor?",
          p: [
            "You are. In data protection law the party deciding why and how personal data is processed is the controller, and that is the business, not the technology supplier. Your vendor is a processor acting on your instructions.",
            "Practically this means the obligations to inform callers, to secure the data and to delete it when it is no longer needed remain yours. A vendor contract does not transfer them, though it should oblige the vendor to support you in meeting them.",
          ],
        },
        {
          h: "What controls should be in place?",
          p: [
            "Notice at the start of the interaction — callers should be told the conversation is handled by an automated system and may be recorded. This is both a legal safeguard and, in practice, something customers respond to better than being deceived.",
            "A defined retention period with automatic deletion, rather than keeping transcripts indefinitely because storage is cheap.",
            "Access control over transcripts, since conversations routinely contain names, phone numbers, health details or financial information depending on your sector.",
            "A written answer on whether conversation data is used to train models, and the ability to say no.",
          ],
        },
      ],
      table: {
        head: ["Control", "Why", "Practical step"],
        rows: [
          ["Disclosure notice", "Transparency obligation", "Add it to the agent's opening line"],
          ["Retention limit", "Data must not be kept indefinitely", "Set automatic deletion after a defined period"],
          ["Access restriction", "Transcripts contain personal data", "Restrict to staff who need it"],
          ["No training without consent", "Secondary use requires a basis", "State it in the vendor contract"],
          ["Escalation record", "Accountability", "Log who accessed what and when"],
        ],
      },
      faq: [
        { q: "Do we have to tell callers they are speaking to AI?", a: "Transparency is the safe and professional default, and disclosure at the start of the call is straightforward to implement. Confirm the specific requirement for your sector with Qatari counsel." },
        { q: "Can conversation data be stored outside Qatar?", a: "Cross-border transfer is subject to conditions under the law. If your vendor hosts outside Qatar, get the arrangement documented and reviewed rather than assumed." },
        { q: "How long should transcripts be kept?", a: "Only as long as the purpose requires. Set an explicit period tied to a business reason, and delete automatically after it." },
      ],
      disclaimer:
        "This page is general information, not legal advice. Confirm your obligations with qualified Qatari counsel before relying on it.",
    },
    ar: {
      title: "حماية البيانات في قطر ووكلاء الذكاء الاصطناعي: ما يجب أن تعرفه الشركات",
      description:
        "كيف ينطبق قانون حماية خصوصية البيانات الشخصية القطري حين يتولى وكيل ذكي محادثات العملاء، وما الضوابط الواجب تطبيقها.",
      answer:
        "ينطبق القانون رقم ١٣ لسنة ٢٠١٦ بشأن حماية خصوصية البيانات الشخصية على وكلاء الذكاء الاصطناعي كما ينطبق على أي نظام آخر يعالج بيانات شخصية. والشركة التي تشغّل الوكيل هي المتحكم وتتحمل الالتزام القانوني — الإشعار والغرض المشروع والأمن وحدود الاحتفاظ — بغض النظر عن الجهة التي بنت النظام.",
      sections: [
        {
          h: "من المسؤول، أنت أم المزوّد؟",
          p: [
            "أنت. في قوانين حماية البيانات يكون الطرف الذي يحدد غرض المعالجة ووسيلتها هو المتحكم، وهو الشركة لا مورّد التقنية، بينما يكون المزوّد معالجاً يعمل وفق تعليماتك.",
            "عملياً يعني ذلك أن الالتزام بإبلاغ المتصلين وتأمين البيانات وحذفها عند انتفاء الحاجة يبقى عليك. والعقد مع المزوّد لا ينقل هذه الالتزامات، وإن كان يجب أن يلزمه بدعمك في الوفاء بها.",
          ],
        },
        {
          h: "ما الضوابط الواجب توفرها؟",
          p: [
            "إشعار في بداية التفاعل يُعلم المتصل بأن المحادثة يتولاها نظام آلي وقد تُسجَّل. وهذا ضمانة قانونية، كما أن العملاء عملياً يتقبلونه أفضل من الشعور بالتضليل.",
            "مدة احتفاظ محددة مع حذف تلقائي، بدلاً من الاحتفاظ بالنصوص بلا نهاية لأن التخزين رخيص.",
            "ضبط الوصول إلى النصوص، فالمحادثات تتضمن عادةً أسماءً وأرقام هواتف وربما بيانات صحية أو مالية بحسب قطاعك.",
            "إجابة كتابية عمّا إذا كانت بيانات المحادثات تُستخدم لتدريب النماذج، مع إمكانية الرفض.",
          ],
        },
      ],
      table: {
        head: ["الضابط", "السبب", "الخطوة العملية"],
        rows: [
          ["إشعار الإفصاح", "التزام الشفافية", "أضفه إلى جملة الوكيل الافتتاحية"],
          ["حد الاحتفاظ", "لا يجوز الاحتفاظ بالبيانات بلا نهاية", "فعّل حذفاً تلقائياً بعد مدة محددة"],
          ["تقييد الوصول", "النصوص تتضمن بيانات شخصية", "احصر الوصول بمن يحتاجه"],
          ["منع التدريب دون موافقة", "الاستخدام الثانوي يحتاج أساساً", "انص عليه في عقد المزوّد"],
          ["سجل التصعيد", "المساءلة", "سجّل من اطّلع على ماذا ومتى"],
        ],
      },
      faq: [
        { q: "هل يجب إخبار المتصل بأنه يتحدث مع ذكاء اصطناعي؟", a: "الشفافية هي الخيار الآمن والمهني، والإفصاح في بداية المكالمة سهل التطبيق. تحقق من المتطلب الخاص بقطاعك مع مستشار قانوني قطري." },
        { q: "هل يمكن تخزين بيانات المحادثات خارج قطر؟", a: "النقل عبر الحدود يخضع لشروط في القانون. وإن كان مزوّدك يستضيف خارج قطر فوثّق الترتيب وراجعه بدل افتراض صحته." },
        { q: "كم مدة الاحتفاظ بالنصوص؟", a: "بقدر ما يتطلبه الغرض فقط. حدد مدة صريحة مرتبطة بسبب تجاري واحذف تلقائياً بعدها." },
      ],
      disclaimer:
        "هذه الصفحة معلومات عامة وليست استشارة قانونية. تحقق من التزاماتك مع مستشار قانوني قطري مؤهل قبل الاعتماد عليها.",
    },
  },

  {
    slug: "ai-for-real-estate-qatar",
    updated: "2026-08-15",
    en: {
      title: "AI agents for real estate agencies in Qatar",
      description:
        "How Qatari real estate agencies use AI agents to qualify enquiries, book viewings and stop losing leads to slow WhatsApp replies.",
      answer:
        "Real estate in Qatar runs on WhatsApp, and enquiries arrive at night and on weekends when agents are unavailable. An AI agent answers instantly, qualifies the enquiry — budget, area, bedrooms, timing — sends matching listings, and books the viewing directly into the agent's calendar.",
      sections: [
        {
          h: "Why real estate loses leads",
          p: [
            "Property enquiries are high-intent and extremely time-sensitive. A prospect messaging about a listing at 9pm is usually messaging three agencies at once, and the first substantive reply tends to win the viewing.",
            "Agents are in viewings during the day and asleep at night, which is precisely when portal enquiries peak. The lead is not lost to a competitor with better properties; it is lost to a competitor who replied first.",
          ],
        },
        {
          h: "What the agent actually does",
          p: [
            "Replies within seconds in Arabic or English, asks the qualifying questions a good agent would ask, and sends matching listings with photos and prices.",
            "Books the viewing against real calendar availability rather than promising a callback, and sends the reminder that stops the no-show.",
            "Hands over to the human agent with the full conversation attached, so nobody asks the client to repeat their budget.",
          ],
        },
      ],
      table: {
        head: ["Task", "Typical manual handling", "With an AI agent"],
        rows: [
          ["After-hours enquiry", "Answered next morning", "Answered in seconds"],
          ["Qualification", "Inconsistent between agents", "Same questions every time"],
          ["Listing match", "Manual search", "Sent automatically"],
          ["Viewing booking", "Phone tag", "Booked into the calendar"],
          ["No-show reduction", "Ad hoc reminders", "Automatic reminders"],
        ],
      },
      faq: [
        { q: "Can it send property photos on WhatsApp?", a: "Yes. Listings with images, price and location can be sent directly in the conversation." },
        { q: "Will it handle Arabic enquiries?", a: "Yes, including switching between Arabic and English within a single conversation, which is how most Qatari clients actually write." },
        { q: "Does it replace our agents?", a: "No. It handles the first response and qualification so your agents spend their time on viewings and negotiation rather than on repetitive opening questions." },
      ],
    },
    ar: {
      title: "وكلاء الذكاء الاصطناعي لشركات العقارات في قطر",
      description:
        "كيف تستخدم شركات العقارات القطرية الوكلاء الأذكياء لتأهيل الاستفسارات وحجز المعاينات ووقف خسارة العملاء بسبب بطء الرد على واتساب.",
      answer:
        "قطاع العقارات في قطر يعمل عبر واتساب، والاستفسارات تصل ليلاً وفي العطلات حين لا يكون الوسيط متاحاً. الوكيل الذكي يرد فوراً ويؤهل الاستفسار — الميزانية والمنطقة وعدد الغرف والتوقيت — ويرسل العروض المطابقة ويحجز المعاينة مباشرةً في تقويم الوسيط.",
      sections: [
        {
          h: "لماذا تخسر شركات العقارات العملاء",
          p: [
            "استفسارات العقار عالية النية وشديدة الحساسية للوقت. من يراسل عن عقار في التاسعة مساءً يراسل عادةً ثلاث شركات في الوقت نفسه، وأول رد جوهري هو من يفوز بالمعاينة غالباً.",
            "الوسطاء في معاينات نهاراً ونيام ليلاً، وهو تحديداً وقت ذروة استفسارات المنصات. والعميل لا يُفقد لمنافس لديه عقارات أفضل بل لمنافس ردّ أولاً.",
          ],
        },
        {
          h: "ماذا يفعل الوكيل فعلياً",
          p: [
            "يرد خلال ثوانٍ بالعربية أو الإنجليزية، ويطرح أسئلة التأهيل التي يطرحها وسيط جيد، ويرسل العروض المطابقة بالصور والأسعار.",
            "يحجز المعاينة وفق التوفر الفعلي في التقويم بدل الوعد بمعاودة الاتصال، ويرسل التذكير الذي يمنع عدم الحضور.",
            "يحوّل المحادثة للوسيط البشري مع سياقها الكامل، فلا يُطلب من العميل تكرار ميزانيته.",
          ],
        },
      ],
      table: {
        head: ["المهمة", "المعالجة اليدوية المعتادة", "مع وكيل ذكي"],
        rows: [
          ["استفسار خارج الدوام", "يُرد عليه صباح اليوم التالي", "يُرد عليه خلال ثوانٍ"],
          ["التأهيل", "متفاوت بين الوسطاء", "الأسئلة نفسها في كل مرة"],
          ["مطابقة العروض", "بحث يدوي", "تُرسل تلقائياً"],
          ["حجز المعاينة", "تبادل مكالمات", "يُحجز في التقويم"],
          ["تقليل عدم الحضور", "تذكيرات عشوائية", "تذكيرات تلقائية"],
        ],
      },
      faq: [
        { q: "هل يرسل صور العقارات على واتساب؟", a: "نعم، يمكن إرسال العروض بالصور والسعر والموقع مباشرةً داخل المحادثة." },
        { q: "هل يتعامل مع الاستفسارات بالعربية؟", a: "نعم، بما في ذلك التنقل بين العربية والإنجليزية داخل المحادثة الواحدة، وهي طريقة كتابة أغلب العملاء في قطر فعلاً." },
        { q: "هل يستبدل وسطاءنا؟", a: "لا. يتولى الرد الأول والتأهيل ليقضي وسطاؤك وقتهم في المعاينات والتفاوض بدل الأسئلة الافتتاحية المتكررة." },
      ],
    },
  },

  {
    slug: "ai-for-clinics-qatar",
    updated: "2026-08-15",
    en: {
      title: "AI agents for clinics and dental practices in Qatar",
      description:
        "How clinics in Doha use AI agents for appointment booking, reminders and after-hours enquiries without adding reception staff.",
      answer:
        "Clinics lose revenue in two places: calls that go unanswered while reception is with a patient, and no-shows. An AI agent answers every call and WhatsApp message, books against real availability, and sends reminders — recovering appointments that would otherwise silently disappear.",
      sections: [
        {
          h: "The two costs clinics rarely measure",
          p: [
            "The unanswered call. Reception is checking in a patient, the phone rings, and the caller books with another clinic. This never appears in any report, because the enquiry was never recorded.",
            "The no-show. A booked slot that nobody attends is unrecoverable revenue, and reminder calls are exactly the repetitive task reception does not have time for.",
          ],
        },
        {
          h: "What to automate first",
          p: [
            "Start with booking and reminders, not with clinical questions. Booking is high volume, low risk and immediately measurable, and it is where the revenue leak actually is.",
            "Keep clinical advice firmly out of scope. The agent should schedule, confirm, remind and route — and escalate anything medical to your staff without attempting an answer.",
          ],
        },
      ],
      table: {
        head: ["Use case", "Impact", "Risk level"],
        rows: [
          ["Appointment booking", "High", "Low"],
          ["Appointment reminders", "High", "Low"],
          ["Rescheduling and cancellations", "Medium", "Low"],
          ["Insurance and pricing questions", "Medium", "Medium — needs accurate source data"],
          ["Clinical or symptom questions", "—", "Do not automate"],
        ],
      },
      faq: [
        { q: "Is patient data safe?", a: "Health information is sensitive personal data, so retention limits, access control and a clear vendor agreement are essential. Your clinic remains the controller under Qatari data protection law." },
        { q: "Can it work with our existing clinic system?", a: "That depends on whether your system exposes an interface for availability and bookings. It is the first question to ask, because it determines whether the agent can book or only take messages." },
        { q: "Can it handle Arabic-speaking patients?", a: "Yes, in Arabic and English, including switching between them mid-conversation." },
      ],
    },
    ar: {
      title: "وكلاء الذكاء الاصطناعي للعيادات وعيادات الأسنان في قطر",
      description:
        "كيف تستخدم العيادات في الدوحة الوكلاء الأذكياء لحجز المواعيد والتذكير والرد خارج الدوام دون زيادة موظفي الاستقبال.",
      answer:
        "تخسر العيادات إيرادها في موضعين: مكالمات لا يُرد عليها بينما الاستقبال مشغول مع مريض، وحالات عدم الحضور. الوكيل الذكي يرد على كل مكالمة ورسالة واتساب، ويحجز وفق التوفر الفعلي، ويرسل التذكيرات، فيستعيد مواعيد كانت ستضيع بصمت.",
      sections: [
        {
          h: "التكلفتان اللتان نادراً ما تقيسهما العيادات",
          p: [
            "المكالمة التي لا يُرد عليها. الاستقبال يسجّل دخول مريض، والهاتف يرن، فيحجز المتصل في عيادة أخرى. وهذا لا يظهر في أي تقرير لأن الاستفسار لم يُسجَّل أصلاً.",
            "عدم الحضور. الموعد المحجوز الذي لا يحضره أحد إيراد لا يُسترد، ومكالمات التذكير هي بالضبط المهمة المتكررة التي لا يملك الاستقبال وقتاً لها.",
          ],
        },
        {
          h: "ما الذي تؤتمته أولاً",
          p: [
            "ابدأ بالحجز والتذكير لا بالأسئلة الطبية. الحجز عالي الحجم ومنخفض المخاطر وقابل للقياس فوراً، وهو موضع التسرّب الفعلي للإيراد.",
            "أبقِ الاستشارة الطبية خارج النطاق تماماً. مهمة الوكيل الجدولة والتأكيد والتذكير والتوجيه، وتصعيد أي أمر طبي لطاقمك دون محاولة الإجابة.",
          ],
        },
      ],
      table: {
        head: ["حالة الاستخدام", "الأثر", "مستوى المخاطرة"],
        rows: [
          ["حجز المواعيد", "عالٍ", "منخفض"],
          ["تذكير المواعيد", "عالٍ", "منخفض"],
          ["إعادة الجدولة والإلغاء", "متوسط", "منخفض"],
          ["أسئلة التأمين والأسعار", "متوسط", "متوسط — يحتاج بيانات مصدر دقيقة"],
          ["الأسئلة الطبية والأعراض", "—", "لا تؤتمتها"],
        ],
      },
      faq: [
        { q: "هل بيانات المرضى آمنة؟", a: "المعلومات الصحية بيانات شخصية حساسة، لذا فحدود الاحتفاظ وضبط الوصول واتفاق واضح مع المزوّد أمور أساسية. وتبقى عيادتك هي المتحكم بموجب قانون حماية البيانات القطري." },
        { q: "هل يعمل مع نظام العيادة الحالي؟", a: "يعتمد على ما إذا كان نظامك يتيح واجهة للتوفر والحجوزات، وهو أول سؤال يجب طرحه لأنه يحدد إن كان الوكيل سيحجز فعلاً أم سيأخذ رسائل فقط." },
        { q: "هل يتعامل مع المرضى الناطقين بالعربية؟", a: "نعم بالعربية والإنجليزية، بما في ذلك التنقل بينهما داخل المحادثة." },
      ],
    },
  },

  {
    slug: "ai-for-restaurants-qatar",
    updated: "2026-08-15",
    en: {
      title: "AI agents for restaurants and cafés in Qatar",
      description:
        "Reservations, delivery enquiries and peak-hour calls — where AI agents help Qatari restaurants and where they do not.",
      answer:
        "Restaurant calls cluster exactly when staff are busiest. An AI agent takes reservations, answers the repetitive questions about opening hours, location, delivery areas and menu items, and confirms bookings by WhatsApp — so the floor team stops answering the phone during service.",
      sections: [
        {
          h: "The peak-hour problem",
          p: [
            "Reservation calls arrive during service, when every member of staff is already occupied. The call either goes unanswered or pulls someone off the floor, and both outcomes cost money.",
            "Most of those calls are also highly repetitive — hours, location, parking, delivery radius, whether a dish is available. None of it requires a human.",
          ],
        },
        {
          h: "What works and what does not",
          p: [
            "Reservations, confirmations and reminders work well and reduce no-shows measurably.",
            "Complex custom orders and complaints should escalate to a person. A wrong order taken confidently by an automated system is worse than a call that took slightly longer to answer.",
          ],
        },
      ],
      table: {
        head: ["Call type", "Automate?", "Note"],
        rows: [
          ["Table reservation", "Yes", "Books against real availability"],
          ["Opening hours / location", "Yes", "Highest-volume repetitive question"],
          ["Delivery area check", "Yes", "Needs an accurate zone list"],
          ["Large group or event booking", "Partly", "Qualify, then hand to a manager"],
          ["Complaint about an order", "No", "Escalate immediately"],
        ],
      },
      faq: [
        { q: "Can it take orders?", a: "It can capture straightforward orders, but complex customisation is where automated ordering tends to go wrong. Many restaurants start with reservations and enquiries, then extend once the agent is proven." },
        { q: "Does it work during Ramadan hours?", a: "Yes — opening hours, iftar timings and seasonal menus are configuration, and can be changed without redeploying anything." },
        { q: "What about walk-in customers?", a: "The agent handles phone and WhatsApp. Front-of-house remains human, which is where it belongs." },
      ],
    },
    ar: {
      title: "وكلاء الذكاء الاصطناعي للمطاعم والمقاهي في قطر",
      description:
        "الحجوزات واستفسارات التوصيل ومكالمات ساعات الذروة — أين يفيد الوكيل الذكي المطاعم القطرية وأين لا يفيد.",
      answer:
        "مكالمات المطاعم تتركز تحديداً حين يكون الطاقم في أشد انشغاله. الوكيل الذكي يستقبل الحجوزات ويجيب على الأسئلة المتكررة عن أوقات العمل والموقع ومناطق التوصيل وأصناف القائمة، ويؤكد الحجوزات عبر واتساب، فيتوقف فريق الصالة عن الرد على الهاتف أثناء الخدمة.",
      sections: [
        {
          h: "مشكلة ساعة الذروة",
          p: [
            "مكالمات الحجز تصل أثناء الخدمة حين يكون كل موظف مشغولاً بالفعل، فإما ألا يُرد على المكالمة أو يُسحب أحدهم من الصالة، وكلا الأمرين يكلّف مالاً.",
            "وأغلب هذه المكالمات متكررة جداً: أوقات العمل والموقع والمواقف ونطاق التوصيل وتوفر صنف معين، ولا شيء منها يحتاج إنساناً.",
          ],
        },
        {
          h: "ما ينجح وما لا ينجح",
          p: [
            "الحجوزات والتأكيدات والتذكيرات تعمل جيداً وتقلل عدم الحضور بشكل ملموس.",
            "الطلبات المخصصة المعقدة والشكاوى يجب تصعيدها لموظف. فالطلب الخاطئ الذي يأخذه نظام آلي بثقة أسوأ من مكالمة استغرق الرد عليها وقتاً أطول قليلاً.",
          ],
        },
      ],
      table: {
        head: ["نوع المكالمة", "هل تؤتمت؟", "ملاحظة"],
        rows: [
          ["حجز طاولة", "نعم", "يحجز وفق التوفر الفعلي"],
          ["أوقات العمل والموقع", "نعم", "أكثر الأسئلة تكراراً"],
          ["التحقق من منطقة التوصيل", "نعم", "يحتاج قائمة مناطق دقيقة"],
          ["حجز مجموعات أو مناسبات", "جزئياً", "يؤهل ثم يحوّل للمدير"],
          ["شكوى على طلب", "لا", "يصعّد فوراً"],
        ],
      },
      faq: [
        { q: "هل يستقبل الطلبات؟", a: "يستطيع التقاط الطلبات البسيطة، لكن التخصيص المعقد هو موضع الخطأ عادةً في الطلب الآلي. وكثير من المطاعم تبدأ بالحجوزات والاستفسارات ثم توسّع بعد إثبات الوكيل." },
        { q: "هل يعمل بتوقيت رمضان؟", a: "نعم، فأوقات العمل ومواعيد الإفطار والقوائم الموسمية إعدادات يمكن تغييرها دون إعادة تشغيل أي شيء." },
        { q: "ماذا عن الزبائن الحاضرين؟", a: "الوكيل يتولى الهاتف وواتساب، وتبقى خدمة الصالة بشرية وهو موضعها الصحيح." },
      ],
    },
  },

  {
    slug: "deploy-ai-agent-qatar-steps",
    updated: "2026-08-15",
    howTo: true,
    en: {
      title: "How to deploy an AI agent in your Qatari business: step by step",
      description:
        "A practical sequence for going from decision to a live AI agent — scoping, data, integration, testing and measurement.",
      answer:
        "Deploying an AI agent works best in five steps: pick one measurable use case, gather the real conversations it must handle, connect the systems it needs to read and write, test against recorded calls before going live, and measure against a baseline you captured beforehand.",
      steps: [
        { h: "1. Pick one use case with a number attached", p: "Choose a single flow — after-hours calls, appointment booking, WhatsApp first response — and write down the metric that will judge it. Broad 'automate customer service' projects fail because nothing can be declared successful." },
        { h: "2. Capture the baseline before you build", p: "Record how many calls you currently miss, your average response time on WhatsApp, and your no-show rate. Once the agent is live this measurement becomes impossible to reconstruct honestly." },
        { h: "3. Gather the real material", p: "Collect actual call recordings, WhatsApp threads and the questions staff answer daily. This is what the agent is trained and tested against, and it is the difference between an agent that sounds like your business and one that sounds generic." },
        { h: "4. Connect the systems", p: "Decide what the agent must read (availability, pricing, stock) and write (bookings, CRM records). This is the engineering work, and it determines whether the agent can act or only talk." },
        { h: "5. Test, then launch narrow", p: "Test on your own recordings including Arabic dialect and interruptions. Launch on one channel or outside working hours first, so problems surface at low volume." },
      ],
      table: {
        head: ["Stage", "Typical duration", "Who is needed"],
        rows: [
          ["Scoping and baseline", "Days", "Owner or operations lead"],
          ["Material gathering", "Days", "Front-line staff"],
          ["Integration", "1–3 weeks", "Vendor + whoever owns your systems"],
          ["Testing", "Days", "Staff who handle the calls today"],
          ["Narrow launch", "1–2 weeks", "Operations"],
        ],
      },
      faq: [
        { q: "What is the most common reason deployments fail?", a: "Scope. Trying to automate everything at once produces an agent that does many things poorly and cannot be judged against any single metric." },
        { q: "Do we need technical staff in-house?", a: "Not usually, but you need someone who can authorise access to your booking system or CRM. Integration stalls far more often on permissions than on engineering." },
        { q: "How do we know it is working?", a: "Compare against the baseline from step 2. Without it you are left with impressions, and impressions of new technology are unreliable in both directions." },
      ],
    },
    ar: {
      title: "كيف تشغّل وكيلاً ذكياً في شركتك القطرية: خطوة بخطوة",
      description:
        "تسلسل عملي من القرار إلى وكيل ذكي يعمل فعلياً — تحديد النطاق والبيانات والتكامل والاختبار والقياس.",
      answer:
        "أفضل تسلسل لتشغيل وكيل ذكي يتم في خمس خطوات: اختر حالة استخدام واحدة قابلة للقياس، واجمع المحادثات الحقيقية التي سيتعامل معها، واربط الأنظمة التي يحتاج القراءة والكتابة فيها، واختبره على تسجيلات حقيقية قبل الإطلاق، وقِس النتيجة مقابل خط أساس سجّلته مسبقاً.",
      steps: [
        { h: "١. اختر حالة استخدام واحدة مرتبطة برقم", p: "اختر مساراً واحداً — مكالمات ما بعد الدوام أو حجز المواعيد أو الرد الأول على واتساب — واكتب المؤشر الذي سيحكم عليه. مشاريع «أتمتة خدمة العملاء» الفضفاضة تفشل لأنه لا يمكن إعلان نجاح أي شيء فيها." },
        { h: "٢. سجّل خط الأساس قبل البناء", p: "سجّل كم مكالمة تفوتك اليوم، ومتوسط زمن ردك على واتساب، ونسبة عدم الحضور. فبعد تشغيل الوكيل يصبح إعادة بناء هذا القياس بصدق أمراً مستحيلاً." },
        { h: "٣. اجمع المادة الحقيقية", p: "اجمع تسجيلات مكالمات فعلية ومحادثات واتساب والأسئلة التي يجيب عنها الموظفون يومياً. هذه هي المادة التي يُدرَّب ويُختبر عليها الوكيل، وهي الفرق بين وكيل يشبه شركتك وآخر يبدو عاماً." },
        { h: "٤. اربط الأنظمة", p: "حدد ما يجب أن يقرأه الوكيل (التوفر والأسعار والمخزون) وما يجب أن يكتبه (الحجوزات وسجلات العملاء). هذا هو العمل الهندسي وهو ما يحدد إن كان الوكيل سيتصرف أم سيتحدث فقط." },
        { h: "٥. اختبر ثم أطلق على نطاق ضيق", p: "اختبر على تسجيلاتك بما فيها اللهجة العربية والمقاطعات، وأطلق على قناة واحدة أو خارج الدوام أولاً لتظهر المشكلات عند حجم منخفض." },
      ],
      table: {
        head: ["المرحلة", "المدة المعتادة", "من يلزم"],
        rows: [
          ["تحديد النطاق وخط الأساس", "أيام", "المالك أو مدير العمليات"],
          ["جمع المادة", "أيام", "موظفو الخط الأمامي"],
          ["التكامل", "١–٣ أسابيع", "المزوّد ومسؤول أنظمتك"],
          ["الاختبار", "أيام", "من يتولون المكالمات اليوم"],
          ["الإطلاق الضيق", "١–٢ أسبوع", "العمليات"],
        ],
      },
      faq: [
        { q: "ما أكثر أسباب فشل التطبيقات؟", a: "النطاق. محاولة أتمتة كل شيء دفعة واحدة تنتج وكيلاً يؤدي أشياء كثيرة بشكل رديء ولا يمكن الحكم عليه بأي مؤشر واحد." },
        { q: "هل نحتاج موظفين تقنيين لدينا؟", a: "ليس عادةً، لكنك تحتاج من يستطيع منح صلاحية الوصول لنظام الحجز أو نظام العملاء. فالتكامل يتعطل بسبب الصلاحيات أكثر بكثير من تعطله بسبب الهندسة." },
        { q: "كيف نعرف أنه ينجح؟", a: "بالمقارنة مع خط الأساس من الخطوة الثانية. وبدونه لن يبقى سوى الانطباعات، والانطباعات عن التقنيات الجديدة غير موثوقة في الاتجاهين." },
      ],
    },
  },
];
