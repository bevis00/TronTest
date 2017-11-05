
function buildPlanes() {

  var material = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    visible:false
  });

  var plane = new THREE.Mesh(new THREE.PlaneGeometry(150, 150, 32, 32), material);

  return plane;

}

function buildSkyBox() {

  var materialArray = [];
  var texture = new THREE.TextureLoader();
  texture.setCrossOrigin('');
  
  materialArray.push(new THREE.MeshBasicMaterial( { 
    map: texture.load ("textures/galaxy/px.jpg"),
    side: THREE.BackSide
  })); 
  materialArray.push(new THREE.MeshBasicMaterial( { 
    map: texture.load ("textures/galaxy/nx.jpg"),
    side: THREE.BackSide
  }));
  materialArray.push(new THREE.MeshBasicMaterial( { 
    map: texture.load ("textures/galaxy/py.jpg"),
    side: THREE.BackSide
  }));
  materialArray.push(new THREE.MeshBasicMaterial( { 
    map: texture.load ("textures/galaxy/ny.jpg"),
    side: THREE.BackSide
  }));
  materialArray.push(new THREE.MeshBasicMaterial( { 
    map: texture.load ("textures/galaxy/pz.jpg"),
    side: THREE.BackSide
  })); 
  materialArray.push(new THREE.MeshBasicMaterial( { 
    map: texture.load ("textures/galaxy/nz.jpg"),
    side: THREE.BackSide
  })); 
  
  var material = new THREE.MultiMaterial(materialArray);
  
  var skybox = new THREE.Mesh(new THREE.BoxGeometry(5000, 5000, 5000), material);

  return skybox;

}

function buildMiniLinePlanes() {

  var material = new THREE.LineBasicMaterial({
    color: "red"
  });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( 75, 70, 70 ),
    new THREE.Vector3( 75, 70, -70 ),
    new THREE.Vector3( 75, -70, -70 ),
    new THREE.Vector3( 75, -70, 70 ),
    new THREE.Vector3( 75, 70, 70 )
  );

  var pxLine = new THREE.Line( geometry, material );
  scene2.add( pxLine );
  
  ////////////////////////////////////////////////////////////////////////
  
  var material = new THREE.LineDashedMaterial( {
    color: "red",
    dashSize: 10,
    gapSize: 5
  } );

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( -75, 70, 70 ),
    new THREE.Vector3( -75, 70, -70 ),
    new THREE.Vector3( -75, -70, -70 ),
    new THREE.Vector3( -75, -70, 70 ),
    new THREE.Vector3( -75, 70, 70 )
  );
  geometry.computeLineDistances();

  var nxLine = new THREE.Line( geometry, material );
  scene2.add( nxLine );

  ////////////////////////////////////////////////////////////////////////
  
  var material = new THREE.LineBasicMaterial({
    color: 0x14ff00
  });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( -70, 75, -70 ),
    new THREE.Vector3( 70, 75, -70 ),
    new THREE.Vector3( 70, 75, 70 ),
    new THREE.Vector3( -70, 75, 70 ),
    new THREE.Vector3( -70, 75, -70 )
  );

  var pyLine = new THREE.Line( geometry, material );
  scene2.add( pyLine );
  
  ////////////////////////////////////////////////////////////////////////

  var material = new THREE.LineDashedMaterial( {
    color: 0x14ff00,
    dashSize: 10,
    gapSize: 5
  } );

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( -70, -75, -70 ),
    new THREE.Vector3( 70, -75, -70 ),
    new THREE.Vector3( 70, -75, 70 ),
    new THREE.Vector3( -70, -75, 70 ),
    new THREE.Vector3( -70, -75, -70)
  );
  geometry.computeLineDistances();

  var nyLine = new THREE.Line( geometry, material );
  scene2.add( nyLine );
  
  ////////////////////////////////////////////////////////////////////////
  
  var material = new THREE.LineBasicMaterial({
    color: "blue"
  });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( -70, 70, 75 ),
    new THREE.Vector3( 70, 70, 75 ),
    new THREE.Vector3( 70, -70, 75 ),
    new THREE.Vector3( -70, -70, 75 ),
    new THREE.Vector3( -70, 70, 75 )
  );

  var pzLine = new THREE.Line( geometry, material );
  scene2.add( pzLine );
  
  ////////////////////////////////////////////////////////////////////////
  
  var material = new THREE.LineDashedMaterial( {
    color: "blue",
    dashSize: 10,
    gapSize: 5
  } );

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3( -70, 70, -75 ),
    new THREE.Vector3( 70, 70, -75 ),
    new THREE.Vector3( 70, -70, -75 ),
    new THREE.Vector3( -70, -70, -75 ),
    new THREE.Vector3( -70, 70, -75 )
  );
  geometry.computeLineDistances();

  var nzLine = new THREE.Line( geometry, material );
  scene2.add( nzLine );

}

