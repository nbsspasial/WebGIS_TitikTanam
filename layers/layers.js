var wms_layers = [];

// Tambahkan ini di bagian awal layers.js
function createPatternFillFromUrl(url, callback) {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const pattern = ctx.createPattern(canvas, "repeat");
    callback(new ol.style.Fill({ color: pattern }));
  };
}

let bmFill = null;
let btFill = null;
createPatternFillFromUrl("images/bm_pattern.svg", (fill) => (bmFill = fill));
createPatternFillFromUrl("images/bt_pattern.svg", (fill) => (btFill = fill));

// Ubah function style kategori LC_ANIP_2024_0
function categories_TutupanLahan_0(
  feature,
  value,
  size,
  resolution,
  labelText,
  labelFont,
  labelFill,
  bufferColor,
  bufferWidth,
  placement
) {
  const defaultFill = new ol.style.Fill({ color: "rgba(142,61,223,1.0)" });
  const stroke = new ol.style.Stroke({
    color: "rgba(35,35,35,1.0)",
    width: 0.988,
  });

  let fill;

  switch (value) {
    case "Bm":
      fill = bmFill || defaultFill;
      break;
    case "Bt":
      fill = btFill || defaultFill;
      break;
    case "Hlkp":
      fill = new ol.style.Fill({ color: "rgba(0,136,14,1.0)" });
      break;
    case "Hlks":
      fill = new ol.style.Fill({ color: "rgba(0,230,31,1.0)" });
      break;
    case "Sm":
      fill = new ol.style.Fill({ color: "rgba(186,255,121,1.0)" });
      break;
    case "Tt":
      fill = new ol.style.Fill({ color: "rgba(255,206,145,1.0)" });
      break;
    default:
      fill = defaultFill;
      break;
  }

  return [
    new ol.style.Style({
      stroke: stroke,
      fill: fill,
      text: createTextStyle(
        feature,
        resolution,
        labelText,
        labelFont,
        labelFill,
        placement,
        bufferColor,
        bufferWidth
      ),
    }),
  ];
}

