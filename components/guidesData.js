/**
 * Answer-shaped guides — the pages that answer the questions buyers actually
 * type into ChatGPT, Perplexity and Google AI Overviews.
 *
 * Every guide follows the same structure, because that structure is what gets
 * quoted: a 40–60 word direct answer first, question-shaped H2s each with a
 * self-contained answer beneath, a comparison table, and 5–8 FAQs that feed
 * FAQPage schema.
 *
 * EDITORIAL NOTE — deliberately no invented figures. Where a page would carry
 * prices or client results, it carries the factors that determine them and a
 * `needsRealData` flag. Publishing invented QAR pricing or fabricated case
 * study numbers for a real company would mislead customers and is the one
 * thing that would genuinely damage trust with both buyers and search engines.
 */

import { MORE_GUIDES } from "./guidesDataB";

const CORE_GUIDES = [
  {
    slug: "ai-voice-agent-cost-qatar",
    updated: "2026-08-15",
    needsRealData: "Add your actual QAR price bands to the `table` rows below.",
    en: {
      title: "How much does an AI voice agent cost in Qatar?",
      description:
        "What drives the cost of an AI voice agent in Qatar — call volume, languages, integrations and channels — and how to compare quotes properly.",
      answer:
        "An AI voice agent in Qatar is normally priced on three things: a one-off build fee covering integration and training, a monthly platform fee, and a usage rate per minute of conversation. Bilingual Arabic and English handling, CRM integration depth and call volume are what move the number most.",
      sections: [
        {
          h: "What are you actually paying for?",
          p: [
            "A voice agent is not a single product. It is a telephony number, a speech-to-text layer, a language model that decides what to say, a text-to-speech voice, and the integrations that let it read and write to your real systems. Each of those has a cost, and vendors bundle them differently — which is why two quotes for 'an AI receptionist' can differ by an order of magnitude.",
            "The build fee covers the work that happens once: mapping your call flows, connecting your CRM or booking system, training the agent on your services and pricing, and testing it against real call recordings. The monthly fee covers hosting, monitoring and model costs. Usage is billed per minute of live conversation.",
          ],
        },
        {
          h: "Which factors move the price most?",
          p: [
            "Bilingual handling is the single biggest differentiator in Qatar. An agent that only handles English is materially cheaper to build and run than one that switches between Arabic and English mid-sentence the way Qatari callers actually speak.",
            "Integration depth is the second. An agent that reads availability from your calendar, writes a booking, and updates your CRM requires real engineering against your systems. An agent that only answers questions and takes a message does not.",
            "Call volume affects the usage line but rarely the build fee. This is why voice agents get cheaper per call as volume rises, and why the economics work best for businesses already missing calls.",
          ],
        },
        {
          h: "How should you compare quotes?",
          p: [
            "Ask every vendor for the same three numbers: total first-year cost at your actual call volume, the per-minute rate after any bundled minutes, and what happens to the price if you add a second language or a second channel.",
            "Ask what happens when the agent cannot answer. A quote that does not include human escalation is not a complete system — it is a demo.",
            "Ask who owns the conversation data and where it is stored. Under Qatar's data protection law this is your obligation, not the vendor's, and it should be answered in writing before you sign.",
          ],
        },
      ],
      table: {
        head: ["Cost component", "Billing model", "What changes it"],
        rows: [
          ["Build and integration", "One-off", "Number of call flows, CRM/booking systems, languages"],
          ["Platform and hosting", "Monthly", "Number of concurrent lines, channels, retention period"],
          ["Conversation usage", "Per minute", "Call volume and average handling time"],
          ["Telephony number", "Monthly", "Local Qatari number, toll-free, or SIP trunk to your PBX"],
          ["Human escalation", "Per seat or per transfer", "How often the agent hands off"],
        ],
      },
      faq: [
        {
          q: "Is an AI voice agent cheaper than hiring a receptionist in Qatar?",
          a: "For businesses handling meaningful call volume outside office hours, usually yes — because the agent covers nights, weekends and holidays without overtime. For a business receiving only a handful of calls a day during working hours, a human is often still the better economic choice.",
        },
        {
          q: "Do I pay per call or per minute?",
          a: "Most vendors, including Five Nodes, bill per minute of live conversation. Per-call pricing tends to penalise businesses whose calls are naturally short.",
        },
        {
          q: "Does Arabic cost more than English?",
          a: "Bilingual agents cost more to build and tune than English-only ones, because Gulf Arabic requires additional speech tuning and testing. The running cost difference is much smaller than the build cost difference.",
        },
        {
          q: "How long before it pays for itself?",
          a: "The honest answer depends on how many calls you currently miss. If you can measure your missed-call rate today, the payback maths is straightforward. If you cannot, that measurement is the first thing to fix.",
        },
      ],
    },
    ar: {
      title: "كم تكلفة وكيل صوتي بالذكاء الاصطناعي في قطر؟",
      description:
        "ما الذي يحدد تكلفة الوكيل الصوتي في قطر — حجم المكالمات واللغات والتكاملات والقنوات — وكيف تقارن العروض بشكل صحيح.",
      answer:
        "يُسعَّر الوكيل الصوتي في قطر عادةً على ثلاثة عناصر: رسوم بناء تُدفع مرة واحدة تغطي التكامل والتدريب، ورسوم منصة شهرية، وسعر استخدام لكل دقيقة محادثة. أكثر ما يرفع الرقم هو التعامل بالعربية والإنجليزية معاً، وعمق التكامل مع أنظمتك، وحجم المكالمات.",
      sections: [
        {
          h: "ما الذي تدفع مقابله فعلياً؟",
          p: [
            "الوكيل الصوتي ليس منتجاً واحداً، بل رقم هاتف، وطبقة تحويل الكلام إلى نص، ونموذج لغوي يقرر ما يقوله، وصوتاً اصطناعياً، إضافة إلى التكاملات التي تتيح له القراءة والكتابة في أنظمتك الحقيقية. لكل عنصر تكلفة، والمزوّدون يجمعونها بطرق مختلفة، ولهذا قد يختلف عرضان لـ«موظف استقبال ذكي» اختلافاً كبيراً.",
            "رسوم البناء تغطي العمل الذي يحدث مرة واحدة: رسم مسارات المكالمات، والربط بنظام إدارة العملاء أو الحجز، وتدريب الوكيل على خدماتك وأسعارك، واختباره على تسجيلات مكالمات حقيقية. أما الرسوم الشهرية فتغطي الاستضافة والمراقبة وتكلفة النماذج، والاستخدام يُحتسب بالدقيقة.",
          ],
        },
        {
          h: "ما العوامل الأكثر تأثيراً في السعر؟",
          p: [
            "التعامل بلغتين هو الفارق الأكبر في قطر. الوكيل الذي يتعامل بالإنجليزية فقط أرخص بوضوح في البناء والتشغيل من وكيل ينتقل بين العربية والإنجليزية داخل الجملة الواحدة كما يتحدث المتصل القطري فعلاً.",
            "عمق التكامل هو العامل الثاني. الوكيل الذي يقرأ التوفر من تقويمك ويسجّل حجزاً ويحدّث نظام العملاء يحتاج هندسة حقيقية على أنظمتك، بخلاف وكيل يجيب على الأسئلة ويترك رسالة فقط.",
            "حجم المكالمات يؤثر في بند الاستخدام لا في رسوم البناء، ولهذا تنخفض التكلفة لكل مكالمة كلما زاد الحجم، وتكون الجدوى أفضل للشركات التي تفوتها مكالمات بالفعل.",
          ],
        },
        {
          h: "كيف تقارن العروض؟",
          p: [
            "اطلب من كل مزوّد الأرقام الثلاثة نفسها: التكلفة الإجمالية للسنة الأولى عند حجم مكالماتك الفعلي، وسعر الدقيقة بعد أي دقائق مجانية، وما الذي يحدث للسعر عند إضافة لغة ثانية أو قناة ثانية.",
            "اسأل عمّا يحدث حين لا يستطيع الوكيل الإجابة. العرض الذي لا يشمل التحويل إلى موظف بشري ليس نظاماً متكاملاً بل عرضاً تجريبياً.",
            "اسأل عن ملكية بيانات المحادثات ومكان تخزينها. بموجب قانون حماية البيانات القطري هذه مسؤوليتك أنت لا مسؤولية المزوّد، ويجب أن تُجاب كتابةً قبل التوقيع.",
          ],
        },
      ],
      table: {
        head: ["بند التكلفة", "طريقة الاحتساب", "ما الذي يغيّره"],
        rows: [
          ["البناء والتكامل", "مرة واحدة", "عدد مسارات المكالمات وأنظمة العملاء والحجز واللغات"],
          ["المنصة والاستضافة", "شهرياً", "عدد الخطوط المتزامنة والقنوات ومدة الاحتفاظ بالبيانات"],
          ["استخدام المحادثات", "بالدقيقة", "حجم المكالمات ومتوسط مدة المعالجة"],
          ["رقم الهاتف", "شهرياً", "رقم قطري محلي أو مجاني أو ربط SIP بمقسمك"],
          ["التحويل لموظف بشري", "لكل مقعد أو تحويلة", "عدد مرات تحويل الوكيل للمحادثة"],
        ],
      },
      faq: [
        {
          q: "هل الوكيل الصوتي أرخص من توظيف موظف استقبال في قطر؟",
          a: "بالنسبة للشركات ذات حجم المكالمات المرتفع خارج ساعات العمل، نعم غالباً، لأن الوكيل يغطي الليل والعطلات دون أجر إضافي. أما الشركة التي تتلقى مكالمات قليلة خلال الدوام فقد يبقى الموظف البشري الخيار الأفضل اقتصادياً.",
        },
        {
          q: "هل الدفع لكل مكالمة أم لكل دقيقة؟",
          a: "أغلب المزوّدين، ومنهم فايف نودز، يحتسبون بالدقيقة. التسعير لكل مكالمة يضرّ عادةً بالشركات التي تكون مكالماتها قصيرة بطبيعتها.",
        },
        {
          q: "هل العربية أغلى من الإنجليزية؟",
          a: "الوكلاء ثنائيو اللغة أعلى تكلفةً في البناء والضبط من الإنجليزية فقط، لأن العربية الخليجية تحتاج ضبطاً واختباراً إضافياً للنطق. أما فارق تكلفة التشغيل فأصغر بكثير من فارق تكلفة البناء.",
        },
        {
          q: "متى يسترد التكلفة؟",
          a: "الإجابة الصادقة تعتمد على عدد المكالمات التي تفوتك اليوم. إن كنت تستطيع قياس نسبة المكالمات الفائتة فالحساب مباشر، وإن لم تستطع فهذا القياس هو أول ما يجب إصلاحه.",
        },
      ],
    },
  },

  {
    slug: "whatsapp-business-api-qatar",
    updated: "2026-08-15",
    en: {
      title: "WhatsApp Business API in Qatar: how setup actually works",
      description:
        "A practical guide to getting WhatsApp Business API running for a Qatari business — verification, numbers, templates, and what trips companies up.",
      answer:
        "To use WhatsApp Business API in Qatar you need a verified Meta Business account, a phone number not already registered to a WhatsApp account, and a Business Solution Provider to host the connection. Verification against your Qatari commercial registration is the step that most often delays launch.",
      sections: [
        {
          h: "What is the difference between the app and the API?",
          p: [
            "The WhatsApp Business app is a free mobile application for a single user. It cannot be connected to a CRM, cannot be used by several agents at once, and cannot send automated replies at scale. The API has no interface at all — it is a connection your systems talk to, which is what makes automation and AI agents possible.",
            "If you currently run customer service from a phone that one employee carries, you are on the app. Every business that wants an AI agent answering WhatsApp needs the API.",
          ],
        },
        {
          h: "What do you need before you start?",
          p: [
            "A Meta Business Manager account, verified against your company's legal documents. For a Qatari company this means your commercial registration (CR) and trade licence, with the business name matching exactly.",
            "A phone number that is not currently active on any WhatsApp account — including the personal WhatsApp of whoever previously handled enquiries. This catches many businesses out, because the number they want to use is the one already in their marketing.",
            "A display name that complies with Meta's naming policy. It must relate to your registered business name; generic names are rejected.",
          ],
        },
        {
          h: "How do message templates work?",
          p: [
            "WhatsApp separates conversations you start from conversations the customer starts. If a customer messages you first, you have a 24-hour window to reply freely. Outside that window you can only send a pre-approved template.",
            "Templates must be submitted to Meta and approved before use. Approval usually takes minutes to a day. Marketing templates are held to a stricter standard than utility templates such as appointment reminders or order updates.",
            "This is why appointment reminders and booking confirmations are the highest-value first use case in Qatar: they are utility messages, they get approved easily, and they recover revenue that no-shows would otherwise cost you.",
          ],
        },
        {
          h: "What are the common mistakes?",
          p: [
            "Registering the number to the app first, then discovering it has to be released before the API can use it. Plan the number before anything else.",
            "Treating templates as a broadcast channel. Meta measures how many recipients block or report you, and a poor quality rating throttles your ability to send at all.",
            "Launching without human escalation. An AI agent that cannot hand a frustrated customer to a person will eventually cost you that customer.",
          ],
        },
      ],
      table: {
        head: ["", "WhatsApp Business app", "WhatsApp Business API"],
        rows: [
          ["Cost", "Free", "Per-conversation, via a provider"],
          ["Users", "One phone, limited linked devices", "Unlimited agents and systems"],
          ["Automation", "Quick replies only", "Full automation and AI agents"],
          ["CRM integration", "No", "Yes"],
          ["Best for", "Sole traders", "Any business with a support or sales team"],
        ],
      },
      faq: [
        {
          q: "Can I keep my existing number?",
          a: "Yes, provided you first delete the WhatsApp account currently using it. The number cannot be live on both the app and the API at the same time.",
        },
        {
          q: "How long does setup take in Qatar?",
          a: "Technical connection is fast — often the same day. Meta's business verification against your commercial registration is the variable, and is usually what determines the launch date.",
        },
        {
          q: "Does the green tick come automatically?",
          a: "No. The verified badge is a separate application judged largely on whether your brand has independent press coverage. Many legitimate businesses operate without it.",
        },
        {
          q: "Can an AI agent reply in Arabic on WhatsApp?",
          a: "Yes. WhatsApp is text-based, so an agent can read and reply in Arabic, English, or switch between them within one conversation.",
        },
      ],
    },
    ar: {
      title: "واجهة واتساب للأعمال في قطر: كيف يتم الإعداد فعلياً",
      description:
        "دليل عملي لتشغيل واجهة واتساب للأعمال لشركة قطرية — التوثيق والأرقام والقوالب وأكثر ما يعطّل الشركات.",
      answer:
        "لاستخدام واجهة واتساب للأعمال في قطر تحتاج حساب Meta Business موثّقاً، ورقم هاتف غير مسجّل على أي حساب واتساب، ومزوّد حلول أعمال يستضيف الاتصال. التوثيق مقابل السجل التجاري القطري هو الخطوة التي تؤخّر الإطلاق غالباً.",
      sections: [
        {
          h: "ما الفرق بين التطبيق والواجهة؟",
          p: [
            "تطبيق واتساب للأعمال تطبيق مجاني لمستخدم واحد، لا يمكن ربطه بنظام إدارة العملاء، ولا يستخدمه عدة موظفين في وقت واحد، ولا يرسل ردوداً آلية على نطاق واسع. أما الواجهة فلا واجهة مرئية لها أصلاً، بل هي اتصال تتحدث إليه أنظمتك، وهذا ما يجعل الأتمتة والوكلاء الأذكياء ممكنين.",
            "إن كنت تدير خدمة العملاء من هاتف يحمله موظف واحد فأنت على التطبيق. وكل شركة تريد وكيلاً ذكياً يرد على واتساب تحتاج الواجهة.",
          ],
        },
        {
          h: "ما الذي تحتاجه قبل البدء؟",
          p: [
            "حساب Meta Business Manager موثّق مقابل وثائق شركتك القانونية، وللشركة القطرية يعني ذلك السجل التجاري والرخصة التجارية مع تطابق الاسم تماماً.",
            "رقم هاتف غير مفعّل حالياً على أي حساب واتساب، بما في ذلك واتساب الشخصي لمن كان يتولى الاستفسارات سابقاً. هذه النقطة توقع كثيراً من الشركات لأن الرقم المطلوب هو ذاته المنشور في تسويقها.",
            "اسم عرض متوافق مع سياسة التسمية لدى ميتا، ويجب أن يرتبط باسم شركتك المسجّل، فالأسماء العامة تُرفض.",
          ],
        },
        {
          h: "كيف تعمل قوالب الرسائل؟",
          p: [
            "يفصل واتساب بين المحادثات التي تبدأها أنت وتلك التي يبدأها العميل. إذا راسلك العميل أولاً فأمامك نافذة ٢٤ ساعة للرد بحرية، وخارجها لا يمكنك إرسال سوى قالب معتمد مسبقاً.",
            "تُقدَّم القوالب إلى ميتا وتُعتمد قبل الاستخدام، وتستغرق الموافقة عادةً من دقائق إلى يوم. وتخضع القوالب التسويقية لمعايير أشد من القوالب الخدمية مثل تذكير المواعيد وتحديثات الطلبات.",
            "لهذا تكون تذكيرات المواعيد وتأكيدات الحجز أعلى حالات الاستخدام قيمةً في قطر: فهي رسائل خدمية تُعتمد بسهولة وتستعيد إيراداً كان سيضيع بسبب عدم الحضور.",
          ],
        },
        {
          h: "ما الأخطاء الشائعة؟",
          p: [
            "تسجيل الرقم على التطبيق أولاً ثم اكتشاف وجوب تحريره قبل استخدام الواجهة. خطّط للرقم قبل أي شيء آخر.",
            "التعامل مع القوالب كقناة بث جماعي. ميتا تقيس عدد من يحظرك أو يبلّغ عنك، وتقييم الجودة المنخفض يقيّد قدرتك على الإرسال أصلاً.",
            "الإطلاق دون تحويل للموظف البشري. الوكيل الذي لا يستطيع تحويل عميل غاضب إلى إنسان سيكلّفك ذلك العميل في النهاية.",
          ],
        },
      ],
      table: {
        head: ["", "تطبيق واتساب للأعمال", "واجهة واتساب للأعمال"],
        rows: [
          ["التكلفة", "مجاني", "حسب المحادثة عبر مزوّد"],
          ["المستخدمون", "هاتف واحد وأجهزة مرتبطة محدودة", "عدد غير محدود من الموظفين والأنظمة"],
          ["الأتمتة", "ردود سريعة فقط", "أتمتة كاملة ووكلاء أذكياء"],
          ["الربط بنظام العملاء", "لا", "نعم"],
          ["الأنسب لـ", "الأفراد وأصحاب المشاريع الصغيرة", "أي شركة لديها فريق دعم أو مبيعات"],
        ],
      },
      faq: [
        {
          q: "هل يمكنني الاحتفاظ برقمي الحالي؟",
          a: "نعم، بشرط حذف حساب واتساب الذي يستخدمه حالياً أولاً، إذ لا يمكن أن يكون الرقم فعّالاً على التطبيق والواجهة في الوقت نفسه.",
        },
        {
          q: "كم يستغرق الإعداد في قطر؟",
          a: "الربط التقني سريع وغالباً في اليوم نفسه، أما المتغيّر فهو توثيق ميتا لشركتك مقابل السجل التجاري، وهو ما يحدد عادةً تاريخ الإطلاق.",
        },
        {
          q: "هل تأتي العلامة الخضراء تلقائياً؟",
          a: "لا. الشارة الموثّقة طلب منفصل يُقيَّم أساساً بناءً على وجود تغطية صحفية مستقلة لعلامتك، وكثير من الشركات النظامية تعمل بدونها.",
        },
        {
          q: "هل يستطيع الوكيل الذكي الرد بالعربية على واتساب؟",
          a: "نعم. واتساب قائم على النص، فيستطيع الوكيل القراءة والرد بالعربية أو الإنجليزية أو التنقل بينهما داخل المحادثة الواحدة.",
        },
      ],
    },
  },

  {
    slug: "arabic-ai-voice-agents-gulf",
    updated: "2026-08-15",
    en: {
      title: "Arabic AI voice agents: what actually works in the Gulf",
      description:
        "Why Gulf Arabic is harder for voice AI than Modern Standard Arabic, how code-switching breaks most agents, and what to test before you buy.",
      answer:
        "Most Arabic voice AI is trained on Modern Standard Arabic, which almost nobody speaks on the phone in Qatar. A usable Gulf deployment has to handle Khaleeji dialect, constant Arabic-English code-switching, and Arabic numerals spoken in dialect form — and it must be tested on real recorded calls, not scripted demos.",
      sections: [
        {
          h: "Why is Gulf Arabic harder than Modern Standard Arabic?",
          p: [
            "Modern Standard Arabic is the language of news broadcasts and formal writing. It is well represented in training data, and speech models handle it comparatively well. It is also not how anyone books a clinic appointment in Doha.",
            "Khaleeji Arabic differs from MSA in vocabulary, pronunciation and sentence structure, and varies further between Qatar, the UAE and Saudi Arabia. A model that scores well on MSA benchmarks can still fail badly on a real Qatari phone call.",
          ],
        },
        {
          h: "What is code-switching and why does it break agents?",
          p: [
            "Gulf speakers routinely mix English into Arabic sentences — brand names, technical terms, numbers and days of the week especially. A single sentence may contain both languages and switch back within a few words.",
            "Many voice systems require you to declare the conversation language up front. Those systems fail the moment the caller switches, because the recogniser is locked to the wrong language model. An agent built for this market must detect and handle both languages continuously.",
          ],
        },
        {
          h: "What should you test before buying?",
          p: [
            "Insist on a test against your own recorded calls, not a scripted demo. A demo is optimised; your call recordings are the truth.",
            "Test numbers specifically. Phone numbers, prices and dates spoken in dialect are where transcription most often breaks, and they are exactly the parts of a booking that must be right.",
            "Test interruption. Real callers talk over the agent. A system that cannot handle being interrupted sounds robotic within one exchange.",
            "Test the handover. Ask what the human receives when the agent escalates — a good system passes the full transcript and context, not just a ringing phone.",
          ],
        },
      ],
      table: {
        head: ["Capability", "Why it matters in Qatar", "How to verify"],
        rows: [
          ["Khaleeji dialect handling", "MSA-only agents mishear everyday speech", "Test on your own call recordings"],
          ["Live code-switching", "Callers mix Arabic and English mid-sentence", "Speak a mixed sentence during the demo"],
          ["Dialect numerals", "Bookings depend on numbers being right", "Dictate a phone number and a price"],
          ["Barge-in / interruption", "Real callers interrupt", "Talk over the agent mid-reply"],
          ["Context-preserving handover", "Customers will not repeat themselves", "Ask to see what the human agent receives"],
        ],
      },
      faq: [
        {
          q: "Can AI handle the Qatari dialect specifically?",
          a: "Modern systems handle Khaleeji Arabic considerably better than they did even two years ago, but performance depends heavily on tuning against real local recordings rather than generic Arabic datasets.",
        },
        {
          q: "Will callers know they are speaking to AI?",
          a: "Many will, and the professional approach is to disclose it. In practice callers care far more about whether their problem gets solved quickly than about who solved it.",
        },
        {
          q: "What happens if the agent mishears something important?",
          a: "A well-built agent confirms critical details back to the caller — names, numbers, appointment times — before acting on them, in the same way a careful human receptionist does.",
        },
        {
          q: "Do we need separate agents for Arabic and English?",
          a: "No, and you should not accept that design. One agent should handle both, because splitting them means the caller has to choose a language before they have explained their problem.",
        },
      ],
    },
    ar: {
      title: "الوكلاء الصوتيون بالعربية: ما الذي ينجح فعلاً في الخليج",
      description:
        "لماذا اللهجة الخليجية أصعب على الذكاء الاصطناعي من الفصحى، وكيف يكسر التبديل بين اللغتين أغلب الوكلاء، وما الذي يجب اختباره قبل الشراء.",
      answer:
        "أغلب أنظمة الصوت العربية مدرَّبة على الفصحى، وهي لغة لا يتحدث بها أحد تقريباً على الهاتف في قطر. النشر الناجح في الخليج يجب أن يتعامل مع اللهجة الخليجية، والتنقل المستمر بين العربية والإنجليزية، والأرقام المنطوقة بالدارجة، وأن يُختبر على تسجيلات مكالمات حقيقية لا على عروض معدّة مسبقاً.",
      sections: [
        {
          h: "لماذا الخليجية أصعب من الفصحى؟",
          p: [
            "الفصحى لغة النشرات الإخبارية والكتابة الرسمية، وهي ممثَّلة جيداً في بيانات التدريب وتتعامل معها نماذج الصوت بكفاءة نسبية، لكنها ليست اللغة التي يحجز بها أحد موعداً في عيادة بالدوحة.",
            "تختلف الخليجية عن الفصحى في المفردات والنطق وبنية الجملة، وتختلف أكثر بين قطر والإمارات والسعودية. والنموذج الذي يحقق نتائج ممتازة على معايير الفصحى قد يفشل تماماً في مكالمة قطرية حقيقية.",
          ],
        },
        {
          h: "ما هو التبديل بين اللغتين ولماذا يكسر الوكلاء؟",
          p: [
            "يخلط المتحدثون في الخليج الإنجليزية داخل الجمل العربية باستمرار، خاصةً أسماء العلامات والمصطلحات التقنية والأرقام وأيام الأسبوع، وقد تحتوي الجملة الواحدة على اللغتين وتعود خلال كلمات قليلة.",
            "كثير من الأنظمة الصوتية تطلب تحديد لغة المحادثة مسبقاً، وهذه تفشل فور تبديل المتصل للغته لأن نظام التعرف يكون مقيّداً بنموذج لغوي خاطئ. والوكيل المبني لهذا السوق يجب أن يكتشف اللغتين ويتعامل معهما باستمرار.",
          ],
        },
        {
          h: "ما الذي يجب اختباره قبل الشراء؟",
          p: [
            "اشترط الاختبار على تسجيلات مكالماتك أنت لا على عرض معدّ مسبقاً، فالعرض مُحسَّن أما تسجيلاتك فهي الحقيقة.",
            "اختبر الأرقام تحديداً. أرقام الهواتف والأسعار والتواريخ المنطوقة بالدارجة هي أكثر ما يتعثر فيه التحويل النصي، وهي بالضبط أجزاء الحجز التي يجب أن تكون صحيحة.",
            "اختبر المقاطعة. المتصلون الحقيقيون يتحدثون فوق صوت الوكيل، والنظام الذي لا يحتمل المقاطعة يبدو آلياً من أول تبادل.",
            "اختبر التحويل. اسأل ماذا يصل للموظف عند التصعيد؛ النظام الجيد يمرر النص الكامل والسياق لا مجرد مكالمة ترن.",
          ],
        },
      ],
      table: {
        head: ["القدرة", "أهميتها في قطر", "كيف تتحقق منها"],
        rows: [
          ["التعامل مع اللهجة الخليجية", "الوكلاء المقتصرون على الفصحى يخطئون سماع الكلام اليومي", "اختبر على تسجيلات مكالماتك"],
          ["التبديل الحي بين اللغتين", "المتصلون يخلطون العربية والإنجليزية داخل الجملة", "انطق جملة مختلطة أثناء العرض"],
          ["الأرقام بالدارجة", "الحجوزات تعتمد على صحة الأرقام", "أملِ رقم هاتف وسعراً"],
          ["احتمال المقاطعة", "المتصلون الحقيقيون يقاطعون", "تحدث فوق صوت الوكيل أثناء رده"],
          ["تحويل يحفظ السياق", "العملاء لن يكرروا كلامهم", "اطلب رؤية ما يصل للموظف البشري"],
        ],
      },
      faq: [
        {
          q: "هل يتعامل الذكاء الاصطناعي مع اللهجة القطرية تحديداً؟",
          a: "الأنظمة الحديثة تتعامل مع الخليجية أفضل بكثير مما كانت قبل عامين، لكن الأداء يعتمد بشدة على الضبط مقابل تسجيلات محلية حقيقية لا على بيانات عربية عامة.",
        },
        {
          q: "هل سيعرف المتصل أنه يتحدث مع ذكاء اصطناعي؟",
          a: "كثيرون سيعرفون، والنهج المهني هو الإفصاح. عملياً يهتم المتصل بحل مشكلته بسرعة أكثر بكثير من اهتمامه بمن حلّها.",
        },
        {
          q: "ماذا يحدث إن أخطأ الوكيل في سماع معلومة مهمة؟",
          a: "الوكيل المبني جيداً يؤكد التفاصيل الحرجة للمتصل — الأسماء والأرقام ومواعيد الحجز — قبل التصرف بناءً عليها، تماماً كما يفعل موظف استقبال دقيق.",
        },
        {
          q: "هل نحتاج وكيلين منفصلين للعربية والإنجليزية؟",
          a: "لا، ولا ينبغي قبول هذا التصميم. يجب أن يتعامل وكيل واحد مع اللغتين، لأن الفصل بينهما يفرض على المتصل اختيار لغة قبل أن يشرح مشكلته أصلاً.",
        },
      ],
    },
  },
];

export const GUIDES = [...CORE_GUIDES, ...MORE_GUIDES];

export function getGuide(slug) {
  return GUIDES.find((g) => g.slug === slug) || null;
}
