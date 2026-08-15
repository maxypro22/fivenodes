import PageHeader from "@/components/PageHeader";
import SmartImg from "@/components/SmartImg";

import { pageMeta } from "@/components/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "آخر أخبار الذكاء الاصطناعي — قطر | فايف نودز",
  description:
    "تابع آخر أخبار وتطورات الذكاء الاصطناعي. مقدمة من فايف نودز للذكاء الاصطناعي في قطر.",
  path: "/news",
  ogTitle: "آخر أخبار الذكاء الاصطناعي — قطر | فايف نودز",
  ogDescription: "أحدث أخبار الذكاء الاصطناعي من أهم المصادر العالمية للشركات في قطر.",
  locale: "ar",
});

// AR news curated on fivenodes.ai/ar/news — [title, source, date, excerpt, image]
const NEWS_ITEMS = [
  ["فصل الإشارة عن الضوضاء في تقييمات البرمجة", "OpenAI Blog", "٨ يوليو ٢٠٢٦", "تدرس OpenAI مشكلات الموثوقية في معيار SWE-Bench Pro للبرمجة المستخدم لتقييم نماذج الذكاء الاصطناعي، لفصل الإشارة المفيدة عن الضوضاء.", ""],
  ["يمكنك الآن تنبيه عن الذكاء الاصطناعي الذي يتصرف بشكل سيء", "Wired AI", "١ يوليو ٢٠٢٦", "يوفر موقع ويب جديد للمستخدمين إمكانية الإبلاغ عن روبوتات الدردشة الذكية التي قد تتصرف بشكل خطير أو غير أخلاقي.", "https://media.wired.com/photos/6a42d38427caad328b221827/master/pass/AI-Lab-Ring-Alarm-on-AI-Business.jpg"],
  ["أنتروبك تضيف تدبير أمان جديد لاستعادة ثقة إدارة ترامب", "Wired AI", "١ يوليو ٢٠٢٦", "تم رفع القيود عن نماذج الذكاء الاصطناعي Fable 5 وMythos 5 من قبل الحكومة، ولكن مع وجود شروط معينة.", "https://media.wired.com/photos/6a443961a0cfe1ef1ae6c3aa/master/pass/politics_anthropic_trump.jpg"],
  ["كلود ساعد هاكر في العثور على طريقة لإصدار تذاكر لكل مهرجان موسيقي أمريكي", "Wired AI", "١ يوليو ٢٠٢٦", "اكتشف باحث أنه باستخدام كلود أوبوس 4.7 من أنتروبك، يمكنه اختراق موقع Front Gate وإصدار أي تذكرة يختارها.", "https://media.wired.com/photos/6a43054548c440f683e2b417/master/pass/AI-Found-Way-to-Hack-Ticketing-System-Security.jpg"],
  ["كلود ساينس هو أحدث منتج رئيسي لشركة أنثروبيك", "MIT Tech Review", "٣٠ يونيو ٢٠٢٦", "أطلقت شركة أنثروبيك كلود ساينس، وهو منتج جديد مصمم لتعزيز البحث العلمي، مشابه لكيفية مساعدة كلود كود في هندسة البرمجيات.", ""],
  ["ظهور طبقة بنية البيانات على الويب للذكاء الاصطناعي", "MIT Tech Review", "٢٤ يونيو ٢٠٢٦", "يعد ظهور طبقة بنية البيانات على الويب للذكاء الاصطناعي أمرًا حيويًا حيث تحتاج الشركات إلى بيانات قابلة للتوسع للاستفادة من إمكانيات الذكاء الاصطناعي، مع معالجة التحديات المتعلقة بالمعلومات غير المنظمة.", ""],
  ["الآلة بقيمة 400 مليون دولار التي تدعم مستقبل صناعة الرقائق", "MIT Tech Review", "٢٣ يونيو ٢٠٢٦", "تقدم المقالة نظرة مفصلة على آلة جديدة لصناعة الرقائق بقيمة 400 مليون دولار، والتي تعتبر حاسمة لإنتاج أشباه الموصلات في المستقبل.", ""],
  ["ثلاثة أشياء يجب مراقبتها وسط خلاف أنثروبيك الأخير مع الحكومة", "MIT Tech Review", "٢٢ يونيو ٢٠٢٦", "تتناول المقالة الصراع المستمر بين أنثروبيك والحكومة الأمريكية، مع تسليط الضوء على التطورات الرئيسية في مبادراتهم المتعلقة بالذكاء الاصطناعي والتحديات التنظيمية.", ""],
  ["أتلانتيك أنشأت قاعدة بيانات قابلة للبحث عن الموسيقى المستخدمة لتدريب الذكاء الاصطناعي", "The Verge AI", "٢٠ يونيو ٢٠٢٦", "طوّرت أتلانتيك قاعدة بيانات قابلة للبحث توفر الوصول إلى أربعة مجموعات موسيقية ضخمة تُستخدم لتدريب نماذج الذكاء الاصطناعي، بما في ذلك مجموعتين ضخمتين تحتويان على 12 مليون و9 ملايين مقطع موسيقي.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/01/STK467_AI_MUSIC_CVirginia_B.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["فيلم عن سام ألتمان تم إلغاؤه من قبل أمازون MGM", "The Verge AI", "١٩ يونيو ٢٠٢٦", "تم إلغاء فيلم 'Artificial' الذي يركز على الرئيس التنفيذي لشركة OpenAI سام ألتمان وأيامه المضطربة في عام 2023 من قبل أمازون MGM. كان الفيلم قيد التطوير لمدة عام تقريبًا ويضم أندرو غارفيلد.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/STK201_SAM_ALTMAN_CVIRGINIA2D_717b98.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["بارت زوف يغادر OpenAI مرة أخرى بعد خمسة أشهر فقط", "The Verge AI", "١٩ يونيو ٢٠٢٦", "غادر بارت زوف OpenAI مرة أخرى بعد خمسة أشهر فقط، بعد أن عاد إلى الشركة كرئيس لمبيعات الذكاء الاصطناعي في الشركات. تأتي مغادرته بعد فترة قصيرة من العمل كأحد مؤسسي ومدير التكنولوجيا في شركة ذكاء اصطناعي منافسة.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/STK155_OPEN_AI_CVirginia_C.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["من يقرر متى تصبح الذكاء الاصطناعي خطيرًا جدًا؟", "The Verge AI", "١٨ يونيو ٢٠٢٦", "في حلقة حديثة من برنامج Decoder، يناقش مراسل الذكاء الاصطناعي هايدن فيلد تعقيدات تحديد متى تصبح تقنيات الذكاء الاصطناعي خطيرة جدًا، مشيرًا إلى أحداث حديثة تتعلق بشركة Anthropic.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/DCD_0617_Fable5.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["فوتوشوب وبريمير الآن لديهما مساعدين ذكاء اصطناعي", "The Verge AI", "١٨ يونيو ٢٠٢٦", "أطلقت أدوبي مساعدين ذكاء اصطناعي في مجموعة Creative Cloud الخاصة بها، بما في ذلك فوتوشوب وبريمير، مما يعزز تجربة المستخدم مع روبوتات الدردشة الجديدة.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/Adobe-Photoshop-AI-assistant-hero.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["استوديو الذكاء الاصطناعي المعاد تصميمه من أدوبي يتذكر كيف تبدو إبداعاتك", "The Verge AI", "١٨ يونيو ٢٠٢٦", "تم إعادة تصميم مساعد الذكاء الاصطناعي Firefly من أدوبي لتقديم ميزات جديدة، مما يسمح للمستخدمين بتحرير وتوليد تصميمات مع سياق دائم وأصول قابلة لإعادة الاستخدام.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/Adobe-Firefly-AI-studio-updates-lede.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["Midjourney تنتقل من توليد صور القطط إلى مسح بالموجات فوق الصوتية للجسم بالكامل", "The Verge AI", "١٨ يونيو ٢٠٢٦", "قدمت Midjourney منتجها الأول من الأجهزة، وهو جهاز مسح بالموجات فوق الصوتية للجسم بالكامل، مما يمثل تحولًا كبيرًا عن تركيزها السابق على توليد الصور.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/ultrasound_phantom_segmentation-b254a71d083eb5c9.png?quality=90&amp;amp;strip=all&amp;amp;crop=28.441715022566,0,70.316569954868,100"],
  ["هل يمكن لأي شخص أن يبدو رائعًا أثناء ارتداء نظارات Snap التي تبلغ قيمتها 2000 دولار؟", "The Verge AI", "١٧ يونيو ٢٠٢٦", "أطلقت Snap نظارات Specs الجديدة التي تبلغ قيمتها 2195 دولارًا، والتي تهدف إلى دمج الحوسبة في الحياة اليومية، على الرغم من التساؤلات حول عمليتها وجاذبيتها.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/image-3-1.png?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C3.4892491027825%2C100%2C93.021501794435&amp;amp;w=1200"],
  ["ثلثا الأمريكيين يعتقدون أن الذكاء الاصطناعي يتقدم بسرعة كبيرة", "The Verge AI", "١٧ يونيو ٢٠٢٦", "تشير استطلاعات الرأي الأخيرة من بيو إلى أنه بينما يستخدم 49٪ من الأمريكيين روبوتات الدردشة، يعتقد 63٪ أن تكنولوجيا الذكاء الاصطناعي تتقدم بسرعة كبيرة.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/04/STK_414_AI_J-copy.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["جوجل تطلق أول مكبر صوت ذكي جديد منذ ست سنوات", "The Verge AI", "١٧ يونيو ٢٠٢٦", "تستعد جوجل لإصدار أول مكبر صوت ذكي جديد لها منذ ست سنوات، مع فتح الطلبات المسبقة الآن.", "https://platform.theverge.com/wp-content/uploads/sites/2/2025/10/IMG_0204.jpeg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C15.095986038394%2C100%2C69.808027923211&amp;amp;w=1200"],
  ["الروبوتات البشرية القادمة قد لا تبدو بشرية على الإطلاق", "The Verge AI", "١٧ يونيو ٢٠٢٦", "تقدم Genesis AI نوعًا جديدًا من الروبوتات البشرية التي قد لا تشبه البشر على الإطلاق، مع التركيز على الوظائف بدلاً من المظهر.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/Genesis-Eno-Home-Pebble-Beach-CA-06062026-Pouring.png?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.761594140703%2C100%2C78.476811718594&amp;amp;w=1200"],
  ["هل يمكن أن يكون البحث الذكي من Meta موثوقًا؟", "The Verge AI", "١٦ يونيو ٢٠٢٦", "تهدف وضعية الذكاء الاصطناعي الجديدة من Meta في البحث إلى تحسين اقتراحات الأنشطة في عطلة نهاية الأسبوع لكنها تعاني من مشاكل في الدقة.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/DSC03787_processed.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.723165084465%2C100%2C78.55366983107&amp;amp;w=1200"],
  ["شائعات آبل 2027: AirPods بكاميرات للذكاء الاصطناعي وآيفون قابل للطي الثاني", "The Verge AI", "١٦ يونيو ٢٠٢٦", "تشير الشائعات إلى أن آبل تخطط لإصدار AirPods بكاميرات مصممة لوظائف الذكاء الاصطناعي، جنبًا إلى جنب مع آيفون قابل للطي الثاني، المتوقع إطلاقه في أواخر عام 2027.", "https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/257943_Airpods_Pro3_AKrales_0078.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["رقاقة كوالكوم الجديدة تشير إلى أن نظارات ذكية أكثر قوة قد تكون في الطريق", "The Verge AI", "١٦ يونيو ٢٠٢٦", "كشفت كوالكوم عن رقاقة جديدة، Snapdragon Reality Elite، والتي من المتوقع أن تعزز قدرات النظارات الذكية وأجهزة XR الأخرى.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/snapdragonreality.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0,3.4613147178592,100,93.077370564282"],
  ["سبيس إكس تشتري Cursor رسميًا مقابل 60 مليار دولار", "The Verge AI", "١٦ يونيو ٢٠٢٦", "تقوم سبيس إكس بشراء Cursor مقابل 60 مليار دولار في خطوة تهدف إلى تعزيز قدراتها في الذكاء الاصطناعي ووسائل التواصل الاجتماعي لجذب العملاء من الشركات والتنافس مع المنافسين في مجال الذكاء الاصطناعي مثل Anthropic وOpenAI.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/STKB355_SPACEX_E.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["داخل الصراع حول كلود ميثوس 5", "The Verge AI", "١٦ يونيو ٢٠٢٦", "تواجه شركة أنثروبيك تحديات مع إدارة ترامب بشأن إصدار نموذجها الأخير، ميثوس 5، في ظل احتفالات وطنية.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/STKS515_CYBER_WARFARE2_D.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["وضع الذكاء الاصطناعي الجديد من فيسبوك", "The Verge AI", "١٥ يونيو ٢٠٢٦", "تقدم ميتا وضع الذكاء الاصطناعي الجديد للبحث على فيسبوك الذي يستخدم المنشورات العامة لتعزيز النتائج المولدة بواسطة الذكاء الاصطناعي.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/videoframe_7395.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C11.992407477375%2C100%2C76.015185045249&amp;amp;w=1200"],
  ["إغلاق أنثروبيك المفاجئ يعزز الحاجة إلى الذكاء الاصطناعي غير الأمريكي", "The Verge AI", "١٥ يونيو ٢٠٢٦", "قرار أنثروبيك بإيقاف نماذج الذكاء الاصطناعي الخاصة بها بناءً على طلب البيت الأبيض يثير مخاوف بشأن مستقبل الذكاء الاصطناعي الأمريكي.", "https://platform.theverge.com/wp-content/uploads/sites/2/2025/04/VRG_Illo_STK175_L_Normand_DonaldTrump_Negative.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["بحث الأمن السيبراني من أمازون يقود إلى حظر فابل من أنثروبيك", "The Verge AI", "١٣ يونيو ٢٠٢٦", "يقال إن بحث أمازون في الأمن السيبراني أثر على قرار البيت الأبيض بحظر فابل 5 وميثوس 5 من أنثروبيك، كما أفادت صحيفة وول ستريت جورنال.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/01/STK269_ANTHROPIC_2_A.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["أنثروبيك توقف الوصول إلى Fable 5 و Mythos 5 بعد أمر حكومي", "The Verge AI", "١٣ يونيو ٢٠٢٦", "تم إصدار أمر من الحكومة لشركة أنثروبيك بحظر الوصول إلى نماذج الذكاء الاصطناعي الخاصة بها، Fable 5 و Mythos 5، لأسباب تتعلق بالأمن القومي.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/01/STK269_ANTHROPIC_2_D.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["أدوات تحرير الصور بالذكاء الاصطناعي الجديدة من آبل تعمل بشكل جيد، للأفضل والأسوأ", "The Verge AI", "١٢ يونيو ٢٠٢٦", "قدمت آبل أدوات تحرير الصور الجديدة بالذكاء الاصطناعي في iOS 27، مما يعزز قدرات كاميرتها الشهيرة ولكنه لا يزال يتخلف عن المنافسين.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/DSC03778_processed.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.723165084465%2C100%2C78.55366983107&amp;amp;w=1200"],
  ["هل أصبحت سيري جيدة الآن؟", "The Verge AI", "١٢ يونيو ٢٠٢٦", "أصدرت شركة آبل إصدارًا جديدًا من سيري، والذي يظهر تحسينات كبيرة في وظيفته، حيث انتقل من كونه مفيدًا إلى حد ما إلى كونه أكثر موثوقية.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/VST_0612_Site.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["إيلون ماسك هو أول تريليونير في العالم", "The Verge AI", "١٢ يونيو ٢٠٢٦", "أصبح إيلون ماسك أول تريليونير في العالم بعد طرح شركة سبيس إكس للاكتتاب العام، مما زاد بشكل كبير من ثروته من مشاريع مختلفة بما في ذلك تسلا.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/STKE012_SPACEX_IPO_2026_D.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["الاكتتاب العام الضخم لشركة سبيس إكس: كل الأخبار الأخيرة", "The Verge AI", "١٢ يونيو ٢٠٢٦", "يتيح الاكتتاب العام لشركة سبيس إكس الاستثمار العام في مشاريعها المشتركة من الصواريخ والذكاء الاصطناعي ووسائل التواصل الاجتماعي، مما قد يجعل إيلون ماسك أول تريليونير.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/06/STKE012_SPACEX_IPO_2026_A.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["شركة جيف بيزوس للذكاء الاصطناعي تهدف إلى بناء 'مهندس عام اصطناعي'", "The Verge AI", "١٢ يونيو ٢٠٢٦", "تهدف شركة جيف بيزوس الجديدة للذكاء الاصطناعي، بروميثيوس، إلى تطوير 'مهندس عام اصطناعي' لمساعدة في تصميم المنتجات باستخدام أدوات هندسية مدعومة بالذكاء الاصطناعي.", "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23951505/VRG_Illo_STK173_L_Normand_JeffBezos_Positive.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["مهندس سابق في xAI يقاضي الشركة بسبب مخاوف تتعلق بسلامة الذكاء الاصطناعي", "TechCrunch AI", "١٠ يونيو ٢٠٢٦", "يقاضي مهندس سابق في xAI الشركة بسبب إنهاء خدماته بشكل غير قانوني فيما يتعلق بمخاوف سلامة الذكاء الاصطناعي حول Grok.", "https://techcrunch.com/wp-content/uploads/2026/03/grok-getty.jpg?resize=1200,800"],
  ["أمازون تقترض 17.5 مليار دولار من البنوك مع استمرار الإنفاق على الذكاء الاصطناعي", "TechCrunch AI", "١٠ يونيو ٢٠٢٦", "تقترض أمازون 17.5 مليار دولار من البنوك لدعم استثماراتها المستمرة في الذكاء الاصطناعي في ظل ارتفاع مستويات الدين.", "https://techcrunch.com/wp-content/uploads/2025/06/GettyImages-2217247219.jpg?w=1024"],
  ["الشركات التي تستثمر في الذكاء الاصطناعي تنفق 7500 دولار شهريًا لكل موظف", "TechCrunch AI", "١٠ يونيو ٢٠٢٦", "تشير الشركات التي تستثمر بشكل كبير في الذكاء الاصطناعي إلى إنفاق حوالي 7500 دولار شهريًا لكل موظف، مما يدل على التزام كبير بدمج الذكاء الاصطناعي.", "https://techcrunch.com/wp-content/uploads/2026/06/GettyImages-2253659638.jpg?resize=1200,1057"],
  ["كيف أنشأ وكيل معرض ثلاثي الأبعاد في باريس من خلال ربط مساحتين من Hugging Face", "Hugging Face Blog", "٩ يونيو ٢٠٢٦", "أنشأ وكيل ذكاء اصطناعي معرضًا ثلاثي الأبعاد لباريس من خلال دمج مساحتين من Hugging Face، مما يبرز قدرات الذكاء الاصطناعي في التطبيقات الإبداعية.", "https://cdn-uploads.huggingface.co/production/uploads/60a551a34ecc5d054c8ad93e/0tamlKpAvO3lZEklNmwHT.png"],
  ["ما الذي يفتحه Codex لـ Notion", "OpenAI Blog", "٩ يونيو ٢٠٢٦", "تستخدم Notion Codex لتبسيط إنشاء المواصفات، وتنفيذ إدخال الصوت بالذكاء الاصطناعي على الويب، وزيادة إنتاجية فرق الهندسة الصغيرة.", ""],
  ["هل تجعلنا روبوتات الدردشة تفقد السيطرة على عقولنا؟", "MIT Tech Review", "٥ يونيو ٢٠٢٦", "في SXSW لندن، كانت النقاشات تدور حول تأثير روبوتات الدردشة الذكية على الإدراك البشري، مع تقديم رؤى من عالمة النفس غلوريا مارك حول التفاعلات الرقمية.", ""],
  ["اختراق ميتا يظهر أن هناك المزيد من أمان الذكاء الاصطناعي من الأساطير", "MIT Tech Review", "٥ يونيو ٢٠٢٦", "يكشف التقرير أن المهاجمين استغلوا وكيل دعم العملاء الذكي من ميتا للحصول على وصول غير مصرح به إلى حسابات إنستغرام، مما يثير القلق بشأن تدابير أمان الذكاء الاصطناعي.", ""],
  ["وافقت الصين على أول شريحة دماغية غازية في العالم - إليك ما هو التالي", "MIT Tech Review", "١ يونيو ٢٠٢٦", "تناقش هذه المقالة تداعيات موافقة الصين على أول شريحة دماغية غازية في العالم، مما يظهر إمكانياتها في مساعدة الأفراد ذوي الإعاقات الشديدة.", ""],
  ["OpenAI تعطي GPT-5.5 Instant ترقية في قابلية القراءة مع إنهاء نموذجين قديمين", "The Decoder", "٢٩ مايو ٢٠٢٦", "تقوم OpenAI بتحديث GPT-5.5 Instant لتوفير استجابات أكثر طبيعية وإيقاف ميزات Canvas من نماذجها الأخيرة. ستتم معالجة مهام الكتابة والترميز مباشرة في الدردشة.", "https://the-decoder.com/wp-content/uploads/2026/04/openai_logo_orange.png"],
  ["جوجل تصلح عدة أخطاء في حدود استخدام Gemini التي استهلكت الحصص بسرعة", "The Decoder", "٢٩ مايو ٢٠٢٦", "أصلحت جوجل خطأ في تطبيق Gemini تسبب في استهلاك حصص الفيديو بسرعة. الآن يحصل الأعضاء المتميزون على عدد أكبر من توليد الفيديو.", "https://the-decoder.com/wp-content/uploads/2026/04/google_gemini_optical_trick.png"],
  ["شركة تنفق 500 مليون دولار على ترخيص Claude في شهر واحد بعد فشلها في تحديد حدود استخدام الذكاء الاصطناعي", "The Decoder", "٢٩ مايو ٢٠٢٦", "تدعي شركة مجهولة أنها أنفقت نصف مليار دولار على تراخيص Claude في شهر واحد بسبب عدم تحديد حدود الاستخدام. هذه الحالات تظهر أهمية الخبرة في الذكاء الاصطناعي.", "https://the-decoder.com/wp-content/uploads/2024/05/money_server_room.png"],
  ["OpenAI تقدم نموذج الذكاء الاصطناعي لعلوم الحياة لمساعدة الحكومات في الاستعداد للجائحة", "The Decoder", "٢٩ مايو ٢٠٢٦", "تقدم OpenAI نموذجها للعلوم الحياتية GPT-Rosalind مجانًا من خلال برنامج Rosalind Biodefense، الذي يهدف إلى الاستعداد للجائحة والدفاع البيولوجي.", "https://the-decoder.com/wp-content/uploads/2026/04/openai_gpt_rosalind_bio-1200x670.png"],
  ["مطور يتسلل إلى كود البيانات باستخدام تقنية حقن الأوامر", "Ars Technica", "٢٨ مايو ٢٠٢٦", "قام مطور بإدخال تقنية حقن الأوامر في كوده لمواجهة تأثير 'مؤسسي الأجواء' الذين يفضلون الجوانب الجمالية على الوظائف.", "https://cdn.arstechnica.net/wp-content/uploads/2026/01/coding_robots_agents-500x500.jpg"],
  ["يوتيوب يضع علامات الذكاء الاصطناعي حيث سترى ذلك بالفعل", "The Verge AI", "٢٧ مايو ٢٠٢٦", "يعمل يوتيوب على تحسين نظام وضع علامات الذكاء الاصطناعي من خلال نقل إعلانات الذكاء الاصطناعي إلى مناطق أكثر وضوحًا في الفيديوهات، مما يسهل على المشاهدين التعرف على المحتوى الذي تم إنشاؤه بواسطة الذكاء الاصطناعي.", "https://platform.theverge.com/wp-content/uploads/sites/2/2026/05/YouTube-updated-AI-labels.jpg?quality=90&amp;amp;strip=all&amp;amp;crop=0%2C10.732984293194%2C100%2C78.534031413613&amp;amp;w=1200"],
  ["أحدث نموذج ذكاء اصطناعي من علي بابا يعمل بشكل مستقل لمدة 35 ساعة لتحسين الشيفرة لرقاقة مخصصة", "The Decoder", "٢٣ مايو ٢٠٢٦", "أطلق فريق Qwen من علي بابا نموذج Qwen3.7-Max، وهو نموذج ذكاء اصطناعي قام بتحسين الشيفرة لرقاقته المخصصة بشكل مستقل لمدة 35 ساعة، مما يظهر قدراته مقارنة بالمنافسين.", "http://the-decoder.com/wp-content/uploads/2026/05/qwen-3-7-max-vln-agent.mp4"],
  ["أنتروبيك تحذر من أن نموذج Claude Mythos Preview يجد الأخطاء بسرعة أكبر من قدرة المطورين على تصحيحها", "The Decoder", "٢٣ مايو ٢٠٢٦", "حذر نموذج الذكاء الاصطناعي من أنتروبيك، Claude Mythos Preview، من أنه حدد أكثر من 10,000 ثغرة حرجة في البرمجيات، متفوقًا على قدرة المطورين على معالجتها.", ""],
  ["طفرة الذكاء الاصطناعي في الخليج تواجه مشكلة الكابلات البحرية", "Wired AI", "٢٢ مايو ٢٠٢٦", "تدفع طفرة الذكاء الاصطناعي في الخليج إلى إعادة تقييم بنية الإنترنت التحتية، خاصة فيما يتعلق بضعف الكابلات البحرية.", "https://media.wired.com/photos/6a0f1eac22b304758d42f327/master/pass/6a0ecc1805928bccd6b0e6c5_UnderwaterCables_Lead_autoxauto.0000001.jpg"],
];

// Real destination URLs, in the same order as NEWS_ITEMS above.
const NEWS_URLS = [
  "https://openai.com/index/separating-signal-from-noise-coding-evaluations",
  "https://www.wired.com/story/flare-website-ai-flaw-reporting-safety/",
  "https://www.wired.com/story/anthropic-added-a-new-security-measure-to-get-back-into-the-trump-administrations-good-graces/",
  "https://www.wired.com/story/claude-helped-a-hacker-find-a-way-to-issue-tickets-to-almost-every-us-music-festival/",
  "https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/",
  "https://www.technologyreview.com/2026/06/24/1139202/the-emergence-of-the-web-data-infrastructure-layer-for-ai/",
  "https://www.technologyreview.com/2026/06/23/1138837/asml-400-million-dollar-machine-powering-future-of-chipmaking/",
  "https://www.technologyreview.com/2026/06/22/1139424/three-things-to-watch-amid-anthropics-latest-feud-with-the-government/",
  "https://www.theverge.com/ai-artificial-intelligence/953183/the-atlantic-searchable-database-music-ai-training-data",
  "https://www.theverge.com/ai-artificial-intelligence/952906/sam-altman-film-artificial-openai-amazon-mgm-dropped",
  "https://www.theverge.com/ai-artificial-intelligence/952837/barret-zoph-openai-thinking-machines-lab",
  "https://www.theverge.com/podcast/951542/anthropic-claude-fable-5-mythos-ban-pentagon-ai-regulation-trump",
  "https://www.theverge.com/tech/952099/adobe-ai-assistants-photoshop-premiere-illustrator-beta-launch",
  "https://www.theverge.com/tech/952104/adobe-firefly-ai-agent-elements-projects-update",
  "https://www.theverge.com/ai-artificial-intelligence/952011/midjourney-medical-ai-ultrasound-scan",
  "https://www.theverge.com/report/951481/snap-specs-wearables-smart-glasses-fashion",
  "https://www.theverge.com/ai-artificial-intelligence/951653/pew-research-ai-chatbot-usage-advancing-too-quickly",
  "https://www.theverge.com/tech/951147/google-home-speaker-gemini-launch-date-price-specs-features",
  "https://www.theverge.com/ai-artificial-intelligence/951283/genesis-ai-humanoid-robot-eno",
  "https://www.theverge.com/ai-artificial-intelligence/951099/meta-ai-mode-search-hands-on",
  "https://www.theverge.com/tech/950826/apple-airpod-camera-ai-foldable-iphone-rumor",
  "https://www.theverge.com/gadgets/950229/qualcomm-snapdragon-reality-elite-xr-smart-glasses-wearables",
  "https://www.theverge.com/ai-artificial-intelligence/950571/spacex-is-officially-buying-cursor-for-60-billion",
  "https://www.theverge.com/ai-artificial-intelligence/950412/anthropic-trump-adminstration-claude-mythos-fable-5-export-controls",
  "https://www.theverge.com/tech/950264/meta-ai-mode-search-facebook",
  "https://www.theverge.com/ai-artificial-intelligence/949986/anthropic-fable-mythos-shutdown-sovereign-ai",
  "https://www.theverge.com/ai-artificial-intelligence/949601/amazon-anthropic-fablemythos-government-ban",
  "https://www.theverge.com/ai-artificial-intelligence/949553/anthropic-fable-5-mythos-5-government-national-security",
  "https://www.theverge.com/tech/949360/apple-ai-photo-edit-reframe-extend-clean-up-hands-on",
  "https://www.theverge.com/podcast/949079/siri-ai-good-vergecast",
  "https://www.theverge.com/ai-artificial-intelligence/948409/elon-musk-trillionaire-spacex-ipo",
  "https://www.theverge.com/business/948996/spacex-ipo-elon-musk",
  "https://www.theverge.com/ai-artificial-intelligence/949005/jeff-bezos-prometheus-artificial-general-engineer",
  "https://techcrunch.com/2026/06/10/xai-fired-an-engineer-who-raised-alarms-about-grok-safety-new-lawsuit-claims/",
  "https://techcrunch.com/2026/06/10/fresh-off-bond-sale-amazon-borrows-17-5-billion-from-banks-as-ai-spending-continues/",
  "https://techcrunch.com/2026/06/10/ai-pilled-firms-spend-7500-per-employee-each-month-on-ai/",
  "https://huggingface.co/blog/mishig/spaces-agents-md",
  "https://openai.com/index/notion",
  "https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/",
  "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/",
  "https://www.technologyreview.com/2026/06/01/1138133/china-world-first-brain-chip/",
  "https://the-decoder.com/openai-gives-gpt-5-5-instant-a-readability-upgrade-while-phasing-out-two-older-models/",
  "https://the-decoder.com/google-fixes-several-bugs-in-gemini-usage-limits-that-burned-through-quotas-too-fast/",
  "https://the-decoder.com/one-company-reportedly-spent-500-million-on-claude-in-one-month-after-failing-to-cap-ai-usage/",
  "https://the-decoder.com/openai-is-giving-away-its-life-sciences-ai-model-to-help-governments-prepare-for-the-next-pandemic/",
  "https://arstechnica.com/security/2026/05/fed-up-with-vibe-coders-dev-sneaks-data-nuking-prompt-injection-into-their-code/",
  "https://www.theverge.com/streaming/937915/youtube-ai-labels-shorts-automatic-identification-updates",
  "https://the-decoder.com/alibabas-latest-ai-model-ran-autonomously-for-35-hours-to-optimize-code-for-its-own-custom-chip/",
  "https://the-decoder.com/anthropic-warns-claude-mythos-preview-finds-bugs-faster-than-developers-can-patch-them/",
  "https://www.wired.com/story/the-gulfs-ai-boom-has-an-undersea-cable-problem/",
];

const SOURCE_COLORS = {
  "MIT Tech Review": "bg-[#fde8e8] text-[#c0392b]",
  "The Verge AI": "bg-[#efe6fd] text-[#7c3aed]",
  "TechCrunch AI": "bg-[#e5f6ea] text-[#15803d]",
  "The Decoder": "bg-[#e8eefe] text-[#2563eb]",
  "Wired AI": "bg-[#e9edf6] text-[#0f1629]",
  "Ars Technica": "bg-[#fdeede] text-[#c2620f]",
  "Hugging Face Blog": "bg-[#fef3d7] text-[#b45309]",
  "OpenAI Blog": "bg-[#e2f4f0] text-[#0e7c66]",
};

export default function NewsPageAr() {
  return (
    <main dir="rtl">
      <JsonLd path="/news" locale="ar" />
      <PageHeader eyebrow="الأخبار" title="آخر أخبار الذكاء الاصطناعي — قطر">
        آخر التطورات والاختراقات والإعلانات في عالم الذكاء الاصطناعي — مختارة من أفضل المصادر.
      </PageHeader>

      <section className="pb-24">
        <div className="wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {NEWS_ITEMS.map(([title, source, date, excerpt, image], i) => (
            <a
              key={i}
              href={NEWS_URLS[i]}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal d${(i % 3) + 1} group bg-surface border border-line rounded-[18px] overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-primary flex flex-col`}
            >
              {/* thumbnail */}
              <div className="relative h-44 bg-gradient-to-br from-[#dbe4ff] to-[#eef2ff] overflow-hidden grid place-items-center">
                {image ? (
                  <SmartImg
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={title}
                    src={image}
                    fallback={`https://picsum.photos/seed/fn-news-${i}/600/340`}
                  />
                ) : (
                  <span className="font-heading font-extrabold text-primary/40 text-3xl">5N</span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    SOURCE_COLORS[source] || "bg-line-soft text-ink-2"
                  }`}
                >
                  {source}
                </span>
                <span className="text-[12px] text-muted-2">{date}</span>
              </div>
              <h3 className="font-heading font-bold text-[16px] text-ink mt-4 leading-snug group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.6] mt-2 flex-1">{excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary mt-4 group-hover:gap-2.5 transition-all">
                اقرأ المقال كاملاً
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 rotate-180">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              </div>
            </a>
          ))}
        </div>

        <p className="wrap text-[13px] text-muted-2 leading-[1.7] mt-14 text-center max-w-[860px]">
          إخلاء مسؤولية: المقالات الإخبارية المدرجة في هذه الصفحة مصدرها منشورات خارجية ولا تمثل آراء
          أو وجهات نظر فايف نودز للذكاء الاصطناعي. جميع المحتويات تعود لأصحابها الأصليين ومرتبطة
          بمصادرها الأصلية.
        </p>
      </section>
    </main>
  );
}
