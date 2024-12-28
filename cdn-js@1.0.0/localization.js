// localization.js
// This code loads of the text for every text element given a certain language

//Setting the current language hash
var currentLanguage = window.location.hash;

// Define the language reload anchors
var language = {
    en: {
                textAboutMenu: "About",
                textTeamMenu: "Team",
                textDonationMenu: "Donation",
                textSupportMenu: "Support",
                textHalvingPrefix: "Halving in ",
                textHalvingSuffix: " days.", 
                textViewCountdown: "View Countdown",
                textHeadline: "The Official Litecoin mobile wallet",
                textSubheadline: "Litecoin has been operational since 2011 with no downtime! Litewallet is the official wallet backed by Litecoin Foundation that offers simple and safe ways to use Litecoin.",
                textYearCreated: "YEAR CREATED",
                textMarketPrice: "CURRENT MARKET PRICE",
                textMarketCap: "CURRENT MARKET CAP",
                textMaxSupply: "Litecoin has a max supply of 84,000,000 LTC. ", 
                textCirculatingSupply: "And a circulating supply of", 
                textLearnHeader: "Learn more about Litecoin",
                textLitecoinDescription: "Litecoin is one of the most established and stable cryptocurrencies in terms of transaction volumes and liquidity, and is commonly used as a means of exchange.",
                textLitecoinDescriptionStyled: "It's a real currency used everywhere!",
                textZeroTitle: "Zero downtime",
                textMWEBTitle: "MWEB Implementation",
                textCheapTitle: "Cheap fees",
                textFastTitle: "Fast transactions",
                textZeroDetail: "Since 2011, Litecoin has led the cryptocurrency space as a secure, decentralized and innovative currency.",
                textMWEBDetail: "MWEB keeps your wallet balance concealed. This allows you to send Litecoin without strangers seeing whats in your wallet.",
                textCheapDetail: "Litecoin was designed to make it incredibly cheap to send. If the network is busy, its still very cheap...pennies.",
                textFastDetail: "Litecoin has a transaction processing speed of 54 TPS, which is significantly higher than Bitcoin's transaction processing speed of 5 TPS.",
                textPartnerHeadline: "We have great partners that help Litewallet deliver more value to our users",
                textBitrefillDetail: "Leading crypto e-commerce store that allows users to 'Live on Crypto'.",
                textMoonpayDetail: "MoonPay is active in more than 160 countries and is trusted by 300+ leading wallets, websites, and applications to accept payments and defeat fraud.",
                textSimplexDetail: "Powerful. Seamless. Impactful. As the industry leader, we empower hundreds of partners to enable millions of people to buy billions of dollars in digital assets.",
                textUDDetail: "Own your identity in the digital world. It's your name. Own it. Own your identity in the digital world. Get started with a Web3 domain.",
                textLitecoinCreatorHeadline: "While at Google, Charlie became interested in Bitcoin meeting Mike Hearn & getting his first Bitcoin. He launched Litecoin in October 2011. He founded the Litecoin Foundation in 2016, a non-profit organization whose mission is to teach the world the benefits Litecoin.",
                textLitecoinCreatorSubheadline: "Working closely with the Litewallet team, Charlie and Kerry discuss ways to increase active users while provide the features users want the most. The Litewallet team is global with a modest budget and a wide number of well funded competitors offering many types of crypto.",
                textTeamHeadline: "It's a team effort",
                textTeamSubheadline: "Litewallet has one full time team leader and a group of global volunteers. Interested in learning more about the Litecoin space while improving your knowledge of cryptocurrency?",
                textVolunteerHeadline: "Apply to become a volunteer",
                textDonationHeadline: "Empower Litecoin's Future with your donation",
                textDonationSubheadline: "Your donation to Litewallet app developers will help fuel the development of cutting-edge features and push the boundaries of what's possible. Give the gift of progress and support the team now!",
                textDonationScan: "Scan to give!",
                textDonationsSend: "Send LTC to this address:",
                textFooterHeadline: "Litewallet, The official Litecoin mobile wallet",
                textRepoHeadline: "Litewallet code is open source and we use Github to maintain the codebase.",
                textSocialHeadline: "Litewallet social",
                textRepositories: "Repositories:",
                textFooterSubheadline: "Go to the top"
    },
    id: {
        textAboutMenu: "Tentang",
        textTeamMenu: "Tim",
        textDonationMenu: "Donasi",
        textSupportMenu: "Dukungan",
        textHalvingPrefix: "Halving dalam ",
        textHalvingSuffix: " hari.",
        textViewCountdown: "Lihat Hitungan Mundur",
        textHeadline: "Dompet seluler Litecoin Resmi",
        textSubheadline: "Litecoin telah beroperasi sejak 2011 tanpa waktu henti! Litewallet adalah dompet Litecoin 100% resmi yang menawarkan cara mudah dan aman untuk menggunakan kripto.",
        textYearCreated: "TAHUN DIBUAT",
        textMarketPrice: "HARGA PASAR SAAT INI",
        textMarketCap: "BATAS PASAR SAAT INI",
        textMaxSupply: "Litecoin memiliki pasokan maksimum 84.000.000 LTC.",
        textCirculatingSupply: "Dan pasokan beredar sebesar", textLearnHeader: "Pelajari selengkapnya tentang Litecoin",
        textLitecoinDescription: "Litecoin adalah salah satu mata uang kripto yang paling mapan dan stabil dalam hal volume transaksi dan likuiditas, dan umumnya digunakan sebagai alat tukar.",
        textLitecoinDescriptionStyled: "Ini adalah mata uang riil yang digunakan di mana-mana!",
        textZeroTitle: "Tanpa waktu henti",
        textMWEBTitle: "Implementasi MWEB",
        textCheapTitle: "Biaya murah",
        textFastTitle: "Transaksi cepat",
        textZeroDetail: "Sejak 2011, Litecoin telah memimpin ruang mata uang kripto sebagai mata uang yang aman, terdesentralisasi, dan inovatif.",
        textMWEBDetail: "MWEB menjaga saldo dompet Anda tetap tersembunyi. Ini memungkinkan Anda mengirim Litecoin tanpa orang asing melihat apa yang ada di dompet Anda.",
        textCheapDetail: "Litecoin dirancang agar sangat murah untuk dikirim. Jika jaringannya sibuk, harganya masih sangat murah...hanya beberapa sen.",
        textFastDetail: "Litecoin memiliki kecepatan pemrosesan transaksi sebesar 54 TPS, yang jauh lebih tinggi daripada kecepatan pemrosesan transaksi Bitcoin sebesar 5 TPS.",
        textPartnerHeadline: "Kami memiliki mitra hebat yang membantu Litewallet memberikan nilai lebih kepada pengguna kami",
        textBitrefillDetail: "Toko e-commerce kripto terkemuka yang memungkinkan pengguna untuk 'Hidup dengan Kripto'.",
        textMoonpayDetail: "MoonPay aktif di lebih dari 160 negara dan dipercaya oleh 300+ dompet, situs web, dan aplikasi terkemuka untuk menerima pembayaran dan mengalahkan penipuan.",
        textSimplexDetail: "Kuat. Lancar. Berdampak. Sebagai pemimpin industri, kami memberdayakan ratusan mitra untuk memungkinkan jutaan orang membeli aset digital senilai miliaran dolar.",
        textUDDetail: "Miliki identitas Anda di dunia digital. Itu nama Anda. Miliki itu. Miliki identitas Anda di dunia digital. Mulailah dengan domain Web3.",
        textLitecoinCreatorHeadline: "Saat di Google, Charlie mulai tertarik dengan Bitcoin setelah bertemu Mike Hearn & mendapatkan Bitcoin pertamanya. Ia meluncurkan Litecoin pada Oktober 2011. Ia mendirikan Litecoin Foundation pada tahun 2016, sebuah organisasi nirlaba yang misinya adalah mengajarkan kepada dunia tentang manfaat Litecoin.",
        textLitecoinCreatorSubheadline: "Bekerja sama dengan tim Litewallet, Charlie dan Kerry membahas cara untuk meningkatkan pengguna aktif sekaligus menyediakan fitur yang paling diinginkan pengguna. Tim Litewallet bersifat global dengan anggaran yang sederhana dan sejumlah besar pesaing yang didanai dengan baik yang menawarkan berbagai jenis kripto.",
        textTeamHeadline: "Ini adalah upaya tim",
        textTeamSubheadline: "Litewallet memiliki satu pemimpin tim penuh waktu dan sekelompok relawan global. Tertarik untuk mempelajari lebih lanjut tentang dunia Litecoin sambil meningkatkan pengetahuan Anda tentang mata uang kripto?",
        textVolunteerHeadline: "Daftar untuk menjadi relawan",
        textDonationHeadline: "Berdayakan Masa Depan Litecoin dengan donasi Anda",
        textDonationSubheadline: "Donasi Anda kepada pengembang aplikasi Litewallet akan membantu mendorong pengembangan fitur-fitur mutakhir dan mendorong batasan-batasan dari apa yang mungkin. Berikan hadiah berupa kemajuan dan dukung tim sekarang!",
        textDonationScan: "Pindai untuk memberi!",
        textDonationsSend: "Kirim LTC ke alamat ini:",
        textFooterHeadline: "Litewallet, Dompet seluler Litecoin resmi",
        textRepoHeadline: "Kode Litewallet bersifat sumber terbuka dan kami menggunakan Github untuk mengelola basis kode.",
        textSocialHeadline: "Sosial Litewallet",
        textRepositories: "Repositori:",
        textFooterSubheadline: "Ke atas"
    },
    fr: {
        textAboutMenu: "A propos",
        textTeamMenu: "Équipe",
        textDonationMenu: "Don",
        textSupportMenu: "Soutenir",
        textHalvingPrefix: "Réduction de moitié dans ",
        textHalvingSuffix: " jours.",
        textViewCountdown: "Voir le compte à rebours",
        textHeadline: "Le portefeuille mobile officiel de Litecoin",
        textSubheadline: "Litecoin est opérationnel depuis 2011 sans interruption de service ! Litewallet est le portefeuille officiel 100 % Litecoin qui offre des moyens simples et sûrs d'utiliser la crypto.",
        textYearCreated: "ANNÉE DE CRÉATION",
        textMarketPrice: "PRIX ACTUEL DU MARCHÉ",
        textMarketCap: "CAPACITÉ DU MARCHÉ ACTUEL",
        textMaxSupply: "Litecoin a une offre maximale de 84 000 000 LTC. ",
        textCirculatingSupply: "Et une offre en circulation de",
        textLearnHeader: "En savoir plus sur Litecoin",
        textLitecoinDescription: "Litecoin est l'une des crypto-monnaies les plus établies et les plus stables en termes de volumes de transactions et de liquidité, et est couramment utilisée comme moyen d'échange.",
        textLitecoinDescriptionStyled: "C'est une vraie monnaie utilisée partout !",
        textZeroTitle: "Zéro temps d'arrêt",
        textMWEBTitle: "Implémentation MWEB",
        textCheapTitle: "Frais bon marché",
        textFastTitle: "Transactions rapides",
        textZeroDetail: "Depuis 2011, Litecoin est leader dans l'espace des crypto-monnaies en tant que monnaie sécurisée, décentralisée et innovante.",
        textMWEBDetail: "MWEB garde le solde de votre portefeuille caché. Cela vous permet d'envoyer du Litecoin sans que des inconnus ne voient ce qu'il y a dans votre portefeuille.",
        textCheapDetail: "Litecoin a été conçu pour le rendre incroyablement bon marché à envoyer. Si le réseau est occupé, c'est toujours très bon marché... quelques centimes.",
        textFastDetail: "Litecoin a une vitesse de traitement des transactions de 54 TPS, ce qui est nettement supérieur à la vitesse de traitement des transactions de Bitcoin de 5 TPS.",
        textPartnerHeadline: "Nous avons d'excellents partenaires qui aident Litewallet à offrir plus de valeur à nos utilisateurs",
        textBitrefillDetail: "Boutique de commerce électronique cryptographique leader qui permet aux utilisateurs de 'vivre sur la cryptographie'.",
        textMoonpayDetail: "MoonPay est actif dans plus de 160 pays et bénéficie de la confiance de plus de 300 portefeuilles, sites Web et applications de premier plan pour accepter les paiements et vaincre la fraude.",
        textSimplexDetail: "Puissant. Transparent. Impactant. En tant que leader du secteur, nous permettons à des centaines de partenaires de permettre à des millions de personnes d'acheter des milliards de dollars d'actifs numériques.",
        textUDDetail: "Soyez propriétaire de votre identité dans le monde numérique. C'est votre nom. Soyez propriétaire de lui. Soyez propriétaire de votre identité dans le monde numérique. Commencez avec un domaine Web3.",
        textLitecoinCreatorHeadline: "Alors qu'il était chez Google, Charlie s'est intéressé au Bitcoin en rencontrant Mike Hearn et en obtenant son premier Bitcoin. Il a lancé Litecoin en octobre 2011. Il a fondé la Fondation Litecoin en 2016, une organisation à but non lucratif dont la mission est d'enseigner au monde les avantages du Litecoin.",
        textLitecoinCreatorSubheadline: "En étroite collaboration avec l'équipe Litewallet, Charlie et Kerry discutent des moyens d'augmenter le nombre d'utilisateurs actifs tout en fournissant les fonctionnalités que les utilisateurs souhaitent le plus. L'équipe Litewallet est mondiale avec un budget modeste et un grand nombre de concurrents bien financés proposant de nombreux types de crypto.",
        textTeamHeadline: "C'est un effort d'équipe",
        textTeamSubheadline: "Litewallet a un chef d'équipe à temps plein et un groupe de bénévoles mondiaux. Vous souhaitez en savoir plus sur l'espace Litecoin tout en améliorant vos connaissances sur la cryptomonnaie ?",
        textVolunteerHeadline: "Postulez pour devenir bénévole",
        textDonationHeadline: "Faites un don pour l'avenir de Litecoin",
        textDonationSubheadline: "Votre don aux développeurs de l'application Litewallet contribuera à alimenter le développement de fonctionnalités de pointe et à repousser les limites du possible. Offrez le cadeau du progrès et soutenez l'équipe maintenant !",
        textDonationScan: "Scannez pour donner !",
        textDonationsSend: "Envoyez LTC à cette adresse :",
        textFooterHeadline: "Litewallet, le portefeuille mobile officiel de Litecoin",
        textRepoHeadline: "Le code de Litewallet est open source et nous utilisons Github pour maintenir la base de code.",
        textSocialHeadline: "Litewallet social",
        textRepositories: "Dépôts:",
        textFooterSubheadline: "Aller en haut"
    },
    es: {
        textAboutMenu: "Acerca de",
        textTeamMenu: "Equipo",
        textDonationMenu: "Donación",
        textSupportMenu: "Soporte",
        textHalvingPrefix: "Halving en ",
        textHalvingSuffix: " días.",
        textViewCountdown: "Ver cuenta regresiva",
        textHeadline: "La billetera móvil oficial de Litecoin",
        textSubheadline: "¡Litecoin ha estado en funcionamiento desde 2011 sin tiempo de inactividad! Litewallet es la billetera oficial 100% Litecoin que ofrece formas simples y seguras de usar criptomonedas.",
        textYearCreated: "AÑO DE CREACIÓN",
        textMarketPrice: "PRECIO DE MERCADO ACTUAL",
        textMarketCap: "CAPACITACIÓN DE MERCADO ACTUAL",
        textMaxSupply: "Litecoin tiene un suministro máximo de 84 000 000 LTC.",
        textCirculatingSupply: "Y un suministro circulante de",
        textLearnHeader: "Obtenga más información sobre Litecoin",
        textLitecoinDescription: "Litecoin es una de las criptomonedas más consolidadas y estables en términos de volumen de transacciones y liquidez, y se utiliza comúnmente como medio de intercambio.",
        textLitecoinDescriptionStyled: "¡Es una moneda real que se utiliza en todas partes!",
        textZeroTitle: "Tiempo de inactividad cero",
        textMWEBTitle: "Implementación de MWEB",
        textCheapTitle: "Tarifas económicas",
        textFastTitle: "Transacciones rápidas",
        textZeroDetail: "Desde 2011, Litecoin ha liderado el espacio de las criptomonedas como una moneda segura, descentralizada e innovadora.",
        textMWEBDetail: "MWEB mantiene oculto el saldo de su billetera. Esto le permite enviar Litecoin sin que extraños vean lo que hay en su billetera.",
        textCheapDetail: "Litecoin fue diseñado para que enviarlo sea increíblemente económico. Si la red está ocupada, sigue siendo muy barato... centavos.",
        textFastDetail: "Litecoin tiene una velocidad de procesamiento de transacciones de 54 TPS, que es significativamente más alta que la velocidad de procesamiento de transacciones de Bitcoin de 5 TPS.",
        textPartnerHeadline: "Tenemos grandes socios que ayudan a Litewallet a brindar más valor a nuestros usuarios",
        textBitrefillDetail: "Tienda líder de comercio electrónico de criptomonedas que permite a los usuarios 'Vivir con criptomonedas'.",
        textMoonpayDetail: "MoonPay está activo en más de 160 países y más de 300 billeteras, sitios web y aplicaciones líderes confían en MoonPay para aceptar pagos y vencer el fraude.",
        textSimplexDetail: "Poderoso. Sin inconvenientes. Impactante. Como líder de la industria, empoderamos a cientos de socios para permitir que millones de personas compren miles de millones de dólares en activos digitales.",
        textUDDetail: "Sea dueño de su identidad en el mundo digital. Es su nombre. Sea dueño de él. Sea dueño de su identidad en el mundo digital. 'Comienza con un dominio Web3'.",
        textLitecoinCreatorHeadline: "Mientras estaba en Google, Charlie se interesó en Bitcoin cuando conoció a Mike Hearn y obtuvo su primer Bitcoin. Lanzó Litecoin en octubre de 2011. Fundó la Litecoin Foundation en 2016, una organización sin fines de lucro cuya misión es enseñarle al mundo los beneficios de Litecoin.",
        textLitecoinCreatorSubheadline: "Trabajando en estrecha colaboración con el equipo de Litewallet, Charlie y Kerry discuten formas de aumentar los usuarios activos y, al mismo tiempo, brindar las funciones que más desean los usuarios. El equipo de Litewallet es global, con un presupuesto modesto y una gran cantidad de competidores bien financiados que ofrecen muchos tipos de criptomonedas.",
        textTeamHeadline: "Es un esfuerzo de equipo",
        textTeamSubheadline: "Litewallet tiene un líder de equipo a tiempo completo y un grupo de voluntarios globales. ¿Está interesado en aprender más sobre el espacio Litecoin mientras mejora su conocimiento sobre criptomonedas?",
        textVolunteerHeadline: "Postúlese para convertirse en voluntario",
        textDonationHeadline: "Potencie el futuro de Litecoin con su donación",
        textDonationSubheadline: "Su donación a los desarrolladores de aplicaciones Litewallet ayudará a impulsar el desarrollo de funciones de vanguardia y a ampliar los límites de lo posible. ¡Regale progreso y apoye al equipo ahora!",
        textDonationScan: "¡Escanee para donar!",
        textDonationsSend: "Envíe LTC a esta dirección:",
        textFooterHeadline: "Litewallet, la billetera móvil oficial de Litecoin",
        textRepoHeadline: "El código de Litewallet es de código abierto y usamos Github para mantener la base de código.",
        textSocialHeadline: "Litewallet social",
        textRepositories: "Repositorios:",
        textFooterSubheadline: "Ir al inicio"  
    },
    de: {
        textAboutMenu: "Info",
        textTeamMenu: "Team",
        textDonationMenu: "Spende",
        textSupportMenu: "Support",
        textHalvingPrefix: "Halbierung in",
        textHalvingSuffix: "Tage",
        textViewCountdown: "Countdown anzeigen",
        textHeadline: "Das offizielle mobile Litecoin-Wallet",
        textSubheadline: "Litecoin ist seit 2011 ohne Ausfallzeiten in Betrieb! Litewallet ist das offizielle 100 % Litecoin-Wallet, das einfache und sichere Möglichkeiten zur Verwendung von Kryptowährungen bietet",
        textYearCreated: "ERSTELLUNGSJAHR",
        textMarketPrice: "AKTUELLER MARKTPREIS",
        textMarketCap: "AKTUELLE MARKTKAPITALISIERUNG",
        textMaxSupply: "Litecoin hat ein maximales Angebot von 84.000.000 LTC",
        textCirculatingSupply: "Und ein zirkulierendes Angebot von",
        textLearnHeader: "Erfahren Sie mehr über Litecoin",
        textLitecoinDescription: "Litecoin ist eine der etabliertesten und stabilsten Kryptowährungen in Bezug auf Transaktionsvolumen und Liquidität und wird häufig als Tauschmittel verwendet.",
        textLitecoinDescriptionStyled: "Es ist eine echte Währung, die überall verwendet wird!",
        textZeroTitle: "Keine Ausfallzeit",
        textMWEBTitle: "MWEB-Implementierung",
        textCheapTitle: "Günstige Gebühren",
        textFastTitle: "Schnelle Transaktionen",
        textZeroDetail: "Seit 2011 ist Litecoin als sichere, dezentrale und innovative Währung führend im Kryptowährungsraum.",
        textMWEBDetail: "MWEB hält Ihr Wallet-Guthaben geheim. So können Sie Litecoin senden, ohne dass Fremde sehen, was sich in Ihrem Wallet befindet.",
        textCheapDetail: "Litecoin wurde entwickelt, um das Senden unglaublich günstig zu machen. Wenn das Netzwerk ausgelastet ist, ist es immer noch sehr günstig ... ein paar Cent.",
        textFastDetail: "Litecoin hat eine Transaktionsverarbeitungsgeschwindigkeit von 54 TPS, die deutlich höher ist als die Transaktionsverarbeitungsgeschwindigkeit von Bitcoin von 5 TPS.",
        textPartnerHeadline: "Wir haben großartige Partner, die Litewallet helfen, unseren Benutzern mehr Wert zu bieten",
        textBitrefillDetail: "Führender Krypto-E-Commerce-Shop, der es Benutzern ermöglicht, ‚von Krypto zu leben‘.",
        textMoonpayDetail: "MoonPay ist in mehr als 160 Ländern aktiv und wird von über 300 führenden Wallets, Websites und Anwendungen verwendet, um Zahlungen anzunehmen und Betrug zu verhindern.",
        textSimplexDetail: "Leistungsstark. Nahtlos. Wirkungsvoll. Als Branchenführer unterstützen wir Hunderte von Partnern, damit Millionen von Menschen digitale Vermögenswerte im Wert von Milliarden von Dollar kaufen können.",
        textUDDetail: "Besitzen Sie Ihre Identität in der digitalen Welt. Es ist Ihr Name. Besitzen Sie ihn. Besitzen Sie Ihre Identität in der digitalen Welt. Beginnen Sie mit einer Web3-Domäne.",
        textLitecoinCreatorHeadline: "Bei seiner Zeit bei Google interessierte sich Charlie für Bitcoin, lernte Mike Hearn kennen und bekam seinen ersten Bitcoin. Er brachte Litecoin im Oktober 2011 auf den Markt. 2016 gründete er die Litecoin Foundation, eine gemeinnützige Organisation, deren Mission es ist, der Welt die Vorteile von Litecoin zu vermitteln.",
        textLitecoinCreatorSubheadline: "In enger Zusammenarbeit mit dem Litewallet-Team diskutieren Charlie und Kerry Möglichkeiten, die Zahl der aktiven Benutzer zu erhöhen und gleichzeitig die Funktionen bereitzustellen, die die Benutzer am meisten wünschen. Das Litewallet-Team ist global aufgestellt, verfügt über ein bescheidenes Budget und eine große Anzahl gut finanzierter Konkurrenten, die viele Arten von Kryptowährungen anbieten.",
        textTeamHeadline: "Es ist eine Teamleistung",
        textTeamSubheadline: "Litewallet hat einen Vollzeit-Teamleiter und eine Gruppe globaler Freiwilliger. Möchten Sie mehr über den Litecoin-Bereich erfahren und gleichzeitig Ihr Wissen über Kryptowährungen verbessern?",
        textVolunteerHeadline: "Bewerben Sie sich als Freiwilliger",
        textDonationHeadline: "Stärken Sie die Zukunft von Litecoin mit Ihrer Spende",
        textDonationSubheadline: "Ihre Spende an die Entwickler der Litewallet-App wird die Entwicklung innovativer Funktionen vorantreiben und die Grenzen des Möglichen erweitern. Schenken Sie Fortschritt und unterstützen Sie das Team jetzt!",
        textDonationScan: "Scannen, um zu spenden!",
        textDonationsSend: "Senden Sie LTC an diese Adresse:",
        textFooterHeadline: "Litewallet, die offizielle mobile Litecoin-Geldbörse",
        textRepoHeadline: "Der Litewallet-Code ist Open Source und wir verwenden Github, um die Codebasis zu pflegen.",
        textSocialHeadline: "Litewallet Social",
        textRepositories: "Repositories:",
        textFooterSubheadline: "Nach oben gehen"
    },
    ko: {
        textAboutMenu: "정보",
        textTeamMenu: "팀",
        textDonationMenu: "기부",
        textSupportMenu: "지원",
        textHalvingPrefix: "반감기",
        textHalvingSuffix: "일"                                                                     ,
        textViewCountdown: "카운트다운 보기",
        textHeadline: "공식 Litecoin 모바일 지갑",
        textSubheadline: "Litecoin은 2011년부터 가동 중단 없이 운영되고 있습니다! Litewallet은 암호화폐를 사용하는 간단하고 안전한 방법을 제공하는 공식 100% Litecoin 지갑입니다.",
        textYearCreated: "생성 연도",
        textMarketPrice: "현재 시장 가격",
        textMarketCap: "현재 시장 자본",
        textMaxSupply: "Litecoin의 최대 공급량은 84,000,000 LTC입니다.",
        textCirculatingSupply: "그리고 순환 공급",
        textLearnHeader: "Litecoin에 대해 자세히 알아보기",
        textLitecoinDescription: "Litecoin은 거래량과 유동성 측면에서 가장 확립되고 안정적인 암호화폐 중 하나이며, 일반적으로 교환 수단으로 사용됩니다.",
        textLitecoinDescriptionStyled: "모든 곳에서 사용되는 실제 통화입니다!",
        textZeroTitle: "다운타임 없음",
        textMWEBTitle: "MWEB 구현",
        textCheapTitle: "저렴한 수수료",
        textFastTitle: "빠른 거래",
        textZeroDetail: "2011년 이래로 Litecoin은 안전하고 분산화되고 혁신적인 통화로서 암호화폐 분야를 선도해 왔습니다.",
        textMWEBDetail: "MWEB는 지갑 잔액을 숨겨줍니다. 이렇게 하면 낯선 사람이 지갑에 무엇이 있는지 보지 않고 Litecoin을 보낼 수 있습니다.",
        textCheapDetail: "Litecoin은 전송 비용을 엄청나게 저렴하게 만들기 위해 설계되었습니다. 네트워크가 바쁜 경우에도 여전히 매우 저렴합니다...페니.",
        textFastDetail: "Litecoin의 거래 처리 속도는 54TPS로 Bitcoin의 거래 처리 속도인 5TPS보다 상당히 빠릅니다.",
        textPartnerHeadline: "Litewallet이 사용자에게 더 많은 가치를 제공하도록 돕는 훌륭한 파트너가 있습니다.",
        textBitrefillDetail: "사용자가 '암호화폐로 살 수 있는' 선도적인 암호화폐 전자상거래 매장입니다.",
        textMoonpayDetail: "MoonPay는 160개국 이상에서 활동하고 있으며 300개 이상의 주요 지갑, 웹사이트 및 애플리케이션에서 결제를 수락하고 사기를 퇴치하는 데 신뢰를 받고 있습니다.",
        textSimplexDetail: "강력합니다. 매끄럽고 강력합니다. 업계 리더로서, 우리는 수백 명의 파트너에게 힘을 실어 수백만 명의 사람들이 수십억 달러 상당의 디지털 자산을 구매할 수 있도록 지원합니다.",
        textUDDetail: "디지털 세계에서 당신의 신원을 소유하세요. 당신의 이름입니다. 소유하세요. 디지털 세계에서 당신의 신원을 소유하세요. Web3 도메인으로 시작하세요.",
        textLitecoinCreatorHeadline: "Google에 있는 동안 Charlie는 Mike Hearn을 만나 첫 비트코인을 얻으면서 비트코인에 관심을 갖게 되었습니다. 그는 2011년 10월에 Litecoin을 출시했습니다. 그는 2016년에 Litecoin Foundation을 설립했는데, 이 비영리 단체의 사명은 전 세계에 Litecoin의 이점을 알리는 것입니다.",
        textLitecoinCreatorSubheadline: "Litewallet 팀과 긴밀히 협력하여 Charlie와 Kerry는 사용자가 가장 원하는 기능을 제공하면서 활성 사용자를 늘리는 방법에 대해 논의합니다. Litewallet 팀은 적당한 예산과 다양한 유형의 암호화폐를 제공하는 자금이 충분한 경쟁사를 보유한 글로벌 팀입니다.",
        textTeamHeadline: "팀의 노력입니다.",
        textTeamSubheadline: "Litewallet에는 정규직 팀 리더 한 명과 글로벌 자원봉사자 그룹이 있습니다. 암호화폐에 대한 지식을 향상시키는 동시에 Litecoin 분야에 대해 더 알아보고 싶으신가요?",
        textVolunteerHeadline: "자원봉사자가 되기 위해 지원하세요.",
        textDonationHeadline: "기부로 Litecoin의 미래를 강화하세요.",
        textDonationSubheadline: "Litewallet 앱 개발자에게 기부하시면 최첨단 기능 개발에 도움이 되고 가능성의 경계를 넓히는 데 도움이 됩니다. 진행 상황을 선물하고 지금 팀을 지원하세요!",
        textDonationScan: "스캔하여 기부하세요!",
        textDonationsSend: "이 주소로 LTC 보내기:",
        textFooterHeadline: "Litewallet, 공식 Litecoin 모바일 지갑",
        textRepoHeadline: "Litewallet 코드는 오픈 소스이며 Github을 사용하여 코드베이스를 유지 관리합니다.",
        textSocialHeadline: "Litewallet social",
        textRepositories: "저장소:",
        textFooterSubheadline: "맨 위로 이동"
    },
    uk: { 
        textAboutMenu: "Про програму",
        textTeamMenu: "Команда",
        textDonationMenu: "Пожертвування",
        textSupportMenu: "Підтримка",
        textHalvingPrefix: "Поділ на половину ",
        textHalvingSuffix: " днів.",
        textViewCountdown: "Переглянути зворотній відлік",
        textHeadline: "Офіційний мобільний гаманець Litecoin",
        textSubheadline: "Litecoin працює з 2011 року без жодних простоїв! Litewallet — це офіційний 100% гаманець Litecoin, який пропонує прості та безпечні способи використання криптовалюти.",
        textYearCreated: "РІК СТВОРЕНО",
        textMarketPrice: "ПОТОЧНА РИНКОВА ЦІНА",
        textMarketCap: "ПОТОЧНА РИНКОВА КАПІТАЛІЗАЦІЯ",
        textMaxSupply: "Максимальний запас Litecoin становить 84 000 000 LTC. ",
        textCirculatingSupply: "І оборотний запас",
        textLearnHeader: "Дізнайтеся більше про Litecoin",
        textLitecoinDescription: "Litecoin є однією з найбільш визнаних і стабільних криптовалют з точки зору обсягів транзакцій і ліквідності, і зазвичай використовується як засіб обміну",
        textLitecoinDescriptionStyled: "Це справжня валюта, яка використовується всюди!",
        textZeroTitle: "Нульовий час простою",
        textMWEBTitle: "Впровадження MWEB",
        textCheapTitle: "Дешеві збори",
        textFastTitle: "Швидкі транзакції",
        textZeroDetail: "З 2011 року Litecoin є лідером у сфері криптовалют як безпечна, децентралізована та інноваційна валюта.",
        textMWEBDetail: "MWEB зберігає прихований баланс вашого гаманця. Це дозволяє вам надсилати Litecoin, не дивлячись на те, що є у вашому гаманці.",
        textCheapDetail: "Litecoin розроблено, щоб зробити його неймовірно дешевим для надсилання. Якщо мережа зайнята, це все одно дуже дешево... копійки.",
        textFastDetail: "Litecoin має швидкість обробки транзакцій 54 TPS, що значно вище, ніж швидкість обробки транзакцій Bitcoin у 5 TPS.",
        textPartnerHeadline: "У нас є чудові партнери, які допомагають Litewallet надавати більше цінності нашим користувачам",
        textBitrefillDetail: "Провідний крипто магазин електронної комерції, який дозволяє користувачам 'Жити на Crypto'.",
        textMoonpayDetail: "MoonPay працює в більш ніж 160 країнах, і йому довіряють понад 300 провідних гаманців, веб-сайтів і програм для прийому платежів і боротьби з шахрайством.",
        textSimplexDetail: "Потужний. Бездоганний. Впливовий. Як лідер галузі, ми надаємо можливість сотням партнерів, щоб мільйони людей могли купувати цифрові активи на мільярди доларів",
        textUDDetail: "Володійте своєю ідентичністю в цифровому світі. Це ваше ім'я. Володійте ним. Володійте своєю ідентичністю в цифровому світі. Почніть роботу з доменом Web3.",
        textLitecoinCreatorHeadline: "Під час роботи в Google Чарлі зацікавився біткойнами, зустрівшись з Майком Хірном і отримавши свій перший біткойн. Він запустив Litecoin у жовтні 2011 року. У 2016 році він заснував Litecoin Foundation, некомерційну організацію, місія якої — навчити світ перевагам Litecoin.",
        textLitecoinCreatorSubheadline: "Тісно співпрацюючи з командою Litewallet, Чарлі та Керрі обговорюють способи збільшити кількість активних користувачів, одночасно забезпечуючи функції, які найбільше потрібні користувачам. Команда Litewallet є глобальною командою зі скромним бюджетом і великою кількістю добре фінансованих конкурентів, які пропонують багато типів криптовалют .",
        textTeamHeadline: "Це командна робота",
        textTeamSubheadline: "У Litewallet є один керівник команди, який працює на повний робочий день, і група волонтерів із усього світу. Хочете дізнатися більше про простір Litecoin, покращуючи свої знання про криптовалюту?",
        textVolunteerHeadline: "Подати заявку, щоб стати волонтером",
        textDonationHeadline: "Розширте майбутнє Litecoin своєю пожертвою",
        textDonationSubheadline: "Ваша пожертва розробникам додатків Litewallet допоможе розробити передові функції та розширити межі можливого. Подаруйте прогрес і підтримайте команду зараз!",
        textDonationScan: "Відскануйте, щоб подарувати!",
        textDonationsSend: "Надіслати LTC на цю адресу:",
        textFooterHeadline: "Litewallet, офіційний мобільний гаманець Litecoin",
        textRepoHeadline: "Код Litewallet є відкритим кодом, і ми використовуємо Github для підтримки кодової бази.",
        textSocialHeadline: "Litewallet social",
        textRepositories: "Сховища:",
        textFooterSubheadline: "Перейти вгору"
    },
    ru: {
        textAboutMenu: "О нас",
        textTeamMenu: "Команда",
        textDonationMenu: "Пожертвование",
        textSupportMenu: "Поддержка",
        textHalvingPrefix: "Уполовинивание через ",
        textHalvingSuffix: "дней.",
        textViewCountdown: "Просмотреть обратный отсчет",
        textHeadline: "Официальный мобильный кошелек Litecoin",
        textSubheadline: "Litecoin работает с 2011 года без простоев! Litewallet — это официальный кошелек на 100% Litecoin, который предлагает простые и безопасные способы использования криптовалюты.",
        textYearCreated: "ГОД СОЗДАНИЯ",
        textMarketPrice: "ТЕКУЩАЯ РЫНОЧНАЯ ЦЕНА",
        textMarketCap: "ТЕКУЩАЯ РЫНОЧНАЯ КАПИТАЛИЗАЦИЯ",
        textMaxSupply: "Максимальный запас Litecoin составляет 84 000 000 LTC. ",
        textCirculatingSupply: "И оборотный запас",
        textLearnHeader: "Узнайте больше о Litecoin",
        textLitecoinDescription: "Litecoin — одна из самых известных и стабильных криптовалют с точки зрения объемов транзакций и ликвидности, и обычно используется как средство обмена.",
        textLitecoinDescriptionStyled: "Это настоящая валюта, используемая везде!",
        textZeroTitle: "Нулевой простой",
        textMWEBTitle: "Внедрение MWEB",
        textCheapTitle: "Низкие комиссии",
        textFastTitle: "Быстрые транзакции",
        textZeroDetail: "С 2011 года Litecoin лидирует в криптовалютном пространстве как безопасная, децентрализованная и инновационная валюта.",
        textMWEBDetail: "MWEB скрывает баланс вашего кошелька. Это позволяет вам отправлять Litecoin, не позволяя посторонним видеть, что находится в вашем кошельке.",
        textCheapDetail: "Litecoin был разработан, чтобы сделать его невероятно дешевым для отправки. Если сеть загружена, он все равно очень дешев... копейки.",
        textFastDetail: "Скорость обработки транзакций Litecoin составляет 54 TPS, что значительно выше скорости обработки транзакций Bitcoin в 5 TPS.",
        textPartnerHeadline: "У нас есть отличные партнеры, которые помогают Litewallet предоставлять больше ценности нашим пользователям",
        textBitrefillDetail: "Ведущий магазин криптовалютной электронной коммерции, который позволяет пользователям 'жить на криптовалюте'. ",
        textMoonpayDetail: "MoonPay работает более чем в 160 странах и доверяет более 300 ведущим кошелькам, веб-сайтам и приложениям принимать платежи и бороться с мошенничеством.",
        textSimplexDetail: "Мощный. Бесперебойный. Эффективный. Как лидер отрасли, мы даем возможность сотням партнеров, чтобы миллионы людей могли покупать миллиарды долларов в цифровых активах.",
        textUDDetail: "Владейте своей личностью в цифровом мире. Это ваше имя. Владейте им. Владейте своей личностью в цифровом мире. Начните с домена Web3.",
        textLitecoinCreatorHeadline: "Работая в Google, Чарли заинтересовался биткойном, встретился с Майком Хирном и получил свой первый биткойн. Он запустил Litecoin в октябре 2011 года. В 2016 году он основал Litecoin Foundation, некоммерческую организацию, миссия которой — научить мир преимуществам Litecoin.",
        textLitecoinCreatorSubheadline: "Тесно сотрудничая с командой Litewallet, Чарли и Керри обсуждают способы увеличения числа активных пользователей, предоставляя им функции, которые им больше всего нужны. Команда Litewallet является глобальной, имеет скромный бюджет и большое количество хорошо финансируемых конкурентов, предлагающих множество типов криптовалют.",
        textTeamHeadline: "Это командная работа",
        textTeamSubheadline: "У Litewallet есть один постоянный руководитель команды и группа волонтеров по всему миру. Хотите узнать больше о пространстве Litecoin, одновременно улучшая свои знания о криптовалюте?",
        textVolunteerHeadline: "Подайте заявку на волонтерство",
        textDonationHeadline: "Укрепите будущее Litecoin с помощью вашего пожертвования",
        textDonationSubheadline: "Ваше пожертвование разработчикам приложения Litewallet поможет стимулировать разработку передовых функций и расширить границы возможного. Подарите прогресс и поддержите команду прямо сейчас!",
        textDonationScan: "Сканируйте, чтобы пожертвовать!",
        textDonationsSend: "Отправьте LTC на этот адрес:",
        textFooterHeadline: "Litewallet, официальный мобильный кошелек Litecoin",
        textRepoHeadline: "Код Litewallet имеет открытый исходный код, и мы используем Github для поддержки кодовой базы.",
        textSocialHeadline: "Litewallet social",
        textRepositories: "Репозитории:",
        textFooterSubheadline: "Перейти наверх"
    },
    pt: {
        textAboutMenu: "Sobre",
        textTeamMenu: "Equipe",
        textDonationMenu: "Doação",
        textSupportMenu: "Suporte",
        textHalvingPrefix: "Redução pela metade em ",
        textHalvingSuffix: " dias.",
        textViewCountdown: "Ver contagem regressiva",
        textHeadline: "A carteira móvel oficial Litecoin",
        textSubheadline: "Litecoin está em operação desde 2011 sem tempo de inatividade! Litewallet é a carteira oficial 100% Litecoin que oferece maneiras simples e seguras de usar criptomoedas.",
        textYearCreated: "ANO DE CRIAÇÃO",
        textMarketPrice: "PREÇO DE MERCADO ATUAL",
        textMarketCap: "VALOR DE MERCADO ATUAL",
        textMaxSupply: "Litecoin tem um suprimento máximo de 84.000.000 LTC.",
        textCirculatingSupply: "E um fornecimento circulante de",
        textLearnHeader: "Saiba mais sobre Litecoin",
        textLitecoinDescription: "Litecoin é uma das criptomoedas mais estabelecidas e estáveis ​​em termos de volumes de transações e liquidez, e é comumente usada como meio de troca.",
        textLitecoinDescriptionStyled: "É uma moeda real usada em todos os lugares!",
        textZeroTitle: "Tempo de inatividade zero",
        textMWEBTitle: "Implementação MWEB",
        textCheapTitle: "Taxas baratas",
        textFastTitle: "Transações rápidas",
        textZeroDetail: "Desde 2011, Litecoin lidera o espaço de criptomoedas como uma moeda segura, descentralizada e inovadora.",
        textMWEBDetail: "MWEB mantém o saldo da sua carteira oculto. Isso permite que você envie Litecoin sem que estranhos vejam o que há na sua carteira.",
        textCheapDetail: "Litecoin foi projetado para torná-lo incrivelmente barato para enviar. Se a rede estiver ocupada, ainda é muito barato... centavos.",
        textFastDetail: "Litecoin tem uma velocidade de processamento de transações de 54 TPS, que é significativamente maior do que a velocidade de processamento de transações do Bitcoin de 5 TPS.",
        textPartnerHeadline: "Temos ótimos parceiros que ajudam o Litewallet a entregar mais valor aos nossos usuários",
        textBitrefillDetail: "Loja líder de comércio eletrônico de criptomoedas que permite aos usuários 'viverem de criptomoedas'.",
        textMoonpayDetail: "O MoonPay está ativo em mais de 160 países e tem a confiança de mais de 300 carteiras, sites e aplicativos líderes para aceitar pagamentos e derrotar fraudes.",
        textSimplexDetail: "Poderoso. Contínuo. Impactante. Como líder do setor, capacitamos centenas de parceiros para permitir que milhões de pessoas comprem bilhões de dólares em ativos digitais.",
        textUDDetail: "Possua identidade no mundo digital. É seu nome. Possua-o. Possua sua identidade no mundo digital. Comece com um domínio Web3.",
        textLitecoinCreatorHeadline: "Enquanto estava no Google, Charlie se interessou por Bitcoin ao conhecer Mike Hearn e ganhar seu primeiro Bitcoin. Ele lançou o Litecoin em outubro de 2011. Ele fundou a Litecoin Foundation em 2016, uma organização sem fins lucrativos cuja missão é ensinar ao mundo os benefícios do Litecoin.",
        textLitecoinCreatorSubheadline: "Trabalhando em estreita colaboração com a equipe do Litewallet, Charlie e Kerry discutem maneiras de aumentar os usuários ativos e, ao mesmo tempo, fornecer os recursos que os usuários mais desejam. A equipe do Litewallet é global, com um orçamento modesto e um grande número de concorrentes bem financiados que oferecem muitos tipos de criptomoedas.",
        textTeamHeadline: "É um esforço de equipe",
        textTeamSubheadline: "O Litewallet tem um líder de equipe em tempo integral e um grupo de voluntários globais. Interessado em aprender mais sobre o espaço Litecoin enquanto melhora seu conhecimento sobre criptomoedas?",
        textVolunteerHeadline: "Inscreva-se para se tornar um voluntário",
        textDonationHeadline: "Fortaleça o futuro do Litecoin com sua doação",
        textDonationSubheadline: "Sua doação para desenvolvedores de aplicativos Litewallet ajudará a impulsionar o desenvolvimento de recursos de ponta e a expandir os limites do que é possível. Dê o presente do progresso e apoie a equipe agora!",
        textDonationScan: "Digitalize para doar!",
        textDonationsSend: "Envie LTC para este endereço:",
        textFooterHeadline: "Litewallet, a carteira móvel oficial do Litecoin",
        textRepoHeadline: "O código do Litewallet é de código aberto e usamos o Github para manter a base de código.",
        textSocialHeadline: "Litewallet social",
        textRepositories: "Repositórios:",
        textFooterSubheadline: "Ir para o topo"
    },
    zhCN: {
        textAboutMenu: "关于",
        textTeamMenu: "团队",
        textDonationMenu: "捐赠",
        textSupportMenu: "支持",
        textHalvingPrefix: "减半",
        textHalvingSuffix: "天。",
        textViewCountdown: "查看倒计时",
        textHeadline: "官方莱特币移动钱包",
        textSubheadline: "莱特币自 2011 年以来一直运营，从未停机！Litewallet 是官方 100% 莱特币钱包，提供简单安全的加密货币使用方式。",
        textYearCreated: "创建年份",
        textMarketPrice: "当前市场价格",
        textMarketCap: "当前市值",
        textMaxSupply: "莱特币的最大供应量为 84,000,000 LTC。",
        textCirculatingSupply: "以及流通供应量",
        textLearnHeader: "了解有关莱特币的更多信息",
        textLitecoinDescription: "就交易量和流动性而言，莱特币是最成熟和最稳定的加密货币之一，并且通常用作交换手段。",
        textLitecoinDescriptionStyled: "它是一种真正的货币，随处可见！",
        textZeroTitle: "零停机时间",
        textMWEBTitle: "MWEB 实施",
        textCheapTitle: "费用低廉",
        textFastTitle: "快速交易",
        textZeroDetail: "自 2011 年以来，莱特币一直引领加密货币领域，成为一种安全、分散和创新的货币。",
        textMWEBDetail: "MWEB 保持您的钱包余额隐藏。这允许您发送莱特币，而不会让陌生人看到您钱包里的内容。",
        textCheapDetail: "莱特币的设计旨在使其发送成本极低。如果网络繁忙，它仍然非常便宜......几分钱。",
        textFastDetail: "莱特币的交易处理速度为 54 TPS，明显高于比特币 5 TPS 的交易处理速度。",
        textPartnerHeadline: "我们拥有优秀的合作伙伴，帮助 Litewallet 为我们的用户提供更多价值",
        textBitrefillDetail: "领先的加密电子商务商店，允许用户‘生活在加密中’。",
        textMoonpayDetail: "MoonPay 在 160 多个国家/地区活跃，并受到 300 多个领先钱包、网站和应用程序的信任，以接受付款并打击欺诈。",
        textSimplexDetail: "强大。无缝。有影响力。作为行业领导者，我们为数百家合作伙伴提供支持，使数百万人能够购买数十亿美元的数字资产。",
        textUDDetail: "在数字世界中拥有您的身份。这是你的名字。拥有它。在数字世界中拥有您的身份。从 Web3 域名开始。",
        textLitecoinCreatorHeadline: "在谷歌工作期间，Charlie 对比特币产生了兴趣，并结识了 Mike Hearn 并获得了他的第一枚比特币。他于 2011 年 10 月推出了莱特币。他于 2016 年创立了莱特币基金会，这是一家非营利组织，其使命是向世界传授莱特币的好处。",
        textLitecoinCreatorSubheadline: "Charlie 和 Kerry 与 Litewallet 团队密切合作，讨论了增加活跃用户的方法，同时提供用户最想要的功能。Litewallet 团队是全球性的，预算适中，拥有大量资金充足的竞争对手，提供多种类型的加密货币。",
        textTeamHeadline: "这是团队的努力",
        textTeamSubheadline: "Litewallet 有一名全职团队负责人和一群全球志愿者。有兴趣在提高加密货币知识的同时进一步了解莱特币领域吗？"，
        textVolunteerHeadline: "申请成为志愿者",
        textDonationHeadline: "通过您的捐赠赋能莱特币的未来",
        textDonationSubheadline: "您对 Litewallet 应用程序开发人员的捐赠将有助于推动尖端功能的开发并突破可能的界限。现在就赠送进步的礼物并支持团队！",
        textDonationScan: "扫描捐赠！",
        textDonationsSend: "将 ​​LTC 发送到此地址：",
        textFooterHeadline: "Litewallet，官方莱特币移动钱包",
        textRepoHeadline: "Litewallet 代码是开源的，我们使用 Github 来维护代码库。",
        textSocialHeadline: "Litewallet 社交",
        textRepositories: "存储库：",
        textFooterSubheadline: "转到顶部"
    },
    tr: {
        textAboutMenu: "Hakkında",
        textTeamMenu: "Takım",
        textDonationMenu: "Bağış",
        textSupportMenu: "Destek",
        textHalvingPrefix: "Yarıya indirme ",
        textHalvingSuffix: " gün.",
        textViewCountdown: "Geri Sayımı Görüntüle",
        textHeadline: "Resmi Litecoin mobil cüzdanı",
        textSubheadline: "Litecoin 2011'den beri kesintisiz olarak faaliyette! Litewallet, kriptoyu kullanmanın basit ve güvenli yollarını sunan resmi %100 Litecoin cüzdanıdır.",
        textYearCreated: "OLUŞTURULDUĞU YIL",
        textMarketPrice: "GÜNCEL PİYASA FİYATI",
        textMarketCap: "GÜNCEL PİYASA KAPASİTESİ",
        textMaxSupply: "Litecoin'in maksimum arzı 84.000.000'dir LTC. ",
        textCirculatingSupply: "Ve dolaşımda olan bir arz",
        textLearnHeader: "Litecoin hakkında daha fazla bilgi edinin",
        textLitecoinDescription: "Litecoin, işlem hacimleri ve likidite açısından en köklü ve istikrarlı kripto para birimlerinden biridir ve genellikle bir değişim aracı olarak kullanılır.",
        textLitecoinDescriptionStyled: "Her yerde kullanılan gerçek bir para birimi!",
        textZeroTitle: "Sıfır kesinti süresi",
        textMWEBTitle: "MWEB Uygulaması",
        textCheapTitle: "Ucuz ücretler",
        textFastTitle: "Hızlı işlemler",
        textZeroDetail: "Litecoin, 2011'den beri kripto para birimi alanına güvenli, merkezi olmayan ve yenilikçi bir para birimi olarak öncülük ediyor.",
        textMWEBDetail: "MWEB cüzdan bakiyenizi gizli tutar. Bu, yabancıların cüzdanınızda ne olduğunu görmeden Litecoin göndermenizi sağlar.",
        textCheapDetail: "Litecoin göndermeyi inanılmaz derecede ucuz hale getirmek için tasarlanmıştır. Ağ meşgul olsa bile, yine de çok ucuzdur... kuruşlar.",
        textFastDetail: "Litecoin'in işlem işleme hızı 54 TPS'dir ve bu, Bitcoin'in 5 TPS'lik işlem işleme hızından önemli ölçüde daha yüksektir.",
        textPartnerHeadline: "Litewallet'ın kullanıcılarımıza daha fazla değer sunmasına yardımcı olan harika ortaklarımız var",
        textBitrefillDetail: "Kullanıcıların 'Kripto Üzerinde Yaşamasına' olanak tanıyan lider kripto e-ticaret mağazası.",
        textMoonpayDetail: "MoonPay 160'tan fazla ülkede faaliyet göstermektedir ve ödemeleri kabul etmek ve dolandırıcılığı önlemek için 300'den fazla önde gelen cüzdan, web sitesi ve uygulama tarafından güvenilmektedir.",
        textSimplexDetail: "Güçlü. Sorunsuz. Etkili. Sektör lideri olarak, milyonlarca insanın milyarlarca dolarlık dijital varlık satın almasını sağlamak için yüzlerce ortağı güçlendiriyoruz.",
        textUDDetail: "Dijital dünyada kimliğinize sahip olun. Bu sizin adınız. Sahip olun. Dijital dünyada kimliğinize sahip olun. Bir Web3 alan adıyla başlayın.",
        textLitecoinCreatorHeadline: "Charlie, Google'dayken Bitcoin'e ilgi duymaya başladı, Mike Hearn ile tanıştı ve ilk Bitcoin'ini aldı. Ekim 2011'de Litecoin'i piyasaya sürdü. 2016'da, amacı dünyaya Litecoin'in faydalarını öğretmek olan kar amacı gütmeyen bir kuruluş olan Litecoin Vakfı'nı kurdu.",
        textLitecoinCreatorSubheadline: "Charlie ve Kerry, Litewallet ekibiyle yakın bir şekilde çalışarak, kullanıcıların en çok istediği özellikleri sağlarken aktif kullanıcıları artırmanın yollarını tartışıyorlar. Litewallet ekibi, mütevazı bir bütçe ve çok sayıda kripto türü sunan iyi finanse edilmiş rakiplerle küreseldir.",
        textTeamHeadline: "Bu bir ekip çalışması",
        textTeamSubheadline: "Litewallet'ın tam zamanlı bir ekip lideri ve bir grup küresel gönüllüsü var. Kripto para birimi hakkındaki bilginizi geliştirirken Litecoin alanı hakkında daha fazla bilgi edinmek ister misiniz?",
        textVolunteerHeadline: "Gönüllü olmak için başvurun",
        textDonationHeadline: "Bağışınızla Litecoin'in Geleceğini Güçlendirin",
        textDonationSubheadline: "Litewallet uygulama geliştiricilerine yapacağınız bağış, en son özelliklerin geliştirilmesine yardımcı olacak ve mümkün olanın sınırlarını zorlayacaktır. İlerlemenin hediyesini verin ve takımı hemen destekleyin!",
        textDonationScan: "Vermek için tarayın!",
        textDonationsSend: "LTC'yi şu adrese gönderin:",
        textFooterHeadline: "Litewallet, Resmi Litecoin mobil cüzdanı",
        textRepoHeadline: "Litewallet kodu açık kaynaklıdır ve kod tabanını sürdürmek için Github kullanıyoruz.",
        textSocialHeadline: "Litewallet sosyal",
        textRepositories: "Depolar:",
        textFooterSubheadline: "Başa dön"
    }
};

