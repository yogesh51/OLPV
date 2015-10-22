		
app.controller('signUpController',[ '$scope', '$http', '$location', '$log', '$rootScope', '$timeout', function($scope, $http, $location, $log, $rootScope, $timeout) {
		
		$scope.doPwdMatch=function(){
			
			if(($scope.password2!=="" || $scope.password2!==undefined) && $scope.passwordd !== $scope.password2){
					$scope.pwdDonotMatch = true;
			}else
					$scope.pwdDonotMatch = false;
			}
		
			$scope.submit = function(){
					
				$scope.invalidUser=false;
					$scope.submitted= false;
	
							var formData = {
							email : $scope.email,
							userName : $scope.userName,
							password : $scope.password2	
					};
		
		
		$http.post('signup', formData ).success(function(response){
			if(response.userName==undefined)
				{
					$scope.invalidUser=true;
				}
			else{
			
					$('#myModal').modal('hide');
					$scope.submitted=true;
					$location.url('/homepage');
			
				}
			
			
		}).error(function(error){
		    
		     $('#myModal').modal('hide');
		    
		     });
		
	};
	
	$scope.options = [
	                  { id : '1', name: 'Admin' },
	                  { id : '2', name: 'User' }
	                 ];
	
	$scope.onLogin = function(){
		
		$scope.submitted= false;
		$scope.loger= false;
		$scope.Error= false;
		
			
		var formData1 = {
				userName : $scope.userName1,
				password : $scope.password1,
				role	 : {roleId:$scope.role, roleName:''}
		};
			
			$http.post('login', formData1 ).success(function(data){
				
				 $rootScope.userId = data.userId;
				
				   
				 if (data.userId == undefined)
					{	
					
								$location.url('/homepage');
								$scope.loger= true;
						
					}
				 
				
				 else if(data.userstatus.userstatusId == 1)
					 {
					
					 	
					 $location.url('/homepage');
					 $scope.Error= true;
					 
					 }
				
			else if(data.role.roleId == 1)
			{
					
					$location.url('/admin');
			}
		
			else
				{
			
				$http.post('checkforId',data).success(function(response)
						{
							
							if(response.id != null)
								
								{
								
								$location.url('/showdetailsforuser/'+ data.userId);
								}
							else {
								
								$location.url('/details/'+ data.userId);
							 	}
						});
				}
		});
		
	}
	
	$scope.checkId = function(id){
		
		$http.get('userdetails').then(function(response) {
			
		});
		
	};
	

$scope.forgot = function(){
		
		
		var formData1 = {
				email : $scope.email1
				
		};
			
		 $('#urModal').modal('hide');     
		
	};

}]);
