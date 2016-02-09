angular.module('Stars', [])

angular.module('Stars')
    .controller("MainController", ["$scope", function($scope){
        
        $scope.displayPlanet

        var planets = [
    {
        name : 'Mercury',
        description : "Mercury's eccentric orbit takes the small planet as close as 47 million km (29 million miles) and as far as 70 million km (43 million miles) from the sun. If one could stand on the scorching surface of Mercury when it is at its closest point to the sun, the sun would appear more than three times as large as it does when viewed from Earth."
    },
    {
        name : 'Venus',
        description : "Similar in structure and size to Earth, Venus' thick, toxic atmosphere traps heat in a runaway greenhouse effect. A permanent layer of clouds traps heat, creating surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus spins slowly in the opposite direction of most planets."
    },
    {
        name : 'Earth',
        description : "Earth, our home planet, is the only planet in our solar system known to harbor life - life that is incredibly diverse. All the things we need to survive exist under a thin layer of atmosphere that separates us from the cold, airless void of space."
    },
    {
        name : 'Mars',
        description : "Mars is a cold desert world. It is half the diameter of Earth and has the same amount of dry land. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons and weather, but its atmosphere is too thin for liquid water to exist for long on the surface. There are signs of ancient floods on Mars, but evidence for water now exists mainly in icy soil and thin clouds."
    },
    {
        name : 'Jupiter',
        description : "Jupiter, the most massive planet in our solar system -- with dozens of moons and an enormous magnetic field -- forms a kind of miniature solar system. Jupiter does resemble a star in composition, but it did not grow big enough to ignite. The planet's swirling cloud stripes are punctuated by massive storms such as the Great Red Spot, which has raged for hundreds of years."
    },
    {
        name : 'Saturn',
        description : "Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. All four gas giant planets have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like the other gas giants, Saturn is mostly a massive ball of hydrogen and helium."
    },
    {
        name : 'Uranus',
        description : "Uranus is the only giant planet whose equator is nearly at right angles to its orbit. A collision with an Earth-sized object may explain the unique tilt. Nearly a twin in size to Neptune, Uranus has more methane in its mainly hydrogen and helium atmosphere than Jupiter or Saturn. Methane gives Uranus its blue tint."
    },
    {
        name : 'Neptune',
        description : "Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system. More than 30 times as far from the sun as Earth, the planet takes almost 165 Earth years to orbit our sun. In 2011 Neptune completed its first orbit since its discovery in 1846. We see (Neptune) as Columbus saw America from the coast of Spain."
    },
]
        
var planetCam

var sRingsMesh
var nRingsMesh
    
    function init() {

        // var stats = initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, .1, 520000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer({antialias:true});

        orbit = new THREE.OrbitControls(camera, renderer.domElement);

        renderer.setClearColor(new THREE.Color(0x000000, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // create the ground plane
        var planeGeometry = new THREE.PlaneBufferGeometry(100, 100, 100, 100);
        var planeMaterial = new THREE.MeshLambertMaterial({color: "0xffffff"});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        // rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        // plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        // add the plane to the scene
        scene.add(plane);

        var scale = 6

        var imageDir = "/img/"

        var kuiperBelt = []
        var asteroidOrbitSpeeds = []
        var asteroidOrbitPoints = []

    var kuiperConstructor = function(){
        var size = Math.random() * 5
        var positiveOrNegX = Math.random()  
        var positiveOrNegZ = Math.random() 
        var scale = 3
        var sphereGeometry = new THREE.SphereGeometry( scale * size, 5, 5)
        var sphereMaterial = new THREE.MeshLambertMaterial()
        var asteroid = new THREE.Mesh(sphereGeometry, sphereMaterial)

        var asteroidLocX = positiveOrNegX >= 0.5 ? (Math.random() + 1) * 8000 : (Math.random() + 1) * -8000
        var asteroidLocZ = positiveOrNegZ >= 0.5 ? (Math.random() + 1) : (Math.random() + 1 ) 

        asteroid.position.x = asteroidLocX
        asteroid.position.y = 0
        asteroid.position.z = asteroidLocZ
        asteroid.castShadow = true

        kuiperBelt.push(asteroid)
        asteroidOrbitSpeeds.push(Math.random() + 1 * ((.1/20)))

        scene.add(asteroid)
    }

        // create a sun
        var sphereGeometry = new THREE.SphereGeometry(100, 90, 50);
        var sunTexture = THREE.ImageUtils.loadTexture(imageDir + "suntexture.jpg", THREE.SphericalReflectionMapping);
        var groundLayer = THREE.ImageUtils.loadTexture(imageDir + "sun.jpg")

        var sphereMaterial2 = new THREE.MeshBasicMaterial({map : groundLayer});
      
        var sphereMaterial = new THREE.MeshBasicMaterial({wireframe : false, opacity:0.4, transparent:true, envMap : sunTexture, overdraw:5000});
        var sun = new THREE.SceneUtils.createMultiMaterialObject(sphereGeometry, [ sphereMaterial2, sphereMaterial]);

        // position the sphere
        sun.position.x = 20;
        sun.position.y = 0
        sun.position.z = 0
        sun.castShadow = true;

        // add the sun to the scene
        scene.add(sun);

        // create a fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var mercuryOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the mercuryOrbitPoint planet
        mercuryOrbitPoint.position.x = 20;
        mercuryOrbitPoint.position.y = 0
        mercuryOrbitPoint.position.z = 0
        mercuryOrbitPoint.castShadow = true;

        // add the mercuryOrbitPoint planet to the scene
        scene.add(mercuryOrbitPoint);

        // create a second fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var marsOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the second fake planet
        marsOrbitPoint.position.x = 20;
        marsOrbitPoint.position.y = 0
        marsOrbitPoint.position.z = 0
        marsOrbitPoint.castShadow = true;

        // add the second fake planet to the scene
        scene.add(marsOrbitPoint);

        // create a third fake planet
        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var venusOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        venusOrbitPoint.position.x = 20;
        venusOrbitPoint.position.y = 0
        venusOrbitPoint.position.z = 0
        venusOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(venusOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var jupiterOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        jupiterOrbitPoint.position.x = 20;
        jupiterOrbitPoint.position.y = 0
        jupiterOrbitPoint.position.z = 0
        jupiterOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(jupiterOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var saturnOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        saturnOrbitPoint.position.x = 20;
        saturnOrbitPoint.position.y = 0
        saturnOrbitPoint.position.z = 0
        saturnOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(saturnOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var uranusOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        uranusOrbitPoint.position.x = 20;
        uranusOrbitPoint.position.y = 0
        uranusOrbitPoint.position.z = 0
        uranusOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(uranusOrbitPoint);

        var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
        var neptuneOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

        // position the third fake planet
        neptuneOrbitPoint.position.x = 20;
        neptuneOrbitPoint.position.y = 0
        neptuneOrbitPoint.position.z = 0
        neptuneOrbitPoint.castShadow = true;

        // add the second third planet to the scene
        scene.add(neptuneOrbitPoint);




        // create a second sphere
        var sphereGeometry2 = new THREE.SphereGeometry( scale * .3495, 20, 20);
        var mercuryTexture = THREE.ImageUtils.loadTexture(imageDir + "mercury.jpg")
        var sphereMaterial2 = new THREE.MeshLambertMaterial({map: mercuryTexture, overdraw: 5});
        var mercury = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

        // position the second sphere
        mercury.position.x = -83.2041 * 1.5;
        mercury.position.y = 3;
        mercury.position.z = 2;
        mercury.castShadow = true;

        // add the second sphere to the scene
        scene.add(mercury);

        // create venus
        var sphereGeometry3 = new THREE.SphereGeometry( scale * .8697, 20, 20);
        var venusTexture = THREE.ImageUtils.loadTexture(imageDir + "venus.jpg")
        var sphereMaterial3 = new THREE.MeshLambertMaterial({map : venusTexture});
        var venus = new THREE.Mesh(sphereGeometry3, sphereMaterial3);

        // position venus
        venus.position.x = -155.4599 * 1.5;
        venus.position.y = 3;
        venus.position.z = 2;
        venus.castShadow = true;

        venus.rotation.x = THREE.Math.degToRad(- 177.36);

        // add venus
        scene.add(venus);

        // create Earth
        var sphereGeometry4 = new THREE.SphereGeometry( scale * .9154, 20, 20);
        var earthTexture = THREE.ImageUtils.loadTexture(imageDir + "earth.jpg")
          var sphereMaterial4 = new THREE.MeshPhongMaterial({map: earthTexture});

        var bumpMap = THREE.ImageUtils.loadTexture(imageDir + "clouds.jpg");
            var sphereMaterialGroundEarth = new THREE.MeshBasicMaterial({map : bumpMap});
            var sphereMaterialBump = new THREE.MeshBasicMaterial({wireframe : false, opacity:0.5, transparent:true, map : bumpMap, overdraw:10});
       


        var earth = new THREE.SceneUtils.createMultiMaterialObject(sphereGeometry4, [sphereMaterial4, sphereMaterialBump]);
      


 // var sphereGeometry = new THREE.SphereGeometry(100, 90, 50);
 //        var sunTexture = THREE.ImageUtils.loadTexture(imageDir + "suntexture.jpg", THREE.SphericalReflectionMapping);
 //        var groundLayer = THREE.ImageUtils.loadTexture(imageDir + "sun.jpg")

 //        var sphereMaterial2 = new THREE.MeshBasicMaterial({map : groundLayer});
      
 //        var sphereMaterial = new THREE.MeshBasicMaterial({wireframe : false, opacity:0.4, transparent:true, envMap : sunTexture, overdraw:5000});
 //        var sun = new THREE.SceneUtils.createMultiMaterialObject(sphereGeometry, [ sphereMaterial2, sphereMaterial]);




        // position Earth
        earth.position.x = -214.49426 * 1.5;
        earth.position.y = 3;
        earth.position.z = 2;
        earth.castShadow = true;

        earth.rotation.x = THREE.Math.degToRad(- 23.4);

        // add Earth to the scene
        scene.add(earth);

        // create Earth Moon
        var sphereGeometry4 = new THREE.SphereGeometry( scale * .2154, 20, 20);
        var earthTexture = THREE.ImageUtils.loadTexture(imageDir + "moon.jpg")
        var sphereMaterial4 = new THREE.MeshPhongMaterial({map: earthTexture});
        var earthMoon = new THREE.Mesh(sphereGeometry4, sphereMaterial4);

        // position Earth Moon
        earthMoon.position.x = -232.99426 * 1.5;
        earthMoon.position.y = 3;
        earthMoon.position.z = 2;
        earthMoon.castShadow = true;

        // add Earth Moon to the scene
        scene.add(earthMoon);

        // create Mars
        var sphereGeometry5 = new THREE.SphereGeometry( scale * .4856, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "mars.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var mars = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Mars
        mars.position.x = -327.5002 * 1.5;
        mars.position.y = 3;
        mars.position.z = 2;
        mars.castShadow = true;

        mars.rotation.x = THREE.Math.degToRad(- 25.19);

        // add Mars
        scene.add(mars);

        // create Jupiter
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 10.2725, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "jupiter.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var jupiter = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Jupiter
        jupiter.position.x = -1118.2915 * 1.5;
        jupiter.position.y = 3;
        jupiter.position.z = 2;
        jupiter.castShadow = true;

        jupiter.rotation.x = THREE.Math.degToRad(- 3.13);

        // add Jupiter to the scene
        scene.add(jupiter);

// 

        for(var i = 0; i < 2000; i++){
            kuiperConstructor()

            var sphereGeometry = new THREE.SphereGeometry(1, 1, 1);
            var asteroidOrbitPoint = new THREE.Mesh(sphereGeometry, sphereMaterial);

            // position the second fake planet
            asteroidOrbitPoint.position.x = 20;
            asteroidOrbitPoint.position.y = 3;
            asteroidOrbitPoint.position.z = 2;
            asteroidOrbitPoint.castShadow = false;

            // add the second fake planet to the scene
            scene.add(asteroidOrbitPoint);

            asteroidOrbitPoints.push(asteroidOrbitPoint)
            


        }

        // create Saturn
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 8.3653, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "saturn.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var saturn = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Saturn
        saturn.position.x = -2053.7373 * 1.5;
        saturn.position.y = 3;
        saturn.position.z = 2;
        saturn.castShadow = true;

        saturn.rotation.x = THREE.Math.degToRad( - 26.7);

        // add Saturn
        scene.add(saturn);

        var loader = new THREE.TextureLoader();
        loader.load( imageDir + "saturnRings.png", function ( texture ) {
        var sRingsGeometry = new THREE.PlaneBufferGeometry( scale * 35, scale * 35, 30, 30 );
        var sRingsMaterial = new THREE.MeshBasicMaterial( { map: texture, opacity: 0.5, side: THREE.DoubleSide, overdraw: true, transparent: true, wireframe: false } );
        sRingsMesh = new THREE.Mesh( sRingsGeometry, sRingsMaterial );
        sRingsMesh.position.x = saturn.position.x;
        sRingsMesh.position.y = 3;
        sRingsMesh.position.z = 2;

        sRingsMesh.rotation.x = THREE.Math.degToRad( 90 - 26.7);

        scene.add( sRingsMesh )});

        // create Uranus
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 3.3723, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "uranus.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var uranus = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Uranus
        uranus.position.x = -4124.9879 * 1.5;
        uranus.position.y = 3;
        uranus.position.z = 2;
        uranus.castShadow = true;

        uranus.rotation.x = THREE.Math.degToRad(- 97.77);

        // add Uranus to the scene
        scene.add(uranus);

        // create Neptune
        var sphereGeometry5 = new THREE.SphereGeometry( scale * 3.4856, 20, 20);
        var marsTexture = THREE.ImageUtils.loadTexture(imageDir + "neptune.jpg")
        var sphereMaterial5 = new THREE.MeshLambertMaterial({map: marsTexture});
        var neptune = new THREE.Mesh(sphereGeometry5, sphereMaterial5);

        // position Neptune
        neptune.position.x = -4471.70 * 1.5 ;
        neptune.position.y = 3;
        neptune.position.z = 2;
        neptune.castShadow = true;

        neptune.rotation.x = THREE.Math.degToRad(- 28.32);

        // add Neptune to the scene
        scene.add(neptune);

        var loader = new THREE.TextureLoader();
        loader.load( imageDir + "neptunerings.png", function ( texture ) {
        var nRingsGeometry = new THREE.PlaneBufferGeometry( scale * 12, scale * 12, 30, 30 );
        var nRingsMaterial = new THREE.MeshBasicMaterial( { map: texture, opacity: 0.5, side: THREE.DoubleSide, overdraw: true, transparent: true, wireframe: false } );
        nRingsMesh = new THREE.Mesh( nRingsGeometry, nRingsMaterial );
        nRingsMesh.position.x = neptune.position.x;
        nRingsMesh.position.y = 3;
        nRingsMesh.position.z = 2;
        scene.add( nRingsMesh )});

        // position and point the camera to the center of the scene
        camera.position.x = 1;
        camera.position.y = 40;
        camera.position.z = 300;
        camera.lookAt(scene.position);

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight("#4D4D4D");
        scene.add(ambientLight);

        // add light source for the sun
        var light = new THREE.PointLight( "white", 1.5, 10000, 900);
        light.position.set( 50, 50, 25 );
        scene.add( light );

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        // call the render function
        var step = 0;

    

        var axes = new THREE.AxisHelper(100);
        scene.add( axes );
        
        var imagePrefix = imageDir + "starfield";
        // var directions  = ["right", "left", "top", "bottom", "front", "back"];
        var imageSuffix = ".png";
        var skyGeometry = new THREE.CubeGeometry( 300000, 300000, 300000 );   
        
        var materialArray = [];
        for (var i = 0; i < 6; i++)
            materialArray.push( new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture( imagePrefix + imageSuffix ),
                // between imagePrefix and imageSuffix add '+ direction[i]'
                // for six different unique photos with '-right' and '-left' etc in their filepaths
                side: THREE.BackSide
            }));
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        scene.add( skyBox );



        render();

        function render() {
            
            mercuryOrbitPoint.add(mercury)
            venusOrbitPoint.add(venus)
            sun.add(earthMoon)
            sun.add(earth)
            marsOrbitPoint.add(mars)
            jupiterOrbitPoint.add(jupiter)
            saturnOrbitPoint.add(saturn)
            saturnOrbitPoint.add(sRingsMesh)
            uranusOrbitPoint.add(uranus)
            neptuneOrbitPoint.add(neptune)
            neptuneOrbitPoint.add(nRingsMesh)
            
            // rotate earth 
            mercury.rotation.y += .1/20 / 175.9
            venus.rotation.y += .1/20 / 116.8            
            earth.rotation.y += .1/20
            earthMoon.rotation.y += .1/20
            mars.rotation.y += .1/20 * 1.03
            jupiter.rotation.y += .1/20 * .414
            saturn.rotation.y += .1/20 * .444
            uranus.rotation.y += .1/20 * .718
            neptune.rotation.y += .1/20 * .671
            jupiterOrbitPoint.rotation.y += (.1/20) * .434
            mercuryOrbitPoint.rotation.y += (.1/20) * 1.607 
            marsOrbitPoint.rotation.y += (.1/20) * .802 
            venusOrbitPoint.rotation.y += (.1/20) * 1.174
            
            saturnOrbitPoint.rotation.y += (.1/20) * .323
            uranusOrbitPoint.rotation.y += (.1/20) * .228
            neptuneOrbitPoint.rotation.y += (.1/20) * .0182

            var asteroidOrbit = function(){
                for(var i = 0; i < kuiperBelt.length; i ++){
                    asteroidOrbitPoints[i].rotation.y += (.1/20) * asteroidOrbitSpeeds[i]
                    asteroidOrbitPoints[i].add(kuiperBelt[i])
                }
            }

            $scope.sunCam = function(){
            console.log("sun cam")
            
            sun.add(camera)
        }

            $scope.mercuryCam = function(){
            console.log("mercury cam")
            
            mercury.add(camera)
        }

            $scope.venusCam = function(){
            console.log("venus cam")
            
            venus.add(camera)
        }

            $scope.earthCam = function(){
            console.log("earth cam")
            
            earth.add(camera)
        }

        $scope.marsCam = function(){
            console.log("mars cam")
            
            mars.add(camera)
        }

            $scope.jupiterCam = function(){
            console.log("jupiter cam")
            
            jupiter.add(camera)
        }

            $scope.saturnCam = function(){
            console.log("saturn cam")
            
            saturn.add(camera)
        }

            $scope.uranusCam = function(){
            console.log("uranus cam")
            
            uranus.add(camera)
        }

        $scope.neptuneCam = function(){
            console.log("neptune cam")
            
            neptune.add(camera)
        }


        // $scope.mercuryCam = function(){
        //  planetCam = mercury
        //  planetCam.add(camera)
        // }

            asteroidOrbit()

            // rotate sun
            sun.rotation.y += .1/20


            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
            orbit.update();
        }

        $scope.mercuryView = function(){
            $scope.displayPlanet = "Mercury"
            $scope.displayInfo = planets[0].description
        }

        $scope.venusView = function(){
            $scope.displayPlanet = "Venus"
            $scope.displayInfo = planets[1].description
        }

        $scope.earthView = function(){
            $scope.displayPlanet = "Earth"
            $scope.displayInfo = planets[2].description
        }

        $scope.marsView = function(){
            $scope.displayPlanet = "Mars"
            $scope.displayInfo = planets[3].description
        }

        $scope.jupiterView = function(){
            $scope.displayPlanet = "Jupiter"
            $scope.displayInfo = planets[4].description
        }

        $scope.saturnView = function(){
            $scope.displayPlanet = "Saturn"
            $scope.displayInfo = planets[5].description
        }

        $scope.uranusView = function(){
            $scope.displayPlanet = "Uranus"
            $scope.displayInfo = planets[6].description
        }

        $scope.neptuneView = function(){
            $scope.displayPlanet = "Neptune"
            $scope.displayInfo = planets[7].description
        }

    }
    window.onload = init;
    
    }])