function buildHintLine(){

  var material = new THREE.LineBasicMaterial({
    color: "red"
  });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    head.localToWorld(new THREE.Vector3(0, 0, 0)),
    targetTemp    
  );

  hintLine = new THREE.Line( geometry, material );
  scene.add(hintLine);

}

function buildTank() {

  var tank = new THREE.Object3D();
  var body = new THREE.Mesh(new THREE.BoxGeometry(20, 3, 10), new THREE.MeshBasicMaterial({
    color: 0x005121
  }));

  body.position.y = 1.5;
  tank.add(body);

  return tank;

}

function buildTarget(){

  var target = new THREE.Mesh(new THREE.CylinderGeometry(3,3,1.5,35),new THREE.MeshBasicMaterial({
    color: 0xf7ffaa}));

  return target;

}

function buildMiniTarget(){

  var miniTarget = new THREE.Mesh(new THREE.SphereGeometry(5), new THREE.MeshBasicMaterial({
      color: 0xff0000,
    }));

  return miniTarget;

}

function buildBrick() {

  var materialArray = [];
  var texture = new THREE.TextureLoader();
  texture.setCrossOrigin('');

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/cHr0Wrf.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/cHr0Wrf.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/6NrElLW.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( {side: THREE.BackSide}));

  var material = new THREE.MeshFaceMaterial(materialArray);


  var brick = new THREE.Mesh(new THREE.BoxGeometry(10, 6, 7), material);
  brick.receiveShadow = true;
  return brick;

}

function buildBrick2() {

  var materialArray = [];
  var texture = new THREE.TextureLoader();
  texture.setCrossOrigin('');

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/1kTTQZp.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/1kTTQZp.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/ngyedRi.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( {side: THREE.BackSide}));

  var material = new THREE.MeshFaceMaterial(materialArray);

  var brick = new THREE.Mesh(new THREE.BoxGeometry(5, 6, 7), material);
  brick.receiveShadow = true;
  return brick;

}

function buildLightBall() {

  ballLight = new THREE.PointLight( 0xff0000, 2, 50 );

  ball = new THREE.Mesh(new THREE.SphereGeometry(0.9), new THREE.MeshLambertMaterial({
      color: 0xff0000,
    }));
  ball.add(ballLight);
  scene.add(ball);

}

function buildBigBall() {

  bigBall = new THREE.Mesh(new THREE.SphereGeometry(40,32,32), material);
  bigBall.name = "Breakout";
  ball.visible = false;
  pickables.push(bigBall);
  scene.add(bigBall);

}

