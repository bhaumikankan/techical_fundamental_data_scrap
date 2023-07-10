const symbol_list = [
  "20MICRONS",
  "21STCENMGM",
  "3IINFOLTD",
  "3MINDIA",
  "3PLAND",
  "5PAISA",
  "63MOONS",
  "AAKASH",
  "AAREYDRUGS",
  "AARON",
  "AARTIDRUGS",
  "AARTIIND",
  "AARTISURF",
  "AARVEEDEN",
  "AARVI",
  "AAVAS",
  "ABB",
  "ABBOTINDIA",
  "ABCAPITAL",
  "ABFRL",
  "ABMINTLLTD",
  "ABSLAMC",
  "ABSLBANETF",
  "ABSLNN50ET",
  "ACC",
  "ACCELYA",
  "ACCURACY",
  "ACE",
  "ACRYSIL",
  "ADANIENT",
  "ADANIGREEN",
  "ADANIPORTS",
  "ADANIPOWER",
  "ADFFOODS",
  "ADORWELD",
  "ADROITINFO",
  "ADSL",
  "ADVANIHOTR",
  "ADVENZYMES",
  "AEGISCHEM",
  "AFFLE",
  "AGARIND",
  "AGCNET",
  "AGROPHOS",
  "AHLADA",
  "AHLEAST",
  "AHLUCONT",
  "AIAENG",
  "AIRAN",
  "AIROLAM",
  "AJANTPHARM",
  "AJOONI",
  "AJRINFRA",
  "AKASH",
  "AKG",
  "AKSHARCHEM",
  "AKSHOPTFBR",
  "AKZOINDIA",
  "ALANKIT",
  "ALBERTDAVD",
  "ALEMBICLTD",
  "ALICON",
  "ALKALI",
  "ALKEM",
  "ALKYLAMINE",
  "ALLCARGO",
  "ALLSEC",
  "ALMONDZ",
  "ALOKINDS",
  "ALPA",
  "ALPHAGEO",
  "AMARAJABAT",
  "AMBER",
  "AMBICAAGAR",
  "AMBIKCO",
  "AMBUJACEM",
  "AMDIND",
  "AMIORG",
  "AMJLAND",
  "AMRUTANJAN",
  "ANDHRACEMT",
  "ANDHRAPAP",
  "ANDHRSUGAR",
  "ANDREWYU",
  "ANGELONE",
  "ANIKINDS",
  "ANMOL",
  "ANSALHSG",
  "ANUP",
  "ANURAS",
  "APARINDS",
  "APCL",
  "APCOTEXIND",
  "APEX",
  "APLAPOLLO",
  "APLLTD",
  "APOLLO",
  "APOLLOHOSP",
  "APOLLOPIPE",
  "APOLLOTYRE",
  "APOLSINHOT",
  "APTECHT",
  "APTUS",
  "ARCHIDPLY",
  "ARCHIES",
  "ARENTERP",
  "ARIES",
  "ARIHANTCAP",
  "ARIHANTSUP",
  "ARMANFIN",
  "AROGRANITE",
  "ARROWGREEN",
  "ARSHIYA",
  "ARSSINFRA",
  "ARTEMISMED",
  "ARVEE",
  "ARVIND",
  "ARVINDFASN",
  "ASAHIINDIA",
  "ASAHISONG",
  "ASALCBR",
  "ASHAPURMIN",
  "ASHIANA",
  "ASHIMASYN",
  "ASHOKA",
  "ASHOKLEY",
  "ASIANHOTNR",
  "ASIANPAINT",
  "ASIANTILES",
  "ASPINWALL",
  "ASTEC",
  "ASTERDM",
  "ASTRAL",
  "ASTRAMICRO",
  "ASTRAZEN",
  "ASTRON",
  "ATFL",
  "ATUL",
  "ATULAUTO",
  "AUBANK",
  "AURIONPRO",
  "AUROPHARMA",
  "AURUM",
  "AUSOMENT",
  "AUTOAXLES",
  "AUTOIND",
  "AVADHSUGAR",
  "AVANTIFEED",
  "AVTNPL",
  "AWHCL",
  "AXISBANK",
  "AXISBNKETF",
  "AXISBPSETF",
  "AXISCADES",
  "AXISCETF",
  "AXISGOLD",
  "AXISHCETF",
  "AXISNIFTY",
  "AXISTECETF",
  "AYMSYNTEX",
  "BAFNAPH",
  "BAJAJ-AUTO",
  "BAJAJCON",
  "BAJAJELEC",
  "BAJAJFINSV",
  "BAJAJHCARE",
  "BAJAJHLDNG",
  "BAJFINANCE",
  "BALAJITELE",
  "BALAMINES",
  "BALAXI",
  "BALKRISHNA",
  "BALKRISIND",
  "BALMLAWRIE",
  "BALPHARMA",
  "BALRAMCHIN",
  "BANARBEADS",
  "BANARISUG",
  "BANCOINDIA",
  "BANDHANBNK",
  "BANG",
  "BANKA",
  "BANKBARODA",
  "BANKBEES",
  "BANKINDIA",
  "BANSWRAS",
  "BARBEQUE",
  "BASF",
  "BASML",
  "BATAINDIA",
  "BAYERCROP",
  "BBL",
  "BBTC",
  "BCG",
  "BCLIND",
  "BCP",
  "BDL",
  "BEARDSELL",
  "BECTORFOOD",
  "BEDMUTHA",
  "BEL",
  "BEML",
  "BEPL",
  "BERGEPAINT",
  "BESTAGRO",
  "BFINVEST",
  "BFUTILITIE",
  "BGRENERGY",
  "BHAGCHEM",
  "BHAGERIA",
  "BHAGYANGR",
  "BHAGYAPROP",
  "BHANDARI",
  "BHARATFORG",
  "BHARATGEAR",
  "BHARATRAS",
  "BHARATWIRE",
  "BHARTIARTL",
  "BHEL",
  "BIGBLOC",
  "BIL",
  "BINDALAGRO",
  "BIOCON",
  "BIOFILCHEM",
  "BIRLACABLE",
  "BIRLACORPN",
  "BIRLAMONEY",
  "BIRLATYRE",
  "BLBLIMITED",
  "BLISSGVS",
  "BLKASHYAP",
  "BLUEDART",
  "BLUESTARCO",
  "BODALCHEM",
  "BOMDYEING",
  "BOROLTD",
  "BORORENEW",
  "BOSCHLTD",
  "BPCL",
  "BRIGADE",
  "BRITANNIA",
  "BRNL",
  "BROOKS",
  "BSE",
  "BSHSL",
  "BSL",
  "BSLGOLDETF",
  "BSLNIFTY",
  "BSLSENETFG",
  "BSOFT",
  "BURGERKING",
  "BYKE",
  "CADILAHC",
  "CAMLINFINE",
  "CAMS",
  "CANBK",
  "CANFINHOME",
  "CAPACITE",
  "CAPLIPOINT",
  "CAPTRUST",
  "CARBORUNIV",
  "CAREERP",
  "CARERATING",
  "CARTRADE",
  "CASTROLIND",
  "CCHHL",
  "CCL",
  "CDSL",
  "CEATLTD",
  "CEBBCO",
  "CELEBRITY",
  "CENTENKA",
  "CENTEXT",
  "CENTRALBK",
  "CENTRUM",
  "CENTUM",
  "CENTURYPLY",
  "CENTURYTEX",
  "CERA",
  "CEREBRAINT",
  "CESC",
  "CGCL",
  "CHALET",
  "CHAMBLFERT",
  "CHEMBOND",
  "CHEMCON",
  "CHEMFAB",
  "CHEMPLASTS",
  "CHENNPETRO",
  "CHOLAFIN",
  "CHOLAHLDNG",
  "CIGNITITEC",
  "CINELINE",
  "CINEVISTA",
  "CIPLA",
  "CLEAN",
  "CLNINDIA",
  "CLSEL",
  "CMICABLES",
  "COALINDIA",
  "COASTCORP",
  "COCHINSHIP",
  "COFFEEDAY",
  "COFORGE",
  "COLPAL",
  "COMPINFO",
  "COMPUSOFT",
  "CONCOR",
  "CONFIPET",
  "CONSOFINVT",
  "CONTROLPR",
  "CORALFINAC",
  "CORDSCABLE",
  "COROMANDEL",
  "COSMOFILMS",
  "COUNCODOS",
  "CPSEETF",
  "CRAFTSMAN",
  "CREDITACC",
  "CREST",
  "CRISIL",
  "CROMPTON",
  "CSBBANK",
  "CTE",
  "CUB",
  "CUBEXTUB",
  "CUMMINSIND",
  "CUPID",
  "CYBERMEDIA",
  "CYBERTECH",
  "CYIENT",
  "DAAWAT",
  "DABUR",
  "DALBHARAT",
  "DALMIASUG",
  "DAMODARIND",
  "DANGEE",
  "DATAMATICS",
  "DBCORP",
  "DBL",
  "DBREALTY",
  "DBSTOCKBRO",
  "DCAL",
  "DCBBANK",
  "DCMNVL",
  "DCMSHRIRAM",
  "DECCANCE",
  "DEEPAKFERT",
  "DEEPAKNTR",
  "DEEPENR",
  "DEEPINDS",
  "DELPHIFX",
  "DELTACORP",
  "DELTAMAGNT",
  "DEN",
  "DENORA",
  "DEVYANI",
  "DFMFOODS",
  "DHAMPURSUG",
  "DHANBANK",
  "DHANI",
  "DHANUKA",
  "DHARSUGAR",
  "DHRUV",
  "DHUNINV",
  "DIAMONDYD",
  "DICIND",
  "DIGISPICE",
  "DIGJAMLMTD",
  "DIVISLAB",
  "DIXON",
  "DLF",
  "DLINKINDIA",
  "DMART",
  "DNAMEDIA",
  "DODLA",
  "DOLAT",
  "DOLLAR",
  "DPABHUSHAN",
  "DPSCLTD",
  "DPWIRES",
  "DREDGECORP",
  "DRREDDY",
  "DSPNEWETF",
  "DSSL",
  "DTIL",
  "DUCON",
  "DVL",
  "DWARKESH",
  "DYNPRO",
  "EASTSILK",
  "EBANK",
  "EBBETF0423",
  "EBBETF0425",
  "EBBETF0430",
  "EBBETF0431",
  "ECLERX",
  "EDELWEISS",
  "EICHERMOT",
  "EIDPARRY",
  "EIFFL",
  "EIHAHOTELS",
  "EIHOTEL",
  "EIMCOELECO",
  "EKC",
  "ELECON",
  "ELECTCAST",
  "ELECTHERM",
  "ELGIEQUIP",
  "ELGIRUBCO",
  "EMAMILTD",
  "EMAMIPAP",
  "EMAMIREAL",
  "EMKAY",
  "EMMBI",
  "ENDURANCE",
  "ENERGYDEV",
  "ENGINERSIN",
  "ENIL",
  "EPL",
  "EQUITAS",
  "EQUITASBNK",
  "ERIS",
  "EROSMEDIA",
  "ESABINDIA",
  "ESCORTS",
  "ESSARSHPNG",
  "ESTER",
  "EVEREADY",
  "EVERESTIND",
  "EXCEL",
  "EXCELINDUS",
  "EXIDEIND",
  "EXPLEOSOL",
  "EXXARO",
  "FACT",
  "FAIRCHEMOR",
  "FCL",
  "FCONSUMER",
  "FDC",
  "FEDERALBNK",
  "FEL",
  "FELDVR",
  "FIEMIND",
  "FILATEX",
  "FINCABLES",
  "FINEORG",
  "FINOPB",
  "FINPIPE",
  "FLEXITUFF",
  "FLFL",
  "FLUOROCHEM",
  "FMGOETZE",
  "FMNL",
  "FOCUS",
  "FOODSIN",
  "FORCEMOT",
  "FORTIS",
  "FOSECOIND",
  "FRETAIL",
  "FSC",
  "FSL",
  "GABRIEL",
  "GAEL",
  "GAIL",
  "GAL",
  "GALAXYSURF",
  "GALLANTT",
  "GALLISPAT",
  "GANDHITUBE",
  "GANECOS",
  "GANESHBE",
  "GANESHHOUC",
  "GANGAFORGE",
  "GANGESSECU",
  "GARFIBRES",
  "GATI",
  "GAYAPROJ",
  "GDL",
  "GEECEE",
  "GEEKAYWIRE",
  "GENCON",
  "GENESYS",
  "GENUSPAPER",
  "GENUSPOWER",
  "GEOJITFSL",
  "GEPIL",
  "GESHIP",
  "GET&D",
  "GFLLIMITED",
  "GHCL",
  "GICHSGFIN",
  "GICRE",
  "GILLANDERS",
  "GILLETTE",
  "GINNIFILA",
  "GIPCL",
  "GKWLIMITED",
  "GLAND",
  "GLAXO",
  "GLENMARK",
  "GLFL",
  "GLOBAL",
  "GLOBALVECT",
  "GLOBE",
  "GLOBUSSPR",
  "GLS",
  "GMBREW",
  "GMDCLTD",
  "GMMPFAUDLR",
  "GMRINFRA",
  "GNA",
  "GNFC",
  "GOACARBON",
  "GOCLCORP",
  "GODFRYPHLP",
  "GODREJAGRO",
  "GODREJCP",
  "GODREJIND",
  "GODREJPROP",
  "GOKEX",
  "GOKUL",
  "GOKULAGRO",
  "GOLDBEES",
  "GOLDIAM",
  "GOLDSHARE",
  "GOODLUCK",
  "GOODYEAR",
  "GPIL",
  "GPPL",
  "GPTINFRA",
  "GRANULES",
  "GRAPHITE",
  "GRASIM",
  "GRAUWEIL",
  "GRAVITA",
  "GREAVESCOT",
  "GREENLAM",
  "GREENPANEL",
  "GREENPLY",
  "GRINDWELL",
  "GRINFRA",
  "GROBTEA",
  "GRPLTD",
  "GRSE",
  "GSCLCEMENT",
  "GSFC",
  "GSPL",
  "GSS",
  "GTL",
  "GTLINFRA",
  "GTNTEX",
  "GTPL",
  "GUFICBIO",
  "GUJALKALI",
  "GUJAPOLLO",
  "GUJGASLTD",
  "GULFOILLUB",
  "GULFPETRO",
  "HAL",
  "HARRMALAYA",
  "HATHWAY",
  "HATSUN",
  "HAVELLS",
  "HBANKETF",
  "HBLPOWER",
  "HBSL",
  "HCC",
  "HCG",
  "HCL-INSYS",
  "HCLTECH",
  "HDFC",
  "HDFCAMC",
  "HDFCBANK",
  "HDFCLIFE",
  "HDFCMFGETF",
  "HDFCNIFETF",
  "HDFCSENETF",
  "HEALTHY",
  "HEG",
  "HEIDELBERG",
  "HEMIPROP",
  "HERANBA",
  "HERCULES",
  "HERITGFOOD",
  "HEROMOTOCO",
  "HESTERBIO",
  "HEXATRADEX",
  "HFCL",
  "HGINFRA",
  "HGS",
  "HIKAL",
  "HIL",
  "HIMATSEIDE",
  "HINDALCO",
  "HINDCOMPOS",
  "HINDCON",
  "HINDCOPPER",
  "HINDNATGLS",
  "HINDOILEXP",
  "HINDPETRO",
  "HINDUNILVR",
  "HINDZINC",
  "HIRECT",
  "HISARMETAL",
  "HITECH",
  "HITECHCORP",
  "HITECHGEAR",
  "HLEGLAS",
  "HMVL",
  "HNDFDS",
  "HNGSNGBEES",
  "HOMEFIRST",
  "HONAUT",
  "HONDAPOWER",
  "HOVS",
  "HPL",
  "HSCL",
  "HSIL",
  "HTMEDIA",
  "HUBTOWN",
  "HUDCO",
  "HUHTAMAKI",
  "IBMFNIFTY",
  "IBREALEST",
  "IBULHSGFIN",
  "ICEMAKE",
  "ICICI500",
  "ICICIALPLV",
  "ICICIB22",
  "ICICIBANK",
  "ICICIBANKN",
  "ICICIBANKP",
  "ICICICONSU",
  "ICICIFMCG",
  "ICICIGI",
  "ICICIGOLD",
  "ICICILIQ",
  "ICICILOVOL",
  "ICICIM150",
  "ICICIMCAP",
  "ICICINF100",
  "ICICINIFTY",
  "ICICINV20",
  "ICICINXT50",
  "ICICIPHARM",
  "ICICIPRULI",
  "ICICISENSX",
  "ICICITECH",
  "ICIL",
  "ICRA",
  "IDBI",
  "IDBIGOLD",
  "IDEA",
  "IDFC",
  "IDFCFIRSTB",
  "IDFNIFTYET",
  "IEX",
  "IFBAGRO",
  "IFBIND",
  "IFCI",
  "IFGLEXPOR",
  "IGARASHI",
  "IGL",
  "IGPL",
  "IIFL",
  "IIFLSEC",
  "IIFLWAM",
  "IMFA",
  "IMPAL",
  "INCREDIBLE",
  "INDBANK",
  "INDHOTEL",
  "INDIACEM",
  "INDIAGLYCO",
  "INDIAMART",
  "INDIANB",
  "INDIANCARD",
  "INDIANHUME",
  "INDIGO",
  "INDIGOPNTS",
  "INDLMETER",
  "INDNIPPON",
  "INDOCO",
  "INDORAMA",
  "INDOSTAR",
  "INDOTECH",
  "INDOTHAI",
  "INDOWIND",
  "INDRAMEDCO",
  "INDSWFTLAB",
  "INDSWFTLTD",
  "INDTERRAIN",
  "INDUSINDBK",
  "INDUSTOWER",
  "INEOSSTYRO",
  "INFIBEAM",
  "INFOBEAN",
  "INFRABEES",
  "INFY",
  "INGERRAND",
  "INOXLEISUR",
  "INOXWIND",
  "INSECTICID",
  "INSPIRISYS",
  "INTELLECT",
  "INTENTECH",
  "INTLCONV",
  "INVENTURE",
  "IOB",
  "IOC",
  "IOLCP",
  "IPCALAB",
  "IPL",
  "IRB",
  "IRCON",
  "IRCTC",
  "IRFC",
  "IRIS",
  "IRISDOREME",
  "ISEC",
  "ISFT",
  "ISGEC",
  "ISMTLTD",
  "ITC",
  "ITDC",
  "ITDCEM",
  "ITI",
  "IVC",
  "IVP",
  "IVZINGOLD",
  "IVZINNIFTY",
  "IZMO",
  "J&KBANK",
  "JAGRAN",
  "JAGSNPHARM",
  "JAIBALAJI",
  "JAICORPLTD",
  "JAIPURKURT",
  "JAMNAAUTO",
  "JASH",
  "JAYAGROGN",
  "JAYBARMARU",
  "JAYSREETEA",
  "JBCHEPHARM",
  "JBFIND",
  "JBMA",
  "JCHAC",
  "JHS",
  "JINDALPHOT",
  "JINDALPOLY",
  "JINDALSAW",
  "JINDALSTEL",
  "JINDRILL",
  "JINDWORLD",
  "JISLJALEQS",
  "JKCEMENT",
  "JKIL",
  "JKLAKSHMI",
  "JKPAPER",
  "JKTYRE",
  "JMA",
  "JMCPROJECT",
  "JMFINANCIL",
  "JOCIL",
  "JPASSOCIAT",
  "JPINFRATEC",
  "JPPOWER",
  "JSL",
  "JSLHISAR",
  "JSWHL",
  "JSWISPL",
  "JSWSTEEL",
  "JTEKTINDIA",
  "JUBLFOOD",
  "JUBLINDS",
  "JUBLINGREA",
  "JUBLPHARMA",
  "JUMPNET",
  "JUNIORBEES",
  "JUSTDIAL",
  "JYOTHYLAB",
  "KABRAEXTRU",
  "KAJARIACER",
  "KAKATCEM",
  "KALPATPOWR",
  "KALYANKJIL",
  "KAMATHOTEL",
  "KAMDHENU",
  "KANANIIND",
  "KANORICHEM",
  "KANPRPLA",
  "KANSAINER",
  "KAPSTON",
  "KARDA",
  "KARMAENG",
  "KARURVYSYA",
  "KAUSHALYA",
  "KAYA",
  "KCP",
  "KCPSUGIND",
  "KDDL",
  "KEC",
  "KEERTI",
  "KEI",
  "KELLTONTEC",
  "KENNAMET",
  "KESORAMIND",
  "KEYFINSERV",
  "KHADIM",
  "KHAICHEM",
  "KHANDSE",
  "KICL",
  "KILITCH",
  "KIMS",
  "KINGFA",
  "KIOCL",
  "KIRIINDUS",
  "KIRLFER",
  "KIRLOSBROS",
  "KIRLOSENG",
  "KIRLOSIND",
  "KITEX",
  "KKCL",
  "KMSUGAR",
  "KNRCON",
  "KOKUYOCMLN",
  "KOLTEPATIL",
  "KOPRAN",
  "KOTAKBANK",
  "KOTAKBKETF",
  "KOTAKGOLD",
  "KOTAKIT",
  "KOTAKNIFTY",
  "KOTAKNV20",
  "KOTAKPSUBK",
  "KOTARISUG",
  "KOTHARIPET",
  "KOTHARIPRO",
  "KOVAI",
  "KPIGLOBAL",
  "KPITTECH",
  "KPRMILL",
  "KRBL",
  "KREBSBIO",
  "KRIDHANINF",
  "KRISHANA",
  "KRITI",
  "KRSNAA",
  "KSB",
  "KSCL",
  "KSL",
  "KTKBANK",
  "KUANTUM",
  "L&TFH",
  "LAGNAM",
  "LALPATHLAB",
  "LAMBODHARA",
  "LAOPALA",
  "LASA",
  "LATENTVIEW",
  "LAURUSLABS",
  "LAXMICOT",
  "LAXMIMACH",
  "LCCINFOTEC",
  "LEMONTREE",
  "LFIC",
  "LGBBROSLTD",
  "LGBFORGE",
  "LIBAS",
  "LIBERTSHOE",
  "LICHSGFIN",
  "LICNETFGSC",
  "LICNETFN50",
  "LICNETFSEN",
  "LICNFNHGP",
  "LIKHITHA",
  "LINCOLN",
  "LINCPEN",
  "LINDEINDIA",
  "LIQUIDBEES",
  "LIQUIDETF",
  "LODHA",
  "LOKESHMACH",
  "LOTUSEYE",
  "LOVABLE",
  "LPDC",
  "LSIL",
  "LT",
  "LTI",
  "LTTS",
  "LUMAXIND",
  "LUMAXTECH",
  "LUPIN",
  "LUXIND",
  "LXCHEM",
  "LYKALABS",
  "LYPSAGEMS",
  "M&M",
  "M&MFIN",
  "MAANALU",
  "MACPOWER",
  "MADHAV",
  "MADHUCON",
  "MADRASFERT",
  "MAESGETF",
  "MAFANG",
  "MAFSETF",
  "MAGADSUGAR",
  "MAGNUM",
  "MAHABANK",
  "MAHASTEEL",
  "MAHEPC",
  "MAHESHWARI",
  "MAHINDCIE",
  "MAHLIFE",
  "MAHLOG",
  "MAHSCOOTER",
  "MAHSEAMLES",
  "MAITHANALL",
  "MALUPAPER",
  "MAN50ETF",
  "MANAKALUCO",
  "MANAKCOAT",
  "MANAKSIA",
  "MANAKSTEEL",
  "MANAPPURAM",
  "MANGALAM",
  "MANGCHEFER",
  "MANGLMCEM",
  "MANGTIMBER",
  "MANINDS",
  "MANINFRA",
  "MANORG",
  "MANUGRAPH",
  "MANXT50",
  "MARALOVER",
  "MARATHON",
  "MARICO",
  "MARINE",
  "MARKSANS",
  "MARSHALL",
  "MARUTI",
  "MASFIN",
  "MASPTOP50",
  "MASTEK",
  "MATRIMONY",
  "MAWANASUG",
  "MAXHEALTH",
  "MAXIND",
  "MAXVIL",
  "MAYURUNIQ",
  "MAZDA",
  "MAZDOCK",
  "MBAPL",
  "MBLINFRA",
  "MCDOWELL-N",
  "MCL",
  "MCLEODRUSS",
  "MCX",
  "MEDICAMEQ",
  "MENONBE",
  "MERCATOR",
  "METROPOLIS",
  "MFL",
  "MFSL",
  "MGL",
  "MHRIL",
  "MIDHANI",
  "MINDACORP",
  "MINDAIND",
  "MINDTECK",
  "MINDTREE",
  "MIRCELECTR",
  "MIRZAINT",
  "MITTAL",
  "MMFL",
  "MMP",
  "MMTC",
  "MODISNME",
  "MOGSEC",
  "MOHITIND",
  "MOIL",
  "MOKSH",
  "MOL",
  "MOLDTECH",
  "MOLDTKPAC",
  "MOM100",
  "MOM50",
  "MON100",
  "MONTECARLO",
  "MORARJEE",
  "MOREPENLAB",
  "MOTHERSUMI",
  "MOTILALOFS",
  "MOTOGENFIN",
  "MPHASIS",
  "MPSLTD",
  "MRF",
  "MRO-TEK",
  "MRPL",
  "MSPL",
  "MSTCLTD",
  "MTARTECH",
  "MTEDUCARE",
  "MTNL",
  "MUKANDLTD",
  "MUKTAARTS",
  "MUNJALAU",
  "MUNJALSHOW",
  "MURUDCERA",
  "MUTHOOTCAP",
  "MUTHOOTFIN",
  "NACLIND",
  "NAGAFERT",
  "NAGREEKCAP",
  "NAGREEKEXP",
  "NAHARCAP",
  "NAHARINDUS",
  "NAHARPOLY",
  "NAM-INDIA",
  "NATCOPHARM",
  "NATHBIOGEN",
  "NATIONALUM",
  "NAUKRI",
  "NAVINFLUOR",
  "NAVKARCORP",
  "NAVNETEDUL",
  "NBCC",
  "NBIFIN",
  "NBVENTURES",
  "NCC",
  "NCLIND",
  "NCPSESDL24",
  "NDGL",
  "NDL",
  "NDRAUTO",
  "NDTV",
  "NECCLTD",
  "NECLIFE",
  "NELCAST",
  "NEOGEN",
  "NESCO",
  "NESTLEIND",
  "NETF",
  "NETFCONSUM",
  "NETFDIVOPP",
  "NETFGILT5Y",
  "NETFIT",
  "NETFLTGILT",
  "NETFMID150",
  "NETFNIF100",
  "NETFNV20",
  "NETFPHARMA",
  "NETFSDL26",
  "NETWORK18",
  "NEULANDLAB",
  "NEWGEN",
  "NEXTMEDIA",
  "NFL",
  "NH",
  "NHPC",
  "NIACL",
  "NIBL",
  "NIFTYBEES",
  "NIITLTD",
  "NILASPACES",
  "NILKAMAL",
  "NIPPOBATRY",
  "NIRAJ",
  "NITCO",
  "NITINSPIN",
  "NITIRAJ",
  "NKIND",
  "NLCINDIA",
  "NMDC",
  "NOCIL",
  "NOIDATOLL",
  "NORBTEAEXP",
  "NOVARTIND",
  "NPBET",
  "NRAIL",
  "NRBBEARING",
  "NSIL",
  "NTL",
  "NTPC",
  "NUCLEUS",
  "NURECA",
  "NUVOCO",
  "NXTDIGITAL",
  "NYKAA",
  "OAL",
  "OBEROIRLTY",
  "OCCL",
  "OFSS",
  "OIL",
  "OMAXAUTO",
  "OMAXE",
  "OMINFRAL",
  "ONELIFECAP",
  "ONGC",
  "ONMOBILE",
  "ONWARDTEC",
  "OPTIEMUS",
  "ORBTEXP",
  "ORICONENT",
  "ORIENTABRA",
  "ORIENTALTL",
  "ORIENTBELL",
  "ORIENTCEM",
  "ORIENTELEC",
  "ORIENTHOT",
  "ORIENTLTD",
  "ORIENTPPR",
  "ORISSAMINE",
  "ORTINLAB",
  "OSWALAGRO",
  "PAGEIND",
  "PAISALO",
  "PALASHSECU",
  "PALREDTEC",
  "PANACEABIO",
  "PANACHE",
  "PANAMAPET",
  "PANSARI",
  "PAR",
  "PARACABLES",
  "PARAGMILK",
  "PARAS",
  "PARSVNATH",
  "PASUPTAC",
  "PATELENG",
  "PATINTLOG",
  "PATSPINLTD",
  "PAYTM",
  "PBAINFRA",
  "PCJEWELLER",
  "PDMJEPAPER",
  "PDSMFL",
  "PEARLPOLY",
  "PEL",
  "PENIND",
  "PENINLAND",
  "PERSISTENT",
  "PETRONET",
  "PFC",
  "PFIZER",
  "PFOCUS",
  "PFS",
  "PGEL",
  "PGHH",
  "PGHL",
  "PGIL",
  "PHILIPCARB",
  "PHOENIXLTD",
  "PIDILITIND",
  "PIIND",
  "PILANIINVS",
  "PILITA",
  "PIONDIST",
  "PIONEEREMB",
  "PITTIENG",
  "PLASTIBLEN",
  "PNB",
  "PNBGILTS",
  "PNBHOUSING",
  "PNC",
  "PNCINFRA",
  "PODDARHOUS",
  "PODDARMENT",
  "POKARNA",
  "POLICYBZR",
  "POLYCAB",
  "POLYMED",
  "POLYPLEX",
  "PONNIERODE",
  "POONAWALLA",
  "POWERGRID",
  "POWERINDIA",
  "POWERMECH",
  "PPAP",
  "PPL",
  "PRAENG",
  "PRAKASH",
  "PRAKASHSTL",
  "PRECAM",
  "PRECOT",
  "PRECWIRE",
  "PREMEXPLN",
  "PREMIER",
  "PREMIERPOL",
  "PRESSMN",
  "PRESTIGE",
  "PRICOLLTD",
  "PRIMESECU",
  "PRINCEPIPE",
  "PRITIKAUTO",
  "PRIVISCL",
  "PROINDIA",
  "PROZONINTU",
  "PRSMJOHNSN",
  "PSB",
  "PSPPROJECT",
  "PSUBNKBEES",
  "PTC",
  "PTL",
  "PUNJABCHEM",
  "PURVA",
  "PVP",
  "PVR",
  "QGOLDHALF",
  "QNIFTY",
  "QUESS",
  "QUICKHEAL",
  "RADAAN",
  "RADICO",
  "RADIOCITY",
  "RAILTEL",
  "RAIN",
  "RAJESHEXPO",
  "RAJMET",
  "RAJSREESUG",
  "RAJTV",
  "RALLIS",
  "RAMANEWS",
  "RAMASTEEL",
  "RAMCOCEM",
  "RAMCOIND",
  "RAMCOSYS",
  "RAMKY",
  "RANASUG",
  "RANEENGINE",
  "RANEHOLDIN",
  "RATNAMANI",
  "RAYMOND",
  "RBL",
  "RBLBANK",
  "RCF",
  "RCOM",
  "RECLTD",
  "REDINGTON",
  "REFEX",
  "RELAXO",
  "RELIANCE",
  "RELIGARE",
  "REMSONSIND",
  "RENUKA",
  "REPCOHOME",
  "REPL",
  "REPRO",
  "RESPONIND",
  "REVATHI",
  "RGL",
  "RHFL",
  "RHIM",
  "RICOAUTO",
  "RIIL",
  "RITES",
  "RKEC",
  "RKFORGE",
  "RML",
  "ROLEXRINGS",
  "ROLLT",
  "ROSSARI",
  "ROSSELLIND",
  "ROUTE",
  "RPGLIFE",
  "RPPINFRA",
  "RPPL",
  "RPSGVENT",
  "RSSOFTWARE",
  "RSWM",
  "RSYSTEMS",
  "RTNINDIA",
  "RTNPOWER",
  "RUBYMILLS",
  "RUCHI",
  "RUCHIRA",
  "RUPA",
  "RUSHIL",
  "RVHL",
  "RVNL",
  "SADBHAV",
  "SADBHIN",
  "SAFARI",
  "SAGARDEEP",
  "SAGCEM",
  "SAIL",
  "SAKAR",
  "SAKHTISUG",
  "SAKSOFT",
  "SAKUMA",
  "SALASAR",
  "SALONA",
  "SALSTEEL",
  "SALZERELEC",
  "SANCO",
  "SANDESH",
  "SANDHAR",
  "SANGAMIND",
  "SANGHIIND",
  "SANGHVIMOV",
  "SANOFI",
  "SANSERA",
  "SAPPHIRE",
  "SARDAEN",
  "SARLAPOLY",
  "SASKEN",
  "SASTASUNDR",
  "SATIA",
  "SATIN",
  "SBC",
  "SBCL",
  "SBICARD",
  "SBIETFCON",
  "SBIETFIT",
  "SBIETFPB",
  "SBIETFQLTY",
  "SBILIFE",
  "SBIN",
  "SCHAEFFLER",
  "SCHAND",
  "SCHNEIDER",
  "SCI",
  "SDBL",
  "SECURKLOUD",
  "SELAN",
  "SELMC",
  "SEQUENT",
  "SERVOTECH",
  "SESHAPAPER",
  "SETCO",
  "SETF10GILT",
  "SETFGOLD",
  "SETFNIF50",
  "SETFNIFBK",
  "SETFNN50",
  "SETUINFRA",
  "SEYAIND",
  "SFL",
  "SGIL",
  "SGL",
  "SHAKTIPUMP",
  "SHALBY",
  "SHALPAINTS",
  "SHANKARA",
  "SHANTIGEAR",
  "SHARDACROP",
  "SHARDAMOTR",
  "SHAREINDIA",
  "SHARIABEES",
  "SHILPAMED",
  "SHIVAMILLS",
  "SHIVATEX",
  "SHK",
  "SHOPERSTOP",
  "SHRADHA",
  "SHREDIGCEM",
  "SHREECEM",
  "SHREEPUSHK",
  "SHREERAMA",
  "SHRENIK",
  "SHREYANIND",
  "SHREYAS",
  "SHRIRAMCIT",
  "SHRIRAMEPC",
  "SHYAMCENT",
  "SHYAMMETL",
  "SHYAMTEL",
  "SIEMENS",
  "SIGIND",
  "SIKKO",
  "SILGO",
  "SILINV",
  "SIMBHALS",
  "SIMPLEXINF",
  "SINTERCOM",
  "SIRCA",
  "SIS",
  "SIYSIL",
  "SJS",
  "SJVN",
  "SKFINDIA",
  "SKIPPER",
  "SKMEGGPROD",
  "SMARTLINK",
  "SMCGLOBAL",
  "SMLISUZU",
  "SMLT",
  "SMSLIFE",
  "SMSPHARMA",
  "SNOWMAN",
  "SOBHA",
  "SOLARA",
  "SOLARINDS",
  "SOMANYCERA",
  "SOMICONVEY",
  "SONACOMS",
  "SONATSOFTW",
  "SORILINFRA",
  "SOTL",
  "SOUTHBANK",
  "SPAL",
  "SPANDANA",
  "SPARC",
  "SPECIALITY",
  "SPENCERS",
  "SPIC",
  "SPICEJET",
  "SPLIL",
  "SPMLINFRA",
  "SPTL",
  "SREEL",
  "SRF",
  "SRHHYPOLTD",
  "SRIPIPES",
  "SRPL",
  "SRTRANSFIN",
  "STAR",
  "STARCEMENT",
  "STARPAPER",
  "STCINDIA",
  "STEELCAS",
  "STEELCITY",
  "STEELXIND",
  "STEL",
  "STERTOOLS",
  "STLTECH",
  "STOVEKRAFT",
  "STYLAMIND",
  "SUBEXLTD",
  "SUBROS",
  "SUDARSCHEM",
  "SUMEETINDS",
  "SUMICHEM",
  "SUMIT",
  "SUMMITSEC",
  "SUNCLAYLTD",
  "SUNDARMFIN",
  "SUNDARMHLD",
  "SUNDRMBRAK",
  "SUNDRMFAST",
  "SUNFLAG",
  "SUNPHARMA",
  "SUNTECK",
  "SUNTV",
  "SUPERHOUSE",
  "SUPERSPIN",
  "SUPPETRO",
  "SUPRAJIT",
  "SUPREMEENG",
  "SUPREMEIND",
  "SUPREMEINF",
  "SURANAT&P",
  "SURYALAXMI",
  "SURYAROSNI",
  "SURYODAY",
  "SUTLEJTEX",
  "SUULD",
  "SUVEN",
  "SUVENPHAR",
  "SUVIDHAA",
  "SUZLON",
  "SVPGLOB",
  "SWANENERGY",
  "SWARAJENG",
  "SWELECTES",
  "SWSOLAR",
  "SYMPHONY",
  "SYNGENE",
  "TAJGVK",
  "TAKE",
  "TALBROAUTO",
  "TANLA",
  "TARAPUR",
  "TARC",
  "TARMAT",
  "TARSONS",
  "TASTYBITE",
  "TATACHEM",
  "TATACOFFEE",
  "TATACOMM",
  "TATACONSUM",
  "TATAELXSI",
  "TATAINVEST",
  "TATAMETALI",
  "TATAMOTORS",
  "TATAMTRDVR",
  "TATAPOWER",
  "TATASTEEL",
  "TATASTLLP",
  "TATVA",
  "TBZ",
  "TCI",
  "TCIDEVELOP",
  "TCIEXP",
  "TCIFINANCE",
  "TCNSBRANDS",
  "TCPLPACK",
  "TCS",
  "TDPOWERSYS",
  "TEAMLEASE",
  "TECH",
  "TECHM",
  "TECHNOE",
  "TEJASNET",
  "TERASOFT",
  "TEXINFRA",
  "TEXMOPIPES",
  "TEXRAIL",
  "TFCILTD",
  "TGBHOTELS",
  "THANGAMAYL",
  "THEINVEST",
  "THERMAX",
  "THOMASCOOK",
  "THYROCARE",
  "TIDEWATER",
  "TIIL",
  "TIINDIA",
  "TIJARIA",
  "TIL",
  "TIMESGTY",
  "TIMETECHNO",
  "TIMKEN",
  "TINPLATE",
  "TIRUMALCHM",
  "TITAN",
  "TMRVL",
  "TNPETRO",
  "TNPL",
  "TOKYOPLAST",
  "TORNTPHARM",
  "TORNTPOWER",
  "TOTAL",
  "TOUCHWOOD",
  "TPLPLASTEH",
  "TREEHOUSE",
  "TREJHARA",
  "TRENT",
  "TRF",
  "TRIDENT",
  "TRIGYN",
  "TRIL",
  "TRITURBINE",
  "TRIVENI",
  "TTKHLTCARE",
  "TTKPRESTIG",
  "TTL",
  "TTML",
  "TV18BRDCST",
  "TVSELECT",
  "TVSMOTOR",
  "TVSSRICHAK",
  "TVTODAY",
  "TWL",
  "UBL",
  "UCALFUEL",
  "UCOBANK",
  "UFLEX",
  "UFO",
  "UGARSUGAR",
  "UGROCAP",
  "UJAAS",
  "UJJIVAN",
  "UJJIVANSFB",
  "ULTRACEMCO",
  "UMANGDAIRY",
  "UNICHEMLAB",
  "UNIDT",
  "UNIENTER",
  "UNIONBANK",
  "UNITEDTEA",
  "UNIVASTU",
  "UNIVCABLES",
  "UNIVPHOTO",
  "UPL",
  "URJA",
  "USHAMART",
  "UTIAMC",
  "UTIBANKETF",
  "UTINEXT50",
  "UTINIFTETF",
  "UTISENSETF",
  "UTISXN50",
  "UTTAMSTL",
  "UTTAMSUGAR",
  "VADILALIND",
  "VAIBHAVGBL",
  "VAISHALI",
  "VAKRANGEE",
  "VALIANTORG",
  "VARDHACRLC",
  "VARROC",
  "VASCONEQ",
  "VASWANI",
  "VBL",
  "VEDL",
  "VENKEYS",
  "VENUSREM",
  "VERTOZ",
  "VESUVIUS",
  "VETO",
  "VGUARD",
  "VHL",
  "VIDHIING",
  "VIJAYA",
  "VIKASECO",
  "VIKASLIFE",
  "VIKASPROP",
  "VIKASWSP",
  "VIMTALABS",
  "VINATIORGA",
  "VINDHYATEL",
  "VINEETLAB",
  "VINYLINDIA",
  "VIPCLOTHNG",
  "VIPIND",
  "VIPULLTD",
  "VISAKAIND",
  "VISHAL",
  "VISHWARAJ",
  "VIVIDHA",
  "VIVIMEDLAB",
  "VLSFINANCE",
  "VMART",
  "VOLTAMP",
  "VOLTAS",
  "VRLLOG",
  "VSSL",
  "VSTIND",
  "VSTTILLERS",
  "VTL",
  "WABAG",
  "WABCOINDIA",
  "WALCHANNAG",
  "WATERBASE",
  "WEBELSOLAR",
  "WEIZMANIND",
  "WELCORP",
  "WELENT",
  "WELINV",
  "WELSPUNIND",
  "WENDT",
  "WESTLIFE",
  "WHEELS",
  "WHIRLPOOL",
  "WINDLAS",
  "WINDMACHIN",
  "WIPRO",
  "WOCKPHARMA",
  "WONDERLA",
  "WORTH",
  "WSTCSTPAPR",
  "XCHANGING",
  "XELPMOC",
  "XPROINDIA",
  "YAARII",
  "YESBANK",
  "YUKEN",
  "ZEEL",
  "ZEELEARN",
  "ZENITHEXPO",
  "ZENSARTECH",
  "ZENTEC",
  "ZODIACLOTH",
  "ZOMATO",
  "ZOTA",
  "ZUARI",
  "ZUARIGLOB",
  "ZYDUSWELL",
];

module.exports = symbol_list;
