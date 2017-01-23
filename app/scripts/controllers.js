//'use strict';

angular.module('retratosApp')

        .controller('FotosController',['$scope', function($scope){
            $scope.fotoscasamento = [
                {
                    "id": 0,
                    "carousel": 0,
                    "name": "foto0",
                    "image": "../images/casamentos/casa03.jpg"      
                },
                {
                    "id": 1,
                    "carousel": 0,
                    "name": "foto1",
                    "image": "../images/casamentos/casa02.jpg"      
                },
                {
                    "id": 2,
                    "carousel": 0,
                    "name": "foto2",
                    "image": "../images/casamentos/casa04.jpg"      
                }
            ];
            
            
            $scope.fotosgestante = [
                {
                    "id": 0,
                    "carousel": 1,
                    "name": "foto0",
                    "image": "../images/gestante/gestante01.jpg"      
                },
                {
                    "id": 1,
                    "carousel": 1,
                    "name": "foto1",
                    "image": "../images/gestante/gestante02.jpg"      
                },
                {
                    "id": 2,
                    "carousel": 1,
                    "name": "foto2",
                    "image": "../images/gestante/gestante03.jpg"      
                },
                {
                    "id": 3,
                    "carousel": 1,
                    "name": "foto3",
                    "image": "../images/gestante/gestante04.jpg"      
                },
                {
                    "id": 4,
                    "carousel":1,
                    "name": "foto4",
                    "image": "../images/gestante/gestante05.jpg"      
                },
                {
                    "id": 5,
                    "carousel":1,
                    "name": "foto5",
                    "image": "../images/gestante/gestante06.jpg"      
                },
                {
                    "id": 6,
                    "carousel":1,
                    "name": "foto6",
                    "image": "../images/gestante/gestante07.jpg"      
                }
            ];
            
            $scope.fotosinfantil = [
                {
                    "id": 0,
                    "carousel": 2,
                    "name": "foto0",
                    "image": "../images/infantil/infantil01.jpg"      
                },
                {
                    "id": 1,
                    "carousel": 2,
                    "name": "foto1",
                    "image": "../images/infantil/infantil02.jpg"      
                },
                {
                    "id": 2,
                    "carousel": 2,
                    "name": "foto2",
                    "image": "../images/infantil/infantil03.jpg"      
                },
                {
                    "id": 3,
                    "carousel": 2,
                    "name": "foto3",
                    "image": "../images/infantil/infantil04.jpg"      
                },
                {
                    "id": 4,
                    "carousel": 2,
                    "name": "foto4",
                    "image": "../images/infantil/infantil05.jpg"      
                },
                {
                    "id": 5,
                    "carousel": 2,
                    "name": "foto5",
                    "image": "../images/infantil/infantil06.jpg"      
                },
                {
                    "id": 6,
                    "carousel": 2,
                    "name": "foto6",
                    "image": "../images/infantil/infantil07.jpg"      
                }
            ];
            
            $scope.fotosfotojornalismo = [
                {
                    "id": 0,
                    "carousel": 2,
                    "name": "foto0",
                    "image": "../images/fotojornalismo/fotojornalismo01.jpg"      
                },
                {
                    "id": 1,
                    "carousel": 2,
                    "name": "foto1",
                    "image": "../images/fotojornalismo/fotojornalismo02.jpg"      
                },
                {
                    "id": 2,
                    "carousel": 2,
                    "name": "foto2",
                    "image": "../images/fotojornalismo/fotojornalismo03.jpg"      
                },
                {
                    "id": 3,
                    "carousel": 2,
                    "name": "foto3",
                    "image": "../images/fotojornalismo/fotojornalismo04.jpg"      
                },
                {
                    "id": 4,
                    "carousel": 2,
                    "name": "foto4",
                    "image": "../images/fotojornalismo/fotojornalismo05.jpg"      
                },
                {
                    "id": 5,
                    "carousel": 2,
                    "name": "foto5",
                    "image": "../images/fotojornalismo/fotojornalismo06.jpg"      
                },
                {
                    "id": 6,
                    "carousel": 2,
                    "name": "foto6",
                    "image": "../images/fotojornalismo/fotojornalismo07.jpg"      
                }
            ];
            
        }])



        .controller('ContactController', ['$scope', '$http', function($scope, $http) {
            
            $scope.user = {id:0, mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            $scope.user.nome = "";
            $scope.user.fone = "";
            $scope.user.email = "";
            $scope.user.mensagem = "";
                    
            $scope.sendEmail = function() {
                        
               console.log("Iniciando envio de e-mail");
                    
                    //==================== Enviando o e-mail
                    
                $http({
                        //url: 'http://localhost/retratos/mail.php',
                        //url:'http://www.retratosdointerior.com.br/mail.php',
                        url: 'mail.php',
                        method: 'POST',
                        data: {
                            'nome': $scope.user.nome,
                            'email': $scope.user.email,
                            'fone': $scope.user.fone,
                            'mensagem': $scope.user.mensagem,
                        },
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                }).
                success(function (data){
                    $scope.success = true;
                    $scope.user = {};
                }).
                error(function (data) {
                    $scope.error = true;
                    
                }); 
                //==============
                $scope.user.nome = "";
                $scope.user.fone = "";
                $scope.user.email = "";
                $scope.user.mensagem = "";
                $scope.feedbackForm.$setPristine();
                console.log($scope.user.nome);
                
            };
        }])
;