function buildLight() {

  var ambLight = new THREE.AmbientLight( 0x303030 ); // soft white light
  scene.add( ambLight );

  var pointLight1 = new THREE.PointLight( 0xffffff, 1, 115 );
	pointLight1.position.set( -37.5, 37.5, -37.5 );
	scene.add( pointLight1 );

  var pointLight2 = new THREE.PointLight( 0xffffff, 1, 115 );
	pointLight2.position.set( -37.5, 37.5, 37.5 );
	scene.add( pointLight2 );

  var pointLight3 = new THREE.PointLight( 0xffffff, 1, 115 );
	pointLight3.position.set( 37.5, -37.5, -37.5 );
	scene.add( pointLight3 );

  var pointLight4 = new THREE.PointLight( 0xffffff, 1, 115 );
	pointLight4.position.set( 37.5, -37.5, 37.5 );
	scene.add( pointLight4 );

  var pointLightMid = new THREE.PointLight (0xffffff, 1, 200);
  pointLightMid.position.set(0,0,0);
  pointLightMid.castShadow = true;
  pointLightMid.shadow.mapSize.width = pointLightMid.shadow.mapSize.height = 1024;
  scene.add(pointLightMid);
  pointLightMid.shadow.bias = -.0001

}

function buildWall(){

  brick1 = buildBrick();
  brick2 = buildBrick2();

  for(var i = 0; i < 362; i++)
    wallPx[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallPx[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallPx[i].rotation.y = -Math.PI / 2;
    wallPx[i].name = "wallPx";

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallPx[count].position.set(78.5, 72 - i * 12, -65 + j * 10);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallPx[count].position.set(78.5, 66 - i * 12, -70 + j * 10);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallPx[count].position.set(78.5, 72 - i * 12, -72.5 + j * 145);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallNx[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallNx[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallNx[i].rotation.y = Math.PI / 2;
    wallNx[i].name = "wallNx";
    wallNx[i].material.color = new THREE.Color(0x8749b7);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallNx[count].position.set(-78.5, 72 - i * 12, 65 - j * 10);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallNx[count].position.set(-78.5, 66 - i * 12, 70 - j * 10);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallNx[count].position.set(-78.5, 72 - i * 12, 72.5 - j * 145);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallPy[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallPy[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallPy[i].rotation.x = Math.PI / 2;
    wallPy[i].name = "wallPy";
    wallPy[i].material.color = new THREE.Color(0x408449);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallPy[count].position.set(-65 + j * 10, 78.5, 72 - i * 12);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallPy[count].position.set(-70 + j * 10, 78.5, 66 - i * 12);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallPy[count].position.set(-72.5 + j * 145, 78.5, 72 - i * 12);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallNy[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallNy[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallNy[i].rotation.x = -Math.PI / 2;
    wallNy[i].name = "wallNy";
    wallNy[i].material.color = new THREE.Color(0xb78549);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallNy[count].position.set(-65 + j * 10, -78.5, -72 + i * 12);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallNy[count].position.set(-70 + j * 10, -78.5, -66 + i * 12);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallNy[count].position.set(-72.5 + j * 145, -78.5, -72 + i * 12);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallPz[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallPz[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallPz[i].rotation.y = Math.PI;
    wallPz[i].name = "wallPz";
    wallPz[i].material.color = new THREE.Color(0xa1b749);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallPz[count].position.set(65 - j * 10, 72 - i * 12, 78.5);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallPz[count].position.set(70 - j * 10, 66 - i * 12, 78.5);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallPz[count].position.set(72.5 - j * 145, 72 - i * 12, 78.5);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallNz[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallNz[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallNz[i].name = "wallNz";
    wallNz[i].material.color = new THREE.Color(0x4949b7);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallNz[count].position.set(-65 + j * 10, 72 - i * 12, -78.5);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallNz[count].position.set(-70 + j * 10, 66 - i * 12, -78.5);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallNz[count].position.set(-72.5 + j * 145, 72 - i * 12, -78.5);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for (i = 0; i < wallPx.length; i++) {

    //pickables.push(wallPx[i], wallNx[i], wallPy[i], wallNy[i], wallPz[i], wallNz[i]);
    scene.add(wallPx[i], wallNx[i], wallPy[i], wallNy[i], wallPz[i], wallNz[i]);

  }

}
