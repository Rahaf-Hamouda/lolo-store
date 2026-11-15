export const PRODUCT_CATEGORIES = [
  'فناجين وماغات سيراميك',
  'شموع عطرية',
  'لوحات مزينة بالورد',
  'لوحات فنية',
  'باقات ورد',
  'ستاندات محابس للخطوبة',
  'تخرج ومناسبات',
];

export const ALL_FILTER = 'الكل';

export const products = [
  {
    id: 'candle-dress',
    name: 'شمعة فستان الزفاف العطرية',
    description:
      'شمعة عطرية على شكل فستان عروس منحوتة يدوياً بتفاصيل الورد البارزة، بعطر فواح يدوم طويلاً. هدية زفاف وخطوبة أنيقة.',
    image: '/assets/products/candle-dress.jpg',
    categories: ['شموع عطرية'],
    isNew: true,
  },
  {
    id: 'frame-almalik',
    name: 'لوحة اسم "المالك" بإطار وردي',
    description:
      'اسم مكتوب بخيوط مخملية فوشيا مع فراشة مطابقة، داخل إطار أبيض مزخرف بزهور وردية مرسومة ولآلؤ صغيرة.',
    image: '/assets/products/frame-almalik.jpg',
    categories: ['لوحات مزينة بالورد'],
  },
  {
    id: 'candles-flowers-box',
    name: 'طقم شموع الزهور المعطرة',
    description:
      'ثلاث شمعات عطرية على شكل أزهار دائرية بألوان أحمر وأبيض وبنفسجي، داخل علبة هدايا بيضاء بشريط فضي مشغول يدوياً.',
    image: '/assets/products/candles-flowers-box.jpg',
    categories: ['شموع عطرية'],
    isNew: true,
  },
  {
    id: 'tray-engagement',
    name: 'صينية الخطوبة الخشبية الفاخرة',
    description:
      'صينيتان خشبيتان مزخرفتان بالدانتيل الفضي واللؤلؤ، مع فناجين وأطباق مكتوبة بأسماء العروسين وعلبتي خاتم مخملية وتاريخ المناسبة.',
    image: '/assets/products/tray-engagement-1.jpg',
    images: [
      '/assets/products/tray-engagement-1.jpg',
      '/assets/products/tray-engagement-2.jpg',
    ],
    categories: ['ستاندات محابس للخطوبة'],
  },
  {
    id: 'graduation-favors',
    name: 'توزيعات التخرج بالشوكولا',
    description:
      'توزيعات تخرج على شكل خريجة بالقبعة والعباءة تحمل شوكولا مغلفة بالذهبي، قابلة للتخصيص بالاسم والتخصص.',
    image: '/assets/products/graduation-favors.jpg',
    categories: ['تخرج ومناسبات'],
  },
  {
    id: 'cup-daisy-graduation',
    name: 'فنجان دوار الشمس بعجينة السيراميك',
    description:
      'فنجان قهوة أبيض مزين بزهرة دوار الشمس بعجينة السيراميك مع طبق مطابق وقبعة تخرج ذهبية — هدية خريجين مميزة.',
    image: '/assets/products/cup-daisy-graduation.jpg',
    categories: ['فناجين وماغات سيراميك', 'تخرج ومناسبات'],
    isNew: true,
  },
  {
    id: 'cup-ahmad-red',
    name: 'فنجان "أحمد" بزهور حمراء',
    description:
      'فنجان قهوة بوجه وردي مكتوب عليه الاسم بخط عربي، مزخرف بزهور حمراء ثلاثية الأبعاد وأوراق خضراء وأحجار لامعة.',
    image: '/assets/products/cup-ahmad-red.jpg',
    categories: ['فناجين وماغات سيراميك'],
  },
  {
    id: 'crystal-champagne-set',
    name: 'طقم كاسات كريستال بحروف الراين',
    description:
      'كاسات كريستال فاخرة مزينة بأحرف الأسماء بكريستال الراين الفضي مع ربطة فيونكة سوداء — لمسة شخصية لزفافك وخطوبتك.',
    image: '/assets/products/crystal-champagne-set.jpg',
    categories: ['ستاندات محابس للخطوبة'],
  },
  {
    id: 'mug-lolo-pink',
    name: 'ماغ "لؤلؤ" الوردي',
    description:
      'ماغ أبيض بإطار وردي مموّه مكتوب عليه الاسم بخط عربي أنيق، مزخرف بزهور وردية مطرزة وكريستال ملون في الوسط.',
    image: '/assets/products/mug-lolo-pink.jpg',
    categories: ['فناجين وماغات سيراميك'],
    isNew: true,
  },
  {
    id: 'mug-thweina-blue',
    name: 'الماغ الأزرق "ثوينية"',
    description:
      'ماغ أزرق سماوي بإطار أبيض مزخرف بزهور زرقاء وفراشات بعجينة السيراميك وحجر كريستال في الوسط، مع لؤلؤ للتزيين.',
    image: '/assets/products/mug-thweina-blue.jpg',
    categories: ['فناجين وماغات سيراميك'],
  },
  {
    id: 'frame-baby-ahmad',
    name: 'لوحة مواليد "أحمد"',
    description:
      'لوحة مواليد بطابع أزرق مائي مع عربة أطفال ودب تيدي ومكعبات، الاسم مكتوب بخيوط مخملية تركواز مع تاريخ الميلاد.',
    image: '/assets/products/frame-baby-ahmad.jpg',
    categories: ['لوحات فنية'],
  },
  {
    id: 'frame-lana-flowers',
    name: 'لوحة "لنا" بالورد والفراشات',
    description:
      'اسم بخيوط فوشيا ناعمة داخل إطار من أزهار الكرز الوردية وفراشات مطبوعة وخرز لؤلؤ — لوحة رقيقة لغرف البنات.',
    image: '/assets/products/frame-lana-flowers.jpg',
    categories: ['لوحات مزينة بالورد'],
  },
  {
    id: 'frame-certificate',
    name: 'شهادة التخرج المؤطرة',
    description:
      'شهادة تخرج أنيقة داخل إطار أسود مع قبعة تخرج وعبارة تحفيزية بالإنجليزية واسم الخريج مكتوب بخط عربي فاخر.',
    image: '/assets/products/frame-certificate.jpg',
    categories: ['لوحات فنية', 'تخرج ومناسبات'],
  },
  {
    id: 'frame-light-salma',
    name: 'اللوحة المضيئة "سلمى"',
    description:
      'لوحة اسم بإضاءة LED دافئة محيطة مع فراشة وردية ولآلؤ، يضيء الاسم بخيوط وردية لامعة في الظلام — ديكور وهدية معاً.',
    image: '/assets/products/frame-light-salma.jpg',
    categories: ['لوحات فنية'],
    isNew: true,
  },
  {
    id: 'frame-amina-graduation',
    name: 'لوحة تخرج "المهندسة أمينة"',
    description:
      'لوحة تخرج بإطار أسود أنيق مع قبعة التخرج وعبارة تحفيزية وتاريخ التخرج وتخصيص كامل بالاسم واللقب — هدية خريجين راقية.',
    image: '/assets/products/frame-amina-graduation.jpg',
    categories: ['لوحات فنية', 'تخرج ومناسبات'],
  },
  {
    id: 'frame-aya-flowers',
    name: 'لوحة "آية" بإطار أزهار الكرز',
    description:
      'اسم بخيوط وردية عميقة داخل إطار من أزهار الكرز والفراشات الوردية مع آية دعائية وتاريخ ميلاد — هدية ميلاد مثالية.',
    image: '/assets/products/frame-aya-flowers.jpg',
    categories: ['لوحات مزينة بالورد'],
  },
  {
    id: 'frame-malaq-ameena',
    name: 'لوحة "ملاك وأمينة" الخطية',
    description:
      'لوحة أسماء بخط عربي فاخر داخل إطار بنفسجي مزخرف بالورود مع آية قرآنية وتخطيط ذهبي — تحفة فنية لصالونك.',
    image: '/assets/products/frame-malaq-ameena.jpg',
    categories: ['لوحات مزينة بالورد'],
  },
  {
    id: 'bouquet-daisy-bag',
    name: 'باقة دوار الشمس مع كيس هدايا',
    description:
      'باقة أزهار دوار الشمس البيضاء بقلب أصفر داخل لفافة تول مطرزة باللؤلؤ، مع كيس هدايا كرافت أنيق — جاهزة للإهداء فوراً.',
    image: '/assets/products/bouquet-daisy-bag.jpg',
    categories: ['باقات ورد'],
    isNew: true,
  },
  {
    id: 'bouquet-lily',
    name: 'باقة الزنابق الوردية',
    description:
      'باقة زنابق وردية وبيضاء ناعمة داخل لفافة تول بيضاء حوافها مطرزة باللؤلؤ، مع كيس مطرز بإتقان — أناقة تدوم.',
    image: '/assets/products/bouquet-lily.jpg',
    categories: ['باقات ورد'],
  },
  {
    id: 'bouquet-tulip-engineer',
    name: 'باقة التوليب الأبيض "حبيبة المهندس"',
    description:
      'باقة توليب أبيض نقي داخل كيس هدايا مزخرف بحواف لؤلؤية مع بطاقة مخصصة "حبيبة المهندس" — مفاجأة تليق بالمناسبة.',
    image: '/assets/products/bouquet-tulip-engineer.jpg',
    categories: ['باقات ورد'],
  },
  {
    id: 'bouquet-tulip-bride',
    name: 'باقة التوليب "العروس غزالة"',
    description:
      'باقة توليب أبيض مع بطاقة مخصصة "العروس غزالة" برسمة ظبي وملصقات لؤلؤية — هدية عرس رقيقة تُصنع بحب.',
    image: '/assets/products/bouquet-tulip-bride.jpg',
    categories: ['باقات ورد'],
  },
  {
    id: 'ring-stand-mirror',
    name: 'ستاند محابس المرايا المضيء',
    description:
      'ستاند خطوبة بمرآة دائرية محاطة بإضاءة ليد وبطاقة "اللهم بارك لهما" مع علبتَي خواتم بيضاويتين — يجمع بين المرايا والديكور.',
    image: '/assets/products/ring-stand-mirror.jpg',
    categories: ['ستاندات محابس للخطوبة'],
    isNew: true,
  },
];

export function filterProductsByCategory(category) {
  if (category === ALL_FILTER) return products;
  return products.filter((product) => product.categories.includes(category));
}
