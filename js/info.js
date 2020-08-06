//PABB Octubre 2015

//identificador-ciudad-estado-latitud-temperatura-t_diario-factor_carga
//El primer valor es un identificador es solo un número consecutivo
var datos = [
    [1, 'Acaponeta', 'Nayarit', 22.49, 35, 'L', 1.141267],
    [2, 'Tecate', 'Baja California', 32.57, 41, 'M', 1],
    [3, 'Tijuana', 'Baja California', 32.51, 32, 'L', 1],
    [4, 'Ensenada', 'Baja California', 31.86, 38, 'M', 1],
    [5, 'San Felipe', 'Baja California', 31.02, 43, 'H', 1],
    [6, 'Guerrero Negro', 'Baja California Sur', 27.96, 32, 'L', 1.037114],
    [7, 'Santa Rosalía', 'Baja California Sur', 27.34, 38, 'M', 1.056805],
    [8, 'Mulegé', 'Baja California Sur', 26.89, 41, 'M', 1.074277],
    [9, 'Comondú', 'Baja California Sur', 26.05, 41, 'M', 1.074277],
    [10, 'Loreto', 'Baja California Sur', 26.01, 41, 'M', 1.074277],
    [11, 'Cd. Insurgentes', 'Baja California Sur', 25.26, 43, 'H', 1.045003],
    [12, 'Cd. Constitución', 'Baja California Sur', 25.03, 43, 'H', 1.045003],
    [13, 'La Paz', 'Baja California Sur', 24.14, 38, 'M', 1.138929],
    [14, 'San José del Cabo', 'Baja California Sur', 23.06, 35, 'L', 1.19341],
    [15, 'Cabo San Lucas', 'Baja California Sur', 22.89, 29, 'L', 1.23338],
    [16, 'San Luis Río Colorado', 'Sonora', 32.45, 43, 'H', 1],
    [17, 'Puerto Peñasco', 'Sonora', 31.32, 41, 'M', 1],
    [18, 'Agua Prieta', 'Sonora', 31.32, 41, 'M', 1],
    [19, 'Nogales', 'Sonora', 31.31, 41, 'M', 1],
    [20, 'Cananea', 'Sonora', 30.98, 41, 'M', 1],
    [21, 'Caborca', 'Sonora', 30.71, 43, 'H', 1],
    [22, 'Magdalena', 'Sonora', 30.63, 41, 'M', 1],
    [23, 'Santa Ana', 'Sonora', 30.54, 43, 'H', 1],
    [24, 'Ures', 'Sonora', 29.43, 43, 'H', 1],
    [25, 'Hermosillo', 'Sonora', 29.07, 43, 'H', 1],
    [26, 'Costa de Hermosillo', 'Sonora', 28.91, 43, 'H', 1.011606],
    [27, 'Sahuaripa', 'Sonora', 29.05, 38, 'M', 1],
    [28, 'Empalme', 'Sonora', 27.96, 41, 'M', 1.066269],
    [29, 'Guaymas', 'Sonora', 27.92, 41, 'M', 1.066269],
    [30, 'Cd. Obregón', 'Sonora', 27.49, 41, 'M', 1.026873],
    [31, 'Navojoa', 'Sonora', 27.06, 41, 'M', 1.026873],
    [32, 'Huatabampo', 'Sonora', 26.83, 38, 'M', 1.112063],
    [33, 'Cd. Juarez', 'Chihuahua', 31.73, 41, 'M', 1],
    [34, 'Casas Grandes', 'Chihuahua', 30.41, 38, 'M', 1],
    [35, 'Buenaventura', 'Chihuahua', 29.83, 35, 'M', 1],
    [36, 'Ojinaga', 'Chihuahua', 29.56, 38, 'M', 1.015939],
    [37, 'Chihuahua', 'Chihuahua', 28.63, 35, 'M', 1],
    [38, 'Cuauhtémoc', 'Chihuahua', 28.40, 35, 'M', 1],
    [39, 'Delicias', 'Chihuahua', 28.18, 38, 'M', 1],
    [40, 'Jimenez', 'Chihuahua', 27.13, 38, 'M', 1.02688],
    [41, 'Hidalgo del Parral', 'Chihuahua', 26.93, 35, 'M', 1],
    [42, 'Piedras Negras', 'Coahuila', 28.70, 32, 'L', 1.194341],
    [43, 'Sabinas', 'Coahuila', 27.86, 32, 'L', 1.159628],
    [44, 'Monclova', 'Coahuila', 26.90, 35, 'L', 1.124103],
    [45, 'Torreón', 'Coahuila', 25.54, 38, 'M', 1.023247],
    [46, 'Saltillo', 'Coahula', 25.42, 35, 'L', 1.101612],
    [47, 'Monterrey', 'Nuevo León', 25.67, 35, 'L', 1.101612],
    [48, 'Linares', 'Nuevo León', 24.86, 32, 'L', 1.144284],
    [49, 'Nuevo Laredo', 'Tamaulipas', 27.49, 35, 'L', 1.227171],
    [50, 'Reynosa', 'Tamaulipas', 26.07, 35, 'L', 1.253393],
    [51, 'Matamoros', 'Tamaulipas', 25.86, 32, 'L', 1.281883],
    [52, 'San Fernando', 'Tamaulipas', 24.83, 32, 'L', 1.236376],
    [53, 'Ciudad Victoria', 'Tamaulipas', 23.74, 32, 'L', 1.144277],
    [54, 'Tula', 'Tamaulipas', 22.99, 32, 'L', 1.144865],
    [55, 'Mante', 'Tamaulipas', 22.74, 32, 'L', 1.231539],
    [56, 'Tampico', 'Tamaulipas', 22.29, 29, 'L', 1.306761],
    [57, 'Los Mochis', 'Sinaloa', 25.80, 35, 'L', 1.155631],
    [58, 'Guasave', 'Sinaloa', 25.57, 35, 'L', 1.155631],
    [59, 'Culiacán', 'Sinaloa', 24.80, 32, 'L', 1.183526],
    [60, 'Mazatlán', 'Sinaloa', 23.23, 35, 'L', 1.14987],
    [61, 'Gomez Palacio', 'Durango', 25.57, 38, 'M', 1.023247],
    [62, 'Durango', 'Durango', 24.02, 35, 'M', 1],
    [63, 'Fresnillo', 'Zacatecas', 23.17, 38, 'M', 1],
    [64, 'Zacatecas', 'Zacatecas', 22.77, 35, 'M', 1],
    [65, 'Matehuala', 'San Luis Potosí', 23.64, 32, 'M', 1.060291],
    [66, 'San Luis Potosí', 'San Luis Potosí', 22.15, 32, 'L', 1.064722],
    [67, 'Aguascalientes', 'Aguascalientes', 21.88, 35, 'M', 1.005817],
    [68, 'Mexicali', 'Baja California', 32.66, 43, 'H', 1],
    [69, 'Tepic', 'Nayarit', 21.50, 35, 'L', 1.096054],
    [70, 'Nuevo Vallarta', 'Nayarit', 20.67, 32, 'L', 1.190316],
    [71, 'Guadalajara', 'Jalisco', 20.66, 35, 'L', 1.056308],
    [72, 'Puerto Vallarta', 'Jalisco', 20.62, 32, 'L', 1.190316],
    [73, 'León', 'Guanajuato', 21.13, 32, 'M', 1.009702],
    [74, 'Guanajuato', 'Guanajuato', 21.02, 32, 'M', 1.009702],
    [75, 'Irapuato', 'Guanajuato', 20.68, 32, 'M', 1.02401],
    [76, 'Celaya', 'Guanajuato', 20.52, 32, 'M', 1.017675],
    [77, 'Queretaro', 'Queretaro', 20.58, 32, 'M', 1.017675],
    [78, 'San Juan del Río', 'Querétaro', 20.38, 32, 'M', 1.033796],
    [79, 'Pachuca', 'Hidalgo', 20.12, 32, 'L', 1.083398],
    [80, 'Tulancingo', 'Hidalgo', 20.08, 32, 'L', 1.083398],
    [81, 'Tula', 'Hidalgo', 20.05, 32, 'M', 1.033796],
    [82, 'Colima', 'Colima', 19.24, 35, 'L', 1.111111],
    [83, 'Manzanillo', 'Colima', 19.05, 35, 'L', 1.169253],
    [84, 'Tecomán', 'Colima', 18.90, 35, 'L', 1.111111],
    [85, 'Morelia', 'Michoacan', 19.70, 32, 'L', 1.078652],
    [86, 'Pátzcuaro', 'Michoacan', 19.51, 32, 'L', 1.078652],
    [87, 'Zitácuaro', 'Michoacan', 19.43, 32, 'M', 1.042203],
    [88, 'Uruapan', 'Michoacan', 19.41, 35, 'L', 1.09373],
    [89, 'Apatzingán', 'Michoacan', 19.07, 35, 'L', 1.09373],
    [90, 'Toluca', 'Estado de México', 19.28, 32, 'M', 1.017759],
    [91, 'Ciudad de México', 'Distrito Federal', 19.43, 32, 'M', 1.017759],
    [92, 'Cuernavaca', 'Morelos', 18.94, 35, 'L', 1.065002],
    [93, 'Cuautla', 'Morelos', 18.81, 35, 'M', 1.048055],
    [94, 'Tlaxcala', 'Tlaxcala', 19.31, 32, 'M', 1.030968],
    [95, 'Puebla', 'Puebla', 19.04, 32, 'M', 1.030968],
    [96, 'Tehuacán', 'Puebla', 18.46, 32, 'L', 1.069531],
    [97, 'Tuxpan', 'Veracruz', 20.95, 32, 'L', 1.1708],
    [98, 'Poza Rica', 'Veracruz', 20.52, 32, 'L', 1.1708],
    [99, 'Xalapa', 'Veracruz', 19.54, 32, 'L', 1.22295],
    [100, 'Veracruz', 'Veracruz', 19.19, 32, 'L', 1.22295],
    [101, 'Córdoba', 'Veracruz', 18.88, 35, 'L', 1.174314],
    [102, 'Ixtaczoquitlán', 'Veracruz', 18.84, 32, 'L', 1.069531],
    [103, 'Orizaba', 'Veracruz', 18.84, 32, 'L', 1.069531],
    [104, 'San Andrés Tuxtla', 'Veracruz', 18.44, 32, 'L', 1.257789],
    [105, 'Coatzacoalcos', 'Veracruz', 18.14, 32, 'L', 1.29974],
    [106, 'Acayucan', 'Veracruz', 17.94, 35, 'L', 1.247751],
    [107, 'Iguala', 'Guerrero', 18.34, 35, 'L', 1.065002],
    [108, 'Ziguatanejo', 'Guerrero', 17.65, 32, 'L', 1.24297],
    [109, 'Chilpancingo', 'Guerrero', 17.55, 35, 'L', 1.144039],
    [110, 'Acapulco', 'Guerrero', 16.86, 32, 'L', 1.250082],
    [111, 'Tuxtepec', 'Oaxaca', 18.09, 35, 'L', 1.174314],
    [112, 'Oaxaca', 'Oaxaca', 17.06, 32, 'L', 1.145929],
    [113, 'Miahuatlan', 'Oaxaca', 16.32, 32, 'L', 1.159901],
    [114, 'Puerto Escondido', 'Oaxaca', 15.87, 32, 'L', 1.255262],
    [115, 'Salina Cruz', 'Oaxaca', 16.18, 32, 'L', 1.225008],
    [116, 'Cárdenas', 'Tabasco', 17.99, 35, 'L', 1.242585],
    [117, 'Villa Hermosa', 'Tabasco', 17.99, 32, 'L', 1.226548],
    [118, 'Tuxtla Gutiérrez', 'Chiapas', 16.75, 35, 'L', 1.216342],
    [119, 'San Cristobal de las Casas', 'Chiapas', 16.73, 32, 'L', 1.180173],
    [120, 'Tapachula', 'Chiapas', 14.90, 32, 'L', 1.281981],
    [121, 'Campeche', 'Campeche', 19.84, 35, 'L', 1.276738],
    [122, 'Ciudad del Carmen', 'Campeche', 18.65, 35, 'L', 1.272314],
    [123, 'Mérida', 'Yucatán', 20.97, 35, 'L', 1.271278],
    [124, 'Valladolid', 'Yucatán', 20.70, 35, 'L', 1.278306],
    [125, 'Cancún', 'Quintana Roo', 21.16, 29, 'L', 1.327481],
    [126, 'Playa del Carmen', 'Quintana Roo', 20.62, 32, 'L', 1.288379],
    [127, 'Chetumal', 'Quintana Roo', 18.50, 32, 'L', 1.292418]
];

