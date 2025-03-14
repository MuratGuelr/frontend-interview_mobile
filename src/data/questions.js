// Kategori sabitleri
export const CATEGORIES = {
  ALL: "all",
  HTML: "html",
  CSS: "css",
  JAVASCRIPT: "javascript",
  REACT: "react",
};

// Kategori isimleri
export const CATEGORY_NAMES = {
  [CATEGORIES.ALL]: "Tüm Konular",
  [CATEGORIES.HTML]: "HTML",
  [CATEGORIES.CSS]: "CSS",
  [CATEGORIES.JAVASCRIPT]: "JavaScript",
  [CATEGORIES.REACT]: "React",
};

export const DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

export const questions = [
  {
    id: 1,
    category: "html",
    difficulty: DIFFICULTY.EASY,
    question: "HTML nedir ve ne işe yarar?",
    answer:
      "HTML, web sayfalarının yapısını ve içeriğini tanımlayan bir işaretleme dilidir.",
    options: [
      "Dinamik web uygulamaları geliştirmek için kullanılan bir programlama dilidir",
      "Web sayfalarının yapısını ve içeriğini tanımlayan bir işaretleme dilidir",
      "Veritabanı sorgularını yönetmek için kullanılan bir sorgu dilidir",
      "Web sayfalarının stilini düzenleyen bir tasarım teknolojisidir",
    ],
    correctOption: 1,
  },
  {
    id: 2,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML5'in öne çıkan özellikleri nelerdir?",
    answer:
      "HTML5, multimedya desteği, semantik etiketler ve gelişmiş depolama özellikleri sunar.",
    options: [
      "Sadece metin tabanlı içerik desteği ve basit form yapıları sunar",
      "Yapay zeka entegrasyonu ve blockchain teknolojileri içerir",
      "Multimedya desteği, semantik etiketler ve gelişmiş depolama özellikleri sunar",
      "Sadece mobil cihazlar için optimize edilmiş özel etiketler barındırır",
    ],
    correctOption: 2,
  },
  {
    id: 3,
    category: "css",
    difficulty: DIFFICULTY.EASY,
    question: "CSS nedir ve ne işe yarar?",
    answer:
      "CSS, web sayfalarının görsel tasarımını ve düzenini kontrol eden bir stil dilidir.",
    options: [
      "Web sayfalarında kullanıcı etkileşimlerini yöneten bir script dilidir",
      "Sunucu tarafında veri işleme yapan bir programlama dilidir",
      "Web sayfalarının görsel tasarımını kontrol eden bir stil dilidir",
      "Web tarayıcıları arasında veri transferi sağlayan bir protokoldür",
    ],
    correctOption: 2,
  },
  {
    id: 4,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "CSS seçicileri nelerdir ve nasıl kullanılır?",
    answer:
      "CSS seçicileri, HTML elementlerini hedefleyerek stil uygulamaya yarayan kod parçalarıdır.",
    options: [
      "Sadece sayfadaki resimleri seçmek için kullanılan özel kodlardır",
      "JavaScript fonksiyonlarını tetikleyen olay dinleyicileridir",
      "HTML elementlerini hedefleyen ve stil uygulamaya yarayan seçicilerdir",
      "Veritabanından veri çekmek için kullanılan sorgu yapılarıdır",
    ],
    correctOption: 2,
  },
  {
    id: 5,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "JavaScript nedir ve ne işe yarar?",
    answer:
      "JavaScript, web sayfalarını dinamik ve etkileşimli hale getiren bir programlama dilidir.",
    options: [
      "Web sunucularında çalışan bir veritabanı yönetim sistemidir",
      "Web sayfalarını dinamik ve etkileşimli hale getiren bir dildir",
      "Sadece web sayfalarının stilini düzenleyen bir teknolojidir",
      "Statik web sayfaları oluşturmak için kullanılan bir araçtır",
    ],
    correctOption: 1,
  },
  {
    id: 6,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te asenkron programlama nedir?",
    answer:
      "Asenkron programlama, işlemlerin eşzamanlı olmayan bir şekilde yürütülmesini sağlayan bir programlama yaklaşımıdır.",
    options: [
      "Kodun her zaman sıralı şekilde çalıştırılmasını sağlayan bir tekniktir",
      "Sadece hata ayıklama için kullanılan özel bir programlama yöntemidir",
      "İşlemlerin eşzamanlı olmayan şekilde yürütülmesini sağlayan bir yaklaşımdır",
      "Yalnızca sunucu tarafında kullanılan bir programlama modelidir",
    ],
    correctOption: 2,
  },
  {
    id: 7,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React nedir ve ne işe yarar?",
    answer:
      "React, kullanıcı arayüzü oluşturmak için kullanılan bileşen tabanlı bir JavaScript kütüphanesidir.",
    options: [
      "Sunucu tarafı routing işlemleri için kullanılan bir framework'tür",
      "Veritabanı yönetimi için kullanılan bir JavaScript aracıdır",
      "Kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesidir",
      "CSS stillerini yönetmek için kullanılan bir önişlemci sistemidir",
    ],
    correctOption: 2,
  },
  {
    id: 8,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te state ve props arasındaki fark nedir?",
    answer:
      "State bileşen içinde değiştirilebilir veriyi, props ise dışarıdan alınan salt okunur veriyi temsil eder.",
    options: [
      "İkisi de bileşen içinde değiştirilebilir veri türleridir",
      "State dışarıdan gelir, props içeride değişir",
      "State içeride değişir, props dışarıdan gelir ve değişmez",
      "İkisi de sadece sayısal değerler tutabilen veri tipleridir",
    ],
    correctOption: 2,
  },
  {
    id: 9,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML ve XHTML arasındaki farklar nelerdir?",
    answer:
      "HTML daha esnek kuralları olan bir dil iken, XHTML daha katı kurallara sahip XML tabanlı bir dildir.",
    options: [
      "XHTML daha eski, HTML daha yeni bir teknolojidir",
      "HTML katı kurallı, XHTML esnek kurallı bir dildir",
      "HTML esnek kurallı, XHTML katı kurallı bir dildir",
      "İkisi de tamamen aynı kurallara sahip dillerdir",
    ],
    correctOption: 2,
  },
  {
    id: 10,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML semantik elemanları nelerdir ve neden önemlidirler?",
    answer:
      "Semantik elemanlar içeriğin anlamını tanımlayan ve SEO için önemli olan özel HTML etiketleridir.",
    options: [
      "Sadece görsel düzen için kullanılan stil etiketleridir",
      "İçeriğin anlamını tanımlayan ve SEO için önemli olan etiketlerdir",
      "Yalnızca JavaScript kodlarını çalıştıran özel etiketlerdir",
      "Sadece form verilerini işleyen özel giriş alanlarıdır",
    ],
    correctOption: 1,
  },
  {
    id: 11,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question:
      "CSS'te inline, internal ve external stil tanımları arasındaki farklar nelerdir?",
    answer:
      "Stillerin tanımlanma lokasyonunu ve öncelik sırasını belirleyen farklı CSS kullanım yöntemleridir.",
    options: [
      "Sadece sayfa yüklenme hızını etkileyen farklı kod yazım stilleridir",
      "Yalnızca mobil cihazlar için kullanılan özel CSS teknikleridir",
      "Farklı tarayıcılar için kullanılan alternatif stil tanımlama yöntemleridir",
      "Stillerin tanımlanma lokasyonunu ve önceliğini belirleyen yöntemlerdir",
    ],
    correctOption: 3,
  },
  {
    id: 12,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Grid ve Flexbox arasındaki farklar nelerdir?",
    answer:
      "Grid iki boyutlu, Flexbox tek boyutlu düzen sistemleridir ve farklı kullanım amaçları vardır.",
    options: [
      "İkisi de yalnızca tek boyutlu düzen sistemleridir",
      "Grid tek boyutlu, Flexbox iki boyutlu bir sistemdir",
      "Grid iki boyutlu, Flexbox tek boyutlu bir sistemdir",
      "İkisi de sadece dikey hizalama için kullanılır",
    ],
    correctOption: 2,
  },
  {
    id: 13,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Closure (Kapanış) nedir ve nasıl çalışır?",
    answer:
      "Closure, bir fonksiyonun kendi kapsamı dışındaki değişkenlere erişebilme özelliğidir.",
    options: [
      "Sadece global değişkenleri kullanan özel fonksiyonlardır",
      "Fonksiyonların kendi kapsamı dışındaki değişkenlere erişme özelliğidir",
      "Yalnızca döngülerde kullanılan özel bir yapıdır",
      "Objelerin özelliklerini gizlemek için kullanılan bir tekniktir",
    ],
    correctOption: 1,
  },
  {
    id: 14,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Promise nedir ve nasıl kullanılır?",
    answer:
      "Promise, asenkron işlemleri yönetmek için kullanılan ve işlemin durumunu temsil eden bir JavaScript objesidir.",
    options: [
      "Senkron işlemleri yönetmek için kullanılan bir döngü yapısıdır",
      "Sadece hata yakalama için kullanılan bir mekanizmadır",
      "Asenkron işlemleri yönetmek için kullanılan özel bir objedir",
      "Veritabanı sorgularını yönetmek için kullanılan bir araçtır",
    ],
    correctOption: 2,
  },
  {
    id: 15,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React Context API nedir ve ne işe yarar?",
    answer:
      "Context API, prop drilling olmadan bileşenler arası veri paylaşımını sağlayan bir React özelliğidir.",
    options: [
      "Yalnızca stil değişikliklerini yönetmek için kullanılan bir sistemdir",
      "Bileşenler arası doğrudan veri paylaşımını sağlayan bir özelliktir",
      "Sadece form verilerini yönetmek için kullanılan bir yapıdır",
      "React uygulamalarında routing işlemlerini yöneten bir sistemdir",
    ],
    correctOption: 1,
  },
  {
    id: 16,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React Hooks nedir ve neden kullanılır?",
    answer:
      "React Hooks, fonksiyonel bileşenlerde state ve yaşam döngüsü özelliklerini kullanmayı sağlar.",
    options: [
      "Fonksiyonel bileşenlerde state ve lifecycle özelliklerini kullanmayı sağlar",
      "Sadece class componentlerde kullanılan özel metodlardır",
      "React uygulamalarında sayfa yönlendirmesi yapmak için kullanılır",
      "Component stillerini yönetmek için kullanılan özel fonksiyonlardır",
    ],
    correctOption: 0,
  },
  {
    id: 17,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML validasyonu neden önemlidir?",
    answer:
      "HTML validasyonu, web sayfalarının standartlara uygunluğunu ve tarayıcı uyumluluğunu sağlar.",
    options: [
      "Sadece sayfanın görsel tasarımını iyileştirmek için gereklidir",
      "Yalnızca arama motoru optimizasyonu için önemlidir",
      "Web sayfasının yüklenme hızını artırmak için kullanılır",
      "Standartlara uygunluk ve tarayıcı uyumluluğu için önemlidir",
    ],
    correctOption: 3,
  },
  {
    id: 18,
    category: "html",
    difficulty: DIFFICULTY.EASY,
    question: "DOCTYPE nedir ve ne işe yarar?",
    answer:
      "DOCTYPE, tarayıcıya hangi HTML sürümünün kullanıldığını bildiren bir tanımlamadır.",
    options: [
      "Tarayıcıya HTML sürümünü bildiren bir tanımlamadır",
      "Sayfanın karakter kodlamasını belirleyen bir etikettir",
      "JavaScript kodlarını çalıştırmak için kullanılan bir yapıdır",
      "CSS stillerini tanımlamak için kullanılan bir özelliktir",
    ],
    correctOption: 0,
  },
  {
    id: 19,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "data- öznitelikleri nedir ve ne amaçla kullanılır?",
    answer:
      "HTML elementlerine özel veri eklemek ve bu verilere JavaScript ile erişmek için kullanılır.",
    options: [
      "Sadece elementlerin görünümünü düzenlemek için kullanılır",
      "HTML elementlerine özel veri eklemek için kullanılır",
      "Yalnızca form validasyonu için kullanılan özelliklerdir",
      "Sayfanın SEO değerini artırmak için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 20,
    category: "html",
    difficulty: DIFFICULTY.EASY,
    question: "alt özniteliği nedir ve neden önemlidir?",
    answer:
      "Görüntüler için alternatif metin sağlar ve erişilebilirlik için önemlidir.",
    options: [
      "Resimlerin boyutunu belirlemek için kullanılır",
      "Sadece resim dosyasının konumunu belirtir",
      "Görüntüler için alternatif metin sağlar",
      "Resimlerin yüklenme sırasını belirler",
    ],
    correctOption: 2,
  },
  {
    id: 21,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS öncelik kuralları nasıl belirlenir?",
    answer:
      "Seçicilerin özgüllüğü, önem sırası ve kaynak sırası ile belirlenir.",
    options: [
      "Seçicilerin özgüllüğü, önem ve kaynak sırası ile belirlenir",
      "Sadece CSS dosyasındaki sıraya göre belirlenir",
      "Yalnızca seçicilerin uzunluğuna göre belirlenir",
      "Tarayıcı tarafından rastgele belirlenir",
    ],
    correctOption: 0,
  },
  {
    id: 22,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "CSS önişlemcileri nedir ve neden kullanılır?",
    answer:
      "CSS yazımını daha verimli ve modüler hale getiren araçlardır (Sass, Less gibi).",
    options: [
      "CSS kodunu minify eden araçlardır",
      "CSS yazımını daha verimli ve modüler hale getiren araçlardır",
      "Sadece tarayıcı uyumluluğu için kullanılır",
      "JavaScript kodunu CSS'e dönüştüren sistemlerdir",
    ],
    correctOption: 1,
  },
  {
    id: 23,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "Box model nedir ve bileşenleri nelerdir?",
    answer:
      "İçerik, padding, border ve margin'den oluşan element boyutlandırma modelidir.",
    options: [
      "Sadece margin ve padding değerlerinden oluşur",
      "Yalnızca elementlerin genişlik ve yüksekliğini belirler",
      "İçerik, padding, border ve margin'den oluşan modeldir",
      "CSS Grid sisteminin alternatif adıdır",
    ],
    correctOption: 2,
  },
  {
    id: 24,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "Float ve clear özellikleri ne işe yarar?",
    answer:
      "Float elementlerin sayfa düzeninde konumlandırılmasını, clear ise float etkisini kontrol eder.",
    options: [
      "Elementlerin konumlandırılmasını ve float etkisini kontrol eder",
      "Sadece metin hizalama için kullanılır",
      "Elementlerin görünürlüğünü kontrol eder",
      "Animasyon efektleri oluşturmak için kullanılır",
    ],
    correctOption: 0,
  },
  {
    id: 25,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "Media queries ne işe yarar?",
    answer:
      "Farklı ekran boyutları ve cihazlar için özel stil tanımlamaları yapmayı sağlar.",
    options: [
      "Sadece masaüstü bilgisayarlar için stil tanımlar",
      "Farklı ekran boyutları için özel stiller tanımlar",
      "Yalnızca mobil cihazlar için kullanılır",
      "Sadece yazı tiplerini kontrol eder",
    ],
    correctOption: 1,
  },
  {
    id: 26,
    category: "javascript",
    difficulty: DIFFICULTY.EASY,
    question: "JavaScript'te değişken tanımlama yöntemleri nelerdir?",
    answer: "var, let ve const anahtar kelimeleri ile değişken tanımlanır.",
    options: [
      "Sadece var kullanılarak tanımlanır",
      "var, let ve const ile tanımlanır",
      "Yalnızca const ile tanımlanır",
      "Değişken tanımlamaya gerek yoktur",
    ],
    correctOption: 1,
  },
  {
    id: 27,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "JavaScript'teki temel veri tipleri nelerdir?",
    answer:
      "String, number, boolean, null, undefined, symbol ve object temel veri tipleridir.",
    options: [
      "Sadece string ve number vardır",
      "Tüm değişkenler object tipindedir",
      "String, number, boolean, null, undefined, symbol, object",
      "Yalnızca array ve object vardır",
    ],
    correctOption: 2,
  },
  {
    id: 28,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "JavaScript'te koşullu ifadeler nasıl kullanılır?",
    answer:
      "if, else if, else ve switch yapıları ile koşullu ifadeler oluşturulur.",
    options: [
      "Sadece if-else kullanılabilir",
      "if, else if, else ve switch yapıları kullanılır",
      "Yalnızca switch-case kullanılır",
      "JavaScript'te koşul yapıları yoktur",
    ],
    correctOption: 1,
  },
  {
    id: 29,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "Event handling nedir ve nasıl yapılır?",
    answer:
      "Kullanıcı etkileşimlerini yakalamak ve işlemek için event listener'lar kullanılır.",
    options: [
      "Sadece click olayları için kullanılır",
      "Kullanıcı etkileşimlerini yakalamak için event listener'lar kullanılır",
      "Yalnızca form submit işlemleri için gereklidir",
      "JavaScript'te event handling yapılamaz",
    ],
    correctOption: 1,
  },
  {
    id: 30,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "DOM manipülasyonu nedir ve nasıl yapılır?",
    answer:
      "DOM API'si kullanılarak HTML elementlerine erişilir ve değişiklikler yapılır.",
    options: [
      "HTML dosyasını doğrudan düzenleyerek yapılır",
      "Yalnızca CSS kullanılarak gerçekleştirilir",
      "DOM API'si kullanılarak HTML elementleri üzerinde değişiklik yapılır",
      "Sadece console komutları ile yönetilir",
    ],
    correctOption: 2,
  },
  {
    id: 31,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React'te bileşenler arası veri aktarımı nasıl yapılır?",
    answer:
      "Props ve Context API kullanılarak bileşenler arası veri aktarımı sağlanır.",
    options: [
      "Sadece global değişkenler kullanılarak",
      "Yalnızca state yönetimi ile",
      "Props ve Context API mekanizmaları ile",
      "Doğrudan DOM manipülasyonu ile",
    ],
    correctOption: 2,
  },
  {
    id: 32,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React'te conditional rendering nasıl yapılır?",
    answer:
      "Koşullu operatörler ve JSX içinde mantıksal ifadeler kullanılarak yapılır.",
    options: [
      "Sadece if-else blokları kullanılarak",
      "Koşullu operatörler ve JSX mantıksal ifadeleri ile",
      "Yalnızca switch-case yapısı ile",
      "HTML'in kendi koşul yapıları ile",
    ],
    correctOption: 1,
  },
  {
    id: 33,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React'te liste render etme nasıl yapılır?",
    answer:
      "map() metodu kullanılarak array elemanları üzerinde döngü oluşturulur.",
    options: [
      "for döngüsü kullanılarak",
      "while döngüsü ile",
      "map() metodu kullanılarak",
      "forEach() metodu ile",
    ],
    correctOption: 2,
  },
  {
    id: 34,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te form yönetimi nasıl yapılır?",
    answer:
      "Controlled components ve state yönetimi kullanılarak form verileri kontrol edilir.",
    options: [
      "Yalnızca HTML form özellikleri ile",
      "Controlled components ve state yönetimi ile",
      "Sadece uncontrolled components ile",
      "Form verilerini direkt DOM'dan alarak",
    ],
    correctOption: 1,
  },
  {
    id: 35,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Callback fonksiyonları ne amaçla kullanılır?",
    answer:
      "Asenkron işlemleri yönetmek ve kod modülerliğini sağlamak için kullanılır.",
    options: [
      "Yalnızca döngüler için",
      "Sadece hata yakalama amacıyla",
      "Asenkron işlemleri yönetmek ve modülerlik için",
      "Senkron işlemleri yavaşlatmak için",
    ],
    correctOption: 2,
  },
  {
    id: 36,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Promise yapısı ne işe yarar?",
    answer:
      "Asenkron işlemleri daha düzenli ve yönetilebilir hale getirmek için kullanılır.",
    options: [
      "Senkron kod yazmak için",
      "Asenkron işlemleri yönetmek için",
      "Sadece hata ayıklamak için",
      "Değişken tanımlamak için",
    ],
    correctOption: 1,
  },
  {
    id: 37,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Async/Await yapısı nedir?",
    answer:
      "Promise tabanlı asenkron işlemleri daha okunabilir hale getiren modern bir yaklaşımdır.",
    options: [
      "Senkron programlama yöntemidir",
      "Sadece hata yakalama mekanizmasıdır",
      "Promise tabanlı asenkron işlemleri kolaylaştıran modern yapıdır",
      "Veritabanı işlemlerini yönetme yöntemidir",
    ],
    correctOption: 2,
  },
  {
    id: 38,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "JavaScript modülleri nasıl kullanılır?",
    answer:
      "import ve export ifadeleriyle kod parçaları modüler hale getirilir.",
    options: [
      "Sadece HTML linkler ile",
      "import ve export ifadeleri kullanılarak",
      "Yalnızca global değişkenler ile",
      "require() fonksiyonu ile",
    ],
    correctOption: 1,
  },
  {
    id: 39,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "JavaScript'te hata yönetimi nasıl yapılır?",
    answer:
      "try-catch blokları ve throw ifadesi kullanılarak hatalar yönetilir.",
    options: [
      "Sadece if-else ile",
      "console.log kullanarak",
      "try-catch blokları ve throw ifadesi ile",
      "Hataları görmezden gelerek",
    ],
    correctOption: 2,
  },
  {
    id: 40,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "AJAX nedir ve nasıl kullanılır?",
    answer:
      "Sayfa yenilemeden sunucu ile veri alışverişi yapmayı sağlayan tekniktir.",
    options: [
      "Sayfa tasarımı için kullanılan bir stildir",
      "Sunucu ile asenkron veri alışverişi yapma tekniğidir",
      "JavaScript framework'üdür",
      "Veritabanı yönetim sistemidir",
    ],
    correctOption: 1,
  },
  {
    id: 41,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "Error Boundary'ler ne işe yarar?",
    answer:
      "React uygulamalarında hataları yakalayıp yöneten özel bileşenlerdir.",
    options: [
      "Performans optimizasyonu yapar",
      "Sayfa yönlendirmesi sağlar",
      "Hataları yakalayıp yöneten özel bileşenlerdir",
      "Stil tanımlamaları içerir",
    ],
    correctOption: 2,
  },
  {
    id: 42,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "Controlled vs Uncontrolled Components nedir?",
    answer: "Form verilerinin React veya DOM tarafından yönetilme şeklidir.",
    options: [
      "Performans optimizasyon teknikleridir",
      "Form verilerinin yönetim şekilleridir",
      "Routing yöntemleridir",
      "State yönetim araçlarıdır",
    ],
    correctOption: 1,
  },
  {
    id: 43,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Web Workers ne işe yarar?",
    answer:
      "Arka planda çalışan ve ana thread'i bloklamayan işlemler oluşturur.",
    options: [
      "Sayfa stillerini yönetir",
      "DOM manipülasyonu yapar",
      "Arka planda paralel işlemler çalıştırır",
      "Sunucu bağlantılarını yönetir",
    ],
    correctOption: 2,
  },
  {
    id: 44,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Debounce ve Throttle farkı nedir?",
    answer:
      "Fonksiyon çağrılarını farklı stratejilerle sınırlandıran optimizasyon teknikleridir.",
    options: [
      "Sayfa yükleme teknikleridir",
      "Event yönetim stratejileridir",
      "Fonksiyon çağrılarını optimize eden tekniklerdir",
      "Veri depolama yöntemleridir",
    ],
    correctOption: 2,
  },
  {
    id: 45,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "will-change özelliği ne işe yarar?",
    answer:
      "Tarayıcıya gelecek animasyon ve değişiklikleri önceden bildirerek optimizasyon sağlar.",
    options: [
      "Sadece renk değişimlerini yönetir",
      "Element boyutlarını ayarlar",
      "Tarayıcı optimizasyonu için değişiklikleri önceden bildirir",
      "Font stillerini değiştirir",
    ],
    correctOption: 2,
  },
  {
    id: 46,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Containment nedir?",
    answer:
      "Sayfa render performansını artırmak için DOM alt ağaçlarını izole eder.",
    options: [
      "Elementleri gruplandırır",
      "Sayfa performansını artırmak için izolasyon sağlar",
      "Stil tanımlarını birleştirir",
      "Responsive tasarım sağlar",
    ],
    correctOption: 1,
  },
  {
    id: 47,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question:
      "HTML form elemanlarını sıralayın ve her birinin amacını açıklayın.",
    answer:
      "Form elemanları kullanıcıdan veri almak için kullanılan özel HTML etiketleridir.",
    options: [
      "Sadece metin girişi için kullanılan basit kutulardır",
      "Kullanıcıdan çeşitli türlerde veri almak için kullanılan etkileşimli elemanlardır",
      "Yalnızca sayfa düzeni oluşturmak için kullanılan yapısal elemanlardır",
      "Sadece görsel içerik göstermek için kullanılan medya elemanlarıdır",
    ],
    correctOption: 1,
  },
  {
    id: 48,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "CSS animasyonları nasıl oluşturulur?",
    answer:
      "CSS animasyonları @keyframes ve animation özellikleri kullanılarak oluşturulur.",
    options: [
      "Sadece JavaScript kullanılarak yapılabilir",
      "@keyframes ve animation özellikleri kullanılarak oluşturulur",
      "Yalnızca GIF dosyaları ile sağlanabilir",
      "Sadece video dosyaları ile mümkündür",
    ],
    correctOption: 1,
  },
  {
    id: 49,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "CSS'te z-index özelliği ne işe yarar?",
    answer:
      "z-index, elementlerin üst üste binme durumlarında hangi elementin üstte görüneceğini belirler.",
    options: [
      "Sadece yatay hizalamayı kontrol eder",
      "Elementlerin üst üste binme sırasını kontrol eder",
      "Yalnızca dikey hizalamayı kontrol eder",
      "Sadece element boyutlarını belirler",
    ],
    correctOption: 1,
  },
  {
    id: 50,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS'te BEM metodolojisi nedir?",
    answer:
      "BEM, CSS sınıflarını yapılandırmak için kullanılan bir adlandırma konvansiyonudur.",
    options: [
      "Sadece JavaScript kodlama standartlarıdır",
      "CSS sınıflarını yapılandırmak için kullanılan bir metodolojidir",
      "Yalnızca HTML etiket düzeni için kullanılır",
      "Bir veritabanı tasarım yaklaşımıdır",
    ],
    correctOption: 1,
  },
  {
    id: 51,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te 'prototype' nedir?",
    answer: "Prototype, nesneler arasında kalıtım sağlayan bir mekanizmadır.",
    options: [
      "Sadece değişken tanımlama yöntemidir",
      "Nesneler arası kalıtım sağlayan bir mekanizmadır",
      "Yalnızca döngü oluşturma yöntemidir",
      "Bir hata ayıklama aracıdır",
    ],
    correctOption: 1,
  },
  {
    id: 52,
    category: "javascript",
    difficulty: DIFFICULTY.MEDIUM,
    question: "JavaScript'te 'strict mode' nedir?",
    answer:
      "Strict mode, JavaScript kodunun daha sıkı kurallara göre çalışmasını sağlayan bir çalışma modudur.",
    options: [
      "Sadece performans optimizasyonu yapar",
      "Daha sıkı kurallara göre kod çalıştırmayı sağlayan bir moddur",
      "Yalnızca hata ayıklama modudur",
      "Bir kod formatlama aracıdır",
    ],
    correctOption: 1,
  },
  {
    id: 53,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React'te 'key' prop'u neden önemlidir?",
    answer:
      "Key prop'u, liste öğelerinin benzersiz tanımlanmasını ve verimli güncellenmesini sağlar.",
    options: [
      "Sadece stil tanımlamak için kullanılır",
      "Liste öğelerinin benzersiz tanımlanması ve verimli güncellenmesi için kullanılır",
      "Yalnızca event handling için gereklidir",
      "Bir routing mekanizmasıdır",
    ],
    correctOption: 1,
  },
  {
    id: 54,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question:
      "React'te 'useCallback' ve 'useMemo' hooks'ları arasındaki fark nedir?",
    answer:
      "useCallback fonksiyonları, useMemo değerleri önbelleğe alır ve performans optimizasyonu sağlar.",
    options: [
      "İkisi tamamen aynı işlevi görür",
      "useCallback fonksiyonları, useMemo değerleri önbelleğe alır",
      "Sadece state yönetimi yaparlar",
      "Yalnızca efekt yönetimi için kullanılırlar",
    ],
    correctOption: 1,
  },
  {
    id: 55,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te 'useEffect' hook'u ne işe yarar?",
    answer:
      "useEffect, bileşenlerde yan etkileri yönetmek için kullanılan bir hook'tur.",
    options: [
      "Sadece state güncellemesi yapar",
      "Bileşenlerde yan etkileri yönetmek için kullanılır",
      "Yalnızca prop değişimlerini izler",
      "Bir routing mekanizmasıdır",
    ],
    correctOption: 1,
  },
  {
    id: 56,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te performans optimizasyonu nasıl yapılır?",
    answer:
      "React.memo, useMemo, useCallback ve diğer optimizasyon teknikleri kullanılarak yapılır.",
    options: [
      "Sadece kod miktarını azaltarak",
      "Memo, useMemo, useCallback ve diğer optimizasyon teknikleriyle",
      "Yalnızca CSS dosyalarını küçülterek",
      "Sadece resimleri sıkıştırarak",
    ],
    correctOption: 1,
  },
  {
    id: 57,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Higher Order Components (HOC) nedir?",
    answer:
      "HOC'lar, bileşenleri sarmalayarak onlara ek özellikler ekleyen fonksiyonlardır.",
    options: [
      "Sadece stil tanımları içeren bileşenlerdir",
      "Bileşenleri sarmalayarak özellik ekleyen fonksiyonlardır",
      "Yalnızca veri depolama araçlarıdır",
      "Routing için kullanılan yapılardır",
    ],
    correctOption: 1,
  },
  {
    id: 58,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Temporal Dead Zone (TDZ) nedir?",
    answer:
      "let ve const değişkenlerinin tanımlandıkları satırdan önce erişilemez oldukları bölgedir.",
    options: [
      "Değişkenlerin silindiği alan",
      "Global scope alanı",
      "let ve const değişkenlerinin erişilemez olduğu bölge",
      "Fonksiyonların çalışmadığı alan",
    ],
    correctOption: 2,
  },
  {
    id: 59,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Event Loop nasıl çalışır?",
    answer:
      "Call stack, callback queue ve microtask queue arasında işlemleri koordine eden bir mekanizmadır.",
    options: [
      "Sadece senkron işlemleri yönetir",
      "Yalnızca DOM olaylarını işler",
      "Call stack ve kuyruklar arasında işlemleri koordine eder",
      "Sadece setTimeout işlemlerini yönetir",
    ],
    correctOption: 2,
  },
  {
    id: 60,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Memory Leak nasıl önlenir?",
    answer:
      "Gereksiz referansları temizleyerek ve uygun memory yönetimi yaparak önlenir.",
    options: [
      "Daha fazla RAM ekleyerek",
      "Gereksiz referansları temizleyerek ve uygun memory yönetimi yaparak",
      "Tüm değişkenleri global tanımlayarak",
      "Tarayıcıyı sürekli yenileyerek",
    ],
    correctOption: 1,
  },
  {
    id: 61,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS'te performans optimizasyonu nasıl yapılır?",
    answer:
      "Seçici optimizasyonu, critical CSS ve bundle optimizasyonu gibi teknikler kullanılır.",
    options: [
      "Sadece resimleri küçülterek",
      "Tüm stilleri inline yazarak",
      "Seçici optimizasyonu, critical CSS ve bundle optimizasyonu ile",
      "Tüm CSS'i tek dosyada birleştirerek",
    ],
    correctOption: 2,
  },
  {
    id: 62,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS'te Stacking Context nedir?",
    answer:
      "Elementlerin z-ekseni üzerindeki render hiyerarşisini belirleyen yapıdır.",
    options: [
      "Sadece position özelliğidir",
      "Display özelliğinin bir değeridir",
      "Elementlerin z-ekseni üzerindeki render hiyerarşisidir",
      "Margin collapsing durumudur",
    ],
    correctOption: 2,
  },
  {
    id: 63,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML'de SEO optimizasyonu nasıl yapılır?",
    answer:
      "Semantic HTML, meta etiketleri ve performans optimizasyonu kullanılarak yapılır.",
    options: [
      "Sadece meta keywords kullanarak",
      "Semantic HTML, meta etiketleri ve performans optimizasyonu ile",
      "Tüm metinleri bold yaparak",
      "CSS kullanarak",
    ],
    correctOption: 1,
  },
  {
    id: 64,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "localStorage ve sessionStorage arasındaki fark nedir?",
    answer:
      "localStorage süresiz, sessionStorage oturum süresince veri saklar.",
    options: [
      "İkisi de aynı şekilde çalışır",
      "localStorage süresiz, sessionStorage oturum bazlı veri saklar",
      "localStorage daha az veri saklar",
      "sessionStorage daha güvenlidir",
    ],
    correctOption: 1,
  },
  {
    id: 65,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Error Boundary'lerin kullanım amacı nedir?",
    answer:
      "Component ağacındaki hataları yakalayıp uygun şekilde işlemek için kullanılır.",
    options: [
      "Sadece performans optimizasyonu için",
      "Yalnızca API hatalarını yakalamak için",
      "Component ağacındaki hataları yakalayıp işlemek için",
      "State yönetimi için",
    ],
    correctOption: 2,
  },
  {
    id: 66,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Pure Component'lerin avantajı nedir?",
    answer: "Gereksiz render'ları önleyerek performans optimizasyonu sağlar.",
    options: [
      "Daha az kod yazmayı sağlar",
      "Daha hızlı yüklenir",
      "Gereksiz render'ları önleyerek performans optimizasyonu sağlar",
      "Daha az bellek kullanır",
    ],
    correctOption: 2,
  },
  {
    id: 67,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Web Workers'ların kullanım amaçları nelerdir?",
    answer:
      "Ağır işlemleri arka planda çalıştırarak UI'ın bloklanmasını önler.",
    options: [
      "Sadece veri depolamak için",
      "DOM manipülasyonu yapmak için",
      "Ağır işlemleri arka planda çalıştırarak UI'ı rahatlatmak için",
      "Sadece API çağrıları için",
    ],
    correctOption: 2,
  },
  {
    id: 68,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Debounce ve Throttle ne zaman kullanılmalıdır?",
    answer:
      "Sık tetiklenen olayların performans etkisini kontrol etmek için kullanılır.",
    options: [
      "Sadece animasyonlarda",
      "Yalnızca form validasyonunda",
      "Sık tetiklenen olayların performans etkisini kontrol etmek için",
      "Sadece API çağrılarında",
    ],
    correctOption: 2,
  },
  {
    id: 69,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS'te will-change özelliği ne zaman kullanılmalıdır?",
    answer:
      "Animasyon veya değişim öncesi tarayıcıya optimizasyon fırsatı vermek için kullanılır.",
    options: [
      "Her zaman kullanılmalıdır",
      "Hiçbir zaman kullanılmamalıdır",
      "Animasyon veya değişim öncesi optimizasyon için",
      "Sadece mobil cihazlarda",
    ],
    correctOption: 2,
  },
  {
    id: 70,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Containment'in performansa etkisi nedir?",
    answer: "Sayfa render sürecini optimize ederek performansı artırır.",
    options: [
      "Sadece görsel değişiklikler yapar",
      "Performansı düşürür",
      "Sayfa render sürecini optimize ederek performansı artırır",
      "Hiçbir etkisi yoktur",
    ],
    correctOption: 2,
  },
  {
    id: 71,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML Canvas elementi ne işe yarar?",
    answer:
      "Canvas elementi, JavaScript ile dinamik grafik, animasyon ve oyun geliştirmek için kullanılan bir çizim alanı sağlar.",
    options: [
      "Sadece statik resimler göstermek için kullanılır",
      "JavaScript ile dinamik grafik ve animasyonlar oluşturmak için kullanılır",
      "Yalnızca video oynatmak için kullanılır",
      "CSS animasyonları için gerekli bir elementtir",
    ],
    correctOption: 1,
  },
  {
    id: 72,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Houdini nedir ve ne amaçla kullanılır?",
    answer:
      "CSS Houdini, tarayıcının stil ve layout işlem süreçlerine erişim sağlayan düşük seviyeli bir API'dir.",
    options: [
      "Sadece CSS değişkenlerini yönetmek için kullanılır",
      "Tarayıcının render süreçlerine erişim sağlayan düşük seviyeli bir API'dir",
      "CSS dosyalarını optimize eden bir araçtır",
      "Yalnızca animasyonlar için kullanılan bir kütüphanedir",
    ],
    correctOption: 1,
  },
  {
    id: 73,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te WeakMap ve WeakSet'in kullanım amaçları nelerdir?",
    answer:
      "Memory leak'leri önlemek için zayıf referanslar kullanarak garbage collection'ı optimize ederler.",
    options: [
      "Normal Map ve Set'lerden daha hızlı çalışırlar",
      "Memory leak'leri önlemek ve garbage collection'ı optimize etmek için kullanılırlar",
      "Daha güvenli veri depolama sağlarlar",
      "Senkron işlemleri yönetmek için kullanılırlar",
    ],
    correctOption: 1,
  },
  {
    id: 74,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React Suspense ve Concurrent Mode nedir?",
    answer:
      "Kullanıcı deneyimini iyileştirmek için asenkron işlemleri ve render sürecini yönetmeye yarayan gelişmiş özelliklerdir.",
    options: [
      "Sadece hata yönetimi için kullanılan özelliklerdir",
      "Asenkron işlemleri ve render sürecini yönetmeye yarayan özelliklerdir",
      "React Router'ın alternatifidir",
      "State yönetimi için kullanılan araçlardır",
    ],
    correctOption: 1,
  },
  {
    id: 75,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "Web Components nedir ve nasıl kullanılır?",
    answer:
      "Yeniden kullanılabilir, kapsüllenmiş ve özelleştirilebilir HTML elementleri oluşturmayı sağlayan bir teknolojidir.",
    options: [
      "Sadece CSS framework'üdür",
      "Yeniden kullanılabilir ve kapsüllenmiş HTML elementleri oluşturma teknolojisidir",
      "JavaScript paket yöneticisidir",
      "Tarayıcı eklentisi geliştirme aracıdır",
    ],
    correctOption: 1,
  },
  {
    id: 76,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Paint API nedir ve ne için kullanılır?",
    answer:
      "Özel CSS özellikleri ve değerleri oluşturmak için programatik olarak grafik çizmeyi sağlayan bir API'dir.",
    options: [
      "Sadece renk değerlerini düzenlemek için kullanılır",
      "Özel CSS özellikleri ve grafikleri programatik olarak oluşturmak için kullanılır",
      "Resim dosyalarını optimize etmek için kullanılır",
      "Font yükleme işlemlerini yönetir",
    ],
    correctOption: 1,
  },
  {
    id: 77,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Proxy ve Reflect API'leri ne işe yarar?",
    answer:
      "Nesneler üzerinde özel davranışlar tanımlamayı ve temel işlemleri yönetmeyi sağlayan API'lerdir.",
    options: [
      "Sadece ağ isteklerini yönetmek için kullanılır",
      "Nesneler üzerinde özel davranışlar tanımlamak ve temel işlemleri yönetmek için kullanılır",
      "Tarayıcı cache'ini yönetmek için kullanılır",
      "Dosya sistemi işlemleri için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 78,
    category: "react",
    difficulty: DIFFICULTY.MEDIUM,
    question: "React Server Components nedir?",
    answer:
      "Sunucu tarafında render edilen, istemci JavaScript bundle boyutunu azaltan ve performansı artıran bileşenlerdir.",
    options: [
      "Sadece API çağrıları için kullanılan bileşenlerdir",
      "Sunucu tarafında render edilen ve performansı artıran bileşenlerdir",
      "Local storage yönetimi için kullanılır",
      "Sadece state yönetimi için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 79,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML dialog elementi ne işe yarar?",
    answer:
      "Native modal/dialog pencerelerini oluşturmak için kullanılan bir HTML elementidir.",
    options: [
      "Sadece metin gösterimi için kullanılır",
      "Native modal/dialog pencereleri oluşturmak için kullanılır",
      "Form validasyonu için kullanılır",
      "Sadece bildirimler göstermek için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 80,
    category: "css",
    difficulty: DIFFICULTY.MEDIUM,
    question: "CSS container queries nedir?",
    answer:
      "Elementlerin kendi container'larının boyutlarına göre stil değişikliği yapabilmesini sağlayan bir özelliktir.",
    options: [
      "Sadece viewport boyutlarına göre stil değişikliği yapar",
      "Elementlerin container boyutlarına göre stil değişikliği yapmasını sağlar",
      "Sadece grid layout için kullanılır",
      "Renk değişimlerini kontrol eder",
    ],
    correctOption: 1,
  },
  {
    id: 81,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript Decorators ne işe yarar?",
    answer:
      "Sınıf ve sınıf üyelerinin davranışlarını değiştirmek için kullanılan özel fonksiyonlardır.",
    options: [
      "Sadece stil tanımlamaları için kullanılır",
      "Sınıf ve sınıf üyelerinin davranışlarını değiştirmek için kullanılır",
      "Sadece hata ayıklama için kullanılır",
      "Dosya yükleme işlemleri için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 82,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React Query (TanStack Query) ne amaçla kullanılır?",
    answer:
      "Sunucu state yönetimi, caching ve veri senkronizasyonu için kullanılan bir kütüphanedir.",
    options: [
      "Sadece local state yönetimi için kullanılır",
      "Sunucu state yönetimi ve veri senkronizasyonu için kullanılır",
      "Sadece routing işlemleri için kullanılır",
      "CSS-in-JS çözümü olarak kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 83,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML Inert özelliği ne işe yarar?",
    answer:
      "Elementleri etkileşimden ve erişilebilirlik ağacından çıkarmak için kullanılan bir özelliktir.",
    options: [
      "Sadece görünürlüğü kontrol eder",
      "Elementleri etkileşimden ve erişilebilirlik ağacından çıkarmak için kullanılır",
      "Animasyonları kontrol eder",
      "Sayfa yükleme hızını artırır",
    ],
    correctOption: 1,
  },
  {
    id: 84,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS @layer kuralı ne işe yarar?",
    answer:
      "CSS kaskad katmanları oluşturarak stil önceliklerini daha iyi yönetmeyi sağlar.",
    options: [
      "Sadece animasyonları gruplamak için kullanılır",
      "CSS kaskad katmanları oluşturarak stil önceliklerini yönetir",
      "Sadece medya sorgularını gruplar",
      "JavaScript kodlarını CSS içinde çalıştırır",
    ],
    correctOption: 1,
  },
  {
    id: 85,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "Top-level await ne işe yarar?",
    answer:
      "Modül seviyesinde asenkron işlemleri async/await ile yönetmeyi sağlayan bir özelliktir.",
    options: [
      "Sadece fonksiyon içinde kullanılır",
      "Modül seviyesinde asenkron işlemleri yönetmeyi sağlar",
      "Senkron kod yazmak için kullanılır",
      "Hata yakalama mekanizmasıdır",
    ],
    correctOption: 1,
  },
  {
    id: 86,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Code Splitting nasıl yapılır?",
    answer:
      "Dynamic import ve React.lazy kullanılarak uygulama parçalara bölünür ve ihtiyaç halinde yüklenir.",
    options: [
      "Tüm kodu tek bir dosyada toplamakla",
      "Dynamic import ve React.lazy kullanarak kod parçalarını bölmekle",
      "Sadece CSS dosyalarını ayırmakla",
      "Webpack kullanmadan manuel olarak",
    ],
    correctOption: 1,
  },
  {
    id: 87,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te SharedArrayBuffer ne işe yarar?",
    answer:
      "Web Workers arasında bellek paylaşımı yaparak paralel işlem performansını artırır.",
    options: [
      "Sadece array'leri depolamak için kullanılır",
      "Web Workers arasında bellek paylaşımı sağlar",
      "DOM elementlerini saklar",
      "Tarayıcı önbelleğini yönetir",
    ],
    correctOption: 1,
  },
  {
    id: 88,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Scroll Snap Points nedir?",
    answer:
      "Kaydırma davranışını kontrol ederek düzgün ve kontrollü kaydırma deneyimi sağlar.",
    options: [
      "Sadece animasyon efektleridir",
      "Kaydırma davranışını kontrol eden ve düzgün kaydırma sağlayan özelliktir",
      "Sayfa yükleme hızını artırır",
      "Sadece mobil cihazlarda çalışır",
    ],
    correctOption: 1,
  },
  {
    id: 89,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML'de preload ve prefetch arasındaki fark nedir?",
    answer:
      "Preload mevcut sayfa için kritik kaynakları, prefetch gelecekte kullanılabilecek kaynakları önceden yükler.",
    options: [
      "İkisi de aynı işi yapar",
      "Preload mevcut sayfa için, prefetch gelecek sayfalar için kaynak yükler",
      "Sadece görüntüler için kullanılır",
      "Yalnızca script dosyaları için geçerlidir",
    ],
    correctOption: 1,
  },
  {
    id: 90,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Render Props pattern nedir?",
    answer:
      "Bileşenler arası kod paylaşımını sağlayan, render mantığını prop olarak geçen bir tasarım desenidir.",
    options: [
      "Sadece stil paylaşımı için kullanılır",
      "Bileşenler arası kod paylaşımı sağlayan bir tasarım desenidir",
      "Routing işlemleri için kullanılır",
      "State yönetimi için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 91,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Atomics API ne işe yarar?",
    answer:
      "SharedArrayBuffer üzerinde thread-safe operasyonlar gerçekleştirmeyi sağlar.",
    options: [
      "Sadece matematiksel işlemler için kullanılır",
      "Thread-safe operasyonlar gerçekleştirmeyi sağlar",
      "DOM manipülasyonu yapar",
      "Veritabanı işlemleri için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 92,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Logical Properties nedir?",
    answer:
      "Yazı yönünden bağımsız olarak layout oluşturmayı sağlayan özelliklerdir.",
    options: [
      "Sadece renk değerleri için kullanılır",
      "Yazı yönünden bağımsız layout oluşturmayı sağlar",
      "JavaScript entegrasyonu için kullanılır",
      "Sadece grid sisteminde çalışır",
    ],
    correctOption: 1,
  },
  {
    id: 93,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML'de picture elementi ne işe yarar?",
    answer:
      "Farklı ekran boyutları ve cihazlar için farklı görüntü kaynakları sunmayı sağlar.",
    options: [
      "Sadece video oynatmak için kullanılır",
      "Farklı ekran boyutları için farklı görüntü kaynakları sunar",
      "Sadece animasyon gösterir",
      "Ses dosyalarını oynatır",
    ],
    correctOption: 1,
  },
  {
    id: 94,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Compound Components pattern nedir?",
    answer:
      "İlişkili bileşenleri gruplamak ve daha esnek API'ler oluşturmak için kullanılan bir tasarım desenidir.",
    options: [
      "Sadece form elemanları için kullanılır",
      "İlişkili bileşenleri gruplamak için kullanılan bir tasarım desenidir",
      "Performans optimizasyonu yapar",
      "Sadece stil tanımları için kullanılır",
    ],
    correctOption: 1,
  },
  {
    id: 95,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Intl API ne işe yarar?",
    answer:
      "Dil, sayı, tarih ve saat biçimlendirmesi için uluslararasılaştırma desteği sağlar.",
    options: [
      "Sadece tarih işlemleri için kullanılır",
      "Dil, sayı, tarih ve saat için uluslararasılaştırma desteği sağlar",
      "Sadece para birimi dönüşümleri yapar",
      "Metin çevirisi yapar",
    ],
    correctOption: 1,
  },
  {
    id: 96,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Custom Properties (Variables) ne zaman kullanılmalıdır?",
    answer:
      "Tekrar eden değerleri merkezi yönetmek ve dinamik stil değişiklikleri yapmak için kullanılır.",
    options: [
      "Sadece renk değerleri için",
      "Tekrar eden değerleri yönetmek ve dinamik stil değişiklikleri için",
      "Yalnızca medya sorguları içinde",
      "Sadece animasyonlar için",
    ],
    correctOption: 1,
  },
  {
    id: 97,
    category: "html",
    difficulty: DIFFICULTY.MEDIUM,
    question: "HTML'de lazy loading nasıl uygulanır?",
    answer:
      "loading='lazy' özniteliği kullanılarak görüntü ve iframe'lerin geç yüklenmesi sağlanır.",
    options: [
      "JavaScript ile manuel olarak",
      "loading='lazy' özniteliği kullanarak",
      "Sadece CSS ile yapılır",
      "Otomatik olarak uygulanır",
    ],
    correctOption: 1,
  },
  {
    id: 98,
    category: "react",
    difficulty: DIFFICULTY.HARD,
    question: "React'te Custom Hooks'ların avantajları nelerdir?",
    answer:
      "Kod tekrarını önler, mantık paylaşımını kolaylaştırır ve bileşen karmaşıklığını azaltır.",
    options: [
      "Sadece performans iyileştirmesi sağlar",
      "Kod tekrarını önler ve mantık paylaşımını kolaylaştırır",
      "Yalnızca state yönetimi için kullanılır",
      "Stil tanımlarını düzenler",
    ],
    correctOption: 1,
  },
  {
    id: 99,
    category: "javascript",
    difficulty: DIFFICULTY.HARD,
    question: "JavaScript'te Generators ve Iterators ne işe yarar?",
    answer:
      "Veri akışını kontrol etmeyi ve lazy evaluation yapmayı sağlayan özel fonksiyon türleridir.",
    options: [
      "Sadece döngü oluşturmak için kullanılır",
      "Veri akışını kontrol etmek ve lazy evaluation yapmak için kullanılır",
      "Sadece hata ayıklama için kullanılır",
      "DOM manipülasyonu yapar",
    ],
    correctOption: 1,
  },
  {
    id: 100,
    category: "css",
    difficulty: DIFFICULTY.HARD,
    question: "CSS Subgrid özelliği ne işe yarar?",
    answer:
      "İç içe grid yapılarında alt öğelerin üst grid çizgilerine hizalanmasını sağlar.",
    options: [
      "Sadece flex layout için kullanılır",
      "İç içe grid yapılarında hizalama sağlar",
      "Sadece margin değerlerini ayarlar",
      "Animasyon oluşturur",
    ],
    correctOption: 1,
  },
];

// Kategoriye göre soruları filtreleme
export const getQuestionsByCategory = (category) => {
  if (category === CATEGORIES.ALL) return questions;
  return questions.filter((q) => q.category === category);
};

// Rastgele soru seçme
export const getRandomQuestions = (count, category = CATEGORIES.ALL) => {
  const categoryQuestions = getQuestionsByCategory(category);
  const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// ID'ye göre soru bulma
export const getQuestionById = (id) => {
  return questions.find((q) => q.id === id);
};

// Kategori istatistiklerini alma
export const getCategoryStats = () => {
  return Object.values(CATEGORIES).reduce((stats, category) => {
    if (category === CATEGORIES.ALL) return stats;
    stats[category] = questions.filter((q) => q.category === category).length;
    return stats;
  }, {});
};
