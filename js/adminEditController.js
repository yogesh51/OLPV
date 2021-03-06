
app.controller('adminEditController',[ '$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    
     $scope.options = [
      { id : '1', name: 'Open' },
      { id : '2', name: 'In-Progress' },
      { id : '3', name: 'Rejected' },
      { id : '4', name: 'Verified' },
      { id : '5', name: 'Closed' }
      ];
      
	$scope.id = $routeParams.id;
      
       $http.post('editUserdetails', $scope.id).success(function(response)
       {
              $scope.data = response;
         
       }).error(function(error)
            {
        alert(error);
    });
       
      $http.post('viewDoc', $scope.id).success(function(re){
     	  
     	 
     	  $scope.doc = re;
     	
     	  
       }).error(function(error)
               {
           alert(error);
       });
      
      
       
       $scope.submit = function(){
    	  $scope.isRejected=false;
    	   
    	   $scope.data.status.statusId = $scope.status;
    	   
    		   
    		   if($scope.data.status.statusId == 3)
        	   {	
        	   		
     			   $scope.isRejected=true;
        	   		
        	   		
        	   } else {
        		  
        		   $scope.isRejected=false;
        	   }
     	  	 
    	  
           $scope.data.comment = $scope.comment;
          
           
           $http.post('userdetails', $scope.data).success(function(response)
        	      {
        	   			$location.url('/admin');
        	  			
        	      }).error(function(error)
        	              {
        	          alert(error);
        	      });
    	   
    	      
          
       };
       
       $scope.comeback = function()
       {
    	   
    	   $location.url('/admin');
       }
      
}]);