//datos de los documentos a descargar de cada uno de los productos
//id es un numero consecutivo
//Las demás variables son las rutas de los archivos que te van a descargar

//productos-placa-aislante producto 1
var producto1 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Placa_Aislante.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Flotadores
var producto2 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Flotadores.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//Arquiformas molduras
var producto3 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Arquiformas_molduras.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Blueboard
var producto4 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Blueboard.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Bovedilla
var producto5 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Bovedilla.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Caseton
var producto6 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Caseton.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Empaque
var producto7 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Empaque.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Fibra de vidrio
var producto8 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Fibra_de_vidrio.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Foamblock
var producto9 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Foamblock.pdf",
            "manual": "productos/MI_Foamblock.pdf",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Greenboard
var producto10 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Greenboard.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Insulpanel general muro
var producto11 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Insupanel_muro.pdf",
            "manual": "productos/MI_Insulpanel.pdf",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha2": "productos/FT_Insulfoil_muro.pdf"
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha2": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha2": ""
        }
    ]
};
//KR18
var producto12 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_KR18.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Perlita
var producto13 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Perlita.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Placa Aligerante
var producto14 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Placa_Aligerante.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Semillero
var producto15 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Semillero.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};
//Vigueta Prestensada 
var producto16 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Vigueta_pretensada.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "La Paz",
            "ficha_tecnica": "productos/vigueta pretensada _FT_nueva.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//Hielera
var producto17 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Hielera.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//Cajas pescados y mariscos
var producto18 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Caja_pescados_mariscos.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//Cajas uvas
var producto19 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Caja_para_uva.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//Construpanel
var producto20 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_construpanel.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha_comercial": "productos/FC_construpanel.pdf"
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//Geofoam
var producto21 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Geofoam.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": ""
        }
    ]
};

//steelfoam
var producto22 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Steelfoam.pdf",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha_comercial": "productos/FC_Steelfoam.pdf"
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha_comercial": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha_comercial": ""
        }
    ]
};

//Insulpanel general techo
var producto23 = {
    "documentos": [
        {
            "id": "0",
            "ciudad": "Hermosillo",
            "ficha_tecnica": "productos/FT_Insupanel_techo.pdf",
            "manual": "productos/MI_Insulpanel.pdf",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha2": "productos/FT_Insulfoil_techo.pdf"
        },
        {
            "id": "1",
            "ciudad": "DF",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha2": ""
        },
        {
            "id": "2",
            "ciudad": "Monterrey",
            "ficha_tecnica": "",
            "manual": "",
            "pruebas": "",
            "detalles": "",
            "dwr": "",
            "ficha2": ""
        }
    ]
};