if (window.location.hash) { 
    //Using switch statement reduces the time from O(n) to O(1)
    switch (currentLanguage) {
        case "#en":
            document.querySelector(".selected").innerText = "English";
            textAboutMenu.textContent  = language.en.textAboutMenu;
            textTeamMenu.textContent = language.en.textTeamMenu;
            textDonationMenu.textContent = language.en.textDonationMenu;
            textSupportMenu.textContent = language.en.textSupportMenu;
            textHalvingPrefix.textContent = language.en.textHalvingPrefix;
            textHalvingSuffix.textContent = language.en.textHalvingSuffix;
            textViewCountdown.textContent = language.en.textViewCountdown;
            textHeadline.textContent = language.en.textHeadline;
            textSubheadline.textContent = language.en.textSubheadline; 
            textYearCreated.textContent = language.en.textYearCreated; 
            textMarketPrice.textContent = language.en.textMarketPrice;  
            textMarketCap.textContent  = language.en.textMarketCap; 
            textMaxSupply.textContent = language.en.textMaxSupply; 
            textCirculatingSupply.textContent = language.en.textCirculatingSupply; 
            textLearnHeader.textContent = language.en.textLearnHeader; 
            textLitecoinDescription.textContent = language.en.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.en.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.en.textZeroTitle; 
            textMWEBTitle.textContent = language.en.textMWEBTitle; 
            textCheapTitle.textContent = language.en.textCheapTitle; 
            textFastTitle.textContent = language.en.textFastTitle; 
            textZeroDetail.textContent = language.en.textZeroDetail; 
            textMWEBDetail.textContent = language.en.textMWEBDetail; 
            textCheapDetail.textContent = language.en.textCheapDetail; 
            textFastDetail.textContent = language.en.textFastDetail; 
            textPartnerHeadline.textContent = language.en.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.en.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.en.textMoonpayDetail; 
            textSimplexDetail.textContent = language.en.textSimplexDetail; 
            textUDDetail.textContent = language.en.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.en.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.en.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.en.textTeamHeadline; 
            textTeamSubheadline.textContent = language.en.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.en.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.en.textDonationHeadline; 
            textDonationSubheadline.textContent = language.en.textDonationSubheadline; 
            textDonationScan.textContent = language.en.textDonationScan;
            textDonationsSend.textContent = language.en.textDonationsSend; 
            textFooterHeadline.textContent = language.en.textFooterHeadline; 
            textRepoHeadline.textContent = language.en.textRepoHeadline; 
            textSocialHeadline.textContent = language.en.textSocialHeadline; 
            textRepositories.textContent = language.en.textRepositories; 
            textFooterSubheadline = language.en.textFooterSubheadline;  
            break;
        case "#id":
            document.querySelector(".selected").innerText = "Bahasa Indonesia";
            textAboutMenu.textContent  = language.id.textAboutMenu;
            textTeamMenu.textContent = language.id.textTeamMenu;
            textDonationMenu.textContent = language.id.textDonationMenu;
            textSupportMenu.textContent = language.id.textSupportMenu;
            textHalvingPrefix.textContent = language.id.textHalvingPrefix;
            textHalvingSuffix.textContent = language.id.textHalvingSuffix;
            textViewCountdown.textContent = language.id.textViewCountdown;
            textHeadline.textContent = language.id.textHeadline;
            textSubheadline.textContent = language.id.textSubheadline; 
            textYearCreated.textContent = language.id.textYearCreated; 
            textMarketPrice.textContent = language.id.textMarketPrice;  
            textMarketCap.textContent  = language.id.textMarketCap;  
            textMaxSupply.textContent = language.id.textMaxSupply; 
            textCirculatingSupply.textContent = language.id.textCirculatingSupply; 
            textLearnHeader.textContent = language.id.textLearnHeader; 
            textLitecoinDescription.textContent = language.id.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.id.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.id.textZeroTitle; 
            textMWEBTitle.textContent = language.id.textMWEBTitle; 
            textCheapTitle.textContent = language.id.textCheapTitle; 
            textFastTitle.textContent = language.id.textFastTitle; 
            textZeroDetail.textContent = language.id.textZeroDetail; 
            textMWEBDetail.textContent = language.id.textMWEBDetail; 
            textCheapDetail.textContent = language.id.textCheapDetail; 
            textFastDetail.textContent = language.id.textFastDetail; 
            textPartnerHeadline.textContent = language.id.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.id.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.id.textMoonpayDetail; 
            textSimplexDetail.textContent = language.id.textSimplexDetail; 
            textUDDetail.textContent = language.id.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.id.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.id.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.id.textTeamHeadline; 
            textTeamSubheadline.textContent = language.id.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.id.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.id.textDonationHeadline; 
            textDonationSubheadline.textContent = language.id.textDonationSubheadline; 
            textDonationScan.textContent = language.id.textDonationScan;
            textDonationsSend.textContent = language.id.textDonationsSend; 
            textFooterHeadline.textContent = language.id.textFooterHeadline; 
            textRepoHeadline.textContent = language.id.textRepoHeadline; 
            textSocialHeadline.textContent = language.id.textSocialHeadline; 
            textRepositories.textContent = language.id.textRepositories; 
            textFooterSubheadline = language.id.textFooterSubheadline;  
            break;
        case "#es":
            document.querySelector(".selected").innerText = "Español";
            textAboutMenu.textContent  = language.es.textAboutMenu;
            textTeamMenu.textContent = language.es.textTeamMenu;
            textDonationMenu.textContent = language.es.textDonationMenu;
            textSupportMenu.textContent = language.es.textSupportMenu;
            textHalvingPrefix.textContent = language.es.textHalvingPrefix;
            textHalvingSuffix.textContent = language.es.textHalvingSuffix;
            textViewCountdown.textContent = language.es.textViewCountdown;
            textHeadline.textContent = language.es.textHeadline;
            textSubheadline.textContent = language.es.textSubheadline; 
            textYearCreated.textContent = language.es.textYearCreated; 
            textMarketPrice.textContent = language.es.textMarketPrice;  
            textMarketCap.textContent  = language.es.textMarketCap; 
            textMaxSupply.textContent = language.es.textMaxSupply; 
            textCirculatingSupply.textContent = language.es.textCirculatingSupply;                     
            textLearnHeader.textContent = language.es.textLearnHeader; 
            textLitecoinDescription.textContent = language.es.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.es.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.es.textZeroTitle; 
            textMWEBTitle.textContent = language.es.textMWEBTitle; 
            textCheapTitle.textContent = language.es.textCheapTitle; 
            textFastTitle.textContent = language.es.textFastTitle; 
            textZeroDetail.textContent = language.es.textZeroDetail; 
            textMWEBDetail.textContent = language.es.textMWEBDetail; 
            textCheapDetail.textContent = language.es.textCheapDetail; 
            textFastDetail.textContent = language.es.textFastDetail; 
            textPartnerHeadline.textContent = language.es.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.es.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.es.textMoonpayDetail; 
            textSimplexDetail.textContent = language.es.textSimplexDetail; 
            textUDDetail.textContent = language.es.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.es.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.es.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.es.textTeamHeadline; 
            textTeamSubheadline.textContent = language.es.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.es.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.es.textDonationHeadline; 
            textDonationSubheadline.textContent = language.es.textDonationSubheadline; 
            textDonationScan.textContent = language.es.textDonationScan;
            textDonationsSend.textContent = language.es.textDonationsSend; 
            textFooterHeadline.textContent = language.es.textFooterHeadline; 
            textRepoHeadline.textContent = language.es.textRepoHeadline; 
            textSocialHeadline.textContent = language.es.textSocialHeadline; 
            textRepositories.textContent = language.es.textRepositories; 
            textFooterSubheadline = language.es.textFooterSubheadline;
            break;
        case "#de":
            document.querySelector(".selected").innerText = "Deutsch";
            textAboutMenu.textContent  = language.de.textAboutMenu;
            textTeamMenu.textContent = language.de.textTeamMenu;
            textDonationMenu.textContent = language.de.textDonationMenu;
            textSupportMenu.textContent = language.de.textSupportMenu;
            textHalvingPrefix.textContent = language.de.textHalvingPrefix;
            textHalvingSuffix.textContent = language.de.textHalvingSuffix;
            textViewCountdown.textContent = language.de.textViewCountdown;
            textHeadline.textContent = language.de.textHeadline;
            textSubheadline.textContent = language.de.textSubheadline; 
            textYearCreated.textContent = language.de.textYearCreated; 
            textMarketPrice.textContent = language.de.textMarketPrice;  
            textMarketCap.textContent  = language.de.textMarketCap;  
            textMaxSupply.textContent = language.de.textMaxSupply; 
            textCirculatingSupply.textContent = language.de.textCirculatingSupply;                      
            textLearnHeader.textContent = language.de.textLearnHeader; 
            textLitecoinDescription.textContent = language.de.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.de.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.de.textZeroTitle; 
            textMWEBTitle.textContent = language.de.textMWEBTitle; 
            textCheapTitle.textContent = language.de.textCheapTitle; 
            textFastTitle.textContent = language.de.textFastTitle; 
            textZeroDetail.textContent = language.de.textZeroDetail; 
            textMWEBDetail.textContent = language.de.textMWEBDetail; 
            textCheapDetail.textContent = language.de.textCheapDetail; 
            textFastDetail.textContent = language.de.textFastDetail; 
            textPartnerHeadline.textContent = language.de.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.de.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.de.textMoonpayDetail; 
            textSimplexDetail.textContent = language.de.textSimplexDetail; 
            textUDDetail.textContent = language.de.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.de.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.de.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.de.textTeamHeadline; 
            textTeamSubheadline.textContent = language.de.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.de.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.de.textDonationHeadline; 
            textDonationSubheadline.textContent = language.de.textDonationSubheadline; 
            textDonationScan.textContent = language.de.textDonationScan;
            textDonationsSend.textContent = language.de.textDonationsSend; 
            textFooterHeadline.textContent = language.de.textFooterHeadline; 
            textRepoHeadline.textContent = language.de.textRepoHeadline; 
            textSocialHeadline.textContent = language.de.textSocialHeadline; 
            textRepositories.textContent = language.de.textRepositories; 
            textFooterSubheadline = language.de.textFooterSubheadline;  
            break;
        case "#pt":
            document.querySelector(".selected").innerText = "Portuguese";
            textAboutMenu.textContent  = language.pt.textAboutMenu;
            textTeamMenu.textContent = language.pt.textTeamMenu;
            textDonationMenu.textContent = language.pt.textDonationMenu;
            textSupportMenu.textContent = language.pt.textSupportMenu;
            textHalvingPrefix.textContent = language.pt.textHalvingPrefix;
            textHalvingSuffix.textContent = language.pt.textHalvingSuffix;
            textViewCountdown.textContent = language.pt.textViewCountdown;
            textHeadline.textContent = language.pt.textHeadline;
            textSubheadline.textContent = language.pt.textSubheadline; 
            textYearCreated.textContent = language.pt.textYearCreated; 
            textMarketPrice.textContent = language.pt.textMarketPrice;  
            textMarketCap.textContent  = language.pt.textMarketCap; 
            textMaxSupply.textContent = language.pt.textMaxSupply; 
            textCirculatingSupply.textContent = language.pt.textCirculatingSupply;                      
            textLearnHeader.textContent = language.pt.textLearnHeader; 
            textLitecoinDescription.textContent = language.pt.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.pt.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.pt.textZeroTitle; 
            textMWEBTitle.textContent = language.pt.textMWEBTitle; 
            textCheapTitle.textContent = language.pt.textCheapTitle; 
            textFastTitle.textContent = language.pt.textFastTitle; 
            textZeroDetail.textContent = language.pt.textZeroDetail; 
            textMWEBDetail.textContent = language.pt.textMWEBDetail; 
            textCheapDetail.textContent = language.pt.textCheapDetail; 
            textFastDetail.textContent = language.pt.textFastDetail; 
            textPartnerHeadline.textContent = language.pt.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.pt.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.pt.textMoonpayDetail; 
            textSimplexDetail.textContent = language.pt.textSimplexDetail; 
            textUDDetail.textContent = language.pt.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.pt.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.pt.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.pt.textTeamHeadline; 
            textTeamSubheadline.textContent = language.pt.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.pt.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.pt.textDonationHeadline; 
            textDonationSubheadline.textContent = language.pt.textDonationSubheadline; 
            textDonationScan.textContent = language.pt.textDonationScan;
            textDonationsSend.textContent = language.pt.textDonationsSend; 
            textFooterHeadline.textContent = language.pt.textFooterHeadline; 
            textRepoHeadline.textContent = language.pt.textRepoHeadline; 
            textSocialHeadline.textContent = language.pt.textSocialHeadline; 
            textRepositories.textContent = language.pt.textRepositories; 
            textFooterSubheadline = language.pt.textFooterSubheadline;  
            break;
        case "#ko":
            document.querySelector(".selected").innerText = "한국인";
            textAboutMenu.textContent  = language.ko.textAboutMenu;
            textTeamMenu.textContent = language.ko.textTeamMenu;
            textDonationMenu.textContent = language.ko.textDonationMenu;
            textSupportMenu.textContent = language.ko.textSupportMenu;
            textHalvingPrefix.textContent = language.ko.textHalvingPrefix;
            textHalvingSuffix.textContent = language.ko.textHalvingSuffix;
            textViewCountdown.textContent = language.ko.textViewCountdown;
            textHeadline.textContent = language.ko.textHeadline;
            textSubheadline.textContent = language.ko.textSubheadline; 
            textYearCreated.textContent = language.ko.textYearCreated; 
            textMarketPrice.textContent = language.ko.textMarketPrice;  
            textMarketCap.textContent  = language.ko.textMarketCap;  
            textMaxSupply.textContent = language.ko.textMaxSupply; 
            textCirculatingSupply.textContent = language.ko.textCirculatingSupply;   
            textLearnHeader.textContent = language.ko.textLearnHeader; 
            textLitecoinDescription.textContent = language.ko.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.ko.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.ko.textZeroTitle; 
            textMWEBTitle.textContent = language.ko.textMWEBTitle; 
            textCheapTitle.textContent = language.ko.textCheapTitle; 
            textFastTitle.textContent = language.ko.textFastTitle; 
            textZeroDetail.textContent = language.ko.textZeroDetail; 
            textMWEBDetail.textContent = language.ko.textMWEBDetail; 
            textCheapDetail.textContent = language.ko.textCheapDetail; 
            textFastDetail.textContent = language.ko.textFastDetail; 
            textPartnerHeadline.textContent = language.ko.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.ko.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.ko.textMoonpayDetail; 
            textSimplexDetail.textContent = language.ko.textSimplexDetail; 
            textUDDetail.textContent = language.ko.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.ko.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.ko.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.ko.textTeamHeadline; 
            textTeamSubheadline.textContent = language.ko.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.ko.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.ko.textDonationHeadline; 
            textDonationSubheadline.textContent = language.ko.textDonationSubheadline; 
            textDonationScan.textContent = language.ko.textDonationScan;
            textDonationsSend.textContent = language.ko.textDonationsSend; 
            textFooterHeadline.textContent = language.ko.textFooterHeadline; 
            textRepoHeadline.textContent = language.ko.textRepoHeadline; 
            textSocialHeadline.textContent = language.ko.textSocialHeadline; 
            textRepositories.textContent = language.ko.textRepositories; 
            textFooterSubheadline = language.ko.textFooterSubheadline;
            break;
        case "#uk":
            document.querySelector(".selected").innerText = "українська";
            textAboutMenu.textContent  = language.uk.textAboutMenu;
            textTeamMenu.textContent = language.uk.textTeamMenu;
            textDonationMenu.textContent = language.uk.textDonationMenu;
            textSupportMenu.textContent = language.uk.textSupportMenu;
            textHalvingPrefix.textContent = language.uk.textHalvingPrefix;
            textHalvingSuffix.textContent = language.uk.textHalvingSuffix;
            textViewCountdown.textContent = language.uk.textViewCountdown;
            textHeadline.textContent = language.uk.textHeadline;
            textSubheadline.textContent = language.uk.textSubheadline; 
            textYearCreated.textContent = language.uk.textYearCreated; 
            textMarketPrice.textContent = language.uk.textMarketPrice;  
            textMarketCap.textContent  = language.uk.textMarketCap; 
            textMaxSupply.textContent = language.uk.textMaxSupply; 
            textCirculatingSupply.textContent = language.uk.textCirculatingSupply;                    
            textLearnHeader.textContent = language.uk.textLearnHeader; 
            textLitecoinDescription.textContent = language.uk.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.uk.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.uk.textZeroTitle; 
            textMWEBTitle.textContent = language.uk.textMWEBTitle; 
            textCheapTitle.textContent = language.uk.textCheapTitle; 
            textFastTitle.textContent = language.uk.textFastTitle; 
            textZeroDetail.textContent = language.uk.textZeroDetail; 
            textMWEBDetail.textContent = language.uk.textMWEBDetail; 
            textCheapDetail.textContent = language.uk.textCheapDetail; 
            textFastDetail.textContent = language.uk.textFastDetail; 
            textPartnerHeadline.textContent = language.uk.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.uk.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.uk.textMoonpayDetail; 
            textSimplexDetail.textContent = language.uk.textSimplexDetail; 
            textUDDetail.textContent = language.uk.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.uk.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.uk.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.uk.textTeamHeadline; 
            textTeamSubheadline.textContent = language.uk.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.uk.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.uk.textDonationHeadline; 
            textDonationSubheadline.textContent = language.uk.textDonationSubheadline; 
            textDonationScan.textContent = language.uk.textDonationScan;
            textDonationsSend.textContent = language.uk.textDonationsSend; 
            textFooterHeadline.textContent = language.uk.textFooterHeadline; 
            textRepoHeadline.textContent = language.uk.textRepoHeadline; 
            textSocialHeadline.textContent = language.uk.textSocialHeadline; 
            textRepositories.textContent = language.uk.textRepositories; 
            textFooterSubheadline = language.uk.textFooterSubheadline;
            break;
        case "#ru":
            document.querySelector(".selected").innerText = "Русский";
            textAboutMenu.textContent  = language.ru.textAboutMenu;
            textTeamMenu.textContent = language.ru.textTeamMenu;
            textDonationMenu.textContent = language.ru.textDonationMenu;
            textSupportMenu.textContent = language.ru.textSupportMenu;
            textHalvingPrefix.textContent = language.ru.textHalvingPrefix;
            textHalvingSuffix.textContent = language.ru.textHalvingSuffix;
            textViewCountdown.textContent = language.ru.textViewCountdown;
            textHeadline.textContent = language.ru.textHeadline;
            textSubheadline.textContent = language.ru.textSubheadline; 
            textYearCreated.textContent = language.ru.textYearCreated; 
            textMarketPrice.textContent = language.ru.textMarketPrice;  
            textMarketCap.textContent  = language.ru.textMarketCap;  
            textMaxSupply.textContent = language.ru.textMaxSupply; 
            textCirculatingSupply.textContent = language.ru.textCirculatingSupply; 
            textLearnHeader.textContent = language.ru.textLearnHeader; 
            textLitecoinDescription.textContent = language.ru.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.ru.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.ru.textZeroTitle; 
            textMWEBTitle.textContent = language.ru.textMWEBTitle; 
            textCheapTitle.textContent = language.ru.textCheapTitle; 
            textFastTitle.textContent = language.ru.textFastTitle; 
            textZeroDetail.textContent = language.ru.textZeroDetail; 
            textMWEBDetail.textContent = language.ru.textMWEBDetail; 
            textCheapDetail.textContent = language.ru.textCheapDetail; 
            textFastDetail.textContent = language.ru.textFastDetail; 
            textPartnerHeadline.textContent = language.ru.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.ru.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.ru.textMoonpayDetail; 
            textSimplexDetail.textContent = language.ru.textSimplexDetail; 
            textUDDetail.textContent = language.ru.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.ru.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.ru.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.ru.textTeamHeadline; 
            textTeamSubheadline.textContent = language.ru.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.ru.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.ru.textDonationHeadline; 
            textDonationSubheadline.textContent = language.ru.textDonationSubheadline; 
            textDonationScan.textContent = language.ru.textDonationScan;
            textDonationsSend.textContent = language.ru.textDonationsSend; 
            textFooterHeadline.textContent = language.ru.textFooterHeadline; 
            textRepoHeadline.textContent = language.ru.textRepoHeadline; 
            textSocialHeadline.textContent = language.ru.textSocialHeadline; 
            textRepositories.textContent = language.ru.textRepositories; 
            textFooterSubheadline = language.ru.textFooterSubheadline;
            break;
        case "#fr":
            document.querySelector(".selected").innerText = "Français";
            textAboutMenu.textContent  = language.fr.textAboutMenu;
            textTeamMenu.textContent = language.fr.textTeamMenu;
            textDonationMenu.textContent = language.fr.textDonationMenu;
            textSupportMenu.textContent = language.fr.textSupportMenu;
            textHalvingPrefix.textContent = language.fr.textHalvingPrefix;
            textHalvingSuffix.textContent = language.fr.textHalvingSuffix;
            textViewCountdown.textContent = language.fr.textViewCountdown;
            textHeadline.textContent = language.fr.textHeadline;
            textSubheadline.textContent = language.fr.textSubheadline; 
            textYearCreated.textContent = language.fr.textYearCreated; 
            textMarketPrice.textContent = language.fr.textMarketPrice;  
            textMarketCap.textContent  = language.fr.textMarketCap;  
            textMaxSupply.textContent = language.fr.textMaxSupply; 
            textCirculatingSupply.textContent = language.fr.textCirculatingSupply;                     
            textLearnHeader.textContent = language.fr.textLearnHeader; 
            textLitecoinDescription.textContent = language.fr.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.fr.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.fr.textZeroTitle; 
            textMWEBTitle.textContent = language.fr.textMWEBTitle; 
            textCheapTitle.textContent = language.fr.textCheapTitle; 
            textFastTitle.textContent = language.fr.textFastTitle; 
            textZeroDetail.textContent = language.fr.textZeroDetail; 
            textMWEBDetail.textContent = language.fr.textMWEBDetail; 
            textCheapDetail.textContent = language.fr.textCheapDetail; 
            textFastDetail.textContent = language.fr.textFastDetail; 
            textPartnerHeadline.textContent = language.fr.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.fr.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.fr.textMoonpayDetail; 
            textSimplexDetail.textContent = language.fr.textSimplexDetail; 
            textUDDetail.textContent = language.fr.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.fr.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.fr.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.fr.textTeamHeadline; 
            textTeamSubheadline.textContent = language.fr.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.fr.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.fr.textDonationHeadline; 
            textDonationSubheadline.textContent = language.fr.textDonationSubheadline; 
            textDonationScan.textContent = language.fr.textDonationScan;
            textDonationsSend.textContent = language.fr.textDonationsSend; 
            textFooterHeadline.textContent = language.fr.textFooterHeadline; 
            textRepoHeadline.textContent = language.fr.textRepoHeadline; 
            textSocialHeadline.textContent = language.fr.textSocialHeadline; 
            textRepositories.textContent = language.fr.textRepositories; 
            textFooterSubheadline = language.fr.textFooterSubheadline;  
            break;
        case "#zhCN":
            document.querySelector(".selected").innerText = "中国人";
            textAboutMenu.textContent  = language.zhCN.textAboutMenu;
            textTeamMenu.textContent = language.zhCN.textTeamMenu;
            textDonationMenu.textContent = language.zhCN.textDonationMenu;
            textSupportMenu.textContent = language.zhCN.textSupportMenu;
            textHalvingPrefix.textContent = language.zhCN.textHalvingPrefix;
            textHalvingSuffix.textContent = language.zhCN.textHalvingSuffix;
            textViewCountdown.textContent = language.zhCN.textViewCountdown;
            textHeadline.textContent = language.zhCN.textHeadline;
            textSubheadline.textContent = language.zhCN.textSubheadline; 
            textYearCreated.textContent = language.zhCN.textYearCreated; 
            textMarketPrice.textContent = language.zhCN.textMarketPrice;  
            textMarketCap.textContent  = language.zhCN.textMarketCap; 
            textMaxSupply.textContent = language.zhCN.textMaxSupply; 
            textCirculatingSupply.textContent = language.zhCN.textCirculatingSupply;  
            textLearnHeader.textContent = language.zhCN.textLearnHeader; 
            textLitecoinDescription.textContent = language.zhCN.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.zhCN.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.zhCN.textZeroTitle; 
            textMWEBTitle.textContent = language.zhCN.textMWEBTitle; 
            textCheapTitle.textContent = language.zhCN.textCheapTitle; 
            textFastTitle.textContent = language.zhCN.textFastTitle; 
            textZeroDetail.textContent = language.zhCN.textZeroDetail; 
            textMWEBDetail.textContent = language.zhCN.textMWEBDetail; 
            textCheapDetail.textContent = language.zhCN.textCheapDetail; 
            textFastDetail.textContent = language.zhCN.textFastDetail; 
            textPartnerHeadline.textContent = language.zhCN.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.zhCN.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.zhCN.textMoonpayDetail; 
            textSimplexDetail.textContent = language.zhCN.textSimplexDetail; 
            textUDDetail.textContent = language.zhCN.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.zhCN.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.zhCN.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.zhCN.textTeamHeadline; 
            textTeamSubheadline.textContent = language.zhCN.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.zhCN.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.zhCN.textDonationHeadline; 
            textDonationSubheadline.textContent = language.zhCN.textDonationSubheadline;
            textDonationScan.textContent = language.zhCN.textDonationScan; 
            textDonationsSend.textContent = language.zhCN.textDonationsSend; 
            textFooterHeadline.textContent = language.zhCN.textFooterHeadline; 
            textRepoHeadline.textContent = language.zhCN.textRepoHeadline; 
            textSocialHeadline.textContent = language.zhCN.textSocialHeadline; 
            textRepositories.textContent = language.zhCN.textRepositories; 
            textFooterSubheadline = language.zhCN.textFooterSubheadline;  
            break;
        case "#tr":
            document.querySelector(".selected").innerText = "Türkçe";
            textAboutMenu.textContent  = language.tr.textAboutMenu;
            textTeamMenu.textCoent = language.tr.textTeamMenu;
            textDonationMenu.textContent = language.tr.textDonationMenu;
            textSupportMenu.textContent = language.tr.textSupportMenu;
            textHalvingPrefix.textContent = language.tr.textHalvingPrefix;
            textHalvingSuffix.textContent = language.tr.textHalvingSuffix;
            textViewCountdown.textContent = language.tr.textViewCountdown;
            textHeadline.textContent = language.tr.textHeadline;
            textSubheadline.textContent = language.tr.textSubheadline; 
            textYearCreated.textContent = language.tr.textYearCreated; 
            textMarketPrice.textContent = language.tr.textMarketPrice;  
            textMarketCap.textContent  = language.tr.textMarketCap; 
            textMaxSupply.textContent = language.tr.textMaxSupply; 
            textCirculatingSupply.textContent = language.tr.textCirculatingSupply; 
            textLearnHeader.textContent = language.tr.textLearnHeader; 
            textLitecoinDescription.textContent = language.tr.textLitecoinDescription; 
            textLitecoinDescriptionStyled.textContent = language.tr.textLitecoinDescriptionStyled; 
            textZeroTitle.textContent = language.tr.textZeroTitle; 
            textMWEBTitle.textContent = language.tr.textMWEBTitle; 
            textCheapTitle.textContent = language.tr.textCheapTitle; 
            textFastTitle.textContent = language.tr.textFastTitle; 
            textZeroDetail.textContent = language.tr.textZeroDetail; 
            textMWEBDetail.textContent = language.tr.textMWEBDetail; 
            textCheapDetail.textContent = language.tr.textCheapDetail; 
            textFastDetail.textContent = language.tr.textFastDetail; 
            textPartnerHeadline.textContent = language.tr.textPartnerHeadline; 
            textBitrefillDetail.textContent = language.tr.textBitrefillDetail; 
            textMoonpayDetail.textContent = language.tr.textMoonpayDetail; 
            textSimplexDetail.textContent = language.tr.textSimplexDetail; 
            textUDDetail.textContent = language.tr.textUDDetail; 
            textLitecoinCreatorHeadline.textContent = language.tr.textLitecoinCreatorHeadline; 
            textLitecoinCreatorSubheadline.textContent = language.tr.textLitecoinCreatorSubheadline; 
            textTeamHeadline.textContent = language.tr.textTeamHeadline; 
            textTeamSubheadline.textContent = language.tr.textTeamSubheadline; 
            textVolunteerHeadline.textContent = language.tr.textVolunteerHeadline; 
            textDonationHeadline.textContent = language.tr.textDonationHeadline; 
            textDonationSubheadline.textContent = language.tr.textDonationSubheadline; 
            textDonationScan.textContent = language.tr.textDonationScan;
            textDonationsSend.textContent = language.tr.textDonationsSend; 
            textFooterHeadline.textContent = language.tr.textFooterHeadline; 
            textRepoHeadline.textContent = language.tr.textRepoHeadline; 
            textSocialHeadline.textContent = language.tr.textSocialHeadline; 
            textRepositories.textContent = language.tr.textRepositories; 
            textFooterSubheadline = language.tr.textFooterSubheadline;
            break; 
    } 
}

// get all dropdowns
const dropdownItems = document.querySelectorAll('.dropdown');

// iterate all dropdown elements
dropdownItems.forEach(el => {
    // get inner elements of each dropdown
    const select = el.querySelector('.select');
    const caret = el.querySelector('.caret');
    const menuDropdown = el.querySelector('.menu-dropdown');
    const selected = el.querySelector('.selected');
    const options = el.querySelectorAll('.menu-dropdown li');
            
    // click event for the select element
    select.addEventListener('click', () => {
        // add the styles to caret, and menu dropdown
        caret.classList.toggle('caret-rotate');
        menuDropdown.classList.toggle('menu-dropdown-open');
    });

    // iterate through all option elements
    options.forEach(option => {
        // click event for each option
        option.addEventListener('click', () => {
            // remove styles to the select element, caret, 
            // menu dropdown, and active class from all option elements
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menuDropdown.classList.remove('menu-dropdown-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            // add active class to clicked option element
            option.classList.add('active');
            location.hash = option.getAttribute("data-lang");
	        location.reload();
                    
        });
    });
});