
function loadCubemap() {

  var path = "textures/galaxy/";
  var format = '.jpg';
  var urls = [
    path + 'px' + format, path + 'nx' + format,
    path + 'py' + format, path + 'ny' + format,
    path + 'pz' + format, path + 'nz' + format
  ];
  var loader = new THREE.CubeTextureLoader();
  loader.setCrossOrigin ('');
  var cubeMap = loader.load(urls);
  cubeMap.format = THREE.RGBFormat;
  return cubeMap;
  
}
