
 window.onload = function () {
        var countrySel = $("#country");
        var stateSel = $("#state")
        var citySel = $("#city");

        // ..............Onchange country................................................................................................................
        $('#country').on("change", function () {

          stateSel.empty()
          citySel.empty()
          stateSel.append($("<option></option>")
            .attr("value", "")
            .text("----------------------"));


          citySel.append($("<option></option>")
            .attr("value", "")
            .text("Please select state first"));

          // console.log("country Id", jQuery('#country').val())
          // console.log("in onchange country")

          // Ajax call for select states by country id........................................
          var selectedCountry = $('#country').val()
          console.log("Selected Country Id:", selectedCountry)
          var request = $.ajax({
            url: 'http://127.0.0.1:8000/country/state',
            type: 'GET',
            data: { 'CountryId': selectedCountry },
            success: function (data) {
              if(data.length==0){
                stateSel.append($("<option></option>")
                .attr("value", "0")
                .text("No States are available"));
              }
              for (var i = 0; i < data.length; i++) {
                // console.log(data.length)
                // console.log(data[i].name)
                stateSel.append($("<option></option>")
                  .attr("value", data[i].id)
                  .text(data[i].name));

              }
              
              $("#displayCountry").text($("#country option:selected" ).text())
            }
          });
          $("#displayState").text('')
          $("#displayCity").text('')
        });

        // ..............Onchange state................................................................................................................
        $('#state').on("change", function () {
          citySel.empty()
          citySel.append($("<option></option>")
            .attr("value", "")
            .text("------------------------"));

          // console.log("State Id", jQuery('#state').val())
          // console.log("in onchange state")


          // Ajax call for select cities by state id........................................
          var selectedState = $('#state').val();
          console.log("Selected state Id:", selectedState)
          var request = $.ajax({
            url: 'http://127.0.0.1:8000/country/state/city',
            type: 'GET',
            data: { 'StateId': selectedState },

            success: function (data) {
              if(data.length==0){
                citySel.append($("<option></option>")
                .attr("value", "0")
                .text("No Cities are available"));
              }

              for (var i = 0; i < data.length; i++) {
                // console.log(data.length)
                // console.log(data[i].name)
                citySel.append($("<option></option>")
                  .attr("value", data[i].id)
                  .text(data[i].name));
              }
              $("#displayState").text($("#state option:selected" ).text())
            }
          });
          $("#displayCity").text('')
        });

        $('#city').on("change", function () {
          var selectedCity = $('#city').val();
          console.log("Selected city Id:", selectedCity)
          $("#displayCity").text($("#city option:selected" ).text())
        });

        $("#submit").click(function(){
          var country = $('#country option:selected').text();
          var state = $('#state option:selected').text();
          var city = $('#city option:selected').text();
          console.log(country)
          $('#displayCountry').text(country);
          $('#displayState').text(state);
          $('#displayCity').text(city);
        });
      
  }


