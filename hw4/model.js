//var jsonModel;
var pilot;

function ModelInit()
{
	/*pilot = new THREE.Object3D();

    var jsonLoader = new THREE.JSONLoader();
    jsonLoader.load("model/mario-sculpture.json",//"http://jyunming-chen.github.io/tutsplus/models/android.json",
    	addModelToScene());*/

	var loader = new THREE.OBJMTLLoader();
	loader.load ('model/han.obj', 'model/han.mtl', 
		function (object) {
			pilot = object;
			body.add( pilot );
			pilot.scale.set (5.5, 5.5, 5.5);
			pilot.rotation.order = 'YXZ';
			pilot.rotation.y = Math.PI/2;
			pilot.position.set (-10, -2, 2);

			pilot.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
				    child.castShadow = true;
				    child.receiveShadow = true;
				}
			});
		}
	);
}

/*function addModelToScene(geometry, materials) {
    var material = new THREE.MeshFaceMaterial(materials);
    jsonModel = new THREE.Mesh(geometry, material);
    jsonModel.scale.set(4, 4, 4);
    jsonModel.rotation.y = Math.PI/2; // default: back face +z
    pilot.add(jsonModel);
}*/