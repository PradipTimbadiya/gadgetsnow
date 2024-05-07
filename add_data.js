const { GadgetTypeModel, GadgetCategoryModel } = require('./models/gadget.model');
require('./db/conn');

// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Huawei", "Sony", "LG","Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Huawei", "Sony", "LG","Nokia", "Motorola", "HTC", "Lenovo", "ASUS", "Oppo", "Vivo", "Realme","Honor", "ZTE", "Blackberry", "Alcatel", "Meizu", "Micromax", "Gionee","Infinix", "Tecno", "Lava", "Karbonn", "Panasonic", "Coolpad", "Symphony"], type: null },
//             { key: "model", value: ["30A", "Galaxy S21", "Pixel 6", "iPhone 13", "Redmi Note 11", "Mate 40", "Xperia 5 III", "V60 ThinQ","Realme","Redmi","iPhone 12", "Galaxy S20", "Pixel 5a", "Redmi Note 10", "Mate 30", "Xperia 1 III", "V50 ThinQ","iPhone 11", "Galaxy Note 20", "Pixel 4a", "Redmi 10", "Mate 20", "Xperia 10 III", "V40 ThinQ","iPhone SE", "Galaxy A52", "Pixel 3a", "Redmi 9", "P40", "Xperia L4", "G8 ThinQ","iPhone XR", "Galaxy A12", "Pixel 3", "Redmi 8", "P30", "Xperia 10 II", "G7 ThinQ"], type: null },
//             { key: "ram", value: [6, 8, 12, 16], type: "GB" },
//             { key: "internal memory", value: [16, 64, 128, 256, 512], type: "GB" },
//             { key: "operating system", value: ["Android", "iOS"], type: null },
//             { key: "sim slots", value: ["Single SIM, GSM", "Dual SIM, GSM"], type: null },
//             { key: "price in india", value: [5000,6000,7000,10000,12000,15000,16000,18000,20000,22000,22500,23000,30000,35000,32000,45000,50000,65000,75000,85000,95000,105000,150000,165000], type: "ruppes" },             
//         ]
//     },
//     {
//         name: "overview",
//         fields: [
//             { key: "screen size", value: [5.5, 6, 6.5, 6.7, 6.8, 6.9], type: "inches" },
//             { key: "resolution", value: ["HD", "Full HD", "Quad HD", "4K"], type: null },
//             { key: "display type", value: ["AMOLED", "LCD", "OLED", "IPS"], type: null },
//             { key: "processor", value: ["Snapdragon 888", "Exynos 2100", "Apple A14 Bionic", "Kirin 9000", "Dimensity 1000+"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "capacity", value: [3000, 4000, 4500, 5000, 6000], type: "mAh" },
//             { key: "charging", value: ["18W Fast Charging", "30W Fast Charging", "65W Super Fast Charging", "120W HyperCharge"], type: null },
//             { key: "wireless charging", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "storage",
//         fields: [
//             { key: "storage capacity", value: [16, 64, 128, 256, 512], type: "GB" },
//             { key: "expandable storage", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "camera",
//         fields: [
//             { key: "primary camera", value: [12, 48, 64, 108], type: "MP" },
//             { key: "secondary camera", value: [8, 16, 32, 48], type: "MP" },
//             { key: "camera features", value: ["Dual Camera", "Triple Camera", "Quad Camera", "Penta Camera"], type: null },
//         ]
//     },
//     {
//         name: "design",
//         fields: [
//             { key: "dimensions", value: ["70 x 150 x 8", "72 x 155 x 7", "75 x 160 x 9"], type: "mm" },
//             { key: "weight", value: [50, 60, 80, 70, 90, 110, 150, 170], type: "gm" },
//             { key: "material", value: ["Glass", "Metal", "Plastic", "Ceramic"], type: null },
//             { key: "colors", value: ["Black", "White", "Blue", "Red", "Green", "Gold"], type: null },
//         ]
//     },
//     {
//         name: "display",
//         fields: [
//             { key: "screen size", value: [5.5, 6, 6.5, 6.7, 6.8, 6.9], type: "inches" },
//             { key: "resolution", value: ["HD", "Full HD", "Quad HD", "4K"], type: null },
//             { key: "display type", value: ["AMOLED", "LCD", "OLED", "IPS"], type: null },
//             { key: "refresh rate", value: [60, 90, 120, 144], type: "Hz" },
//         ]
//     },
//     {
//         name: "performance",
//         fields: [
//             { key: "processor", value: ["Snapdragon 888", "Exynos 2100", "Apple A14 Bionic", "Kirin 9000", "Dimensity 1000+"], type: null },
//             { key: "GPU", value: ["Adreno 660", "Mali-G78", "Apple GPU", "Mali-G77", "Mali-G76"], type: null },
//             { key: "RAM", value: [2, 3, 4, 6, 8, 12, 16], type: "GB" },
//             { key: "storage", value: [8, 16, 64, 128, 256, 512], type: "GB" },
//         ]
//     },
//     {
//         name: "multimedia",
//         fields: [
//             { key: "audio", value: ["Stereo Speakers", "Dolby Atmos", "Hi-Res Audio", "3.5mm Headphone Jack"], type: null },
//             { key: "video", value: ["HDR10+", "Dolby Vision", "8K Video Recording", "Slow Motion"], type: null },
//         ]
//     },
//     {
//         name: "network connectivity",
//         fields: [
//             { key: "network", value: [5, 4, 3, 2], type: "G" },
//             { key: "Wi-Fi", value: ["Wi-Fi 6E", "Wi-Fi 6", "Wi-Fi 5", "Wi-Fi 4"], type: null },
//             { key: "Bluetooth", value: ["Bluetooth 5.2", "Bluetooth 5.1", "Bluetooth 5.0"], type: null },
//             { key: "NFC", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "special features",
//         fields: [
//             { key: "fingerprint sensor", value: ["In-Display", "Side-Mounted", "Rear-Mounted"], type: null },
//             { key: "face unlock", value: ["Supported", "Not Supported"], type: null },
//             { key: "water resistance", value: ["IP68", "IP67", "Splash Resistant"], type: null },
//             { key: "wireless charging", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "sensors", value: ["Accelerometer", "Gyroscope", "Proximity", "Compass"], type: null },
//             { key: "operating system", value: ["Android 12", "iOS 15", "MIUI 13", "One UI 4"], type: null },
//             { key: "SIM slots", value: ["Single SIM", "Dual SIM", "Triple SIM"], type: null },
//         ]
//     }
// ]; //for phones


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Apple", "Dell", "Lenovo", "HP", "Asus", "Acer", "Microsoft", "Samsung", "MSI", "LG", "Razer", "Huawei", "Google", "Sony", "Toshiba", "Fujitsu", "Alienware", "Gigabyte", "Xiaomi", "Medion", "Chuwi", "Vaio", "Gateway", "Compal", "Clevo", "Mechrevo", "Schenker", "Tongfang", "Machenike", "Hasee", "Toshiba", "Fujitsu", "Positivo", "LG", "Aorus"], type: null },
//             { key: "model", value: ["MacBook Pro", "XPS 13", "ThinkPad X1 Carbon", "Spectre x360", "ZenBook", "Swift 3", "Surface Laptop", "Galaxy Book", "GS66 Stealth", "Gram", "Blade 15", "MateBook X Pro", "Pixelbook Go", "VAIO Z", "Portege", "Lifebook", "Area-51m", "Aero 15", "Mi Notebook", "Erazer", "Hi10 X", "MateBook D", "Swift 5", "Surface Pro", "ProBook", "Zephyrus G14", "Pro X", "EliteBook", "Yoga Slim 7", "Elite Dragonfly", "Flex", "Legion 5", "Envy"], type: null },
//             { key: "processor", value: ["Intel Core i9", "Intel Core i7", "Intel Core i5", "Intel Core i3", "Intel Xeon", "AMD Ryzen 9", "AMD Ryzen 7", "AMD Ryzen 5", "Apple M1", "Qualcomm Snapdragon"], type: null },
//             { key: "RAM", value: [4, 8, 12, 16, 32, 64, 128, 256], type: "GB" },
//             { key: "storage", value: [128, 256, 512, 1024, 2048], type: "GB" },
//             { key: "operating system", value: ["Windows", "macOS", "Chrome OS", "Linux"], type: null },
//             { key: "display size", value: [13.3, 14, 15.6, 16, 17.3], type: "inches" },
//             { key: "resolution", value: ["HD", "Full HD", "Quad HD", "4K", "5K", "6K", "8K"], type: null },
//             { key: "price in india", value: [15000,16000,18000,20000,22000,22500,23000,30000,35000,32000,45000,50000,65000,75000,85000,95000,105000,150000,165000,200000], type: "ruppes" },             
//         ]
//     },
//     {
//         name: "storage",
//         fields: [
//             { key: "storage type", value: ["HDD", "SSD", "NVMe SSD", "eMMC", "Hybrid Drive"], type: null },
//             { key: "expandable storage", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "display details",
//         fields: [
//             { key: "panel type", value: ["IPS", "TN", "VA", "OLED"], type: null },
//             { key: "refresh rate", value: [60, 120, 144, 240, 360], type: "Hz" },
//             { key: "color accuracy", value: ["sRGB", "Adobe RGB", "DCI-P3"], type: null },
//             { key: "brightness", value: ["300 nits", "400 nits", "500 nits", "600 nits", "700 nits", "1000 nits"], type: "nits" },
//             { key: "touchscreen", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "performance",
//         fields: [
//             { key: "graphics card", value: ["NVIDIA GeForce RTX 3090", "NVIDIA GeForce RTX 3080", "NVIDIA GeForce RTX 3070", "NVIDIA GeForce RTX 3060", "AMD Radeon RX 6800M", "AMD Radeon RX 6700M", "Intel Iris Xe", "AMD Radeon", "NVIDIA Quadro"], type: null },
//             { key: "GPU memory", value: [4, 6, 8, 10, 12, 16, 24], type: "GB" },
//             { key: "CPU cores", value: [2, 4, 6, 8, 10, 12, 16, 24, 32], type: null },
//             { key: "CPU clock speed", value: ["1.0 GHz", "1.5 GHz", "2.0 GHz", "2.5 GHz", "3.0 GHz", "3.5 GHz", "4.0 GHz", "4.5 GHz", "5.0 GHz"], type: null },
//             { key: "cooling system", value: ["Air Cooling", "Liquid Cooling", "Vapor Chamber Cooling"], type: null },
//             { key: "overclocking", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "battery capacity", value: [4000, 5000, 6000, 7000, 8000, 9000], type: "mAh" },
//             { key: "battery life", value: ["Up to 6 hours", "Up to 8 hours", "Up to 10 hours", "Up to 12 hours", "Up to 14 hours", "Up to 16 hours", "Up to 18 hours", "Up to 20 hours"], type: null },
//             { key: "charging", value: ["18W Fast Charging", "30W Fast Charging", "65W Super Fast Charging", "120W HyperCharge"], type: null },
//             { key: "wireless charging", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "networking",
//         fields: [
//             { key: "network", value: [5, 4, 3, 2], type: "G" },
//             { key: "Wi-Fi", value: ["Wi-Fi 6E", "Wi-Fi 6", "Wi-Fi 5", "Wi-Fi 4"], type: null },
//             { key: "Bluetooth", value: ["Bluetooth 5.2", "Bluetooth 5.1", "Bluetooth 5.0"], type: null },
//             { key: "NFC", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "ports",
//         fields: [
//             { key: "USB ports", value: ["USB-A", "USB-C", "Thunderbolt 3", "Thunderbolt 4"], type: null },
//             { key: "HDMI ports", value: [1, 2], type: null },
//             { key: "Audio ports", value: ["3.5mm Headphone Jack", "Combo Audio Jack"], type: null },
//             { key: "SD card slot", value: ["Supported", "Not Supported"], type: null },
//             { key: "Ethernet", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "peripherals",
//         fields: [
//             { key: "keyboard", value: ["Backlit Keyboard", "Mechanical Keyboard", "Chiclet Keyboard"], type: null },
//             { key: "trackpad", value: ["Precision Trackpad", "Glass Trackpad"], type: null },
//             { key: "stylus support", value: ["Supported", "Not Supported"], type: null },
//             { key: "webcam", value: ["720p", "1080p", "4K"], type: null },
//         ]
//     },
//     {
//         name: "multimedia",
//         fields: [
//             { key: "audio", value: ["Stereo Speakers", "Dolby Atmos", "Harman Kardon Speakers", "THX Spatial Audio"], type: null },
//             { key: "video", value: ["HDR10", "Dolby Vision", "4K Video Recording", "360-degree Video"], type: null },
//             { key: "microphone", value: ["Built-in Microphone", "External Microphone"], type: null },
//         ]
//     },
//     {
//         name: "security",
//         fields: [
//             { key: "fingerprint sensor", value: ["Integrated Fingerprint Sensor", "Windows Hello Face Recognition"], type: null },
//             { key: "TPM", value: ["Trusted Platform Module (TPM) 2.0"], type: null },
//             { key: "kensington lock", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "sensors", value: ["Accelerometer", "Gyroscope", "Proximity", "Ambient Light Sensor", "Magnetometer"], type: null },
//             { key: "dimensions", value: ["Height x Width x Depth"], type: null },
//             { key: "weight", value: ["Weight"], type: "kg" },
//             { key: "material", value: ["Aluminum", "Magnesium Alloy", "Carbon Fiber", "Plastic"], type: null },
//             { key: "color options", value: ["Black", "Silver", "Gray", "Blue", "Red", "Gold", "Rose Gold"], type: null },
//         ]
//     }
// ]; //for leptops

// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "lunch date", value: [2020, 2021, 2022, 2023, 2024, 2025], type: null },
//             { key: "brand", value: ["Apple", "Samsung", "Lenovo", "Huawei", "Microsoft", "Google", "Amazon", "Asus", "Xiaomi", "Sony", "LG", "Acer", "Alcatel", "TCL", "Motorola", "Nokia", "HP", "Dell", "Sony Ericsson", "HTC"], type: null },
//             { key: "model", value: ["iPad Pro", "Galaxy Tab S", "Tab P11", "MatePad", "Surface Pro", "Pixel Slate", "Fire HD", "ZenPad", "Mi Pad", "Xperia Tablet", "G Pad", "Iconia Tab", "Pixi", "Tab M", "Moto Tab", "Lumia Tablet", "Slate", "Venue", "Xperia Z Tablet", "Flyer"], type: null },
//             { key: "custom ui", value: ["Yes", "No"], type: null },
//             { key: "operating system", value: ["iOS", "Android", "Windows", "Fire OS"], type: null },
//             { key: "network", value: [5, 4, 3, 2], type: "G" },
//             { key: "sim slots", value: [1, 2], type: null },
//             { key: "sim size", value: ["Nano SIM", "Micro SIM"], type: null },
//             { key: "price in india", value: [5000,7000,8000,10000,15000,20000,25000,35000,29000,40000,45000,70000,60000,55000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "design",
//         fields: [
//             { key: "height", value: [7.0,7.5,8.0,8.5,9.0,9.5,10.0,10.5,11.0,11.5], type: "mm" },
//             { key: "width", value: [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10], type: "mm" },
//             { key: "thickness", value: [1.5,2,2.5,3,3.5], type: "mm" },
//             { key: "weight", value: [65,70,75,80,85,90,95,100,115,120,130,140], type: "gm" },
//             { key: "colours", value: ["Black", "White", "Silver", "Gray", "Gold", "Blue", "Red", "Green", "Pink"], type: null },
//         ]
//     },
//     {
//         name: "display",
//         fields: [
//             { key: "screensize", value: [6.5,7.0,7.5,8.0,8.5,9.0,9.5,10.0,10.5], type: "inches" },
//             { key: "screen resolution", value: ["HD", "Full HD", "Quad HD", "4K"], type: null },
//             { key: "display type", value: ["LCD", "AMOLED", "OLED", "IPS"], type: null },
//             { key: "touch screen", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "performance",
//         fields: [
//             { key: "chipset", value: ["Apple A-series", "Snapdragon", "Exynos", "Kirin", "MediaTek", "Intel", "AMD", "Qualcomm"], type: null },
//             { key: "processor", value: ["Dual-core", "Quad-core", "Hexa-core", "Octa-core", "Deca-core"], type: null },
//             { key: "architecture", value: ["ARM", "x86", "x64"], type: null },
//             { key: "graphics", value: ["Adreno", "Mali", "PowerVR", "Intel HD Graphics", "AMD Radeon"], type: null },
//             { key: "ram", value: [2, 3, 4, 6, 8, 12, 16, 32], type: "GB" },
//         ]
//     },
//     {
//         name: "storage",
//         fields: [
//             { key: "internal memory", value: [16, 32, 64, 128, 256, 512, 1024], type: "GB" },
//             { key: "expandable memory", value: ["Supported", "Not Supported"], type: null },
//         ]
//     },
//     {
//         name: "rear camera",
//         fields: [
//             { key: "rear camera", value: ["Single", "Dual", "Triple", "Quad"], type: null },
//             { key: "rear resolutions", value: [8,12,16,24,48,64, 108, 256], type: "MP" },
//             { key: "auto focus", value: ["Yes", "No"], type: null },
//             { key: "video recording", value: ["720p", "1080p", "4K", "8K"], type: null },
//         ]
//     },
//     {
//         name: "front camera",
//         fields: [
//             { key: "front camera setup", value: ["Single", "Dual"], type: null },
//             { key: "front resolutions", value: [2 , 5 , 8 , 12 , 16 , 24 , 32 ], type: "MP" },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "capacity", value: [3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], type: "mAh" },
//             { key: "type", value: ["Li-Ion", "Li-Po"], type: null },
//         ]
//     },
//     {
//         name: "network connectivity",
//         fields: [
//             { key: "sim type", value: ["eSIM", "Nano SIM", "Micro SIM"], type: null },
//             { key: "sim size", value: ["Standard", "Micro", "Nano"], type: null },
//             { key: "network support", value: [2,3,4,5], type: "G" },
//             { key: "voice calling", value: ["Yes", "No"], type: null },
//             { key: "wifi", value: ["802.11 a/b/g/n/ac", "Wi-Fi 6E", "Wi-Fi 6", "Wi-Fi 5", "Wi-Fi 4"], type: null },
//             { key: "bluetooth", value: ["Bluetooth 5.2", "Bluetooth 5.1", "Bluetooth 5.0", "Bluetooth 4.2", "Bluetooth 4.0"], type: null },
//             { key: "gps", value: ["GPS", "A-GPS", "GLONASS", "Galileo", "BeiDou"], type: null },
//             { key: "usb connectivity", value: ["USB Type-C", "Micro USB"], type: null },
//         ]
//     },
//     {
//         name: "multimedia",
//         fields: [
//             { key: "audio features", value: ["Stereo Speakers", "Dolby Atmos", "Harman Kardon Speakers", "THX Spatial Audio"], type: null },
//             { key: "loudspecker", value: ["Yes", "No"], type: null },
//             { key: "audio jack", value: ["3.5mm", "USB Type-C"], type: null },
//         ]
//     },
//     {
//         name: "special features",
//         fields: [
//             { key: "other sensor", value: ["Accelerometer", "Gyroscope", "Proximity", "Ambient Light Sensor", "Barometer", "Fingerprint Sensor", "Face Recognition", "Iris Scanner"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Amazon", "Flipkart", "eBay", "Alibaba", "AliExpress", "Walmart"], type: null },
//             { key: "manufacturer", value: ["Apple Inc.", "Samsung Electronics", "Lenovo Group", "Huawei Technologies", "Microsoft Corporation", "Google LLC", "Amazon.com Inc.", "Asustek Computer Inc.", "Xiaomi Corporation", "Sony Corporation", "LG Electronics", "Acer Inc.", "TCL Corporation", "Motorola Inc.", "Nokia Corporation", "HP Inc.", "Dell Technologies", "Sony Ericsson", "HTC Corporation"], type: null },
//             { key: "country of origin", value: ["USA", "South Korea", "China", "Japan", "Taiwan", "India", "Germany", "Finland"], type: null },
//             { key: "packer", value: ["Apple Inc.", "Samsung Electronics", "Lenovo Group", "Huawei Technologies", "Microsoft Corporation", "Google LLC", "Amazon.com Inc.", "Asustek Computer Inc.", "Xiaomi Corporation", "Sony Corporation", "LG Electronics", "Acer Inc.", "TCL Corporation", "Motorola Inc.", "Nokia Corporation", "HP Inc.", "Dell Technologies", "Sony Ericsson", "HTC Corporation"], type: null },
//         ]
//     }
// ]; //for tablets

// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "title", value: ["Single Door Refrigerator", "Double Door Refrigerator", "Triple Door Refrigerator", "Side-by-Side Refrigerator", "French Door Refrigerator"], type: null },
//             { key: "brand", value: ["LG", "Samsung", "Whirlpool", "Haier", "Godrej", "Panasonic", "Hitachi", "Bosch", "Voltas", "Siemens", "Frigidaire", "Electrolux", "Kenmore", "Maytag", "KitchenAid", "Sharp", "Toshiba", "Midea", "Hisense", "GE Appliances"], type: null },
//             { key: "model no", value: ["RT28T3922R8/HL", "RT30T3A23UT/HL", "RT34T4543S8/HL", "RR20T2Y2YR8/HL", "RR21T2H2WCU/NL", "RF23A4571DT/NL", "RS72R5001M9/TL", "RF28T5001SR/TL", "GDE21ESKSS", "FFHT1425VV", "FGSC2335TF", "RF23M8570SG", "KRFF507HPS", "WRS588FIHZ"], type: null },
//             { key: "capacity", value: [100,120,140,150,200,220,250,270,300,320,350,370,400,450,500,550,600], type: "L" },
//             { key: "defrosting technology", value: ["Direct Cool", "Frost Free"], type: null },
//             { key: "energy rating", value: [1,2,3,4,5], type: "star" },
//             { key: "refrigerator type", value: ["Top Freezer", "Bottom Freezer", "Side-by-Side", "French Door"], type: null },
//             { key: "price in india", value: [10000,20000,15000,25000,30000,35000,40000,45000,50000,55000,60000,65000,70000,80000,90000,105000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "air flow",
//         fields: [
//             { key: "air circulation", value: ["Multi Air Flow", "Cooling Air Flow"], type: null },
//         ]
//     },
//     {
//         name: "freezer",
//         fields: [
//             { key: "freezer location", value: ["Top", "Bottom", "Side-by-Side"], type: null },
//             { key: "freezer lamp", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "body design",
//         fields: [
//             { key: "color", value: ["Black", "White", "Silver", "Stainless Steel", "Red", "Blue", "Gray"], type: null },
//             { key: "door lock", value: ["Yes", "No"], type: null },
//             { key: "handle", value: ["Recessed", "External", "Integrated"], type: null },
//             { key: "handle design", value: ["Curved", "Straight", "Ergonomic"], type: null },
//             { key: "ice dispenser", value: ["Automatic", "Manual"], type: null },
//             { key: "interiors", value: ["LED Lighting", "Glass Shelves", "Wire Shelves", "Plastic Shelves"], type: null },
//             { key: "water dispenser", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "height", value: [40,45,50,55,60,65,70,85,90,115,150,120,130], type: "cm" },
//             { key: "width", value: [40,45,50,55,60,65,70,85,90,115,150,120,130], type: "cm" },
//             { key: "depth", value: [40,45,50,55,60,65,70,85,90,115,150,120,130], type: "cm" },
//         ]
//     },
//     {
//         name: "basket gasket shelfs",
//         fields: [
//             { key: "anti becteria gasket", value: ["Yes", "No"], type: null },
//             { key: "chiller tray", value: ["Yes", "No"], type: null },
//             { key: "egg tray", value: ["Yes", "No"], type: null },
//             { key: "no of bottle shelves", value: [1, 2, 3, 4], type: null },
//             { key: "no of doors", value: [1, 2, 3, 4], type: null },
//             { key: "no of shelves", value: [1, 2, 3, 4], type: null },
//             { key: "shelves", value: ["Glass", "Wire", "Plastic"], type: null },
//             { key: "vegetable basket", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "service warranty",
//         fields: [
//             { key: "warranty", value: [1, 2 , 3 , 4 , 5 ], type: "Years" },
//             { key: "package contents", value: ["User Manual", "Warranty Card", "Power Cord", "Ice Tray", "Egg Tray", "Handle"], type: null },
//             { key: "compressor warranty", value: [5 , 10 ], type: "Years" },
//         ]
//     },
//     {
//         name: "other features",
//         fields: [
//             { key: "refrigerant", value: ["R600a", "R134a", "R290", "R32"], type: null },
//             { key: "stabilizer free operation", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["LG Electronics", "Samsung India Electronics", "Whirlpool India", "Haier Appliances India Pvt. Ltd.", "Godrej Appliances", "Panasonic India Pvt. Ltd.", "Hitachi India Pvt. Ltd.", "Bosch India", "Voltas Limited", "Siemens India", "Frigidaire Appliances Pvt. Ltd.", "Electrolux India", "Kenmore Appliances", "Maytag Appliances", "KitchenAid India", "Sharp India", "Toshiba India", "Midea Appliances India Pvt. Ltd.", "Hisense India Pvt. Ltd.", "GE Appliances India Pvt. Ltd."], type: null },
//             { key: "manufacturer", value: ["LG Electronics", "Samsung Electronics", "Whirlpool Corporation", "Haier Group Corporation", "Godrej & Boyce Mfg. Co. Ltd.", "Panasonic Corporation", "Hitachi, Ltd.", "Bosch Limited", "Voltas Limited", "Siemens AG", "Frigidaire", "Electrolux", "Kenmore", "Maytag", "KitchenAid", "Sharp Corporation", "Toshiba Corporation", "Midea Group", "Hisense Group", "GE Appliances"], type: null },
//             { key: "country of origin", value: ["South Korea", "India", "USA", "China", "Japan", "Germany"], type: null },
//             { key: "packer", value: ["LG Electronics", "Samsung India Electronics", "Whirlpool India", "Haier Appliances India Pvt. Ltd.", "Godrej Appliances", "Panasonic India Pvt. Ltd.", "Hitachi India Pvt. Ltd.", "Bosch India", "Voltas Limited", "Siemens India", "Frigidaire Appliances Pvt. Ltd.", "Electrolux India", "Kenmore Appliances", "Maytag Appliances", "KitchenAid India", "Sharp India", "Toshiba India", "Midea Appliances India Pvt. Ltd.", "Hisense India Pvt. Ltd.", "GE Appliances India Pvt. Ltd."], type: null },
//         ]
//     }
// ]; // for refrigerators


const attributeGroups = [
    {
        name: "general",
        fields: [
            { key: "brand", value: ["LG", "Samsung", "Panasonic", "Whirlpool", "Sharp", "Toshiba", "Bosch", "IFB", "Haier", "Electrolux", "Morphy Richards", "Kenwood", "Godrej", "Midea", "Onida", "Bajaj", "Kenstar", "Hamilton Beach", "Black+Decker", "Cuisinart"], type: null },
            { key: "model name", value: ["Solo", "Grill", "Convection", "Combination", "Countertop", "Over-the-Range", "Built-in"], type: null },
            { key: "type", value: ["Solo", "Grill", "Convection", "Combination"], type: null },
            { key: "capacity", value: ["20 Liters", "25 Liters", "30 Liters", "32 Liters", "35 Liters", "40 Liters", "45 Liters", "50 Liters"], type: null },
            { key: "color", value: ["Black", "White", "Silver", "Stainless Steel", "Red", "Blue", "Yellow", "Green"], type: null },
            { key: "control type", value: ["Touch Control", "Mechanical Control", "Dial Control", "Button Control"], type: null },
            { key: "display type", value: ["LED Display", "Digital Display", "Analog Display", "No Display"], type: null },
            { key: "price in india", value: [5000,7000,8000,10000,12000,15000,20000,22000,25000,30000,35000,40000,45000,50000,55000,60000], type: "ruppes" },
        ]
    },
    {
        name: "performance features",
        fields: [
            { key: "defrost", value: ["Auto Defrost", "Weight Defrost", "Time Defrost"], type: null },
            { key: "power levels", value: [5,10,15,20], type: "Levels" },
        ]
    },
    {
        name: "power",
        fields: [
            { key: "voltage", value: ["220-240V", "110-120V"], type: null },
            { key: "wattage", value: [600, 800, 1000, 1200, 1400, 1600, 1800, 2000], type: "W" },
        ]
    },
    {
        name: "warranty",
        fields: [
            { key: "warranty", value: [1,2,3,4,5], type: "Years" },
        ]
    },
    {
        name: "other details",
        fields: [
            { key: "importer", value: ["LG Corporation", "Samsung Electronics", "Panasonic Corporation", "Whirlpool Corporation", "Sharp Corporation", "Toshiba Corporation", "Bosch GmbH", "IFB Industries Ltd.", "Haier Group Corporation", "Electrolux AB", "Morphy Richards Ltd.", "Kenwood Limited", "Godrej & Boyce Mfg. Co. Ltd.", "Midea Group", "Onida Electronics", "Bajaj Electricals Ltd.", "Kenstar Appliances", "Hamilton Beach Brands Inc.", "Black+Decker Corporation", "Conair Corporation"], type: null },
            { key: "manufacturer", value: ["LG Corporation", "Samsung Electronics", "Panasonic Corporation", "Whirlpool Corporation", "Sharp Corporation", "Toshiba Corporation", "Bosch GmbH", "IFB Industries Ltd.", "Haier Group Corporation", "Electrolux AB", "Morphy Richards Ltd.", "Kenwood Limited", "Godrej & Boyce Mfg. Co. Ltd.", "Midea Group", "Onida Electronics", "Bajaj Electricals Ltd.", "Kenstar Appliances", "Hamilton Beach Brands Inc.", "Black+Decker Corporation", "Conair Corporation"], type: null },
            { key: "country of origin", value: ["South Korea", "Japan", "China", "USA", "Germany", "India", "Sweden", "UK"], type: null },
            { key: "packer", value: ["LG Corporation", "Samsung Electronics", "Panasonic Corporation", "Whirlpool Corporation", "Sharp Corporation", "Toshiba Corporation", "Bosch GmbH", "IFB Industries Ltd.", "Haier Group Corporation", "Electrolux AB", "Morphy Richards Ltd.", "Kenwood Limited", "Godrej & Boyce Mfg. Co. Ltd.", "Midea Group", "Onida Electronics", "Bajaj Electricals Ltd.", "Kenstar Appliances", "Hamilton Beach Brands Inc.", "Black+Decker Corporation", "Conair Corporation"], type: null },
        ]
    }
]; //microwave

function generateDummyProduct() {
    const product = {
        sellerId: "66190718d0e079260ae20d26",
        gadgetName: "microwave",
        gadgetTypeId :"6622350e254bd1424b009f05", 
        image: [
            "temp\\download (1).jpeg",
            "temp\\download (2).jpeg",
            "temp\\download (3).jpeg",
            "temp\\download (4).jpeg",
            "temp\\download (5).jpeg",
            "temp\\download (6).jpeg"
        ],
        description: "This microwave is very nice and its functionality is very best and good",
        specifications: []
    };

    const selectedGroups = getRandomItems(attributeGroups, getRandomNumber(5,5));

    for (const group of selectedGroups) {
        const fields = [];
        for (const field of group.fields) {
            const randomIndex = Math.floor(Math.random() * field.value.length);
            const value = field.value[randomIndex];
            fields.push({ key: field.key, value , type: field.type});
        }
        product.specifications.push({ name: group.name, fields });
    }

    return product;
}

