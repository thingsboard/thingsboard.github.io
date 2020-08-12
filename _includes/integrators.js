{% capture containerId %}{{include.containerId}}{% endcapture %}
{% capture integratorsType %}{{include.type}}{% endcapture %}
{% capture integrators %}{% include integrators.json %}{% endcapture %}
{% capture rgn %}{% include rgn.json %}{% endcapture %}

function selectType(type, country) {
  var containerId = "{{ containerId }}";
  var integrators = {{ integrators }};
  var targetContainer = document.getElementById(containerId);
  targetContainer.innerHTML = '';
  if (country == "All countries") {
    var integratorsByType = integrators.filter(function (integrator) {
      return integrator.type.includes(type) || integrator.type.includes("Worldwide");
    });
  } else {
    var integratorsByType = integrators.filter(function (integrator) {
      return integrator.country.includes(country) || (integrator.country.includes("") && integrator.type.includes(type));
    });
  }

  if (integratorsByType == ""){
  if (document.getElementById('integratorsContainer') != null) {
  document.getElementById('integratorsContainer').id = 'integratorsContainerEmpty';
  }
  $('#integratorsContainerEmpty').html("</br><p>Coming soon</p></br>");
  } else {
  integratorsByType.forEach(function (obj) { targetContainer.appendChild(createBox(obj)) });
  }
}

function createBox(integrator) {
   var box = document.createElement('div');
   box.className = 'integrator-box';

   var titleElement = document.createElement('p');
   titleElement.textContent = integrator.name;
   titleElement.className = 'title';

   box.appendChild(titleElement);

   if (integrator.contact.href){
     var Contact = document.createElement('div');

     var textContact = document.createElement('span');
     textContact.textContent = 'Contact Us: ';

     var linkContact = document.createElement('a');
     if (integrator.contact.href.includes("@")){
     linkContact.href = 'mailto:' + integrator.contact.href + '?subject=Introduction request';
     }
     linkContact.textContent = integrator.contact.href;
     linkContact.className = 'links';
     box.appendChild(Contact);
     Contact.appendChild(textContact);
     Contact.appendChild(linkContact);
   }

   if (integrator.site.href){
     var Site = document.createElement('div');
     var textSite = document.createElement('span');
     textSite.textContent = 'Visit us at: ';

     var linkSite = document.createElement('a');
     linkSite.href = 'http://www.' + integrator.site.href;
     linkSite.textContent = integrator.site.href;
     linkSite.target = integrator.site.target;
     linkSite.className = 'links';
     box.appendChild(Site);
     Site.appendChild(textSite);
     Site.appendChild(linkSite);
   }

   return box;
}

function PushIndex(f) {
  r = $( "#region option:selected" ).text();
  c = $( "#country option:selected" ).text();
  if (document.getElementById('integratorsContainerEmpty') != null) {
  document.getElementById('integratorsContainerEmpty').id = 'integratorsContainer';
  }
  selectType(r,c);
}

(function () {
 var integratorsType = "{{ integratorsType }}";
 selectType(integratorsType);
})();

function ajax() {
  var json = {{ rgn }};
  return new Promise(function(res) {
    return res(json);
  });
}
var $selectRegion = $('#region');
var $selectCountry = $('#country');
ajax().then(function(data) {
  $selectRegion.html('');
  $selectRegion.append(data.rgn.map(function (val, key) {
    if (key == 0) {
      return '<option id="' + val.region + '" value="' + key + '" disabled="disabled">' + val.region + '</option>';
    } else {
      return '<option id="' + val.region + '" value="' + key + '">' + val.region + '</option>';
    }
  }));
  $selectRegion.on('change', function () {
    var index = $(this).val();
    $selectCountry.empty()
      .append(data.rgn[index].country.map(function (val) {
        return '<option id="' + val.cntr + '">' + val.cntr + '</option>';
    }));
  }).change();
  $selectRegion.on('change', function() {
      if ($(this).val() == '0'){
          $('#Search').attr('disabled', 'disabled');
          $('#country').attr('disabled', 'disabled');
      } else if ($(this).val() == '8'){
          $('#Search').removeAttr('disabled');
          $('#country').attr('disabled', 'disabled');
      } else {
         $('#Search').removeAttr('disabled');
         $('#country').removeAttr('disabled');
      }
  });
});

function Map(m)
{
    if (document.getElementById('integratorsContainerEmpty') != null) {
    document.getElementById('integratorsContainerEmpty').id = 'integratorsContainer';
    }
    $('#Search').removeAttr('disabled');
    $('#country').removeAttr('disabled');
    document.location.href = "/partners/local/#distributors";
    selectType(m,"All countries");
    var optionElement = document.getElementById('region').options.namedItem(m);
    optionElement.selected = 'true';
    ajax().then(function(data) {
        var index = optionElement.value;
                $selectCountry.empty()
                  .append(data.rgn[index].country.map(function (val) {
                    return '<option id="' + val.cntr + '">' + val.cntr + '</option>';
                }));
    });
}

function Empty()
{
    var optionElement = document.getElementById('region').options.namedItem('-- Region --');
       optionElement.selected = 'true';
    ajax().then(function(data) {
        var index = optionElement.value;
                $selectCountry.empty()
                  .append(data.rgn[index].country.map(function (val) {
                    return '<option id="' + val.cntr + '">' + val.cntr + '</option>';
                }));
    });
    $('#integratorsContainerEmpty').html("<object data='/images/partners/search-icon.svg'></object></br><p>Select a region using the map or the finder</p>");
}