var format_TutupanLahan_0 = new ol.format.GeoJSON();
var features_TutupanLahan_0 = format_TutupanLahan_0.readFeatures(
  json_TutupanLahan_0,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_TutupanLahan_0 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_TutupanLahan_0.addFeatures(features_TutupanLahan_0);
var lyr_TutupanLahan_0 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_TutupanLahan_0,
  style: style_TutupanLahan_0,
  popuplayertitle: "Tutupan Lahan",
  interactive: false,
  title:
    'Tutupan Lahan<br />\
    <img src="styles/legend/TutupanLahan_0_0.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/TutupanLahan_0_1.png" /> Semak<br />\
    <img src="styles/legend/TutupanLahan_0_2.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/TutupanLahan_0_3.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/TutupanLahan_0_4.png" /> Belukar Tua<br />\
    <img src="styles/legend/TutupanLahan_0_5.png" /> Belukar Muda<br />',
});
var format_BatasBlok_1 = new ol.format.GeoJSON();
var features_BatasBlok_1 = format_BatasBlok_1.readFeatures(json_BatasBlok_1, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_BatasBlok_1 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasBlok_1.addFeatures(features_BatasBlok_1);
var lyr_BatasBlok_1 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BatasBlok_1,
  style: style_BatasBlok_1,
  popuplayertitle: "Batas Blok",
  interactive: false,
  title: '<img src="styles/legend/BatasBlok_1.png" /> Batas Blok',
});
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_Sungai_2 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_Sungai_2,
  style: style_Sungai_2,
  popuplayertitle: "Sungai",
  interactive: false,
  title: '<img src="styles/legend/Sungai_2.png" /> Sungai',
});
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_Jalan_3 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_Jalan_3,
  style: style_Jalan_3,
  popuplayertitle: "Jalan",
  interactive: false,
  title: '<img src="styles/legend/Jalan_3.png" /> Jalan',
});
var format_BatasDesa_4 = new ol.format.GeoJSON();
var features_BatasDesa_4 = format_BatasDesa_4.readFeatures(json_BatasDesa_4, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_BatasDesa_4 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasDesa_4.addFeatures(features_BatasDesa_4);
var lyr_BatasDesa_4 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BatasDesa_4,
  style: style_BatasDesa_4,
  popuplayertitle: "Batas Desa",
  interactive: false,
  title: '<img src="styles/legend/BatasDesa_4.png" /> Batas Desa',
});
var format_BatasKabupaten_5 = new ol.format.GeoJSON();
var features_BatasKabupaten_5 = format_BatasKabupaten_5.readFeatures(
  json_BatasKabupaten_5,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_BatasKabupaten_5 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasKabupaten_5.addFeatures(features_BatasKabupaten_5);
var lyr_BatasKabupaten_5 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BatasKabupaten_5,
  style: style_BatasKabupaten_5,
  popuplayertitle: "Batas Kabupaten",
  interactive: false,
  title: '<img src="styles/legend/BatasKabupaten_5.png" /> Batas Kabupaten',
});
var format_KerangkaPTANIP_6 = new ol.format.GeoJSON();
var features_KerangkaPTANIP_6 = format_KerangkaPTANIP_6.readFeatures(
  json_KerangkaPTANIP_6,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_KerangkaPTANIP_6 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_KerangkaPTANIP_6.addFeatures(features_KerangkaPTANIP_6);
var lyr_KerangkaPTANIP_6 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_KerangkaPTANIP_6,
  style: style_KerangkaPTANIP_6,
  popuplayertitle: "Kerangka PT ANIP",
  interactive: false,
  title: '<img src="styles/legend/KerangkaPTANIP_6.png" /> Kerangka PT ANIP',
});
var format_ARRActivePlanting_7 = new ol.format.GeoJSON();
var features_ARRActivePlanting_7 = format_ARRActivePlanting_7.readFeatures(
  json_ARRActivePlanting_7,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_ARRActivePlanting_7 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_ARRActivePlanting_7.addFeatures(features_ARRActivePlanting_7);
var lyr_ARRActivePlanting_7 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_ARRActivePlanting_7,
  style: style_ARRActivePlanting_7,
  popuplayertitle: "ARR (Active Planting)",
  interactive: false,
  title:
    '<img src="styles/legend/ARRActivePlanting_7.png" /> ARR (Active Planting)',
});
var format_JenisBibit_8 = new ol.format.GeoJSON();
var features_JenisBibit_8 = format_JenisBibit_8.readFeatures(
  json_JenisBibit_8,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_JenisBibit_8 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_JenisBibit_8.addFeatures(features_JenisBibit_8);
var lyr_JenisBibit_8 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_JenisBibit_8,
  style: style_JenisBibit_8,
  popuplayertitle: "Bibit Diverifikasi",
  interactive: true,
  title:
    'Jenis Bibit<br />\
    <img src="styles/legend/JenisBibit_8_0.png" /> Medang Sirih (Non Standard)<br />\
    <img src="styles/legend/JenisBibit_8_1.png" /> Medang Sirih (Standard)<br />\
    <img src="styles/legend/JenisBibit_8_2.png" /> Meranti (Non Standard)<br />\
    <img src="styles/legend/JenisBibit_8_3.png" /> Meranti (Standard)<br />\
    <img src="styles/legend/JenisBibit_8_4.png" /> Pinus (Mati)<br />\
    <img src="styles/legend/JenisBibit_8_5.png" /> Pinus (Non Standard)<br />\
    <img src="styles/legend/JenisBibit_8_6.png" /> Pinus (Standard)<br />',
});
var format_Titik_9 = new ol.format.GeoJSON();
var features_Titik_9 = format_Titik_9.readFeatures(json_Titik_9, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_Titik_9 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Titik_9.addFeatures(features_Titik_9);
var lyr_Titik_9 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_Titik_9,
  style: style_Titik_9,
  popuplayertitle: "Titik",
  interactive: false,
  title:
    'Titik<br />\
    <img src="styles/legend/Titik_9_0.png" /> Camp<br />\
    <img src="styles/legend/Titik_9_1.png" /> Sumber air<br />',
});