function getRandomItems(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    

    const numberOfProducts = 1000;

    const products = [];
    for (let i = 0; i < numberOfProducts; i++) {
        products.push(generateDummyProduct());
    }
    await GadgetCategoryModel.insertMany(products);

    console.log("Data added to database! :)");
}

seedDB();






// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Canon", "Nikon", "Sony", "Fujifilm", "Panasonic", "Olympus", "Leica", "Pentax", "Samsung", "GoPro", "DJI", "Ricoh", "Hasselblad", "Phase One", "Kodak", "YI", "Insta360", "RED", "Blackmagic Design", "Z Cam"], type: null },
//             { key: "type", value: ["DSLR", "Mirrorless", "Compact", "Action", "360-Degree", "Cinema", "Medium Format", "Instant"], type: null },
//             { key: "series", value: ["EOS", "Alpha", "Lumix", "OM-D", "X-Series", "M-Series", "G-Series", "RX-Series", "PowerShot", "Cyber-shot", "Coolpix", "X-T Series", "E-Mount", "Z-Series", "Q-Series", "Alpha 7", "Alpha 9", "K-Series"], type: null },
//             { key: "title", value: ["EOS Rebel T7", "Alpha A7 III", "Lumix GH5", "OM-D E-M1 Mark II", "X-T4", "RX100 VII", "PowerShot G7 X Mark III", "Cyber-shot RX10 IV", "Coolpix P1000", "X100V", "Insta360 One X2", "DJI Osmo Action", "Ricoh GR III", "Leica Q2", "Alpha 1", "EOS-1D X Mark III"], type: null },
//             { key: "price in india", value: [50000,55000,60000,65000,70000,80000,90000,100000,105000,110000,150000,170000,180000,200000,245000,250000,300000,350000,400000], type: "rupees" },
//         ]
//     },
//     {
//         name: "sensors",
//         fields: [
//             { key: "type", value: ["CMOS", "CCD"], type: null },
//             { key: "effective resolution", value: [20, 24, 30, 40, 50, 60, 100], type: "MP" },
//         ]
//     },
//     {
//         name: "lens",
//         fields: [
//             { key: "mount", value: ["Canon EF", "Nikon F", "Sony E", "Fujifilm X", "Micro Four Thirds", "Leica M", "Pentax K", "Samsung NX", "Sigma SA", "Sony A", "Canon RF", "Nikon Z", "Leica L", "Panasonic L", "Sony FE", "Fujifilm G", "Hasselblad XCD", "Phase One XF"], type: null },
//             { key: "focal length", value: [24, 35, 50, 85, 100, 200, 300, 400, 600], type: "mm" },
//             { key: "optical zoom", value: [2, 3, 5, 10, 20, 30, 50, 100], type: "x" },
//         ]
//     },
//     {
//         name: "video",
//         fields: [
//             { key: "fps", value: [24, 30, 60, 120, 240, 480, 960], type: "fps" },
//             { key: "file format", value: ["MP4", "MOV", "AVCHD", "H.264", "H.265"], type: null },
//             { key: "slow motion effect", value: ["720p", "1080p", "4K"], type: null },
//         ]
//     },
//     {
//         name: "flash",
//         fields: [
//             { key: "built in flash", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "storage",
//         fields: [
//             { key: "storage file system", value: ["FAT32", "exFAT", "NTFS"], type: null },
//             { key: "memory card type", value: ["SD", "SDHC", "SDXC", "CF", "CFast", "XQD"], type: null },
//         ]
//     },
//     {
//         name: "body",
//         fields: [
//             { key: "dimensions wxhxd", value: ["mm"], type: null },
//             { key: "weight", value: ["gm", "kg"], type: null },
//             { key: "rugged", value: ["Yes", "No"], type: null },
//             { key: "available color options", value: ["Black", "Silver", "White", "Gray", "Blue", "Red", "Green", "Yellow", "Orange", "Pink", "Purple"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "battery type", value: ["Lithium-Ion", "Lithium-Polymer", "Alkaline", "NiMH", "Lead Acid"], type: null },
//             { key: "battery", value: [1000 , 2000 , 3000 , 4000 , 5000 , 6000 , 7000 , 8000 , 10000, 20000], type: "mAh" },
//             { key: "no of shots", value: [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000], type: null },
//             { key: "battery mod", value: ["Yes", "No"], type: null }
//         ]
//     },
//     {
//         name: "connectivity",
//         fields: [
//             { key: "other connectivity features", value: ["GPS", "Wi-Fi", "Bluetooth", "NFC", "HDMI", "USB", "PictBridge"], type: null },
//             { key: "wifi", value: ["802.11 a/b/g/n/ac", "Wi-Fi 6E", "Wi-Fi 6", "Wi-Fi 5", "Wi-Fi 4"], type: null },
//             { key: "bluetooth", value: ["Bluetooth 5.2", "Bluetooth 5.1", "Bluetooth 5.0", "Bluetooth 4.2", "Bluetooth 4.0"], type: null },
//             { key: "usb", value: ["USB 2.0", "USB 3.0", "USB Type-C"], type: null },
//             { key: "hdmi", value: ["HDMI 1.4", "HDMI 2.0", "HDMI 2.1"], type: null },
//             { key: "nfc", value: ["Supported", "Not Supported"], type: null },
//             { key: "pictbridge", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "exposure",
//         fields: [
//             { key: "exposure lock", value: ["Yes", "No"], type: null },
//             { key: "modes", value: ["Auto", "Program", "Aperture Priority", "Shutter Priority", "Manual"], type: null },
//         ]
//     },
//     {
//         name: "files",
//         fields: [
//             { key: "video file format", value: ["MP4", "MOV", "AVCHD", "H.264", "H.265"], type: null },
//             { key: "image resolutions", value: [16 , 20 , 24 , 30 , 40 , 50 , 60 , 100], type: "MP" },
//             { key: "file format", value: ["JPEG", "RAW", "JPEG+RAW"], type: null },
//         ]
//     },
//     {
//         name: "sensor",
//         fields: [
//             { key: "processor model", value: ["DIGIC", "Expeed", "BIONZ", "X-Processor", "Venus Engine", "TruePic"], type: null },
//             { key: "processor type", value: ["Image Processor", "Image Sensor Processor"], type: null },
//             { key: "size wxh", value: ["mm"], type: null },
//             { key: "effective resolutions", value: ["20 MP", "24 MP", "30 MP", "40 MP", "50 MP", "60 MP", "100 MP"], type: "MP" },
//         ]
//     },
//     {
//         name: "previewing",
//         fields: [
//             { key: "display type", value: ["LCD", "OLED", "TFT", "EVF"], type: null },
//             { key: "display resolution noof dots", value: ["1 million dots", "2 million dots", "3 million dots", "4 million dots"], type: "dots" },
//             { key: "no of supported language", value: ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Arabic"], type: null },
//             { key: "display size", value: [2.7 , 3 , 3.2 , 3.5 , 3.7 , 4 , 4.3 , 4.5 , 5 , 5.5 , 6 ], type: "inches" },
//             { key: "moveable display", value: ["Yes", "No"], type: null },
//             { key: "view finder", value: ["Yes", "No"], type: null },
//             { key: "touch screen", value: ["Yes", "No"], type: null },
//             { key: "live view", value: ["Yes", "No"], type: null },
//             { key: "adjustment", value: ["Tilt", "Swivel", "Rotate", "Articulating"], type: null },
//         ]
//     },
// ]; // for cameras


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Sony", "Samsung", "LG", "TCL", "Hisense", "Panasonic", "Vizio", "Sharp", "Philips", "Toshiba", "Hitachi", "Sanyo", "Insignia", "Element", "RCA", "Haier", "Skyworth", "Xiaomi", "Realme", "OnePlus"], type: null },
//             { key: "model", value: ["Bravia", "QLED", "OLED", "NanoCell", "ULED", "QLED 8K", "Neo QLED", "Ambilight", "Fire TV Edition", "Android TV", "SmartCast", "Roku TV", "webOS", "Tizen", "VIDAA", "Google TV"], type: null },
//             { key: "warranty", value: [1, 2, 3, 4, 5], type: "year" },
//             { key: "box contents", value: ["TV Unit", "Remote Control", "User Manual", "Power Cable", "Wall Mount", "Tabletop Stand"], type: null },
//             { key: "price in india", value: [20000,25000,30000,35000,40000,45000,50000,55000,60000,65000,70000,75000,80000,90000,95000,105000,200000,150000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "display",
//         fields: [
//             { key: "type", value: ["LED", "QLED", "OLED", "NanoCell", "ULED"], type: null },
//             { key: "size diagonal", value: [32 , 40 , 43 , 50 , 55 , 65 , 75 , 85 ], type: "inches" },
//             { key: "resolution", value: ["HD", "Full HD", "4K", "8K"], type: null },
//             { key: "refresh rate", value: [60, 120 , 240 ], type: "Hz" },
//             { key: "aspect ratio", value: ["16:9", "21:9", "32:9"], type: null },
//             { key: "horizontal viewing angles", value: ["178°"], type: null },
//             { key: "vertical viewing angles", value: ["178°"], type: null },
//             { key: "curved tv", value: ["Yes", "No"], type: null },
//             { key: "ultra slim tv", value: ["Yes", "No"], type: null },
//             { key: "other display features", value: ["HDR", "Dolby Vision", "HDR10+", "HLG", "Dolby Atmos"], type: null },
//         ]
//     },
//     {
//         name: "physical design",
//         fields: [
//             { key: "colour", value: ["Black", "Silver", "White", "Gray", "Gold"], type: null },
//             { key: "weight with stand", value: ["kg"], type: null },
//             { key: "dimensions without stand wxhxd", value: ["mm"], type: null },
//             { key: "stand colour", value: ["Black", "Silver", "White", "Gray", "Gold"], type: null },
//         ]
//     },
//     {
//         name: "video",
//         fields: [
//             { key: "analog tv reception formats", value: ["NTSC", "PAL", "SECAM"], type: null },
//             { key: "video formats supported", value: ["AVI", "MP4", "MKV", "WMV"], type: null },
//             { key: "image formats supported", value: ["JPEG", "PNG", "BMP", "GIF"], type: null },
//         ]
//     },
//     {
//         name: "audio",
//         fields: [
//             { key: "sound type", value: ["Stereo", "Dolby Digital", "DTS", "THX"], type: null },
//             { key: "audio formats supported", value: ["MP3", "WAV", "AAC", "FLAC"], type: null },
//             { key: "no of speakers", value: [2, 4, 6, 8], type: null },
//             { key: "output per speaker", value: [10, 20, 30, 40, 50], type: "w" },
//             { key: "total speaker output", value: [20, 40, 60, 80, 100], type: "w" },
//             { key: "other smart audio features", value: ["Voice Recognition", "Audio Calibration", "Virtual Surround Sound"], type: null },
//         ]
//     },
//     {
//         name: "connectivity ports",
//         fields: [
//             { key: "usb ports", value: [1, 2, 3, 4], type: null },
//             { key: "usb supports", value: ["USB 2.0", "USB 3.0", "USB 3.1", "USB-C"], type: null },
//             { key: "hdmi ports", value: [1, 2, 3, 4], type: null },
//             { key: "ethernet sockets", value: [1, 2], type: null },
//         ]
//     },
//     {
//         name: "smart tv features",
//         fields: [
//             { key: "smart tv", value: ["Yes", "No"], type: null },
//             { key: "wifi present", value: ["Yes", "No"], type: null },
//             { key: "bluetooth", value: ["Yes", "No"], type: null },
//             { key: "inbuilt apps", value: ["Netflix", "Prime Video", "Disney+", "YouTube", "Hulu", "Apple TV", "Google Play Movies & TV"], type: null },
//             { key: "other smart features", value: ["Voice Control", "Screen Mirroring", "Gesture Control"], type: null },
//         ]
//     },
//     {
//         name: "remote",
//         fields: [
//             { key: "universal control present", value: ["Yes", "No"], type: null },
//             { key: "touch controls present", value: ["Yes", "No"], type: null },
//             { key: "internet access", value: ["Yes", "No"], type: null },
//             { key: "other remote features", value: ["Voice Recognition", "Backlit Buttons", "Motion Sensor"], type: null },
//         ]
//     },
//     {
//         name: "power supply",
//         fields: [
//             { key: "voltage requirement", value: [110, 220, 240], type: "v" },
//             { key: "frequency requirement", value: [50, 60], type: "Hz" },
//             { key: "power consumption running", value: [50, 100, 150, 200], type: "w" },
//             { key: "power consumption standby", value: ["<0.5W", "<1W"], type: null },
//             { key: "power saving mode", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Sony Corporation", "Samsung Electronics", "LG Electronics", "TCL Corporation", "Hisense Group", "Panasonic Corporation", "Vizio Inc.", "Sharp Corporation", "Philips Electronics", "Toshiba Corporation", "Hitachi Ltd.", "Sanyo Electric Co.", "Insignia Systems Inc.", "Element Electronics", "RCA Corporation", "Haier Group", "Skyworth Group", "Xiaomi Corporation", "Realme Mobiles", "OnePlus Corporation"], type: null },
//             { key: "manufacturer", value: ["Sony Corporation", "Samsung Electronics", "LG Electronics", "TCL Corporation", "Hisense Group", "Panasonic Corporation", "Vizio Inc.", "Sharp Corporation", "Philips Electronics", "Toshiba Corporation", "Hitachi Ltd.", "Sanyo Electric Co.", "Insignia Systems Inc.", "Element Electronics", "RCA Corporation", "Haier Group", "Skyworth Group", "Xiaomi Corporation", "Realme Mobiles", "OnePlus Corporation"], type: null },
//             { key: "country of origin", value: ["Japan", "South Korea", "China", "USA", "Germany", "Netherlands", "India"], type: null },
//             { key: "packer", value: ["Sony Corporation", "Samsung Electronics", "LG Electronics", "TCL Corporation", "Hisense Group", "Panasonic Corporation", "Vizio Inc.", "Sharp Corporation", "Philips Electronics", "Toshiba Corporation", "Hitachi Ltd.", "Sanyo Electric Co.", "Insignia Systems Inc.", "Element Electronics", "RCA Corporation", "Haier Group", "Skyworth Group", "Xiaomi Corporation", "Realme Mobiles", "OnePlus Corporation"], type: null },
//         ]
//     }
// ]; //for tvs


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Apple", "Samsung", "Fitbit", "Garmin", "Huawei", "Xiaomi", "Amazfit", "Fossil", "TicWatch", "Polar", "Suunto", "Withings", "Casio", "Sony", "LG", "Oppo", "Realme", "OnePlus"], type: null },
//             { key: "model", value: ["Apple Watch Series 7", "Galaxy Watch 4", "Fitbit Versa 3", "Garmin Forerunner 945", "Huawei Watch GT 3", "Mi Watch Revolve Active", "Amazfit GTR 3", "Fossil Gen 6", "TicWatch Pro 3", "Polar Vantage V2", "Suunto 9 Peak", "Withings ScanWatch", "Casio G-Shock GSW-H1000", "Sony SmartWatch 3", "LG Watch Urbane", "Oppo Watch 2", "Realme Watch 2 Pro", "OnePlus Watch"], type: null },
//             { key: "operating system", value: ["WatchOS", "WearOS", "Fitbit OS", "Garmin OS", "LiteOS", "Mi Watch UI", "Amazfit OS", "Wear OS", "Wear OS", "Polar OS", "Suunto OS", "Withings OS", "Proprietary OS", "Wear OS", "WebOS", "ColorOS", "RealmeOS", "Proprietary OS"], type: null },
//             { key: "box contents", value: ["Smartwatch", "Charging Cable", "User Manual", "Additional Straps", "Charging Dock"], type: null },
//             { key: "price in india", value: [2000,3000,3500,4000,5000,6000,7000,10000,12000,15000,16000,18000,20000,22000,22500,23000,30000,35000,32000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "features",
//         fields: [
//             { key: "water resistant", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "design",
//         fields: [
//             { key: "shape surface", value: ["Square", "Round", "Rectangular", "Curved"], type: null },
//             { key: "weight", value: ["Lightweight", "Moderate", "Heavy"], type: null },
//             { key: "strap material", value: ["Silicone", "Metal", "Leather", "Nylon", "Plastic", "Stainless Steel"], type: null },
//             { key: "colour", value: ["Black", "Silver", "Gold", "Rose Gold", "Blue", "Green", "Red", "White", "Pink", "Purple", "Brown"], type: null },
//             { key: "clock face", value: ["Digital", "Analog", "Hybrid"], type: null },
//         ]
//     },
//     {
//         name: "display",
//         fields: [
//             { key: "screen size", value: [1.2 , 1.4 , 1.5 , 1.7 , 2.0 ], type: "inches" },
//             { key: "screen resolution", value: ["320x320 pixels", "360x360 pixels", "400x400 pixels", "454x454 pixels", "480x480 pixels"], type: null },
//             { key: "touch screen", value: ["Yes", "No"], type: null },
//             { key: "display technology", value: ["AMOLED", "LCD", "TFT", "e-Ink"], type: null },
//         ]
//     },
//     {
//         name: "multimedia",
//         fields: [
//             { key: "music player", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "battery life", value: ["Up to 1 day", "Up to 2 days", "Up to 5 days", "Up to 7 days", "Up to 14 days", "Up to 30 days"], type: null },
//         ]
//     },
//     {
//         name: "connectivity",
//         fields: [
//             { key: "bluetooth", value: ["Bluetooth 4.0", "Bluetooth 4.1", "Bluetooth 4.2", "Bluetooth 5.0", "Bluetooth 5.1", "Bluetooth 5.2"], type: null },
//             { key: "usb connectivity", value: ["USB 2.0", "USB 3.0", "USB-C"], type: null },
//         ]
//     },
//     {
//         name: "sensors",
//         fields: [
//             { key: "accelerometer", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "compatibility",
//         fields: [
//             { key: "compatible os", value: ["iOS", "Android", "iOS & Android"], type: null },
//             { key: "incoming call", value: ["Yes", "No"], type: null },
//             { key: "alarm", value: ["Yes", "No"], type: null },
//             { key: "text message", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "smartphone remote features",
//         fields: [
//             { key: "receive call", value: ["Yes", "No"], type: null },
//             { key: "make call", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "activity tracker",
//         fields: [
//             { key: "calories intakeburned", value: ["Yes", "No"], type: null },
//             { key: "distance", value: ["Yes", "No"], type: null },
//             { key: "steps", value: ["Yes", "No"], type: null },
//             { key: "hours slept", value: ["Yes", "No"], type: null },
//             { key: "active minutes", value: ["Yes", "No"], type: null },
//             { key: "heart rate", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "additional features",
//         fields: [
//             { key: "alarm clock", value: ["Yes", "No"], type: null },
//             { key: "goal setting", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [0,1,2,3,4], type: "year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Apple Inc.", "Samsung Electronics", "Fitbit Inc.", "Garmin Ltd.", "Huawei Technologies Co. Ltd.", "Xiaomi Corporation", "Amazfit", "Fossil Group", "Mobvoi", "Polar Electro", "Amer Sports", "Withings", "Casio Computer Co. Ltd.", "Sony Corporation", "LG Electronics", "Oppo", "Realme", "OnePlus"], type: null },
//             { key: "manufacturer", value: ["Apple Inc.", "Samsung Electronics", "Fitbit Inc.", "Garmin Ltd.", "Huawei Technologies Co. Ltd.", "Xiaomi Corporation", "Amazfit", "Fossil Group", "Mobvoi", "Polar Electro", "Amer Sports", "Withings", "Casio Computer Co. Ltd.", "Sony Corporation", "LG Electronics", "Oppo", "Realme", "OnePlus"], type: null },
//             { key: "country of origin", value: ["USA", "South Korea", "Switzerland", "China", "Taiwan", "Japan"], type: null },
//             { key: "packer", value: ["Apple Inc.", "Samsung Electronics", "Fitbit Inc.", "Garmin Ltd.", "Huawei Technologies Co. Ltd.", "Xiaomi Corporation", "Amazfit", "Fossil Group", "Mobvoi", "Polar Electro", "Amer Sports", "Withings", "Casio Computer Co. Ltd.", "Sony Corporation", "LG Electronics", "Oppo", "Realme", "OnePlus"], type: null },
//         ]
//     }
// ]; // for smartwatch


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "box content", value: ["Fitness Band", "Charging Cable", "User Manual"], type: null },
//             { key: "model", value: ["Fitbit Charge 5", "Xiaomi Mi Band 6", "Samsung Galaxy Fit2", "Garmin Vivosmart 4", "Huawei Band 6", "Amazfit Band 5", "Apple Watch SE", "OnePlus Band", "Realme Band 2", "Honor Band 6"], type: null },
//             { key: "brand", value: ["Fitbit", "Xiaomi", "Samsung", "Garmin", "Huawei", "Amazfit", "Apple", "OnePlus", "Realme", "Honor"], type: null },
//             { key: "price in india", value: [10000,15000,20000,25000,30000,35000,40000,45000,50000,55000,60000,70000,80000], type: null },
//         ]
//     },
//     {
//         name: "activity tracker",
//         fields: [
//             { key: "calories intake burned", value: ["Yes", "No"], type: null },
//             { key: "activity inactivity", value: ["Yes", "No"], type: null },
//             { key: "distance", value: ["Yes", "No"], type: null },
//             { key: "active minutes", value: ["Yes", "No"], type: null },
//             { key: "heart rate", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "sensors",
//         fields: [
//             { key: "accelerometer", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "syncing",
//         fields: [
//             { key: "usb connectivity", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "design",
//         fields: [
//             { key: "weight", value: ["Lightweight", "Moderate", "Heavy"], type: null },
//             { key: "clock face", value: ["Analog", "Digital"], type: null },
//             { key: "shape surface", value: ["Rectangular", "Square", "Circular"], type: null },
//             { key: "dimensions", value: ["Small", "Medium", "Large"], type: null },
//             { key: "colours", value: ["Black", "White", "Blue", "Red", "Green", "Yellow", "Pink", "Purple"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "battery life", value: ["1-3 days", "3-5 days", "5-7 days", "7+ days"], type: null },
//         ]
//     },
//     {
//         name: "additional features",
//         fields: [
//             { key: "alarm clock", value: ["Yes", "No"], type: null },
//             { key: "goal setting", value: ["Yes", "No"], type: null },
//             { key: "reminders", value: ["Yes", "No"], type: null },
//             { key: "stopwatch", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "notification",
//         fields: [
//             { key: "timer", value: ["Yes", "No"], type: null },
//             { key: "alarm", value: ["Yes", "No"], type: null },
//         ]
//     }
// ]; // for fitnessbands


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "title", value: ["Window AC", "Split AC", "Portable AC", "Inverter AC"], type: null },
//             { key: "brand", value: ["LG", "Samsung", "Voltas", "Blue Star", "Daikin", "Carrier", "Hitachi", "Whirlpool", "Godrej", "Panasonic", "Haier", "Lloyd", "O General", "Toshiba", "Sharp", "IFB", "Onida", "Mitsubishi Electric", "Electrolux", "Kenstar"], type: null },
//             { key: "model no", value: ["ASGA", "JS-Q", "183 DZA", "HMC", "KS-Q", "LS-Q", "MSZ", "RP", "RY", "SAC", "UA", "WAC"], type: null },
//             { key: "ac type", value: ["Window AC", "Split AC", "Portable AC", "Inverter AC"], type: null },
//             { key: "capacity in tons", value: [0.75, 1, 1.5, 2, 2.5, 3, 4, 5], type: null },
//             { key: "star rating", value: [1, 2, 3, 4, 5], type: null },
//             { key: "price in india", value: [15000,20000,25000,30000,40000,45000,47000,50000,65000,75000,85000,90000], type: null },
//         ]
//     },
//     {
//         name: "noise",
//         fields: [
//             { key: "indoor noise level", value: ["Low", "Medium", "High"], type: null },
//         ]
//     },
//     {
//         name: "cooling performance",
//         fields: [
//             { key: "cooling capacity", value: ["BTU", "Watts"], type: null },
//             { key: "power input", value: ["Watts"], type: null },
//             { key: "eer", value: ["Energy Efficiency Ratio"], type: null },
//             { key: "power requirements", value: ["Voltage", "Frequency"], type: null },
//         ]
//     },
//     {
//         name: "modes",
//         fields: [
//             { key: "sleep mode", value: ["Enabled", "Disabled"], type: null },
//         ]
//     },
//     {
//         name: "remote control features",
//         fields: [
//             { key: "remote", value: ["Included", "Not Included"], type: null },
//         ]
//     },
//     {
//         name: "filters",
//         fields: [
//             { key: "antibacteria filter", value: ["Present", "Not Present"], type: null },
//         ]
//     },
//     {
//         name: "convenience features",
//         fields: [
//             { key: "auto restart", value: ["Enabled", "Disabled"], type: null },
//         ]
//     },
//     {
//         name: "body design feature",
//         fields: [
//             { key: "color", value: ["White", "Black", "Silver", "Gray", "Blue", "Red", "Gold", "Green"], type: null },
//             { key: "compressor", value: ["Rotary", "Reciprocating", "Scroll", "Inverter"], type: null },
//             { key: "main unit condenser coil", value: ["Copper", "Aluminum"], type: null },
//             { key: "refrigerant", value: ["R32", "R410A", "R22", "R134A"], type: null },
//         ]
//     },
//     {
//         name: "air flow features",
//         fields: [
//             { key: "speed setting", value: ["Low", "Medium", "High", "Auto"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["LG Corporation", "Samsung Electronics", "Voltas Ltd.", "Blue Star Ltd.", "Daikin Industries", "Carrier Global Corporation", "Hitachi Ltd.", "Whirlpool Corporation", "Godrej Group", "Panasonic Corporation", "Haier Group", "Lloyd Electric & Engineering", "O General", "Toshiba Corporation", "Sharp Corporation", "IFB Industries", "MIRC Electronics", "Mitsubishi Electric Corporation", "Electrolux AB", "Kenstar", "Others"], type: null },
//             { key: "manufacturer", value: ["LG Corporation", "Samsung Electronics", "Voltas Ltd.", "Blue Star Ltd.", "Daikin Industries", "Carrier Global Corporation", "Hitachi Ltd.", "Whirlpool Corporation", "Godrej Group", "Panasonic Corporation", "Haier Group", "Lloyd Electric & Engineering", "O General", "Toshiba Corporation", "Sharp Corporation", "IFB Industries", "MIRC Electronics", "Mitsubishi Electric Corporation", "Electrolux AB", "Kenstar", "Others"], type: null },
//             { key: "country of origin", value: ["South Korea", "India", "Japan", "China", "USA", "Germany", "Sweden"], type: null },
//             { key: "packer", value: ["LG Corporation", "Samsung Electronics", "Voltas Ltd.", "Blue Star Ltd.", "Daikin Industries", "Carrier Global Corporation", "Hitachi Ltd.", "Whirlpool Corporation", "Godrej Group", "Panasonic Corporation", "Haier Group", "Lloyd Electric & Engineering", "O General", "Toshiba Corporation", "Sharp Corporation", "IFB Industries", "MIRC Electronics", "Mitsubishi Electric Corporation", "Electrolux AB", "Kenstar", "Others"], type: null },
//         ]
//     }
// ]; // for Acs


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "title", value: ["Front Load Washing Machine", "Top Load Washing Machine", "Semi-Automatic Washing Machine"], type: null },
//             { key: "brand", value: ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Haier", "Godrej", "Panasonic", "Voltas", "Onida", "Lloyd", "Siemens", "MarQ by Flipkart", "Amazon Basics"], type: null },
//             { key: "model no", value: ["WM1234", "WM5678", "WM91011", "WM1213", "WM1415", "WM1617", "WM1819", "WM2021"], type: null },
//             { key: "capacity", value: [6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 ], type: "kg" },
//             { key: "color", value: ["White", "Black", "Silver", "Gray", "Blue", "Red"], type: null },
//             { key: "type", value: ["Fully Automatic", "Semi-Automatic"], type: null },
//             { key: "control", value: ["Digital", "Knob"], type: null },
//             { key: "price in india", value: [10000,15000,20000,25000,30000,35000,40000,45000,50000,60000,65000,70000,80000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "modesprograms",
//         fields: [
//             { key: "cotton", value: ["Cotton", "Synthetic", "Wool", "Silk", "Delicate"], type: null },
//             { key: "delicate", value: ["Delicate", "Quick Wash", "Bedding", "Towels"], type: null },
//             { key: "quick", value: ["Quick", "Rinse + Spin", "Soak"], type: null },
//         ]
//     },
//     {
//         name: "washing features",
//         fields: [
//             { key: "rinse", value: ["Yes", "No"], type: null },
//             { key: "wash", value: ["Agitator", "Pulsator", "Tumble"], type: null },
//         ]
//     },
//     {
//         name: "additional features",
//         fields: [
//             { key: "child lock", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "body features",
//         fields: [
//             { key: "knob", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "height", value: [400,450,500,550,600,650,700], type: "mm" },
//             { key: "width", value: [400,450,500,550,600,650,700], type: "mm" },
//             { key: "depth", value: [400,450,500,550,600,650,700], type: "mm" },
//         ]
//     },
//     {
//         name: "performance",
//         fields: [
//             { key: "frequency", value: [50 , 60 ], type: "Hz" },
//             { key: "voltage", value: [220, 230, 240], type: "V" },
//         ]
//     },
//     {
//         name: "spin",
//         fields: [
//             { key: "spin", value: ["Yes", "No"], type: null },
//             { key: "max spin speed", value: [600 , 800 , 1000 , 1200 , 1400 , 1600 ], type: "RPM" },
//         ]
//     },
//     {
//         name: "in box warranty services",
//         fields: [
//             { key: "package contents", value: ["Washing Machine", "User Manual", "Warranty Card", "Inlet Pipe", "Outlet Pipe", "Rat Mesh"], type: null },
//             { key: "not covered in warranty", value: ["Physical Damages", "Unauthorized Repairs", "Normal Wear and Tear"], type: null },
//             { key: "warranty", value: ["1 Year Comprehensive Warranty", "2 Years Comprehensive Warranty", "3 Years Comprehensive Warranty"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["LG Electronics", "Samsung Electronics", "Whirlpool Corporation", "IFB Appliances", "Bosch Home Appliances", "Haier Appliances", "Godrej Appliances", "Panasonic Corporation", "Voltas Limited", "Mirc Electronics (Onida)", "Lloyd Electric & Engineering", "Siemens Home Appliances", "MarQ by Flipkart", "Amazon Basics"], type: null },
//             { key: "manufacturer", value: ["LG Electronics", "Samsung Electronics", "Whirlpool Corporation", "IFB Appliances", "Bosch Home Appliances", "Haier Appliances", "Godrej Appliances", "Panasonic Corporation", "Voltas Limited", "Mirc Electronics (Onida)", "Lloyd Electric & Engineering", "Siemens Home Appliances", "MarQ by Flipkart", "Amazon Basics"], type: null },
//             { key: "country of origin", value: ["South Korea", "India", "China", "Germany", "USA", "Japan"], type: null },
//             { key: "packer", value: ["LG Electronics", "Samsung Electronics", "Whirlpool Corporation", "IFB Appliances", "Bosch Home Appliances", "Haier Appliances", "Godrej Appliances", "Panasonic Corporation", "Voltas Limited", "Mirc Electronics (Onida)", "Lloyd Electric & Engineering", "Siemens Home Appliances", "MarQ by Flipkart", "Amazon Basics"], type: null },
//         ]
//     }
// ]; // for washing machine



// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Anker", "RAVPower", "Xiaomi", "AUKEY", "ROMOSS", "Yoobao", "Zendure", "Samsung", "iMuto", "MiPow", "Belkin", "Energizer", "Poweradd", "Tronsmart", "Ugreen", "MAXOAK", "Anker", "RAVPower", "Xiaomi", "AUKEY", "ROMOSS", "Yoobao", "Zendure", "Samsung", "iMuto", "MiPow", "Belkin", "Energizer", "Poweradd", "Tronsmart", "Ugreen", "MAXOAK"], type: null },
//             { key: "model", value: ["PowerCore", "Power Bank", "Mi Power Bank", "Quick Charge", "Slim Power Bank", "Ultra-Compact Portable Charger", "USB-C Power Bank", "High-Speed Power Bank", "Fast Charging Power Bank", "Portable Charger", "Power Boost", "Turbo Portable Charger", "Smart Power Bank"], type: null },
//             { key: "box contents", value: ["Power Bank", "USB Cable", "User Manual", "Carry Pouch", "Charging Adapter", "USB-C Adapter", "Micro USB Cable", "Lightning Cable", "Type-C Cable"], type: null },
//             { key: "warranty", value: [1, 2 , 3 ], type: "Year" },
//             { key: "price in india", value: [1000,2000,3000,5000,7000,8000,10000,15000,20000,25000,27000,35000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "battery charging",
//         fields: [
//             { key: "capacity", value: [5000,10000,15000,20000,25000,30000], type: "mAh" },
//             { key: "battery type", value: ["Li-Polymer", "Li-Ion"], type: null },
//         ]
//     },
//     {
//         name: "connectivity",
//         fields: [
//             { key: "connector type", value: ["USB-A", "USB-C", "Micro USB", "Lightning"], type: null },
//             { key: "no of output ports", value: [1, 2, 3, 4], type: null },
//         ]
//     },
//     {
//         name: "power requirement",
//         fields: [
//             { key: "power output", value: [5, 10, 15, 18, 20, 30, 45, 60, 65, 100], type: "W" },
//         ]
//     },
//     {
//         name: "compatibility",
//         fields: [
//             { key: "compatible device", value: ["Smartphones", "Tablets", "Laptops", "Smartwatches", "Bluetooth Earbuds", "Gaming Consoles", "Action Cameras", "Drones"], type: null },
//         ]
//     },
//     {
//         name: "design",
//         fields: [
//             { key: "weight", value: [100, 200, 300, 400, 500, 600], type: "g" },
//             { key: "color", value: ["Black", "White", "Silver", "Blue", "Red", "Gold", "Rose Gold", "Green", "Orange", "Yellow", "Purple"], type: null },
//             { key: "dimensions lxbxh", value: ["27.5 x 18.2 x 3.2 cm","25.5 x 15.2 x 2.2 cm","37.5 x 28.2 x 5.2 cm"], type: null },
//         ]
//     },
//     {
//         name: "features",
//         fields: [
//             { key: "short circuit protection", value: ["Yes", "No"], type: null },
//             { key: "LED indicators", value: ["Yes", "No"], type: null },
//             { key: "over current protection", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Anker Innovations", "RAVPower", "Xiaomi Corporation", "AUKEY", "ROMOSS", "Yoobao", "Zendure", "Samsung Electronics", "iMuto", "MiPow", "Belkin International", "Energizer Holdings", "Poweradd", "Tronsmart", "Ugreen", "MAXOAK"], type: null },
//             { key: "manufacturer", value: ["Anker Innovations", "RAVPower", "Xiaomi Corporation", "AUKEY", "ROMOSS", "Yoobao", "Zendure", "Samsung Electronics", "iMuto", "MiPow", "Belkin International", "Energizer Holdings", "Poweradd", "Tronsmart", "Ugreen", "MAXOAK"], type: null },
//             { key: "country of origin", value: ["China", "USA", "Japan", "South Korea"], type: null },
//             { key: "packer", value: ["Anker Innovations", "RAVPower", "Xiaomi Corporation", "AUKEY", "ROMOSS", "Yoobao", "Zendure", "Samsung Electronics", "iMuto", "MiPow", "Belkin International", "Energizer Holdings", "Poweradd", "Tronsmart", "Ugreen", "MAXOAK"], type: null },
//         ]
//     }
// ]; // for power banks


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "sales package", value: ["Epilator", "Charging Cable", "Cleaning Brush", "User Manual", "Travel Pouch"], type: null },
//             { key: "brand", value: ["Philips", "Braun", "Panasonic", "Remington", "Emjoi", "Conair", "EpiLady", "Veet", "Panasonic", "Silk'n"], type: null },
//             { key: "model", value: ["Satinelle", "Silk-épil", "Smooth & Silky", "Smooth & Soft", "Smooth & Gentle", "Smooth & Effective", "Epi Slim", "Smooth & Perfect", "Lumea", "Flash&Go"], type: null },
//             { key: "ideal for", value: ["Women", "Men", "Unisex"], type: null },
//             { key: "suitable for", value: ["Face", "Body", "Legs", "Arms", "Underarms", "Bikini Area"], type: null },
//             { key: "colour", value: ["White", "Pink", "Blue", "Black", "Silver", "Purple", "Green", "Gold", "Rose Gold"], type: null },
//             { key: "type", value: ["Cordless", "Corded", "Wet & Dry"], type: null },
//             { key: "features", value: ["Washable Head", "SmartLight", "Speed Settings", "Massage Rollers", "Precision Cap", "Pivoting Head", "Built-in Trimmer", "Sensitive Area Cap"], type: null },
//             { key: "price in india", value: [100,150,200,250,300,350,400,450,500,600,700,800,900,1000,1500,2000,2500,3000,4000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "body and design features",
//         fields: [
//             { key: "cordless", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "power",
//         fields: [
//             { key: "power source", value: ["Rechargeable Battery", "AC Power"], type: null },
//             { key: "battery type", value: ["NiMH", "Li-Ion"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "dimensions lxbxh", value: ["18.8 x 5.2 x 1.7 cm","28.8 x 16.2 x 8.7 cm","38.8 x 29.2 x 14.7 cm"], type: null },
//             { key: "weight", value: [50, 60, 80, 70, 90, 110, 150, 170], type: "gm" },
//         ]
//     },
//     {
//         name: "other features",
//         fields: [
//             { key: "other features", value: ["Exfoliation Brush", "Facial Cleansing Brush", "Massage Attachment", "Cooling Gloves", "Skin Contact Cap"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: ["1 Year", "2 Years", "3 Years"], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips", "Braun", "Panasonic", "Remington", "Emjoi", "Conair", "EpiLady", "Veet", "Panasonic", "Silk'n"], type: null },
//             { key: "manufacturer", value: ["Philips", "Braun", "Panasonic", "Remington", "Emjoi", "Conair", "EpiLady", "Veet", "Panasonic", "Silk'n"], type: null },
//             { key: "country of origin", value: ["Netherlands", "Germany", "Japan", "USA", "Israel", "China"], type: null },
//             { key: "packer", value: ["Philips", "Braun", "Panasonic", "Remington", "Emjoi", "Conair", "EpiLady", "Veet", "Panasonic", "Silk'n"], type: null },
//         ]
//     }
// ]; // for eplilators

// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Remington", "BaByliss", "Conair", "T3", "Dyson", "Hot Tools", "CHI", "Revlon", "Bed Head", "Panasonic", "ConairPRO", "Kipozi", "Paul Mitchell", "NuMe", "GHD", "Sultra", "Kristin Ess", "Kiss Products", "Instyler"], type: null },
//             { key: "model", value: ["Curling Wand", "Curling Iron", "Automatic Curler", "Curling Brush", "Curling Machine", "Steam Curler", "Cordless Curler", "Travel Curler"], type: null },
//             { key: "type", value: ["Clipless", "Clip", "Automatic", "Rotating", "Steam", "Cordless"], type: null },
//             { key: "ideal for", value: ["All Hair Types", "Fine Hair", "Thick Hair", "Short Hair", "Long Hair", "Curly Hair", "Straight Hair"], type: null },
//             { key: "color", value: ["Black", "White", "Pink", "Rose Gold", "Blue", "Purple", "Red", "Silver", "Gold"], type: null },
//             { key: "price in india", value: [500,700,1000,1200,1500,1700,1800,2000,2200,2300,2500,2700,3000,3500,3700,4000,4500,5000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "body and design features",
//         fields: [
//             { key: "coating", value: ["Ceramic", "Tourmaline", "Titanium", "Gold", "Silver", "Teflon", "Chrome", "Platinum", "Ionic", "Nano", "Pearl", "Silicone", "Aluminum"], type: null },
//         ]
//     },
//     {
//         name: "other features",
//         fields: [
//             { key: "other features", value: ["Adjustable Temperature", "Digital Display", "Dual Voltage", "Auto Shut-Off", "Swivel Cord", "Quick Heat-Up", "Heat Protection Glove", "Travel-Friendly", "Interchangeable Barrels", "Multiple Heat Settings"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips Electronics", "Remington Products", "BaByliss", "Conair Corporation", "T3 Micro", "Dyson Ltd.", "Helen of Troy Limited", "Farouk Systems", "Revlon Inc.", "Bed Head Styling", "Panasonic Corporation", "ConairPRO", "Kipozi", "John Paul Mitchell Systems", "NuMe", "GHD", "Sultra", "Kristin Ess", "Kiss Products Inc.", "Instyler"], type: null },
//             { key: "manufacturer", value: ["Philips Electronics", "Remington Products", "BaByliss", "Conair Corporation", "T3 Micro", "Dyson Ltd.", "Helen of Troy Limited", "Farouk Systems", "Revlon Inc.", "Bed Head Styling", "Panasonic Corporation", "ConairPRO", "Kipozi", "John Paul Mitchell Systems", "NuMe", "GHD", "Sultra", "Kristin Ess", "Kiss Products Inc.", "Instyler"], type: null },
//             { key: "country of origin", value: ["Netherlands", "USA", "UK", "China", "Italy", "Germany"], type: null },
//             { key: "packer", value: ["Philips Electronics", "Remington Products", "BaByliss", "Conair Corporation", "T3 Micro", "Dyson Ltd.", "Helen of Troy Limited", "Farouk Systems", "Revlon Inc.", "Bed Head Styling", "Panasonic Corporation", "ConairPRO", "Kipozi", "John Paul Mitchell Systems", "NuMe", "GHD", "Sultra", "Kristin Ess", "Kiss Products Inc.", "Instyler"], type: null },
//         ]
//     }
// ]; // for hair curlers

// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Panasonic", "Braun", "Wahl", "Remington", "Andis", "Gillette", "Syska", "Nova", "Havells", "Mi", "SYSKA", "Veet", "Agaro", "Kemei", "Surker", "Braun", "Babyliss", "Surker", "Ustraa"], type: null },
//             { key: "model number", value: ["Series 3000", "Series 5000", "Series 7000", "Series 9000", "PrecisionCut", "Lithium Ion+", "Beardtrimmer", "Turbo Trimmer", "Super Groom", "Quick Style", "Multi Groom", "Pro Skin", "Bodygroom", "All-in-One", "Vacuum Beard Trimmer", "Professional Hair Clipper"], type: null },
//             { key: "type", value: ["Corded", "Cordless", "Corded & Cordless"], type: null },
//             { key: "charging time", value: [1,2,3,4,5], type: "Year" },
//             { key: "price in india", value: [500,1000,1500,2000,2500,3000,3500], type: "ruppes" },
//         ]
//     },
//     {
//         name: "power features",
//         fields: [
//             { key: "battery type", value: ["Lithium-ion", "NiMH", "AA Battery"], type: null },
//             { key: "battery run time", value: ["30 minutes", "45 minutes", "60 minutes", "90 minutes", "120 minutes"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "width", value: [50,100,150,200,250,300,350], type: "mm" },
//             { key: "height", value: [50,100,150,200,250,300,350], type: "mm" },
//             { key: "weight", value: [100,150,200,250,300,350,400,450,500], type: "gm" },
//         ]
//     },    
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips India Limited", "Panasonic India Pvt Ltd", "Procter & Gamble Hygiene and Health Care Limited", "Gillette India Limited", "Syska Personal Care", "Nova (HSN) Appliances", "Havells India Limited", "Xiaomi India Pvt Ltd", "Veet India", "Maverick Labs Pvt Ltd"], type: null },
//             { key: "manufacturer", value: ["Philips", "Panasonic", "Procter & Gamble", "Syska", "Nova", "Havells", "Xiaomi", "Veet", "Maverick Labs"], type: null },
//             { key: "country of origin", value: ["China", "India", "Germany", "USA"], type: null },
//             { key: "packer", value: ["Philips India Limited", "Panasonic India Pvt Ltd", "Procter & Gamble Hygiene and Health Care Limited", "Gillette India Limited", "Syska Personal Care", "Nova (HSN) Appliances", "Havells India Limited", "Xiaomi India Pvt Ltd", "Veet India", "Maverick Labs Pvt Ltd"], type: null },
//         ]
//     }
// ]; //for trimmer

// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Remington", "Babyliss", "Panasonic", "GHD", "Conair", "Revlon", "Dyson", "T3", "CHI", "HSI Professional", "BaBylissPRO", "Paul Mitchell", "Bed Head", "Kristin Ess", "Hot Tools", "FHI Heat", "Amika", "Kristin Ess", "Sutra Beauty"], type: null },
//             { key: "model", value: ["Pro", "Advanced", "Elite", "Express", "Ultra", "Professional", "Classic", "Platinum", "Titanium", "Tourmaline", "Ceramic", "Ionic", "Steam", "Infrared"], type: null },
//             { key: "ideal for", value: ["Women", "Men", "Unisex", "All Hair Types", "Thick Hair", "Curly Hair", "Fine Hair", "Short Hair", "Long Hair"], type: null },
//             { key: "colours", value: ["Black", "White", "Pink", "Purple", "Blue", "Rose Gold", "Silver", "Red", "Green", "Gold"], type: null },
//             { key: "sales package", value: ["Hair Straightener", "User Manual", "Heat Resistant Mat", "Travel Pouch", "Styling Comb", "Hair Clips", "Heat Protection Spray"], type: null },
//             { key: "price in india", value: [500,1000,1200,1300,1500,1700,2000,2200,2300,3400,2500,2700,2900,3000,3500,3700,4000,4500,5000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "body and design features",
//         fields: [
//             { key: "swivel cord", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "power features",
//         fields: [
//             { key: "number of temperature", value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], type: null },
//             { key: "power requirement", value: ["110V", "220V", "Dual Voltage"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "dimensions Lxbxh", value: ["18.8 x 9.2 x 4.7 cm","28.8 x 13.2 x 9.7 cm","38.8 x 19.2 x 14.7 cm"], type: null },
//             { key: "weight", value: [100,150,200,250,300,350], type: "gm" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips Electronics", "Remington Products", "Conair Corporation", "GHD Limited", "Revlon Inc.", "Dyson Ltd.", "T3 Micro Inc.", "Farouk Systems Inc.", "HSI Professional", "Sutra Beauty"], type: null },
//             { key: "manufacturer", value: ["Philips Electronics", "Remington Products", "Conair Corporation", "GHD Limited", "Revlon Inc.", "Dyson Ltd.", "T3 Micro Inc.", "Farouk Systems Inc.", "HSI Professional", "Sutra Beauty"], type: null },
//             { key: "country of origin", value: ["Netherlands", "USA", "UK", "China", "Germany", "Italy"], type: null },
//             { key: "packer", value: ["Philips Electronics", "Remington Products", "Conair Corporation", "GHD Limited", "Revlon Inc.", "Dyson Ltd.", "T3 Micro Inc.", "Farouk Systems Inc.", "HSI Professional", "Sutra Beauty"], type: null },
//         ]
//     }
// ]; // for hair straightners


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Panasonic", "Dyson", "Remington", "Conair", "Braun", "T3", "Revlon", "CHI", "BaByliss", "GHD", "Hot Tools", "Bed Head", "VAV", "Rusk", "Drybar", "T3 Micro", "ConairPRO", "Kipozi", "Jinri", "One-Step", "Conair Infinity Pro"], type: null },
//             { key: "model id", value: ["HP8230", "EH-ND21", "Supersonic", "D3190", "1875W", "HD785", "Featherweight Compact", "RVDR5005", "GF8230", "Nano Titanium", "Platinum+", "1875W Tourmaline", "BH407", "VAV-NF-001", "W8less", "JINRI-031", "Hot Air Brush"], type: null },
//             { key: "ideal for", value: ["Men", "Women", "Unisex", "Professional Use"], type: null },
//             { key: "colours", value: ["Black", "White", "Gray", "Silver", "Pink", "Blue", "Red", "Gold", "Purple"], type: null },
//             { key: "sales package", value: ["Hair Dryer", "Attachments", "User Manual", "Warranty Card", "Storage Bag"], type: null },
//             { key: "price in india", value: [500,800,1000,1200,1500,1700,2000,2200,2300,2500,2700,2900,3000,3500,4000,4500,5000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "body and design features",
//         fields: [
//             { key: "hanging loop", value: ["Yes", "No"], type: null },
//             { key: "number of attachments", value: [1, 2, 3, 4, 5], type: null },
//             { key: "number of heat settings", value: [1, 2, 3, 4, 5], type: null },
//             { key: "cord length", value: ["1 meter", "1.5 meters", "2 meters", "2.5 meters", "3 meters"], type: null },
//         ]
//     },
//     {
//         name: "power supply",
//         fields: [
//             { key: "power consumption", value: [1200, 1500, 1800, 2000, 2200, 2400, 2500, 3000], type: "W" },
//             { key: "universal voltage", value: ["110V-120V", "220V-240V"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "dimensions Lxbxh", value: ["200mm x 150mm x 80mm", "220mm x 180mm x 100mm", "250mm x 200mm x 120mm", "280mm x 220mm x 140mm"], type: null },
//             { key: "weight", value: ["500g", "600g", "700g", "800g", "900g", "1kg", "1.5kg"], type: null },
//         ]
//     },
//     {
//         name: "other features",
//         fields: [
//             { key: "other features", value: ["Ionic Technology", "Tourmaline Ceramic", "Cool Shot Button", "Removable Filter", "Overheat Protection", "Quiet Operation"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: null },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips India Ltd.", "Panasonic Corporation", "Dyson Ltd.", "Remington Products Company", "Conair Corporation", "Procter & Gamble", "T3 Micro Inc.", "Revlon Inc.", "Farouk Systems Inc.", "BaByliss UK Ltd.", "GHD Pty Ltd.", "Helen of Troy Limited", "Sultra Corporation", "Rusk Professional", "Drybar Holdings LLC", "Conair Corporation", "Hengbo Electronic", "Jinri Electrical Appliances", "Conair Corporation", "Hengbo Electronic", "Conair Corporation"], type: null },
//             { key: "manufacturer", value: ["Philips India Ltd.", "Panasonic Corporation", "Dyson Ltd.", "Remington Products Company", "Conair Corporation", "Procter & Gamble", "T3 Micro Inc.", "Revlon Inc.", "Farouk Systems Inc.", "BaByliss UK Ltd.", "GHD Pty Ltd.", "Helen of Troy Limited", "Sultra Corporation", "Rusk Professional", "Drybar Holdings LLC", "Conair Corporation", "Hengbo Electronic", "Jinri Electrical Appliances", "Conair Corporation", "Hengbo Electronic", "Conair Corporation"], type: null },
//             { key: "country of origin", value: ["India", "Japan", "USA", "China", "UK", "Australia", "Germany", "France"], type: null },
//             { key: "packer", value: ["Philips India Ltd.", "Panasonic Corporation", "Dyson Ltd.", "Remington Products Company", "Conair Corporation", "Procter & Gamble", "T3 Micro Inc.", "Revlon Inc.", "Farouk Systems Inc.", "BaByliss UK Ltd.", "GHD Pty Ltd.", "Helen of Troy Limited", "Sultra Corporation", "Rusk Professional", "Drybar Holdings LLC", "Conair Corporation", "Hengbo Electronic", "Jinri Electrical Appliances", "Conair Corporation", "Hengbo Electronic", "Conair Corporation"], type: null },
//         ]
//     }
// ]; // hair dryers




// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["JBL", "Sony", "Bose", "UE", "Anker", "Harman Kardon", "Beats", "Marshall", "Sennheiser", "B&O", "Jabra", "Creative", "Logitech", "Philips", "Xiaomi", "Realme", "OnePlus", "Mi", "Boat", "Zebronics"], type: null },
//             { key: "type", value: ["Portable", "Home", "Outdoor", "Waterproof", "Mini", "Compact", "Party", "Gaming"], type: null },
//             { key: "colours", value: ["Black", "White", "Blue", "Red", "Green", "Gray", "Silver", "Gold"], type: null },
//             { key: "sound channel", value: ["Mono", "Stereo", "2.1", "5.1"], type: null },
//             { key: "bluetooth", value: ["Yes", "No"], type: null },
//             { key: "wired", value: ["3.5mm Aux Input", "USB Input", "SD Card Slot"], type: null },
//             { key: "wireless", value: ["Wi-Fi", "NFC"], type: null },
//             { key: "price in india", value: [1000,1200,1400,1500,1700,1800,2000,2200,2300,3400,2500,2800,3000,5000,4500,5500,5600], type: "ruppes" },
//         ]
//     },
//     {
//         name: "sales package",
//         fields: [
//             { key: "sales package", value: ["Bluetooth Speaker", "USB Cable", "User Manual", "Warranty Card"], type: null },
//         ]
//     },
//     {
//         name: "power",
//         fields: [
//             { key: "power source", value: ["Battery", "AC Adapter"], type: null },
//             { key: "output power", value: [5,10,20,30,40,50,100], type: "W" },
//             { key: "frequency response", value: ["20Hz - 20kHz", "30Hz - 20kHz", "40Hz - 20kHz", "50Hz - 20kHz"], type: "Hz" },
//             { key: "impedance", value: [4,6,8,16], type: "Ohms" },
//         ]
//     },
//     {
//         name: "connectivity",
//         fields: [
//             { key: "connectivity", value: ["Bluetooth", "Wi-Fi", "NFC", "3.5mm Aux Input", "USB Input", "SD Card Slot"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "type", value: ["Lithium-ion", "Lithium-polymer"], type: null },
//             { key: "charging time", value: [1,2,3,4,5,6,7,8,9,10], type: "Hours" },
//         ]
//     },
//     {
//         name: "size",
//         fields: [
//             { key: "dimensions Lxbxh", value: ["200mm x 150mm x 80mm", "220mm x 180mm x 100mm", "250mm x 200mm x 120mm", "280mm x 220mm x 140mm"], type: null },
//             { key: "weight", value: [400,500,600,700,800,900,1000], type: "gm" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Years" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["JBL Inc.", "Sony Corporation", "Bose Corporation", "Ultimate Ears", "Anker Innovations", "Harman International", "Apple Inc.", "Zound Industries", "Sennheiser Electronic GmbH & Co. KG", "Bang & Olufsen", "GN Group", "Creative Technology Ltd.", "Logitech International S.A.", "Koninklijke Philips N.V.", "Xiaomi Corporation", "Realme Mobiles", "OnePlus Corporation", "Xiaomi Corporation", "Boat Lifestyle", "Top Notch Infotronix"], type: null },
//             { key: "manufacturer", value: ["JBL Inc.", "Sony Corporation", "Bose Corporation", "Ultimate Ears", "Anker Innovations", "Harman International", "Apple Inc.", "Zound Industries", "Sennheiser Electronic GmbH & Co. KG", "Bang & Olufsen", "GN Group", "Creative Technology Ltd.", "Logitech International S.A.", "Koninklijke Philips N.V.", "Xiaomi Corporation", "Realme Mobiles", "OnePlus Corporation", "Xiaomi Corporation", "Boat Lifestyle", "Top Notch Infotronix"], type: null },
//             { key: "country of origin", value: ["USA", "Japan", "Germany", "China", "Sweden", "Denmark", "Singapore", "India"], type: null },
//             { key: "packer", value: ["JBL Inc.", "Sony Corporation", "Bose Corporation", "Ultimate Ears", "Anker Innovations", "Harman International", "Apple Inc.", "Zound Industries", "Sennheiser Electronic GmbH & Co. KG", "Bang & Olufsen", "GN Group", "Creative Technology Ltd.", "Logitech International S.A.", "Koninklijke Philips N.V.", "Xiaomi Corporation", "Realme Mobiles", "OnePlus Corporation", "Xiaomi Corporation", "Boat Lifestyle", "Top Notch Infotronix"], type: null },
//         ]
//     }
// ]; //for bluetooth speackers


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Sony", "Sennheiser", "Bose", "JBL", "Beats", "Apple", "Samsung", "Skullcandy", "Audio-Technica", "Jabra", "Beyerdynamic", "AKG", "Plantronics", "Razer", "Shure", "Marshall", "Pioneer", "HyperX", "Philips", "Panasonic"], type: null },
//             { key: "model", value: ["WH-1000XM4", "HD 650", "QuietComfort 35 II", "Tune 700BT", "Studio3 Wireless", "AirPods Pro", "Galaxy Buds Pro", "Crusher Wireless", "ATH-M50x", "Elite 85h", "DT 990 Pro", "K371", "BackBeat Pro 2", "Kraken", "Aonic 50", "Major III", "HDJ-X10", "Cloud II", "SHP9500", "RP-HD605N"], type: null },
//             { key: "colours", value: ["Black", "White", "Silver", "Gold", "Blue", "Red", "Green", "Yellow", "Pink", "Purple", "Orange"], type: null },
//             { key: "price in india", value: [1000,2000,3000,4000,5000,7000,9000,10000,12000,14000,16000,18000,20000,21000,22000,25000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "sales package",
//         fields: [
//             { key: "sales package", value: ["Headphones", "Charging Cable", "User Manual", "Carrying Case", "Audio Cable", "USB Adapter"], type: null },
//         ]
//     },
//     {
//         name: "type",
//         fields: [
//             { key: "type", value: ["Over-Ear", "On-Ear", "In-Ear", "Neckband"], type: null },
//         ]
//     },
//     {
//         name: "headphone type",
//         fields: [
//             { key: "headphone type", value: ["Closed-Back", "Open-Back"], type: null },
//         ]
//     },
//     {
//         name: "headphone design",
//         fields: [
//             { key: "headphone design", value: ["Foldable", "Swivel Earcups", "Adjustable Headband", "Noise-Canceling"], type: null },
//         ]
//     },
//     {
//         name: "wired",
//         fields: [
//             { key: "wired", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "wireless",
//         fields: [
//             { key: "wireless", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "microphone",
//         fields: [
//             { key: "microphone", value: ["Built-In Microphone", "Detachable Microphone"], type: null },
//         ]
//     },
//     {
//         name: "connectivity",
//         fields: [
//             { key: "bluetooth", value: ["Bluetooth 5.0", "Bluetooth 5.1", "Bluetooth 5.2"], type: null },
//             { key: "bluetooth range", value: [10,20,30], type: "meters" },
//             { key: "wireless range", value: [10,20,30], type: "meters" },
//         ]
//     },
//     {
//         name: "sweat proof",
//         fields: [
//             { key: "sweat proof", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "water resistant",
//         fields: [
//             { key: "water resistant", value: ["IPX4", "IPX5", "IPX6", "IPX7", "IPX8"], type: null },
//         ]
//     },
//     {
//         name: "sound features",
//         fields: [
//             { key: "headphone driver units", value: ["40mm", "50mm", "Dynamic Drivers", "Planar Magnetic Drivers"], type: null },
//             { key: "voice assistant compatibility", value: ["Google Assistant", "Amazon Alexa", "Siri"], type: null },
//         ]
//     },
//     {
//         name: "battery",
//         fields: [
//             { key: "playback time", value: [20,30,40,50,60], type: "Hour" },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "size", value: ["Small", "Medium", "Large"], type: null },
//             { key: "weight", value: ["Lightweight", "Standard", "Heavy"], type: null },
//         ]
//     },
//     {
//         name: "compatibility",
//         fields: [
//             { key: "compatibility", value: ["Android", "iOS", "Windows", "MacOS"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Sony Corporation", "Sennheiser Electronic GmbH & Co. KG", "Bose Corporation", "HARMAN International", "Apple Inc.", "Samsung Electronics", "Skullcandy Inc.", "Audio-Technica Corporation", "Jabra Corporation", "Beyerdynamic GmbH & Co. KG", "AKG Acoustics GmbH", "Plantronics Inc.", "Razer Inc.", "Shure Incorporated", "Marshall Amplification plc", "Pioneer Corporation", "Kingston Technology Corporation", "Philips Electronics", "Panasonic Corporation"], type: null },
//             { key: "manufacturer", value: ["Sony Corporation", "Sennheiser Electronic GmbH & Co. KG", "Bose Corporation", "HARMAN International", "Apple Inc.", "Samsung Electronics", "Skullcandy Inc.", "Audio-Technica Corporation", "Jabra Corporation", "Beyerdynamic GmbH & Co. KG", "AKG Acoustics GmbH", "Plantronics Inc.", "Razer Inc.", "Shure Incorporated", "Marshall Amplification plc", "Pioneer Corporation", "Kingston Technology Corporation", "Philips Electronics", "Panasonic Corporation"], type: null },
//             { key: "country of origin", value: ["Japan", "Germany", "USA", "South Korea", "China", "United Kingdom", "Taiwan"], type: null },
//             { key: "packer", value: ["Sony Corporation", "Sennheiser Electronic GmbH & Co. KG", "Bose Corporation", "HARMAN International", "Apple Inc.", "Samsung Electronics", "Skullcandy Inc.", "Audio-Technica Corporation", "Jabra Corporation", "Beyerdynamic GmbH & Co. KG", "AKG Acoustics GmbH", "Plantronics Inc.", "Razer Inc.", "Shure Incorporated", "Marshall Amplification plc", "Pioneer Corporation", "Kingston Technology Corporation", "Philips Electronics", "Panasonic Corporation"], type: null },
//         ]
//     }
// ]; //headphones


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Ninja", "COSORI", "GoWISE USA", "Chefman", "Instant Pot", "Dash", "NuWave", "T-fal", "Secura", "BLACK+DECKER", "PowerXL", "Emeril Lagasse", "Farberware", "Hamilton Beach", "Gourmia", "Avalon Bay", "Big Boss", "Simple Living", "Yedi Houseware"], type: null },
//             { key: "model number", value: ["HD9220/29", "AF101", "CP158-AF", "GW22731", "RJ38-V3-DC35", "Vortex Plus", "DCAF200GBAQ02", "36011", "B1372", "TXG-DS12", "AF2000", "FT 431", "FT 42126", "FT 42139", "FT 44510", "GW44800-O", "AF101", "AB-Airfryer100B", "SL-AFD", "GV008"], type: null },
//             { key: "power consumption", value: [800, 1000, 1500, 1700, 1800, 2000, 2200], type: "W" },
//             { key: "power requirement", value: [120,220,240], type: "V" },
//             { key: "colours", value: ["Black", "White", "Silver", "Red", "Blue", "Grey"], type: null },
//             { key: "price in india", value: [1200,1500,3000,3500,4000,4500,5000,6000,7000,8000,9000,11000,14000,15000,17000,18000,20000,22000,25000,26000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "additional features",
//         fields: [
//             { key: "additional features", value: ["Digital Display", "Touch Screen", "Timer", "Temperature Control", "Non-Stick Basket", "Dishwasher Safe", "Recipe Book Included", "Pre-Programmed Settings"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "height", value: [10,12,14,16,18,20,22], type: "inches" },
//             { key: "weight", value: [10,12,14,16,18,20,22], type: "lbs" },
//             { key: "width", value: [10,12,14,16,18,20,22], type: "inches" },
//             { key: "depth", value: [10,12,14,16,18,20,22], type: "inches" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips Electronics", "SharkNinja Operating LLC", "COSORI", "GoWISE USA", "Chefman", "Instant Brands", "Dash", "NuWave", "Groupe SEB", "DyH Holdings", "Spectrum Brands", "Tristar Products", "Emeril Everyday", "Farberware", "Hamilton Beach Brands", "Gourmia", "Avalon Bay", "E. Mishan & Sons", "Simple Living Products", "Yedi Houseware"], type: null },
//             { key: "manufacturer", value: ["Philips Electronics", "SharkNinja Operating LLC", "COSORI", "GoWISE USA", "Chefman", "Instant Brands", "Dash", "NuWave", "Groupe SEB", "DyH Holdings", "Spectrum Brands", "Tristar Products", "Emeril Everyday", "Farberware", "Hamilton Beach Brands", "Gourmia", "Avalon Bay", "E. Mishan & Sons", "Simple Living Products", "Yedi Houseware"], type: null },
//             { key: "country of origin", value: ["Netherlands", "USA", "China", "Canada", "France", "Israel", "Germany", "Italy", "Taiwan"], type: null },
//             { key: "packer", value: ["Philips Electronics", "SharkNinja Operating LLC", "COSORI", "GoWISE USA", "Chefman", "Instant Brands", "Dash", "NuWave", "Groupe SEB", "DyH Holdings", "Spectrum Brands", "Tristar Products", "Emeril Everyday", "Farberware", "Hamilton Beach Brands", "Gourmia", "Avalon Bay", "E. Mishan & Sons", "Simple Living Products", "Yedi Houseware"], type: null },
//         ]
//     }
// ]; //air fryers



// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Black+Decker", "Bajaj", "Morphy Richards", "Havells", "Usha", "Tefal", "Panasonic", "Orpat", "Russell Hobbs", "Rowenta", "Sunbeam", "Orient Electric", "Crompton", "Kenstar", "Prestige", "Maharaja Whiteline", "Inalsa", "Nova", "Siemens"], type: null },
//             { key: "model", value: ["GC1905", "BXIR2202IN", "DX 2", "Pronto Neo", "DV1815N", "EI 1602", "Easy Speed Plus", "NI-P300T", "OEI", "DA1560", "DW2130", "SR6850", "EC 2", "CG-HD", "KF-6110", "PX139S", "Diva Plus", "Gallant", "Prosteam Elite", "Ultimate", "SX 120T"], type: null },
//             { key: "type", value: ["Steam Iron", "Dry Iron", "Steam and Dry Iron", "Travel Iron"], type: null },
//             { key: "colour", value: ["Black", "White", "Grey", "Blue", "Red", "Green", "Purple", "Yellow", "Pink"], type: null },
//             { key: "price in india", value: [500,700,8000,1000,1200,1400,1500,1700,2000,2500,3000,3500,4000,4500,5000], type: null },
//         ]
//     },
//     {
//         name: "build",
//         fields: [
//             { key: "soleplate type", value: ["Non-stick Coated", "Ceramic", "Stainless Steel", "Aluminium", "Titanium", "Silverstone", "Palladium", "Teflon"], type: null },
//         ]
//     },
//     {
//         name: "power supply",
//         fields: [
//             { key: "power consumption", value: [1000, 1200, 1400, 1600, 1800, 2000], type: "W" },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "height", value: [8,10,12,14,16,18,20,22], type: "inches" },
//             { key: "width", value: [4,5,6,7,8,9], type: "inches" },
//             { key: "depth", value: [4,5,6,7,8,9], type: "inches" },
//         ]
//     },
//     {
//         name: "more details",
//         fields: [
//             { key: "more details", value: ["Auto Shut-off", "Steam Burst", "Vertical Steaming", "Anti-drip", "Self-clean Function", "Anti-calc Function", "Adjustable Thermostat", "Swivel Cord", "Water Tank Capacity Indicator"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips Electronics", "Stanley Black & Decker", "Bajaj Electricals", "Morphy Richards", "Havells India", "Usha International", "Tefal Group", "Panasonic Corporation", "Orpat Group", "Groupe SEB", "Conair Corporation", "Sunbeam Products", "Orient Electric", "Crompton Greaves", "Kenstar Appliances", "TTK Prestige", "Maharaja Whiteline", "Taurus Group", "Nova Home Appliances", "Siemens AG"], type: null },
//             { key: "manufacturer", value: ["Philips Electronics", "Stanley Black & Decker", "Bajaj Electricals", "Morphy Richards", "Havells India", "Usha International", "Tefal Group", "Panasonic Corporation", "Orpat Group", "Groupe SEB", "Conair Corporation", "Sunbeam Products", "Orient Electric", "Crompton Greaves", "Kenstar Appliances", "TTK Prestige", "Maharaja Whiteline", "Taurus Group", "Nova Home Appliances", "Siemens AG"], type: null },
//             { key: "country of origin", value: ["Netherlands", "USA", "India", "France", "Germany", "Italy", "Japan", "China", "Spain", "Switzerland"], type: null },
//             { key: "packer", value: ["Philips Electronics", "Stanley Black & Decker", "Bajaj Electricals", "Morphy Richards", "Havells India", "Usha International", "Tefal Group", "Panasonic Corporation", "Orpat Group", "Groupe SEB", "Conair Corporation", "Sunbeam Products", "Orient Electric", "Crompton Greaves", "Kenstar Appliances", "TTK Prestige", "Maharaja Whiteline", "Taurus Group", "Nova Home Appliances", "Siemens AG"], type: null },
//         ]
//     }
// ]; //irons


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Havells", "Crompton", "Orient Electric", "Bajaj", "Usha", "Luminous", "Atomberg", "Gorilla", "Syska", "Honeywell", "Anchor", "Khaitan", "Surya", "Orpat", "Polar", "Standard", "Superfan", "Eveready", "ACTIVA", "V-Guard"], type: null },
//             { key: "model", value: ["Stealth", "Aura", "SilentPro", "Edge", "Efficiencia Neo", "Iris", "New Pearl", "Turbo Highspeed", "Avancer Prime", "Gorilla Renesa+", "Eco", "Platinum", "Wall Fan", "Alpine", "Swift", "Rapid", "Ceiling Fan", "Fan", "Deco", "Supreme"], type: null },
//             { key: "number of blades", value: [3, 4, 5], type: null },
//             { key: "pack of", value: [1, 2, 3, 4, 5], type: null },
//             { key: "remote", value: ["Yes", "No"], type: null },
//             { key: "power requirement", value: ["230 V, 50 Hz"], type: null },
//             { key: "blade material", value: ["Aluminium", "Plastic", "Wood", "Steel", "Copper"], type: null },
//             { key: "colour", value: ["White", "Brown", "Black", "Ivory", "Beige", "Silver", "Gold", "Grey"], type: null },
//             { key: "price in india", value: [800,1000,1200,1500,2000,2100,2200,2300,2500,2700,3000,3500,4000,4500,5000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "product details",
//         fields: [
//             { key: "suitable for", value: ["Indoor", "Outdoor", "Both"], type: null },
//             { key: "blade sweep", value: [600, 900, 1200, 1400, 1500, 1800, 2100], type: "mm" },
//             { key: "airflow", value: ["High", "Medium", "Low"], type: null },
//             { key: "sales package", value: ["Fan Motor", "Blades Set", "Mounting Accessories"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "box height", value: [8,10,12,14,16,18,20,22], type: "inches" },
//             { key: "box length", value: [8,10,12,14,16,18,20,22], type: "inches" },
//             { key: "box width", value: [8,10,12,14,16,18,20,22], type: "inches" },
//             { key: "weight", value: [1,2,3,4,5,6], type: "kg" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty summary", value: [1,2,3,4,5], type: "Year" },
//             { key: "domestic warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Havells India Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Orient Electric Limited", "Bajaj Electricals Limited", "Usha International Ltd.", "Luminous Power Technologies Pvt. Ltd.", "Atomberg Technologies Pvt. Ltd.", "Atomberg Technologies Pvt. Ltd.", "Syska", "Honeywell", "Anchor Electricals Pvt. Ltd.", "Khaitan Electricals Limited", "Surya Roshni Limited", "Orpat Group", "Polar India", "Standard Electricals", "Superfan", "Eveready Industries India Ltd.", "ACTIVA", "V-Guard"], type: null },
//             { key: "manufacturer", value: ["Havells India Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Orient Electric Limited", "Bajaj Electricals Limited", "Usha International Ltd.", "Luminous Power Technologies Pvt. Ltd.", "Atomberg Technologies Pvt. Ltd.", "Atomberg Technologies Pvt. Ltd.", "Syska", "Honeywell", "Anchor Electricals Pvt. Ltd.", "Khaitan Electricals Limited", "Surya Roshni Limited", "Orpat Group", "Polar India", "Standard Electricals", "Superfan", "Eveready Industries India Ltd.", "ACTIVA", "V-Guard"], type: null },
//             { key: "country of origin", value: ["India", "China", "Germany", "USA", "Japan", "South Korea"], type: null },
//             { key: "packer", value: ["Havells India Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Orient Electric Limited", "Bajaj Electricals Limited", "Usha International Ltd.", "Luminous Power Technologies Pvt. Ltd.", "Atomberg Technologies Pvt. Ltd.", "Atomberg Technologies Pvt. Ltd.", "Syska", "Honeywell", "Anchor Electricals Pvt. Ltd.", "Khaitan Electricals Limited", "Surya Roshni Limited", "Orpat Group", "Polar India", "Standard Electricals", "Superfan", "Eveready Industries India Ltd.", "ACTIVA", "V-Guard"], type: null },
//         ]
//     }
// ]; //fans



// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Symphony", "Crompton", "Kenstar", "Bajaj", "Voltas", "Orient Electric", "Havells", "Usha", "Blue Star", "Hindware", "Maharaja Whiteline", "Cello", "Singer", "Honeywell", "V-Guard", "Khaitan", "Kenwood", "Ram Coolers", "Koryo", "Bajaj Platini"], type: null },
//             { key: "model name", value: ["Sumo", "Optima", "Kenstar Cyclone", "Platini Torque", "Orient Electric Smartcool", "Havells Freddo", "Usha Honeywell CL30XC", "Blue Star DA35LMA", "Hindware Snowcrest", "Maharaja Whiteline Atlanto+", "Cello Marvel Plus", "Singer Liberty", "Voltas Personal", "Koryo Typhoon", "V-Guard Vandini", "Ram Coolers Ultra", "Kenwood Impel", "Khaitan Breeze", "Symphony Storm", "Crompton ACGC-DAC751"], type: null },
//             { key: "type", value: ["Desert", "Tower", "Window", "Personal"], type: null },
//             { key: "cooling media", value: ["Honeycomb", "Wood Wool", "Aspen", "Carbon", "Cellulose", "Plastic"], type: null },
//             { key: "number of speeds", value: [1, 2, 3, 4, 5], type: null },
//             { key: "blower or fan", value: ["Blower", "Fan"], type: null },
//             { key: "water tank capacity", value: [20, 30, 40, 50, 60, 70, 80, 90, 100], type: "Litres" },
//             { key: "colour", value: ["White", "Brown", "Black", "Ivory", "Grey", "Blue", "Red", "Green", "Yellow"], type: null },
//             { key: "price in india", value: [5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000,22000,25000,27000,30000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "body meterial",
//         fields: [
//             { key: "body meterial", value: ["ABS Plastic", "Fibre", "Metal", "PP (Polypropylene)", "Stainless Steel"], type: null },
//         ]
//     },
//     {
//         name: "water level indicator",
//         fields: [
//             { key: "water level indicator", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "power consumption heating",
//         fields: [
//             { key: "power consumption heating", value: [150,200,250,300,350,400,450,500,550,650,750], type: "W" },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "size", value: ["Small", "Medium", "Large"], type: null },
//             { key: "weight", value: [4,5,6,7,8,9,10,12,15,16,17], type: "kg" },
//         ]
//     },
//     {
//         name: "other features",
//         fields: [
//             { key: "other features", value: ["Remote Control", "Timer", "Dust Filter", "Ice Chamber", "Air Purifier", "Mosquito Repellent", "Inverter Compatible", "Portable", "Humidifier"], type: null },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Symphony Limited", "Crompton Greaves Consumer Electricals Ltd.", "Kenstar", "Bajaj Electricals Limited", "Voltas Limited", "Orient Electric Limited", "Havells India Ltd.", "Usha International Ltd.", "Blue Star Limited", "Hindware Appliances", "Maharaja Whiteline", "Cello Group", "Singer India Limited", "Honeywell International Inc.", "V-Guard Industries Ltd.", "Khaitan Electricals Limited", "Kenwood Limited", "Ram Coolers", "Koryo", "Bajaj Electricals Limited"], type: null },
//             { key: "manufacturer", value: ["Symphony Limited", "Crompton Greaves Consumer Electricals Ltd.", "Kenstar", "Bajaj Electricals Limited", "Voltas Limited", "Orient Electric Limited", "Havells India Ltd.", "Usha International Ltd.", "Blue Star Limited", "Hindware Appliances", "Maharaja Whiteline", "Cello Group", "Singer India Limited", "Honeywell International Inc.", "V-Guard Industries Ltd.", "Khaitan Electricals Limited", "Kenwood Limited", "Ram Coolers", "Koryo", "Bajaj Electricals Limited"], type: null },
//             { key: "country of origin", value: ["India", "China", "Germany", "USA", "Japan", "South Korea"], type: null },
//             { key: "packer", value: ["Symphony Limited", "Crompton Greaves Consumer Electricals Ltd.", "Kenstar", "Bajaj Electricals Limited", "Voltas Limited", "Orient Electric Limited", "Havells India Ltd.", "Usha International Ltd.", "Blue Star Limited", "Hindware Appliances", "Maharaja Whiteline", "Cello Group", "Singer India Limited", "Honeywell International Inc.", "V-Guard Industries Ltd.", "Khaitan Electricals Limited", "Kenwood Limited", "Ram Coolers", "Koryo", "Bajaj Electricals Limited"], type: null },
//         ]
//     }
// ]; //air coolers


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Braun", "Morphy Richards", "Inalsa", "Orpat", "Boss", "Havells", "Bajaj", "Prestige", "Wonderchef", "Usha", "Panasonic", "Crompton", "Maharaja Whiteline", "Hilton", "Russell Hobbs", "Oster", "KitchenAid", "Black & Decker", "NutriBullet"], type: null },
//             { key: "model", value: ["HR3705/10", "MQ505", "Pronto", "Handy Mixx", "Quick Chef", "HB09", "PHB 6.7", "HB 05", "HB-112", "Wonderchef Nutri-Blend", "HB-373", "HM03", "Power X", "Primo", "Supreme", "HB05", "HB-116", "Easy Mix", "BL450", "SB 332D"], type: null },
//             { key: "sales package", value: ["Hand Blender", "Chopper Attachment", "Whisk Attachment", "Measuring Beaker", "Instruction Manual"], type: null },
//             { key: "body meterial", value: ["Plastic", "Stainless Steel", "ABS Plastic", "Metal"], type: null },
//             { key: "blade material", value: ["Stainless Steel", "Titanium", "Plastic"], type: null },
//             { key: "power", value: [200, 300, 400, 500, 600, 700, 800, 900, 1000], type: "W" },
//             { key: "voltage", value: [220, 230, 240], type: "V" },
//             { key: "blending", value: ["Yes", "No"], type: null },
//             { key: "pureeing", value: ["Yes", "No"], type: null },
//             { key: "colour", value: ["White", "Black", "Silver", "Red", "Blue", "Green", "Yellow", "Purple", "Orange"], type: null },
//             { key: "price in india", value: [800,1000,1200,1300,1400,1500,1600,1700,1800,2000,2200,2500,2800,3000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "size", value: ["Small", "Medium", "Large"], type: null },
//             { key: "weight", value: [1,1.5,2,2.5], type: "kg" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips India Limited", "Braun GmbH", "Morphy Richards Limited", "Inalsa Appliances Limited", "Orpat Group", "Boss Home Appliances", "Havells India Ltd.", "Bajaj Electricals Limited", "TTK Prestige Ltd.", "Wonderchef Home Appliances Pvt. Ltd.", "Usha International Ltd.", "Panasonic India Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Maharaja Whiteline", "Hilton Appliances Pvt. Ltd.", "Russell Hobbs Inc.", "Oster Corporation", "Whirlpool Corporation", "Spectrum Brands Holdings, Inc.", "NutriBullet LLC"], type: null },
//             { key: "manufacturer", value: ["Philips India Limited", "Braun GmbH", "Morphy Richards Limited", "Inalsa Appliances Limited", "Orpat Group", "Boss Home Appliances", "Havells India Ltd.", "Bajaj Electricals Limited", "TTK Prestige Ltd.", "Wonderchef Home Appliances Pvt. Ltd.", "Usha International Ltd.", "Panasonic India Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Maharaja Whiteline", "Hilton Appliances Pvt. Ltd.", "Russell Hobbs Inc.", "Oster Corporation", "Whirlpool Corporation", "Spectrum Brands Holdings, Inc.", "NutriBullet LLC"], type: null },
//             { key: "country of origin", value: ["India", "Germany", "UK", "USA", "Japan", "China"], type: null },
//             { key: "packer", value: ["Philips India Limited", "Braun GmbH", "Morphy Richards Limited", "Inalsa Appliances Limited", "Orpat Group", "Boss Home Appliances", "Havells India Ltd.", "Bajaj Electricals Limited", "TTK Prestige Ltd.", "Wonderchef Home Appliances Pvt. Ltd.", "Usha International Ltd.", "Panasonic India Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Maharaja Whiteline", "Hilton Appliances Pvt. Ltd.", "Russell Hobbs Inc.", "Oster Corporation", "Whirlpool Corporation", "Spectrum Brands Holdings, Inc.", "NutriBullet LLC"], type: null },
//         ]
//     }
// ]; //hand blenders


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Philips", "Bajaj", "Morphy Richards", "Inalsa", "Usha", "Prestige", "Wonderchef", "Havells", "Panasonic", "Crompton", "Butterfly", "Pigeon", "Kenstar", "Black & Decker", "Hamilton Beach", "Cuisinart", "KitchenAid", "Ninja", "Braun", "Oster"], type: null },
//             { key: "type", value: ["Food Processor", "Mini Food Processor"], type: null },
//             { key: "body material", value: ["Plastic", "Stainless Steel", "ABS Plastic", "Metal"], type: null },
//             { key: "speed settings", value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], type: null },
//             { key: "processing bowl material", value: ["Plastic", "Stainless Steel", "Polycarbonate"], type: null },
//             { key: "colour", value: ["White", "Black", "Silver", "Red", "Blue", "Green", "Yellow", "Purple", "Orange"], type: null },
//             { key: "price in india", value: [500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,7000,8000,10000,12000,15000,20000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "functions",
//         fields: [
//             { key: "juicing", value: ["Yes", "No"], type: null },
//             { key: "grating", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "jar features",
//         fields: [
//             { key: "liquidizing jar", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "juicer features",
//         fields: [
//             { key: "citrus juicer", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "blade features",
//         fields: [
//             { key: "chopping blade", value: ["Yes", "No"], type: null },
//             { key: "slicing blade", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "convenience features",
//         fields: [
//             { key: "dishwasher safe", value: ["Yes", "No"], type: null },
//         ]
//     },
//     {
//         name: "power",
//         fields: [
//             { key: "power requirement", value: ["220-240V", "100-120V"], type: null },
//             { key: "power consumption", value: [400, 500, 600, 700, 800, 900, 1000, 1200], type: "W" },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "weight", value: [1,2,3,4,5,6,7,8,9,10], type: "kg" },
//             { key: "height", value: [30,40,50,60,70], type: "cm" },
//             { key: "depth", value: [20,30,40,50,60], type: "cm" },
//             { key: "width", value: [20,30,40,50,60], type: "cm" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Philips India Limited", "Bajaj Electricals Limited", "Morphy Richards Limited", "Inalsa Appliances Limited", "Usha International Ltd.", "TTK Prestige Ltd.", "Wonderchef Home Appliances Pvt. Ltd.", "Havells India Ltd.", "Panasonic India Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Butterfly Gandhimathi Appliances Limited", "Stovekraft Limited", "Kenstar India Ltd.", "Black & Decker Corporation", "Hamilton Beach Brands, Inc.", "Conair Corporation", "Whirlpool Corporation", "SharkNinja Operating LLC", "De'Longhi S.p.A.", "Newell Brands Inc."], type: null },
//             { key: "manufacturer", value: ["Philips India Limited", "Bajaj Electricals Limited", "Morphy Richards Limited", "Inalsa Appliances Limited", "Usha International Ltd.", "TTK Prestige Ltd.", "Wonderchef Home Appliances Pvt. Ltd.", "Havells India Ltd.", "Panasonic India Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Butterfly Gandhimathi Appliances Limited", "Stovekraft Limited", "Kenstar India Ltd.", "Black & Decker Corporation", "Hamilton Beach Brands, Inc.", "Conair Corporation", "Whirlpool Corporation", "SharkNinja Operating LLC", "De'Longhi S.p.A.", "Newell Brands Inc."], type: null },
//             { key: "country of origin", value: ["India", "Germany", "UK", "USA", "Japan", "China"], type: null },
//             { key: "packer", value: ["Philips India Limited", "Bajaj Electricals Limited", "Morphy Richards Limited", "Inalsa Appliances Limited", "Usha International Ltd.", "TTK Prestige Ltd.", "Wonderchef Home Appliances Pvt. Ltd.", "Havells India Ltd.", "Panasonic India Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Butterfly Gandhimathi Appliances Limited", "Stovekraft Limited", "Kenstar India Ltd.", "Black & Decker Corporation", "Hamilton Beach Brands, Inc.", "Conair Corporation", "Whirlpool Corporation", "SharkNinja Operating LLC", "De'Longhi S.p.A.", "Newell Brands Inc."], type: null },
//         ]
//     }
// ]; //food processor


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Elica", "Faber", "Hindware", "Glen", "Prestige", "Sunflame", "Kaff", "Eurodomo", "Futura", "Seavy", "Faber", "Butterfly", "Carysil", "Pigeon", "Glen", "Sunflame", "Bright Flame", "Hindware", "Elica", "Inalsa"], type: null },
//             { key: "model", value: ["Alto", "Trio", "Hood chimney", "Designer Hood", "Straight Line", "Curved Glass", "Island", "Auto Clean", "Wall Mounted", "Ceiling Mounted"], type: null },
//             { key: "type", value: ["Wall Mounted", "Ceiling Mounted", "Built-In", "Island", "Corner"], type: null },
//             { key: "colour", value: ["Black", "Silver", "White", "Stainless Steel", "Grey", "Brown"], type: null },
//             { key: "price in india", value: [5000,10000,15000,20000,25000,30000,35000,40000,45000,50000,55000], type: null },
//         ]
//     },
//     {
//         name: "special features",
//         fields: [
//             { key: "special features", value: ["Auto Clean", "Filterless", "Touch Control", "LED Lights", "Heat Auto Clean", "Silent Operation", "Motion Sensor", "Oil Collector", "Remote Control", "Timer", "Auto Power Off"], type: null },
//         ]
//     },
//     {
//         name: "airflow displacement",
//         fields: [
//             { key: "airflow displacement", value: ["500-700 m3/hr", "700-900 m3/hr", "900-1100 m3/hr", "1100-1300 m3/hr", "Above 1300 m3/hr"], type: "m3/hr" },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "size", value: [50,60,70,80,90], type: "cm" },
//             { key: "weight", value: [5,10,15,20,25], type: "kg" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Elica India", "Faber India", "Hindware Appliances", "Glen Appliances", "TTK Prestige", "Sunflame Enterprises", "Kaff Appliances", "Eurodomo Appliances", "Futura Kitchen Sinks", "Seavy Appliances", "Faber Appliances", "Butterfly Gandhimathi Appliances", "Carysil Appliances", "Pigeon Appliances", "Glen Appliances", "Sunflame Enterprises", "Bright Flame Appliances", "Hindware Appliances", "Elica India", "Inalsa Appliances"], type: null },
//             { key: "manufacturer", value: ["Elica S.p.A.", "Faber S.p.A.", "HSIL Limited", "Glen Appliances Pvt. Ltd.", "TTK Prestige Ltd.", "Sunflame Enterprises Pvt. Ltd.", "Kaff Appliances India Pvt. Ltd.", "Franke Faber India Limited", "Futura Kitchen Sinks India Pvt. Ltd.", "Seavy Appliances Pvt. Ltd.", "Faber S.p.A.", "Butterfly Gandhimathi Appliances Ltd.", "Carysil Kitchen Sinks Pvt. Ltd.", "Pigeon Appliances Pvt. Ltd.", "Glen Appliances Pvt. Ltd.", "Sunflame Enterprises Pvt. Ltd.", "Bright Flame Appliances", "HSIL Limited", "Elica S.p.A.", "Inalsa Appliances Ltd."], type: null },
//             { key: "country of origin", value: ["Italy", "India", "Germany", "Switzerland", "USA", "China"], type: null },
//             { key: "packer", value: ["Elica India", "Faber India", "HSIL Limited", "Glen Appliances", "TTK Prestige", "Sunflame Enterprises", "Kaff Appliances", "Eurodomo Appliances", "Futura Kitchen Sinks", "Seavy Appliances", "Faber Appliances", "Butterfly Gandhimathi Appliances", "Carysil Appliances", "Pigeon Appliances", "Glen Appliances", "Sunflame Enterprises", "Bright Flame Appliances", "HSIL Limited", "Elica India", "Inalsa Appliances"], type: null },
//         ]
//     }
// ]; //chemney


// const attributeGroups = [
//     {
//         name: "general",
//         fields: [
//             { key: "brand", value: ["Orpat", "Havells", "Bajaj", "Usha", "Morphy Richards", "Orient Electric", "V-Guard", "Eveready", "Maharaja Whiteline", "Inalsa", "Nova", "Crompton", "Khaitan", "Russell Hobbs", "Kenstar", "Oscillating", "Blaupunkt", "Ferroli", "Voltas", "Honeywell"], type: null },
//             { key: "model name", value: ["Fan Heater", "Oil Filled Radiator", "Halogen Heater", "Carbon Heater", "Infrared Heater", "Ceramic Heater", "Panel Heater", "Convection Heater", "Quartz Heater", "Micathermic Heater", "Patio Heater"], type: null },
//             { key: "type", value: ["Fan Heater", "Oil Filled Radiator", "Halogen Heater", "Carbon Heater", "Infrared Heater", "Ceramic Heater", "Panel Heater", "Convection Heater", "Quartz Heater", "Micathermic Heater", "Patio Heater"], type: null },
//             { key: "colour", value: ["Black", "White", "Grey", "Silver", "Red", "Blue", "Green", "Yellow", "Brown"], type: null },
//             { key: "price in india", value: [1000,2000,3000,4000,5000,6000,7000,8000,10000,12000,15000,20000,25000], type: "ruppes" },
//         ]
//     },
//     {
//         name: "power",
//         fields: [
//             { key: "power requirement", value: ["220-240V, 50Hz"], type: null },
//             { key: "power consumption", value: [500,1000,1500,2000,2500], type: "W" },
//             { key: "heat settings", value: ["1", "2", "3", "Adjustable"], type: null },
//         ]
//     },
//     {
//         name: "other features",
//         fields: [
//             { key: "other features", value: ["Adjustable Thermostat", "Overheat Protection", "Tip-Over Switch", "Cool Touch Handle", "Remote Control", "Timer", "Oscillation", "Anti-Frost Function", "Humidifier", "Noiseless Operation"], type: null },
//         ]
//     },
//     {
//         name: "dimensions",
//         fields: [
//             { key: "weight", value: [1,2,3,4,5], type: "kg" },
//         ]
//     },
//     {
//         name: "warranty",
//         fields: [
//             { key: "warranty", value: [1,2,3,4,5,6], type: "Year" },
//         ]
//     },
//     {
//         name: "other details",
//         fields: [
//             { key: "importer", value: ["Orpat Group", "Havells India Ltd.", "Bajaj Electricals Ltd.", "Usha International Ltd.", "Morphy Richards India", "Orient Electric Limited", "V-Guard Industries Ltd.", "Eveready Industries India Ltd.", "Maharaja Whiteline", "Inalsa Appliances Ltd.", "Nova Home Appliances Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Khaitan Electricals Ltd.", "Russell Hobbs", "Kenstar", "Oscillating Pvt. Ltd.", "Blaupunkt India", "Ferroli India Pvt. Ltd.", "Voltas Ltd.", "Honeywell India"], type: null },
//             { key: "manufacturer", value: ["Orpat Group", "Havells India Ltd.", "Bajaj Electricals Ltd.", "Usha International Ltd.", "Morphy Richards India", "Orient Electric Limited", "V-Guard Industries Ltd.", "Eveready Industries India Ltd.", "Maharaja Whiteline", "Inalsa Appliances Ltd.", "Nova Home Appliances Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Khaitan Electricals Ltd.", "Russell Hobbs", "Kenstar", "Oscillating Pvt. Ltd.", "Blaupunkt India", "Ferroli India Pvt. Ltd.", "Voltas Ltd.", "Honeywell India"], type: null },
//             { key: "country of origin", value: ["India", "China", "Germany", "Italy"], type: null },
//             { key: "packer", value: ["Orpat Group", "Havells India Ltd.", "Bajaj Electricals Ltd.", "Usha International Ltd.", "Morphy Richards India", "Orient Electric Limited", "V-Guard Industries Ltd.", "Eveready Industries India Ltd.", "Maharaja Whiteline", "Inalsa Appliances Ltd.", "Nova Home Appliances Pvt. Ltd.", "Crompton Greaves Consumer Electricals Ltd.", "Khaitan Electricals Ltd.", "Russell Hobbs", "Kenstar", "Oscillating Pvt. Ltd.", "Blaupunkt India", "Ferroli India Pvt. Ltd.", "Voltas Ltd.", "Honeywell India"], type: null },
//         ]
//     }
// ]; //room heaters



/* 
//please give me like aboove structure room heaters details but i given name and key both values 
gereral(brand,model name,type,colour,price in india)
power(power requirement,power consumption,heat settings)
other features(other features)
dimensions(weight)
warranty(warranty)
other details(importer,manufacturer,country of origin,packer)


//all above is name or key  
//name(key)

*/