function exportar(event) {
  // Datos capturados de Datos personales

  const nombres = document.getElementById("nombres").value;
  if (nombres.trim() === "") {
    alert("Por favor, ingresa tus nombres.");
  }
  const apellidos = document.getElementById("apellidos").value;
  if (apellidos.trim() === "") {
    alert("Por favor, ingresa tus apellidos.");
  }
  const genero = document.querySelector('input[name="genero"]:checked').value;

  if (genero === null) {
    alert("Por favor, selecciona tipo  género.");
    return false;
  }

  const cedula = document.getElementById("cedula").value;
  if (cedula.trim() === "") {
    alert("Por favor, ingresa tu número de cédula.");
  } else if (!/^\d+$/.test(cedula)) {
    alert("El número de cédula debe contener solo números.");
  }

  const celular = document.getElementById("celular").value;
  if (celular.trim() === "") {
    alert("Por favor, ingresa tu número de celular.");
  } else if (!/^\d+$/.test(celular)) {
    alert("El número de celular debe contener solo números.");
  }

  const codigo_catastral = document.getElementById("codigo_catastral").value;

  if (codigo_catastral.trim() === "") {
    alert("Por favor, ingresa el código catastral.");
  }

  const correo_electronico =
    document.getElementById("correo_electronico").value;
  if (correo_electronico.trim() === "") {
    alert("Por favor, ingresa tu correo electrónico.");
  }
  const nivel_educativo = document.getElementById("nivel_educativo").value;
  if (nivel_educativo.trim() === "") {
    alert("Por favor, ingresa tu nivel educativo.");
  }
  const profesion = document.getElementById("profesion").value;
  if (profesion.trim() === "") {
    alert("Por favor, ingresa tu profesión.");
  }

  //Validacion de los campos

  //Datos de la segunda tabla Acta diagnostico
  const fecha = document.getElementById("fecha").value;
  const tipovisita = document.getElementById("tipovisita").value;
  const estatuspredio = document.getElementById("estatuspredio").value;
  const tematratado = document.getElementById("tematratado").value;

  //Validacion Acta Diagnostico

  if (fecha.trim() === "") {
    alert("Por favor, ingresa la fecha.");
  } else if (tipovisita.trim() === "") {
    alert("Por favor, selecciona el tipo de visita.");
  } else if (estatuspredio.trim() === "") {
    alert("Por favor, selecciona el estatus del predio.");
  } else if (tematratado.trim() === "") {
    alert("Por favor, ingresa el tema tratado.");
  } else {
    // Todas las validaciones pasaron, puedes realizar alguna acción adicional
    // o enviar el formulario, según sea el caso.
  }

  //tabla datos de la finca
  const finca = document.getElementById("finca").value;
  const vereda = document.getElementById("vereda").value;
  const ciudades = document.getElementById("ciudades").value;

  //Validacion Datos de la finca

  if (finca.trim() === "") {
    alert("Por favor, ingresa el nombre de la finca.");
  } else if (vereda.trim() === "") {
    alert("Por favor, ingresa el nombre de la vereda.");
  } else if (ciudades.trim() === "") {
    alert("Por favor, ingresa el nombre de la ciudad.");
  } else {
    // Todas las validaciones pasaron, puedes realizar alguna acción adicional
    // o enviar el formulario, según sea el caso.
  }

  // Tablas especis "Informacion"
  const lotes = document.getElementById("lotes", "lotes2").value;
  const planta = document.getElementById("planta").value;
  const surco = document.getElementById("surco").value;
  const numeroarboles = document.getElementById("numeroarboles").value;
  const area = document.getElementById("area").value;
  const sombra = document.getElementById("sombra").value;
  const pendiente = document.getElementById("pendiente").value;

  //Validacion especies

  if (lotes.trim() === "") {
    alert("Por favor, ingresa el número de lotes.");
  } else if (planta.trim() === "") {
    alert("Por favor, ingresa el número de planta.");
  } else if (surco.trim() === "") {
    alert("Por favor, ingresa el número de surco.");
  } else if (numeroarboles.trim() === "") {
    alert("Por favor, ingresa el número de árboles.");
  } else if (area.trim() === "") {
    alert("Por favor, ingresa el área.");
  } else if (sombra.trim() === "") {
    alert("Por favor, ingresa la cantidad de sombra.");
  } else if (pendiente.trim() === "") {
    alert("Por favor, ingresa la pendiente.");
  } else {
    // Todas las validaciones pasaron, puedes realizar alguna acción adicional
    // o enviar el formulario, según sea el caso.
  }

  //Tabla otro campo finca
  const altovalor = document.getElementById("altovalor").value;
  const areasoscial = document.getElementById("areasocial").value;
  const areatotal = document.getElementById("areatotal").value;
  const produccion = document.getElementById("produccion").value;

  if (altovalor.trim() === "") {
    alert("Por favor, ingresa el valor alto.");
  } else if (areasoscial.trim() === "") {
    alert("Por favor, ingresa el área social.");
  } else if (areatotal.trim() === "") {
    alert("Por favor, ingresa el área total.");
  } else if (produccion.trim() === "") {
    alert("Por favor, ingresa el valor de producción.");
  } else {
    // Todas las validaciones pasaron, puedes realizar alguna acción adicional
    // o enviar el formulario, según sea el caso.
  }

  //Municipio
  const cultivo = document.getElementById("cultivo").value;
  const surcos = document.getElementById("surcos").value;
  const plantas = document.getElementById("plantas").value;
  const numarboles = document.getElementById("numarboles").value;
  const areaarboles = document.getElementById("areaarboles").value;
  const producciones = document.getElementById("producciones").value;
  const areatotalarboles = document.getElementById("areatotalarboles").value;

  //Validacion Municipio

  if (cultivo.trim() === "") {
    alert("Por favor, ingresa el tipo de cultivo.");
  } else if (surcos.trim() === "") {
    alert("Por favor, ingresa el número de surcos.");
  } else if (plantas.trim() === "") {
    alert("Por favor, ingresa el número de plantas.");
  } else if (numarboles.trim() === "") {
    alert("Por favor, ingresa el número de árboles.");
  } else if (areaarboles.trim() === "") {
    alert("Por favor, ingresa el área de los árboles.");
  } else if (producciones.trim() === "") {
    alert("Por favor, ingresa el valor de producciones.");
  } else if (areatotalarboles.trim() === "") {
    alert("Por favor, ingresa el área total de los árboles.");
  } else {
    // Todas las validaciones pasaron, puedes realizar alguna acción adicional
    // o enviar el formulario, según sea el caso.
  }

  //Datos variedades

  const variedad = document.getElementById("variedad").value;
  const proceso = document.querySelector('input[name="proceso"]:checked').value;
  const validar = document.querySelector('input[name="validar"]:checked').value;
  const validar2 = document.querySelector(
    'input[name="validar2"]:checked'
  ).value;
  const latitud = document.getElementById("latitud").value;
  const longitud = document.getElementById("longitud").value;
  const altitud = document.getElementById("altitud").value;
  const validar3 = document.querySelector(
    'input[name="validar3"]:checked'
  ).value;
  const fecha2 = document.getElementById("fecha2").value;
  const validar4 = document.querySelector(
    'input[name="validar4"]:checked'
  ).value;
  const validar5 = document.querySelector(
    'input[name="validar5"]:checked'
  ).value;
  const validar6 = document.querySelector(
    'input[name="validar6"]:checked'
  ).value;
  const validar7 = document.querySelector(
    'input[name="validar7"]:checked'
  ).value;
  const validar8 = document.querySelector(
    'input[name="validar8"]:checked'
  ).value;
  const rangos = document.getElementById("rangos").value;
  const validar9 = document.querySelector(
    'input[name="validar9"]:checked'
  ).value;
  const cuantos = document.getElementById("cuantos").value;
  const personal = document.getElementById("personal").value;
  const personaltemporal = document.getElementById("personaltemporal").value;

  //Validacion Variedades

  if (variedad.trim() === "") {
    alert("Por favor, ingresa el valor para variedad.");
  } else if (!proceso) {
    alert("Por favor, selecciona una opción para proceso.");
  } else if (!validar) {
    alert("Por favor, selecciona una opción para validar.");
  } else if (!validar2) {
    alert("Por favor, selecciona una opción para validar2.");
  } else if (latitud.trim() === "") {
    alert("Por favor, ingresa el valor para latitud.");
  } else if (longitud.trim() === "") {
    alert("Por favor, ingresa el valor para longitud.");
  } else if (altitud.trim() === "") {
    alert("Por favor, ingresa el valor para altitud.");
  } else if (!validar3) {
    alert("Por favor, selecciona una opción para validar3.");
  } else if (fecha2.trim() === "") {
    alert("Por favor, ingresa el valor para fecha2.");
  } else if (!validar4) {
    alert("Por favor, selecciona una opción para validar4.");
  } else if (!validar5) {
    alert("Por favor, selecciona una opción para validar5.");
  } else if (!validar6) {
    alert("Por favor, selecciona una opción para validar6.");
  } else if (!validar7) {
    alert("Por favor, selecciona una opción para validar7.");
  } else if (!validar8) {
    alert("Por favor, selecciona una opción para validar8.");
  } else if (rangos.trim() === "") {
    alert("Por favor, ingresa el valor para rangos.");
  } else if (!validar9) {
    alert("Por favor, selecciona una opción para validar9.");
  } else if (cuantos.trim() === "") {
    alert("Por favor, ingresa el valor para cuantos.");
  } else if (personal.trim() === "") {
    alert("Por favor, ingresa el valor para personal.");
  } else if (personaltemporal.trim() === "") {
    alert("Por favor, ingresa el valor para personaltemporal.");
  }

  //TablaInfraestructura
  const validar20 = document.querySelector(
    'input[name="validar20"]:checked'
  ).value;
  const validar22 = document.querySelector(
    'input[name="validar22"]:checked'
  ).value;
  const validar23 = document.querySelector(
    'input[name="validar23"]:checked'
  ).value;
  const validar24 = document.querySelector(
    'input[name="validar24"]:checked'
  ).value;
  const validar26 = document.querySelector(
    'input[name="validar26"]:checked'
  ).value;
  const validar27 = document.querySelector(
    'input[name="validar27"]:checked'
  ).value;
  const validar28 = document.querySelector(
    'input[name="validar28"]:checked'
  ).value;
  const validar30 = document.querySelector(
    'input[name="validar30"]:checked'
  ).value;
  const validar32 = document.getElementById("validar32").value;
  const observaciones = document.getElementById("observaciones").value;
  const validar33 = document.querySelector(
    'input[name="validar33"]:checked'
  ).value;
  const validar34 = document.querySelector(
    'input[name="validar34"]:checked'
  ).value;
  const validar35 = document.querySelector(
    'input[name="validar35"]:checked'
  ).value;
  const validar36 = document.querySelector(
    'input[name="validar36"]:checked'
  ).value;
  const validar37 = document.querySelector(
    'input[name="validar37"]:checked'
  ).value;

  //Validacion infraestructura
  if (validar20 === null) {
    alert("Por favor, selecciona Tipo de maquina despulpadora.");
  } else if (validar22 === null) {
    alert("Por favor, selecciona la opción para validar22.");
  } else if (validar23 === null) {
    alert("Por favor, selecciona la opción para validar23.");
  } else if (validar24 === null) {
    alert("Por favor, selecciona la opción para validar24.");
  } else if (validar26 === null) {
    alert("Por favor, selecciona la opción para validar26.");
  } else if (validar27 === null) {
    alert("Por favor, selecciona la opción para validar27.");
  } else if (validar28 === null) {
    alert("Por favor, selecciona la opción para validar28.");
  } else if (validar30 === null) {
    alert("Por favor, selecciona la opción para validar30.");
  } else if (validar32.trim() === "") {
    alert("Por favor, ingresa el valor para validar32.");
  } else if (observaciones.trim() === "") {
    alert("Por favor, ingresa las observaciones.");
  } else if (validar33 === null) {
    alert("Por favor, selecciona la opción para validar33.");
  } else if (validar34 === null) {
    alert("Por favor, selecciona la opción para validar34.");
  } else if (validar35 === null) {
    alert("Por favor, selecciona la opción para validar35.");
  } else if (validar36 === null) {
    alert("Por favor, selecciona la opción para validar36.");
  } else if (validar37 === null) {
    alert("Por favor, selecciona la opción para validar37.");
  } else {
    // Todas las validaciones pasaron, puedes realizar alguna acción adicional
    // o enviar el formulario, según sea el caso.
  }

  const suficiente = document.getElementById("suficiente").value;
  const insuficiente = document.getElementById("insuficiente").value;
  const observaciones2 = document.getElementById("observaciones2").value;

  if (suficiente.trim() === "") {
    alert("Por favor, ingresa el valor para suficiente.");
  } else if (insuficiente.trim() === "") {
    alert("Por favor, ingresa el valor para insuficiente.");
  }

  //Bodegas Tabla
  const validar38 = document.querySelector(
    'input[name="validar38"]:checked'
  ).value;
  const validar39 = document.querySelector(
    'input[name="validar39"]:checked'
  ).value;
  const validar40 = document.querySelector(
    'input[name="validar40"]:checked'
  ).value;
  const validar42 = document.querySelector(
    'input[name="validar42"]:checked'
  ).value;
  const validar43 = document.querySelector(
    'input[name="validar43"]:checked'
  ).value;

  const validar44 = document.querySelector(
    'input[name="validar44"]:checked'
  ).value;

  const validar45 = document.querySelector(
    'input[name="validar45"]:checked'
  ).value;

  const observaciones3 = document.getElementById("observaciones3").value;

  if (!validar38) {
    alert("Por favor, selecciona una opción para validar38.");
  } else if (!validar39) {
    alert("Por favor, selecciona una opción para validar39.");
  } else if (!validar40) {
    alert("Por favor, selecciona una opción para validar40.");
  } else if (!validar42) {
    alert("Por favor, selecciona una opción para validar42.");
  } else if (!validar43) {
    alert("Por favor, selecciona una opción para validar43.");
  } else if (!validar44) {
    alert("Por favor, selecciona una opción para validar44.");
  } else if (!validar45) {
    alert("Por favor, selecciona una opción para validar45.");
  }

  //Tabla BPA

  const validar46 = document.querySelector(
    'input[name="validar46"]:checked'
  ).value;

  const validar47 = document.querySelector(
    'input[name="validar47"]:checked'
  ).value;

  const validar48 = document.querySelector(
    'input[name="validar48"]:checked'
  ).value;

  const validar49 = document.querySelector(
    'input[name="validar49"]:checked'
  ).value;

  const especifar = document.getElementById("especificar").value;

  const validar50 = document.querySelector(
    'input[name="validar50"]:checked'
  ).value;

  const especificardos = document.getElementById("especificardos").value;

  const validar52 = document.querySelector(
    'input[name="validar52"]:checked'
  ).value;

  const especificartres = document.getElementById("especificartres").value;

  const validar53 = document.querySelector(
    'input[name="validar53"]:checked'
  ).value;

  const validar54 = document.querySelector(
    'input[name="validar54"]:checked'
  ).value;

  const listaroja = document.querySelector(
    'input[name="listaroja"]:checked'
  ).value;

  const validar55 = document.querySelector(
    'input[name="validar55"]:checked'
  ).value;

  const validar56 = document.querySelector(
    'input[name="validar56"]:checked'
  ).value;

  const validar57 = document.querySelector(
    'input[name="validar57"]:checked'
  ).value;

  const cual58 = document.getElementById("cual58").value;
  const observacionescuatro = document.getElementById(
    "observacionescuatro"
  ).value;

  //Validacion Datos

  if (!validar46) {
    alert("Por favor, selecciona una opción para validar46.");
  } else if (!validar47) {
    alert("Por favor, selecciona una opción para validar47.");
  } else if (!validar48) {
    alert("Por favor, selecciona una opción para validar48.");
  } else if (!validar49) {
    alert("Por favor, selecciona una opción para validar49.");
  } else if (especifar.trim() === "") {
    alert("Por favor, ingresa el valor para especificar.");
  } else if (!validar50) {
    alert("Por favor, selecciona una opción para validar50.");
  } else if (especificardos.trim() === "") {
    alert("Por favor, ingresa el valor para especificardos.");
  } else if (!validar52) {
    alert("Por favor, selecciona una opción para validar52.");
  } else if (especificartres.trim() === "") {
    alert("Por favor, ingresa el valor para especificartres.");
  } else if (!validar53) {
    alert("Por favor, selecciona una opción para validar53.");
  } else if (!validar54) {
    alert("Por favor, selecciona una opción para validar54.");
  } else if (!listaroja) {
    alert("Por favor, selecciona una opción para listaroja.");
  } else if (!validar55) {
    alert("Por favor, selecciona una opción para validar55.");
  } else if (!validar56) {
    alert("Por favor, selecciona una opción para validar56.");
  } else if (!validar57) {
    alert("Por favor, selecciona una opción para validar57.");
  } else if (cual58.trim() === "") {
    alert("Por favor, ingresa el valor para cual58.");
  }

  //Tabla Componente Ambiental

  const conservacion = document.getElementById("conservacion").value;

  // Tabla especies forestales
  const validar64 = document.getElementById("validar64").value;
  const validar65 = document.getElementById("validar65").value;
  const validar66 = document.getElementById("validar66").value;

  //Tablaespecies Leguminosas frutales

  const validar60 = document.getElementById("validar60").value;
  const validar62 = document.getElementById("validar62").value;
  const validar63 = document.getElementById("validar63").value;

  //Tabla de
  const validar67 = document.querySelector(
    'input[name="validar67"]:checked'
  ).value;

  const validar68 = document.querySelector(
    'input[name="validar68"]:checked'
  ).value;

  const validar69 = document.querySelector(
    'input[name="validar69"]:checked'
  ).value;

  const validar70 = document.querySelector(
    'input[name="validar70"]:checked'
  ).value;

  const validar72 = document.querySelector(
    'input[name="validar72"]:checked'
  ).value;

  const validar73 = document.querySelector(
    'input[name="validar73"]:checked'
  ).value;

  //Validacion de datos
  if (conservacion.trim() === "") {
    alert("Por favor, ingresa el valor para conservacion.");
  } else if (validar64.trim() === "") {
    alert("Por favor, ingresa el valor para validar64.");
  } else if (validar65.trim() === "") {
    alert("Por favor, ingresa el valor para validar65.");
  } else if (validar66.trim() === "") {
    alert("Por favor, ingresa el valor para validar66.");
  } else if (validar60.trim() === "") {
    alert("Por favor, ingresa el valor para validar60.");
  } else if (validar62.trim() === "") {
    alert("Por favor, ingresa el valor para validar62.");
  } else if (validar63.trim() === "") {
    alert("Por favor, ingresa el valor para validar63.");
  } else if (!validar67) {
    alert("Por favor, selecciona una opción para validar67.");
  } else if (!validar68) {
    alert("Por favor, selecciona una opción para validar68.");
  } else if (!validar69) {
    alert("Por favor, selecciona una opción para validar69.");
  } else if (!validar70) {
    alert("Por favor, selecciona una opción para validar70.");
  } else if (!validar72) {
    alert("Por favor, selecciona una opción para validar72.");
  } else if (!validar73) {
    alert("Por favor, selecciona una opción para validar73.");
  }

  //Tabla Beneficios

  const validar74 = document.querySelector(
    'input[name="validar74"]:checked'
  ).value;

  const validar75 = document.querySelector(
    'input[name="validar75"]:checked'
  ).value;

  const validar76 = document.querySelector(
    'input[name="validar76"]:checked'
  ).value;

  const validar77 = document.querySelector(
    'input[name="validar77"]:checked'
  ).value;

  const cuales = document.getElementById("cuales").value;

  const validar78 = document.querySelector(
    'input[name="validar78"]:checked'
  ).value;

  const validar79 = document.querySelector(
    'input[name="validar79"]:checked'
  ).value;

  const validar90 = document.querySelector(
    'input[name="validar90"]:checked'
  ).value;

  const validar80 = document.getElementById("validar80").value;

  const observacionessinco =
    document.getElementById("observacionessinco").value;

  //Ultima tabla de validacion

  if (!validar74) {
    alert("Por favor, selecciona una opción para validar74.");
  } else if (!validar75) {
    alert("Por favor, selecciona una opción para validar75.");
  } else if (!validar76) {
    alert("Por favor, selecciona una opción para validar76.");
  } else if (!validar77) {
    alert("Por favor, selecciona una opción para validar77.");
  } else if (cuales.trim() === "") {
    alert("Por favor, ingresa el valor para cuales.");
  } else if (!validar78) {
    alert("Por favor, selecciona una opción para validar78.");
  } else if (!validar79) {
    alert("Por favor, selecciona una opción para validar79.");
  } else if (!validar90) {
    alert("Por favor, selecciona una opción para validar90.");
  } else if (validar80.trim() === "") {
    alert("Por favor, ingresa el valor para validar80.");
  }

  // Crear un libro de Excel
  const workbook = XLSX.utils.book_new();

  // Crear una hoja de Excel
  const worksheet = XLSX.utils.json_to_sheet([
    {
      //Datos de la primera tabla
      Nombres: nombres,
      Apellidos: apellidos,
      Género: genero,
      "Número de cédula": cedula,
      "Número de celular": celular,
      "Código catastral": codigo_catastral,
      "Correo electrónico": correo_electronico,
      "Nivel educativo": nivel_educativo,
      Profesión: profesion,

      //Datos de acta diagnostico
      fecha: fecha,
      tipovisita: tipovisita,
      estatuspredio: estatuspredio,
      tematratado: tematratado,

      //Datos de la finca
      finca: finca,
      vereda: vereda,
      municipio: ciudades,

      //Datos de informacion especies
      lotes: lotes,
      planta: planta,
      surco: surco,
      numeroarboles: numeroarboles,
      area: area,
      sombra: sombra,
      pendiente: pendiente,

      //Datos otro campo finca
      AreatotalValorconsevacion: altovalor,
      Areasocial: areasoscial,
      Areatotal: areatotal,
      produccionArrobas: produccion,

      //MUNICIPIO Otros-cultivos
      Cultivo: cultivo,
      plantas: plantas,
      Surco: surcos,
      NumeroArboles: numarboles,
      Area: areaarboles,
      produccion: producciones,
      Areacultivos: areatotalarboles,

      //Tablavariedades
      Variedades: variedad,
      procesocafe: proceso,
      Cuentaconmapafinca: validar,
      fermentacionControlada: validar2,
      Latitud: latitud,
      Longitud: longitud,
      Altitud: altitud,
      CuentaAnalisisVigente: validar3,
      FechaultimoAnalisisdeSuelo: fecha2,
      ElasociadoViveFinca: validar4,
      CuntaconAdministrador: validar5,
      ManoObraFamiliar: validar6,
      LLevaRegistrosFacturas: validar7,
      Menoresdeedad: validar8,
      RangosEdad: rangos,
      ContrataMenores: validar9,
      Cuantos: cuantos,
      Personalpermanente: personal,
      NumeroPersonalTemporal: personaltemporal,

      //Tabla-Infraestructura
      MaquinaDespulpadora: validar20,
      TanquedeFermentacion: validar22,
      TanqueTina: validar23,
      Tolva: validar24,
      TolvaPlastica: validar26,
      Pisos: validar27,
      Paredes: validar28,
      Fosa: validar30,
      TipoBeneficio: validar32,
      Observaciones: observaciones,
      Marquesina: validar33,
      Elba: validar34,
      Silo: validar35,
      TipoSilo: validar36,
      KitPostKosecha: validar37,
      CapacidadsecadoSuficiente: suficiente,
      CapacidadsecadoInsuficiente: insuficiente,

      observaciones2: observaciones2,

      //Bodegas Tabla
      BodegasAgroquimicos: validar38,
      BodegaInsumos: validar39,
      BodegaHerramientas: validar40,
      BodegasPergamino: validar42,
      BodegasSeguras: validar43,
      BeneficiadoSeguro: validar44,
      InfraestrucuraBeneficiadero: validar45,
      Obsercaciones: observaciones3,

      //Tabla manejo BPA

      ElementosProteccionPersonal: validar46,
      KitAntiderrame: validar47,
      Extintor: validar48,
      ExistenagroquímicoslistarojaFairTradePredio: validar49,
      Especificar: especifar,
      Especificar: especificardos,
      Especificar: especificartres,
      ExistenAgroquimicosListaNaranja: validar50,
      UtilizaProductosBiologicosOrganicos: validar52,
      ZonaPreparacionDosificacion: validar53,
      EnvasesVaciosAgroquimicosFinca: validar54,
      AgroquimicosListaRoja: listaroja,
      CuentaconPuntoEcologico: validar55,
      FicaResiduosReciclablesPeligros: validar56,
      FincaPotencialCertificacion: validar57,
      Cual: cual58,
      Ultiobservaciones: observacionescuatro,

      //Componente Ambiental
      AreaConservacion: conservacion,

      //Especies Leguminosas
      NombreComunL: validar60,
      CantidadL: validar62,
      PorcentageL: validar63,

      //Especies forestales
      NombrecomunForestales: validar64,
      CantidadForestales: validar65,
      Porcentageforestales: validar66,

      //Alternativas-Aguas-Forestales
      PozoSeptico: validar67,
      Resumidero: validar68,
      ProcesoBeneficioCafe: validar69,
      SistemaTratamientoAguasMieles: validar70,
      SistemaArteAguasMieles: validar72,
      ResidualesDomesticas: validar73,

      //Descarga de aguas Residuales Domesticas
      InfiltracionalsuelocercadeAAVC: validar74,
      InfiltracionSuelo: validar75,
      DescargaFuentesHidricas: validar76,
      FaunaCautiverioEspeciesInvasoras: validar77,
      cualesF: cuales,
      PredioBarrerasAmortiguamiento: validar78,
      SeRespectaDistanciaAguasSociales: validar79,
      ProblemaserosionFinca: validar90,
      Ubicacion: validar80,
      ObservacionesResiduales: observacionessinco,
    },
  ]);

  // Agregar la hoja de Excel al libro
  XLSX.utils.book_append_sheet(workbook, worksheet, "Datos personales");

  // Descargar el archivo de Excel
  XLSX.writeFile(workbook, "datos_personales.xlsx");

  console.log("Datos exportados a Excel correctamente");
}
