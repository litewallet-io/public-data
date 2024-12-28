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
                textSupportMenu: "Dukung",
                textHalvingPrefix: "Membagi dua dalam ",
                textHalvingSuffix: " hari. ", 
                textViewCountdown: "Lihat Hitung Mundur",
                textHeadline: "Dompet Litecoin resmi untuk Smartphone",
                textSubheadline: "Litecoin telah beroperasi sejak tahun 2011 tanpa henti! Litewallet adalah dompet resmi yang didukung oleh Litecoin Foundation yang menawarkan kemudahan dan keamanan untuk menggunakan Litecoin.",
                textYearCreated: "TAHUN DIBUAT",
                textMarketPrice: "HARGA PASAR SAAT INI",
                textMarketCap: "KAPITALISASI PASAR SAAT INI",
                textMaxSupply: "Litecoin memiliki pasokan maksimal 84.000.000 LTC. ", 
                textCirculatingSupply: "Dan pasokan beredar", 
                textLearnHeader:  "Pelajari lebih lanjut tentang Litecoin",
                textLitecoinDescription:  "Litecoin adalah salah satu mata uang kripto yang paling mapan dan stabil dalam hal volume transaksi dan likuiditas, dan umumnya digunakan sebagai alat tukar.",
                textLitecoinDescriptionStyled:  "Ini adalah mata uang sungguhan yang digunakan di mana pun!",
                textZeroTitle:  "Tanpa waktu henti",
                textMWEBTitle:  "Implementasi MWEB",
                textCheapTitle:  "Biaya murah",
                textFastTitle:  "Transaksi cepat",
                textZeroDetail: "Sejak tahun 2011, Litecoin telah memimpin dunia mata uang kripto sebagai mata uang yang aman, terdesentralisasi, dan inovatif.",
                textMWEBDetail:  "MWEB membuat saldo dompet Anda tetap tersembunyi. Hal ini memungkinkan Anda untuk mengirim Litecoin tanpa ada orang asing yang melihat apa yang ada di dalam dompet Anda.",
                textCheapDetail:  "Litecoin dirancang untuk membuatnya sangat murah untuk dikirim. Jika jaringan sedang sibuk, harganya masih sangat murah...",
                textFastDetail:  "Litecoin memiliki kecepatan pemrosesan transaksi 54 TPS, yang secara signifikan lebih tinggi daripada kecepatan pemrosesan transaksi Bitcoin yang hanya 5 TPS.",
                textPartnerHeadline:  "Kami memiliki partner-partner hebat yang membantu Litewallet memberikan nilai lebih kepada para pengguna",
                textBitrefillDetail:  "Toko e-commerce kripto terkemuka yang memungkinkan pengguna untuk 'Hidup dengan Kripto'.",
                textMoonpayDetail:  "MoonPay aktif di lebih dari 160 negara dan dipercaya oleh 300+ dompet, situs web, dan aplikasi terkemuka untuk menerima pembayaran dan mengatasi penipuan.",
                textSimplexDetail:  "Powerfull. Sempurna. Berpengaruh. Sebagai pemimpin industri, memberdayakan ratusan mitra untuk memungkinkan jutaan orang membeli aset digital bernilai miliaran dolar.",
                textUDDetail:  "Miliki identitas Anda di dunia digital. Ini adalah nama Anda. Milikilah. Miliki identitas Anda di dunia digital. Mulailah dengan domain Web3.",
                textLitecoinCreatorHeadline:  "Ketika berkarir di Google, Charlie menjadi tertarik dengan Bitcoin setelah bertemu Mike Hearn dan mendapatkan Bitcoin pertamanya. Dia meluncurkan Litecoin pada Oktober 2011. Dia mendirikan Litecoin Foundation pada tahun 2016, sebuah organisasi non-profit yang memiliki misi untuk mengajarkan manfaat Litecoin kepada dunia.",
                textLitecoinCreatorSubheadline:  "Bekerja sama secara dekat dengan tim Litewallet, Charlie dan Kerry mendiskusikan cara-cara untuk meningkatkan pengguna aktif sambil menyediakan fitur yang paling diinginkan pengguna. Tim Litewallet bersifat global dengan anggaran sederhana dan sejumlah besar pesaing yang memiliki dana besar yang menawarkan banyak jenis kripto.",
                textTeamHeadline:  "Ini adalah upaya tim",
                textTeamSubheadline:  "Litewallet memiliki satu team leader penuh waktu dan sekelompok sukarelawan global. Tertarik untuk mempelajari lebih lanjut tentang ruang Litecoin sambil meningkatkan pengetahuan Anda tentang cryptocurrency?",
                textVolunteerHeadline:  "Bergabung menjadi sukarelawan",
                textDonationHeadline:  "Dukung Masa Depan Litecoin dengan donasi Anda",
                textDonationSubheadline:  "Donasi Anda kepada pengembang aplikasi Litewallet akan membantu mendorong pengembangan fitur-fitur terdepan dan melampaui batas-batas yang dimungkinkan. Berikan dukungan untuk kemajuan dan dukung tim sekarang juga!",
                textDonationScan: "Scan untuk memberi!",
                extDonationsSend:  "Kirim LTC ke alamat ini:",
                textFooterHeadline:  "Litewallet, Dompet Litecoin resmi",
                textRepoHeadline: "Kode Litewallet bersifat open source dan kami menggunakan Github untuk memelihara basis kode.",
                textSocialHeadline:  "Media Sosial Litewallet",
                textRepositories:  "Repositori:",
                textFooterSubheadline:  "Ke atas",
    },
    fr: {
                textAboutMenu: "À propos",
                textTeamMenu: "Équipe",
                textDonationMenu: "Don",
                textSupportMenu: "Soutien",
                textHalvingPrefix: "Réduire de moitié",
                textHalvingSuffix: " jours.", 
                textViewCountdown: "Afficher le compte à rebours",
                textHeadline: "Le portefeuille mobile Litecoin officiel",
                textSubheadline: "Litecoin est opérationnel depuis 2011 sans temps d'arrêt ! Litewallet est le portefeuille officiel soutenu par la Fondation Litecoin qui offre des moyens simples et sûrs d'utiliser Litecoin.",
                textYearCreated: "ANNÉE DE CRÉATION",
                textMarketPrice: "PRIX ACTUEL DU MARCHÉ",
                textMarketCap: "CAPACITÉ DE MARCHÉ ACTUELLE",
                textMaxSupply: "Litecoin a une offre maximale de 84 000 000 LTC. ", 
                textCirculatingSupply: "Et un approvisionnement en circulation de", 
                textCirculatingPrefixSuffix: "Litecoin a une offre en circulation de et un max. fourniture de",
                textLearnHeader: "En savoir plus sur le Litecoin",
                textLitecoinDescription: "Litecoin est l'une des crypto-monnaies les plus établies et les plus stables en termes de volumes de transactions et de liquidité, et est couramment utilisée comme moyen d'échange.",
                textLitecoinDescriptionStyled: "C'est une véritable monnaie utilisée partout!",
                textZeroTitle: "Zéro temps d'arrêt",
                textMWEBTitle: "Implémentation MWEB",
                textCheapTitle: "Prix pas cher",
                textFastTitle: "Transactions rapides",
                textZeroDetail: "Depuis 2011, Litecoin est à la tête de l'espace des crypto-monnaies en tant que monnaie sécurisée, décentralisée et innovante.",
                textMWEBDetail: "MWEB garde le solde de votre portefeuille caché. Cela vous permet d'envoyer des Litecoins sans que des étrangers ne voient ce qu'il y a dans votre portefeuille.",
                textCheapDetail: "Litecoin a été conçu pour le rendre incroyablement bon marché à envoyer. Si le réseau est occupé, c'est encore très bon marché... des sous.",
                textFastDetail: "Litecoin a une vitesse de traitement des transactions de 54 TPS, ce qui est nettement supérieur à la vitesse de traitement des transactions de Bitcoin de 5 TPS.",
                textPartnerHeadline: "Nous avons d'excellents partenaires qui aident Litewallet à offrir plus de valeur à nos utilisateurs",
                textBitrefillDetail: "Principal magasin de commerce électronique crypto qui permet aux utilisateurs de 'vivre sur Crypto'.",
                textMoonpayDetail: "MoonPay est actif dans plus de 160 pays et bénéficie de la confiance de plus de 300 portefeuilles, sites Web et applications de premier plan pour accepter les paiements et lutter contre la fraude.",
                textSimplexDetail: "Puissant. Transparent. Impactant. En tant que leader du secteur, nous donnons à des centaines de partenaires les moyens de permettre à des millions de personnes d'acheter des milliards de dollars d'actifs numériques.",
                textUDDetail: "Posséder votre identité dans le monde numérique. C'est ton nom. Posséder. Posséder votre identité dans le monde numérique. Commencez avec un domaine Web3.",
                textLitecoinCreatorHeadline: "Alors qu'il était chez Google, Charlie s'est intéressé à Bitcoin en rencontrant Mike Hearn et en obtenant son premier Bitcoin. Il a lancé le Litecoin en octobre 2011. Il a fondé la Fondation Litecoin en 2016, une organisation à but non lucratif dont la mission est d'enseigner au monde les avantages du Litecoin.",
                textLitecoinCreatorSubheadline: "Travaillant en étroite collaboration avec l'équipe Litewallet, Charlie et Kerry discutent des moyens d'augmenter le nombre d'utilisateurs actifs tout en offrant les fonctionnalités que les utilisateurs souhaitent le plus. L'équipe Litewallet est mondiale avec un budget modeste et un grand nombre de concurrents bien financés offrant de nombreux types de crypto.",
                textTeamHeadline: "C'est un travail d'équipe",
                textTeamSubheadline: "Litewallet a un chef d'équipe à plein temps et un groupe de volontaires mondiaux. Vous souhaitez en savoir plus sur l'espace Litecoin tout en améliorant vos connaissances sur la crypto-monnaie ?",
                textVolunteerHeadline: "Postulez pour devenir bénévole",
                textDonationHeadline: "Renforcez l'avenir de Litecoin avec votre don",
                textDonationSubheadline: "Votre don aux développeurs d'applications Litewallet contribuera à alimenter le développement de fonctionnalités de pointe et à repousser les limites de ce qui est possible. Offrez le progrès et soutenez l'équipe dès maintenant!",
                textDonationScan: "Scannez pour donner!",
                textDonationsSend: "Envoyez LTC à cette adresse:",
                textFooterHeadline: "Litewallet, le portefeuille officiel Litecoin",
                textRepoHeadline: "Le code Litewallet est open source et nous utilisons Github pour maintenir la base de code.",
                textSocialHeadline: "Litewallet social",
                textRepositories: "Référentiels",
                textFooterSubheadline: "Aller en haut",
    },
    es: {
                textAboutMenu: "Sobre",
                textTeamMenu: "Equipo",
                textDonationMenu: "Donación",
                textSupportMenu: "Soporte",
                textHalvingPrefix: "Halving en",
                textHalvingSuffix: " días.",
                textViewCountdown: "Ver cuenta regresiva",
                textHeadline: "La cartera móvil Oficial de Litecoin",
                textHalving: "Halving en 000 días.",
                textSubheadline: "¡Litecoin ha estado operativo desde 2011 sin tiempo de inactividad! Litewallet es la cartera oficial respaldada por la Fundación Litecoin que ofrece formas simples y seguras para usar Litecoin.",
                textYearCreated: "AÑO DE CREACIÓN",
                textMarketPrice: "PRECIO ACTUAL DE MERCADO",
                textMarketCap: "CAPITAL DE MERCADO ACTUAL",
                textMaxSupply: "Litecoin tiene un suministro máximo de 84,000,000 LTC. ", 
                textCirculatingSupply: "Y un suministro circulante de",  
                textLearnHeader: "Aprende más sobre Litecoin",
                textLitecoinDescription: "Litecoin es una de las criptomonedas más establecidas y estables en términos de volumen de transacciones y liquidez, y es frecuentemente usada como medio de intercambio.",
                textLitecoinDescriptionStyled: "¡Es una moneda real usada en todas partes!",
                textZeroTitle: "Sin tiempo de inactividad",
                textMWEBTitle: "Implementación MWEB",
                textCheapTitle: "Tarifas baratas",
                textFastTitle: "Transacciones rápidas",
                textZeroDetail: "Desde 2011, Litecoin ha liderado el espacio de las criptomonedas como una moneda segura, descentralizada e innovadora.",
                textMWEBDetail: "MWEB mantiene el balance de tu cartera oculto. Esto te permite enviar Litecoin sin que extraños vean qué hay en tu cartera.",
                textCheapDetail: "Litecoin fué diseñado para hacer que enviar sea increíblemente barato. Si la red está ocupada, sigue siendo muy barato... centavos.",
                textFastDetail: "Litecoin tiene una velocidad de procesamiento de transacciones de 54 TPS, que es significativamente más alta que la velocidad de procesamiento de transacciones de Bitcoin de 5 TPS.",
                textPartnerHeadline: "Tenemos grandes socios que ayudan a Litewallet a a aportar más valor a los usuarios",
                textBitrefillDetail: "Tienda líder de comercio electrónico de criptomonedas que permite a los usuarios 'vivir en criptomonedas’.",
                textMoonpayDetail: "MoonPay está activo en más de 160 países y  más de 300 carteras, webs y aplicaciones confían en él para aceptar pagos y vencer el fraude.",
                textSimplexDetail: "Poderoso. Sin fisuras. Impactante. Como líder de la industria, empoderamos a cientos de socios para permitir que millones de personas compren miles de millones de dólares en activos digitales.",
                textUDDetail: "Sé dueño de tu identidad en el mundo digital. Es tu nombre. Adquiérelo. Posee tu identidad en el mundo digital. Comienza con un dominio Web3.",
                textLitecoinCreatorHeadline: "Mientras estaba en Google, Charlie se interesó en que Bitcoin conociera a Mike Hearn y obtuviera su primer Bitcoin. Lanzó Litecoin en octubre de 2011. Fundó Litecoin Foundation en 2016, una organización sin ánimo de lucro cuya misión es enseñar al mundo los beneficios de Litecoin.",
                textLitecoinCreatorSubheadline: "Trabajando de cerca con el equipo de Litewallet, Charlie y Kerry debaten maneras de incrementar la cantidad de usuarios activos a la vez que proporcionan las funciones deseadas por los usuarios. El equipo de Litewallet es internacional, con un presupuesto modesto y una gran cantidad de competidores bien financiados que ofrecen muchos tipos de criptomonedas.",
                textTeamHeadline: "Es esfuerzo de equipo",
                textTeamSubheadline: "Litewallet tiene un líder de equipo a tiempo completo y un grupo de voluntarios internacionales. ¿Interesado en aprender más sobre el espacio Litecoin mientras mejoras tu conocimiento de las criptomonedas?",
                textVolunteerHeadline: "Aplica para ser un voluntario",
                textDonationHeadline: "Empodera el futuro de Litecoin con tu donación",
                textDonationSubheadline: "Tu donación a los desarrolladores de la aplicación Litewallet ayudará a impulsar el desarrollo de funciones de vanguardia y ampliará los límites de lo que es posible. ¡Da el regalo del progreso y apoya al equipo ahora! ",
                textDonationScan: "¡Escanea para dar!",
                textDonationsSend: "Envía LTC a esta dirección:",
                textFooterHeadline: "Litewallet, La cartera oficial de Litewallet",
                textRepoHeadline: "El código de Litewallet es de fuente abierta y usamos Github para mantener la base de código.",
                textSocialHeadline: "Litewallet social",
                textRepositories: "Repositorios:",
                textFooterSubheadline: "Vé a lo más alto"   
    },
    de: {
                textAboutMenu: "Über",
                textTeamMenu: "Team",
                textDonationMenu: "Spende",
                textSupportMenu: "Unterstützung",
                textHalvingPrefix: "Halbierung in ",
                textHalvingSuffix: " Tagen. ", 
                textViewCountdown: "Countdown anzeigen",
                textHeadline: "Die offizielle Litecoin-Geldbörse",
                textSubheadline: "Litecoin ist seit 2011 ohne Ausfallzeiten in Betrieb! Litewallet ist die offizielle, von der Litecoin Foundation unterstützte Wallet, die einfache und sichere Möglichkeiten zur Nutzung von Litecoin bietet.",
                textYearCreated: "JAHR DER ERSTELLUNG",
                textMarketPrice: "AKTUELLER MARKTPREIS",
                textMarketCap: "AKTUELLE MARKTKAPITALISIERUNG",
                textMaxSupply: "Litecoin hat ein maximales Angebot von 84.000.000 LTC", 
                textCirculatingSupply: "Und eine zirkulierende Versorgung mit", 
                textCirculatingPrefixSuffix: "Litecoin hat einen zirkulierenden Vorrat von und einen maximalen Vorrat von ",
                textLearnHeader: "Erfahren Sie mehr über Litecoin",
                textLitecoinDescription: "Litecoin ist eine der etabliertesten und stabilsten Kryptowährungen, was das Transaktionsvolumen und die Liquidität angeht, und wird häufig als Tauschmittel verwendet.",
                textLitecoinDescriptionStyled: "Es ist eine echte Währung, die überall verwendet wird!",
                textZeroTitle: "Keine Ausfallzeiten",
                textMWEBTitle: "MWEB-Umsetzung",
                textCheapTitle: "Günstige Gebühren",
                textFastTitle: "Schnelle Transaktionen",
                textZeroDetail: "Seit 2011 ist Litecoin als sichere, dezentralisierte und innovative Währung führend im Bereich der Kryptowährungen.",
                textMWEBDetail: "MWEB hält Ihr Wallet-Guthaben verborgen. So können Sie Litecoin versenden, ohne dass Fremde sehen, was sich in Ihrem Wallet befindet.",
                textCheapDetail: "Litecoin wurde so konzipiert, dass es unglaublich billig ist, zu senden. Wenn das Netzwerk ausgelastet ist, ist es immer noch sehr billig... Pennies.",
                textFastDetail: "Litecoin hat eine Transaktionsverarbeitungsgeschwindigkeit von 54 TPS, was deutlich höher ist als die Transaktionsverarbeitungsgeschwindigkeit von Bitcoin von 5 TPS.",
                textPartnerHeadline: "Wir haben großartige Partner, die Litewallet dabei helfen, unseren Nutzern mehr Wert zu bieten",
                textBitrefillDetail: "Führender Krypto-E-Commerce-Shop, der es den Nutzern ermöglicht, 'von Krypto zu leben'.",
                textMoonpayDetail: "MoonPay ist in mehr als 160 Ländern aktiv und wird von mehr als 300 führenden Geldbörsen, Websites und Anwendungen als vertrauenswürdig angesehen, um Zahlungen zu akzeptieren und Betrug zu verhindern.",
                textSimplexDetail: "Kraftvoll. Nahtlos. Wirkungsvoll. Als Branchenführer befähigen wir Hunderte von Partnern, Millionen von Menschen den Kauf von digitalen Vermögenswerten im Wert von Milliarden von Dollar zu ermöglichen.",
                textUDDetail: "Besitzen Sie Ihre Identität in der digitalen Welt. Es ist Ihr Name. Besitzen Sie ihn. Besitzen Sie Ihre Identität in der digitalen Welt. Starten Sie mit einer Web3-Domain.",
                textLitecoinCreatorHeadline: "Während seiner Zeit bei Google begann Charlie sich für Bitcoin zu interessieren, traf Mike Hearn und erhielt seinen ersten Bitcoin. Er startete Litecoin im Oktober 2011. Im Jahr 2016 gründete er die Litecoin Foundation, eine gemeinnützige Organisation, deren Aufgabe es ist, der Welt die Vorteile von Litecoin zu vermitteln.",
                textLitecoinCreatorSubheadline: "In enger Zusammenarbeit mit dem Litewallet-Team erörtern Charlie und Kerry Möglichkeiten, die Zahl der aktiven Nutzer zu erhöhen und gleichzeitig die von den Nutzern am meisten gewünschten Funktionen bereitzustellen. Das Litewallet-Team ist ein globales Unternehmen mit einem bescheidenen Budget und einer großen Anzahl gut finanzierter Wettbewerber, die viele Arten von Kryptowährungen anbieten.",
                textTeamHeadline: "Es ist eine Teamleistung",
                textTeamSubheadline: "Litewallet hat einen hauptamtlichen Teamleiter und eine Gruppe von Freiwilligen weltweit. Sind Sie daran interessiert, mehr über den Litecoin-Bereich zu erfahren und gleichzeitig Ihr Wissen über Kryptowährungen zu verbessern?",
                textVolunteerHeadline: "Bewerben Sie sich als Freiwilliger",
                textDonationHeadline: "Stärken Sie die Zukunft von Litecoin mit Ihrer Spende",
                textDonationSubheadline: "Ihre Spende an die Entwickler der Litewallet-App wird dazu beitragen, die Entwicklung innovativer Funktionen voranzutreiben und die Grenzen des Machbaren zu erweitern. Schenken Sie den Fortschritt und unterstützen Sie das Team jetzt!",
                textDonationScan: "Scannen, um zu geben!",
                textDonationsSend: "Senden Sie LTC an diese Adresse:",
                textFooterHeadline: "Litewallet, Die offizielle Litecoin-Geldbörse",
                textRepoHeadline: "Der Code von Litewallet ist quelloffen und wir verwenden Github, um die Codebasis zu pflegen.",
                textSocialHeadline: "Litewallet Soziale Medien",
                textRepositories: "Repositories:",
                textFooterSubheadline: "Nach oben gehen"
    },
    ko: {
                textAboutMenu: "에 대한",
                textTeamMenu: "팀",
                textDonationMenu: "기부",
                textSupportMenu: "지원하다",
                textHalvingPrefix: "반감",
                textHalvingSuffix: " 일.", 
                textViewCountdown: "카운트다운 보기",
                textHeadline: "공식 Litecoin 모바일 지갑",
                textHalving: "000일 후 반감기",
 		        textSubheadline: "Litecoin은 2011년부터 다운타임 없이 운영되었습니다! Litewallet은 Litecoin Foundation에서 지원하는 공식 지갑으로 Litecoin을 간단하고 안전하게 사용할 수 있는 방법을 제공합니다.",
                textYearCreated: "만든 연도",
                textMarketPrice: "현재 시장 가격",
                textMarketCap: "현재 시가 총액",
                textMaxSupply: "Litecoin의 최대 공급량은 84,000,000 LTC입니다. ", 
                textCirculatingSupply: "그리고 순환 공급",  
                textLearnHeader: "라이트코인에 대해 자세히 알아보기",
                textLitecoinDescription: "Litecoin은 거래량과 유동성 측면에서 가장 확립되고 안정적인 암호화폐 중 하나이며 일반적으로 교환 수단으로 사용됩니다.",
                textLitecoinDescriptionStyled: "어디에서나 사용되는 진짜 화폐입니다!",
                textZeroTitle: "제로 다운타임",
                textMWEBTitle: "MWEB 구현",
                textCheapTitle: "저렴한 수수료",
                textFastTitle: "빠른 거래",
                textZeroDetail: "2011년부터 Litecoin은 안전하고 분산된 혁신적인 통화로서 암호화폐 공간을 이끌어 왔습니다.",
                textMWEBDetail: "MWEB는 지갑 잔액을 비밀로 유지합니다. 이를 통해 낯선 사람이 지갑에 있는 것을 보지 않고 Litecoin을 보낼 수 있습니다.",
                textCheapDetail: "Litecoin은 전송 비용이 엄청나게 저렴하도록 설계되었습니다. 네트워크가 바쁘더라도 여전히 매우 저렴합니다.",
                textFastDetail: "Litecoin은 54TPS의 트랜잭션 처리 속도를 가지며 이는 Bitcoin의 트랜잭션 처리 속도인 5TPS보다 훨씬 빠릅니다.",
                textPartnerHeadline: "Litewallet이 사용자에게 더 많은 가치를 제공하도록 돕는 훌륭한 파트너가 있습니다.",
                textBitrefillDetail: "사용자가 'Live on Crypto'를 허용하는 선도적인 암호화 전자 상거래 스토어입니다.",
                textMoonpayDetail: "MoonPay는 160개 이상의 국가에서 활동하고 있으며 300개 이상의 주요 지갑, 웹사이트 및 애플리케이션에서 결제를 수락하고 사기를 방지하는 것으로 신뢰받고 있습니다.",
                textSimplexDetail: "강한. 원활한. 임팩트 있는 업계 리더로서 수백 명의 파트너가 수백만 명의 사람들이 수십억 달러의 디지털 자산을 구매할 수 있도록 지원합니다.",
                textUDDetail: "디지털 세계에서 자신의 정체성을 소유하십시오. 그것은 당신의 이름입니다. 그것을 소유하십시오. 디지털 세계에서 자신의 정체성을 소유하십시오. Web3 도메인으로 시작하세요.",
                textLitecoinCreatorHeadline: "Google에 있는 동안 Charlie는 Bitcoin이 Mike Hen을 만나고 첫 번째 Bitcoin을 얻는 데 관심을 갖게 되었습니다. 그는 2011년 10월에 라이트코인을 시작했습니다. 그는 2016년에 라이트코인의 이점을 전 세계에 알리는 것을 사명으로 하는 비영리 조직인 라이트코인 재단을 설립했습니다.",
                textLitecoinCreatorSubheadline: "Litewallet 팀과 긴밀히 협력하여 Charlie와 Kerry는 활성 사용자를 늘리는 동시에 사용자가 가장 원하는 기능을 제공하는 방법에 대해 논의합니다. Litewallet 팀은 적당한 예산과 다양한 유형의 암호 화폐를 제공하는 충분한 자금이 있는 많은 경쟁업체를 통해 전 세계적으로 활동하고 있습니다.",
                textTeamHeadline: "팀의 노력입니다",
                textTeamSubheadline: "Litewallet에는 풀타임 팀 리더 한 명과 글로벌 자원봉사자 그룹이 있습니다. cryptocurrency에 대한 지식을 향상시키면서 Litecoin 공간에 대해 더 많이 배우고 싶습니까?",
                textVolunteerHeadline: "자원 봉사자가되기 위해 신청하십시오",
                textDonationHeadline: "당신의 기부로 Litecoin의 미래에 힘을 실어주세요",
                textDonationSubheadline: "Litewallet 앱 개발자에 대한 우리의 기부는 최첨단 기능의 개발을 촉진하고 가능한 것의 경계를 넓히는 데 도움이 될 것입니다. 발전의 선물을 주고 지금 팀을 지원하세요!",
                textDonationScan: "스캔하여 선물하세요!",
		        textDonationsSend: "다음 주소로 LTC를 보내십시오:",
                textFooterHeadline: "Litewallet, 라이트코인 공식 지갑",
                textRepoHeadline: "Litewallet 코드는 오픈 소스이며 코드베이스를 유지하기 위해 Github를 사용합니다.",
                textSocialHeadline: "라이트월렛 소셜",
                textRepositories: "리포지토리:",
                textFooterSubheadline: "맨 위로 이동"
    },
    uk: { 
                textAboutMenu: "Про",
                textTeamMenu: "Команда",
                textDonationMenu: "Пожертва",
                textSupportMenu: "Підтримка",
                textHalvingPrefix: "Вдвічі менше",
                textHalvingSuffix: " днів.", 
                textViewCountdown: "Переглянути зворотний відлік",
                textHeadline: "Офіційний мобільний гаманець Litecoin",
                textSubheadline: "Litecoin працює з 2011 року без жодного простою! Litewallet - це офіційний гаманець, що підтримується Litecoin Foundation, який пропонує прості та безпечні способи використання Litecoin.",
                textYearCreated: "PIK СТВОРЕННЯ",
                textMarketPrice: "ПОТОЧНА РИНКОВА ЦІНА",
                textMarketCap: "ПОТОЧНА РИНКОВА КАПІТАЛІЗАЦІЯ",
                textMaxSupply: "Лайткоін має максимальний запас 84 000 000 LTC. ", 
                textCirculatingSupply: "І оборотний запас",  
                textCirculatingPrefixSuffix: "Litecoin має циркулюючий запас i максимальний запас",
                textLearnHeader: "Дізнайтеся більше про Litecoin",
                textLitecoinDescription: "Litecoin - одна з найбільш усталених i стабільних криптовалют з точки зору обсягів транзакцій i ліквідності, яка широко використовується як засіб обміну.",
                textLitecoinDescriptionStyled: "Це справжня валюта, яка використовується всюди!",
                textZeroTitle: "Нульовий час простою",
                textMWEBTitle: "Впровадження MWEB",
                textCheapTitle: "Дешеві збори",
                textFastTitle: "Швидкі транзакції",
                textZeroDetail: "З 2011 року Litecoin є лідером криптовалютного простору як безпечна, децентралізована та інноваційна валюта.",
                textMWEBDetail: "MWEB зберігає баланс вашого гаманця в таємниці. Це дозволяє вам відправляти Litecoin без того, щоб сторонні бачили, що y вашому гаманці.",
                textCheapDetail: "Litecoin був розроблений для того, щоб зробити відправлення неймовірно дешевими. Якщо мережа зайнята, це все одно дуже дешево... копійки.",
                textFastDetail: "Швидкість обробки транзакцій Litecoin становить 54 TPS, що значно перевищує швидкість обробки транзакцій Bitcoin, яка становить 5 TPS.",
                textPartnerHeadline: "y нас є чудові партнери, які допомагають Litewallet надавати більше переваг нашим користувачам",
                textBitrefillDetail: "Провідний криптовалютний інтернет-магазин, який дозволяє користувачам - Live on Crypto.",
                textMoonpayDetail: "MoonPay працює в більш ніж 160 країнах, їй довіряють 300+ провідних гаманців, веб-сайтів i додатків, які приймають платежі та протидіють шахрайству.",
                textSimplexDetail: "Потужний. Бездоганно. Ефективно. Як лідер галузі, ми розширюємо можливості сотень партнерів, щоб мільйони людей могли купувати цифрові активи на мільярди доларів.",
                textUDDetail: "Володійте своєю ідентичністю в цифровому світі. Це ваше ім'я. Володійте ним. Володійте своєю ідентичністю в цифровому світі. Почніть з домену Web3.",
                textLitecoinCreatorHeadline: "Під час роботи в Google Чарлі зацікавився біткоїном, познайомившись з Майком Херном i отримавши свій перший біткоїн. Він запустив Litecoin у жовтні 2011 року. У 2016 році він заснував Litecoin Foundation, некомерційну організацію, місія якої полягає в тому, щоб розповісти світові про переваги Litecoin.",
                textLitecoinCreatorSubheadline: "Тісно співпрацюючи з командою Litewallet, Чарлі та Керрі обговорюють шляхи збільшення кількості активних користувачів, надаючи при цьому функції, яких користувачі хочуть найбільше. Команда Litewallet працює по всьому світу зі скромним бюджетом і великою кількістю добре фінансованих конкурентів, що пропонують багато видів криптовалют.",
                textTeamHeadline: "Це командна робота",
                textTeamSubheadline: "Litewallet має одного штатного керівника команди та групу волонтерів по всьому світу. Хочете дізнатися більше про простір Litecoin та покращити свої знання про криптовалюту?",
                textVolunteerHeadline: "Подати заявку, щоб стати волонтером",
                textDonationHeadline: "Зробіть свій внесок y майбутнє Litecoin",
                textDonationSubheadline: "Ваша пожертва розробникам Litewallet допоможе підтримати розробку передових функцій i розширити межі можливого. Зробіть подарунок прогресу та підтримайте команду прямо зараз!",
                textDonationScan: "Скан віддати!",
                textDonationsSend: "Надішліть LTC на цю адресу:",
                textFooterHeadline: "Litewallet, офіційний гаманець Litecoin",
                textRepoHeadline: "Код Litewallet є відкритим кодом, i ми використовуємо Github для підтримки кодової бази.",
                textSocialHeadline: "Соц. Litewallet",
                textRepositories: "Репозиторії:",
                textFooterSubheadline: "Перейти на вершину"
    },
    ru: {
                textAboutMenu: "О",
                textTeamMenu: "Команда",
                textDonationMenu: "Пожертвование",
                textSupportMenu: "Поддерживать",
                textHalvingPrefix: "Уменьшение вдвое",
                textHalvingSuffix: " дней.", 
                textViewCountdown: "Просмотр обратного отсчета",
                textHeadline: "Официальный мобильный кошелек Litecoin",
                textSubheadline: "Litecoin работает с 2011 года без простоев! Litewallet — это официальный кошелек, поддерживаемый Litecoin Foundation, который предлагает простые и безопасные способы использования Litecoin.",
                textYearCreated: "ГОД СОЗДАНИЯ",
                textMarketPrice: "ТЕКУЩАЯ РЫНОЧНАЯ ЦЕНА",
                textMarketCap: "ТЕКУЩАЯ РЫНОЧНАЯ КАПИТАЛИКА",
                textMaxSupply: "Максимальный запас Litecoin составляет 84 000 000 LTC. ", 
                textCirculatingSupply: "И оборотный запас",  
                textLearnHeader: "Узнайте больше о лайткоине",
                textLitecoinDescription: "Litecoin является одной из самых устоявшихся и стабильных криптовалют с точки зрения объемов транзакций и ликвидности и обычно используется в качестве средства обмена.",
                textLitecoinDescriptionStyled: "Это реальная валюта, используемая везде!",
                textZeroTitle: "Нулевое время простоя",
                textMWEBTitle: "Реализация MWEB",
                textCheapTitle: "Дешевые сборы",
                textFastTitle: "Быстрые транзакции",
                textZeroDetail: "С 2011 года Litecoin лидирует в криптовалютном пространстве как безопасная, децентрализованная и инновационная валюта.",
                textMWEBDetail: "MWEB скрывает баланс вашего кошелька. Это позволяет вам отправлять Litecoin так, чтобы посторонние не видели, что в вашем кошельке.",
                textCheapDetail: "Litecoin был разработан, чтобы сделать его невероятно дешевым для отправки. Если сеть занята, это все еще очень дешево... копейки.",
                textFastDetail: "Litecoin имеет скорость обработки транзакций 54 TPS, что значительно выше скорости обработки транзакций Биткойна, равной 5 TPS.",
                textPartnerHeadline: "У нас есть отличные партнеры, которые помогают Litewallet приносить больше пользы нашим пользователям.",
                textBitrefillDetail: "Ведущий магазин криптовалютной электронной коммерции, который позволяет пользователям «жить на крипто».",
                textMoonpayDetail: "MoonPay работает более чем в 160 странах, и ему доверяют более 300 ведущих кошельков, веб-сайтов и приложений для приема платежей и борьбы с мошенничеством.",
                textSimplexDetail: "Мощный. Бесшовные. Эффектный. Являясь лидером отрасли, мы помогаем сотням партнеров, чтобы миллионы людей могли покупать цифровые активы на миллиарды долларов.",
                textUDDetail: "Создавайте свою личность в цифровом мире. Это твое имя. Владей этим. Создавайте свою личность в цифровом мире. Начните с домена Web3.",
                textLitecoinCreatorHeadline: "Работая в Google, Чарли заинтересовался биткойнами, встретился с Майком Хирном и получил свой первый биткойн. Он запустил Litecoin в октябре 2011 года. В 2016 году он основал Litecoin Foundation, некоммерческую организацию, миссия которой — рассказать миру о преимуществах Litecoin.",
                textLitecoinCreatorSubheadline: "Работая в тесном сотрудничестве с командой Litewallet, Чарли и Керри обсуждают способы увеличения количества активных пользователей, предоставляя при этом функции, которые пользователи хотят больше всего. Команда Litewallet глобальна со скромным бюджетом и большим количеством хорошо финансируемых конкурентов, предлагающих множество типов криптовалюты.",
                textTeamHeadline: "Это командная работа",
                textTeamSubheadline: "В Litewallet есть один руководитель команды, работающий полный рабочий день, и группа добровольцев по всему миру. Хотите узнать больше о пространстве Litecoin, улучшая свои знания о криптовалюте?",
                textVolunteerHeadline: "Подать заявку, чтобы стать волонтером",
                textDonationHeadline: "Усильте будущее Litecoin своим пожертвованием",
                textDonationSubheadline: "Ваше пожертвование разработчикам приложений Litewallet поможет ускорить разработку передовых функций и раздвинуть границы возможного. Подарите прогресс и поддержите команду прямо сейчас!",
                textDonationScan: "Отсканируйте, чтобы дать!",
                textDonationsSend: "Отправьте LTC на этот адрес:",
                textFooterHeadline: "Litewallet, официальный мобильный кошелек Litecoin",
                textRepoHeadline: "Код Litewallet имеет открытый исходный код, и мы используем Github для поддержки кодовой базы.",
                textSocialHeadline: "Litewallet социальный",
                textRepositories: "Репозитории:",
                textFooterSubheadline: "Перейти к началу"
    },
    pt: {
                textAboutMenu: "Sobre",
                textTeamMenu: "Equipe",
                textDonationMenu: "Doação",
                textSupportMenu: "Apoiar",
                textHalvingPrefix: "Reduzir pela metade",
                textHalvingSuffix: " dias.", 
                textViewCountdown: "Ver contagem regressiva",
                textHeadline: "A carteira móvel Litecoin oficial",
                textSubheadline: "O Litecoin está em operação desde 2011 sem tempo de inatividade! Litewallet é a carteira oficial apoiada pela Litecoin Foundation que oferece maneiras simples e seguras de usar o Litecoin.",
                textYearCreated: "ANO DE CRIAÇÃO",
                textMarketPrice: "PREÇO ATUAL DE MERCADO",
                textMarketCap: "VALOR DE MERCADO ATUAL",
                textMaxSupply: "Litecoin tem um suprimento máximo de 84.000.000 LTC. ", 
                textCirculatingSupply: "E um suprimento circulante de", 
                textCirculatingPrefixSuffix: "Litecoin tem um suprimento circulante de e um máx. fornecimento de",
                textLearnHeader: "Saiba mais sobre Litecoin",
                textLitecoinDescription: "O Litecoin é uma das criptomoedas mais estabelecidas e estáveis em termos de volume de transações e liquidez, e é comumente usado como meio de troca.",
                textLitecoinDescriptionStyled: "É uma moeda real usada em todos os lugares!",
                textZeroTitle: "Tempo de inatividade zero",
                textMWEBTitle: "Implementação MWEB",
                textCheapTitle: "Taxas baratas",
                textFastTitle: "Transações rápidas",
                textZeroDetail: "Desde 2011, o Litecoin lidera o espaço das criptomoedas como uma moeda segura, descentralizada e inovadora.",
                textMWEBDetail: "O MWEB mantém o saldo da sua carteira oculto. Isso permite que você envie Litecoin sem que estranhos vejam o que está em sua carteira.",
                textCheapDetail: "O Litecoin foi projetado para torná-lo incrivelmente barato para enviar. Se a rede estiver ocupada, ainda é muito barato... centavos.",
                textFastDetail: "O Litecoin tem uma velocidade de processamento de transações de 54 TPS, que é significativamente maior do que a velocidade de processamento de transações do Bitcoin de 5 TPS.",
                textPartnerHeadline: "Temos grandes parceiros que ajudam a Litewallet a entregar mais valor aos nossos usuários",
                textBitrefillDetail: "Loja líder de e-commerce cripto que permite aos usuários - Live on Crypto.",
                textMoonpayDetail: "A MoonPay está ativa em mais de 160 países e tem a confiança de mais de 300 carteiras, sites e aplicativos líderes para aceitar pagamentos e derrotar fraudes.",
                textSimplexDetail: "Poderoso. Desatado. Impactante. Como líder do setor, capacitamos centenas de parceiros para permitir que milhões de pessoas comprem bilhões de dólares em ativos digitais.",
                textUDDetail: "Tenha sua identidade no mundo digital. É o seu nome. Possua-o. Tenha sua identidade no mundo digital. Comece com um domínio Web3.",
                textLitecoinCreatorHeadline: "Enquanto estava no Google, Charlie se interessou pelo Bitcoin conhecendo Mike Hearn e obtendo seu primeiro Bitcoin. Ele lançou o Litecoin em outubro de 2011. Ele fundou a Litecoin Foundation em 2016, uma organização sem fins lucrativos cuja missão é ensinar ao mundo os benefícios do Litecoin.",
                textLitecoinCreatorSubheadline: "Trabalhando de perto com a equipe Litewallet, Charlie e Kerry discutem maneiras de aumentar os usuários ativos enquanto fornecem os recursos que os usuários mais desejam. A equipe Litewallet é global com um orçamento modesto e um grande número de concorrentes bem financiados que oferecem muitos tipos de criptografia.",
                textTeamHeadline: "É um esforço de equipe",
                textTeamSubheadline: "Litewallet tem um líder de equipe em tempo integral e um grupo de voluntários globais. Interessado em aprender mais sobre o espaço Litecoin enquanto melhora seu conhecimento sobre criptomoeda?",
                textVolunteerHeadline: "Inscreva-se para se tornar um voluntário",
                textDonationHeadline: "Capacite o futuro do Litecoin com sua doação",
                textDonationSubheadline: "Sua doação para os desenvolvedores de aplicativos Litewallet ajudará a alimentar o desenvolvimento de recursos de ponta e ultrapassar os limites do que é possível. Dê o presente do progresso e apoie a equipe agora!",
				textDonationScan: "Digitalizar para dar!",
				textDonationsSend: "Envie LTC para este endereço:",
				textFooterHeadline: "Litewallet, a carteira móvel Litecoin oficial", 
                textRepoHeadline: "O código Litewallet é de código aberto e usamos o Github para manter a base de código.",
                textSocialHeadline: "Litewallet social",
                textRepositories: "Repositórios:",
                textFooterSubheadline: "ir para o topo"
    },
    zhCN: {
                textAboutMenu: "关于",
                textTeamMenu: "团队",
                textDonationMenu: "捐款",
                textSupportMenu: "支持",
                textHalvingPrefix: "减半",
                textHalvingSuffix: " 天数.", 
                textViewCountdown: "查看倒计时",
                textHeadline: "官方莱特币手机钱包",
                textSubheadline: "莱特币自 2011 年开始运营，没有停机！ Litewallet 是由 Litecoin Foundation 支持的官方钱包，它提供简单安全的方式来使用 Litecoin。",
                textYearCreated: "创建年份",
                textMarketPrice: "当前市场价格",
                textMarketCap: "当前市值",
                textMaxSupply: "莱特币的最大供应量为 84,000,000 LTC。", 
                textCirculatingSupply: "和循环供应",  
                textLearnHeader: "了解有关莱特币的更多信息",
                textLitecoinDescription: "就交易量和流动性而言，莱特币是最成熟和最稳定的加密货币之一，通常用作交换手段。",
                textLitecoinDescriptionStyled: "这是一种随处使用的真实货币！",
                textZeroTitle: "零停机时间",
                textMWEBTitle: "MWEB实施",
                textCheapTitle: "便宜的费用",
                textFastTitle: "快速交易",
                textZeroDetail: "自 2011 年以来，莱特币作为一种安全、去中心化和创新的货币一直引领着加密货币领域。",
                textMWEBDetail: "MWEB 会隐藏您的钱包余额。 这使您可以在陌生人看不到您钱包里的东西的情况下发送莱特币。",
                textCheapDetail: "莱特币的设计目的是让发送变得难以置信的便宜。 如果网络繁忙，它仍然很便宜……几美分。",
                textFastDetail: "莱特币的交易处理速度为54 TPS，明显高于比特币5 TPS的交易处理速度。",
                textPartnerHeadline: "我们有优秀的合作伙伴帮助 Litewallet 为我们的用户提供更多价值",
                textBitrefillDetail: "领先的加密电子商务商店，允许用户“以加密为生”。",
                textMoonpayDetail: "MoonPay 在 160 多个国家/地区活跃，并受到 300 多个领先钱包、网站和应用程序的信任，可以接受付款并打击欺诈。",
                textSimplexDetail: "强大的。 无缝的。 有影响力。 作为行业领导者，我们赋能数百家合作伙伴，让数百万人购买数十亿美元的数字资产。",
                textUDDetail: "在数字世界中拥有您的身份。 这是你的名字。 拥有它。 在数字世界中拥有您的身份。 开始使用 Web3 域。",
                textLitecoinCreatorHeadline: "在谷歌期间，查理对比特币产生了兴趣，遇见了迈克赫恩并获得了他的第一个比特币。 他于 2011 年 10 月推出了莱特币。他于 2016 年创立了莱特币基金会，这是一个非营利组织，其使命是向全世界传授莱特币的好处。",
                textLitecoinCreatorSubheadline: "Charlie 和 Kerry 与 Litewallet 团队密切合作，讨论如何增加活跃用户，同时提供用户最想要的功能。 Litewallet 团队是全球性的，预算适中，并且有大量资金充足的竞争对手提供多种类型的加密货币。",
                textTeamHeadline: "这是团队的努力",
                textTeamSubheadline: "Litewallet 有一名全职团队领导和一组全球志愿者。 有兴趣在提高您对加密货币的了解的同时进一步了解莱特币领域吗？",
                textVolunteerHeadline: "申请成为志愿者",
                textDonationHeadline: "用您的捐赠赋能莱特币的未来",
                textDonationSubheadline: "您对 Litewallet 应用程序开发人员的捐赠将有助于推动尖端功能的开发并突破可能的界限。 立即给予进步的礼物并支持团队！",
                textDonationScan: "扫一扫送！",
                textDonationsSend: "将 LTC 发送到此地址：",
                textFooterHeadline: "Litewallet，官方莱特币手机钱包",
                textRepoHeadline: "Litewallet 代码是开源的，我们使用 Github 来维护代码库。",
                textSocialHeadline: "莱特钱包社交",
                textRepositories: "存储库：",
                textFooterSubheadline: "到顶部"
    },
    tr: {
                textAboutMenu: "Hakkında",
                textTeamMenu: "Takım",
                textDonationMenu: "Bağış",
                textSupportMenu: "Destek",
                textHalvingPrefix: "Yarıya iniyor ",
                textHalvingSuffix: " günler.", 
                textViewCountdown: "Geri Sayımı Görüntüle",
                textHeadline: "Resmi Litecoin mobil cüzdanı",
                textSubheadline: "Litecoin 2011'den beri hiç kesinti olmadan çalışıyor! Litewallet, Litecoin'i kullanmanın basit ve güvenli yollarını sunan Litecoin Vakfı tarafından desteklenen resmi cüzdandır.",
                textYearCreated: "YARATILDIĞI YIL",
                textMarketPrice: "MEVCUT PIYASA FIYATI",
                textMarketCap: "MEVCUT PIYASA DEĞERI",
                textMaxSupply: "Litecoin'in maksimum arzı 84.000.000 LTC'dir. ", 
                textCirculatingSupply: "Ve dolaşımdaki bir arz", 
                textLearnHeader: "Litecoin hakkında daha fazla bilgi edinin",
                textLitecoinDescription: "Litecoin, işlem hacimleri ve likidite açısından en köklü ve istikrarlı kripto para birimlerinden biridir ve yaygın olarak bir değişim aracı olarak kullanılmaktadır.",
                textLitecoinDescriptionStyled: "Her yerde kullanılan gerçek bir para birimidir!",
                textZeroTitle: "Sıfır kesinti süresi",
                textMWEBTitle: "MWEB Uygulaması",
                textCheapTitle: "Ucuz ücretler",
                textFastTitle: "Hızlı işlemler",
                textZeroDetail: "Litecoin 2011 yılından bu yana güvenli, merkezi olmayan ve yenilikçi bir para birimi olarak kripto para dünyasına öncülük etmektedir.",
                textMWEBDetail: "MWEB cüzdan bakiyenizi gizli tutar. Bu, yabancılar cüzdanınızda ne olduğunu görmeden Litecoin göndermenize olanak tanır.",
                textCheapDetail: "Litecoin, göndermeyi inanılmaz derecede ucuz hale getirmek için tasarlandı. Ağ meşgulse, yine de çok ucuzdur... kuruşlar.",
                textFastDetail: "Litecoin, Bitcoin'in 5 TPS'lik işlem işleme hızından önemli ölçüde daha yüksek olan 54 TPS'lik bir işlem işleme hızına sahiptir.",
                textPartnerHeadline: "Litewallet'in kullanıcılarımıza daha fazla değer sunmasına yardımcı olan harika ortaklarımız var",
                textBitrefillDetail: "Kullanıcıların 'Kriptoda Yaşamasına' olanak tanıyan lider kripto e-ticaret mağazası.",
                textMoonpayDetail: "MoonPay 160'tan fazla ülkede aktiftir ve 300'den fazla lider cüzdan, web sitesi ve uygulama tarafından ödemeleri kabul etmek ve dolandırıcılığı önlemek için güvenilmektedir.",
                textSimplexDetail: "Güçlü. Kusursuz. Etkileyici. Sektör lideri olarak, milyonlarca insanın milyarlarca dolarlık dijital varlık satın almasını sağlamak için yüzlerce iş ortağımızı güçlendiriyoruz.",
                textUDDetail: "Dijital dünyada kimliğinize sahip çıkın. Bu sizin adınız. Ona sahip çıkın. Dijital dünyada kimliğinize sahip çıkın. Bir Web3 alan adı ile başlayın.",
                textLitecoinCreatorHeadline: "Google'dayken Charlie, Mike Hearn ile tanışarak ve ilk Bitcoin'ini alarak Bitcoin ile ilgilenmeye başladı. Ekim 2011'de Litecoin'i piyasaya sürdü. Misyonu dünyaya Litecoin'in faydalarını öğretmek olan kar amacı gütmeyen bir kuruluş olan Litecoin Vakfı'nı 2016 yılında kurdu.",
                textLitecoinCreatorSubheadline: "Litewallet ekibiyle yakın işbirliği içinde çalışan Charlie ve Kerry, kullanıcıların en çok istediği özellikleri sağlarken aktif kullanıcıları artırmanın yollarını tartışıyor. Litewallet ekibi, mütevazı bir bütçe ve birçok kripto türü sunan çok sayıda iyi finanse edilmiş rakip ile küreseldir.",
                textTeamHeadline: "Bu bir ekip çalışması",
                textTeamSubheadline: "Litewallet'ın bir tam zamanlı ekip lideri ve bir grup küresel gönüllüsü vardır. Kripto para bilginizi geliştirirken Litecoin alanı hakkında daha fazla bilgi edinmek ister misiniz?",
                textVolunteerHeadline: "Gönüllü olmak için başvurun",
                textDonationHeadline: "Bağışınızla Litecoin'in Geleceğini Güçlendirin",
                textDonationSubheadline: "Litewallet uygulama geliştiricilerine yapacağınız bağış, en yeni özelliklerin geliştirilmesine ve mümkün olanın sınırlarının zorlanmasına yardımcı olacaktır. İlerleme hediyesini verin ve ekibi şimdi destekleyin!",
                textDonationScan: "Vermek için tarayın!",
                textDonationsSend: "LTC'yi bu adrese gönderin:",
                textFooterHeadline: "Litewallet, Resmi Litecoin cüzdanı",
                textRepoHeadline: "Litewallet kodu açık kaynak kodludur ve kod tabanını korumak için Github kullanıyoruz.",
                textSocialHeadline: "Litewallet sosyal medya",
                textRepositories: "Depolar:",
                textFooterSubheadline: "En üste git"
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