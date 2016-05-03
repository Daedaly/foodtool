$(document).ready(function() {

	var fbRef = new Firebase("https://brilliant-heat-3217.firebaseio.com/");
	
	$('p').hide();

<input type="button" value="reset" onclick="function getConfirmation(){
               var retVal = confirm("Are you sure you want to delete all data?");
               if( retVal == true ){
                  document.write ("Thank you. All data has been deleted. There are no recovery methods. Did you know, way back in time, with older computers, there were viruses with a smiley face? One was called Navidad.16896, and it was notorious for having a tiny smiley face while it deleted your data. ;)");
                  return true;
               }
            }" />

}


<input type="button" value="new" onclick="function getConfirmation(){
               var retVal = confirm("Do you want to submit all data? ");
               if( retVal == true ){
                  document.write ("Thank you. All data has been deleted. There are no recovery methods. Did you know, way back in time, with older computers, there were viruses with a smiley face? One was called Navidad.16896, and it was notorious for having a tiny smiley face while it deleted your data. ;)");
                  return true;
               }
            }" />

$(document).ready(function() {

	var clicks = 0;
	var name;
	var player;

	var setup = function (player, other) {
		fbRef.child(player + 'Clicks').on('value', function(snapshot) {
				clicks = snapshot.val();
				$('#clicks').text(clicks);
				if (clicks > 1100) {
					$("#winner").show();
					fbRef.child('winner').set(true);
				}
			});
			fbRef.child(other + 'mainT').on('value', function(snapshot) {
				clicks2 = snapshot.val();
				$('#clicks2').text(clicks2);
			});

			$('#cookie').click(function() {
				clicks = clicks + 1;
				$('#clicks').text(clicks);
				fbRef.child(player + 'Clicks').set(clicks);
			});
	}