lyr_TutupanLahan_0.setVisible(true);
lyr_BatasBlok_1.setVisible(true);
lyr_Sungai_2.setVisible(true);
lyr_Jalan_3.setVisible(true);
lyr_BatasDesa_4.setVisible(true);
lyr_BatasKabupaten_5.setVisible(true);
lyr_KerangkaPTANIP_6.setVisible(true);
lyr_ARRActivePlanting_7.setVisible(true);
lyr_JenisBibit_8.setVisible(true);
lyr_Titik_9.setVisible(true);
var layersList = [
  lyr_TutupanLahan_0,
  lyr_Sungai_2,
  lyr_Jalan_3,
  lyr_BatasDesa_4,
  lyr_BatasKabupaten_5,
  lyr_KerangkaPTANIP_6,
  lyr_ARRActivePlanting_7,
  lyr_BatasBlok_1,
  lyr_JenisBibit_8,
  lyr_Titik_9,
];
lyr_TutupanLahan_0.set("fieldAliases", {
  FID_LC_ANI: "FID_LC_ANI",
  LC_ver: "LC_ver",
  FID_ID_Pet: "FID_ID_Pet",
  OBJECTID: "OBJECTID",
  ID_PETAK_I: "ID_PETAK_I",
  ket: "ket",
  Shape_Leng: "Shape_Leng",
  Shape_Area: "Shape_Area",
});
lyr_BatasBlok_1.set("fieldAliases", {
  OBJECTID_1: "OBJECTID_1",
  OBJECTID: "OBJECTID",
  ID_Petak: "ID_Petak",
  Luas: "Luas",
  Luas_Ha: "Luas_Ha",
  Shape_Leng: "Shape_Leng",
  Shape_Area: "Shape_Area",
});
lyr_Sungai_2.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  NAMOBJ: "NAMOBJ",
  FCODE: "FCODE",
  REMARK: "REMARK",
  METADATA: "METADATA",
  SRS_ID: "SRS_ID",
  ADATGL: "ADATGL",
  DMAX: "DMAX",
  FNGAIR: "FNGAIR",
  JNSSNG: "JNSSNG",
  KLSSNG: "KLSSNG",
  LTKSGI: "LTKSGI",
  NAMWS: "NAMWS",
  STATUS: "STATUS",
  UKRSGI: "UKRSGI",
  WMAX: "WMAX",
  DBTMXS: "DBTMXS",
  NAMDAS: "NAMDAS",
  Keterangan: "Keterangan",
  Panjang: "Panjang",
  SHAPE_Leng: "SHAPE_Leng",
});
lyr_Jalan_3.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  NAMOBJ: "NAMOBJ",
  FCODE: "FCODE",
  REMARK: "REMARK",
  METADATA: "METADATA",
  SRS_ID: "SRS_ID",
  ARHRJL: "ARHRJL",
  AUTRJL: "AUTRJL",
  FGSRJL: "FGSRJL",
  JARRJL: "JARRJL",
  JPARJL: "JPARJL",
  KLLRJL: "KLLRJL",
  KONRJL: "KONRJL",
  KPMSTR: "KPMSTR",
  LKONOF: "LKONOF",
  LKSBSP: "LKSBSP",
  LKSRTA: "LKSRTA",
  LLHRRT: "LLHRRT",
  LOCRJL: "LOCRJL",
  LBRBHJ: "LBRBHJ",
  LBRJLN: "LBRJLN",
  MATRJL: "MATRJL",
  MEDRJL: "MEDRJL",
  SPCRJL: "SPCRJL",
  STARJL: "STARJL",
  TOLRJL: "TOLRJL",
  UTKRJL: "UTKRJL",
  VLCPRT: "VLCPRT",
  WLYRJL: "WLYRJL",
  TGL_SK: "TGL_SK",
  JLNLYG: "JLNLYG",
  KLSRJL: "KLSRJL",
  Shape_Leng: "Shape_Leng",
});
lyr_BatasDesa_4.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  NAMOBJ: "NAMOBJ",
  FCODE: "FCODE",
  REMARK: "REMARK",
  METADATA: "METADATA",
  SRS_ID: "SRS_ID",
  KDBBPS: "KDBBPS",
  KDCBPS: "KDCBPS",
  KDCPUM: "KDCPUM",
  KDEBPS: "KDEBPS",
  KDEPUM: "KDEPUM",
  KDPBPS: "KDPBPS",
  KDPKAB: "KDPKAB",
  KDPPUM: "KDPPUM",
  LUASWH: "LUASWH",
  TIPADM: "TIPADM",
  WADMKC: "WADMKC",
  WADMKD: "WADMKD",
  WADMKK: "WADMKK",
  WADMPR: "WADMPR",
  WIADKC: "WIADKC",
  WIADKK: "WIADKK",
  WIADPR: "WIADPR",
  WIADKD: "WIADKD",
  UUPP: "UUPP",
  LUAS: "LUAS",
  Desa: "Desa",
  Kecamatan: "Kecamatan",
  Kabupaten: "Kabupaten",
  Provinsi: "Provinsi",
  SL: "SL",
  luas_cek: "luas_cek",
  DP: "DP",
  JUDUL: "JUDUL",
});
lyr_BatasKabupaten_5.set("fieldAliases", { WADMKK: "WADMKK" });
lyr_KerangkaPTANIP_6.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  Shape_Leng: "Shape_Leng",
  Shape_Area: "Shape_Area",
  HA: "HA",
  LUAS_cek: "LUAS_cek",
  ket: "ket",
});
lyr_ARRActivePlanting_7.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  ket: "ket",
  Activity: "Activity",
  ID_Petak: "ID_Petak",
  Shape_Leng: "Shape_Leng",
  Shape_Area: "Shape_Area",
  luas: "luas",
});
lyr_JenisBibit_8.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  Name: "Name",
  FolderPath: "FolderPath",
  kode_unik: "Kode Unik",
  nmr: "nmr",
  Kode_Uni_1: "Kode_Uni_1",
  Pilih_Blok: "ID Blok",
  Tanggal: "Tanggal Verifikasi",
  Tim: "Tim Verifikator",
  Anggota: "PIC",
  ID: "Nomor Pokok",
  Jenis_Bibi: "Jenis Bibit",
  Sesuai_Sta: "Sesuai Standard",
  Tanaman_di: "Tanaman diikat pada Ajir dengan Rafia",
  Pembabatan: "Pembabatan Jalur",
  Pemasangan: "Pemasangan Ajir",
  Pembuatan: "Pembuatan Lubang Tanam",
  Pengaplika: "Pengaplikasian Pupuk Dasar",
  Media_Dasa: "Media Dasar Bibit, Rata dengan Tanah",
  Pemadatan: "Pemadatan Tanah",
  Keterangan: "Keterangan",
  File: "File",
  Foto: "Foto",
  //   simbology: "simbology",
});
lyr_Titik_9.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  Path: "Path",
  Name: "Name",
  DateTime: "DateTime",
  Direction: "Direction",
  keterangan: "keterangan",
});
lyr_TutupanLahan_0.set("fieldImages", {
  FID_LC_ANI: "TextEdit",
  LC_ver: "TextEdit",
  FID_ID_Pet: "TextEdit",
  OBJECTID: "TextEdit",
  ID_PETAK_I: "TextEdit",
  ket: "TextEdit",
  Shape_Leng: "TextEdit",
  Shape_Area: "TextEdit",
});
lyr_BatasBlok_1.set("fieldImages", {
  OBJECTID_1: "TextEdit",
  OBJECTID: "TextEdit",
  ID_Petak: "TextEdit",
  Luas: "TextEdit",
  Luas_Ha: "TextEdit",
  Shape_Leng: "TextEdit",
  Shape_Area: "TextEdit",
});
lyr_Sungai_2.set("fieldImages", {
  OBJECTID: "TextEdit",
  NAMOBJ: "TextEdit",
  FCODE: "TextEdit",
  REMARK: "TextEdit",
  METADATA: "TextEdit",
  SRS_ID: "TextEdit",
  ADATGL: "TextEdit",
  DMAX: "TextEdit",
  FNGAIR: "TextEdit",
  JNSSNG: "TextEdit",
  KLSSNG: "TextEdit",
  LTKSGI: "TextEdit",
  NAMWS: "TextEdit",
  STATUS: "TextEdit",
  UKRSGI: "TextEdit",
  WMAX: "TextEdit",
  DBTMXS: "TextEdit",
  NAMDAS: "TextEdit",
  Keterangan: "TextEdit",
  Panjang: "TextEdit",
  SHAPE_Leng: "TextEdit",
});
lyr_Jalan_3.set("fieldImages", {
  OBJECTID: "TextEdit",
  NAMOBJ: "TextEdit",
  FCODE: "TextEdit",
  REMARK: "TextEdit",
  METADATA: "TextEdit",
  SRS_ID: "TextEdit",
  ARHRJL: "TextEdit",
  AUTRJL: "TextEdit",
  FGSRJL: "TextEdit",
  JARRJL: "TextEdit",
  JPARJL: "TextEdit",
  KLLRJL: "TextEdit",
  KONRJL: "TextEdit",
  KPMSTR: "TextEdit",
  LKONOF: "TextEdit",
  LKSBSP: "TextEdit",
  LKSRTA: "TextEdit",
  LLHRRT: "TextEdit",
  LOCRJL: "TextEdit",
  LBRBHJ: "TextEdit",
  LBRJLN: "TextEdit",
  MATRJL: "TextEdit",
  MEDRJL: "TextEdit",
  SPCRJL: "TextEdit",
  STARJL: "TextEdit",
  TOLRJL: "TextEdit",
  UTKRJL: "TextEdit",
  VLCPRT: "TextEdit",
  WLYRJL: "TextEdit",
  TGL_SK: "DateTime",
  JLNLYG: "TextEdit",
  KLSRJL: "TextEdit",
  Shape_Leng: "TextEdit",
});
lyr_BatasDesa_4.set("fieldImages", {
  OBJECTID: "TextEdit",
  NAMOBJ: "TextEdit",
  FCODE: "TextEdit",
  REMARK: "TextEdit",
  METADATA: "TextEdit",
  SRS_ID: "TextEdit",
  KDBBPS: "TextEdit",
  KDCBPS: "TextEdit",
  KDCPUM: "TextEdit",
  KDEBPS: "TextEdit",
  KDEPUM: "TextEdit",
  KDPBPS: "TextEdit",
  KDPKAB: "TextEdit",
  KDPPUM: "TextEdit",
  LUASWH: "TextEdit",
  TIPADM: "TextEdit",
  WADMKC: "TextEdit",
  WADMKD: "TextEdit",
  WADMKK: "TextEdit",
  WADMPR: "TextEdit",
  WIADKC: "TextEdit",
  WIADKK: "TextEdit",
  WIADPR: "TextEdit",
  WIADKD: "TextEdit",
  UUPP: "TextEdit",
  LUAS: "TextEdit",
  Desa: "TextEdit",
  Kecamatan: "TextEdit",
  Kabupaten: "TextEdit",
  Provinsi: "TextEdit",
  SL: "TextEdit",
  luas_cek: "TextEdit",
  DP: "TextEdit",
  JUDUL: "TextEdit",
});
lyr_BatasKabupaten_5.set("fieldImages", { WADMKK: "TextEdit" });
lyr_KerangkaPTANIP_6.set("fieldImages", {
  OBJECTID: "TextEdit",
  Shape_Leng: "TextEdit",
  Shape_Area: "TextEdit",
  HA: "TextEdit",
  LUAS_cek: "TextEdit",
  ket: "TextEdit",
});
lyr_ARRActivePlanting_7.set("fieldImages", {
  OBJECTID: "TextEdit",
  ket: "TextEdit",
  Activity: "TextEdit",
  ID_Petak: "TextEdit",
  Shape_Leng: "TextEdit",
  Shape_Area: "TextEdit",
  luas: "TextEdit",
});
lyr_JenisBibit_8.set("fieldImages", {
  OBJECTID: "Hidden",
  Name: "Hidden",
  FolderPath: "Hidden",
  kode_unik: "TextEdit",
  nmr: "Hidden",
  Kode_Uni_1: "Hidden",
  Pilih_Blok: "TextEdit",
  Tanggal: "TextEdit",
  Tim: "TextEdit",
  Anggota: "TextEdit",
  ID: "TextEdit",
  Jenis_Bibi: "TextEdit",
  Sesuai_Sta: "TextEdit",
  Tanaman_di: "TextEdit",
  Pembabatan: "TextEdit",
  Pemasangan: "TextEdit",
  Pembuatan: "TextEdit",
  Pengaplika: "TextEdit",
  Media_Dasa: "TextEdit",
  Pemadatan: "TextEdit",
  Keterangan: "Hidden",
  File: "Hidden",
  Foto: "ExternalResource",
  //   simbology: "Hidden",
});
lyr_Titik_9.set("fieldImages", {
  OBJECTID: "TextEdit",
  Path: "TextEdit",
  Name: "TextEdit",
  DateTime: "TextEdit",
  Direction: "TextEdit",
  keterangan: "TextEdit",
});
lyr_TutupanLahan_0.set("fieldLabels", {
  FID_LC_ANI: "no label",
  LC_ver: "no label",
  FID_ID_Pet: "no label",
  OBJECTID: "no label",
  ID_PETAK_I: "no label",
  ket: "no label",
  Shape_Leng: "no label",
  Shape_Area: "no label",
});
lyr_BatasBlok_1.set("fieldLabels", {
  OBJECTID_1: "no label",
  OBJECTID: "no label",
  ID_Petak: "no label",
  Luas: "no label",
  Luas_Ha: "no label",
  Shape_Leng: "no label",
  Shape_Area: "no label",
});
lyr_Sungai_2.set("fieldLabels", {
  OBJECTID: "no label",
  NAMOBJ: "no label",
  FCODE: "no label",
  REMARK: "no label",
  METADATA: "no label",
  SRS_ID: "no label",
  ADATGL: "no label",
  DMAX: "no label",
  FNGAIR: "no label",
  JNSSNG: "no label",
  KLSSNG: "no label",
  LTKSGI: "no label",
  NAMWS: "no label",
  STATUS: "no label",
  UKRSGI: "no label",
  WMAX: "no label",
  DBTMXS: "no label",
  NAMDAS: "no label",
  Keterangan: "no label",
  Panjang: "no label",
  SHAPE_Leng: "no label",
});
lyr_Jalan_3.set("fieldLabels", {
  OBJECTID: "no label",
  NAMOBJ: "no label",
  FCODE: "no label",
  REMARK: "no label",
  METADATA: "no label",
  SRS_ID: "no label",
  ARHRJL: "no label",
  AUTRJL: "no label",
  FGSRJL: "no label",
  JARRJL: "no label",
  JPARJL: "no label",
  KLLRJL: "no label",
  KONRJL: "no label",
  KPMSTR: "no label",
  LKONOF: "no label",
  LKSBSP: "no label",
  LKSRTA: "no label",
  LLHRRT: "no label",
  LOCRJL: "no label",
  LBRBHJ: "no label",
  LBRJLN: "no label",
  MATRJL: "no label",
  MEDRJL: "no label",
  SPCRJL: "no label",
  STARJL: "no label",
  TOLRJL: "no label",
  UTKRJL: "no label",
  VLCPRT: "no label",
  WLYRJL: "no label",
  TGL_SK: "no label",
  JLNLYG: "no label",
  KLSRJL: "no label",
  Shape_Leng: "no label",
});
lyr_BatasDesa_4.set("fieldLabels", {
  OBJECTID: "no label",
  NAMOBJ: "no label",
  FCODE: "no label",
  REMARK: "no label",
  METADATA: "no label",
  SRS_ID: "no label",
  KDBBPS: "no label",
  KDCBPS: "no label",
  KDCPUM: "no label",
  KDEBPS: "no label",
  KDEPUM: "no label",
  KDPBPS: "no label",
  KDPKAB: "no label",
  KDPPUM: "no label",
  LUASWH: "no label",
  TIPADM: "no label",
  WADMKC: "no label",
  WADMKD: "no label",
  WADMKK: "no label",
  WADMPR: "no label",
  WIADKC: "no label",
  WIADKK: "no label",
  WIADPR: "no label",
  WIADKD: "no label",
  UUPP: "no label",
  LUAS: "no label",
  Desa: "no label",
  Kecamatan: "no label",
  Kabupaten: "no label",
  Provinsi: "no label",
  SL: "no label",
  luas_cek: "no label",
  DP: "no label",
  JUDUL: "no label",
});
lyr_BatasKabupaten_5.set("fieldLabels", { WADMKK: "no label" });
lyr_KerangkaPTANIP_6.set("fieldLabels", {
  OBJECTID: "no label",
  Shape_Leng: "no label",
  Shape_Area: "no label",
  HA: "no label",
  LUAS_cek: "no label",
  ket: "no label",
});
lyr_ARRActivePlanting_7.set("fieldLabels", {
  OBJECTID: "no label",
  ket: "no label",
  Activity: "no label",
  ID_Petak: "no label",
  Shape_Leng: "no label",
  Shape_Area: "no label",
  luas: "no label",
});
lyr_JenisBibit_8.set("fieldLabels", {
  kode_unik: "inline label - always visible",
  Pilih_Blok: "inline label - always visible",
  Tanggal: "inline label - always visible",
  Tim: "inline label - always visible",
  Anggota: "inline label - always visible",
  ID: "inline label - always visible",
  Jenis_Bibi: "inline label - always visible",
  Sesuai_Sta: "inline label - always visible",
  Tanaman_di: "inline label - always visible",
  Pembabatan: "inline label - always visible",
  Pemasangan: "inline label - always visible",
  Pembuatan: "inline label - always visible",
  Pengaplika: "inline label - always visible",
  Media_Dasa: "inline label - always visible",
  Pemadatan: "inline label - always visible",
  Foto: "no label",
});
lyr_Titik_9.set("fieldLabels", {
  OBJECTID: "no label",
  Path: "no label",
  Name: "no label",
  DateTime: "no label",
  Direction: "no label",
  keterangan: "no label",
});
lyr_Titik_9.on("precompose", function (evt) {
  evt.context.globalCompositeOperation = "normal";
});
