'use strict';

angular.module('mapavotosApp')

    .controller('MapaController', ['$scope', 'mapaFactory', function($scope, mapaFactory){
        
        var mymap = L.map('mapid').setView([-22.905556, -47.060833], 11);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 20,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap); 

        //Desenha os limites de Campinas na tela. Ref.:http://leafletjs.com/examples/geojson/
        $scope.coordCamp = mapaFactory.getCoordCamp();
        var myStyle = {
                "color": "#ff7800",
                "weight": 1,
                "opacity": 0.15
            };
        L.geoJSON($scope.coordCamp, {
                style: myStyle
            }).addTo(mymap);
        
        //--------------------------------------------
        
        $scope.message = "Mapa de Votos de Campinas";
        $scope.coordCamp = mapaFactory.getCoordCamp();
        $scope.votos = mapaFactory.getMapa();
        $scope.vereadores = mapaFactory.getVereadores();
        // *** vereador que será selecionado.
        $scope.verSelected = "";
        $scope.latitude = -22.905556;
        $scope.longitude = -22.905556;
        $scope.raio = 0;
        $scope.marker = [];
        $scope.circle = [];
        $scope.mostraescolas = false;
        $scope.i = 0;
        $scope.escolaIcon = L.icon({
                iconUrl: 'images/escola.png',
                shadowUrl: 'images/escola.png',
                iconSize:     [5, 4], // size of the icon
                shadowSize:   [0, 0] // size of the shadow
                
            });
        

        $scope.selVereador = function(){  
            /*$scope.latitude = $scope.latitude + 0.000003;
            var circle = L.circle([$scope.latitude, -47.060833], 500, {
    		color: 'red',
    		fillColor: '#f03',
    		fillOpacity: 0.5
			}).addTo(mymap);    */

            //for($scope.i=0; $scope.i<$scope.votos.length; $scope.i++){
            for($scope.i=0; $scope.i<$scope.votos.length-1; $scope.i++){
                $scope.latitude = parseFloat($scope.votos[$scope.i].latitude);
                $scope.longitude = parseFloat($scope.votos[$scope.i].longitude);
                
                $scope.raio = eval("$scope.votos["+$scope.i+"]"+".n"+$scope.verSelected);
                $scope.raio = $scope.raio * 3;
            
                $scope.circle[$scope.i] = L.circle([$scope.latitude, $scope.longitude], $scope.raio, {
    		      color: 'red',
    		      fillColor: '#f03',
                  weight: 1,
    		      fillOpacity: 0.2
			     }).addTo(mymap);
                $scope.circle[$scope.i].bindPopup($scope.votos[$scope.i].nome).openPopup();
                
            }     
        };
        
        $scope.limpaMapa = function(){
            for($scope.i=0; $scope.i<$scope.votos.length; $scope.i++){
                mymap.removeLayer($scope.marker[$scope.i]);
                mymap.removeLayer($scope.circle[$scope.i]);
            }
            
        };
        
        $scope.Escolas = function(){
            
            if($scope.mostraescolas){ 
                for($scope.i=0; $scope.i<$scope.votos.length; $scope.i++){
                    mymap.removeLayer($scope.marker[$scope.i]);
                } 
                $scope.mostraescolas = false;
            } else{
                for($scope.i=0; $scope.i<$scope.votos.length; $scope.i++){
                    $scope.latitude = parseFloat($scope.votos[$scope.i].latitude);
                    $scope.longitude = parseFloat($scope.votos[$scope.i].longitude);
                    $scope.marker[$scope.i] = L.marker([$scope.latitude, $scope.longitude]).addTo(mymap);
                }    
                $scope.mostraescolas = true;
            }
            
        };
            
    }]);